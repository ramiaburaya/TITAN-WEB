"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { NAVIGATION_LINKS } from "@/config/navigation";
import { Container } from "@/components/ui/container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#211E1E]/95 backdrop-blur-sm border-b border-brand-dark-light">
      <Container>
        <div className="flex h-24 items-center justify-between py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center px-6 py-3 group">
            <Image
              src="/logo.png"
              alt="Titan Shield Logo"
              width={180}
              height={60}
              className="h-auto w-auto max-h-16 transition-opacity group-hover:opacity-80"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-10">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-base font-semibold transition-colors hover:text-brand-purple",
                    isActive(link.href)
                      ? "text-brand-purple"
                      : "text-gray-300"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Spacer for layout balance */}
          <div className="hidden md:block w-[140px]" />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-brand-dark-light animate-in slide-in-from-top-4 duration-200">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block py-3 text-lg font-semibold transition-colors hover:text-brand-purple",
                  isActive(link.href)
                    ? "text-brand-purple"
                    : "text-gray-300"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </nav>
  );
}
