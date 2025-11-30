import { ServiceCard } from "@/components/cards/service-card";
import { SERVICES } from "@/config/services";

export function ServicesGrid() {
  return (
    <section className="py-20 bg-brand-dark-light">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-brand-purple text-sm font-semibold uppercase tracking-wide mb-2">
            WHAT WE OFFER
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Your Trusted <span className="text-brand-purple">Shield</span> in
            Cybersecurity
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Comprehensive security solutions tailored to protect your business
            from evolving cyber threats
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
