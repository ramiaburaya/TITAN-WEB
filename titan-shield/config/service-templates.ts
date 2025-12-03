/**
 * Extended service configurations with template-specific data
 */

export type ServiceTemplate = "offsec" | "endpoint" | "accordion";

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
  additionalSections?: Array<{
    title: string;
    content: string;
    buttonText?: string;
    buttonLink?: string;
  }>;
  comparisonSection?: {
    title: string;
    subtitle: string;
    comparisons: Array<{
      title: string;
      description: string;
      buttonText: string;
    }>;
  };
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
    comparisonSection: {
      title: "At The TITANS, We Ensure an Honest and Transparent Comparison",
      subtitle:
        "We provide unbiased comparisons of leading endpoint security solutions to help you make informed decisions.",
      comparisons: [
        {
          title: "Threatdown vs Kaspersky",
          description:
            "Why our EDR offering delivers better Protection than Others",
          buttonText: "View Document",
        },
        {
          title: "Threatdown vs Microsoft",
          description:
            "Comparing Threatdown to another leader and industry favorite",
          buttonText: "View Document",
        },
        {
          title: "Threatdown vs Crowdstrike",
          description:
            "A comprehensive comparison between Malwarebytes and Crowdstrike",
          buttonText: "View Document",
        },
      ],
    },
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
        content: [
          "Comprehensive risk assessments to identify weaknesses",
          "Vulnerability scanning, prioritization, and remediation",
          "Security gap analysis to align with industry best practices",
        ],
      },
      {
        title: "Governance, Risk, and Compliance (GRC)",
        content: [
          "GRC framework development and implementation",
          "Policy creation and regulatory compliance management",
          "Continuous monitoring and audit preparation",
        ],
      },
      {
        title: "Security Architecture & Strategy Consulting",
        content: [
          "Design secure IT infrastructure and network architecture",
          "Develop long-term cybersecurity strategies",
          "Cloud security architecture and zero-trust implementation",
        ],
      },
    ],
  },

  mssp: {
    template: "accordion",
    ctaTitle: "The TITAN Defend. You Stay Secured.",
    ctaDescription:
      "24/7 security operations to keep your business protected around the clock.",
    introContent:
      "Our always-on security monitoring ensures real-time threat detection through advanced log analysis, behavioral analytics, and automated threat intelligence. Continuously scanning for anomalies and coordinating emerging risks, we provide immediate alerts and expert response coordination, minimizing the impact of cyber threats before they escalate.",
    accordionItems: [
      {
        title: "24/7 Security Monitoring & Threat Detection",
        content: [
          "Continuous log analysis for real-time anomaly detection",
          "Behavioral analytics to identify threats and advanced attacks",
          "Automated threat intelligence to correlate emerging risks with your security environment",
          "Coordinated threat response with your security environment",
          "Immediate alerting and response coordination to minimize impact",
        ],
      },
      {
        title: "Security Information & Event Management (SIEM) Integration",
        content:
          "Advanced SIEM solutions that aggregate, correlate, and analyze security events across your infrastructure.",
      },
      {
        title: "Incident Response & Digital Forensics",
        content:
          "Expert incident response services to contain and remediate security breaches quickly and effectively.",
      },
      {
        title: "Threat Intelligence & Proactive Defense",
        content:
          "Leverage global threat intelligence to stay ahead of emerging cyber threats and proactively defend your assets.",
      },
    ],
    additionalSections: [
      {
        title: "Looking for EDR",
        content:
          "Secure your endpoints like a TITAN! Our EDR solutions provide advanced threat detection, response, and remediation capabilities.",
        buttonText: "Secure your endpoints like a TITAN!",
        buttonLink: "/services/endpoint-mobile-security",
      },
    ],
  },

  "infrastructure-protection": {
    template: "accordion",
    ctaTitle: "Provide Services",
    ctaDescription:
      "Shield Your Infrastructure. Secure your network and infrastructure with enterprise-grade protection.",
    introContent:
      "We implement a comprehensive defense-in-depth strategy that covers all levels of your infrastructure. From network perimeter to internal applications, our multi-layered approach ensures that your systems, applications, and data are always protected against evolving threats.",
    accordionItems: [
      {
        title: "Multi-Layered Security Architecture",
        content: [
          "Comprehensive perimeter and internal network protection",
          "Application-level security controls",
          "Zero-trust network architecture implementation",
        ],
      },
      {
        title: "Network Segmentation and Access Control",
        content:
          "Implement network segmentation and micro-segmentation to limit lateral movement and enforce strict access controls.",
      },
      {
        title: "Real-Time Threat Monitoring and Response",
        content:
          "24/7 monitoring with advanced threat detection, real-time alerts, and automated response capabilities.",
      },
      {
        title: "Advanced Firewall & IPS",
        content:
          "Next-generation firewalls and intrusion prevention systems to block sophisticated threats at the network edge.",
      },
      {
        title: "Regular Security Assessments & Updates",
        content:
          "Continuous security testing and updates to ensure your infrastructure remains resilient.",
      },
      {
        title: "Secure Application Development Practices",
        content:
          "Integrate security into the software development lifecycle with secure coding practices and automated security testing.",
      },
      {
        title: "Database Security and Encryption Solutions",
        content:
          "Protect sensitive data with encryption, access controls, and database activity monitoring.",
      },
    ],
  },

  "training-awareness": {
    template: "accordion",
    ctaTitle: "Provide Services",
    ctaDescription:
      "Shield Up with Cyber Training. Empower your team with the knowledge to recognize and respond to cyber threats.",
    introContent:
      "TITAN Shield's Cybersecurity Training offers real-world programs to build your team's skills. From basic awareness to advanced IT security, we equip your employees with the skills to recognize, mitigate, and respond to threats, reducing human error and fostering a proactive security mindset",
    accordionItems: [
      {
        title: "Role-Based Training Programs",
        content:
          "Customized training for different roles within your organization, from executives to technical staff.",
      },
      {
        title: "Interactive Learning Modules",
        content:
          "Engaging, hands-on training that reinforces security best practices through real-world scenarios.",
      },
      {
        title: "Continuous Learning Platform",
        content:
          "Ongoing education with regular updates on emerging threats and security best practices.",
      },
      {
        title: "Customizable Industry Content",
        content:
          "Industry-specific training content tailored to your organization's unique security challenges.",
      },
      {
        title: "Certification Preparation Support",
        content:
          "Prepare your team for industry certifications like CISSP, CEH, Security+, and more.",
      },
      {
        title: "Real-World Scenario Simulations",
        content:
          "Hands-on exercises that simulate real cyberattacks to test and improve your team's response capabilities.",
      },
      {
        title: "Regular Phishing Simulations",
        content:
          "Test your organization's resilience with simulated phishing campaigns and track improvement over time.",
      },
      {
        title: "Progress Tracking and Reporting",
        content:
          "Detailed analytics on training completion, test scores, and behavioral improvements across your organization.",
      },
    ],
  },
};
