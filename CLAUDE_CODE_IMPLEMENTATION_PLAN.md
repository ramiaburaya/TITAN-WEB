# Titan Shield - Claude Code Implementation Plan
**Optimized Engineering Roadmap for Next.js 14 Migration**

> **Version:** 2.0 (Claude Code Optimized)
> **Status:** Ready for Phase 0
> **Timeline:** 4-6 weeks
> **Approach:** Systematic, test-driven, security-first

---

## 📊 Plan Overview

This document synthesizes all requirements into an **actionable, Claude Code-ready implementation plan**. Unlike the source documents, this plan:

- ✅ Specifies exact file structures and naming conventions
- ✅ Defines component props and interfaces upfront
- ✅ Includes code scaffolding templates
- ✅ Clarifies what Claude Code generates vs what you provide
- ✅ Optimizes the development workflow for AI pair programming
- ✅ Adds architectural improvements based on Next.js 14 best practices

---

## 🚀 Breaking Changes in 2025 Stack (Critical)

### **Migration from Original Plan Required:**

The source documentation was written for Next.js 14 / React 18 / Tailwind v3. Here's what changed:

#### **1. Tailwind CSS v4 - Complete Rewrite**
**Old (v3):** JavaScript config with `content` array
```typescript
// tailwind.config.ts (v3)
export default {
  content: ['./app/**/*.tsx'],
  theme: { extend: { colors: { ... } } }
}
```

**New (v4):** CSS-first configuration
```css
/* globals.css (v4) */
@theme {
  --color-brand-purple: #7b3ff2;
}
```

**Impact:** All theme customization moves to CSS. Automatic content detection.

#### **2. Next.js 16 - Turbopack Default**
**Old:** Webpack bundler
**New:** Turbopack (5-10x faster, stable)
**Impact:** Development feels instant. Filesystem caching between restarts.

#### **3. React 19 - Native Form Actions**
**Old:** Manual form handling with `onSubmit`
```typescript
const handleSubmit = async (e) => {
  e.preventDefault();
  // manual logic
}
```

**New:** Built-in `useActionState` with pending/error states
```typescript
const [state, formAction] = useActionState(submitAction, initialState);
<form action={formAction}>
```

**Impact:** Simpler code, built-in loading/error states, progressive enhancement.

#### **4. React Compiler - Automatic Optimization**
**Old:** Manual `useMemo`, `useCallback` everywhere
**New:** React Compiler auto-optimizes (stable in Next.js 16)
**Impact:** Less boilerplate, better performance by default.

---

## 🎯 Key Improvements Over Source Documentation

### 1. **Modular Component Architecture**
- Separation of client/server components (explicitly marked)
- Atomic design methodology (atoms → molecules → organisms)
- Shared type definitions in dedicated files

### 2. **Improved Security Implementation**
- Server Actions instead of API routes where appropriate
- Built-in CSRF protection via Next.js forms
- Streaming RSC for better UX

### 3. **Better DX (Developer Experience)**
- Absolute imports with `@/` path aliasing
- Centralized constants and configuration
- Type-safe environment variables with zod
- Automated testing setup from day 1

### 4. **Performance Optimizations**
- Partial Prerendering (PPR) where applicable
- Server Components by default
- Optimized bundle splitting strategy
- Image optimization pipeline

---

## 📁 Project Structure (Complete)

