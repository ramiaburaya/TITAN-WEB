"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { NAVIGATION_LINKS, SERVICES_DROPDOWN } from "@/config/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Close dropdown on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesDropdownOpen(false);
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#211E1E]/95 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
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
            <nav className="flex items-center gap-12 text-base font-medium">
              {NAVIGATION_LINKS.map((link) => {
                // Special handling for Services link with dropdown
                if (link.label === "Services") {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center gap-1 transition-colors hover:text-brand-purple hover:font-semibold focus:outline-none focus-visible:underline",
                          isActive(link.href)
                            ? "text-brand-purple font-semibold"
                            : "text-white"
                        )}
                        onFocus={() => setServicesDropdownOpen(true)}
                        onBlur={(e) => {
                          // Only close if focus is leaving the dropdown container
                          if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                            setServicesDropdownOpen(false);
                          }
                        }}
                        aria-haspopup="true"
                        aria-expanded={servicesDropdownOpen}
                      >
                        {link.label}
                        <ChevronDown className="h-4 w-4" />
                      </Link>

                      {/* Services Dropdown */}
                      {servicesDropdownOpen && (
                        <div className="absolute left-0 top-full pt-2 z-50">
                          <div
                            role="menu"
                            className="w-[600px] bg-[#1d1c1c] rounded-lg shadow-xl border border-brand-dark-light overflow-hidden"
                          >
                            <div className="grid grid-cols-2 gap-1 p-4">
                              {SERVICES_DROPDOWN.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  role="menuitem"
                                  className="px-4 py-3 rounded-md text-sm text-gray-300 hover:text-brand-purple transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                                  onBlur={(e) => {
                                    // Close dropdown if focus leaves the entire menu
                                    if (!e.currentTarget.parentElement?.parentElement?.parentElement?.contains(e.relatedTarget as Node)) {
                                      setServicesDropdownOpen(false);
                                    }
                                  }}
                                >
                                  {service.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                // Regular navigation links
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "transition-colors hover:text-brand-purple hover:font-semibold focus:outline-none focus-visible:underline",
                      isActive(link.href)
                        ? "text-brand-purple font-semibold"
                        : "text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Spacer for layout balance */}
          <div className="hidden md:block w-[180px]" />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav
            id="mobile-navigation"
            className="md:hidden py-4 space-y-4 border-t border-brand-dark-light animate-in slide-in-from-top-4 duration-200"
          >
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block py-3 text-lg font-semibold transition-colors hover:text-brand-purple",
                  isActive(link.href)
                    ? "text-brand-purple"
                    : "text-white"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
