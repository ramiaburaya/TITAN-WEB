"use client";

import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbs: { label: string; href?: string }[];
  backgroundImage: string;
  backgroundAlt?: string;
}

export function PageHero({
  title,
  description,
  breadcrumbs,
  backgroundImage,
  backgroundAlt = "Page background",
}: PageHeroProps) {
  return (
    <section className="relative w-full min-h-[300px] md:min-h-[350px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={backgroundAlt}
        fill
        className="object-cover object-center"
        priority
        quality={85}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Purple gradient overlay - matching hero section */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7a1cff]/40 via-[#a44bff]/20 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
          {title}
        </h1>

        {description && (
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-6">
            {description}
          </p>
        )}

        {/* Breadcrumb */}
        <nav className="flex justify-center items-center gap-2 text-sm">
          <div className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <div className="flex items-center gap-2">
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center gap-2">
                  {index > 0 && <span className="text-white/60">/</span>}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="text-[#c084fc] hover:text-[#f0abfc] transition-colors duration-200 font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                      {crumb.label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