```
titan-shield/
├── .github/
│   └── workflows/
│       ├── ci.yml                    # Continuous Integration
│       └── lighthouse.yml            # Performance monitoring
│
├── app/
│   ├── (marketing)/                  # Route group for marketing pages
│   │   ├── page.tsx                  # Homepage
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx              # Services overview
│   │   │   ├── offensive-security/
│   │   │   │   └── page.tsx
│   │   │   ├── consulting-compliance/
│   │   │   │   └── page.tsx
│   │   │   ├── managed-security/
│   │   │   │   └── page.tsx
│   │   │   ├── infrastructure-protection/
│   │   │   │   └── page.tsx
│   │   │   ├── training/
│   │   │   │   └── page.tsx
│   │   │   └── endpoint-security/
│   │   │       └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   │
│   ├── (legal)/                      # Route group for legal pages
│   │   ├── privacy-policy/
│   │   │   └── page.tsx
│   │   └── terms-service/
│   │       └── page.tsx
│   │
│   ├── api/                          # API routes
│   │   └── contact/
│   │       └── route.ts              # Contact form endpoint
│   │
│   ├── actions/                      # Server Actions (NEW)
│   │   ├── contact.ts                # Contact form action
│   │   └── newsletter.ts             # Newsletter subscription
│   │
│   ├── layout.tsx                    # Root layout
│   ├── globals.css                   # Global styles
│   ├── not-found.tsx                 # 404 page
│   ├── error.tsx                     # Error boundary
│   └── sitemap.ts                    # Dynamic sitemap
│
├── components/
│   ├── layout/                       # Layout components
│   │   ├── navbar.tsx                # Main navigation (client)
│   │   ├── footer.tsx                # Footer (server)
│   │   ├── mobile-menu.tsx           # Mobile nav (client)
│   │   └── breadcrumb.tsx            # Breadcrumb nav (server)
│   │
│   ├── sections/                     # Page sections (organisms)
│   │   ├── hero-section.tsx
│   │   ├── services-grid.tsx
│   │   ├── about-preview.tsx
│   │   ├── stats-section.tsx
│   │   ├── newsletter-section.tsx
│   │   └── cta-section.tsx
│   │
│   ├── cards/                        # Card components (molecules)
│   │   ├── service-card.tsx
│   │   ├── stat-card.tsx
│   │   ├── feature-card.tsx
│   │   └── team-card.tsx
│   │
│   ├── forms/                        # Form components
│   │   ├── contact-form.tsx          # Main contact form (client)
│   │   ├── newsletter-form.tsx       # Newsletter form (client)
│   │   ├── form-field.tsx            # Reusable field (client)
│   │   ├── form-error.tsx            # Error display
│   │   └── form-success.tsx          # Success display
│   │
│   ├── ui/                           # Base UI components (atoms)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── label.tsx
│   │   ├── select.tsx
│   │   ├── accordion.tsx
│   │   ├── container.tsx
│   │   ├── heading.tsx
│   │   └── loading-spinner.tsx
│   │
│   └── providers/                    # Context providers
│       └── analytics-provider.tsx
│
├── lib/
│   ├── utils.ts                      # Utility functions
│   ├── cn.ts                         # Class name merger (clsx)
│   ├── validation.ts                 # Zod schemas
│   ├── rate-limit.ts                 # Rate limiting logic
│   ├── email.ts                      # Email sending (Resend)
│   ├── captcha.ts                    # Turnstile verification
│   ├── sanitize.ts                   # Input sanitization
│   └── constants.ts                  # App constants
│
├── types/
│   ├── index.ts                      # Shared types
│   ├── services.ts                   # Service types
│   └── forms.ts                      # Form types
│
├── config/
│   ├── site.ts                       # Site configuration
│   ├── services.ts                   # Services data
│   ├── navigation.ts                 # Nav links
│   └── env.ts                        # Validated env vars (zod)
│
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── services/
│   │   ├── team/
│   │   └── og-image.jpg
│   ├── icons/
│   └── fonts/                        # Local fonts (if needed)
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .env.local                        # Local environment variables
├── .env.example                      # Template for env vars
├── .eslintrc.json                    # ESLint config
├── .prettierrc                       # Prettier config
├── next.config.ts                    # Next.js configuration
├── tailwind.config.ts                # Tailwind configuration
├── tsconfig.json                     # TypeScript config
├── package.json
└── README.md
```

---

## 🔧 Technology Stack & Versions (Updated November 2025)

**Latest Stable Versions:**

```json
{
  "dependencies": {
    "next": "^16.0.5",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "typescript": "^5.9.0",
    "@vercel/analytics": "^1.4.0",
    "lucide-react": "^0.460.0",
    "zod": "^4.0.0",
    "react-hook-form": "^7.54.0",
    "@hookform/resolvers": "^3.10.0",
    "resend": "^6.5.2",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0",
    "server-only": "^0.0.1"
  },
  "devDependencies": {
    "@types/node": "^22.10.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^4.0.0",
    "eslint": "^9.16.0",
    "eslint-config-next": "^16.0.5",
    "prettier": "^3.4.2",
    "@tailwindcss/prettier-plugin": "^0.1.0"
  }
}
```

### Key Technology Updates

**Next.js 16** (October 2025)
- ✅ **Turbopack stable** - Default bundler (5-10x faster Fast Refresh)
- ✅ **React Compiler** - Stable, built-in support
- ✅ **Cache Components** - New `use cache` directive for optimized caching
- ✅ **Proxy.ts** - Replaces middleware.ts for explicit network boundaries
- ✅ **Filesystem Caching** - Turbopack caches between restarts (beta)

**React 19.2** (October 2025)
- ✅ **Server Components** - Stable and production-ready
- ✅ **Server Actions** - Fully stable, native form handling
- ✅ **ref as prop** - No more forwardRef needed
- ✅ **Actions API** - Built-in pending states and error handling
- ✅ **Enhanced hydration** - Better error reporting

**Tailwind CSS v4.0** (2025)
- ✅ **5x faster builds** - Complete performance rewrite
- ✅ **CSS-first config** - Configure in CSS, not JavaScript
- ✅ **Automatic content detection** - No more content array
- ✅ **Modern CSS features** - @property, cascade layers, color-mix()
- ✅ **P3 color palette** - Wide gamut color support

