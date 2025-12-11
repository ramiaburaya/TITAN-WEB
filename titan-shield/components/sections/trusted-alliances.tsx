"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function TrustedAlliances() {
  // Standardized dimensions for all logos to ensure uniformity
  const logos = [
    { src: "/assets/RedWold_logo.svg", alt: "RedWolf", width: 200, height: 80 },
    { src: "/assets/Elastic_idaGLjDiGn_1-1-3.png", alt: "Elastic", width: 200, height: 80 },
    { src: "/assets/sas-logo-sas-blue-1.png", alt: "SAS", width: 200, height: 80 },
    { src: "/assets/Cisco-logo-2-2048x408.png", alt: "Cisco", width: 200, height: 80 },
    { src: "/assets/beamsec_logo_big-r0ox19odmegfmaykxdmkszc6p3xg7uozofnw3jn08w.png", alt: "BeamSec", width: 200, height: 80 },
    { src: "/assets/logo-sotero.png", alt: "Sotero", width: 200, height: 80 },
    { src: "/assets/AppSentinels-logos_23027dd02.webp", alt: "AppSentinels", width: 200, height: 80 },
    { src: "/assets/manageengine-logo-white-2048x360.png", alt: "ManageEngine", width: 200, height: 80 },
    { src: "/assets/logo-header-threatdown-horizontal.svg", alt: "ThreatDown", width: 200, height: 80 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setTouchEnd(null); // Reset touch end
    if ('touches' in e) {
       setTouchStart(e.targetTouches[0].clientX);
    } else {
       setTouchStart((e as React.MouseEvent).clientX);
    }
    setIsPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if ('touches' in e) {
        setTouchEnd(e.targetTouches[0].clientX);
    } else {
        setTouchEnd((e as React.MouseEvent).clientX);
    }
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    // Reset
    setTouchStart(null);
    setTouchEnd(null);
    setIsPaused(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % logos.length);
  };

  const prevSlide = () => {
     setCurrentIndex((prev) => (prev - 1 + logos.length) % logos.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => clearInterval(interval);
  }, [logos.length, isPaused]);

  // Calculate generic index distance handling wrap-around
  const getLogoStyle = (index: number) => {
    const total = logos.length;
    // Calculate distance: -1 (left), 0 (center), 1 (right)
    // We want to find the shortest path in the circle
    let diff = (index - currentIndex + total) % total;
    if (diff > total / 2) diff -= total;
    
    // Determine position state
    const isCenter = diff === 0;
    const isLeft = diff === -1; // Immediately to the left
    const isRight = diff === 1; // Immediately to the right
    
    // Base styles
    const style: React.CSSProperties = {
      position: 'absolute',
      transition: 'all 1s cubic-bezier(0.4, 0.0, 0.2, 1)',
      left: '50%',
      top: '50%',
    };

    if (isCenter) {
      return {
        ...style,
        transform: 'translate(-50%, -50%) scale(1)',
        opacity: 1,
        zIndex: 20,
        filter: 'blur(0px)',
      };
    } else if (isLeft) {
      return {
        ...style,
        transform: 'translate(-150%, -50%) scale(0.8)',
        opacity: 0.4,
        zIndex: 10,
        filter: 'blur(2px)',
      };
    } else if (isRight) {
      return {
        ...style,
        transform: 'translate(50%, -50%) scale(0.8)',
        opacity: 0.4,
        zIndex: 10,
        filter: 'blur(2px)',
      };
    } else {
      // Hidden items (wait in the background)
      // Position them behind the center but invisible to avoid pop-in
      // If we want a continuous flow, we place them further out or hide them
      return {
        ...style,
        transform: diff < 0 ? 'translate(-250%, -50%) scale(0.6)' : 'translate(150%, -50%) scale(0.6)',
        opacity: 0,
        zIndex: 0,
        pointerEvents: 'none',
      };
    }
  };

  return (
    <section className="bg-brand-dark py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 text-center">
        {/* Decorative top line */}
        <div className="w-16 h-[2px] bg-linear-to-r from-transparent via-[#8B5CF6]/50 to-transparent mx-auto mb-10" />

        {/* Text Block */}
        <div className="space-y-4 mb-20">
          {/* Main heading - softer color */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300">
            <span className="text-[#8B5CF6]">Trusted Alliances</span>, Global Impact
          </h2>
        </div>

        {/* Logos Carousel */}
        <div
          className="mt-10 md:mt-12 relative overflow-hidden h-64 cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
              setIsPaused(false);
              setTouchStart(null);
              setTouchEnd(null);
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onTouchStart}
          onMouseMove={onTouchMove}
          onMouseUp={onTouchEnd}
        >
          {/* Container for absolute items */}
          <div className="w-full h-full relative perspective-1000">
            {logos.map((logo, index) => {
               const style = getLogoStyle(index);
               // Determine if this is the center slide to calculate "active" state related rendering
               const isActive = (index === currentIndex);

               return (
                <div
                  key={logo.alt} // STABLE KEY is crucial for transition
                  className="flex flex-col items-center justify-center w-64 md:w-80"
                  style={style as any}
                >
                  <div className="flex items-center justify-center w-full h-32 md:h-40 select-none pointer-events-none px-4">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className="max-h-full max-w-full object-contain mx-auto"
                      draggable={false}
                    />
                  </div>
                  {/* Decorative line under center logo */}
                  <div 
                    className={`mt-6 h-px w-28 bg-linear-to-r from-transparent via-white/40 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} 
                  />
                </div>
              );
            })}
          </div>

          {/* Enhanced gradient overlays - responsive widths */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-24 md:w-32 lg:w-40 bg-linear-to-r from-brand-dark via-brand-dark/80 to-transparent pointer-events-none z-30" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-24 md:w-32 lg:w-40 bg-linear-to-l from-brand-dark via-brand-dark/80 to-transparent pointer-events-none z-30" />
        </div>
      </div>
    </section>
  );
}
