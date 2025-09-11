/**
 * Analytics Configuration
 * Google Analytics and GTM integration with placeholders
 */

export interface AnalyticsConfig {
  GTM_ID: string;
  GA_MEASUREMENT_ID: string;
}

export const ANALYTICS_CONFIG: AnalyticsConfig = {
  GTM_ID: import.meta.env.VITE_GTM_ID || 'GTM-XXXXXXX',
  GA_MEASUREMENT_ID: import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXX'
};

/**
 * Initialize Google Tag Manager
 */
export function initializeGTM(): void {
  if (typeof window === 'undefined' || ANALYTICS_CONFIG.GTM_ID === 'GTM-XXXXXXX') {
    console.log('GTM not initialized - placeholder ID detected');
    return;
  }

  // GTM script injection
  (function(w: any, d: Document, s: string, l: string, i: string) {
    w[l] = w[l] || [];
    w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
    const f = d.getElementsByTagName(s)[0];
    const j = d.createElement(s) as HTMLScriptElement;
    const dl = l !== 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode?.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', ANALYTICS_CONFIG.GTM_ID);
}

/**
 * Initialize Google Analytics
 */
export function initializeGA(): void {
  if (typeof window === 'undefined' || ANALYTICS_CONFIG.GA_MEASUREMENT_ID === 'G-XXXXXXX') {
    console.log('GA not initialized - placeholder ID detected');
    return;
  }

  // GA4 script injection
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // gtag configuration
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(arguments);
  }
  (window as any).gtag = gtag;

  gtag('js', new Date());
  gtag('config', ANALYTICS_CONFIG.GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href
  });
}

/**
 * Track page views
 */
export function trackPageView(path: string, title?: string): void {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', ANALYTICS_CONFIG.GA_MEASUREMENT_ID, {
      page_path: path,
      page_title: title || document.title
    });
  }
}

/**
 * Track custom events
 */
export function trackEvent(eventName: string, parameters: Record<string, any> = {}): void {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters);
  }
  
  // Development logging
  console.log('Analytics event:', eventName, parameters);
}

/**
 * Track form submissions
 */
export function trackFormSubmission(formName: string, success: boolean = true): void {
  trackEvent('form_submission', {
    form_name: formName,
    success: success,
    timestamp: new Date().toISOString()
  });
}

/**
 * Track newsletter signups
 */
export function trackNewsletterSignup(email: string): void {
  trackEvent('newsletter_signup', {
    user_email: email,
    timestamp: new Date().toISOString()
  });
}