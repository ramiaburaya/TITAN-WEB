import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { cn } from "@/lib/cn";

export function CTABox() {
  return (
    <div className="sticky top-24 p-8 rounded-lg bg-gradient-to-br from-brand-purple to-pink-600 text-white">
      <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
      <p className="text-gray-100 mb-6">
        Contact our security experts today for a free consultation and learn
        how we can protect your business.
      </p>

      <div className="space-y-4 mb-6">
        <a
          href={`tel:${SITE_CONFIG.contact.phone.replace(/\s/g, "")}`}
          className="flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        >
          <Phone className="h-5 w-5" />
          <div>
            <div className="text-sm text-gray-200">Call us</div>
            <div className="font-semibold">{SITE_CONFIG.contact.phone}</div>
          </div>
        </a>

        <a
          href={`mailto:${SITE_CONFIG.contact.email}`}
          className="flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        >
          <Mail className="h-5 w-5" />
          <div>
            <div className="text-sm text-gray-200">Email us</div>
            <div className="font-semibold">{SITE_CONFIG.contact.email}</div>
          </div>
        </a>
      </div>

      <Link
        href="/contact"
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors w-full group",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2",
          "bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-purple",
          "h-14 px-8 text-lg"
        )}
      >
        Schedule Consultation
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Link>

      <p className="text-sm text-gray-200 mt-4 text-center">
        24/7 Security Operations Center
      </p>
    </div>
  );
}
