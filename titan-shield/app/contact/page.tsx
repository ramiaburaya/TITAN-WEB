import { PageHero } from "@/components/sections/page-hero";
import { ContactInfo } from "@/components/sections/contact-info";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with TITAN Shield. We're here to help secure your digital future.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        backgroundImage="/assets/contact_us_page/laptop-notepad-black-background-with-neon-light-flat-lay-scaled.webp"
        backgroundAlt="Contact TITAN Shield"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      {/* Contact Section */}
      <section className="bg-brand-dark text-white py-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Info Cards */}
            <ContactInfo />

            {/* Right Column - Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-brand-dark pb-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="bg-white/5 rounded-lg overflow-hidden h-[400px] md:h-[500px] border border-[#2A2A2A]">
            <iframe
              src="https://maps.google.com/maps?q=31.924193,35.214302&hl=en&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale brightness-75 contrast-125 hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>
    </>
  );
}
