import { ServicesGrid } from "@/components/sections/services-grid";
import { CTABox } from "@/components/cards/cta-box";

export const metadata = {
  title: "Our Services",
  description:
    "Comprehensive cybersecurity services including penetration testing, managed security, endpoint protection, and compliance consulting.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Services Hero */}
      <section className="bg-gradient-to-br from-brand-purple via-purple-700 to-pink-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Comprehensive Security Solutions
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Protect your business with our full suite of cybersecurity services,
            tailored to meet your unique security needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid />

      {/* Bottom CTA */}
      <section className="py-16 bg-brand-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <CTABox />
          </div>
        </div>
      </section>
    </>
  );
}
