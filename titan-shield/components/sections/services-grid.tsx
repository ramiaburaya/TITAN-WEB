"use client";

import { ServiceCard } from "@/components/cards/service-card";
import { SERVICES } from "@/config/services";

export function ServicesGrid() {
  return (
    <section className="relative py-24 md:py-28 bg-[#0a0a0a] overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#ffffff] text-xs md:text-sm font-semibold uppercase tracking-widest mb-3">
            WHAT WE OFFER
          </p>

          {/* Decorative gradient line */}
          <div className="flex justify-center mb-4">
            <div className="h-[2px] w-24 bg-gradient-to-l from-[#9333ea] to-transparent" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white">
            Your Trusted <span className="text-[#9333ea] inline-block animate-[bounce-shield_6s_ease-in-out_infinite]">Shield</span> in Cybersecurity
          </h2>
        </div>

        {/* Glow background + Services grid */}
        <div className="relative mt-12 md:mt-16">
          {/* Big purple glow ellipse behind cards - positioned to cover grid area */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="absolute w-full h-full max-w-[1400px] max-h-[800px]">
              {/* Multiple overlapping glows for better coverage */}
              <div className="absolute inset-0 rounded-full bg-purple-600/45 blur-[150px]" />
              <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-[200px] scale-110" />
            </div>
          </div>

          {/* Services grid */}
          <div className="relative z-10 grid gap-6 md:gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                featured={index === 1} // Second card (Endpoint & Mobile Security)
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
