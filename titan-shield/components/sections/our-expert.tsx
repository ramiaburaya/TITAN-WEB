"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Custom SVG icons to replace deprecated Lucide brand icons
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

interface Expert {
  name: string;
  title: string;
  subtitle?: string;
  image: string;
  facebook?: string;
  linkedin?: string;
}

// Sample data - Replace with your actual employee data
const experts: Expert[] = [
  {
    name: "Sami Elsheikh",
    title: "Co-Founder / CTO",
    subtitle: "Senior Security Consultant",
    image: "/assets/About_Us_Page/hacker-1.png",
    facebook: "https://www.facebook.com/sami.elsheikh",
    linkedin: "https://www.linkedin.com/in/samielsheikh/",
  },
  {
    name: "Abdallah Bakr",
    title: "Cybersecurity Engineer",
    subtitle: "OSDP/OSIR Certified",
    image: "/assets/About_Us_Page/hacker-1.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Rami AbuRayya",
    title: "Information Security Engineer",
    subtitle: "OSCP Certified",
    image: "/assets/About_Us_Page/hacker-1.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Omar Mousa",
    title: "Information Security Engineer",
    subtitle: "OSCP Certified",
    image: "/assets/About_Us_Page/hacker-1.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Ali Abawh",
    title: "Information Security Engineer",
    subtitle: "OSCP Certified",
    image: "/assets/About_Us_Page/hacker-1.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Amani Hushieh",
    title: "Security Architect",
    subtitle: "Infrastructure Security",
    image: "/assets/About_Us_Page/hacker-1.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Rawan Samara",
    title: "Security Researcher",
    subtitle: "Vulnerability Analysis",
    image: "/assets/About_Us_Page/hacker-1.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Sondos Ashraf",
    title: "Security Engineer",
    subtitle: "Network Security",
    image: "/assets/About_Us_Page/hacker-1.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Malak Azzam",
    title: "Security Analyst",
    subtitle: "Malware Analysis",
    image: "/assets/About_Us_Page/hacker-1.png",
    linkedin: "https://www.linkedin.com",
  },
];

function ExpertCard({ expert }: { expert: Expert }) {
  return (
    <div className="group relative bg-[#1A1A1A] rounded-lg overflow-hidden hover:bg-[#222222] transition-all duration-300 h-full min-h-[220px]">
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
          {expert.facebook && (
            <Link
              href={expert.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#2A2A2A] rounded-lg hover:bg-[#7C3AED] transition-colors duration-300"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </Link>
          )}
          {expert.linkedin && (
            <Link
              href={expert.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#2A2A2A] rounded-lg hover:bg-[#7C3AED] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export function OurExpert() {
  const [currentPage, setCurrentPage] = useState(0);
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

  return (
    <section className="bg-[#0A0A0A] text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-0.5 w-[100px] bg-linear-to-l from-[#7C3AED] to-transparent"></div>
            <h3 className="text-sm font-semibold text-[#f6f0ff] uppercase tracking-wider whitespace-nowrap">
              OUR EXPERTS
            </h3>
            <div className="h-0.5 w-[100px] bg-linear-to-r from-[#7C3AED] to-transparent"></div>
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
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-[#7C3AED] hover:bg-[#6D28D9] text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-[#7C3AED] hover:bg-[#6D28D9] text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Next page"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* 3x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {currentExperts.map((expert, index) => (
              <ExpertCard key={`${currentPage}-${index}`} expert={expert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
