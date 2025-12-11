"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

interface OffSecTemplateProps {
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
  };
}

export function OffSecTemplate({ service }: OffSecTemplateProps) {
  return (
    <section className="bg-brand-dark text-white py-20">
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

            {/* Overview Benefits */}
            {service.overview && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  {service.overview.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.overview.description}
                </p>
              </div>
            )}

            {/* Features List */}
            <div>
              <h3 className="text-2xl font-bold mb-6">What We Offer</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors h-full"
                  >
                    <CheckCircle className="h-5 w-5 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - CTA Card */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="relative bg-white/5 rounded-lg overflow-hidden border border-[#2A2A2A]">
              {/* CTA Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={service.ctaImage}
                  alt="Contact us"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
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
                  className="block w-full px-6 py-3 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold rounded-lg transition-colors duration-300 text-center"
                >
                  Unlock TITANS Power: Connect Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
