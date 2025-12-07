"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Accordion } from "@/components/ui/accordion";
import type { DynamicSection } from "@/config/service-templates";
import { cn } from "@/lib/cn";

interface AccordionTemplateProps {
  service: {
    shortTitle: string;
    description: string;
    introContent?: string;
    accordionItems: Array<{
      title: string;
      content: string | string[];
    }>;
    ctaImage: string;
    ctaTitle?: string;
    ctaDescription?: string;
    ctaButtonText?: string;
    overview?: {
      title: string;
      description: string;
      images?: string[];
    };
    additionalSections?: DynamicSection[];
  };
}

export function AccordionTemplate({ service }: AccordionTemplateProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [shouldShake, setShouldShake] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldShake) {
            setShouldShake(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [shouldShake]);
  return (
    <>
      {/* Main Content Section */}
      <section className="bg-[#0A0A0A] text-white py-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Service Details */}
            <div className="space-y-8">
              {/* Service Title and Description */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {service.shortTitle}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Intro Content */}
              {service.introContent && (
                <div className="text-gray-300 leading-relaxed">
                  {service.introContent}
                </div>
              )}

              {/* Accordion Items */}
              <Accordion items={service.accordionItems} />
            </div>

            {/* Right Column - CTA Card */}
            <div className="lg:sticky lg:top-32 h-fit">
              <div className="relative bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#2A2A2A]">
                {/* CTA Image */}
                <div className="relative h-64 w-full">
                  <Image
                    src={service.ctaImage}
                    alt="Contact us"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1A1A1A] via-transparent to-transparent" />
                </div>

                {/* CTA Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">
                      {service.ctaTitle || "Provide Services"}
                    </h3>
                    <p className="text-gray-400">
                      {service.ctaDescription ||
                        "Get in touch with our security experts to learn how we can protect your business."}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full px-6 py-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold rounded-lg transition-colors duration-300 text-center"
                  >
                    {service.ctaButtonText || "Unlock TITANS Power: Connect Now"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      {service.additionalSections &&
        service.additionalSections.map((section, index) => (
          <section key={index} className="bg-[#0A0A0A] text-white py-12 overflow-hidden">
            <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl flex justify-center">
              <div
                ref={cardRef}
                className={cn(
                  "relative bg-linear-to-br from-[#7C3AED]/20 to-[#a855f7]/10 rounded-lg p-8 border border-[#7C3AED]/30 w-full max-w-3xl overflow-hidden transition-all duration-300",
                  shouldShake && "animate-[shake-rotate_2s_ease-in-out]"
                )}
              >
                {/* Liquid Drops SVG - Top */}
                <div className="absolute top-0 left-0 right-0 w-full h-10 pointer-events-none z-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 283.5 27.8"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                  >
                    <path
                      className="fill-[#a855f7]"
                      d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7	s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7	c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z M260.8,11.3	c-0.7-1-2-0.4-4.3-0.4c-2.3,0-6.1-1.2-5.8-1.1c0.3,0.1,3.1,1.5,6,1.9C259.7,12.2,261.4,12.3,260.8,11.3z M242.4,8.6	c0,0-2.4-0.2-5.6-0.9c-3.2-0.8-10.3-2.8-15.1-3.5c-8.2-1.1-15.8,0-15.1,0.1c0.8,0.1,9.6-0.6,17.6,1.1c3.3,0.7,9.3,2.2,12.4,2.7	C239.9,8.7,242.4,8.6,242.4,8.6z M185.2,8.5c1.7-0.7-13.3,4.7-18.5,6.1c-2.1,0.6-6.2,1.6-10,2c-3.9,0.4-8.9,0.4-8.8,0.5	c0,0.2,5.8,0.8,11.2,0c5.4-0.8,5.2-1.1,7.6-1.6C170.5,14.7,183.5,9.2,185.2,8.5z M199.1,6.9c0.2,0-0.8-0.4-4.8,1.1	c-4,1.5-6.7,3.5-6.9,3.7c-0.2,0.1,3.5-1.8,6.6-3C197,7.5,199,6.9,199.1,6.9z M283,6c-0.1,0.1-1.9,1.1-4.8,2.5s-6.9,2.8-6.7,2.7	c0.2,0,3.5-0.6,7.4-2.5C282.8,6.8,283.1,5.9,283,6z M31.3,11.6c0.1-0.2-1.9-0.2-4.5-1.2s-5.4-1.6-7.8-2C15,7.6,7.3,8.5,7.7,8.6	C8,8.7,15.9,8.3,20.2,9.3c2.2,0.5,2.4,0.5,5.7,1.6S31.2,11.9,31.3,11.6z M73,9.2c0.4-0.1,3.5-1.6,8.4-2.6c4.9-1.1,8.9-0.5,8.9-0.8	c0-0.3-1-0.9-6.2-0.3S72.6,9.3,73,9.2z M71.6,6.7C71.8,6.8,75,5.4,77.3,5c2.3-0.3,1.9-0.5,1.9-0.6c0-0.1-1.1-0.2-2.7,0.2	C74.8,5.1,71.4,6.6,71.6,6.7z M93.6,4.4c0.1,0.2,3.5,0.8,5.6,1.8c2.1,1,1.8,0.6,1.9,0.5c0.1-0.1-0.8-0.8-2.4-1.3	C97.1,4.8,93.5,4.2,93.6,4.4z M65.4,11.1c-0.1,0.3,0.3,0.5,1.9-0.2s2.6-1.3,2.2-1.2s-0.9,0.4-2.5,0.8C65.3,10.9,65.5,10.8,65.4,11.1	z M34.5,12.4c-0.2,0,2.1,0.8,3.3,0.9c1.2,0.1,2,0.1,2-0.2c0-0.3-0.1-0.5-1.6-0.4C36.6,12.8,34.7,12.4,34.5,12.4z M152.2,21.1	c-0.1,0.1-2.4-0.3-7.5-0.3c-5,0-13.6-2.4-17.2-3.5c-3.6-1.1,10,3.9,16.5,4.1C150.5,21.6,152.3,21,152.2,21.1z"
                    />
                    <path
                      className="fill-[#a855f7]"
                      d="M269.6,18c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C267.7,18.8,269.7,18,269.6,18z"
                    />
                    <path
                      className="fill-[#a855f7]"
                      d="M227.4,9.8c-0.2-0.1-4.5-1-9.5-1.2c-5-0.2-12.7,0.6-12.3,0.5c0.3-0.1,5.9-1.8,13.3-1.2	S227.6,9.9,227.4,9.8z"
                    />
                    <path
                      className="fill-[#a855f7]"
                      d="M204.5,13.4c-0.1-0.1,2-1,3.2-1.1c1.2-0.1,2,0,2,0.3c0,0.3-0.1,0.5-1.6,0.4	C206.4,12.9,204.6,13.5,204.5,13.4z"
                    />
                    <path
                      className="fill-[#a855f7]"
                      d="M201,10.6c0-0.1-4.4,1.2-6.3,2.2c-1.9,0.9-6.2,3.1-6.1,3.1c0.1,0.1,4.2-1.6,6.3-2.6	S201,10.7,201,10.6z"
                    />
                    <path
                      className="fill-[#a855f7]"
                      d="M154.5,26.7c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C152.6,27.5,154.6,26.8,154.5,26.7z"
                    />
                    <path
                      className="fill-[#a855f7]"
                      d="M41.9,19.3c0,0,1.2-0.3,2.9-0.1c1.7,0.2,5.8,0.9,8.2,0.7c4.2-0.4,7.4-2.7,7-2.6	c-0.4,0-4.3,2.2-8.6,1.9c-1.8-0.1-5.1-0.5-6.7-0.4S41.9,19.3,41.9,19.3z"
                    />
                    <path
                      className="fill-[#a855f7]"
                      d="M75.5,12.6c0.2,0.1,2-0.8,4.3-1.1c2.3-0.2,2.1-0.3,2.1-0.5c0-0.1-1.8-0.4-3.4,0	C76.9,11.5,75.3,12.5,75.5,12.6z"
                    />
                    <path
                      className="fill-[#a855f7]"
                      d="M15.6,13.2c0-0.1,4.3,0,6.7,0.5c2.4,0.5,5,1.9,5,2c0,0.1-2.7-0.8-5.1-1.4	C19.9,13.7,15.7,13.3,15.6,13.2z"
                    />
                  </svg>
                </div>

                {/* Animated Cloud Waves - Bottom */}
                <div className="absolute bottom-0 left-0 w-full h-24 opacity-30 pointer-events-none">
                  <svg
                    className="absolute bottom-0 left-0 w-[200%] h-full animate-[slide_25s_linear_infinite]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
                      fill="#7C3AED"
                      opacity="0.3"
                    />
                  </svg>
                  <svg
                    className="absolute bottom-0 left-0 w-[200%] h-full animate-[slide_18s_linear_infinite_reverse]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,80 C240,20 480,100 720,80 C960,20 1200,100 1440,80 L1440,120 L0,120 Z"
                      fill="#a855f7"
                      opacity="0.2"
                    />
                  </svg>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-center">{section.sectionTitle}</h3>

                  {/* Horizontal gradient line - full width */}
                  <div className="mb-6">
                    <div className="h-0.5 w-full bg-linear-to-r from-transparent via-[#7C3AED] to-transparent"></div>
                  </div>

                  {section.buttonText && section.buttonLink && (
                    <div className="text-center">
                      <Link
                        href={section.buttonLink}
                        className="inline-block px-6 py-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold rounded-lg transition-colors duration-300"
                      >
                        {section.buttonText}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <style jsx>{`
              @keyframes slide {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
            `}</style>
          </section>
        ))}

      {/* Overview Section */}
      {service.overview && (
        <section className="bg-[#0A0A0A] text-white py-12">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <h3 className="text-3xl font-bold mb-6">{service.overview.title}</h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              {service.overview.description}
            </p>

            {/* Overview Images */}
            {service.overview.images && service.overview.images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.overview.images.map((img, idx) => (
                  <div key={idx} className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={`Overview image ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
