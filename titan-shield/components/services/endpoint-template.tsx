"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

interface EndpointTemplateProps {
  service: {
    shortTitle: string;
    description: string;
    features: string[];
    ctaImage: string;
    ctaTitle?: string;
    ctaDescription?: string;
    overview?: {
      title: string;
      description: string;
    };
    comparisonSection?: {
      title: string;
      subtitle: string;
      comparisons: Array<{
        title: string;
        description: string;
        buttonText: string;
      }>;
    };
  };
}

export function EndpointTemplate({ service }: EndpointTemplateProps) {
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

              {/* Features List */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                <div className="grid gap-3">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg bg-[#1A1A1A] hover:bg-[#222222] transition-colors"
                    >
                      <CheckCircle className="h-5 w-5 text-[#7C3AED] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
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
                      {service.ctaTitle || "The EDR Comparison Guide"}
                    </h3>
                    <p className="text-gray-400">
                      {service.ctaDescription ||
                        "Compare leading EDR solutions to find the best fit for your organization."}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full px-6 py-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold rounded-lg transition-colors duration-300 text-center"
                  >
                    Get More: Protect your devices
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      {service.overview && (
        <section className="bg-[#0A0A0A] text-white py-12">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <h3 className="text-3xl font-bold mb-6">{service.overview.title}</h3>
            <p className="text-gray-300 leading-relaxed">
              {service.overview.description}
            </p>
          </div>
        </section>
      )}

      {/* Comparison Section */}
      {service.comparisonSection && (
        <section className="bg-[#0A0A0A] text-white py-12">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[#7C3AED]/20 rounded-full mb-4">
                <span className="text-[#7C3AED] font-semibold">Comparison</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {service.comparisonSection.title}
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {service.comparisonSection.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.comparisonSection.comparisons.map((comparison, index) => (
                <div
                  key={index}
                  className="bg-[#1A1A1A] rounded-lg p-6 border border-[#2A2A2A] hover:border-[#7C3AED] transition-colors"
                >
                  <h4 className="text-xl font-bold mb-3">{comparison.title}</h4>
                  <p className="text-gray-400 mb-6">{comparison.description}</p>
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold rounded-lg transition-colors duration-300"
                  >
                    {comparison.buttonText}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
