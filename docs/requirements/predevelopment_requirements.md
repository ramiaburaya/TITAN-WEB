# Pre-Development Requirements Checklist
**Titan Shield Website Migration - Software Engineer Perspective**

> **Status:** Requirements gathering phase  
> **Owner:** Development Team  
> **Last Updated:** 2025-11-29

---

## 1. 🎨 Design Assets & Brand Materials

### Required from Client/Design Team

**Logo & Branding:**
- [ ] **Logo files**
  - SVG format (vector, scalable)
  - PNG format (transparent background, multiple sizes: 512px, 256px, 128px, 64px)
  - Favicon (16x16, 32x32, 180x180 for Apple)
  - Different variations (light mode, dark mode, monochrome)
  
**Brand Guidelines:**
- [ ] **Color palette** with hex codes
  ```
  Primary purple: #______
  Dark background: #______
  Text colors: #______, #______, #______
  Accent colors: #______, #______
  ```
- [ ] **Typography** specifications
  - Primary font family (e.g., Inter, Poppins, etc.)
  - Font weights to use (400, 500, 600, 700)
  - Line heights and spacing guidelines
  
**Images & Graphics:**
- [ ] **Hero images** for each page (optimized, high-resolution)
- [ ] **Service icons** (SVG preferred) for all 6 services
- [ ] **Team photos** (if showing team members)
- [ ] **Founder/CEO photo** for About page
- [ ] **Cybersecurity illustrations** for service pages
- [ ] **Background patterns** or gradients (if custom)
- [ ] **Social media preview images** (Open Graph images, 1200x630px)

**UI Elements:**
- [ ] **Button styles** (hover states, active states)
- [ ] **Card designs** (service cards, info cards)
- [ ] **Form field designs**
- [ ] **Icon set** for features/benefits

---

## 2. 📝 Content & Copy

### Text Content Needed

**Homepage:**
- [ ] Hero headline + subheadline
- [ ] About section text
- [ ] Service descriptions (short versions for cards)
- [ ] "Why Titan" section content
- [ ] Newsletter section copy

**Service Pages (x6):**
- [ ] Service titles
- [ ] Hero descriptions
- [ ] Detailed service descriptions
- [ ] Feature lists (for accordions)
- [ ] Benefits sections
- [ ] Call-to-action text

**About Us:**
- [ ] Company story
- [ ] Founder's message
- [ ] Team bios (if applicable)
- [ ] Mission/vision statements

**Contact:**
- [ ] Office address (verify current)
- [ ] Phone numbers (all lines)
- [ ] Email addresses
- [ ] Office hours

**Legal Pages:**
- [ ] Privacy Policy (updated for new site)
- [ ] Terms of Service
- [ ] Cookie Policy (if using cookies)

**SEO Content:**
- [ ] Meta descriptions for each page (150-160 characters)
- [ ] Page titles (60 characters max)
- [ ] Keywords list for each service
- [ ] Alt text suggestions for main images

---

## 3. 🔐 Access & Credentials

### Accounts to Set Up

**Development Tools:**
- [ ] **GitHub/GitLab account**
  - Organization account or personal?
  - Team member access levels
  
**Hosting & Deployment:**
- [ ] **Vercel account** (email: _____________)
  - Team plan or individual?
  - Credit card for billing
  
- [ ] **Cloudflare account** (email: _____________)
  - DNS management access
  - API keys for automation
  
**Email Service:**
- [ ] **Resend.com account** (or alternative: SendGrid, Mailgun)
  - API key for contact form
  - Verified sender domain (titanshield.ps)
  
**Monitoring & Analytics:**
- [ ] **Google Analytics 4** property ID
- [ ] **Google Search Console** (verify domain ownership)
- [ ] **Sentry account** (error tracking, optional)
  - DSN key
  
**Development:**
- [ ] **npm account** (for publishing if needed)
- [ ] **Figma access** (if designs are in Figma)

### Access to Current Infrastructure

**WordPress (for content extraction):**
- [ ] WordPress admin login
- [ ] FTP/SFTP credentials (to download images)
- [ ] Database access (for content export)
- [ ] Hosting panel access (cPanel/Plesk)

