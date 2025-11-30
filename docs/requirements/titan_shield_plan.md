# Titan Shield Website Migration Plan
**From WordPress → Next.js 14 (Secure, Modern Stack)**

> **Status:** Ready for Claude Code Implementation  
> **Timeline:** 4-6 weeks  
> **Priority:** Security-first, then SEO, then features

---

## 📋 Executive Summary

This plan outlines the complete migration of titanshield.ps from WordPress to a modern, secure Next.js application. The primary drivers are:

1. **Security hardening** - Eliminate WordPress vulnerabilities
2. **UI consistency** - Fix navbar inconsistencies across pages
3. **Performance** - Achieve <2s load times
4. **SEO optimization** - Improve search rankings
5. **Maintainability** - Component-based architecture

---

## 1. Objectives & Success Criteria

### Primary Objectives

✅ **Security-First Architecture**
- Remove WordPress core + plugin attack surface
- Minimize dynamic endpoints (only secure contact form)
- Implement comprehensive security headers
- Pass OWASP top 10 security checks
- **Success metric:** Zero critical vulnerabilities in security audit

✅ **Consistent UI/UX**
- Single shared layout: same Navbar + Footer on every page
- Eliminate the navbar inconsistency issue from current site
- **Success metric:** 100% consistency across all pages

✅ **SEO Optimized**
- Fast static pages (SSG where possible)
- Proper meta tags, Open Graph, Twitter Cards
- Structured data (JSON-LD)
- Automatic sitemap generation
- **Success metric:** Lighthouse SEO score ≥95

✅ **Mobile Responsive**
- Mobile-first design approach
- Touch-friendly UI (min 44px tap targets)
- Optimized for all breakpoints (320px - 2560px)
- **Success metric:** Perfect mobile usability score

✅ **Maintainable & Scalable**
- Component-based architecture
- TypeScript for type safety
- Clear documentation
- Easy to add new services/pages
- **Success metric:** New page added in <1 hour

---

## 2. Technology Stack (Enhanced)

### Core Framework
```
Framework:     Next.js 14+ (App Router)
Language:      TypeScript (strict mode)
Styling:       Tailwind CSS v3.4+
UI Components: shadcn/ui (optional, for consistency)
Icons:         Lucide React
```

### Development Tools
```
Package Manager: npm/pnpm (pnpm preferred for speed)
Linting:        ESLint + Prettier
Git Hooks:      Husky (pre-commit checks)
Testing:        Vitest (unit) + Playwright (E2E)
```

### Deployment & Infrastructure
```
Hosting:        Vercel (recommended) or Netlify
Edge/CDN:       Cloudflare (DNS + WAF + DDoS protection)
Domain:         titanshield.ps (existing)
TLS:            Cloudflare Universal SSL (auto)
```

### Third-Party Services
```
Contact Form:   Next.js API Route + Resend.com (email delivery)
Analytics:      Google Analytics 4 (privacy-conscious setup)
Monitoring:     Vercel Analytics + Sentry (error tracking)
CAPTCHA:        Cloudflare Turnstile (privacy-friendly, free)
```

### Optional (Future Enhancements)
```
CMS:           Sanity.io or Contentful (if client wants self-editing)
Search:        Algolia or Meilisearch (for blog/docs if needed)
Forms:         FormSpree or Netlify Forms (alternative to custom API)
```

---

## 3. Information Architecture

### Site Map (Complete)

```
/                                  # Home
├── /about                        # About Us
├── /services                     # Services Overview
│   ├── /offensive-security       # Red Team & Pen Testing
│   ├── /consulting-compliance    # Consulting & Compliance
│   ├── /managed-security         # MSSP
│   ├── /infrastructure-protection # Technical Security
│   ├── /training                 # Cyber Awareness Training
│   └── /endpoint-security        # Endpoint & Mobile Security
├── /contact                      # Contact Us
├── /pricing                      # Pricing Plans (if needed)
├── /blog                         # Blog (optional, future)
│   └── /blog/[slug]             # Individual blog posts
├── /privacy-policy               # Privacy Policy
├── /terms-service               # Terms of Service
├── /documentation               # Documentation (if needed)
├── /sitemap.xml                 # Auto-generated
└── /robots.txt                  # SEO configuration
```

### Page Priority (Development Order)

