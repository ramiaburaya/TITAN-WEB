import { TrendingUp, Users, Shield, Award } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Shield,
      value: "10,000+",
      label: "Threats Blocked Daily",
      color: "text-purple-400",
    },
    {
      icon: Users,
      value: "200+",
      label: "Enterprise Clients",
      color: "text-pink-400",
    },
    {
      icon: TrendingUp,
      value: "99.99%",
      label: "Uptime Guarantee",
      color: "text-cyan-400",
    },
    {
      icon: Award,
      value: "50+",
      label: "Security Certifications",
      color: "text-green-400",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-purple via-purple-700 to-pink-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proven Track Record
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Numbers that speak to our commitment to excellence and security
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
              >
                <Icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-200 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
