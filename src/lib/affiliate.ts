/**
 * Affiliate Link Management
 * Handles all outbound product and brand links with tracking
 */

export interface AffiliateLink {
  url: string;
  brandName: string;
  productName?: string;
  category?: string;
}

export const AFFILIATE_CONFIG = {
  TRACKER_ID: process.env.AFFILIATE_TRACKER || 'BYTHEBRANDS',
  BASE_PARAM: 'aff_id',
  FALLBACK_URL: 'https://affiliate-placeholder.com'
};

/**
 * Creates an affiliate link with tracking parameters
 */
export function createAffiliateLink({
  url,
  brandName,
  productName,
  category
}: AffiliateLink): string {
  try {
    // Use placeholder URL if no real URL provided
    const targetUrl = url === 'AFFILIATE_URL_PLACEHOLDER' 
      ? AFFILIATE_CONFIG.FALLBACK_URL 
      : url;
    
    const affiliateUrl = new URL(targetUrl);
    
    // Add affiliate tracking parameters
    affiliateUrl.searchParams.set(AFFILIATE_CONFIG.BASE_PARAM, AFFILIATE_CONFIG.TRACKER_ID);
    affiliateUrl.searchParams.set('source', 'bythebrands');
    affiliateUrl.searchParams.set('brand', brandName.toLowerCase());
    
    if (productName) {
      affiliateUrl.searchParams.set('product', productName.toLowerCase().replace(/\s+/g, '-'));
    }
    
    if (category) {
      affiliateUrl.searchParams.set('category', category.toLowerCase());
    }
    
    // Add timestamp for tracking
    affiliateUrl.searchParams.set('utm_source', 'bythebrands');
    affiliateUrl.searchParams.set('utm_medium', 'website');
    affiliateUrl.searchParams.set('utm_campaign', 'product_click');
    
    return affiliateUrl.toString();
  } catch (error) {
    console.error('Error creating affiliate link:', error);
    return AFFILIATE_CONFIG.FALLBACK_URL;
  }
}

/**
 * Track affiliate click for analytics
 */
export function trackAffiliateClick({
  brandName,
  productName,
  category
}: Omit<AffiliateLink, 'url'>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'affiliate_click', {
      brand: brandName,
      product: productName || 'brand_page',
      category: category || 'unknown',
      value: 1
    });
  }
  
  // Also track to console for development
  console.log('Affiliate click tracked:', { brandName, productName, category });
}

/**
 * Helper for brand page affiliate links
 */
export function createBrandLink(brandName: string, category?: string): string {
  return createAffiliateLink({
    url: 'AFFILIATE_URL_PLACEHOLDER',
    brandName,
    category
  });
}

/**
 * Helper for product page affiliate links
 */
export function createProductLink(
  brandName: string, 
  productName: string, 
  category?: string
): string {
  return createAffiliateLink({
    url: 'AFFILIATE_URL_PLACEHOLDER',
    brandName,
    productName,
    category
  });
}