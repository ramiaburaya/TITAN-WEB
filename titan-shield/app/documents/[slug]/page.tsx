import { PDFViewerClient } from "@/components/pdf-viewer-client";
import { notFound } from "next/navigation";

// PDF document mappings
const DOCUMENTS = {
  "threatdown-vs-crowdstrike": {
    title: "ThreatDown vs Crowdstrike Comparison",
    filename: "Battlecard-Crowdstrike-Internal-Partner-Nov-2024-1.pdf",
    description: "A comprehensive comparison between ThreatDown and Crowdstrike",
  },
  "threatdown-vs-sophos": {
    title: "ThreatDown vs Sophos Comparison",
    filename: "Battlecard-Sophos-Partner-Internal-Sep-2024.pdf",
    description: "Evaluating ThreatDown's capabilities against Sophos EDR solutions",
  },
  "threatdown-vs-bitdefender": {
    title: "ThreatDown vs Bitdefender Comparison",
    filename: "Battlecard-Bitdefender-Partner-and-Internal-Nov-2024.pdf",
    description: "How ThreatDown stacks up against Bitdefender's endpoint protection",
  },
  "threatdown-vs-kaspersky": {
    title: "ThreatDown vs Kaspersky Comparison",
    filename: "Battlecard-Kaspersky-Partner-and-internal-Nov-2024.pdf",
    description: "Why our EDR offering delivers better Protection than Others",
  },
  "threatdown-vs-microsoft": {
    title: "ThreatDown vs Microsoft Defender Comparison",
    filename: "Battlecard-Microsoft-Internal-Partner-Nov-2024.pdf",
    description: "Enterprise endpoint protection: ThreatDown vs Microsoft Defender",
  },
} as const;

export async function generateStaticParams() {
  return Object.keys(DOCUMENTS).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = DOCUMENTS[slug as keyof typeof DOCUMENTS];

  if (!doc) {
    return {
      title: "Document Not Found",
    };
  }

  return {
    title: `${doc.title} | TITAN Shield`,
    description: doc.description,
  };
}

export default async function DocumentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = DOCUMENTS[slug as keyof typeof DOCUMENTS];

  if (!doc) {
    notFound();
  }

  const pdfUrl = `/documents/${doc.filename}`;

  return <PDFViewerClient pdfUrl={pdfUrl} title={doc.title} />;
}