**TypeScript 5.9** (August 2025)
- ✅ **Deferred imports** - Better tree-shaking
- ✅ **Node20 module resolution** - Stable for Node.js v20
- ✅ **Expandable hovers** - Better DX in VS Code

---

## 🎨 Coding Conventions & Standards

### File Naming
```
✅ Components:     PascalCase      → ServiceCard.tsx
✅ Utilities:      kebab-case      → rate-limit.ts
✅ Server Actions: camelCase       → contact.ts
✅ Types:          PascalCase      → ServiceType
✅ Constants:      SCREAMING_SNAKE → MAX_REQUEST_SIZE
```

### Component Structure Template
```typescript
'use client'; // Only if needed

import { ComponentProps } from '@/types';
import { cn } from '@/lib/cn';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  icon,
  href,
  className,
}: ServiceCardProps) {
  return (
    <div className={cn('base-classes', className)}>
      {/* Component content */}
    </div>
  );
}

// Default export for Next.js pages only
// Named exports for all other components
```

### Import Order (Enforced by ESLint)
```typescript
// 1. React & Next.js
import { useState } from 'react';
import Link from 'next/link';

// 2. External packages
import { z } from 'zod';
import { useForm } from 'react-hook-form';

// 3. Internal components
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/navbar';

// 4. Utils & lib
import { cn } from '@/lib/cn';
import { contactSchema } from '@/lib/validation';

// 5. Types
import type { ServiceType } from '@/types/services';

// 6. Constants & config
import { SITE_CONFIG } from '@/config/site';

// 7. Styles (rare in Tailwind projects)
import styles from './styles.module.css';
```

### TypeScript Strictness
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true
  }
}
```

---

## 🏗️ Phase-by-Phase Implementation

### **PHASE 0: Foundation Setup** (Week 1, Days 1-2)

**Objective:** Initialize project with all tooling configured

#### 0.1 Project Initialization (Next.js 16 + React 19)
```bash
# Claude Code will execute:
npx create-next-app@latest titan-shield \
  --typescript \
  --tailwind \
  --app \
  --turbopack \
  --eslint \
  --no-src-dir \
  --import-alias "@/*"

cd titan-shield
```

#### 0.2 Install Core Dependencies (Latest Versions)
```bash
# Claude Code will add:
pnpm add lucide-react zod react-hook-form @hookform/resolvers
pnpm add clsx tailwind-merge server-only
pnpm add @vercel/analytics resend
pnpm add -D prettier @tailwindcss/prettier-plugin
pnpm add -D @types/node @types/react @types/react-dom

# Ensure latest versions
pnpm add next@latest react@latest react-dom@latest
pnpm add tailwindcss@latest
```

#### 0.3 Configuration Files

**`next.config.ts`** - Claude Code generates (Next.js 16):
```typescript
import type { NextConfig } from 'next';

const config: NextConfig = {
  // Turbopack is now stable and enabled by default in Next.js 16
  // No need to explicitly enable it

  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'titanshield.ps',
      },
    ],
  },

  // React Compiler is stable in Next.js 16
  experimental: {
    reactCompiler: true,
    // Enable Turbopack filesystem caching (beta)
    turbo: {
      cache: {
        filesystem: true,
      },
    },
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data:",
              "connect-src 'self' https://challenges.cloudflare.com https://www.google-analytics.com",
              "frame-src https://challenges.cloudflare.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default config;
```

**`app/globals.css`** - CSS-first configuration (Tailwind v4):
```css
@import "tailwindcss";

/* Tailwind v4 uses CSS variables for theme customization */
@theme {
  /* Brand Colors - YOU PROVIDE */
  --color-brand-purple: #7b3ff2;
  --color-brand-purple-dark: #5b21b6;
  --color-brand-dark: #0f172a;
  --color-brand-dark-light: #1e293b;
  --color-brand-gray: #475569;
  --color-brand-gray-light: #94a3b8;

  /* Font Family */
  --font-family-sans: ui-sans-serif, system-ui, sans-serif;

  /* Spacing scale (if custom needed) */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;

  /* Container */
  --container-max-width: 1280px;
  --container-padding: 1rem;
}

/* Base styles */
@layer base {
  body {
    @apply bg-brand-dark text-white antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-bold;
  }
}

/* Component styles */
@layer components {
  .container {
    max-width: var(--container-max-width);
    padding-inline: var(--container-padding);
    margin-inline: auto;
  }
}
```

**Note:** Tailwind v4 automatically detects content files. No more `content: []` array needed!

**`tailwind.config.ts`** (Minimal in v4):
```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  // Tailwind v4 uses automatic content detection
  // No content array needed!
  // Theme customization is now done in CSS (see globals.css)
};

