"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Expert } from "@/types";
import { ExpertCVModal } from "@/components/experts/expert-cv-modal";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

// Sample data with complete CV information
const experts: Expert[] = [
  {
    name: "Sami Elsheikh",
    title: "Co-Founder / CTO",
    subtitle: "Senior Security Consultant",
    image: "/assets/About_Us_Page/hacker-1.png",
    linkedin: "https://www.linkedin.com/in/samielsheikh/",
    facebook: "https://www.facebook.com/sami.elsheikh/",
    bio: "Cybersecurity expert with over 10 years of experience in penetration testing, security architecture, and team leadership. Passionate about building secure systems and mentoring the next generation of security professionals.",
    email: "sami@titanshield.com",
    skills: ["Penetration Testing", "Security Architecture", "Threat Modeling", "Incident Response", "Python", "Bash Scripting", "Network Security", "Web Application Security", "Mobile Security", "Cloud Security"],
    certifications: [
      { name: "Offensive Security Certified Professional (OSCP)", issuer: "Offensive Security", date: "2018" },
      { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", date: "2017" },
      { name: "GIAC Penetration Tester (GPEN)", issuer: "SANS", date: "2019" },
    ],
    experience: [
      { title: "Co-Founder & CTO", company: "TITAN Shield", period: "2020 - Present", highlights: ["Built team of 10+ security professionals", "Delivered 100+ penetration testing projects", "Established security training program"] },
      { title: "Senior Security Consultant", company: "CyberDefense Corp", period: "2015 - 2020", highlights: ["Conducted security assessments for Fortune 500 clients", "Led incident response team", "Developed custom security tools"] },
    ],
    education: [
      { degree: "M.Sc. Computer Science", institution: "Palestinian Polytechnic University", year: "2015", field: "Cybersecurity" },
      { degree: "B.Sc. Computer Engineering", institution: "Birzeit University", year: "2013" },
    ],
    achievements: ["Speaker at Black Hat Middle East 2023", "Published research on APT techniques", "Contributor to open-source security tools"],
  },
  {
    name: "Abdallah Bakr",
    title: "Cybersecurity Engineer",
    subtitle: "OSDA/OSIR Certified",
    image: "/assets/About_Us_Page/hacker-1.png",
    linkedin: "https://www.linkedin.com/in/abdallahbakr/",
    bio: "Specialized in digital forensics and incident response with a strong background in malware analysis and threat hunting. Committed to staying ahead of emerging cyber threats.",
    email: "abdallah@titanshield.com",
    skills: ["Digital Forensics", "Incident Response", "Malware Analysis", "Threat Hunting", "SIEM", "Python", "PowerShell", "Memory Forensics", "Network Analysis"],
    certifications: [
      { name: "OffSec Defense Analyst (OSDA)", issuer: "Offensive Security", date: "2022" },
      { name: "OffSec Incident Responder (OSIR)", issuer: "Offensive Security", date: "2023" },
      { name: "GIAC Certified Incident Handler (GCIH)", issuer: "SANS", date: "2021" },
    ],
    experience: [
      { title: "Cybersecurity Engineer", company: "TITAN Shield", period: "2021 - Present", highlights: ["Led 50+ incident response engagements", "Developed custom forensic tools", "Trained junior analysts"] },
      { title: "SOC Analyst", company: "SecureNet Solutions", period: "2019 - 2021", highlights: ["Monitored and analyzed security events", "Improved threat detection capabilities"] },
    ],
    education: [
      { degree: "B.Sc. Information Technology", institution: "An-Najah National University", year: "2019", field: "Cybersecurity" },
    ],
  },
  {
    name: "Rami AbuRayya",
    title: "Information Security Engineer",
    subtitle: "OSCP Certified",
    image: "/assets/About_Us_Page/hacker-1.png",
    linkedin: "https://www.linkedin.com/in/ramiaburayya/",
    bio: "Offensive security specialist focused on web application penetration testing and vulnerability research. Experienced in identifying and exploiting complex security flaws.",
    skills: ["Web Application Security", "Penetration Testing", "Vulnerability Assessment", "Burp Suite", "OWASP Top 10", "API Security", "JavaScript", "SQL Injection", "XSS"],
    certifications: [
      { name: "Offensive Security Certified Professional (OSCP)", issuer: "Offensive Security", date: "2021" },
      { name: "Certified Web Application Defender (CWAD)", issuer: "EC-Council", date: "2020" },
    ],
    experience: [
      { title: "Information Security Engineer", company: "TITAN Shield", period: "2020 - Present", highlights: ["Conducted 80+ web application assessments", "Discovered critical vulnerabilities in major platforms", "Developed secure coding guidelines"] },
      { title: "Junior Pentester", company: "WebSec Pro", period: "2018 - 2020" },
    ],
    education: [
      { degree: "B.Sc. Software Engineering", institution: "Palestine Technical University", year: "2018" },
    ],
  },
  {
    name: "Omar Mousa",
    title: "Information Security Engineer",
    subtitle: "OSCP Certified",
    image: "/assets/About_Us_Page/hacker-1.png",
    linkedin: "https://www.linkedin.com/in/omar-mousa15/",
    bio: "Network security expert with deep knowledge of infrastructure penetration testing and secure network design. Passionate about breaking and securing complex network architectures.",
    skills: ["Network Penetration Testing", "Infrastructure Security", "Wireless Security", "Firewall Configuration", "VPN", "Cisco", "Wireshark", "Metasploit", "Nmap"],
    certifications: [
      { name: "Offensive Security Certified Professional (OSCP)", issuer: "Offensive Security", date: "2022" },
      { name: "Cisco Certified Network Associate (CCNA)", issuer: "Cisco", date: "2020" },
    ],
    experience: [
      { title: "Information Security Engineer", company: "TITAN Shield", period: "2021 - Present", highlights: ["Performed network security assessments", "Designed secure network architectures", "Conducted wireless security audits"] },
      { title: "Network Administrator", company: "TechNet Solutions", period: "2019 - 2021" },
    ],
    education: [
      { degree: "B.Sc. Computer Networks", institution: "Hebron University", year: "2019" },
    ],
  },
  {
    name: "Ali Abawh",
    title: "Information Security Engineer",
    subtitle: "OSCP Certified",
    image: "/assets/About_Us_Page/hacker-1.png",
    linkedin: "https://www.linkedin.com/in/ali-abwah/",
    bio: "Cloud security specialist with expertise in AWS and Azure security assessments. Focused on securing cloud infrastructure and implementing DevSecOps practices.",
    skills: ["Cloud Security", "AWS", "Azure", "DevSecOps", "Container Security", "Kubernetes", "Terraform", "CI/CD Security", "IAM"],
    certifications: [
      { name: "Offensive Security Certified Professional (OSCP)", issuer: "Offensive Security", date: "2021" },
      { name: "AWS Certified Security Specialty", issuer: "Amazon", date: "2022" },
    ],
    experience: [
      { title: "Information Security Engineer", company: "TITAN Shield", period: "2020 - Present", highlights: ["Secured 40+ cloud environments", "Implemented DevSecOps pipelines", "Conducted cloud security training"] },
      { title: "Cloud Engineer", company: "CloudTech Inc", period: "2018 - 2020" },
    ],
    education: [
      { degree: "B.Sc. Computer Science", institution: "Islamic University of Gaza", year: "2018" },
    ],
  },
  {
    name: "Amani Hushieh",
    title: "Information Security",
    subtitle: "OSWA Certified",
    image: "/assets/About_Us_Page/hacker-1.png",
    linkedin: "https://www.linkedin.com/in/amani-hushieh/",
    bio: "Security researcher specializing in web application security and secure software development. Dedicated to helping organizations build security into their development lifecycle.",
    skills: ["Web Application Security", "Secure Coding", "OWASP", "React Security", "Node.js Security", "Security Testing", "Code Review", "SAST/DAST"],
    certifications: [
      { name: "OffSec Web Assessor (OSWA)", issuer: "Offensive Security", date: "2022" },
      { name: "Certified Secure Software Lifecycle Professional (CSSLP)", issuer: "ISC2", date: "2021" },
    ],
    experience: [
      { title: "Information Security Specialist", company: "TITAN Shield", period: "2021 - Present", highlights: ["Conducted security code reviews", "Developed secure coding training", "Performed web app assessments"] },
      { title: "Software Developer", company: "DevSoft Ltd", period: "2019 - 2021" },
    ],
    education: [
      { degree: "B.Sc. Software Engineering", institution: "Birzeit University", year: "2019" },
    ],
  },
  {
    name: "Rawan Samara",
    title: "Information Security Engineer",
    subtitle: "OSWA Certified",
    image: "/assets/About_Us_Page/hacker-1.png",
    linkedin: "https://www.linkedin.com/in/rawan-samara-444814127/",
    bio: "Application security engineer with focus on API security and modern web frameworks. Experienced in identifying business logic flaws and authentication bypasses.",
    skills: ["API Security", "Authentication Security", "OAuth/OIDC", "JWT", "GraphQL Security", "REST API", "Postman", "Business Logic Testing"],
    certifications: [
      { name: "OffSec Web Assessor (OSWA)", issuer: "Offensive Security", date: "2023" },
      { name: "Certified API Security Professional (CASP)", issuer: "APISec", date: "2022" },
    ],
    experience: [
      { title: "Information Security Engineer", company: "TITAN Shield", period: "2022 - Present", highlights: ["Assessed 60+ API implementations", "Discovered authentication flaws", "Created API security guidelines"] },
      { title: "QA Engineer", company: "SoftwareLabs", period: "2020 - 2022" },
    ],
    education: [
      { degree: "B.Sc. Computer Science", institution: "An-Najah National University", year: "2020" },
    ],
  },
  {
    name: "Sondos Ashraf",
    title: "Information Security Engineer",
    subtitle: "OSWA Certified",
    image: "/assets/About_Us_Page/hacker-1.png",
    linkedin: "https://www.linkedin.com/in/sondos-farrah/",
    bio: "Mobile application security specialist with expertise in iOS and Android security testing. Focused on securing mobile apps and protecting user data.",
    skills: ["Mobile Security", "iOS Security", "Android Security", "Mobile App Pentesting", "Frida", "Objection", "Binary Analysis", "SSL Pinning Bypass"],
    certifications: [
      { name: "OffSec Web Assessor (OSWA)", issuer: "Offensive Security", date: "2022" },
      { name: "Mobile Application Security Tester (MAST)", issuer: "SANS", date: "2023" },
    ],
    experience: [
      { title: "Information Security Engineer", company: "TITAN Shield", period: "2021 - Present", highlights: ["Tested 50+ mobile applications", "Identified critical mobile vulnerabilities", "Developed mobile security testing methodology"] },
      { title: "Mobile Developer", company: "AppDev Studio", period: "2019 - 2021" },
    ],
    education: [
      { degree: "B.Sc. Information Systems", institution: "Palestine Polytechnic University", year: "2019" },
    ],
  },
  {
    name: "Malak Azzam",
    title: "Information Security Engineer",
    subtitle: "Security Analyst",
    image: "/assets/About_Us_Page/hacker-1.png",
    linkedin: "https://www.linkedin.com/in/eng-malak-azam-926306238/",
    bio: "Junior security engineer focused on vulnerability management and security assessments. Eager to learn and grow in the cybersecurity field.",
    skills: ["Vulnerability Assessment", "Security Scanning", "Nessus", "OpenVAS", "Report Writing", "Risk Assessment", "Compliance", "Security Awareness"],
    certifications: [
      { name: "CompTIA Security+", issuer: "CompTIA", date: "2022" },
    ],
    experience: [
      { title: "Information Security Engineer", company: "TITAN Shield", period: "2022 - Present", highlights: ["Conducted vulnerability assessments", "Assisted in penetration testing engagements", "Created security documentation"] },
    ],
    education: [
      { degree: "B.Sc. Computer Engineering", institution: "Hebron University", year: "2022" },
    ],
  },
];

interface ExpertCardProps {
  expert: Expert;
  onClick: () => void;
}

function ExpertCard({ expert, onClick }: ExpertCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 h-full min-h-[220px] cursor-pointer"
    >
      {/* Background Image - Bottom Right */}
      <div className="absolute bottom-0 right-0 w-[50%] h-[70%] grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-60">
        <Image
          src={expert.image}
          alt={expert.name}
          fill
          className="object-contain object-bottom group-hover:-translate-x-2 transition-transform duration-500"
        />
      </div>

      <div className="relative z-10 p-4 flex flex-col justify-between h-full">
        {/* Top Section - Info */}
        <div className="pr-2 max-w-[60%]">
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
            {expert.name}
          </h3>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
            {expert.title}
            {expert.subtitle && (
              <>
                <br />
                {expert.subtitle}
              </>
            )}
          </p>
        </div>

        {/* Bottom Left - Social Links */}
        <div className="flex flex-row gap-2 w-fit">
          {expert.linkedin && (
            <Link
              href={expert.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 bg-[#2A2A2A] rounded-lg hover:bg-[#8B5CF6] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </Link>
          )}
          {expert.github && (
            <Link
              href={expert.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 bg-[#2A2A2A] rounded-lg hover:bg-[#8B5CF6] transition-colors duration-300"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </Link>
          )}
          {expert.facebook && (
            <Link
              href={expert.facebook}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 bg-[#2A2A2A] rounded-lg hover:bg-[#8B5CF6] transition-colors duration-300"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export function OurExpert() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedExpertIndex, setSelectedExpertIndex] = useState<number | null>(null);
  const itemsPerPage = 9; // 3x3 grid
  const totalPages = Math.ceil(experts.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentExperts = experts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleExpertClick = (index: number) => {
    // Calculate the absolute index in the full experts array
    const absoluteIndex = currentPage * itemsPerPage + index;
    setSelectedExpertIndex(absoluteIndex);
  };

  const handleCloseModal = () => {
    setSelectedExpertIndex(null);
  };

  return (
    <section className="bg-brand-dark text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-0.5 w-[100px] bg-linear-to-l from-[#8B5CF6] to-transparent"></div>
            <h3 className="text-sm font-semibold text-[#f6f0ff] uppercase tracking-wider whitespace-nowrap">
              OUR EXPERTS
            </h3>
            <div className="h-0.5 w-[100px] bg-linear-to-r from-[#8B5CF6] to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Protecting Your Digital Future
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-16">
          {/* Navigation Arrows */}
          {totalPages > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Next page"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Responsive Grid/Slider */}
          <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto pb-6 md:pb-0 scrollbar-hide">
            {currentExperts.map((expert, index) => (
              <div
                key={`${currentPage}-${index}`}
                className="min-w-[85vw] sm:min-w-[45vw] md:min-w-0 snap-center flex-shrink-0 md:flex-shrink"
              >
                <ExpertCard expert={expert} onClick={() => handleExpertClick(index)} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CV Modal */}
      {selectedExpertIndex !== null && (
        <ExpertCVModal
          experts={experts}
          selectedIndex={selectedExpertIndex}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}