**Phase 1 - Core:**
1. Layout (Navbar + Footer)
2. Home page
3. Contact page

**Phase 2 - Services:**
4. Services overview
5. Individual service pages (6 pages)

**Phase 3 - Supporting:**
6. About Us
7. Privacy Policy & Terms

**Phase 4 - Optional:**
8. Pricing
9. Blog (if needed)

---

## 4. Component Architecture

### 4.1 Layout Structure

```typescript
app/
├── layout.tsx                    # Root layout (Navbar + Footer wrapper)
│   ├── <Navbar />               # Consistent across ALL pages
│   ├── <main>{children}</main>  # Page content
│   └── <Footer />               # Consistent across ALL pages
```

### 4.2 Shared Components Library

**Navigation & Layout:**
- `Navbar` - Responsive navigation with mobile menu
- `Footer` - Contact info, quick links, social media
- `Container` - Max-width wrapper (1280px)
- `Breadcrumb` - Navigation path indicator

**Content Sections:**
- `HeroSection` - Page hero with gradient backgrounds
- `SectionHeading` - Consistent section titles
- `ServiceCard` - Service preview cards
- `FeatureList` - Icon + text feature lists
- `Accordion` - Expandable content sections
- `StatsGrid` - Metrics display (e.g., "100% Tactical Defense")

**Interactive Elements:**
- `CTAButton` - Primary/secondary call-to-action buttons
- `CTABox` - Right-side service CTAs
- `ContactForm` - Secure contact form with validation
- `NewsletterForm` - Email subscription form

**Media & Content:**
- `OptimizedImage` - Next.js Image wrapper with proper sizing
- `IconWrapper` - Consistent icon styling
- `GradientBackground` - Reusable purple gradient backgrounds

**Utilities:**
- `SocialLinks` - Social media icon links
- `LoadingSpinner` - Loading states
- `ErrorBoundary` - Error handling wrapper

### 4.3 Component Design Principles

1. **Single Responsibility** - Each component does one thing well
2. **Reusability** - Components used across multiple pages
3. **Type Safety** - All props properly typed with TypeScript
4. **Accessibility** - WCAG 2.1 AA compliant
5. **Performance** - Lazy loading where appropriate

---

## 5. Security Architecture (Enhanced)

### 5.1 Static Site Benefits

- **Minimal attack surface** - No database, no admin panel
- **No WordPress vulnerabilities** - Eliminate 95% of common web attacks
- **Fast updates** - Deploy security patches via git push

### 5.2 Security Layers

#### Layer 1: Cloudflare (Edge Protection)
```
✓ DDoS protection (automatic)
✓ WAF rules (OWASP Core Ruleset)
✓ Bot management
✓ Rate limiting (per IP)
✓ TLS 1.3 encryption
✓ DNSSEC
```

#### Layer 2: Application Security (Next.js)
```
✓ HTTP Security Headers (see below)
✓ CSRF protection (built-in)
✓ XSS prevention (React escaping)
✓ SQL injection impossible (no database)
✓ Input validation (Zod schemas)
✓ Environment variable protection
```

#### Layer 3: API Route Security (Contact Form)
```
✓ Rate limiting (100 requests/hour per IP)
✓ CAPTCHA verification (Cloudflare Turnstile)
✓ Input sanitization (DOMPurify)
✓ Email validation (RFC 5322 compliant)
✓ Honeypot field (spam prevention)
✓ Request size limits (max 10KB)
```

### 5.3 Security Headers Configuration

```typescript
// next.config.ts
const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "connect-src 'self' https://challenges.cloudflare.com",
      "frame-src https://challenges.cloudflare.com"
    ].join('; ')
  }
];
```

### 5.4 Contact Form API Implementation