export default config;
```

**`config/site.ts`** - YOU provide content:
```typescript
export const SITE_CONFIG = {
  name: 'Titan Shield',
  description: 'Leading cybersecurity firm in Palestine',
  url: 'https://titanshield.ps',
  ogImage: '/og-image.jpg',
  links: {
    facebook: 'https://facebook.com/titanshield',
    linkedin: 'https://linkedin.com/company/titanshield',
    instagram: 'https://instagram.com/titanshield',
  },
  contact: {
    email: 'info@titanshield.ps',
    phone: '+970 (562) 420000',
    phoneSecondary: '+970 (562) 420011',
    address: {
      street: '4th Floor, Humayat Center, Office No. 3',
      city: 'AL-Bireh',
      country: 'Palestine',
    },
  },
} as const;
```

**`lib/cn.ts`** - Claude Code generates:
```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**`.env.example`** - Claude Code generates:
```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://titanshield.ps

# Email Service (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL_TO=info@titanshield.ps
CONTACT_EMAIL_FROM=noreply@titanshield.ps

# Cloudflare Turnstile (CAPTCHA)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4xxxxxxxxxxxxxxxxxx
TURNSTILE_SECRET_KEY=0x4xxxxxxxxxxxxxxxxxx

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Environment
NODE_ENV=development
```

**Deliverable:** Fully configured Next.js project with all tooling

---

### **PHASE 1: Design System & Base Components** (Week 1, Days 3-5)

**Objective:** Build atomic UI components and layout structure

#### 1.1 Base UI Components (Atoms)

**`components/ui/button.tsx`** - Claude Code generates:
```typescript
// React 19: No need for forwardRef, ref is a prop now!
import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        {
          'bg-brand-purple text-white hover:bg-brand-purple-dark': variant === 'primary',
          'bg-white text-brand-purple border-2 border-brand-purple hover:bg-gray-50': variant === 'secondary',
          'hover:bg-brand-dark-light': variant === 'ghost',
          'bg-red-600 text-white hover:bg-red-700': variant === 'danger',
        },
        {
          'h-9 px-4 text-sm': size === 'sm',
          'h-11 px-6 text-base': size === 'md',
          'h-14 px-8 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
```

**React 19 Benefit:** No more `forwardRef`! The `ref` prop now works directly.

**Similar patterns for:** `input.tsx`, `textarea.tsx`, `label.tsx`, `container.tsx`

#### 1.2 Layout Components

**`components/layout/navbar.tsx`** - Claude Code generates (client component):
```typescript
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/cn';
import { NAVIGATION_LINKS } from '@/config/navigation';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-brand-dark border-b border-brand-dark-light">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-brand-purple to-pink-500 bg-clip-text text-transparent">
              TITAN
            </span>
            <span className="text-white"> SHIELD</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
```

**`components/layout/footer.tsx`** - Claude Code generates (server component):
```typescript
import Link from 'next/link';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-dark-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location */}
          <div>
            <h3 className="text-white font-semibold mb-4">Palestine</h3>
            <p className="text-gray-400 text-sm">
              {SITE_CONFIG.contact.address.street}<br />
              {SITE_CONFIG.contact.address.city}
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Email: {SITE_CONFIG.contact.email}<br />
              Call us: {SITE_CONFIG.contact.phone}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms-service" className="text-gray-400 hover:text-white">Terms Service</Link></li>
            </ul>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href={SITE_CONFIG.links.facebook} className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href={SITE_CONFIG.links.linkedin} className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href={SITE_CONFIG.links.instagram} className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-brand-dark-light text-center text-gray-400 text-sm">
          <p>Security is Every Byte</p>
          <p className="mt-2">© {new Date().getFullYear()} Titan Shield. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
```

**`app/layout.tsx`** - Claude Code generates:
```typescript
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    default: 'TITAN Shield - Leading Cybersecurity in Palestine',
    template: '%s | TITAN Shield',
  },
  description: 'Professional cybersecurity services including penetration testing, managed security, and compliance consulting.',
  keywords: ['cybersecurity', 'palestine', 'penetration testing', 'MSSP', 'red team'],
  authors: [{ name: 'TITAN Shield' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://titanshield.ps',
    siteName: 'TITAN Shield',
    images: [{ url: '/og-image.jpg' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-brand-dark text-white antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
```

**Deliverable:** Complete design system with Navbar/Footer consistent across all pages

---

### **PHASE 2: Homepage & Service Pages** (Week 2-3)

**Objective:** Build all static marketing pages

#### 2.1 Services Data Structure

**`config/services.ts`** - YOU provide content:
```typescript
import { Shield, Lock, Server, Users, Smartphone, FileCheck } from 'lucide-react';

export const SERVICES = [
  {
    id: 'offensive-security',
    slug: 'offensive-security',
    title: 'Offensive Security & Penetration Testing',
    shortTitle: 'Red Team Operations',
    icon: Shield,
    description: 'Professional red team and penetration testing services to identify vulnerabilities before attackers do.',
    features: [
      'Advanced red team operations',
      'Web application penetration testing',
      'Network security assessment',
      'Social engineering testing',
      'Wireless security audits',
      'Mobile application testing',
    ],
    benefits: [
      'Identify vulnerabilities proactively',
      'Realistic attack simulation',
      'Comprehensive security reports',
      'Remediation guidance',
    ],
  },
  // ... 5 more services with same structure
] as const;

export type Service = typeof SERVICES[number];
```

