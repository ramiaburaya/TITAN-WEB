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
