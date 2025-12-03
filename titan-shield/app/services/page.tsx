import { PageHero } from "@/components/sections/page-hero";
import { ServicesGrid } from "@/components/sections/services-grid";

export const metadata = {
  title: "Our Services",
  description:
    "Comprehensive cybersecurity services including penetration testing, managed security, endpoint protection, and compliance consulting.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Comprehensive Security Solutions"
        description="Protect your business with our full suite of cybersecurity services, tailored to meet your unique security needs"
        backgroundImage="/assets/services_page/servies.jpg"
        backgroundAlt="Cybersecurity Services Background"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <ServicesGrid />
    </>
  );
}