#### 2.2 Homepage Sections

**`components/sections/hero-section.tsx`** - Claude Code generates:
```typescript
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-purple via-purple-700 to-pink-600 py-24">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="container relative mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          We Protect Your
          <br />
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            privacy with unbreakable
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          We protect businesses from evolving cyber threats with cutting-edge solutions andelegent mitigation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">Get Protected</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/services">Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
```

**`components/sections/services-grid.tsx`** - Claude Code generates:
```typescript
import { ServiceCard } from '@/components/cards/service-card';
import { SERVICES } from '@/config/services';

export function ServicesGrid() {
  return (
    <section className="py-20 bg-brand-dark-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-brand-purple text-sm font-semibold uppercase tracking-wide mb-2">
            WHAT WE OFFER
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Trusted <span className="text-brand-purple">Shield</span> in Cybersecurity
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

**`app/(marketing)/page.tsx`** - Claude Code generates:
```typescript
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesGrid } from '@/components/sections/services-grid';
import { AboutPreview } from '@/components/sections/about-preview';
import { StatsSection } from '@/components/sections/stats-section';
import { NewsletterSection } from '@/components/sections/newsletter-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesGrid />
      <StatsSection />
      <NewsletterSection />
    </>
  );
}
```

#### 2.3 Service Pages (Template)

**`app/(marketing)/services/[slug]/page.tsx`** - Claude Code generates:
```typescript
import { notFound } from 'next/navigation';
import { SERVICES } from '@/config/services';
import { ServiceHero } from '@/components/sections/service-hero';
import { FeaturesList } from '@/components/sections/features-list';
import { CTABox } from '@/components/cards/cta-box';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceHero service={service} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">{service.shortTitle}</h2>
            <p className="text-gray-300 text-lg mb-8">{service.description}</p>

            <FeaturesList features={service.features} />
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <CTABox />
          </div>
        </div>
      </div>
    </>
  );
}
```

**Deliverable:** All 6 service pages + homepage with reusable components

---

### **PHASE 3: Contact Form with Security** (Week 3-4)

**Objective:** Implement secure contact form with rate limiting and CAPTCHA

#### 3.1 Validation Schema

**`lib/validation.ts`** - Claude Code generates:
```typescript
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
  honeypot: z.string().max(0, 'Bot detected'), // Should be empty
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
```

#### 3.2 Rate Limiting

**`lib/rate-limit.ts`** - Claude Code generates:
```typescript
import { headers } from 'next/headers';

const rateLimitMap = new Map<string, number[]>();

const RATE_LIMIT = 5; // requests
const WINDOW_SIZE = 60 * 60 * 1000; // 1 hour in ms

export async function rateLimit(): Promise<{ success: boolean; remaining: number }> {
  const headersList = headers();
  const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'unknown';

  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Filter out timestamps outside window
  const validTimestamps = timestamps.filter((t) => now - t < WINDOW_SIZE);

  if (validTimestamps.length >= RATE_LIMIT) {
    return { success: false, remaining: 0 };
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);

  return { success: true, remaining: RATE_LIMIT - validTimestamps.length };
}
```

#### 3.3 Email Service

**`lib/email.ts`** - Claude Code generates:
```typescript
import { Resend } from 'resend';
import { ContactFormData } from './validation';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormData) {
  const { name, email, phone, subject, message } = data;

  try {
    await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM!,
      to: process.env.CONTACT_EMAIL_TO!,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Sent from titanshield.ps contact form</small></p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Email send error:', error);
    throw new Error('Failed to send email');
  }
}
```

#### 3.4 Server Action (React 19 Compatible)

**`app/actions/contact.ts`** - Claude Code generates:
```typescript
'use server';

import { contactFormSchema } from '@/lib/validation';
import { sendContactEmail } from '@/lib/email';
import { rateLimit } from '@/lib/rate-limit';

// Return type for useActionState
type ActionState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContactForm(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  // Rate limiting
  const rateLimitResult = await rateLimit();
  if (!rateLimitResult.success) {
    return {
      success: false,
      message: 'Too many requests. Please try again later.',
    };
  }

  // Parse and validate
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone') || undefined,
    subject: formData.get('subject'),
    message: formData.get('message'),
    honeypot: formData.get('website') || '', // Honeypot field
  };

  const result = contactFormSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      message: 'Please fix the errors below.',
      errors: result.error.flatten().fieldErrors,
    };
  }

  // Honeypot check - silently succeed for bots
  if (result.data.honeypot) {
    return {
      success: true,
      message: 'Thank you! We\'ll be in touch soon.',
    };
  }

  // Send email
  try {
    await sendContactEmail(result.data);
    return {
      success: true,
      message: 'Message sent successfully! We\'ll get back to you soon.',
    };
  } catch (error) {
    console.error('Email send error:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again later.',
    };
  }
}
```

**Note:** React 19's `useActionState` requires the action to accept `(prevState, formData)` and return the new state.

#### 3.5 Contact Form Component (React 19 + useActionState)

**`components/forms/contact-form.tsx`** - Claude Code generates:
```typescript
'use client';

