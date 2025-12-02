# Animation Smoothness Testing

## Chrome DevTools Method
1. Open DevTools > Performance tab
2. Enable "Screenshots" and "Web Vitals"
3. Click Record
4. Scroll through your homepage
5. Stop recording

## What to Look For
- **Green bars** = Good (under 16ms per frame for 60fps)
- **Yellow/Red bars** = Performance issues
- **Frame drops** = Animation stuttering

## Your Site's Animations to Test
1. Hero section fade-in animations
2. Service card hover effects
3. Service card shake animation (scroll trigger)
4. "Shield" and "TITAN" bounce animations
5. Progress bar animations in Why TITAN
6. Trusted Alliances carousel transitions
7. Newsletter parallax background

## Quick FPS Counter
1. Press Ctrl+Shift+P in Chrome
2. Type "Show frames per second (FPS) meter"
3. Scroll and interact - should stay near 60fps
