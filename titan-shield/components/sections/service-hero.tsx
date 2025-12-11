import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/config/services";
import { cn } from "@/lib/cn";

interface ServiceHeroProps {
  service: Service;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  const Icon = service.icon;

  return (
    <section
      className={cn(
        "relative overflow-hidden py-24 bg-linear-to-br",
        service.color
      )}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
            <Icon className="h-12 w-12 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {service.title}
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            {service.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center justify-center rounded-md font-medium transition-colors group",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2",
                "bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-purple",
                "h-14 px-8 text-lg"
              )}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className={cn(
                "inline-flex items-center justify-center rounded-md font-medium transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2",
                "bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white",
                "h-14 px-8 text-lg"
              )}
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
