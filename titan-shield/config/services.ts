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
  description: string;
  features: string[];
  benefits: string[];
  color: string;
}

export const SERVICES: Service[] = [
  {
    id: "offsec-pen-testing",
    slug: "offsec-pen-testing",
    title: "OffSec & Pen Testing",
    shortTitle: "Offensive Security & Penetration Testing",
    icon: Shield,
    description:
      "Professional red team and penetration testing services to identify vulnerabilities before attackers do. Our offensive security experts simulate real-world attacks to uncover weaknesses in your infrastructure.",
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
    description:
      "Comprehensive endpoint and mobile security solutions to protect your devices, data, and users from sophisticated threats. Secure your workforce across all platforms and locations.",
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
    description:
      "Expert consulting services to help you navigate complex security requirements and achieve regulatory compliance. Strategic guidance for building and maintaining a robust security posture.",
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
    description:
      "Round-the-clock security monitoring and management services. Our Security Operations Center (SOC) provides continuous protection, threat detection, and incident response for your organization.",
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
    description:
      "Advanced technical security solutions to protect your IT infrastructure from evolving threats. From firewalls to intrusion detection, we secure your critical systems and networks.",
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
    description:
      "Comprehensive security awareness training and education programs to build a security-conscious culture. Empower your team to become your first line of defense against cyber threats.",
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
