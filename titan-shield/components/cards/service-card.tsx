import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/config/services";
import { cn } from "@/lib/cn";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block h-full"
    >
      <div className="h-full p-8 rounded-lg bg-brand-dark-light border border-brand-dark-light hover:border-brand-purple transition-all duration-300 hover:shadow-xl hover:shadow-brand-purple/10">
        {/* Icon */}
        <div
          className={cn(
            "inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6 transition-all",
            "bg-gradient-to-br",
            service.color
          )}
        >
          <Icon className="h-8 w-8 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-purple transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
          {service.description}
        </p>

        {/* Features preview */}
        <ul className="space-y-2 mb-6">
          {service.features.slice(0, 3).map((feature, index) => (
            <li
              key={index}
              className="text-sm text-gray-300 flex items-start gap-2"
            >
              <span className="text-brand-purple mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
          {service.features.length > 3 && (
            <li className="text-sm text-gray-500 italic">
              +{service.features.length - 3} more features
            </li>
          )}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-2 text-brand-purple font-semibold group-hover:gap-3 transition-all">
          <span>Learn More</span>
          <ArrowRight className="h-5 w-5" />
        </div>
      </div>
    </Link>
  );
}