import { useActionState } from 'react';
import { submitContactForm } from '@/app/actions/contact';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const initialState = {
  success: false,
  message: '',
  errors: {},
};

export function ContactForm() {
  // React 19's useActionState hook - handles pending/error states automatically
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  return (
    <form action={formAction} className="space-y-6">
      {/* Name */}
      <div>
        <Input
          name="name"
          placeholder="Your Name"
          required
          error={state.errors?.name?.[0]}
          disabled={isPending}
        />
      </div>

      {/* Email */}
      <div>
        <Input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          error={state.errors?.email?.[0]}
          disabled={isPending}
        />
      </div>

      {/* Phone */}
      <div>
        <Input
          name="phone"
          type="tel"
          placeholder="Phone Number (optional)"
          error={state.errors?.phone?.[0]}
          disabled={isPending}
        />
      </div>

      {/* Subject */}
      <div>
        <Input
          name="subject"
          placeholder="Subject"
          required
          error={state.errors?.subject?.[0]}
          disabled={isPending}
        />
      </div>

      {/* Message */}
      <div>
        <Textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          required
          error={state.errors?.message?.[0]}
          disabled={isPending}
        />
      </div>

      {/* Honeypot (hidden spam trap) */}
      <input
        type="text"
        name="website"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Submit Button - isPending automatically managed by useActionState */}
      <Button type="submit" size="lg" className="w-full" disabled={isPending}>
        {isPending ? 'Sending...' : 'Summon The TITANs'}
      </Button>

      {/* Success/Error Message */}
      {state.message && (
        <div
          className={`p-4 rounded-md ${
            state.success
              ? 'bg-green-500/10 text-green-400 border border-green-500/20'
              : 'bg-red-500/10 text-red-400 border border-red-500/20'
          }`}
        >
          {state.message}
        </div>
      )}
    </form>
  );
}
```

**Key Improvements with React 19:**
- ✅ No manual `useState` for loading/error states
- ✅ Built-in `isPending` from `useActionState`
- ✅ Progressive enhancement (works without JS)
- ✅ Automatic form reset on success
- ✅ Simpler, less boilerplate code

**Deliverable:** Fully functional contact form with rate limiting, validation, and email delivery

---

### **PHASE 4: SEO & Performance** (Week 4-5)

**Objective:** Optimize for search engines and Core Web Vitals

#### 4.1 Sitemap Generation

**`app/sitemap.ts`** - Claude Code generates:
```typescript
import { MetadataRoute } from 'next';
import { SERVICES } from '@/config/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://titanshield.ps';

  const routes = ['', '/about', '/services', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...routes, ...serviceRoutes];
}
```

#### 4.2 Robots.txt

**`app/robots.ts`** - Claude Code generates:
```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://titanshield.ps/sitemap.xml',
  };
}
```

#### 4.3 Structured Data

**`components/structured-data.tsx`** - Claude Code generates:
```typescript
import { SITE_CONFIG } from '@/config/site';

export function OrganizationStructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TITAN Shield',
    url: 'https://titanshield.ps',
    logo: 'https://titanshield.ps/logo.svg',
    description: 'Leading cybersecurity firm in Palestine',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.contact.address.street,
      addressLocality: SITE_CONFIG.contact.address.city,
      addressCountry: 'PS',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.contact.phone,
      contactType: 'Customer Service',
      email: SITE_CONFIG.contact.email,
    },
    sameAs: [
      SITE_CONFIG.links.facebook,
      SITE_CONFIG.links.linkedin,
      SITE_CONFIG.links.instagram,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
```

Add to `app/layout.tsx`.

**Deliverable:** Full SEO implementation with sitemap, robots.txt, and structured data

---

### **PHASE 5: Security Hardening** (Week 5)

#### 5.1 Environment Variables Validation

**`config/env.ts`** - Claude Code generates:
```typescript
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  NEXT_PUBLIC_SITE_URL: z.string().url(),
  RESEND_API_KEY: z.string().min(1),
  CONTACT_EMAIL_TO: z.string().email(),
  CONTACT_EMAIL_FROM: z.string().email(),
  TURNSTILE_SECRET_KEY: z.string().optional(),
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().optional(),
  NEXT_PUBLIC_GA_ID: z.string().optional(),
});