```typescript
// app/api/contact/route.ts
import { z } from 'zod';
import { rateLimit } from '@/lib/rate-limit';
import { verifyCaptcha } from '@/lib/captcha';
import { sanitizeInput } from '@/lib/sanitize';

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(5).max(200),
  message: z.string().min(10).max(2000),
  captchaToken: z.string(),
  honeypot: z.string().max(0), // Should be empty
});

export async function POST(request: Request) {
  // Rate limiting
  const limiter = await rateLimit(request);
  if (!limiter.success) {
    return new Response('Too many requests', { status: 429 });
  }

  // Parse and validate
  const body = await request.json();
  const result = contactSchema.safeParse(body);
  
  if (!result.success) {
    return new Response('Invalid input', { status: 400 });
  }

  // Verify CAPTCHA
  const captchaValid = await verifyCaptcha(result.data.captchaToken);
  if (!captchaValid) {
    return new Response('CAPTCHA verification failed', { status: 400 });
  }

  // Honeypot check
  if (result.data.honeypot) {
    return new Response('Success', { status: 200 }); // Fake success for bots
  }

  // Sanitize inputs
  const sanitized = {
    name: sanitizeInput(result.data.name),
    email: result.data.email.toLowerCase().trim(),
    subject: sanitizeInput(result.data.subject),
    message: sanitizeInput(result.data.message),
  };

  // Send email via Resend
  await sendEmail(sanitized);

  return new Response('Success', { status: 200 });
}
```

---

## 6. SEO Strategy (Enhanced)

### 6.1 On-Page SEO

**Meta Tags (Every Page):**
```typescript
export const metadata: Metadata = {
  title: 'Page Title - Titan Shield',
  description: 'Compelling description under 160 chars',
  keywords: ['cybersecurity', 'palestine', 'red team', 'pen testing'],
  authors: [{ name: 'Titan Shield' }],
  openGraph: {
    title: 'Page Title',
    description: 'Description',
    type: 'website',
    url: 'https://titanshield.ps/page',
    images: ['/og-image.jpg'],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Title',
    description: 'Description',
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://titanshield.ps/page',
  },
};
```

### 6.2 Structured Data (JSON-LD)

**Organization Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Titan Shield",
  "url": "https://titanshield.ps",
  "logo": "https://titanshield.ps/logo.png",
  "description": "Leading cybersecurity firm in Palestine",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4th Floor, Hamayal Center, Office No. 3",
    "addressLocality": "Al-Bireh",
    "addressCountry": "PS"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+970-562-420000",
    "contactType": "Customer Service",
    "email": "info@titanshield.ps"
  },
  "sameAs": [
    "https://facebook.com/titanshield",
    "https://linkedin.com/company/titanshield",
    "https://instagram.com/titanshield"
  ]
}
```

**Service Schema (Per Service Page):**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Red Team Operations",
  "provider": {
    "@type": "Organization",
    "name": "Titan Shield"
  },
  "description": "Professional red team and penetration testing services",
  "areaServed": "Palestine"
}
```

### 6.3 Technical SEO

- **Sitemap:** Auto-generated with `next-sitemap`
- **Robots.txt:** Properly configured
- **Canonical URLs:** Every page has canonical tag
- **Mobile-friendly:** Passes Google Mobile-Friendly Test
- **Page Speed:** Core Web Vitals in "Good" range
- **SSL/HTTPS:** Enforced via Cloudflare
- **Image Optimization:** WebP format, proper alt text, lazy loading

---

## 7. Implementation Plan (Detailed)

### Phase 0: Project Setup & Environment (Week 1)

**Tasks:**
1. ☐ Initialize Next.js 14 project with TypeScript
   ```bash
   npx create-next-app@latest titan-shield --typescript --tailwind --app --eslint
   ```
2. ☐ Configure Tailwind CSS with custom theme
   - Add Titan Shield brand colors
   - Configure dark theme as default
   - Add custom fonts if needed
3. ☐ Set up Git repository
   - Create GitHub/GitLab repo
   - Add `.gitignore` for Next.js
   - Configure branch protection rules
4. ☐ Install essential dependencies
   ```bash
   npm install lucide-react zod react-hook-form @hookform/resolvers
   npm install -D @types/node prettier eslint-config-prettier
   ```
5. ☐ Configure ESLint + Prettier
6. ☐ Set up Husky for pre-commit hooks
7. ☐ Create project documentation structure

**Deliverables:**
- ✅ Working Next.js dev environment
- ✅ Git repo with initial commit
- ✅ README with setup instructions

---

### Phase 1: Global Layout & Design System (Week 1-2)

**Tasks:**

**1.1 Create Design Tokens**
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#7C3AED',
          dark: '#0F172A',
          gray: '#1E293B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
