import { HeroSection } from "@/components/sections/hero-section";
import { TrustedAlliances } from "@/components/sections/trusted-alliances";
import { AboutPreview } from "@/components/sections/about-preview";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyTITAN } from "@/components/sections/why-titan";
import { NewsletterSection } from "@/components/sections/newsletter-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedAlliances />
      <AboutPreview />
      <ServicesGrid />
      <WhyTITAN />
      <NewsletterSection />
    </>
  );
}
