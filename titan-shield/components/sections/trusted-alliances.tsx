"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function TrustedAlliances() {
  const logos = [
    { src: "/assets/RedWold_logo.svg", alt: "RedWolf", width: 120, height: 40 },
    { src: "/assets/Elastic_idaGLjDiGn_1-1-3.png", alt: "Elastic", width: 120, height: 40 },
    { src: "/assets/sas-logo-sas-blue-1.png", alt: "SAS", width: 100, height: 40 },
    { src: "/assets/Cisco-logo-2-2048x408.png", alt: "Cisco", width: 120, height: 40 },
    { src: "/assets/beamsec_logo_big-r0ox19odmegfmaykxdmkszc6p3xg7uozofnw3jn08w.png", alt: "BeamSec", width: 120, height: 40 },
    { src: "/assets/logo-sotero.png", alt: "Sotero", width: 120, height: 40 },
    { src: "/assets/AppSentinels-logos_23027dd02.webp", alt: "AppSentinels", width: 120, height: 40 },
    { src: "/assets/manageengine-logo-white-2048x360.png", alt: "ManageEngine", width: 140, height: 40 },
    { src: "/assets/logo-header-threatdown-horizontal.svg", alt: "ThreatDown", width: 130, height: 40 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, 2500); // Fast: 2 seconds

    return () => clearInterval(interval);
  }, [logos.length, isPaused]);

  const getVisibleLogos = () => {
    const prevIndex = currentIndex === 0 ? logos.length - 1 : currentIndex - 1;
    const nextIndex = (currentIndex + 1) % logos.length;

    return [
      { ...logos[prevIndex], position: 'left' },
      { ...logos[currentIndex], position: 'center' },
      { ...logos[nextIndex], position: 'right' },
    ];
  };

  return (
    <section className="bg-[#141214] py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8 text-center">
        {/* Decorative top line */}
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#9333ea]/50 to-transparent mx-auto mb-8" />

        {/* Text Block */}
        <div className="space-y-4 mb-16">
          {/* Main heading - softer color */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300">
            <span className="text-[#9333ea]">Trusted Alliances</span>, Global Impact
          </h2>
        </div>

        {/* Logos Carousel */}
        <div
          className="mt-10 md:mt-12 relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex items-center justify-center gap-12 md:gap-16 h-28 relative">
            {getVisibleLogos().map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className={`flex flex-col items-center justify-center transition-all duration-700 ease-out ${
                  logo.position === 'center'
                    ? 'opacity-100 scale-100 z-10 blur-0'
                    : 'opacity-25 scale-90 z-0 blur-sm'
                }`}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-14 md:h-20 w-auto object-contain"
                />
                {/* Decorative line under center logo */}
                {logo.position === 'center' && (
                  <div className="mt-4 h-[1px] w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                )}
              </div>
            ))}
          </div>

          {/* Enhanced gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#141214] via-[#141214]/80 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#141214] via-[#141214]/80 to-transparent pointer-events-none" />
        </div>

        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {logos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-[#9333ea] w-8'
                  : 'bg-white/20 w-2 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
