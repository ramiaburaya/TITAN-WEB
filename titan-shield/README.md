# Titan Shield - Cybersecurity Website

> **Modern, secure website built with Next.js 16, React 19, and Tailwind CSS v4**

## 🚀 Technology Stack

- **Framework:** Next.js 16.0.5 (App Router, Turbopack)
- **Runtime:** React 19.2.0 (Server Components, Server Actions)
- **Styling:** Tailwind CSS v4.1.17 (CSS-first configuration)
- **Language:** TypeScript 5.x
- **Deployment:** Vercel (recommended)
- **Email:** Resend API
- **Analytics:** Vercel Analytics

## 🎯 Features

- ✅ **Blazing Fast** - Turbopack bundler (5-10x faster)
- ✅ **Secure by Default** - Comprehensive security headers
- ✅ **SEO Optimized** - Meta tags, sitemap, structured data
- ✅ **Mobile Responsive** - Mobile-first design
- ✅ **Type-Safe** - Full TypeScript coverage
- ✅ **Modern Stack** - Latest stable versions (2025)

## 📦 Prerequisites

- Node.js 20+ (recommended: v22+)
- npm, pnpm, or yarn
- Git

## 🛠️ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Then edit `.env.local` with your actual values.

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
titan-shield/
├── app/                    # Next.js App Router
│   ├── (marketing)/       # Route group for marketing pages
│   ├── (legal)/          # Route group for legal pages
│   ├── actions/          # Server Actions
│   ├── api/              # API Routes
│   ├── globals.css       # Global styles (Tailwind v4 config)
│   └── layout.tsx        # Root layout
├── components/            # React components
│   ├── layout/           # Layout components (Navbar, Footer)
│   ├── sections/         # Page sections
│   ├── cards/            # Card components
│   ├── forms/            # Form components
│   ├── ui/               # Base UI components
│   └── providers/        # Context providers
├── lib/                  # Utility functions
├── types/                # TypeScript types
├── config/               # Configuration files
├── public/               # Static assets
└── tests/                # Test files
```

## 🎨 Tailwind v4 Configuration

Tailwind CSS v4 uses a **CSS-first** configuration approach. All theme customization is in `app/globals.css`:

```css
@theme {
  --color-brand-purple: #7b3ff2;
  --color-brand-dark: #0f172a;
  /* ... more colors */
}
```

## 🔒 Security Features

- Strict Content Security Policy (CSP)
- HSTS (HTTP Strict Transport Security)
- XSS Protection headers
- CSRF protection (built-in with Next.js)
- Rate limiting on forms
- Cloudflare Turnstile CAPTCHA

## 📝 Available Scripts

```bash
npm run dev          # Start development server (Turbopack)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Manual Deployment

```bash
npm run build
npm run start
```

## 📚 Documentation

- [Next.js 16 Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Implementation Plan](../CLAUDE_CODE_IMPLEMENTATION_PLAN.md)

## 📄 License

Copyright © 2025 Titan Shield. All rights reserved.

---

**Built with ❤️ using the latest 2025 web stack**
