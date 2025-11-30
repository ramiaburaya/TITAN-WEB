import { Globe, Users, Shield, Award } from "lucide-react";

export function TrustedAlliances() {
  const stats = [
    {
      icon: Globe,
      value: "50+",
      label: "Global Clients",
      description: "Protecting organizations worldwide",
    },
    {
      icon: Users,
      value: "1M+",
      label: "Users Protected",
      description: "Securing endpoints daily",
    },
    {
      icon: Shield,
      value: "99.9%",
      label: "Threat Detection",
      description: "Real-time security coverage",
    },
    {
      icon: Award,
      value: "15+",
      label: "Years Experience",
      description: "Leading cybersecurity expertise",
    },
  ];

  return (
    <section className="py-16 bg-brand-dark border-y border-brand-dark-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-brand-purple text-sm font-semibold uppercase tracking-wide mb-2">
            TRUSTED ALLIANCES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Global Impact, Local Expertise
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Protecting businesses across Palestine and beyond with world-class
            cybersecurity solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-brand-dark-light/50 hover:bg-brand-dark-light transition-colors border border-brand-dark-light hover:border-brand-purple/50 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-purple/10 mb-4 group-hover:bg-brand-purple/20 transition-colors">
                  <Icon className="h-8 w-8 text-brand-purple" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Optional: Partner logos section - can be populated later */}
        {/* <div className="mt-16">
          <p className="text-center text-gray-400 text-sm mb-8">
            Trusted by leading organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
              Partner logos here
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
