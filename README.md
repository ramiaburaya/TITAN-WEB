# TITAN Shield Website

This repository contains the official website for TITAN Shield - Palestine's leading cybersecurity firm.

## 🚀 Project Overview

A modern, high-performance website built with Next.js 16, featuring:
- **Security First**: Built with security best practices
- **SEO Optimized**: Enhanced search engine visibility
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Performance Focused**: Fast loading times and smooth animations
- **Modern Stack**: Next.js 16, React 19, Tailwind CSS v4

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (for version control) - [Download here](https://git-scm.com/)

## 🛠️ Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd TITAN-WEB
```

### 2. Navigate to Project Directory
```bash
cd titan-shield
```

### 3. Install Dependencies
```bash
npm install
```

This will install all required packages including Next.js, React, Tailwind CSS, and other dependencies.

### 4. Start Development Server
```bash
npm run dev
```

The website will be available at: **http://localhost:3000**

## 🌐 Viewing the Website

Once the development server is running:

1. Open your web browser
2. Navigate to: `http://localhost:3000`
3. The website will automatically reload when you make changes to the code

### Navigation Structure
- **Home** (`/`) - Homepage with hero section, services overview, and newsletter
- **Services** (`/services`) - Detailed cybersecurity services
- **About** (`/about`) - Company information and team
- **Contact** (`/contact`) - Contact form and information
- **404 Page** - Custom error page (test by visiting any invalid URL)

## 📱 Testing Responsiveness

### Desktop Testing
- View at full screen (recommended: 1920x1080 or 1366x768)

### Mobile Testing
1. Open browser DevTools (F12)
2. Click the device toggle button (or Ctrl+Shift+M)
3. Test different devices:
   - iPhone 12 Pro (390px)
   - iPad (768px)
   - Desktop (1920px)

### Recommended Breakpoints to Test
- **Mobile**: 375px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1920px+

## 🏗️ Building for Production

### Create Production Build
```bash
npm run build
```

This will:
- Optimize all JavaScript code
- Compress images
- Remove unused code (tree-shaking)
- Minify CSS and HTML

### Run Production Server
```bash
npm start
```

The production build will be available at: **http://localhost:3000**

**Note**: Always test the production build before deployment, as it performs significantly better than the development server.

## 🧪 Performance Testing

### Using Chrome Lighthouse

1. **Open Chrome DevTools** (F12)
2. **Go to Lighthouse tab**
3. **Select options**:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
4. **Choose device**: Desktop or Mobile
5. **Click "Analyze page load"**

### Target Performance Scores
- **Performance**: 90+ ⭐
- **Accessibility**: 95+ ⭐
- **Best Practices**: 95+ ⭐
- **SEO**: 95+ ⭐

### Testing Animation Smoothness

1. **Enable FPS Counter**:
   - Press `Ctrl+Shift+P` in Chrome
   - Type: "Show frames per second (FPS) meter"
   - Should maintain ~60 FPS while scrolling

2. **Test These Animations**:
   - Hero section fade-in effects
   - Service card hover and shake animations
   - Scroll-triggered animations
   - Newsletter parallax background
   - Progress bar animations in "Why TITAN" section

## 📁 Project Structure

```
titan-shield/
├── app/                      # Next.js 16 app directory
│   ├── layout.tsx           # Root layout with navbar/footer
│   ├── page.tsx             # Homepage
│   ├── not-found.tsx        # Custom 404 page
│   └── globals.css          # Global styles and animations
├── components/              # React components
│   ├── sections/            # Page sections (hero, services, etc.)
│   ├── cards/               # Card components
│   ├── layout/              # Layout components (navbar, footer)
│   └── ui/                  # UI components (buttons, scroll-to-top)
├── public/                  # Static assets
│   └── assets/              # Images, videos, icons
├── config/                  # Configuration files
└── package.json             # Dependencies and scripts
```

## 🎨 Key Features

### Homepage Sections
1. **Hero Section** - Dynamic typing animation with background video
2. **Services Grid** - 6 cybersecurity services with hover effects
3. **Why TITAN** - Statistics with animated progress bars
4. **About Preview** - Company overview with visual elements
5. **Newsletter** - Email subscription with parallax background
6. **Trusted Alliances** - Animated logo carousel
7. **Global Impact** - Second logo carousel showcase

### Interactive Features
- Smooth scroll animations
- Hover effects on service cards
- Rotational shake animation on featured cards
- Floating scroll-to-top button
- Responsive navigation menu
- Custom 404 error page

## 🔒 Security & Best Practices

1. **Security First**: All components built with security in mind
2. **SEO Optimized**: Meta tags, semantic HTML, optimized images
3. **Responsive Design**: Mobile-first approach
4. **Performance**: Lazy loading, optimized images, minimal JavaScript
5. **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

## 💻 Development Workflow

### Making Changes
1. Make your code changes
2. Save the file
3. Browser will automatically reload (Hot Module Replacement)

### Before Committing
- Test on multiple screen sizes
- Check browser console for errors (F12)
- Verify all links work correctly
- Test animations and interactions

## 📊 Available NPM Scripts

```bash
npm run dev        # Start development server
npm run build      # Create production build
npm start          # Run production server
npm run lint       # Check code for issues
```

## 🐛 Troubleshooting

### Development Server Won't Start
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Port 3000 Already in Use
```bash
# Kill the process using port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Then restart:
npm run dev
```

### Images Not Loading
- Ensure images are in the `public/assets/` directory
- Check file paths are correct (case-sensitive)
- Verify image file names match exactly

## 📞 Support

For questions or issues:
- Check the browser console for error messages (F12)
- Review the documentation files in the project
- Contact the development team

## 🎯 Next Steps for Stakeholders

1. **First Time Setup**: Follow "Getting Started" section
2. **Explore the Site**: Navigate through all pages
3. **Test Responsiveness**: Use different device sizes
4. **Check Performance**: Run Lighthouse audit
5. **Provide Feedback**: Note any issues or suggestions

---

**Built with ❤️ for TITAN Shield - Security in Every Byte**
