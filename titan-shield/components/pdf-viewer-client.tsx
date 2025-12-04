"use client";

import dynamic from "next/dynamic";

// Dynamically import PDFViewer with no SSR to avoid DOMMatrix errors
const PDFViewer = dynamic(
  () => import("@/components/pdf-viewer").then((mod) => ({ default: mod.PDFViewer })),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
        <p className="text-gray-400">Loading PDF Viewer...</p>
      </div>
    ),
  }
);

interface PDFViewerClientProps {
  pdfUrl: string;
  title: string;
}

export function PDFViewerClient({ pdfUrl, title }: PDFViewerClientProps) {
  return <PDFViewer pdfUrl={pdfUrl} title={title} />;
}
