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
  heroImage: string; // hero background image
  ctaImage: string; // CTA card image
  description: string;
  features: string[];
  benefits: string[];
  overview?: {
    title: string;
    description: string;
  };
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
    heroImage: "/assets/services_page/hacker-arriving-secret-base-with-laptop-ready-start-programming-viruses-scaled.webp",
    ctaImage: "/assets/services_page/criminal-hacking-system-unsuccessfully-1024x683.webp",
    description:
      "Simulating real-world cyberattacks, our ethical hacking services expose vulnerabilities before hackers can exploit them.",
    features: [
      "Web, mobile, and API penetration testing",
      "Network and infrastructure security testing",
      "Wireless & IoT security testing",
      "Red Team exercises to test incident response readiness",
      "Physical security penetration testing",
      "Cloud security assessments (AWS, Azure, GCP)",
      "Phishing, vishing, and onsite social engineering assessments",
    ],
    benefits: [
      "Identify vulnerabilities proactively",
      "Realistic attack simulation",
      "Comprehensive security reports",
      "Remediation guidance and support",
      "Compliance validation",
    ],
    overview: {
      title: "Overview Benefits of OffSec & Pen-Testing",
      description: "Offensive security and penetration testing are essential practices for identifying vulnerabilities within systems before malicious actors can exploit them. By simulating real-world attacks, penetration testers proactively identify weak points in an organization's infrastructure, applications, and networks. This approach provides valuable insights into potential threats and strengthens overall security posture.",
    },
    color: "from-purple-600 to-pink-600",
  },
  {
    id: "endpoint-mobile-security",
    slug: "endpoint-mobile-security",
    title: "Endpoint & Mobile Security",
    shortTitle: "Endpoint & Mobile Device Protection",
    icon: Smartphone,
    image: "/assets/service-endpoint.png",
    heroImage: "/assets/services_page/servies.jpg",
    ctaImage: "/assets/services_page/laptop.webp",
    description:
      "Harnessing advanced EDR and Mobile Threat Defense, we deliver proactive, real-time security for desktops, laptops, servers, and mobile devices—detecting, preventing, and neutralizing cyber threats before they can disrupt your business.",
    features: [
      "Real-time endpoint monitoring to detect suspicious behaviors.",
      "Automated containment of compromised devices to prevent spread.",
      "Threat hunting capabilities to proactively identify stealthy attacks.",
      "Forensic investigation tools to analyze security incidents.",
      "DNS filtering & web protection",
      "Automated vulnerability & Patch Management",
    ],
    benefits: [
      "Comprehensive device visibility",
      "Real-time threat detection",
      "Automated security responses",
      "Enhanced mobile workforce security",
      "Reduced attack surface",
    ],
    overview: {
      title: "Overview Benefits of Endpoint & Mobile Security",
      description: "As cyber threats continue to evolve, endpoint and mobile security have become essential for protecting businesses from attacks targeting laptops, desktops, smartphones, and tablets. These devices serve as entry points for cybercriminals looking to exploit vulnerabilities, steal data, and disrupt operations. Without proper security measures, organizations face risks such as malware infections, ransomware attacks, and unauthorized access, which can lead to data breaches and financial losses.\n\nA strong endpoint and mobile security solution provides real-time threat detection, secure access controls, and proactive defenses to minimize risks. Advanced technologies like AI-powered analytics, behavior-based threat detection, and encryption help prevent cyberattacks before they can cause damage. Additionally, security solutions enforce compliance with industry regulations by ensuring that sensitive data remains protected, even on employee-owned devices.\n\nBeyond threat prevention, endpoint security enhances operational efficiency by offering centralized management and automated threat response. IT teams can monitor, update, and secure all endpoints from a single dashboard, reducing manual efforts and improving response times. With remote work and mobile access becoming standard, businesses must prioritize endpoint and mobile security to ensure seamless, secure operations while maintaining trust and compliance.",
    },
    color: "from-blue-600 to-cyan-600",
  },
  {
    id: "consulting-compliance",
    slug: "consulting-compliance",
    title: "Consulting & Compliance",
    shortTitle: "Consulting & Compliance",
    icon: FileCheck,
    image: "/assets/service-consulting.png",
    heroImage: "/assets/services_page/standard-quality-control-collage-concept-1-scaled.webp",
    ctaImage: "/assets/services_page/call-to-action.webp",
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
    overview: {
      title: "Overview Benefits of Consulting & Compliance",
      description: "Cybersecurity consulting and compliance services help organizations safeguard their digital assets, protect sensitive data, and adhere to industry regulations. These services are essential for businesses facing evolving cyber threats, regulatory requirements, and increasing customer expectations for data security.\n\nBy implementing strong cybersecurity measures, organizations not only reduce the risk of cyberattacks but also enhance their reputation by demonstrating a commitment to security and compliance. This builds trust with customers, partners, and stakeholders, making the business more credible in the market.\n\nFurthermore, achieving compliance with industry standards such as GDPR, HIPAA, PCI-DSS, ISO 27001, and NIST opens doors to new business opportunities. Companies that prioritize cybersecurity are more likely to attract global partners, secure high-value contracts, and expand into international markets where strict data protection regulations are enforced.\n\nAdditionally, robust cybersecurity practices lead to improved operational efficiency, reduced financial losses from security breaches, and increased customer loyalty. A well-secured business is better positioned to innovate, scale, and thrive in the digital economy.",
    },
    color: "from-green-600 to-emerald-600",
  },
  {
    id: "mssp",
    slug: "mssp",
    title: "Managed Security Services (MSSP)",
    shortTitle: "24/7 Managed Security Operations",
    icon: Server,
    image: "/assets/service-mssp.png",
    heroImage: "/assets/services_page/servies.jpg",
    ctaImage: "/assets/services_page/criminal-hacking-system-unsuccessfully-1024x683.webp",
    description:
      "TITANs Shield's Managed Security Services provide 24/7 protection through our state-of-the-art Security Operations Center (SOC). We deliver comprehensive threat monitoring, detection, and response capabilities to protect your organization from evolving cyber threats. Our MSSP offering enhances your cybersecurity posture by combining advanced technologies, expert analysts, and proactive defense strategies.",
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
    overview: {
      title: "Overview Benefits of Managed Security Services",
      description: "In today's fast-evolving digital landscape, businesses face sophisticated cyber threats that can disrupt operations, compromise sensitive data, and lead to significant financial and reputational damage. Managed Security Services (MSS) by The TITANs provide a proactive, 24/7 security framework designed to protect your infrastructure, data, and operations.\n\nBy leveraging cutting-edge security technologies, expert threat intelligence, and real-time monitoring, our MSS solutions offer a fully managed and scalable approach to cybersecurity. This ensures continuous protection against malware, ransomware, phishing, insider threats, and other cyber risks—without the burden of managing security in-house.",
    },
    color: "from-orange-600 to-red-600",
  },
  {
    id: "infrastructure-protection",
    slug: "infrastructure-protection",
    title: "Technical Security & Infrastructure Protection",
    shortTitle: "Technical Security & Infrastructure Protection",
    icon: Lock,
    image: "/assets/service-infrastructure.png",
    heroImage: "/assets/services_page/servies.jpg",
    ctaImage: "/assets/services_page/criminal-hacking-system-unsuccessfully-1024x683.webp",
    description:
      "TITAN Shield's Technical Security & Infrastructure Protection secures your entire IT stack with a layered defense approach, advanced monitoring, and hardening techniques. We provide continuous risk management, real-time threat detection, and tailored security measures to protect networks, applications, and databases from evolving cyber threats.",
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
    overview: {
      title: "Overview Benefits of Technical Security & Infrastructure Protection",
      description: "With the rapid expansion of digital threats, organizations must adopt a proactive and multi-layered security approach to safeguard their digital assets, critical infrastructure, and sensitive data. Our Technical Security & Infrastructure Protection package is designed to fortify networks, applications, and databases by integrating advanced threat prevention, real-time monitoring, secure development practices, and access controls.\n\nBy leveraging cutting-edge firewall, encryption, intrusion prevention, and network segmentation technologies, we ensure that your infrastructure remains secure, resilient, and compliant with industry standards.",
    },
    color: "from-indigo-600 to-purple-600",
  },
  {
    id: "training-awareness",
    slug: "training-awareness",
    title: "Cybersecurity Training & Awareness",
    shortTitle: "Cybersecurity Training & Awareness",
    icon: GraduationCap,
    image: "/assets/service-training.png",
    heroImage: "/assets/services_page/servies.jpg",
    ctaImage: "/assets/services_page/criminal-hacking-system-unsuccessfully-1024x683.webp",
    description:
      "TITAN Shield's Cybersecurity Training offers role-based programs to build a security-conscious culture. From basic awareness to advanced IT training, we equip your team with the skills to recognize and mitigate threats, reducing human error and risk.",
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
    overview: {
      title: "Overview Benefits of Cybersecurity Training & Awareness",
      description: "Cybersecurity training equips employees with the knowledge and skills to identify potential threats, mitigate risks, and protect sensitive data from cyber threats such as phishing, malware, ransomware, and social engineering attacks. By fostering a security-aware culture, organizations can significantly reduce vulnerabilities stemming from human error, which remains one of the leading causes of security breaches.\n\nA well-informed workforce enhances an organization's ability to detect and respond to cyber threats proactively, minimizing the impact of security incidents. Employees trained in cybersecurity best practices are more likely to recognize suspicious activities, report security concerns, and follow company policies regarding data protection.\n\nMoreover, cybersecurity training ensures compliance with industry regulations and standards, such as GDPR, HIPAA, ISO 27001, and NIST frameworks. Non-compliance can result in heavy fines, legal consequences, and reputational damage. Regular training programs help organizations stay updated on evolving cyber threats and maintain a robust security posture.\n\nInvesting in continuous cybersecurity awareness programs not only strengthens an organization's defense against cyberattacks but also fosters a proactive security mindset among employees, reducing the risk of data breaches, financial losses, and operational disruptions.",
    },
    color: "from-teal-600 to-green-600",
  },
] as const;

export type ServiceType = typeof SERVICES[number];

// Helper to get service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
