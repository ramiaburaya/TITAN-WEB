/**
 * Shared TypeScript types and interfaces
 */

import { ReactNode } from "react";

// Common component props
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

// Service types
export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  features: string[];
  benefits: string[];
  icon?: ReactNode;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// Newsletter form types
export interface NewsletterFormData {
  email: string;
}

// Expert and CV-related types
export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface Experience {
  title: string;
  company?: string;
  period: string;
  description?: string;
  highlights?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  field?: string;
}

export interface Expert {
  // Basic information
  name: string;
  title: string;
  subtitle?: string;
  image: string;

  // Social links
  linkedin?: string;
  github?: string;
  facebook?: string;

  // CV information (all optional for backward compatibility)
  bio?: string;
  email?: string;
  phone?: string;
  skills?: string[];
  certifications?: Certification[];
  experience?: Experience[];
  education?: Education[];
  achievements?: string[];
}
