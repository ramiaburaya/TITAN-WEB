"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Facebook, Linkedin } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function HeroSection() {
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const phrases = [
      "Digital World",
      "Systems With Titans Strength",
      "Data, Safeguard Your Success",
      "Privacy With Unbreakable Security",
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      if (!typingRef.current) return;

      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        typingRef.current.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typingRef.current.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        typingSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
      }

      setTimeout(type, typingSpeed);
    };

    const timeout = setTimeout(type, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative w-full min-h-[700px] md:min-h-[750px] overflow-hidden flex items-start pt-32 md:pt-40">
      {/* Layer 1: Background Image */}
      <Image
        src="/assets/herosection_bg.png"
        alt="Hero background"
        fill
        className="object-cover object-center brightness-50"
        priority
      />

      {/* Layer 2: Video - FULL WIDTH background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen"
      >
        <source src="/assets/home-vedio.mp4" type="video/mp4" />
        <source src="/assets/home-vedio-2.webm" type="video/webm" />
      </video>

      {/* Layer 3: Purple Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7a1cff]/55 via-[#a44bff]/25 to-transparent pointer-events-none" />

      {/* Layer 4: Left Side Vertical Social Icons (Foreground) */}
      <div className="absolute left-8 md:left-16 lg:left-24 top-48 md:top-53 flex flex-col gap-6 text-white/70 z-20">
        <a
          href={SITE_CONFIG.links.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-all"
          aria-label="Facebook"
        >
          <Facebook className="h-6 w-6" />
        </a>
        <a
          href={SITE_CONFIG.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-all"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-6 w-6" />
        </a>
      </div>

      {/* Vertical Gradient Line Below Social Icons */}
      <div className="absolute left-8 md:left-16 lg:left-27 top-[250px] md:top-[300px] flex flex-col z-20">
        <div className="w-[2px] h-[120px] bg-gradient-to-b from-white/70 via-white/40 to-transparent" />
      </div>

      {/* Layer 5: Main Content (Foreground) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 mt-8">
        <div className="max-w-5xl">
          {/* Main Heading - Two lines: "We Protect Your" then typing text */}
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            We Protect Your
            <br />
            <span ref={typingRef} className="inline-block">
              Digital World
            </span>
            <span className="animate-pulse">|</span>
          </h1>

          {/* Horizontal Gradient Line */}
          <div className="mt-6 mb-8">
            <div className="w-[240px] h-[2px] bg-gradient-to-r from-white/70 via-white/40 to-transparent" />
          </div>

          {/* Paragraph with Vertical Gradient Line */}
          <div className="flex gap-4 mt-10 max-w-3xl">
            <p className="text-white/80 text-base md:text-lg leading-relaxed flex-1">
              We protect businesses from evolving cyber threats with cutting-edge solutions and expert strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