export const env = envSchema.parse(process.env);
```

#### 5.2 Content Security Policy (Enhanced)

Update `next.config.ts` with strict CSP:
```typescript
{
  key: 'Content-Security-Policy',
  value: [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com https://www.googletagmanager.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https: blob:",
    "font-src 'self' data:",
    "connect-src 'self' https://challenges.cloudflare.com https://www.google-analytics.com",
    "frame-src https://challenges.cloudflare.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'self'",
    "upgrade-insecure-requests"
  ].join('; ')
}
```

**Deliverable:** Security headers + validated environment variables

---

### **PHASE 6: Testing & QA** (Week 6)

#### 6.1 Lighthouse CI

**`.github/workflows/lighthouse.yml`** - Claude Code generates:
```yaml
name: Lighthouse CI
on: [push]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: treosh/lighthouse-ci-action@v11
        with:
          urls: |
            http://localhost:3000
            http://localhost:3000/services
            http://localhost:3000/contact
          uploadArtifacts: true
```

#### 6.2 Testing Checklist

```markdown
## Pre-Launch QA Checklist

### Functionality
- [ ] All internal links work
- [ ] All external links open in new tab
- [ ] Contact form submits successfully
- [ ] Email delivery confirmed
- [ ] Rate limiting works (test with 6 rapid submissions)
- [ ] Mobile menu opens/closes
- [ ] All images load

### Performance (Lighthouse Mobile)
- [ ] Performance Score ≥ 90
- [ ] Accessibility Score ≥ 95
- [ ] Best Practices Score ≥ 95
- [ ] SEO Score ≥ 95
- [ ] LCP < 2.5s
- [ ] CLS < 0.1

### Security
- [ ] HTTPS enforced
- [ ] Security headers present (test at securityheaders.com)
- [ ] SSL Labs rating A+ (test at ssllabs.com)
- [ ] No console errors
- [ ] No sensitive data in client bundle

### SEO
- [ ] All pages have unique titles
- [ ] All pages have meta descriptions
- [ ] Sitemap accessible at /sitemap.xml
- [ ] Robots.txt accessible
- [ ] Open Graph tags present
- [ ] Structured data valid (test at schema.org validator)

### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA
- [ ] Screen reader tested (NVDA/VoiceOver)
- [ ] No accessibility violations (axe DevTools)

### Cross-Browser
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Responsive Design
- [ ] Mobile (375px)
- [ ] Tablet (768px)
- [ ] Laptop (1024px)
- [ ] Desktop (1440px)
- [ ] Large Desktop (1920px+)
```

**Deliverable:** Comprehensive testing report with all checks passing

---

### **PHASE 7: Deployment** (Week 6)

#### 7.1 Vercel Deployment Steps

**Claude Code will guide you through:**

1. Connect GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Set up custom domain (titanshield.ps)
4. Enable Vercel Analytics
5. Deploy to production

#### 7.2 Cloudflare Configuration

**YOU configure in Cloudflare dashboard:**

1. Add DNS records:
   - A record: Vercel IP (provided by Vercel)
   - CNAME www → cname.vercel-dns.com
2. Enable WAF (Web Application Firewall)
3. Configure rate limiting rules
4. Enable bot protection
5. Set minimum TLS version to 1.2

#### 7.3 Post-Launch Monitoring

**First 24 Hours:**
- Monitor Vercel dashboard for errors
- Check analytics for traffic
- Verify email deliveries
- Monitor Cloudflare analytics

**Deliverable:** Live site on titanshield.ps with monitoring active

---

## 🤖 Claude Code vs Your Responsibilities

### **Claude Code Auto-Generates:**
- ✅ All component boilerplate
- ✅ TypeScript interfaces
- ✅ Tailwind CSS classes
- ✅ Validation schemas (Zod)
- ✅ API routes and Server Actions
- ✅ Configuration files
- ✅ Testing templates
- ✅ Documentation
- ✅ Git commits with semantic messages

### **YOU Provide:**
- 🎨 Brand colors (hex codes)
- 📝 All copy/content for pages
- 🖼️ Images (logos, service images, team photos)
- 🔑 API keys (Resend, Turnstile, Analytics)
- 📧 Email addresses for contact delivery
- ✅ Final approval on each phase
- 🌐 Cloudflare account configuration

---

## 📊 Success Metrics (Measurable)

```
Security:
✅ A+ SSL Labs rating
✅ 100% SecurityHeaders.com score
✅ Zero critical vulnerabilities

Performance:
✅ Lighthouse Performance ≥ 90 (mobile)
✅ LCP < 2.5 seconds
✅ CLS < 0.1
✅ Total bundle size < 200KB (initial load)

SEO:
✅ Lighthouse SEO ≥ 95
✅ All pages indexed within 7 days
✅ Valid structured data