```

**1.2 Build Core Components**
- ☐ `Container` component (max-width wrapper)
- ☐ `Button` component (primary, secondary, ghost variants)
- ☐ Typography components (H1-H6, Body, Small)

**1.3 Build Navbar**
- ☐ Desktop layout (logo + horizontal nav)
- ☐ Mobile layout (hamburger menu)
- ☐ Smooth transitions
- ☐ Active state highlighting
- ☐ Accessibility (keyboard navigation, ARIA labels)

**1.4 Build Footer**
- ☐ Three-column layout (Palestine, Quick Links, Resources)
- ☐ Social media icons
- ☐ Copyright notice
- ☐ Responsive design (stack on mobile)

**1.5 Integrate into Root Layout**
```typescript
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

**Testing Checklist:**
- ✅ Navbar appears same on all pages
- ✅ Footer appears same on all pages
- ✅ Mobile menu works correctly
- ✅ Links navigate properly
- ✅ Responsive at all breakpoints

**Deliverables:**
- ✅ Consistent layout across all pages
- ✅ Component library documentation

---

### Phase 2: Core Pages - Static Content (Week 2-3)

#### 2.1 Home Page (`/`)

**Sections to Build:**
1. ☐ Hero Section
   - Large headline with gradient text
   - Subtitle
   - Primary CTA button
   - Purple gradient background

2. ☐ About Preview
   - "The Titans of Cybersecurity" heading
   - Description paragraph
   - Three value propositions (icons + text)

3. ☐ Services Grid
   - 6 service cards
   - Icon + title + description + "Read More" link
   - Hover effects
   - Grid layout (3 columns desktop, 2 tablet, 1 mobile)

4. ☐ Why Titan Section
   - "Comprehensive Protection Strategies" heading
   - 4 stat cards with metrics

5. ☐ Newsletter Section
   - Heading
   - Email input + Subscribe button
   - Form validation (client-side only for now)

**Testing:**
- ✅ All sections responsive
- ✅ Images optimized
- ✅ Links work correctly
- ✅ Lighthouse score >90

#### 2.2 Services Overview Page (`/services`)

**Sections:**
1. ☐ Hero section with title
2. ☐ Breadcrumb (Home / Services)
3. ☐ Service grid (6 cards, same as homepage but full-page)
4. ☐ Each card links to individual service page

#### 2.3 Individual Service Pages (6 pages)

**Template Structure:**
1. ☐ Hero with service name + background
2. ☐ Breadcrumb (Home / Services / Service Name)
3. ☐ Two-column layout:
   - Left: Main content
   - Right: CTA box ("Provide Services", "Shield Up", etc.)
4. ☐ Service description section
5. ☐ Accordion/dropdown features list
6. ☐ "Overview Benefits" section
7. ☐ Image block (relevant cybersecurity image)

**Pages to Create:**
- ☐ `/services/offensive-security` - Red Team & Pen Testing
- ☐ `/services/consulting-compliance` - Consulting & Compliance
- ☐ `/services/managed-security` - MSSP
- ☐ `/services/infrastructure-protection` - Technical Security
- ☐ `/services/training` - Cyber Awareness Training
- ☐ `/services/endpoint-security` - Endpoint & Mobile Security

**Content Migration:**
- Extract content from WordPress
- Reformat for Next.js markdown/components
- Optimize images

**Deliverables:**
- ✅ Home page fully functional
- ✅ Services overview page
- ✅ 6 individual service pages
- ✅ All content migrated from WordPress

---

### Phase 3: About & Contact Pages (Week 3)

#### 3.1 About Us Page (`/about`)

**Sections:**
1. ☐ Hero section
2. ☐ Breadcrumb
3. ☐ Founder's Message
   - Text + image card
4. ☐ "The Titans of Cybersecurity" section
5. ☐ Team section (if applicable)
   - Sami Elsheikh profile card
6. ☐ "Why Titan" protection strategies
7. ☐ Newsletter section

#### 3.2 Contact Us Page (`/contact`)

**Sections:**
1. ☐ Hero section
2. ☐ Contact info cards (3 cards):
   - Location (with map icon)
   - Phone numbers
   - Email & website
3. ☐ Contact form (static for now)
   - Fields: Name, Email, Phone, Subject, Message
   - Client-side validation
   - "Summon The Titans" button
   - Note: API integration in Phase 4

**Deliverables:**
- ✅ About page complete
- ✅ Contact page with static form

---

