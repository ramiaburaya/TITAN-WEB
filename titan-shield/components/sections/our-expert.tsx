"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin } from "lucide-react";

export function OurExpert() {
  return (
    <section className="bg-[#0A0A0A] text-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-[100px] bg-gradient-to-l from-[#7C3AED] to-transparent"></div>
            <h3 className="text-sm font-semibold text-[#f6f0ff] uppercase tracking-wider whitespace-nowrap">
              OUR EXPERT
            </h3>
            <div className="h-[2px] w-[100px] bg-gradient-to-r from-[#7C3AED] to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Protecting Your Digital Future
          </h2>
        </div>

        <div className="flex justify-center mt-16">
          <div className="group relative bg-[#1A1A1A] rounded-lg overflow-hidden hover:bg-[#222222] transition-all duration-300 w-full max-w-lg md:max-w-xl lg:max-w-3xl min-h-[400px] md:min-h-[450px]">
            {/* Background Image - Bottom Right */}
            <div className="absolute bottom-0 right-0 w-[60%] md:w-[50%] h-[80%] grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-60">
              <Image
                src="/assets/About_Us_Page/hacker-1.png"
                alt="Sami Elsheikh"
                fill
                className="object-contain object-bottom group-hover:translate-x-[-20px] transition-transform duration-500"
              />
            </div>

            <div className="relative z-10 p-8 md:p-12 flex flex-col justify-between min-h-[400px] md:min-h-[450px]">
              {/* Top Section - Sami's Info */}
              <div className="max-w-[60%]">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                  Sami Elsheikh
                </h3>
                <p className="text-gray-400 text-base md:text-lg lg:text-xl leading-relaxed">
                  Co-Founder / CTO<br />
                  Senior Security Consultant
                </p>
              </div>

              {/* Bottom Left - Social Links */}
              <div className="flex flex-col gap-3 w-fit">
                <Link
                  href="https://www.facebook.com/sami.elsheikh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#2A2A2A] rounded-lg hover:bg-[#7C3AED] transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/samielsheikh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#2A2A2A] rounded-lg hover:bg-[#7C3AED] transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
