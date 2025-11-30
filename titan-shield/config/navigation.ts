/**
 * Navigation links configuration
 * Used in Navbar and Footer components
 */

export const NAVIGATION_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
] as const;

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Pricing Plan", href: "/pricing" },
    { label: "Blog", href: "/blog" },
  ],
  resources: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms Service", href: "/terms-service" },
    { label: "Documentation", href: "/docs" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
