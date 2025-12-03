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
      <section className="bg-[#0A0A0A] text-white py-20">
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
      <section className="bg-[#0A0A0A] pb-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="bg-[#1A1A1A] rounded-lg overflow-hidden h-[400px] md:h-[500px] flex items-center justify-center border border-[#2A2A2A]">
            <div className="text-center">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto text-[#7C3AED]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Interactive Map Coming Soon
              </h3>
              <p className="text-gray-400">
                Find us at 4th Floor, Hamayel Center, Office No. 3, Al-Bireh, Palestine
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
