# SEO Implementation Guide - AISCO Website

## Overview
Complete SEO optimization has been implemented for the AISCO website with dynamic meta tags, sitemap, robots.txt, and .htaccess configuration.

## Files Created/Modified

### 1. SEO Hook (`src/hooks/useSEO.ts`)
- Custom React hook for managing SEO meta tags dynamically
- Updates title, description, keywords, Open Graph, Twitter Card, and canonical URLs
- Automatically updates meta tags when pages change

### 2. Page SEO Implementation
All pages now include SEO metadata:
- **Home** (`src/pages/Home.tsx`) - Primary landing page with comprehensive keywords
- **About** (`src/pages/About.tsx`) - Company information and history
- **Products** (`src/pages/Products.tsx`) - Steel products and specifications
- **Manufacturing** (`src/pages/Manufacturing.tsx`) - Production process details
- **Quality** (`src/pages/Quality.tsx`) - Quality assurance and certifications
- **Contact** (`src/pages/Contact.tsx`) - Contact information
- **Request Quote** (`src/pages/RequestQuote.tsx`) - Quote request page

### 3. Sitemap (`public/sitemap.xml`)
- XML sitemap listing all pages
- Includes priority, change frequency, and last modification dates
- Located at: `https://aisco.ao/sitemap.xml`
- Automatically copied to `dist/` during build

### 4. Robots.txt (`public/robots.txt`)
- Search engine crawling instructions
- Points to sitemap location
- Located at: `https://aisco.ao/robots.txt`
- Automatically copied to `dist/` during build

### 5. .htaccess (`public/.htaccess`)
- Apache server configuration for SEO and performance
- Features:
  - HTTPS redirect
  - React Router support (SPA routing)
  - Gzip compression
  - Browser caching headers
  - Security headers (X-Frame-Options, XSS Protection, etc.)
  - Cache control for static assets
- Automatically copied to `dist/` during build

## SEO Features Implemented

### Meta Tags per Page
Each page includes:
- **Title Tag**: Unique, descriptive, keyword-rich (50-60 characters)
- **Meta Description**: Compelling, informative (150-160 characters)
- **Meta Keywords**: Comprehensive keyword list relevant to each page
- **Open Graph Tags**: For social media sharing (Facebook, LinkedIn, etc.)
- **Twitter Card Tags**: Optimized Twitter sharing
- **Canonical URL**: Prevents duplicate content issues
- **Robots Meta**: Index/follow instructions

### Keywords Strategy
Keywords target:
- Primary: AISCO, Angola Iron and Steel Corporation
- Products: Grade A500 NR, reinforcing steel bars, construction steel
- Industry: Steel manufacturing, steel industry Angola
- Location: Angola, construction Angola
- Technical: Steel specifications, quality certifications, manufacturing process

## Build Process

### Automatic File Copying
Vite automatically copies files from `public/` to `dist/` during build:
```bash
npm run build
```

This ensures:
- `sitemap.xml` → `dist/sitemap.xml`
- `robots.txt` → `dist/robots.txt`
- `.htaccess` → `dist/.htaccess`
- All static assets → `dist/`

### No Build Configuration Changes Needed
The default Vite configuration handles static file copying automatically.

## Deployment Checklist

1. ✅ Build the project: `npm run build`
2. ✅ Verify files in `dist/` directory:
   - `dist/sitemap.xml`
   - `dist/robots.txt`
   - `dist/.htaccess`
   - `dist/index.html`
3. ✅ Upload `dist/` contents to web server
4. ✅ Verify .htaccess is active (Apache servers)
5. ✅ Test sitemap accessibility: `https://aisco.ao/sitemap.xml`
6. ✅ Test robots.txt: `https://aisco.ao/robots.txt`
7. ✅ Verify meta tags using browser dev tools or SEO tools
8. ✅ Submit sitemap to Google Search Console
9. ✅ Submit sitemap to Bing Webmaster Tools

## SEO Best Practices Applied

1. **Unique Titles & Descriptions**: Each page has unique, relevant content
2. **Keyword Optimization**: Natural keyword placement, no keyword stuffing
3. **Structured Data Ready**: Foundation for schema markup (can be added later)
4. **Mobile Friendly**: Viewport meta tag included
5. **Fast Loading**: Compression and caching configured
6. **Security Headers**: XSS protection, clickjacking prevention
7. **Canonical URLs**: Prevents duplicate content
8. **Social Media Optimization**: Open Graph and Twitter Cards
9. **Search Engine Friendly**: robots.txt and sitemap.xml
10. **HTTPS Ready**: .htaccess includes HTTPS redirect

## Testing SEO

### Tools to Use:
1. **Google Search Console**: Submit sitemap, monitor indexing
2. **Google Rich Results Test**: Test structured data
3. **PageSpeed Insights**: Check performance
4. **Mobile-Friendly Test**: Verify mobile optimization
5. **Schema.org Validator**: Test structured data (if added)
6. **Facebook Sharing Debugger**: Test Open Graph tags
7. **Twitter Card Validator**: Test Twitter Card tags

### Manual Checks:
- View page source to verify meta tags
- Test page titles in browser tabs
- Check social media link previews
- Verify sitemap.xml is accessible
- Confirm robots.txt is working

## Maintenance

### Update Sitemap
When adding new pages:
1. Add new `<url>` entry to `public/sitemap.xml`
2. Update `lastmod` date
3. Set appropriate `priority` (0.0 - 1.0)
4. Set `changefreq` (always, hourly, daily, weekly, monthly, yearly, never)

### Update Meta Tags
To change SEO content for a page:
1. Edit the page component (e.g., `src/pages/Home.tsx`)
2. Update the `useSEO` hook parameters
3. Rebuild and deploy

### Update .htaccess
- Modify `public/.htaccess` for server configuration changes
- Test on staging before production deployment

## Notes

- **Base URL**: All absolute URLs use `https://aisco.ao/`
- **Image URLs**: Open Graph images use absolute URLs
- **React Router**: .htaccess configured for SPA routing
- **Dynamic Meta Tags**: Meta tags update automatically on route changes
- **Server Requirements**: .htaccess requires Apache server (use nginx config for Nginx servers)

## Future Enhancements

Consider adding:
1. **Schema.org Structured Data**: JSON-LD for rich snippets
2. **Breadcrumbs**: Navigation breadcrumbs with structured data
3. **FAQ Schema**: For frequently asked questions
4. **Product Schema**: For product pages
5. **Local Business Schema**: For location-based SEO
6. **Blog/News Schema**: If adding a blog section
7. **Image Optimization**: WebP format, lazy loading
8. **Core Web Vitals**: Further performance optimization

