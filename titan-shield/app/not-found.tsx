import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layer 1: Background Image - same as hero */}
      <Image
        src="/assets/herosection_bg.png"
        alt="Background"
        fill
        className="object-cover object-center brightness-50"
        priority
      />

      {/* Layer 2: Purple Gradient Overlay - same as hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7a1cff]/55 via-[#a44bff]/25 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-[600px] w-full px-8">
        {/* Big 404 heading with gradient */}
        <h1 className="text-[clamp(5rem,15vw,8rem)] font-extrabold bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent leading-none mb-4">
          404
        </h1>

        {/* Decorative horizontal gradient line */}
        <div className="flex justify-center mb-6">
          <div className="w-[240px] h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
        </div>

        {/* Title */}
        <h2 className="text-[clamp(1.8rem,4vw,2.4rem)] font-semibold text-white mb-4">
          Page Not Found
        </h2>

        {/* Description paragraph */}
        <p className="max-w-[420px] mx-auto text-center leading-relaxed text-white/80 mb-8 text-base md:text-lg">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>

        {/* Primary button */}
        <Link
          href="/"
          className="inline-block px-10 py-3.5 rounded-full bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white font-semibold transition-all duration-300 hover:scale-105 shadow-[0_4px_15px_rgba(168,85,247,0.3)] hover:shadow-[0_6px_25px_rgba(168,85,247,0.5)]"
        >
          Return Home
        </Link>

        {/* Decorative horizontal gradient line */}
        <div className="flex justify-center mt-10 mb-6">
          <div className="w-[200px] h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>

        {/* Secondary links */}
        <div className="flex gap-6 justify-center items-center text-sm">
          <Link
            href="/services"
            className="text-white/70 hover:text-white transition-colors duration-200"
          >
            Services
          </Link>
          <span className="text-white/40 select-none">·</span>
          <Link
            href="/about"
            className="text-white/70 hover:text-white transition-colors duration-200"
          >
            About Us
          </Link>
          <span className="text-white/40 select-none">·</span>
          <Link
            href="/contact"
            className="text-white/70 hover:text-white transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
