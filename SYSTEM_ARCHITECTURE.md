# AISCO System Architecture Documentation

## Overview
AISCO (Angola Iron and Steel Corporation) is a full-stack web application for a steel manufacturing company, built with React (TypeScript), Vite, Express.js, and MySQL. The application showcases the company's products, manufacturing processes, quality certifications, and provides contact/quote request functionality.

---

## Technology Stack

### Frontend
- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 7.1.10
- **Routing**: React Router DOM 6.8.1
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React
- **Internationalization**: Google Translate (integrated via script)
- **Animation**: Custom CSS animations + Intersection Observer API

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 5.1.0
- **Database**: MySQL2 3.15.3
- **CORS**: cors 2.8.5
- **Environment**: dotenv

### Development Tools
- **Linting**: ESLint 9.9.1 with TypeScript ESLint
- **Type Checking**: TypeScript 5.5.3
- **CSS Processing**: PostCSS with Autoprefixer

---

## Project Structure

```
AISCO/
├── src/                          # Frontend source code
│   ├── main.tsx                  # Application entry point
│   ├── App.tsx                   # Main app component with routing
│   ├── index.css                 # Global styles and animations
│   ├── pages/                    # Page components
│   │   ├── Home.tsx              # Homepage (landing page)
│   │   ├── About.tsx             # About page
│   │   ├── Products.tsx          # Products page
│   │   ├── Manufacturing.tsx     # Manufacturing process page
│   │   ├── Quality.tsx           # Quality & certifications page
│   │   ├── Contact.tsx           # Contact page
│   │   └── RequestQuote.tsx      # Quote request page
│   ├── components/               # Reusable components
│   │   ├── Header.tsx            # Navigation header with language switcher
│   │   ├── Footer.tsx            # Footer with company info
│   │   ├── ErrorBoundary.tsx     # Error handling wrapper
│   │   ├── PageLoader.tsx        # Page loading screen
│   │   ├── LoadingScreen.tsx     # Initial loading screen
│   │   ├── Loader.tsx            # Generic loader component
│   │   ├── LanguageSwitcher.tsx  # EN/PT language switcher
│   │   ├── InteractiveMap.tsx    # Google Maps integration
│   │   ├── about/                # About page sections (10 components)
│   │   ├── products/             # Products page sections (8 components)
│   │   ├── manufacturing/        # Manufacturing page sections (10 components)
│   │   ├── quality/              # Quality page sections (8 components)
│   │   ├── contact/              # Contact page sections (7 components)
│   │   ├── quote/                # Quote request sections (6 components)
│   │   └── [Homepage sections]   # Homepage-specific sections (11 components)
│   └── hooks/
│       └── useInView.ts          # Intersection Observer hook for animations
├── public/                       # Static assets (images, PDFs, videos)
├── dist/                         # Production build output
├── server.cjs                    # Express.js backend server
├── package.json                  # Dependencies and scripts
├── vite.config.ts                # Vite configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── eslint.config.js              # ESLint configuration
└── [Documentation files]         # Various .md deployment guides

```

---

## Application Architecture

### Frontend Architecture

#### Entry Point (`main.tsx`)
- Initializes React root
- Adds `notranslate` class temporarily to prevent Google Translate interference during React render
- Wraps app in `StrictMode` for development warnings

#### Routing (`App.tsx`)
- Uses React Router for client-side routing
- Routes:
  - `/` → Home page
  - `/about` → About page
  - `/products` → Products page
  - `/manufacturing` → Manufacturing page
  - `/quality` → Quality page
  - `/contact` → Contact page
  - `/request-quote` → Quote request page
- Wrapped in `ErrorBoundary` for error handling

#### Page Structure Pattern
All pages follow a consistent pattern:
1. **PageLoader**: Shows loading animation on initial load
2. **Header**: Sticky navigation header (present on all pages)
3. **Page-specific sections**: Multiple components for content
4. **Footer**: Company information and links

#### Component Organization

**Shared Components:**
- `Header.tsx`: Sticky navigation with mobile menu, language switcher, contact info
- `Footer.tsx`: Company info, quick links, contact details, social media
- `ErrorBoundary.tsx`: Catches React errors, handles Google Translate DOM conflicts
- `PageLoader.tsx`: Animated loading screen with progress bar
- `LanguageSwitcher.tsx`: EN/PT language toggle using Google Translate API
- `InteractiveMap.tsx`: Google Maps component for location display