**Domain Management:**
- [ ] Domain registrar login (where titanshield.ps is registered)
- [ ] DNS management access
- [ ] Domain transfer code (if moving registrars)

**Existing Email:**
- [ ] Email provider details (G Suite, Office 365, etc.)
- [ ] MX records information (to maintain email service)
- [ ] SPF/DKIM records (for email authentication)

---

## 4. 🛠️ Development Environment Setup

### Local Machine Requirements

**Software to Install:**
- [ ] **Node.js** (v18 or v20 LTS)
  ```bash
  node --version  # Should be v18.x or v20.x
  ```
- [ ] **npm** or **pnpm** (package manager)
  ```bash
  npm --version
  # OR
  pnpm --version
  ```
- [ ] **Git** (version control)
  ```bash
  git --version
  ```
- [ ] **VS Code** or preferred IDE
  - Extensions:
    - ESLint
    - Prettier
    - Tailwind CSS IntelliSense
    - TypeScript + JavaScript
    
**Browser DevTools:**
- [ ] Chrome DevTools
- [ ] React Developer Tools extension
- [ ] Lighthouse (built into Chrome)
- [ ] axe DevTools (accessibility testing)

**Testing Tools:**
- [ ] Postman or Insomnia (API testing)
- [ ] BrowserStack or LambdaTest account (cross-browser testing)

### Environment Variables Template

Create `.env.local` file structure:
```bash
# Email Service (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL_TO=info@titanshield.ps
CONTACT_EMAIL_FROM=noreply@titanshield.ps

# Cloudflare Turnstile (CAPTCHA)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4xxxxxxxxxxxxxxxxxx
TURNSTILE_SECRET_KEY=0x4xxxxxxxxxxxxxxxxxx

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Sentry (Error Tracking)
SENTRY_DSN=https://xxxxxx@sentry.io/xxxxxx
NEXT_PUBLIC_SENTRY_DSN=https://xxxxxx@sentry.io/xxxxxx

# App Configuration
NEXT_PUBLIC_SITE_URL=https://titanshield.ps
NODE_ENV=development
```

---

## 5. 📋 Technical Specifications

### Browser Support Matrix

**Desktop:**
- [ ] Chrome (last 2 versions)
- [ ] Firefox (last 2 versions)
- [ ] Safari (last 2 versions)
- [ ] Edge (last 2 versions)

**Mobile:**
- [ ] iOS Safari (iOS 14+)
- [ ] Chrome Android (last 2 versions)
- [ ] Samsung Internet (last version)

**Resolution Support:**
- [ ] Desktop: 1920x1080, 1440x900, 1366x768
- [ ] Tablet: 1024x768, 768x1024
- [ ] Mobile: 375x667, 414x896, 360x640

### Performance Targets

**Page Load:**
- [ ] First Contentful Paint (FCP): < 1.8s
- [ ] Largest Contentful Paint (LCP): < 2.5s
- [ ] Time to Interactive (TTI): < 3.5s
- [ ] Total page size: < 1.5MB

**Lighthouse Scores (Mobile):**
- [ ] Performance: ≥ 90
- [ ] Accessibility: ≥ 95
- [ ] Best Practices: ≥ 95
- [ ] SEO: ≥ 95

### Accessibility Standards

- [ ] **WCAG 2.1 Level AA** compliance
- [ ] Keyboard navigation support
- [ ] Screen reader compatibility (NVDA, JAWS, VoiceOver)
- [ ] Color contrast ratios: minimum 4.5:1 for normal text
- [ ] Focus indicators visible
- [ ] Skip navigation links

---

## 6. 🗂️ Content Migration Checklist

### WordPress Content Export

**Pages to Extract:**
- [ ] Homepage content
- [ ] About Us content
- [ ] All service pages (6 pages)
- [ ] Contact information
- [ ] Privacy Policy
- [ ] Terms of Service

**Media Library:**
- [ ] Download all images from WordPress
  ```bash
  # Via SFTP or wp-content/uploads folder
  ```
- [ ] Create inventory spreadsheet:
  ```
  Filename | Used On Page | Alt Text | New Filename
  ```

