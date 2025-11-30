import { notFound } from "next/navigation";
import { SERVICES, getServiceBySlug } from "@/config/services";
import { ServiceHero } from "@/components/sections/service-hero";
import { FeaturesList } from "@/components/sections/features-list";
import { CTABox } from "@/components/cards/cta-box";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceHero service={service} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">{service.shortTitle}</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {service.description}
            </p>

            <FeaturesList features={service.features} benefits={service.benefits} />
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <CTABox />
          </div>
        </div>
      </div>
    </>
  );
}
