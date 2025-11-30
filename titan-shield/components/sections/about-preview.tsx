import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Shield } from "lucide-react";

export function AboutPreview() {
  const highlights = [
    "ISO 27001 Certified Security Experts",
    "Comprehensive Threat Intelligence",
    "24/7 Security Operations Center",
    "Tailored Solutions for Your Business",
  ];

  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div>
            <p className="text-brand-purple text-sm font-semibold uppercase tracking-wide mb-2">
              ABOUT TITAN SHIELD
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Your Trusted Partner in{" "}
              <span className="text-brand-purple">Cybersecurity</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Titan Shield is Palestine's leading cybersecurity firm, dedicated
              to protecting businesses from evolving digital threats. With over
              15 years of experience, we combine local expertise with global
              best practices.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our team of certified security professionals delivers
              comprehensive solutions—from penetration testing to managed
              security services—ensuring your organization stays secure,
              compliant, and resilient against cyber attacks.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="h-5 w-5 text-brand-purple flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="group">
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Right column - Visual element */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-brand-purple/20 to-pink-600/20 p-8 border border-brand-dark-light">
              {/* Placeholder for image or graphic */}
              <div className="aspect-square bg-brand-dark-light rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <Shield className="h-24 w-24 text-brand-purple mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    Security in Every Byte
                  </h3>
                  <p className="text-gray-400">
                    Protecting what matters most
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-600/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