Functionality:
✅ 100% form delivery rate
✅ 99.9% uptime
✅ Zero UI inconsistencies
```

---

## 🚨 Risk Mitigation

| Risk | Mitigation |
|------|-----------|
| Missing client content | Use lorem ipsum placeholders, mark clearly |
| API keys not ready | Use development mode, add TODO comments |
| Design assets delayed | Use temporary logo (text-based), swap later |
| Scope creep | Document all changes, require approval |
| Performance regression | Run Lighthouse after each phase |

---

## 📝 Suggested Improvements to Source Docs

### 1. **Consolidate Documents**
The 4 separate documents have significant overlap. Recommend merging into:
- `IMPLEMENTATION_PLAN.md` (this document)
- `REQUIREMENTS_CHECKLIST.md` (for client assets)

### 2. **Add Testing Strategy Earlier**
Original plan mentions testing in Phase 7. I recommend:
- Unit tests alongside components (Phases 1-2)
- E2E tests during Phase 6
- Lighthouse CI from Phase 0

### 3. **Use Server Actions Over API Routes**
Next.js 14 Server Actions are more secure (built-in CSRF protection) and simpler than API routes. I've updated the contact form to use them.

### 4. **Specify Component Granularity**
Original plan mentions "ServiceCard" but doesn't specify atoms vs molecules. I've added atomic design structure for clarity.

### 5. **Add Performance Budget**
Original plan has Lighthouse targets but no bundle size budget. I recommend:
- Initial JS bundle < 200KB
- Total page weight < 1.5MB
- Images < 500KB each

### 6. **Clarify WordPress Migration**
Original plan mentions extracting content but doesn't specify format. Recommend:
- Export to Markdown files
- Store in `content/` directory
- Optional: Use Contentlayer for type-safe MDX

---

## ✅ Pre-Phase 0 Checklist

Before saying **"Proceed to Phase 0"**, ensure:

```
CRITICAL (Must Have):
[ ] Node.js v18+ installed
[ ] Git installed
[ ] GitHub account ready
[ ] You understand the project structure above
[ ] You have ~4-6 weeks for development

HIGH (Need in Week 1):
[ ] Brand colors (hex codes) - OR - permission to use placeholder
[ ] Logo files - OR - permission to use text logo temporarily
[ ] Vercel account created
[ ] Cloudflare account created

MEDIUM (Need in Week 2):
[ ] Resend.com account
[ ] Content for homepage hero section
[ ] Service descriptions

LOW (Can add later):
[ ] All images optimized
[ ] Team photos
[ ] Privacy Policy content
```

---

## 🎯 Next Steps

1. **Review this plan** - Does it make sense? Any questions?
2. **Gather critical assets** - At minimum: brand colors
3. **Say: "Proceed to Phase 0"** - Claude Code will:
   - Initialize Next.js project
   - Configure Tailwind with your colors
   - Set up all configuration files
   - Create project structure
   - Initialize Git repository
   - Create first commit

---

## 📦 2025 Stack Summary

### **What We're Building With:**

```bash
Framework:    Next.js 16.0.5 (Turbopack stable, React Compiler)
Runtime:      React 19.2 (Server Components, Server Actions)
Styling:      Tailwind CSS v4 (CSS-first, 5x faster)
Language:     TypeScript 5.9 (Deferred imports, Node20)
Deployment:   Vercel (Edge Functions, Analytics)
Security:     Cloudflare (WAF, DDoS, Turnstile CAPTCHA)
Email:        Resend 6.5.2 (99.9% deliverability)
Validation:   Zod v4 (Type-safe schemas)
```

### **Key Performance Wins:**

- ✅ **5-10x faster** development (Turbopack)
- ✅ **5x faster** Tailwind builds (v4 rewrite)
- ✅ **100x faster** incremental builds (filesystem caching)
- ✅ **Automatic optimization** (React Compiler)
- ✅ **Zero config** Tailwind content detection

### **Developer Experience:**

- ✅ No more `forwardRef` (React 19)
- ✅ No more manual loading states (`useActionState`)
- ✅ CSS-first Tailwind config (cleaner)
- ✅ Auto-memoization (React Compiler)
- ✅ Instant hot reload (Turbopack)

---

## 🎓 Learning Resources (Latest)

**Official Docs:**
- Next.js 16: https://nextjs.org/blog/next-16
- React 19: https://react.dev/blog/2024/12/05/react-19
- Tailwind v4: https://tailwindcss.com/blog/tailwindcss-v4
- TypeScript 5.9: https://devblogs.microsoft.com/typescript/announcing-typescript-5-9/

**Migration Guides:**
- Next.js 16 upgrade: https://nextjs.org/docs/app/guides/upgrading/version-16
- Tailwind v4 upgrade: https://tailwindcss.com/docs/upgrade-guide
- React 19 upgrade: https://react.dev/blog/2024/04/25/react-19-upgrade-guide

---

**Ready when you are. Just say "Proceed to Phase 0" and we'll start building with the latest 2025 stack!** 🚀
