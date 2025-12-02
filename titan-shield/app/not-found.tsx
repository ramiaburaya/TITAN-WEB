import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex justify-center items-center text-center overflow-hidden text-white px-8">
      {/* Background Layer - Titan silhouette with blur */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/titan-warrior-graphic.png"
          alt="Background"
          fill
          className="object-cover opacity-10 blur-sm"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c0c] via-[#1a001d] to-[#0c0c0c]" />
        {/* Purple radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(168,85,255,0.2),transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Large 404 with gradient and floating animation */}
        <h1 className="text-[clamp(6rem,16vw,10rem)] font-bold leading-none mb-6 bg-gradient-to-r from-[#a855ff] to-[#ec4899] bg-clip-text text-transparent animate-[float404_6s_ease-in-out_infinite]">
          404
        </h1>

        {/* Page Not Found heading */}
        <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-semibold mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-300 max-w-[480px] mx-auto mb-8 text-lg leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Return Home Button with glow */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#a855ff] to-[#ec4899] shadow-[0_0_25px_rgba(168,85,255,0.4)] hover:shadow-[0_0_45px_rgba(168,85,255,0.7)] hover:-translate-y-0.5 transition-all duration-300"
        >
          <Home className="w-5 h-5" />
          Return Home
        </Link>

        {/* Quick links */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-8 justify-center text-sm">
            <Link
              href="/services"
              className="text-gray-400 hover:text-[#a855f7] transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-400 hover:text-[#a855f7] transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-[#a855f7] transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