### Phase 4: Contact Form API & Security (Week 4)

#### 4.1 Contact API Route

**Create:** `app/api/contact/route.ts`

**Implementation Steps:**
1. ☐ Set up Zod schema for validation
2. ☐ Implement rate limiting
   - Create `lib/rate-limit.ts`
   - Use in-memory store or Redis
   - Limit: 100 requests/hour per IP
3. ☐ Add CAPTCHA verification
   - Install Cloudflare Turnstile
   - Add widget to form
   - Verify token server-side
4. ☐ Implement email sending
   - Set up Resend.com account
   - Configure API key in environment variables
   - Create email template
5. ☐ Add honeypot field (hidden spam trap)
6. ☐ Sanitize inputs with DOMPurify
7. ☐ Add error handling and logging

**Environment Variables:**
```env
RESEND_API_KEY=re_xxxxx
CONTACT_EMAIL_TO=info@titanshield.ps
CLOUDFLARE_TURNSTILE_SECRET=xxxxx
```

#### 4.2 Form Integration

1. ☐ Connect form to API endpoint
2. ☐ Add loading states
3. ☐ Add success/error messages
4. ☐ Add client-side validation with react-hook-form
5. ☐ Test thoroughly (happy path + error cases)

**Testing Checklist:**
- ✅ Form submits successfully
- ✅ Email received at info@titanshield.ps
- ✅ Rate limiting works
- ✅ CAPTCHA required
- ✅ Validation errors shown correctly
- ✅ Loading states work
- ✅ Spam blocked by honeypot

**Deliverables:**
- ✅ Fully functional contact form
- ✅ Email delivery working
- ✅ Security measures in place

---

### Phase 5: SEO & Performance Optimization (Week 4-5)

#### 5.1 Metadata Implementation

**For Each Page:**
1. ☐ Add metadata exports
2. ☐ Configure Open Graph tags
3. ☐ Add Twitter Card tags
4. ☐ Set canonical URLs
5. ☐ Add appropriate keywords

**Example:**
```typescript
// app/services/offensive-security/page.tsx
export const metadata: Metadata = {
  title: 'Red Team & Penetration Testing - Titan Shield',
  description: 'Professional offensive security services...',
  // ... full metadata
};
```

#### 5.2 Structured Data

1. ☐ Add Organization schema to layout
2. ☐ Add Service schema to each service page
3. ☐ Add LocalBusiness schema
4. ☐ Validate with Google's Rich Results Test

#### 5.3 Sitemap & Robots

1. ☐ Install `next-sitemap`
   ```bash
   npm install next-sitemap
   ```
2. ☐ Configure `next-sitemap.config.js`
3. ☐ Generate sitemap.xml
4. ☐ Create robots.txt
5. ☐ Test accessibility via `/sitemap.xml`

#### 5.4 Image Optimization

1. ☐ Convert all images to WebP format
2. ☐ Create multiple sizes for responsive images
3. ☐ Add proper alt text to all images
4. ☐ Implement lazy loading for below-fold images
5. ☐ Use Next.js `<Image>` component everywhere

#### 5.5 Performance Tuning

1. ☐ Run Lighthouse audit
2. ☐ Optimize Core Web Vitals:
   - LCP (Largest Contentful Paint) < 2.5s
   - FID (First Input Delay) < 100ms
   - CLS (Cumulative Layout Shift) < 0.1
3. ☐ Enable Vercel Analytics
4. ☐ Purge unused Tailwind CSS
5. ☐ Minify and compress assets

**Target Lighthouse Scores:**
- Performance: ≥90
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥95

**Deliverables:**
- ✅ All pages have proper meta tags
- ✅ Sitemap generated and accessible
- ✅ Lighthouse scores meet targets
- ✅ Images optimized

---

### Phase 6: Security Hardening & Testing (Week 5)

#### 6.1 Security Headers

1. ☐ Configure security headers in `next.config.ts`
2. ☐ Test headers using securityheaders.com
3. ☐ Fix any issues

**Headers to Configure:**
- ✅ Strict-Transport-Security
- ✅ X-Frame-Options
- ✅ X-Content-Type-Options
- ✅ X-XSS-Protection
- ✅ Referrer-Policy
- ✅ Permissions-Policy
- ✅ Content-Security-Policy

#### 6.2 Cloudflare Setup

