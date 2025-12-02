# Lighthouse Performance Testing Guide

## Quick Test (Chrome DevTools)
1. Open your site in Chrome
2. Press F12 to open DevTools
3. Click "Lighthouse" tab
4. Select "Performance" + "Desktop" or "Mobile"
5. Click "Analyze page load"

## Target Scores
- Performance: 90+ (Good)
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Total Blocking Time: < 200ms
- Cumulative Layout Shift: < 0.1

## Common Issues to Check
- Image optimization (use Next.js Image component ✅)
- Unused JavaScript
- Render-blocking resources
- Large DOM size
- Animation performance

## Tips for Better Scores
- Use production build: npm run build && npm start
- Test on incognito mode (no extensions)
- Test on both desktop and mobile