**Homepage Sections** (`Home.tsx`):
1. HeroSection - Image carousel with CTA buttons
2. AboutSection - Company overview with statistics
3. VisionMissionSection - Company vision, mission, values
4. ProductsSection - Product showcase
5. ManufacturingSection - Manufacturing process overview
6. QualitySection - Quality certifications and features
7. SustainabilitySection - CSR initiatives
8. ClientsSection - Client testimonials
9. SupportSection - Customer support info
10. ContactSection - Quick contact form

**About Page** (`About.tsx`):
- AboutHero, WhoWeAre, Leadership, VisionMission, CoreValues, ManufacturingFacility, QualityCertifications, SustainabilityCSR, ClientsTestimonials, ContactCTA

**Products Page** (`Products.tsx`):
- ProductsHero, ProductOverview, ProductSpecifications, ManufacturingProcess, ProductCertifications, TechnicalDownloads, ProductApplications, ProductInquiry

**Manufacturing Page** (`Manufacturing.tsx`):
- ManufacturingHero, ProcessOverview, MeltingRefining, ContinuousCasting, RollingMill, ProductionMetrics, QualityControl, AutomationTechnology, ManufacturingIntelligence, ManufacturingCTA

**Quality Page** (`Quality.tsx`):
- QualityHero, QualityPhilosophy, CertificationsCompliance, TraceabilitySystem, LaboratoryTesting, MechanicalChemicalProperties, QualityProcessFlow, QualityCTA

**Contact Page** (`Contact.tsx`):
- ContactHero, OfficeLocation, ContactForm, DepartmentContacts, SocialChannels, VisitUsSection, FinalCTA

**Quote Request Page** (`RequestQuote.tsx`):
- QuoteHero, QuoteForm, WhyChooseAISCO, ContactAssistance, ProjectGallery, ThankYouCTA

---

### Backend Architecture (`server.cjs`)

#### Server Configuration
- **Port**: 4000 (configurable via `PORT` env variable)
- **Host**: 0.0.0.0 (listens on all interfaces for VPS deployment)
- **Environment**: Development/Production aware
- **CORS**: Configured for production with environment-based origins
- **Proxy Trust**: Enabled for nginx reverse proxy

#### Database Connection
- **Database**: MySQL (`aisco`)
- **Connection**: mysql2 with connection pooling
- **Configuration**: Environment variables (MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE)

#### API Endpoints

1. **POST `/api/quote`**
   - Stores quote requests in `quote_requests` table
   - Fields: fullName, companyName, countryCode, phoneNumber, whatsappCountryCode, whatsappNumber, emailAddress, projectLocation, productType, quantityRange, requiredDiameter (array converted to comma-separated), deliveryRequired, deliveryLocation, projectTimeline, message, agreeToTerms

2. **POST `/api/contact`**
   - Stores contact inquiries in `contact_inquiries` table
   - Fields: fullName, company, countryCode, phone, email, subject, message, agreeToPrivacy

3. **POST `/api/inquiry`**
   - Stores product inquiries in `quote_requests` table (maps to quote_requests structure)
   - Fields: name, email, company, phone, projectType, rebarDiameter, quantity, deliveryLocation, timeline, message

4. **GET `/api/health`**
   - Health check endpoint
   - Returns: `{ status: 'ok', timestamp: ISO string }`

#### Database Schema (Inferred from server.cjs)

**`quote_requests` table:**
- id (auto-increment primary key)
- fullName
- companyName
- countryCode
- phoneNumber
- whatsappCountryCode
- whatsappNumber
- emailAddress
- projectLocation
- productType
- quantityRange
- requiredDiameter (TEXT, stores comma-separated values)
- deliveryRequired (BOOLEAN)
- deliveryLocation
- projectTimeline
- message
- agreeToTerms (BOOLEAN)
- createdAt (TIMESTAMP)

**`contact_inquiries` table:**
- id (auto-increment primary key)
- fullName
- company
- countryCode
- phone
- email
- subject
- message
- agreeToPrivacy (BOOLEAN)
- createdAt (TIMESTAMP)