1. ☐ Add titanshield.ps to Cloudflare
2. ☐ Configure DNS records
3. ☐ Enable WAF with OWASP ruleset
4. ☐ Configure rate limiting rules
5. ☐ Enable bot protection
6. ☐ Set up DDoS protection
7. ☐ Enable DNSSEC
8. ☐ Configure TLS settings (min TLS 1.2)
9. ☐ Enable HSTS

#### 6.3 Environment Variables Security

1. ☐ Audit all environment variables
2. ☐ Ensure no secrets in git
3. ☐ Configure Vercel environment variables
4. ☐ Use different values for staging/production
5. ☐ Document all required env vars

#### 6.4 Security Testing

**Automated Scans:**
1. ☐ Run OWASP ZAP scan
2. ☐ Run Snyk vulnerability scan
3. ☐ Check dependencies with `npm audit`
4. ☐ Fix all high/critical issues

**Manual Testing:**
1. ☐ Test CAPTCHA bypass attempts
2. ☐ Test rate limiting
3. ☐ Test SQL injection (should be impossible)
4. ☐ Test XSS attacks
5. ☐ Test CSRF attacks
6. ☐ Verify no sensitive data in responses
7. ☐ Check for information disclosure

**Penetration Testing (Optional but Recommended):**
- ☐ Hire professional pen tester
- ☐ Or use Titan Shield's own red team!

**Deliverables:**
- ✅ All security headers configured
- ✅ Cloudflare fully configured
- ✅ Security scan report (no critical issues)
- ✅ Penetration test report (if conducted)

---

### Phase 7: Content Migration & QA (Week 6)

#### 7.1 Content Freeze

1. ☐ Agree on cutover date with client
2. ☐ Freeze WordPress content updates
3. ☐ Document freeze date

#### 7.2 Final Content Migration

1. ☐ Verify all pages migrated
2. ☐ Check all images present
3. ☐ Verify all links work
4. ☐ Proofread all content
5. ☐ Fix any typos or formatting issues

#### 7.3 URL Mapping & Redirects

**If URLs change:**
1. ☐ Create URL mapping spreadsheet
   ```
   Old URL                          → New URL
   /services/red-team/              → /services/offensive-security
   /cyber-defense/                  → /services/infrastructure-protection
   ```
2. ☐ Implement 301 redirects in `next.config.ts`
   ```typescript
   async redirects() {
     return [
       {
         source: '/services/red-team',
         destination: '/services/offensive-security',
         permanent: true,
       },
     ];
   }
   ```

#### 7.4 Cross-Browser Testing

**Test on:**
- ☐ Chrome (latest)
- ☐ Firefox (latest)
- ☐ Safari (latest)
- ☐ Edge (latest)
- ☐ Mobile Safari (iOS)
- ☐ Chrome Mobile (Android)

**Test:**
- ✅ All pages render correctly
- ✅ Forms work
- ✅ Navigation works
- ✅ Images load
- ✅ Responsive design works

#### 7.5 Accessibility Audit

1. ☐ Run axe DevTools scan
2. ☐ Test with screen reader (NVDA/JAWS)
3. ☐ Test keyboard navigation
4. ☐ Verify color contrast ratios
5. ☐ Fix all accessibility issues

**Target:** WCAG 2.1 AA compliance

#### 7.6 Final QA Checklist

**Functionality:**
- ✅ All links work (internal + external)
- ✅ Contact form sends emails
- ✅ Newsletter form works (if implemented)
- ✅ Mobile menu opens/closes
- ✅ All pages load correctly

**Content:**
- ✅ No lorem ipsum text
- ✅ All images have alt text
- ✅ No broken images
- ✅ No typos
- ✅ Contact info is correct

**SEO:**
- ✅ All pages have meta tags
- ✅ Sitemap is accessible
- ✅ Robots.txt is correct
- ✅ Google Search Console set up

**Performance:**
- ✅ Lighthouse scores meet targets
- ✅ Images optimized
- ✅ No console errors
- ✅ Fast load times

**Security:**
- ✅ HTTPS enforced
- ✅ Security headers present
- ✅ No sensitive data exposed
- ✅ CAPTCHA working

**Deliverables:**
- ✅ All content migrated
- ✅ Redirects configured
- ✅ QA testing complete
- ✅ Bug fixes implemented

---

