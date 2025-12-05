# Adding New Services to TITAN Shield

This guide explains how to add new services to the TITAN Shield website with dynamic, flexible page layouts.

## Table of Contents
1. [Overview](#overview)
2. [Service Configuration Structure](#service-configuration-structure)
3. [Available Templates](#available-templates)
4. [Step-by-Step Guide](#step-by-step-guide)
5. [Examples](#examples)
6. [Best Practices](#best-practices)

---

## Overview

The TITAN Shield service system uses two main configuration files:
- **`config/services.ts`** - Basic service information (title, description, features, images)
- **`config/service-templates.ts`** - Template type and extended content (sections, accordions, carousels)

Services use one of three templates:
1. **OffSec Template** - Simple layout with features list
2. **Endpoint Template** - Supports dynamic sections (carousel, grid, highlighted)
3. **Accordion Template** - Expandable sections with optional additional content

---

## Service Configuration Structure

### 1. Basic Service Information (`config/services.ts`)

```typescript
{
  id: "service-id",
  slug: "service-slug", // URL: /services/service-slug
  title: "Full Service Title",
  shortTitle: "Short Display Title",
  icon: LucideIconComponent, // Import from lucide-react
  image: "/assets/service-card-image.png", // For service cards
  heroImage: "/assets/hero-background.jpg", // Hero section background
  ctaImage: "/assets/cta-card-image.jpg", // CTA card image
  description: "Service description for hero and card sections",
  features: [
    "Feature 1 description",
    "Feature 2 description",
    // ... more features
  ],
  benefits: [
    "Benefit 1",
    "Benefit 2",
    // ... more benefits (currently not displayed in templates)
  ],
  overview: {
    title: "Overview Section Title",
    description: "Overview content.\n\nUse \\n\\n for paragraph breaks.\n\nThird paragraph."
  },
  color: "from-blue-600 to-cyan-600" // Tailwind gradient classes
}
```

### 2. Template Configuration (`config/service-templates.ts`)

```typescript
{
  template: "offsec" | "endpoint" | "accordion",
  ctaTitle: "CTA Card Title",
  ctaDescription: "CTA card description text",
  ctaButtonText: "Optional custom button text", // Default varies by template
  introContent: "Introduction paragraph", // For accordion template
  accordionItems: [ /* For accordion template */ ],
  additionalSections: [ /* Dynamic sections - see below */ ]
}
```

---

## Available Templates

### 1. OffSec Template (`template: "offsec"`)

**Best for:** Simple services with straightforward feature lists

**Layout:**
- Two-column layout
- Left: Title, description, features list with checkmarks, overview
- Right: Sticky CTA card with image and contact button

**Required Fields:**
- Basic service info (title, description, features)
- heroImage, ctaImage
- ctaTitle, ctaDescription

**Example:** Offensive Security & Penetration Testing

---

### 2. Endpoint Template (`template: "endpoint"`)

**Best for:** Services needing dynamic sections (comparisons, feature grids, highlighted content)

**Layout:**
- Same two-column base as OffSec
- Plus: Dynamic additional sections below

**Dynamic Section Types:**

#### A. Carousel Section
Auto-playing carousel showing 3 cards at a time with navigation arrows.

```typescript
{
  type: "carousel",
  badge: "Optional Badge Text", // Shows in purple pill
  sectionTitle: "Section Main Title",
  sectionSubtitle: "Optional subtitle text",
  cards: [
    {
      title: "Card Title",
      description: "Card description text",
      buttonText: "Button Text",
      buttonLink: "/page-url" // Optional, defaults to /contact
    },
    // ... minimum 3 cards recommended, no maximum
  ]
}
```

**Features:**
- Auto-plays every 5 seconds
- Navigation arrows appear on hover
- Indicator dots at bottom
- Pauses on hover
- Shows 3 cards at a time

#### B. Grid Section
Static grid of cards (no carousel).

```typescript
{
  type: "grid",
  badge: "Optional Badge",
  sectionTitle: "Grid Section Title",
  sectionSubtitle: "Optional subtitle",
  cards: [
    {
      title: "Card Title",
      description: "Description",
      buttonText: "Button Text",
      buttonLink: "/link"
    },
    // ... any number of cards
  ]
}
```

**Features:**
- 3 columns on desktop, 1 on mobile
- All cards visible at once
- No auto-play or navigation

#### C. Highlighted Section
Purple gradient highlighted box with CTA button.

```typescript
{
  type: "highlighted",
  sectionTitle: "Highlighted Box Title",
  content: "Text content for the highlighted section",
  buttonText: "Optional CTA Button",
  buttonLink: "/optional-link"
}
```

**Features:**
- Purple gradient background
- Full-width section
- Optional CTA button

**Example:** Endpoint & Mobile Security

---

### 3. Accordion Template (`template: "accordion"`)

**Best for:** Services with multiple detailed sections that users can expand/collapse

**Layout:**
- Two-column base layout
- Left: Title, description, intro content, accordion sections
- Right: Sticky CTA card
- Below: Optional additional sections (highlighted type only)

**Accordion Items:**

```typescript
accordionItems: [
  {
    title: "Accordion Section Title",
    content: "String content"
    // OR
    content: [
      "Bullet point 1",
      "Bullet point 2",
      "Bullet point 3"
    ]
  }
]
```

**Additional Sections:**
Only "highlighted" type is currently supported in accordion template.

**Example:** Consulting & Compliance, MSSP, Infrastructure Protection

---

## Step-by-Step Guide

### Step 1: Choose Your Template

- **Simple service with feature list?** → OffSec Template
- **Need comparisons/carousels?** → Endpoint Template
- **Multiple expandable sections?** → Accordion Template

### Step 2: Prepare Your Assets

Place images in `public/assets/`:
- Service card image (for services page grid)
- Hero background image (full-width header)
- CTA card image (sidebar call-to-action)

Recommended sizes:
- Hero: 1920x600px
- CTA: 800x400px
- Card: 600x400px

### Step 3: Add Service to `config/services.ts`

```typescript
import { YourIcon } from "lucide-react"; // Choose appropriate icon

// Add to SERVICES array:
{
  id: "your-service-id",
  slug: "your-service-slug",
  title: "Your Service Full Title",
  shortTitle: "Display Title",
  icon: YourIcon,
  image: "/assets/your-service-card.png",
  heroImage: "/assets/your-service-hero.jpg",
  ctaImage: "/assets/your-service-cta.jpg",
  description: "Service description for hero section",
  features: [
    "Feature 1",
    "Feature 2",
    // Add 4-8 features
  ],
  benefits: [
    "Benefit 1",
    "Benefit 2"
  ],
  overview: {
    title: "Overview Title",
    description: "First paragraph.\n\nSecond paragraph.\n\nThird paragraph."
  },
  color: "from-color-600 to-color-600" // Tailwind gradient
}
```

### Step 4: Add Template Configuration to `config/service-templates.ts`

#### For OffSec Template:
```typescript
"your-service-slug": {
  template: "offsec",
  ctaTitle: "Get Started",
  ctaDescription: "Contact us to learn more about this service."
}
```

#### For Endpoint Template:
```typescript
"your-service-slug": {
  template: "endpoint",
  ctaTitle: "Learn More",
  ctaDescription: "Discover how we can help.",
  additionalSections: [
    {
      type: "carousel",
      badge: "Comparison",
      sectionTitle: "Compare Solutions",
      sectionSubtitle: "See how we stack up",
      cards: [
        // Add 3+ cards
      ]
    },
    {
      type: "highlighted",
      sectionTitle: "Special Offer",
      content: "Limited time promotion details",
      buttonText: "Learn More",
      buttonLink: "/contact"
    }
  ]
}
```

#### For Accordion Template:
```typescript
"your-service-slug": {
  template: "accordion",
  ctaTitle: "Get Started",
  ctaDescription: "Contact our experts today.",
  introContent: "Introduction paragraph explaining the service category.",
  accordionItems: [
    {
      title: "Section 1 Title",
      content: [
        "Bullet point 1",
        "Bullet point 2"
      ]
    },
    {
      title: "Section 2 Title",
      content: "Paragraph content as string"
    }
  ],
  additionalSections: [
    {
      type: "highlighted",
      sectionTitle: "Related Service",
      content: "Check out our related offering",
      buttonText: "View Service",
      buttonLink: "/services/related-service"
    }
  ]
}
```

### Step 5: Test Your Service

1. Start the dev server: `npm run dev`
2. Navigate to: `http://localhost:3000/services/your-service-slug`
3. Check:
   - Hero section displays correctly
   - Features are listed properly
   - CTA card shows with correct image
   - Overview section formats paragraphs correctly
   - Additional sections render as expected
   - Responsive layout works on mobile

---

## Examples

### Example 1: Simple Service (OffSec Template)

```typescript
// config/services.ts
{
  id: "cloud-security",
  slug: "cloud-security",
  title: "Cloud Security Services",
  shortTitle: "Cloud Security",
  icon: Cloud,
  image: "/assets/cloud-card.png",
  heroImage: "/assets/cloud-hero.jpg",
  ctaImage: "/assets/cloud-cta.jpg",
  description: "Comprehensive cloud security solutions for AWS, Azure, and GCP.",
  features: [
    "Cloud security assessments",
    "Infrastructure as Code security",
    "Container and Kubernetes security",
    "Cloud compliance monitoring"
  ],
  benefits: ["Reduced risk", "Compliance ready"],
  overview: {
    title: "Overview",
    description: "Cloud security is essential in today's hybrid infrastructure."
  },
  color: "from-sky-600 to-blue-600"
}

// config/service-templates.ts
"cloud-security": {
  template: "offsec",
  ctaTitle: "Secure Your Cloud",
  ctaDescription: "Get expert cloud security consulting today."
}
```

### Example 2: Service with Carousel (Endpoint Template)

```typescript
// config/service-templates.ts
"email-security": {
  template: "endpoint",
  ctaTitle: "Protect Your Email",
  ctaDescription: "Advanced email security solutions.",
  additionalSections: [
    {
      type: "carousel",
      badge: "Solutions",
      sectionTitle: "Our Email Security Solutions",
      sectionSubtitle: "Choose the right protection level",
      cards: [
        {
          title: "Basic Protection",
          description: "Spam filtering and malware detection",
          buttonText: "Learn More",
          buttonLink: "/contact"
        },
        {
          title: "Advanced Protection",
          description: "AI-powered threat detection",
          buttonText: "Learn More",
          buttonLink: "/contact"
        },
        {
          title: "Enterprise Protection",
          description: "Complete email security suite",
          buttonText: "Learn More",
          buttonLink: "/contact"
        }
      ]
    }
  ]
}
```

### Example 3: Service with Accordions (Accordion Template)

```typescript
// config/service-templates.ts
"incident-response": {
  template: "accordion",
  ctaTitle: "24/7 Incident Response",
  ctaDescription: "Expert response when you need it most.",
  introContent: "Our incident response services help you quickly contain and remediate security incidents.",
  accordionItems: [
    {
      title: "Detection & Analysis",
      content: [
        "Real-time threat monitoring",
        "Incident classification",
        "Impact assessment"
      ]
    },
    {
      title: "Containment & Recovery",
      content: "Our team works quickly to isolate threats and restore normal operations."
    }
  ],
  additionalSections: [
    {
      type: "highlighted",
      sectionTitle: "Need Ongoing Monitoring?",
      content: "Consider our MSSP services for 24/7 security operations.",
      buttonText: "View MSSP Services",
      buttonLink: "/services/mssp"
    }
  ]
}
```

---

## Best Practices

### Content Guidelines

1. **Service Titles**
   - Keep short (3-5 words)
   - Use clear, descriptive names
   - Match industry terminology

2. **Descriptions**
   - 2-3 sentences maximum for hero section
   - Focus on value proposition
   - Avoid technical jargon in main description

3. **Features**
   - List 4-8 key features
   - Use action-oriented language
   - Keep each feature to one line
   - Be specific and concrete

4. **Overview**
   - Use 2-4 paragraphs
   - Separate with `\n\n` for proper formatting
   - Explain benefits, not just features
   - Address target audience's pain points

### Image Guidelines

1. **Quality**
   - Use high-resolution images (2x the display size)
   - Optimize for web (use WebP format when possible)
   - Compress to reduce file size

2. **Consistency**
   - Maintain similar style across all service images
   - Use consistent color grading
   - Follow brand guidelines

3. **Placement**
   - Store in `/public/assets/` directory
   - Use descriptive filenames
   - Organize by service if needed

### Template Selection

1. **Choose OffSec when:**
   - Service has straightforward offering
   - Simple feature list suffices
   - No need for comparisons or grids

2. **Choose Endpoint when:**
   - Need to showcase comparisons (carousel)
   - Want to display multiple options (grid)
   - Need prominent CTAs (highlighted sections)
   - More dynamic, varied content needed

3. **Choose Accordion when:**
   - Service has multiple detailed offerings
   - Content benefits from expand/collapse
   - Want to reduce initial page length
   - Multiple sub-services under one umbrella

### Dynamic Sections

1. **Carousel Sections**
   - Use for comparisons, case studies, or options
   - Minimum 3 cards, optimal 6-12 cards
   - Keep card content concise
   - Use consistent card heights

2. **Grid Sections**
   - Use when all options should be visible
   - Best for 3, 6, or 9 cards (multiples of 3)
   - Keep descriptions similar length

3. **Highlighted Sections**
   - Use sparingly (1-2 per page)
   - Cross-promote related services
   - Include clear CTA
   - Place strategically in page flow

### Technical Considerations

1. **Slugs**
   - Use kebab-case (lowercase with hyphens)
   - Keep URLs short and descriptive
   - Match slug in both config files

2. **Icons**
   - Choose from lucide-react icon library
   - Pick icons that visually represent the service
   - Keep consistent icon style

3. **Colors**
   - Use Tailwind color classes
   - Maintain brand consistency
   - Ensure sufficient contrast
   - Format: `"from-{color}-600 to-{color}-600"`

---

## Troubleshooting

### Service not appearing?
- Check that slug matches in both `services.ts` and `service-templates.ts`
- Ensure service is added to the SERVICES array
- Restart dev server after config changes

### Images not loading?
- Verify images are in `/public/assets/` directory
- Check file paths start with `/assets/` (not `public/assets/`)
- Confirm image file extensions match paths

### Carousel not working?
- Ensure minimum 3 cards are provided
- Check that `type: "carousel"` is set correctly
- Verify `cards` array is properly formatted

### Layout issues?
- Validate all required fields are provided
- Check for TypeScript errors in console
- Ensure template type matches configuration

---

## Advanced Customization

### Adding New Template Types

To create a new template:

1. Create template component in `/components/services/`
2. Add template type to `ServiceTemplate` union in `service-templates.ts`
3. Add case to switch statement in `/app/services/[slug]/page.tsx`
4. Update this documentation

### Adding New Section Types

To add a new dynamic section type:

1. Update `DynamicSection` interface in `service-templates.ts`
2. Add rendering logic to `DynamicSectionRenderer` in `endpoint-template.tsx`
3. Update accordion template if section should work there too
4. Document the new section type here

---

## Support

For questions or issues:
- Check Next.js documentation: https://nextjs.org/docs
- Review Tailwind CSS docs: https://tailwindcss.com/docs
- Check lucide-react icons: https://lucide.dev/icons

**Last Updated:** December 2025