---

## Key Features

### 1. Internationalization (i18n)
- **Google Translate Integration**: Embedded via script tag in `index.html`
- **Languages**: English (EN) and Portuguese (PT)
- **Implementation**: 
  - Language switcher component with cookie-based persistence
  - Page reload required for translation (prevents React/Google Translate DOM conflicts)
  - Extensive CSS to hide Google Translate UI elements

### 2. Form Handling
- **Contact Form** (`ContactForm.tsx`): Full contact form with subject selection, country code selection
- **Quote Form** (`QuoteForm.tsx`): Comprehensive quote request with product specifications, delivery options
- **Product Inquiry** (`ProductInquiry.tsx`): Simplified inquiry form for product-specific questions
- All forms:
  - Client-side validation
  - Async submission to backend API
  - Success/error state handling
  - Loading states during submission

### 3. Animations & UX
- **Intersection Observer**: `useInView` hook for scroll-triggered animations
- **Custom CSS Animations**: 
  - Scroll animations
  - Fade-in effects
  - Steel-themed glow effects
  - Floating particles
  - Rotating loaders
- **Page Transitions**: Loading screens with progress bars

### 4. Responsive Design
- **Mobile-First**: Tailwind CSS responsive utilities
- **Breakpoints**: sm, md, lg, xl
- **Mobile Menu**: Hamburger menu for mobile navigation
- **Responsive Grids**: Grid layouts adapt to screen size

