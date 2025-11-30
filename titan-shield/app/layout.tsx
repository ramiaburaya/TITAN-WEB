import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Titan Shield - Leading Cybersecurity in Palestine",
    template: "%s | Titan Shield",
  },
  description:
    "Professional cybersecurity services including penetration testing, managed security, and compliance consulting in Palestine.",
  keywords: [
    "cybersecurity",
    "palestine",
    "penetration testing",
    "MSSP",
    "red team",
    "security consulting",
  ],
  authors: [{ name: "Titan Shield" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://titanshield.ps",
    siteName: "Titan Shield",
    title: "Titan Shield - Leading Cybersecurity in Palestine",
    description:
      "Professional cybersecurity services including penetration testing, managed security, and compliance consulting.",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Titan Shield - Leading Cybersecurity in Palestine",
    description:
      "Professional cybersecurity services including penetration testing, managed security, and compliance consulting.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
