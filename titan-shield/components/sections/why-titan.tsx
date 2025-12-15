"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ProgressBarProps {
  label: string;
  percentage: number;
  delay?: number;
}

function ProgressBar({ label, percentage, delay = 0 }: ProgressBarProps) {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  const timeoutRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
              setWidth(percentage);
            }, delay);
          } else {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setWidth(0);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [percentage, delay]);

  return (
    <div ref={barRef} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-gray-300 text-sm md:text-base">{label}</span>
        <span className="text-white text-sm md:text-base font-medium">{percentage}%</span>
      </div>
      <div className="w-full h-3 bg-gray-800/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-600 to-purple-500 rounded-full transition-all duration-[2500ms] ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export function WhyTITAN() {
  return (
    <section className="relative py-24 md:py-28 bg-brand-dark overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Desktop: 3-column grid with row spans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

          {/* Card 1: Expert-Led Security (1 column) */}
          <div className="lg:col-span-1 bg-white/5 rounded-2xl overflow-hidden border border-gray-800/30">
            <div className="relative w-full aspect-video">
              <Image
                src="/assets/expert-led.webp"
                alt="Expert-Led Security"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-3">
                Expert-Led Security
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                A team of seasoned cybersecurity professionals with proven expertise.
              </p>
            </div>
          </div>

          {/* Card 2: WHY TITAN - Comprehensive Protection Strategies (2 columns) */}
          <div className="lg:col-span-2 bg-white/5 rounded-2xl p-8 md:p-10 border border-[#8B5CF6]/20 shadow-lg shadow-[#8B5CF6]/10">
            {/* Eyebrow + Title */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-12 bg-gradient-to-r from-[#8B5CF6] to-transparent" />
                <span className="text-gray-400 text-xs uppercase tracking-[0.2em]">WHY</span>
                <span className="text-[#8B5CF6] text-xs uppercase tracking-[0.2em] font-semibold inline-block animate-[bounce-shield_6s_ease-in-out_infinite]">TITAN</span>
              </div>
              <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                Comprehensive Protection Strategies
              </h2>
            </div>

            {/* Progress Bars */}
            <div className="space-y-6">
              <ProgressBar label="Trusted Defense" percentage={95} delay={200} />
              <ProgressBar label="Digital Shield" percentage={85} delay={400} />
              <ProgressBar label="Resilient Protection" percentage={90} delay={600} />
            </div>
          </div>

          {/* Card 3: 24/7 Security Operations (spans 2 columns on desktop) */}
          <div className="lg:col-span-2 bg-white/5 rounded-2xl overflow-hidden border border-gray-800/30 lg:h-80">
            <div className="relative w-full aspect-video lg:h-48">
              <Image
                src="/assets/security-operations.webp"
                alt="24/7 Security Operations"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                24/7 Security Operations
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Round-the-clock monitoring and rapid response to emerging threats.
              </p>
            </div>
          </div>

          {/* Card 4: Tailored Solutions (1 column) */}
          <div className="bg-white/5 rounded-2xl overflow-hidden border border-gray-800/30 flex flex-col lg:h-80">
            <div className="p-6">
              <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                Tailored Solutions
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Custom strategies that align with your business needs.
              </p>
            </div>
            <div className="relative w-full flex-1 min-h-0">
              <Image
                src="/assets/expert-led.webp"
                alt="Tailored Solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
