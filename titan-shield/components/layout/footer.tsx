import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { FOOTER_LINKS } from "@/config/navigation";
import { Container } from "@/components/ui/container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-brand-dark-light">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location & Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-brand-purple" />
              Palestine
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p>
                {SITE_CONFIG.contact.address.street}
                <br />
                {SITE_CONFIG.contact.address.city}
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-purple" />
                  <a
                    href={`tel:${SITE_CONFIG.contact.phone.replace(/\s/g, "")}`}
                    className="hover:text-brand-purple transition-colors"
                  >
                    {SITE_CONFIG.contact.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-purple" />
                  <a
                    href={`tel:${SITE_CONFIG.contact.phoneSecondary.replace(/\s/g, "")}`}
                    className="hover:text-brand-purple transition-colors"
                  >
                    {SITE_CONFIG.contact.phoneSecondary}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-brand-purple" />
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="hover:text-brand-purple transition-colors"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-purple transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-purple transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3 text-sm">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href={SITE_CONFIG.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-purple transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={SITE_CONFIG.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-purple transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={SITE_CONFIG.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-purple transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-brand-dark-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="text-center md:text-left">{SITE_CONFIG.tagline}</p>
            <p className="text-center md:text-right">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