### Phase 8: Deployment & Go-Live (Week 6)

#### 8.1 Pre-Deployment Checklist

1. ☐ All tests passing
2. ☐ No critical bugs
3. ☐ Staging environment approved
4. ☐ Backup WordPress site (just in case)
5. ☐ Client sign-off received

#### 8.2 Vercel Deployment

1. ☐ Connect Git repo to Vercel
2. ☐ Configure environment variables
3. ☐ Set up production domain (titanshield.ps)
4. ☐ Enable Vercel Analytics
5. ☐ Configure build settings
6. ☐ Deploy to production

#### 8.3 DNS Cutover

**Steps:**
1. ☐ Lower TTL on DNS records (24 hours before)
2. ☐ Update DNS to point to Vercel
   - A record: Vercel IP
   - CNAME for www: cname.vercel-dns.com
3. ☐ Verify DNS propagation
4. ☐ Test site on new domain
5. ☐ Restore normal TTL

#### 8.4 SSL/TLS Configuration

1. ☐ Verify SSL certificate issued
2. ☐ Test HTTPS enforcement
3. ☐ Check SSL Labs rating (target: A+)
4. ☐ Verify HSTS header

#### 8.5 Post-Launch Monitoring

**First 24 Hours:**
- ☐ Monitor error logs (Sentry)
- ☐ Check analytics (traffic levels)
- ☐ Verify contact form submissions
- ☐ Monitor Cloudflare analytics
- ☐ Check for any 404s
- ☐ Monitor page load times

**First Week:**
- ☐ Review Google Search Console
- ☐ Check for crawl errors
- ☐ Monitor Core Web Vitals
- ☐ Gather user feedback
- ☐ Fix any reported issues

#### 8.6 WordPress Decommission

**After 2 weeks of stable operation:**
1. ☐ Final WordPress backup
2. ☐ Archive WordPress site
3. ☐ Cancel WordPress hosting
4. ☐ Archive WordPress database

**Deliverables:**
- ✅ Site live on titanshield.ps
- ✅ SSL certificate active
- ✅ Monitoring set up
- ✅ No critical errors
- ✅ WordPress decommissioned

---

## 8. Post-Launch Plan

### 8.1 Maintenance Schedule

**Weekly:**
- Check for security updates
- Review error logs
- Monitor uptime

**Monthly:**
- Update dependencies
- Review analytics
- Performance audit

**Quarterly:**
- Security audit
- Content review
- SEO review

### 8.2 Documentation Deliverables

1. ☐ **README.md** - Setup and deployment instructions
2. ☐ **ARCHITECTURE.md** - System architecture overview
3. ☐ **SECURITY.md** - Security configuration details
4. ☐ **CONTENT_GUIDE.md** - How to update content
5. ☐ **COMPONENTS.md** - Component library documentation
6. ☐ **DEPLOYMENT.md** - Deployment procedures

### 8.3 Training (If Needed)

1. ☐ Train client on content updates
2. ☐ Train on using Vercel dashboard
3. ☐ Train on monitoring tools
4. ☐ Provide support contact info

---

## 9. Risk Management

### Potential Risks & Mitigation

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Content migration errors | High | Medium | Thorough QA, staging environment |
| DNS propagation issues | High | Low | Lower TTL early, test thoroughly |
| Email delivery failures | Medium | Low | Test with multiple email providers |
| Performance regressions | Medium | Medium | Continuous monitoring, Lighthouse CI |
| Security vulnerabilities | High | Low | Regular audits, automated scanning |
| SEO ranking drop | High | Medium | Proper redirects, maintain URL structure |
| Browser compatibility | Low | Low | Cross-browser testing |
| Cloudflare downtime | Medium | Very Low | Vercel provides backup |

---

## 10. Budget & Resources

### Estimated Costs (Monthly)

```
Vercel Pro:              $20/month
Cloudflare Pro:          $20/month (optional, can use free tier)
Resend.com:             $0-20/month (based on volume)
Domain (existing):       $0
Monitoring (Sentry):     $0 (free tier sufficient)
Total:                   $20-60/month
```

**One-Time Costs:**
```
Development:            (internal or contractor)
SSL Certificate:        $0 (included with Cloudflare/Vercel)
Security Audit:         $500-2000 (optional but recommended)
```

### Time Estimates

