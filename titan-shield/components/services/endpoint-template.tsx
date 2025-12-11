"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import type { DynamicSection } from "@/config/service-templates";

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
    additionalSections?: DynamicSection[];
  };
}

export function EndpointTemplate({ service }: EndpointTemplateProps) {
  const [carouselStates, setCarouselStates] = useState<Record<number, { currentIndex: number; isAutoPlaying: boolean }>>({});

  const initializeCarousel = (sectionIndex: number, totalItems: number) => {
    if (!carouselStates[sectionIndex]) {
      setCarouselStates(prev => ({
        ...prev,
        [sectionIndex]: { currentIndex: 0, isAutoPlaying: true }
      }));
    }
  };

  const getCarouselState = (sectionIndex: number) => {
    return carouselStates[sectionIndex] || { currentIndex: 0, isAutoPlaying: true };
  };

  const updateCarouselState = (sectionIndex: number, updates: Partial<{ currentIndex: number; isAutoPlaying: boolean }>) => {
    setCarouselStates(prev => {
      const currentState = prev[sectionIndex] || { currentIndex: 0, isAutoPlaying: true };
      return {
        ...prev,
        [sectionIndex]: { ...currentState, ...updates }
      };
    });
  };

  return (
    <>
      {/* Main Content Section */}
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

              {/* Features List */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                <div className="grid gap-3">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <CheckCircle className="h-5 w-5 text-[#8B5CF6] mt-0.5 shrink-0" />
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
                  <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-transparent to-transparent" />
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
                    className="block w-full px-6 py-3 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold rounded-lg transition-colors duration-300 text-center"
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
        <section className="bg-brand-dark text-white py-12">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <h3 className="text-3xl font-bold mb-6">{service.overview.title}</h3>
            <div className="space-y-4">
              {service.overview.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Dynamic Additional Sections */}
      {service.additionalSections && service.additionalSections.map((section, sectionIndex) => (
        <DynamicSectionRenderer
          key={sectionIndex}
          section={section}
          sectionIndex={sectionIndex}
          carouselState={getCarouselState(sectionIndex)}
          onCarouselUpdate={(updates) => updateCarouselState(sectionIndex, updates)}
        />
      ))}
    </>
  );
}

// Dynamic Section Renderer Component
interface DynamicSectionRendererProps {
  section: DynamicSection;
  sectionIndex: number;
  carouselState: { currentIndex: number; isAutoPlaying: boolean };
  onCarouselUpdate: (updates: Partial<{ currentIndex: number; isAutoPlaying: boolean }>) => void;
}

function DynamicSectionRenderer({ section, sectionIndex, carouselState, onCarouselUpdate }: DynamicSectionRendererProps) {
  const itemsPerView = 3;
  const totalItems = section.cards?.length || 0;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  // Auto-play carousel
  useEffect(() => {
    if (section.type !== "carousel" || !carouselState.isAutoPlaying || totalItems === 0) return;

    const interval = setInterval(() => {
      onCarouselUpdate({
        currentIndex: carouselState.currentIndex >= maxIndex ? 0 : carouselState.currentIndex + 1
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [section.type, carouselState.isAutoPlaying, carouselState.currentIndex, maxIndex, totalItems, onCarouselUpdate]);

  const handlePrevious = () => {
    onCarouselUpdate({
      isAutoPlaying: false,
      currentIndex: carouselState.currentIndex <= 0 ? maxIndex : carouselState.currentIndex - 1
    });
  };

  const handleNext = () => {
    onCarouselUpdate({
      isAutoPlaying: false,
      currentIndex: carouselState.currentIndex >= maxIndex ? 0 : carouselState.currentIndex + 1
    });
  };

  const getVisibleItems = () => {
    if (!section.cards) return [];
    return section.cards.slice(carouselState.currentIndex, carouselState.currentIndex + itemsPerView);
  };

  if (section.type === "carousel" && section.cards) {
    return (
      <section className="bg-brand-dark text-white py-12">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-12">
            {section.badge && (
              <div className="inline-block px-4 py-2 bg-[#8B5CF6]/20 rounded-full mb-4">
                <span className="text-[#8B5CF6] font-semibold">{section.badge}</span>
              </div>
            )}
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {section.sectionTitle}
            </h3>
            {section.sectionSubtitle && (
              <p className="text-gray-400 max-w-2xl mx-auto">
                {section.sectionSubtitle}
              </p>
            )}
          </div>

          {/* Carousel Container */}
          <div className="relative px-12 md:px-16 group">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white p-3 rounded-full transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100"
              aria-label="Previous items"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white p-3 rounded-full transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100"
              aria-label="Next items"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Carousel Items */}
            <div className="overflow-hidden">
              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ease-in-out"
                onMouseEnter={() => onCarouselUpdate({ isAutoPlaying: false })}
                onMouseLeave={() => onCarouselUpdate({ isAutoPlaying: true })}
              >
                {getVisibleItems().map((card, index) => (
                  <div
                    key={carouselState.currentIndex + index}
                    className="bg-white/5 rounded-lg p-6 border border-[#2A2A2A] hover:border-[#8B5CF6] transition-colors"
                  >
                    <h4 className="text-xl font-bold mb-3">{card.title}</h4>
                    <p className="text-gray-400 mb-6">{card.description}</p>
                    <Link
                      href={card.buttonLink || "/contact"}
                      className="inline-block px-6 py-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold rounded-lg transition-colors duration-300"
                    >
                      {card.buttonText}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => onCarouselUpdate({ isAutoPlaying: false, currentIndex: index })}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === carouselState.currentIndex
                      ? "w-8 bg-[#8B5CF6]"
                      : "w-2 bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (section.type === "grid" && section.cards) {
    return (
      <section className="bg-brand-dark text-white py-12">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-12">
            {section.badge && (
              <div className="inline-block px-4 py-2 bg-[#8B5CF6]/20 rounded-full mb-4">
                <span className="text-[#8B5CF6] font-semibold">{section.badge}</span>
              </div>
            )}
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {section.sectionTitle}
            </h3>
            {section.sectionSubtitle && (
              <p className="text-gray-400 max-w-2xl mx-auto">
                {section.sectionSubtitle}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {section.cards.map((card, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-lg p-6 border border-[#2A2A2A] hover:border-[#8B5CF6] transition-colors"
              >
                <h4 className="text-xl font-bold mb-3">{card.title}</h4>
                <p className="text-gray-400 mb-6">{card.description}</p>
                <Link
                  href={card.buttonLink || "/contact"}
                  className="inline-block px-6 py-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  {card.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.type === "highlighted") {
    return (
      <section className="bg-brand-dark text-white py-12">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="bg-linear-to-br from-[#8B5CF6]/20 to-[#a855f7]/10 rounded-lg p-8 border border-[#8B5CF6]/30">
            <h3 className="text-2xl font-bold mb-4">{section.sectionTitle}</h3>
            <p className="text-gray-300 mb-6">{section.content}</p>
            {section.buttonText && section.buttonLink && (
              <Link
                href={section.buttonLink}
                className="inline-block px-6 py-3 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold rounded-lg transition-colors duration-300"
              >
                {section.buttonText}
              </Link>
            )}
          </div>
        </div>
      </section>
    );
  }

  return null;
}
