import { notFound } from "next/navigation";
import { SERVICES, getServiceBySlug } from "@/config/services";
import { SERVICE_TEMPLATES } from "@/config/service-templates";
import { PageHero } from "@/components/sections/page-hero";
import { OffSecTemplate } from "@/components/services/offsec-template";
import { EndpointTemplate } from "@/components/services/endpoint-template";
import { AccordionTemplate } from "@/components/services/accordion-template";

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
  const templateData = SERVICE_TEMPLATES[slug];

  if (!service || !templateData) {
    notFound();
  }

  const renderTemplate = () => {
    const baseProps = {
      shortTitle: service.shortTitle,
      description: service.description,
      features: service.features,
      ctaImage: service.ctaImage,
      ctaTitle: templateData.ctaTitle,
      ctaDescription: templateData.ctaDescription,
      overview: service.overview,
    };

    switch (templateData.template) {
      case "offsec":
        return <OffSecTemplate service={baseProps} />;

      case "endpoint":
        return (
          <EndpointTemplate
            service={{
              ...baseProps,
              comparisonSection: templateData.comparisonSection,
            }}
          />
        );

      case "accordion":
        return (
          <AccordionTemplate
            service={{
              ...baseProps,
              introContent: templateData.introContent,
              accordionItems: templateData.accordionItems || [],
              ctaButtonText: templateData.ctaButtonText,
              additionalSections: templateData.additionalSections,
            }}
          />
        );

      default:
        return <OffSecTemplate service={baseProps} />;
    }
  };

  return (
    <>
      <PageHero
        title={service.title}
        backgroundImage={service.heroImage}
        backgroundAlt={service.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
      />

      {renderTemplate()}
    </>
  );
}
