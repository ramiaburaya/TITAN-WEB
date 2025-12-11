"use client";

import { useState } from "react";
import Image from "next/image";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription logic
    console.log("Newsletter subscription:", email);
    setIsSubmitted(true);
    setEmail("");

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="relative min-h-[400px] flex items-center overflow-hidden">
      {/* Fixed parallax background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/assets/newsletter-bg.png"
          alt="Titan Shield newsletter background with cybersecurity branding"
          fill
          className="object-cover"
          quality={75}
          loading="lazy"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Scrolling content */}
      <div className="relative z-10 w-full py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight max-w-5xl">
            Join Our Cybersecurity Newsletter
            <br />
            <span className="text-white/90">for Exclusive Tips & News</span>
          </h2>

          {/* Form */}
          {isSubmitted ? (
            <div className="flex items-center gap-3 text-green-400 text-lg font-semibold bg-green-400/10 border border-green-400/30 rounded-lg px-6 py-4 max-w-md">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Thank you for joining!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-3xl">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full max-w-[500px] px-6 py-3.5 rounded-lg bg-black/40 backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="w-fit px-8 py-3.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium transition-all duration-200"
              >
                Join the Forces
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
