/**
 * Services configuration
 * All service offerings with complete details
 */

import { Shield, Lock, FileCheck, Server, Smartphone, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  image: string; // decorative image for card
  description: string;
  features: string[];
  benefits: string[];
  color: string;
}

export const SERVICES: Service[] = [
  {
    id: "offsec-pen-testing",
    slug: "offsec-pen-testing",
    title: "Offensive Security & Penetration Testing",
    shortTitle: "Offensive Security & Penetration Testing",
    icon: Shield,
    image: "/assets/service-offsec.png",
    description:
      "Simulating real-world cyberattacks, our ethical hacking services expose vulnerabilities before hackers can exploit them.",
    features: [
      "Advanced red team operations",
      "Web application penetration testing",
      "Network security assessment",
      "Social engineering testing",
      "Wireless security audits",
      "Mobile application testing",
      "API security testing",
      "Cloud infrastructure assessment",
    ],
    benefits: [
      "Identify vulnerabilities proactively",
      "Realistic attack simulation",
      "Comprehensive security reports",
      "Remediation guidance and support",
      "Compliance validation",
    ],
    color: "from-purple-600 to-pink-600",
  },
  {
    id: "endpoint-mobile-security",
    slug: "endpoint-mobile-security",
    title: "Endpoint & Mobile Security",
    shortTitle: "Endpoint & Mobile Device Protection",
    icon: Smartphone,
    image: "/assets/service-endpoint.png",
    description:
      "Harnessing advanced EDR and Mobile Threat Defense, we deliver proactive, real-time security for desktops, laptops, servers, and mobile devices—detecting, preventing, and neutralizing cyber threats before they can disrupt your business.",
    features: [
      "Advanced endpoint protection (EDR/XDR)",
      "Mobile device management (MDM)",
      "Mobile application security",
      "Device encryption and data loss prevention",
      "Threat detection and response",
      "Zero-day threat protection",
      "Patch management automation",
      "Secure remote access solutions",
    ],
    benefits: [
      "Comprehensive device visibility",
      "Real-time threat detection",
      "Automated security responses",
      "Enhanced mobile workforce security",
      "Reduced attack surface",
    ],
    color: "from-blue-600 to-cyan-600",
  },
  {
    id: "consulting-compliance",
    slug: "consulting-compliance",
    title: "Consulting & Compliance",
    shortTitle: "Security Consulting & Compliance Advisory",
    icon: FileCheck,
    image: "/assets/service-consulting.png",
    description:
      "Expert consulting to help businesses navigate cybersecurity risks and regulatory challenges. Our team ensures your organization meets compliance standards while strengthening your security posture.",
    features: [
      "ISO 27001 compliance consulting",
      "PCI DSS readiness and certification",
      "GDPR and data protection advisory",
      "Security policy development",
      "Risk assessment and management",
      "Security architecture review",
      "Vendor security assessments",
      "Incident response planning",
    ],
    benefits: [
      "Regulatory compliance assurance",
      "Risk mitigation strategies",
      "Industry best practices",
      "Expert strategic guidance",
      "Audit preparation support",
    ],
    color: "from-green-600 to-emerald-600",
  },
  {
    id: "mssp",
    slug: "mssp",
    title: "Managed Security Services (MSSP)",
    shortTitle: "24/7 Managed Security Operations",
    icon: Server,
    image: "/assets/service-mssp.png",
    description:
      "Our Managed Security Services provide continuous monitoring, proactive threat detection, and rapid incident response to keep your business secure 24/7.",
    features: [
      "24/7 security monitoring (SOC)",
      "Security incident & event management (SIEM)",
      "Threat intelligence integration",
      "Vulnerability management",
      "Log management and analysis",
      "Security alert triage and response",
      "Monthly security reporting",
      "Proactive threat hunting",
    ],
    benefits: [
      "Continuous security monitoring",
      "Rapid incident response",
      "Cost-effective security operations",
      "Expert security team access",
      "Reduced security overhead",
    ],
    color: "from-orange-600 to-red-600",
  },
  {
    id: "infrastructure-protection",
    slug: "infrastructure-protection",
    title: "Technical Security & Infrastructure Protection",
    shortTitle: "Infrastructure Security Solutions",
    icon: Lock,
    image: "/assets/service-infrastructure.png",
    description:
      "Titan Shield strengthens your technology ecosystem with advanced security solutions.",
    features: [
      "Next-generation firewall (NGFW) deployment",
      "Intrusion detection and prevention (IDS/IPS)",
      "Network segmentation and microsegmentation",
      "Secure network architecture design",
      "DDoS protection and mitigation",
      "VPN and secure remote access",
      "Database security hardening",
      "Cloud security architecture",
    ],
    benefits: [
      "Robust infrastructure defense",
      "Network visibility and control",
      "Advanced threat prevention",
      "Scalable security solutions",
      "Reduced breach risk",
    ],
    color: "from-indigo-600 to-purple-600",
  },
  {
    id: "training-awareness",
    slug: "training-awareness",
    title: "Cybersecurity Training & Awareness",
    shortTitle: "Security Awareness Training Programs",
    icon: GraduationCap,
    image: "/assets/service-training.png",
    description:
      "Empower your team with the skills and knowledge to protect your organization from cyber threats.",
    features: [
      "Security awareness training programs",
      "Phishing simulation campaigns",
      "Role-based security training",
      "Compliance training (ISO, PCI, GDPR)",
      "Incident response drills",
      "Security champion programs",
      "Custom training content development",
      "Quarterly security newsletters",
    ],
    benefits: [
      "Reduced human error incidents",
      "Improved security culture",
      "Enhanced threat awareness",
      "Compliance training coverage",
      "Measurable behavior change",
    ],
    color: "from-teal-600 to-green-600",
  },
] as const;

export type ServiceType = typeof SERVICES[number];

// Helper to get service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
