/**
 * Extended service configurations with template-specific data
 */

export type ServiceTemplate = "offsec" | "endpoint" | "accordion";

export interface CarouselCard {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
}

export interface DynamicSection {
  type: "carousel" | "grid" | "highlighted";
  sectionTitle: string;
  sectionSubtitle?: string;
  badge?: string;
  cards?: CarouselCard[];
  content?: string;
  buttonText?: string;
  buttonLink?: string;
}

export interface ServiceTemplateData {
  template: ServiceTemplate;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  introContent?: string;
  accordionItems?: Array<{
    title: string;
    content: string | string[];
  }>;
  additionalSections?: DynamicSection[];
}

export const SERVICE_TEMPLATES: Record<string, ServiceTemplateData> = {
  "offsec-pen-testing": {
    template: "offsec",
    ctaTitle: "Provide Services",
    ctaDescription:
      "Get in touch with our security experts to learn how we can protect your business.",
  },

  "endpoint-mobile-security": {
    template: "endpoint",
    ctaTitle: "The EDR Comparison Guide",
    ctaDescription:
      "Compare leading EDR solutions to find the best fit for your organization.",
    additionalSections: [
      {
        type: "carousel",
        badge: "Comparison",
        sectionTitle: "At The TITANS, We Ensure an Honest and Transparent Comparison",
        sectionSubtitle: "",
        cards: [
          {
            title: "Threatdown vs Crowdstrike",
            description:
              "A comprehensive comparison between Malwarebytes and Crowdstrike",
            buttonText: "View Document",
            buttonLink: "/documents/threatdown-vs-crowdstrike",
          },
          {
            title: "Threatdown vs Sophos",
            description:
              "Evaluating ThreatDown's capabilities against Sophos EDR solutions",
            buttonText: "View Document",
            buttonLink: "/documents/threatdown-vs-sophos",
          },
          {
            title: "Threatdown vs Bitdefender",
            description:
              "How ThreatDown stacks up against Bitdefender's endpoint protection",
            buttonText: "View Document",
            buttonLink: "/documents/threatdown-vs-bitdefender",
          },
          {
            title: "Threatdown vs Kaspersky",
            description:
              "Why our EDR offering delivers better Protection than Others",
            buttonText: "View Document",
            buttonLink: "/documents/threatdown-vs-kaspersky",
          },
          {
            title: "Threatdown vs Microsoft",
            description:
              "Comparing Threatdown to another leader and industry favorite",
            buttonText: "View Document",
            buttonLink: "/documents/threatdown-vs-microsoft",
          },
          {
            title: "Threatdown vs Crowdstrike",
            description:
              "In-depth analysis of ThreatDown versus Crowdstrike's Falcon platform",
            buttonText: "View Document",
            buttonLink: "/documents/threatdown-vs-crowdstrike",
          },
          {
            title: "Threatdown vs Sophos",
            description:
              "Side-by-side comparison of threat detection and response capabilities",
            buttonText: "View Document",
            buttonLink: "/documents/threatdown-vs-sophos",
          },
          {
            title: "Threatdown vs Bitdefender",
            description:
              "Performance and protection metrics compared across platforms",
            buttonText: "View Document",
            buttonLink: "/documents/threatdown-vs-bitdefender",
          },
          {
            title: "Threatdown vs Kaspersky",
            description:
              "Complete feature comparison and effectiveness analysis",
            buttonText: "View Document",
            buttonLink: "/documents/threatdown-vs-kaspersky",
          },
          {
            title: "Threatdown vs Microsoft",
            description:
              "Enterprise endpoint protection: ThreatDown vs Microsoft Defender",
            buttonText: "View Document",
            buttonLink: "/documents/threatdown-vs-microsoft",
          },
        ],
      },
    ],
  },

  "consulting-compliance": {
    template: "accordion",
    ctaTitle: "Provide Services",
    ctaDescription:
      "Your Success, Our Consulting. Get in touch with our experts to strengthen your security posture.",
    introContent:
      "Effective risk and vulnerability management helps organizations proactively identify, assess, and mitigate security threats before they can be exploited by attackers. A well-structured approach ensures compliance with industry standards, enhances security posture, and minimizes potential business disruptions.",
    accordionItems: [
      {
        title: "Risk & Vulnerability Management",
        content:
          "Effective risk and vulnerability management helps organizations proactively identify, assess, and mitigate security threats before they can be exploited by attackers. A well-structured approach ensures compliance with industry standards, enhances security posture, and minimizes potential business disruptions.\n\nKey components include:\n\n•Comprehensive risk assessments to identify weaknesses.\n•Vulnerability scanning, prioritization, and remediation.\n•Security gap analysis to align with industry best practices.",
      },
      {
        title: "Governance, Risk, and Compliance (GRC)",
        content:
          "Compliance with industry security frameworks is essential for organizations to protect sensitive data, meet legal requirements, and establish a strong security posture. Following these standards helps reduce risks, avoid fines, and build customer trust.\n\nKey compliance frameworks include:\n\n•ISO 27001, SOC 1 & 2, HIPAA, NIST, GDPR, PCI DSS compliance.\n•Security policy development and implementation.\n•Third-party vendor risk assessments and audits.",
      },
      {
        title: "Security Architecture & Strategy Consulting",
        content:
          "Security Architecture and Strategy Consulting focuses on building robust frameworks and strategies to ensure that an organization's systems, applications, and networks are secure and resilient against evolving cyber threats. It involves designing and implementing security measures, aligning them with business goals, and continuously improving security posture.\n\nKey components include:\n\n•Zero Trust framework and Identity Access Management (IAM).\n•Secure Software Development Lifecycle (SSDLC).\n•Business Continuity & Disaster Recovery (BCDR) planning.",
      },
    ],
  },

  mssp: {
    template: "accordion",
    ctaTitle: "The TITAN Defend. You Stay Secured.",
    ctaDescription:
      "24/7 security operations to keep your business protected around the clock.",
    introContent:
      "Our always-on security monitoring ensures real-time threat detection through advanced log analysis, behavioral analytics, and automated threat intelligence. By continuously scanning for anomalies and correlating emerging risks, we provide immediate alerts and rapid response coordination, minimizing the impact of cyber threats before they escalate.",
    accordionItems: [
      {
        title: "24/7 Security Monitoring & Threat",
        content:
          "Our always-on security monitoring ensures real-time threat detection through advanced log analysis, behavioral analytics, and automated threat intelligence. By continuously scanning for anomalies and correlating emerging risks, we provide immediate alerts and rapid response coordination, minimizing the impact of cyber threats before they escalate.\n\nKey components include:\n\n•Continuous log analysis for real-time anomaly detection.\n•Behavioral analytics to identify insider threats and advanced attacks.\n•Automated threat intelligence to correlate emerging risks with your security environment.\n•Immediate alerting and response coordination to minimize impact.",
      },
      {
        title: "Security Information & Event Management (SIEM) Integration",
        content:
          "Our SIEM integration centralizes and analyzes security data from across your network, providing real-time visibility into threats. It correlates events, identifies anomalies, and enhances response time by enabling faster detection and actionable insights to protect your organization from evolving risks.\n\nKey compliance frameworks include:\n\n•Log collection and correlation to detect patterns of malicious activity.\n•Customized alerting rules to prioritize critical incidents.\n•Automated incident response playbooks for fast mitigation.\n•Compliance reporting to meet regulatory obligations.",
      },
      {
        title: "Incident Response & Digital Forensics",
        content:
          "Our Incident Response & Digital Forensics services provide a rapid, coordinated response to security breaches. We quickly identify the source and impact of an attack, while performing thorough digital forensics to uncover evidence and determine how the breach occurred. This helps to mitigate damage, strengthen defenses, and support regulatory compliance through detailed reporting.\n\nKey compliance frameworks include:\n\n•Incident containment and eradication to prevent further compromise.\n•Root cause analysis to identify weaknesses in security controls.\n•Forensic investigations to gather digital evidence for legal or regulatory purposes.\n•Post-incident reporting with remediation recommendations.",
      },
      {
        title: "Threat Intelligence & Proactive Defense",
        content:
          "Our Threat Intelligence & Proactive Defense services continuously analyze global threat landscapes to provide actionable insights and anticipate cyber risks. By integrating real-time threat data and leveraging advanced analytics, we proactively identify vulnerabilities and deploy countermeasures to neutralize threats before they impact your business.\n\nKey compliance frameworks include:\n\n•Continuous tracking of emerging cyber threats relevant to your industry.\n•Custom threat intelligence feeds tailored to your organization's risk profile.\n•Dark web monitoring to identify potential data leaks and threats.\n•Attack surface reduction strategies to preemptively eliminate risks.",
      },
    ],
    additionalSections: [
      {
        type: "highlighted",
        sectionTitle: "Looking for EDR",
        content:
          "Secure your endpoints like a TITANs!",
        buttonText: "Secure your endpoints like a TITANs!",
        buttonLink: "/services/endpoint-mobile-security",
      },
    ],
  },

  "infrastructure-protection": {
    template: "accordion",
    ctaTitle: "Provide Services",
    ctaDescription:
      "Shield Your Infrastructure. Secure your network and infrastructure with enterprise-grade protection.",
    accordionItems: [
      {
        title: "Multi-Layered Security Architecture",
        content:
          "We implement a comprehensive defense-in-depth strategy that covers all levels of your infrastructure—from network perimeter to internal applications. This multi-layered approach ensures that no single vulnerability can compromise your security.",
      },
      {
        title: "Regular Security Assessments & Updates",
        content:
          "We perform routine vulnerability assessments, penetration testing, and security audits, ensuring resilience against emerging threats. Our service includes regular updates and patch management to keep systems secure.",
      },
      {
        title: "Secure Application Development Practices",
        content:
          "We follow secure coding standards and best practices to ensure that your applications are built with robust security measures from the start. This includes vulnerability scanning, code reviews, and penetration testing to mitigate common application risks such as SQL injection, XSS, and CSRF.",
      },
      {
        title: "Database Security and Encryption Solutions",
        content:
          "Our solutions ensure that sensitive data stored in your databases is encrypted both at rest and in transit, with access control policies that restrict unauthorized access. We implement strict database hardening techniques to minimize the attack surface.",
      },
      {
        title: "Network Segmentation and Access Control",
        content:
          "By segmenting your network and implementing granular access control measures, we ensure that sensitive areas of your infrastructure are isolated and protected, preventing lateral movement within your network in the event of a breach.",
      },
      {
        title: "Real-Time Threat Monitoring and Prevention",
        content:
          "We deploy cutting-edge monitoring tools that provide 24/7 surveillance of your systems, identifying potential threats and mitigating risks before they can escalate into full-blown attacks.",
      },
      {
        title: "Advanced Firewall & IPS",
        content:
          "TITAN Shield deploys cutting-edge firewalls and intrusion prevention systems to block unauthorized access, detect threats in real time, and mitigate external attacks.",
      },
    ],
  },

  "training-awareness": {
    template: "accordion",
    ctaTitle: "Provide Services",
    ctaDescription:
      "Shield Up with Cyber Training. Empower your team with the knowledge to recognize and respond to cyber threats.",
    accordionItems: [
      {
        title: "Role-Based Training Programs",
        content:
          "Tailored training modules designed for specific roles within the organization, ensuring that employees receive the information relevant to their job responsibilities, whether they're a manager, developer, or IT professional.",
      },
      {
        title: "Interactive Learning Modules",
        content:
          "Our training modules incorporate interactive content, quizzes, and real-world scenario simulations to keep employees engaged and reinforce critical security concepts.",
      },
      {
        title: "Continuous Learning Platform",
        content:
          "Our platform supports continuous learning, with regular updates to training content that reflect new threats, tools, and best practices.",
      },
      {
        title: "Customizable Industry Content",
        content:
          "We offer customized training content that is tailored to the specific threats and regulatory requirements of your industry, ensuring that employees are well-equipped to address sector-specific risks.",
      },
      {
        title: "Certification Preparation Support",
        content:
          "We offer preparatory courses for cybersecurity Certifications such as CompTIA Security+, Certified Ethical Hacker (CEH), and others, helping employees advance their careers while strengthening your organization's security.",
      },
      {
        title: "Real-World Scenario Simulations",
        content:
          "Training includes hands-on simulations such as phishing campaigns, social engineering attacks, and mock breach scenarios to test employees' responses to common threats in a controlled environment.",
      },
      {
        title: "Regular Phishing Simulations",
        content:
          "We conduct regular phishing exercises to test and educate employees on identifying and responding to phishing emails, a common attack vector in most organizations.",
      },
      {
        title: "Progress Tracking and Reporting",
        content:
          "Our platform provides detailed reports on employee progress, allowing management to track improvements in security awareness and identify areas where further training may be needed.",
      },
    ],
  },
};
