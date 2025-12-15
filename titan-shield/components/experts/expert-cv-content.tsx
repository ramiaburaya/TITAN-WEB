"use client";

import Image from "next/image";
import Link from "next/link";
import { Expert } from "@/types";
import { Linkedin, Github, Mail, Phone } from "lucide-react";

interface ExpertCVContentProps {
  expert: Expert;
}

// GitHub icon component (lucide doesn't have a filled version)
const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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

export function ExpertCVContent({ expert }: ExpertCVContentProps) {
  return (
    <div className="p-6 md:p-10 lg:p-12 text-white">
      {/* Header Section - Enhanced */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-10">
        {/* Photo - Improved */}
        <div className="flex justify-center md:justify-start flex-shrink-0">
          <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-[#8B5CF6]/20">
            <Image
              src={expert.image}
              alt={expert.name}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />
            {/* Enhanced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/30 via-[#a855f7]/15 to-transparent pointer-events-none" />
            {/* Bottom fade for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Info - Enhanced Typography */}
        <div className="flex-1 space-y-5">
          <div>
            <h2 id="modal-title" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {expert.name}
            </h2>
            <p className="text-xl md:text-2xl text-[#8B5CF6] font-semibold mb-2">
              {expert.title}
            </p>
            {expert.subtitle && (
              <p className="text-base md:text-lg text-gray-400 mt-2 font-medium">
                {expert.subtitle}
              </p>
            )}
          </div>

          {/* Contact Info - Enhanced */}
          {(expert.email || expert.phone) && (
            <div className="flex flex-wrap gap-4 text-sm md:text-base">
              {expert.email && (
                <a
                  href={`mailto:${expert.email}`}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-[#8B5CF6]/50 transition-all duration-300 group"
                >
                  <Mail className="w-4 h-4 text-[#8B5CF6] group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">{expert.email}</span>
                </a>
              )}
              {expert.phone && (
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                  <Phone className="w-4 h-4 text-[#8B5CF6]" />
                  <span className="text-gray-300">{expert.phone}</span>
                </div>
              )}
            </div>
          )}

          {/* Social Links - Enhanced */}
          {(expert.linkedin || expert.github || expert.facebook) && (
            <div className="flex gap-3">
              {expert.linkedin && (
                <Link
                  href={expert.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-[#8B5CF6] rounded-xl border border-white/10 hover:border-[#8B5CF6] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#8B5CF6]/20 group"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              )}
              {expert.github && (
                <Link
                  href={expert.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-[#8B5CF6] rounded-xl border border-white/10 hover:border-[#8B5CF6] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#8B5CF6]/20 group"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              )}
              {expert.facebook && (
                <Link
                  href={expert.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-[#8B5CF6] rounded-xl border border-white/10 hover:border-[#8B5CF6] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#8B5CF6]/20 group"
                  aria-label="Facebook Profile"
                >
                  <FacebookIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Divider - Enhanced */}
      <div className="relative h-px mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8B5CF6]/50 to-transparent"></div>
      </div>

      {/* Bio Section - Enhanced */}
      {expert.bio && (
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-8 w-1 bg-gradient-to-b from-[#8B5CF6] to-[#7C3AED] rounded-full"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              About
            </h3>
          </div>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg pl-4 border-l-2 border-white/5">
            {expert.bio}
          </p>
        </section>
      )}

      {/* Skills Section - Enhanced */}
      {expert.skills && expert.skills.length > 0 && (
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-8 w-1 bg-gradient-to-b from-[#8B5CF6] to-[#7C3AED] rounded-full"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Skills & Expertise
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {expert.skills.map((skill, index) => (
              <span
                key={index}
                className="px-5 py-2.5 bg-gradient-to-br from-white/10 to-white/5 hover:from-[#8B5CF6]/20 hover:to-[#7C3AED]/10 rounded-full text-sm md:text-base text-gray-200 hover:text-white border border-white/10 hover:border-[#8B5CF6]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#8B5CF6]/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Certifications Section - Enhanced */}
      {expert.certifications && expert.certifications.length > 0 && (
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-8 w-1 bg-gradient-to-b from-[#8B5CF6] to-[#7C3AED] rounded-full"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Certifications
            </h3>
          </div>
          <div className="space-y-4">
            {expert.certifications.map((cert, index) => (
              <div
                key={index}
                className="group p-5 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl border border-white/10 hover:border-[#8B5CF6]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#8B5CF6]/10"
              >
                <h4 className="font-bold text-white text-base md:text-lg mb-1 group-hover:text-[#8B5CF6] transition-colors">
                  {cert.name}
                </h4>
                <p className="text-sm md:text-base text-gray-400 mt-1">
                  {cert.issuer} • {cert.date}
                </p>
                {cert.credentialId && (
                  <p className="text-xs text-gray-500 mt-2 font-mono bg-white/5 px-2 py-1 rounded inline-block">
                    ID: {cert.credentialId}
                  </p>
                )}
                {cert.credentialUrl && (
                  <Link
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#8B5CF6] hover:text-[#a855f7] hover:underline mt-3 inline-flex items-center gap-1 font-medium"
                  >
                    Verify Credential →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience Section - Enhanced Timeline */}
      {expert.experience && expert.experience.length > 0 && (
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-8 w-1 bg-linear-to-b from-[#8B5CF6] to-[#7C3AED] rounded-full"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Experience
            </h3>
          </div>
          <div className="space-y-6">
            {expert.experience.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 transition-colors duration-300 group">
                {/* Enhanced Timeline dot with pulse effect */}
                <div className="absolute left-0 top-2 w-4 h-4 -translate-x-[9px]">
                  <div className="absolute inset-0 bg-[#8B5CF6] rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="absolute inset-0 bg-[#8B5CF6] rounded-full animate-ping opacity-20"></div>
                </div>

                <div className="pb-6">
                  <h4 className="font-bold text-white text-lg md:text-xl group-hover:text-[#8B5CF6] transition-colors">
                    {exp.title}
                  </h4>
                  {exp.company && (
                    <p className="text-sm md:text-base text-gray-400 mt-1 font-medium">{exp.company}</p>
                  )}
                  <p className="text-xs md:text-sm text-[#8B5CF6] mt-1 font-semibold">{exp.period}</p>

                  {exp.description && (
                    <p className="text-gray-300 mt-3 text-sm md:text-base leading-relaxed">
                      {exp.description}
                    </p>
                  )}

                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm md:text-base text-gray-300 flex items-start gap-3 group/item">
                          <span className="text-[#8B5CF6] text-lg leading-none group-hover/item:scale-125 transition-transform">▹</span>
                          <span className="flex-1">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education Section - Enhanced Cards */}
      {expert.education && expert.education.length > 0 && (
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-8 w-1 bg-linear-to-b from-[#8B5CF6] to-[#7C3AED] rounded-full"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Education
            </h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {expert.education.map((edu, index) => (
              <div
                key={index}
                className="group p-5 bg-linear-to-br from-white/5 to-white/2 rounded-xl border border-white/10 hover:border-[#8B5CF6]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#8B5CF6]/10"
              >
                <h4 className="font-bold text-white text-base md:text-lg mb-2 group-hover:text-[#8B5CF6] transition-colors">
                  {edu.degree}
                </h4>
                <p className="text-sm md:text-base text-gray-400 font-medium">
                  {edu.institution}
                </p>
                <p className="text-xs md:text-sm text-[#8B5CF6] mt-2 font-semibold">
                  {edu.year}
                </p>
                {edu.field && (
                  <p className="text-xs text-gray-500 mt-2 bg-white/5 px-2 py-1 rounded inline-block">
                    {edu.field}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Achievements Section - Enhanced with Icons */}
      {expert.achievements && expert.achievements.length > 0 && (
        <section className="mb-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-8 w-1 bg-linear-to-b from-[#8B5CF6] to-[#7C3AED] rounded-full"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Achievements & Recognition
            </h3>
          </div>
          <ul className="space-y-3">
            {expert.achievements.map((achievement, index) => (
              <li key={index} className="group flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
                <span className="text-[#8B5CF6] text-xl leading-none group-hover:scale-125 transition-transform mt-0.5">⭐</span>
                <span className="text-gray-300 group-hover:text-white text-sm md:text-base transition-colors flex-1">{achievement}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
