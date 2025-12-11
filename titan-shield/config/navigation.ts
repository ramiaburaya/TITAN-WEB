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

export const SERVICES_DROPDOWN = [
  {
    label: "OffSec & Pen Testing",
    href: "/services/offsec-pen-testing",
  },
  {
    label: "Endpoint & Mobile Security",
    href: "/services/endpoint-mobile-security",
  },
  {
    label: "Consulting & Compliance",
    href: "/services/consulting-compliance",
  },
  {
    label: "Managed Security Services (MSSP)",
    href: "/services/mssp",
  },
  {
    label: "Technical Security & Infrastructure Protection",
    href: "/services/infrastructure-protection",
  },
  {
    label: "Cybersecurity Training & Awareness",
    href: "/services/training-awareness",
  },
] as const;

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
  ],
  resources: [
    { label: "Contact", href: "/contact" },
  ],
} as const;
