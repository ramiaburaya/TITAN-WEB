/**
 * Site-wide configuration
 * Centralized place for all site constants
 */

export const SITE_CONFIG = {
  name: "Titan Shield",
  description: "Leading cybersecurity firm in Palestine providing professional security services",
  url: "https://titanshield.ps",
  ogImage: "/og-image.jpg",

  links: {
    facebook: "https://www.facebook.com/PS.TitanShield",
    linkedin: "https://www.linkedin.com/company/titan-shield/",
  },

  contact: {
    email: "info@titanshield.ps",
    phone: "+970 (562) 420000",
    phoneSecondary: "+970 (562) 420011",
    address: {
      street: "4th Floor, Humayat Center, Office No. 3",
      city: "AL-Bireh",
      country: "Palestine",
    },
  },

  tagline: "Security is Every Byte",
} as const;