**URL Mapping:**
- [ ] Create spreadsheet of all current URLs
  ```
  Old URL                                  | New URL
  https://titanshield.ps/services/red-team/ | /services/offensive-security
  ```

### Content Audit

**Quality Check:**
- [ ] Remove outdated information
- [ ] Fix typos and grammar errors
- [ ] Update statistics/metrics
- [ ] Verify contact information is current
- [ ] Check for broken external links
- [ ] Update copyright year

---

## 7. 🧪 Testing Requirements

### Testing Environments

**Need to Set Up:**
- [ ] **Development** (localhost:3000)
- [ ] **Staging** (staging.titanshield.ps or Vercel preview)
- [ ] **Production** (titanshield.ps)

### Test Data

**Contact Form Testing:**
- [ ] Test email addresses (to verify delivery)
- [ ] Spam test scenarios
- [ ] Different phone number formats
- [ ] Edge cases (very long messages, special characters)

### Testing Tools Access

- [ ] **BrowserStack** (cross-browser)
- [ ] **Google PageSpeed Insights** (performance)
- [ ] **GTmetrix** (performance)
- [ ] **SSL Labs** (security)
- [ ] **SecurityHeaders.com** (security headers)
- [ ] **Google Mobile-Friendly Test** (mobile)

---

## 8. 📞 Stakeholder Information

### Points of Contact

**Client Side:**
- [ ] **Project Owner:** Name, Email, Phone
- [ ] **Technical Contact:** Name, Email, Phone
- [ ] **Content/Marketing Contact:** Name, Email, Phone
- [ ] **Decision Maker:** Name, Email, Phone

**Development Team:**
- [ ] **Lead Developer:** _____________
- [ ] **Frontend Developer:** _____________
- [ ] **Designer (if separate):** _____________
- [ ] **QA Tester:** _____________
- [ ] **DevOps/Deployment:** _____________

### Communication Channels

- [ ] **Slack workspace** or Discord server
- [ ] **Project management tool** (Jira, Trello, Linear, etc.)
- [ ] **Weekly sync meeting** scheduled
- [ ] **Emergency contact method** (for production issues)

---

## 9. 🗓️ Project Logistics

### Kickoff Meeting Agenda

- [ ] Review migration plan
- [ ] Clarify requirements
- [ ] Discuss timeline and milestones
- [ ] Identify blockers
- [ ] Set up communication channels
- [ ] Assign responsibilities

### Milestone Approval Process

**Who approves:**
- [ ] Design mockups: _____________
- [ ] Content: _____________
- [ ] Functionality: _____________
- [ ] Final go-live: _____________

**Approval Method:**
- [ ] Email confirmation
- [ ] Sign-off in project management tool
- [ ] Formal document signature

### Change Request Process

- [ ] How to submit change requests
- [ ] Who approves changes
- [ ] Impact on timeline/budget
- [ ] Documentation requirements

---

## 10. 🚨 Risk Mitigation Preparation

### Backup Strategy

**Before Starting:**
- [ ] **Full WordPress backup**
  - Database export (SQL)
  - Files backup (wp-content)
  - Store in 2 locations (local + cloud)
  
**During Development:**
- [ ] Daily Git commits
- [ ] Weekly database backups (if using database)
- [ ] Vercel automatic deployments saved

**Rollback Plan:**
- [ ] Keep WordPress site accessible (different subdomain?)
- [ ] DNS rollback procedure documented
- [ ] Emergency contact list

### Contingency Plans

**If Email Delivery Fails:**
- [ ] Backup email service (SendGrid, Mailgun)
- [ ] Manual notification process
- [ ] Client notification procedure

**If DNS Issues:**
- [ ] Cloudflare support contact
- [ ] Domain registrar support
- [ ] Fallback DNS provider

**If Performance Issues:**
- [ ] Image optimization service (ImageKit, Cloudinary)
- [ ] CDN alternatives
- [ ] Caching strategy adjustments

---

## 11. 🔍 Pre-Development Code Review

### Repository Setup

**GitHub/GitLab Repository:**
- [ ] Create repository (public or private?)
- [ ] Set up branch protection rules:
  - Main branch: require PR reviews
  - Staging branch: for testing
  - Development branch: for active work
  
