"use client";

import Image from "next/image";

export function FoundersMessage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">Founder&apos;s Message</h2>

      <div className="relative w-full h-64 rounded-lg overflow-hidden group">
        <Image
          src="/assets/About_Us_Page/founders.jpg"
          alt="Founder"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority
        />
        {/* Purple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/30 via-[#a855f7]/20 to-transparent pointer-events-none" />
        {/* Bottom darker gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="space-y-4 text-gray-300 leading-relaxed">
        <p className="text-lg">
          <span className="text-white font-semibold">Cybersecurity is no longer just a necessity</span>
        </p>

        <p>
          It&apos;s the foundation of trust in the digital world.
        </p>

        <p>
          At <span className="text-[#7C3AED]">Titan Shield</span>, we don&apos;t just protect businesses; we <span className="italic">empower</span> them to operate with confidence. Our mission is to <span className="text-white">bridge the gap</span> between security and business growth, ensuring our clients remain resilient in an ever-changing cyber landscape.
        </p>

        <p>
          The rise of cyber threats demands a proactive approach—one that combines <span className="text-white">innovation, expertise, and relentless dedication</span>. Titan Shield was built on this philosophy. We are not just defenders, we are <span className="text-[#7C3AED]">strategic partners</span> committed to your success.
        </p>

        <p className="text-white font-medium pt-4">
          Thank you for trusting Titan Shield to safeguard your future.
        </p>
      </div>
    </div>
  );
}
