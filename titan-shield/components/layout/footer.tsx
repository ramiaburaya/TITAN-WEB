import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Linkedin } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { FOOTER_LINKS } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="bg-[#141111] text-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Top Brand Row - Logo + Social Icons */}
        <div className="flex items-center justify-between pb-8">
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="Titan Shield Logo"
              width={180}
              height={60}
              className="h-auto w-auto max-h-16 transition-opacity group-hover:opacity-80"
            />
          </Link>

          <div className="flex items-center gap-4 text-2xl text-gray-200">
            <a
              href={SITE_CONFIG.links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-purple transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href={SITE_CONFIG.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-purple transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-[#2A2626] mb-10" />

        {/* Main Footer Columns */}
        <section className="grid gap-10 md:grid-cols-3">
          {/* Palestine Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Palestine</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-brand-purple mt-0.5 flex-shrink-0" />
                <span>
                  {SITE_CONFIG.contact.address.street}
                  <br />
                  {SITE_CONFIG.contact.address.city}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-purple flex-shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-brand-purple transition-colors"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-purple flex-shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.contact.phoneSecondary.replace(/\s/g, "")}`}
                  className="hover:text-brand-purple transition-colors"
                >
                  {SITE_CONFIG.contact.phoneSecondary}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-purple flex-shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-brand-purple transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.href} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brand-purple flex-shrink-0" />
                  <Link
                    href={link.href}
                    className="hover:text-brand-purple transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brand-purple flex-shrink-0" />
                  <Link
                    href={link.href}
                    className="hover:text-brand-purple transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-[#2A2626] pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="text-center md:text-left">{SITE_CONFIG.tagline}</p>
            <p className="text-center md:text-right">
              © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
