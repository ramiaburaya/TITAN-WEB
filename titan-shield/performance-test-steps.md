# Complete Performance Testing Steps

## Step 1: Build for Production
```bash
cd titan-shield
npm run build
npm start
```

## Step 2: Open in Browser
Navigate to: http://localhost:3000

## Step 3: Run Lighthouse
1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Select:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
4. Device: Desktop AND Mobile (test both)
5. Click "Analyze page load"

## Step 4: Check Core Web Vitals
Target metrics:
- **LCP (Largest Contentful Paint)**: < 2.5s ⭐
- **FID (First Input Delay)**: < 100ms ⭐
- **CLS (Cumulative Layout Shift)**: < 0.1 ⭐

## Step 5: Test Animations (FPS)
1. Ctrl+Shift+P → "Show frames per second"
2. Scroll through entire page
3. FPS should stay near 60

## Step 6: Test on Different Devices
- Desktop (1920x1080)
- Laptop (1366x768)
- Tablet (768px)
- Mobile (390px - iPhone 12 Pro)

## Step 7: Network Testing
1. DevTools > Network tab
2. Throttle to "Fast 3G" or "Slow 3G"
3. Reload page and test performance

## Expected Results for Your Site
- Performance Score: 85-95+
- All animations at 60fps
- No layout shifts during load
- Smooth scrolling and interactions
