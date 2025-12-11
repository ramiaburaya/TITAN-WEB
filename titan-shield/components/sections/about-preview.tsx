"use client";

import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

export function AboutPreview() {
  const highlights = [
    "Cyber Defense Innovation",
    "Protecting Your Digital World",
    "Secure IT Solutions",
  ];

  return (
    <section className="bg-brand-dark py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Mobile: stack everything */}
        <div className="lg:hidden flex flex-col gap-8">
          {/* Label */}
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-[#8B5CF6]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/70">
              About TITAN
            </span>
          </div>

          {/* Heading + paragraph */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              The TITANS of Cybersecurity
            </h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              Premier cybersecurity firm committed to safeguarding businesses from ever-evolving digital
              threats. We provide comprehensive security solutions tailored to protect your organization&apos;s
              most valuable assets. Whether you&apos;re a startup, enterprise, or multinational corporation, we
              help you stay ahead of cyber risks, ensuring resilience, compliance, and uninterrupted growth.
            </p>
          </div>

          {/* Feature card */}
          <div className="bg-white/5 rounded-3xl px-6 py-8">
            <Image
              src="/assets/titan-warrior-graphic.png"
              alt="Cybersecurity illustration"
              width={400}
              height={300}
              className="mb-6 w-full rounded-2xl object-cover"
              loading="lazy"
            />

            <ul className="space-y-3 text-sm text-white/80 mb-6">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#8B5CF6] text-[#8B5CF6]">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#8B5CF6] px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:scale-95 transition-all duration-300"
            >
              More About Us
            </Link>
          </div>

          {/* Bottom brand text */}
          <div className="mt-4">
            <p className="text-xl font-semibold text-white">Titan Shield</p>
            <p className="text-xl text-[#8B5CF6]">The TITANS</p>
            <p className="text-xl text-white/60">Cyber Security</p>
          </div>
        </div>

        {/* Desktop: 2-column layout */}
        <div className="hidden lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12 xl:gap-16">
          {/* LEFT COLUMN - narrow sidebar */}
          <div className="flex flex-col justify-between min-h-[600px]">
            {/* Top: ABOUT TITAN label */}
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-[#8B5CF6]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/70">
                About TITAN
              </span>
            </div>

            {/* Bottom: Brand text cluster */}
            <div>
              <p className="text-2xl font-semibold text-white mb-1">Titan Shield</p>
              <p className="text-2xl text-[#8B5CF6] mb-1">The TITANS</p>
              <p className="text-2xl text-white/60">Cyber Security</p>
            </div>
          </div>

          {/* RIGHT COLUMN - main content */}
          <div>
            {/* Top: Heading + paragraph */}
            <div className="mb-10">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-6 leading-tight">
                The TITANS of Cybersecurity
              </h2>
              <p className="max-w-[700px] text-base text-white/70 leading-relaxed">
                Premier cybersecurity firm committed to safeguarding businesses from ever-evolving digital
                threats. We provide comprehensive security solutions tailored to protect your organization&apos;s
                most valuable assets. Whether you&apos;re a startup, enterprise, or multinational corporation, we
                help you stay ahead of cyber risks, ensuring resilience, compliance, and uninterrupted growth.
              </p>
            </div>

            {/* Middle: SHIELD + Titan figure | Feature card */}
            <div className="grid grid-cols-2 gap-10 xl:gap-16 mt-10">
              {/* Left: SHIELD + Titan */}
              <div className="flex items-start justify-center">
                <Image
                  src="/assets/titan-warrior-graphic.png"
                  alt="Titan Shield Logo"
                  width={480}
                  height={480}
                  className="max-w-full w-full h-auto"
                  priority
                />
              </div>

              {/* Right: Feature card with superhero image */}
              <div className="flex flex-col w-full">
                <div className="bg-white/5 rounded-3xl mb-6">
                  <Image
                    src="/assets/about-superhero.webp"
                    alt="Cybersecurity illustration"
                    width={400}
                    height={300}
                    className="w-full rounded-2xl object-cover"
                  />
                </div>

                <ul className="space-y-3 text-base text-white/80 mb-8">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#8B5CF6] text-[#8B5CF6]">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/about"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#8B5CF6] px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:scale-95 transition-all duration-300"
                >
                  More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