| Phase | Estimated Time | Dependencies |
|-------|---------------|--------------|
| Phase 0: Setup | 3-5 days | None |
| Phase 1: Layout | 5-7 days | Phase 0 |
| Phase 2: Pages | 10-14 days | Phase 1 |
| Phase 3: About/Contact | 3-5 days | Phase 1 |
| Phase 4: API | 3-5 days | Phase 3 |
| Phase 5: SEO | 5-7 days | Phase 2 |
| Phase 6: Security | 5-7 days | All previous |
| Phase 7: QA | 5-7 days | All previous |
| Phase 8: Deployment | 2-3 days | Phase 7 |
| **Total** | **6-8 weeks** | - |

---

## 11. Success Metrics

### Key Performance Indicators (KPIs)

**Security:**
- ✅ Zero critical vulnerabilities (ongoing)
- ✅ A+ SSL Labs rating
- ✅ 100% security header score

**Performance:**
- ✅ Lighthouse Performance ≥90
- ✅ Page load time <2 seconds
- ✅ Core Web Vitals in "Good" range

**SEO:**
- ✅ Lighthouse SEO ≥95
- ✅ All pages indexed within 1 week
- ✅ No significant ranking drops

**Functionality:**
- ✅ 99.9% uptime
- ✅ Contact form 100% delivery rate
- ✅ Zero UI consistency issues

**User Experience:**
- ✅ Mobile usability score 100%
- ✅ WCAG 2.1 AA compliant
- ✅ Cross-browser compatible

---

## 12. Quick Reference Checklist

### Pre-Development
- [ ] Project repository created
- [ ] Cloudflare account set up
- [ ] Vercel account set up
- [ ] Resend.com account set up (for emails)
- [ ] Design assets collected
- [ ] Content extracted from WordPress

### Development Phases
- [ ] Phase 0: Setup complete
- [ ] Phase 1: Layout & components
- [ ] Phase 2: Static pages
- [ ] Phase 3: About & Contact
- [ ] Phase 4: API & security
- [ ] Phase 5: SEO optimization
- [ ] Phase 6: Security hardening
- [ ] Phase 7: Content & QA
- [ ] Phase 8: Deployment

### Pre-Launch
- [ ] All tests passing
- [ ] Client approval received
- [ ] WordPress backup created
- [ ] DNS TTL lowered
- [ ] Monitoring configured

### Post-Launch
- [ ] Site live and accessible
- [ ] SSL certificate verified
- [ ] No critical errors
- [ ] Analytics tracking
- [ ] Documentation delivered

---

## 13. Contact & Support

**Project Lead:** [Your Name]  
**Email:** [Your Email]  
**Timeline:** 6-8 weeks from kickoff  
**Status:** Ready for Claude Code implementation

---

## 14. Additional Notes

### Why This Plan is Better

**Compared to your original plan, this enhanced version adds:**

1. ✅ **More detailed security implementation** - Specific code examples for rate limiting, CAPTCHA, sanitization
2. ✅ **Comprehensive testing strategy** - Cross-browser, accessibility, security testing
3. ✅ **Detailed SEO implementation** - Structured data, meta tags, sitemap configuration
4. ✅ **Risk management section** - Identified risks with mitigation strategies
5. ✅ **Budget and time estimates** - Realistic resource planning
6. ✅ **Success metrics** - Measurable KPIs for each objective
7. ✅ **Post-launch plan** - Maintenance, monitoring, documentation
8. ✅ **Component architecture** - Clear component library structure
9. ✅ **Step-by-step QA process** - Comprehensive testing checklist
10. ✅ **Deployment procedures** - Detailed go-live process

### Using This Plan with Claude Code

**To start implementation in Claude Code:**

1. Open Claude Code in your terminal
2. Share this plan file with Claude Code
3. Start with Phase 0 and work sequentially
4. Claude Code can help implement each section with proper code

**Example command flow:**
```bash
# In your terminal
cd ~/projects
claude-code

# Then in Claude Code:
"I have a migration plan for Titan Shield website. Let's start with Phase 0.
Please create the Next.js project with all security configurations from the plan."
```

---

**This plan is production-ready and can be followed step-by-step with Claude Code assistance. Each phase builds on the previous one, ensuring a systematic, secure migration.**

**Good luck with the migration! 🚀🛡️**