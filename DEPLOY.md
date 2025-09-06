# ByTheBrands Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Import the project
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Add environment variables (see .env.example)
6. Deploy

### Option 2: Netlify
1. Connect repository or drag-n-drop the `dist` folder
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables from .env.example
5. Deploy

### Option 3: Manual Hosting
1. Run `npm ci && npm run build`
2. Upload contents of `dist/` folder to your web hosting
3. Ensure your server serves index.html for all routes (SPA routing)

## Environment Variables

Set these in your hosting platform:

```
MAILCHIMP_FORM_ACTION=your-mailchimp-endpoint
GTM_ID=your-google-tag-manager-id
GA_MEASUREMENT_ID=your-google-analytics-id
CONTACT_WEBHOOK=your-contact-form-webhook
AFFILIATE_TRACKER=BYTHEBRANDS
```

## Production Checklist

- [ ] Environment variables configured
- [ ] Analytics tracking verified
- [ ] Contact forms working
- [ ] Affiliate links functional
- [ ] Newsletter signup active
- [ ] SEO meta tags verified
- [ ] Performance optimized