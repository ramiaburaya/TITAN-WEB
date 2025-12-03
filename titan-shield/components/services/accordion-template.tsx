"use client";

import Image from "next/image";
import Link from "next/link";
import { Accordion } from "@/components/ui/accordion";

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
    additionalSections?: Array<{
      title: string;
      content: string;
      buttonText?: string;
      buttonLink?: string;
    }>;
  };
}

export function AccordionTemplate({ service }: AccordionTemplateProps) {
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
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
          <section key={index} className="bg-[#0A0A0A] text-white py-12">
            <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
              <div className="bg-gradient-to-br from-[#7C3AED]/20 to-[#a855f7]/10 rounded-lg p-8 border border-[#7C3AED]/30">
                <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                <p className="text-gray-300 mb-6">{section.content}</p>
                {section.buttonText && section.buttonLink && (
                  <Link
                    href={section.buttonLink}
                    className="inline-block px-6 py-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold rounded-lg transition-colors duration-300"
                  >
                    {section.buttonText}
                  </Link>
                )}
              </div>
            </div>
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