### 5. Styling System
- **Tailwind CSS**: Utility-first CSS framework
- **Custom Colors**: Brand colors (#0890C6 - blue, orange accents)
- **Custom Animations**: Defined in `index.css`
- **Steel Theme**: Industrial design with metallic effects

---

## Build & Development

### Development Mode
```bash
npm run dev        # Starts Vite dev server (port 5173)
npm run server     # Starts Express backend (port 4000)
```

**Vite Proxy Configuration:**
- In development, Vite proxies `/api/*` requests to `http://localhost:4000`
- Frontend runs on `http://localhost:5173`
- Backend runs on `http://localhost:4000`

### Production Build
```bash
npm run build      # Builds frontend to dist/
npm run preview    # Preview production build locally
```

**Build Configuration:**
- Output directory: `dist/`
- Code splitting: Vendor chunk (react, react-dom, react-router-dom)
- Source maps: Disabled
- Asset optimization: Automatic

### Environment Variables

**Frontend (.env):**
- `VITE_API_URL`: API base URL (optional, defaults to empty string in production, localhost:4000 in dev)
- `VITE_GOOGLE_MAPS_API_KEY`: Google Maps API key

**Backend (.env):**
- `PORT`: Server port (default: 4000)
- `HOST`: Server host (default: 0.0.0.0)
- `NODE_ENV`: Environment (development/production)
- `MYSQL_HOST`: Database host
- `MYSQL_USER`: Database user
- `MYSQL_PASSWORD`: Database password
- `MYSQL_DATABASE`: Database name
- `CLIENT_URL`: CORS allowed origin
- `SERVE_STATIC`: Enable static file serving (true/false)

---

## Deployment

### Production Deployment Options
1. **VPS with Nginx** (Recommended)
   - Nginx as reverse proxy
   - PM2 for process management
   - MySQL database
   - SSL/HTTPS support
   - See `DEPLOY_VPS.md` for full guide

2. **Static Hosting** (Frontend only)
   - Can deploy `dist/` to any static host
   - Forms won't function without backend

### Deployment Configuration
- **Nginx**: Reverse proxy for API routes (`/api/*` → backend:4000)
- **Static Files**: Served directly by Nginx
- **PM2**: Process manager for Node.js backend
- **SSL**: Let's Encrypt certificates via Certbot

---

## API Integration

### Frontend → Backend Communication

**API Base URL Logic:**
```typescript
const API_BASE_URL = import.meta.env.VITE_API_URL || 
  (import.meta.env.PROD ? '' : 'http://localhost:4000');
```

- **Development**: Uses `http://localhost:4000` or Vite proxy
- **Production**: Uses relative paths (empty string) so nginx handles routing

**Request Format:**
- Method: POST
- Headers: `Content-Type: application/json`
- Body: JSON object with form data

**Response Format:**
- Success: `{ success: true, id: <insertId> }`
- Error: `{ error: "<error message>" }`

---

## Styling & Theming

### Color Palette
- **Primary Blue**: #0890C6
- **Secondary**: Blue-600, Blue-700
- **Accent**: Orange-500 (for gradients)
- **Text**: Gray scale (gray-700, gray-900)
- **Background**: White, gray-50, blue-50

### Custom CSS Classes
- `.animate-scroll`: Infinite horizontal scroll
- `.animate-fadeIn`: Fade-in animation
- `.animate-steel-glow`: Pulsing glow effect
- `.animate-float-up`: Floating particle animation
- `.steel-texture`: Diagonal line pattern background
- `.notranslate`: Prevents Google Translate from translating

### Typography
- **Headings**: Bold, large sizes (text-4xl, text-5xl)
- **Body**: Regular weight, readable sizes (text-lg, text-base)
- **Font Stack**: System fonts (Tailwind default)

---

## Google Translate Integration

### Implementation Details
- **Script**: Loaded in `index.html` from Google's CDN
- **Initialization**: `googleTranslateElementInit()` function
- **Languages**: English and Portuguese only
- **Cookie-based**: Uses `googtrans` cookie for language persistence
- **Reload Required**: Page reloads when language changes (prevents DOM conflicts)

### Styling & Hiding
- Extensive CSS rules to hide Google Translate UI elements
- Banner, tooltips, and hover effects are hidden
- Custom language switcher UI instead of default Google UI

---

## Error Handling

### Frontend
- **ErrorBoundary**: Catches React component errors
- **API Errors**: Try-catch blocks in form submissions
- **User Feedback**: Error messages displayed to users
- **Google Translate Conflicts**: Auto-reload on DOM manipulation errors

### Backend
- **Database Errors**: 500 status code with error message
- **Connection Errors**: Process exits if DB connection fails
- **Validation**: Basic validation in form endpoints

---

## Performance Optimizations

1. **Code Splitting**: Vendor chunk separation
2. **Image Optimization**: External image hosting (Pexels) + local assets
3. **Lazy Loading**: Images and components loaded on scroll
4. **CSS Optimization**: Tailwind purges unused CSS
5. **Bundle Optimization**: Vite's built-in optimizations

---

## Security Considerations

1. **Environment Variables**: Sensitive data in .env (not committed)
2. **CORS**: Configured for specific origins in production
3. **SQL Injection**: Parameterized queries (prepared statements)
4. **XSS**: React's built-in XSS protection
5. **HTTPS**: SSL/HTTPS recommended for production

---

## Known Limitations

1. **No Email Service**: Forms submit to database only, no email notifications
2. **Google Translate Dependency**: Requires internet connection for translation
3. **No Admin Panel**: Database must be accessed directly for form submissions
4. **No Authentication**: Backend endpoints are public (should add auth for production)
5. **No Rate Limiting**: Forms can be spammed (should add rate limiting)

---

## Future Enhancements

1. Email notification system for form submissions
2. Admin dashboard for viewing submissions
3. Authentication and authorization
4. Rate limiting for API endpoints
5. Full i18n library instead of Google Translate
6. Image optimization and CDN
7. SEO improvements (meta tags, structured data)
8. Analytics integration
9. A/B testing capabilities
10. Content Management System (CMS) integration

---

## File Count Summary

- **Pages**: 7
- **Components**: 67 total
  - Shared: 11
  - About: 10
  - Products: 8
  - Manufacturing: 10
  - Quality: 8
  - Contact: 7
  - Quote: 6
  - Homepage sections: 11
- **Hooks**: 1
- **Config Files**: 6
- **Documentation**: 11 markdown files

---

## Dependencies Summary

### Production Dependencies (Frontend)
- react, react-dom, react-router-dom
- lucide-react (icons)
- axios (HTTP client - if used)

### Production Dependencies (Backend)
- express
- mysql2
- cors
- dotenv

### Development Dependencies
- vite
- @vitejs/plugin-react
- typescript
- tailwindcss, postcss, autoprefixer
- eslint, typescript-eslint
- @types/react, @types/react-dom

---

This documentation provides a comprehensive overview of the entire AISCO system architecture, components, and functionality.
