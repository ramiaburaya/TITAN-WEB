import { PageHero } from "@/components/sections/page-hero";
import { FoundersMessage } from "@/components/sections/founders-message";
import { AboutUsSection } from "@/components/sections/about-us-section";
import { OurExpert } from "@/components/sections/our-expert";
import { WhyTITAN } from "@/components/sections/why-titan";
import { NewsletterSection } from "@/components/sections/newsletter-section";

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        title="About Us"
        backgroundImage="/assets/About_Us_Page/about-us.jpg"
        backgroundAlt="About TITAN Shield"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      <div className="bg-brand-dark text-white py-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <FoundersMessage />
            <AboutUsSection />
          </div>
        </div>
      </div>

      <OurExpert />
      <WhyTITAN />
      <NewsletterSection />
    </>
  );
}