**Git Workflow:**
```
main (production)
  ↑
staging (preview/testing)
  ↑
development (active development)
  ↑
feature/[feature-name] (individual features)
```

**Required Files:**
- [ ] `.gitignore` (exclude node_modules, .env, .next)
- [ ] `README.md` (setup instructions)
- [ ] `CONTRIBUTING.md` (how to contribute)
- [ ] `.env.example` (template for environment variables)
- [ ] `LICENSE` (if open source)

### Code Standards

**Linting & Formatting:**
- [ ] ESLint configuration
- [ ] Prettier configuration
- [ ] Husky pre-commit hooks
- [ ] Lint-staged for staged files

**Naming Conventions:**
- [ ] Components: PascalCase (e.g., `ServiceCard.tsx`)
- [ ] Files: kebab-case (e.g., `use-contact-form.ts`)
- [ ] CSS classes: Tailwind utilities (no custom classes unless needed)

**TypeScript Rules:**
- [ ] Strict mode enabled
- [ ] No implicit any
- [ ] Proper type definitions for all components
- [ ] Interface vs Type conventions

---

## 12. 📦 Third-Party Services Setup

### Email Delivery (Resend)

**Steps:**
1. [ ] Create Resend account
2. [ ] Verify domain (titanshield.ps)
   - Add DNS records: SPF, DKIM, DMARC
3. [ ] Create API key
4. [ ] Set up email template
5. [ ] Test email delivery

**Email Template Needed:**
```html
Subject: New Contact Form Submission - Titan Shield

From: {name}
Email: {email}
Phone: {phone}
Subject: {subject}

Message:
{message}

---
Sent from titanshield.ps contact form
```

### CAPTCHA (Cloudflare Turnstile)

**Steps:**
1. [ ] Enable Turnstile in Cloudflare dashboard
2. [ ] Get site key (public)
3. [ ] Get secret key (private)
4. [ ] Add widget to contact form
5. [ ] Verify token server-side

### Analytics (Google Analytics 4)

**Steps:**
1. [ ] Create GA4 property
2. [ ] Get Measurement ID (G-XXXXXXXXXX)
3. [ ] Install gtag.js script
4. [ ] Set up basic events:
   - Page views
   - Contact form submissions
   - Button clicks
   - External link clicks

**Events to Track:**
- [ ] Page views
- [ ] Contact form submission
- [ ] Newsletter signup
- [ ] Service card clicks
- [ ] CTA button clicks
- [ ] Phone number clicks
- [ ] Email clicks

---

## 13. 🎯 Success Criteria Definition

### Definition of Done (DoD) for Each Feature

**For Each Page:**
- [ ] Desktop design matches mockup
- [ ] Mobile design responsive
- [ ] All links work
- [ ] Images optimized and loaded
- [ ] Meta tags present
- [ ] Lighthouse score ≥ 90
- [ ] No console errors
- [ ] Accessibility audit passed
- [ ] Cross-browser tested
- [ ] Client approved

**For Contact Form:**
- [ ] All fields validate correctly
- [ ] CAPTCHA works
- [ ] Email sent successfully
- [ ] Loading state shown
- [ ] Success/error messages display
- [ ] Rate limiting active
- [ ] No spam received
- [ ] Mobile-friendly
- [ ] Accessibility compliant

**For Deployment:**
- [ ] All tests passing
- [ ] No critical bugs
- [ ] Lighthouse scores meet targets
- [ ] Security headers active
- [ ] SSL certificate valid
- [ ] DNS propagated
- [ ] Analytics tracking
- [ ] Error monitoring active
- [ ] Client sign-off

---

## 14. 📚 Documentation Requirements

### Developer Documentation

**To Create:**
- [ ] **README.md**
  - Project overview
  - Setup instructions
  - Environment variables
  - Development workflow
  - Deployment process
  
- [ ] **ARCHITECTURE.md**
  - System architecture diagram
  - Component hierarchy
  - Data flow
  - API endpoints
  
- [ ] **COMPONENTS.md**
  - Component library
  - Props documentation
  - Usage examples
  
- [ ] **DEPLOYMENT.md**
  - Deployment checklist
  - Rollback procedure
  - Troubleshooting guide

