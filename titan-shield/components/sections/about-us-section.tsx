"use client";

import Image from "next/image";

export function AboutUsSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="h-[2px] w-[100px] bg-gradient-to-l from-[#7C3AED] to-transparent"></div>
        <h3 className="text-sm font-semibold text-[#ffffff] uppercase tracking-wider whitespace-nowrap">
          ABOUT US
        </h3>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold">
        The TITANS of Cybersecurity
      </h2>

      <div className="space-y-4 text-gray-300 leading-relaxed">
        <p>
          We protect businesses from evolving cyber threats with cutting-edge solutions and expert strategies.
        </p>

        <p>
          Our team ensures compliance, safeguards digital assets, and strengthens resilience. Whether you&apos;re a startup or a global enterprise, <span className="text-[#7C3AED]">Titan Shield</span> is committed to securing your future.
        </p>

        <p>
          We empower businesses with world-class cybersecurity solutions designed to enhance their security posture, mitigate risks, and enable digital trust.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 pt-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative w-20 h-20">
            <Image
              src="/assets/About_Us_Page/training-1.png"
              alt="Cyber Defense Innovation"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-white font-semibold">
            Cyber Defense Innovation
          </p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative w-20 h-20">
            <Image
              src="/assets/About_Us_Page/service-cloud.png"
              alt="Protecting Your Digital World"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-white font-semibold">
            Protecting Your Digital World
          </p>
        </div>
      </div>
    </div>
  );
}