### Client Documentation

**To Create:**
- [ ] **Content Update Guide**
  - How to request changes
  - Contact information
  
- [ ] **Maintenance Guide**
  - What to monitor
  - When to update
  - Support contacts

---

## 15. ⚡ Quick Start Checklist

### Week 1 - Before Writing Code

#### Day 1-2: Gather Assets
- [ ] Request all design assets from client
- [ ] Set up accounts (Vercel, Cloudflare, Resend)
- [ ] Get access to WordPress
- [ ] Schedule kickoff meeting

#### Day 3-4: Environment Setup
- [ ] Install all required software
- [ ] Clone repository
- [ ] Set up development environment
- [ ] Configure IDE extensions
- [ ] Test local setup

#### Day 5: Content Preparation
- [ ] Export WordPress content
- [ ] Download all images
- [ ] Create URL mapping spreadsheet
- [ ] Audit content for quality

### Week 1 Deliverables
- [ ] All accounts created
- [ ] Development environment ready
- [ ] Content extracted and organized
- [ ] Repository initialized
- [ ] Team aligned on plan

---

## 16. 🎫 Open Questions to Resolve

### Business Questions

- [ ] Who will manage content updates after launch?
- [ ] Do you want a blog section? (for future)
- [ ] Do you want case studies/portfolio? (for future)
- [ ] Any integrations needed? (CRM, chat widget, etc.)
- [ ] Do you want newsletter functionality now or later?
- [ ] Preferred analytics platform? (GA4, Plausible, etc.)

### Technical Questions

- [ ] Keep same URLs or create new structure?
- [ ] Multilingual support needed? (Arabic/English?)
- [ ] Need headless CMS for easy content editing?
- [ ] Want staging environment for testing?
- [ ] Need custom email addresses? (e.g., sales@titanshield.ps)
- [ ] Any third-party integrations? (Calendly, chat, etc.)

### Design Questions

- [ ] Any animations desired? (subtle or prominent?)
- [ ] Dark mode only or light mode option?
- [ ] Custom illustrations or stock images?
- [ ] Video content to embed?
- [ ] Interactive elements? (calculators, quizzes, etc.)

---

## 17. 🚀 Ready to Start Indicator

### All Systems Go When:

✅ **Assets Ready:**
- Logo, images, icons collected
- Brand colors and fonts specified
- Content extracted from WordPress

✅ **Access Granted:**
- All accounts created
- API keys obtained
- Domain access confirmed

✅ **Environment Ready:**
- Development machine set up
- Repository initialized
- Tools installed

✅ **Team Aligned:**
- Kickoff meeting completed
- Roles and responsibilities clear
- Communication channels active

✅ **Plan Approved:**
- Migration plan reviewed
- Timeline agreed upon
- Success criteria defined

---

## ✅ Final Checklist

```
DESIGN ASSETS:           [ ]  Received and organized
CONTENT:                 [ ]  Extracted and audited
ACCOUNTS & ACCESS:       [ ]  All set up
DEVELOPMENT ENVIRONMENT: [ ]  Ready to code
TEAM ALIGNMENT:          [ ]  Everyone on same page
OPEN QUESTIONS:          [ ]  All resolved
KICKOFF MEETING:         [ ]  Completed
TIMELINE:                [ ]  Agreed upon

STATUS: 🔴 Not Ready  |  🟡 In Progress  |  🟢 Ready to Start
```

---

**Once all items are checked, we're ready to execute Phase 0 of the migration plan!** 🚀

---

## 📎 Appendix: Useful Commands

### Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start

# Run linter
npm run lint

# Run type checking
npm run type-check

# Format code
npm run format
```

### Git Commands
```bash
# Create feature branch
git checkout -b feature/navbar-component

# Commit changes
git add .
git commit -m "feat: add navbar component"

# Push to remote
git push origin feature/navbar-component

# Create pull request (via GitHub UI)
```

### Deployment Commands
```bash
# Deploy to Vercel (automatic on push to main)
vercel --prod

# Preview deployment
vercel
```

---

**This document should be reviewed and updated as requirements are gathered. Good luck with the project!** 🎯