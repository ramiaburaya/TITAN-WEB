"use client";

import { useState, useEffect } from "react";
import { X, Download, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
  onClose?: () => void;
}

export function PDFViewer({ pdfUrl, title, onClose }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState(1.0);

  // Configure PDF.js worker on client side
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = '/pdf-worker/pdf.worker.min.mjs';
  }, []);

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.5));

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages));

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#1A1A1A] border-b border-[#2A2A2A]">
        <div className="flex items-center gap-4">
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 hover:bg-[#2A2A2A] rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          )}
          <h2 className="text-lg font-semibold text-white">{title}</h2>
        </div>

        <div className="flex items-center gap-4">
          {/* Page Navigation */}
          {numPages > 0 && (
            <div className="flex items-center gap-2 bg-[#0A0A0A] rounded-lg p-1">
              <button
                onClick={goToPrevPage}
                disabled={pageNumber <= 1}
                className="p-2 hover:bg-[#2A2A2A] rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <span className="text-sm text-gray-300 min-w-20 text-center">
                Page {pageNumber} of {numPages}
              </span>
              <button
                onClick={goToNextPage}
                disabled={pageNumber >= numPages}
                className="p-2 hover:bg-[#2A2A2A] rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next page"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>
          )}

          {/* Zoom Controls */}
          <div className="flex items-center gap-2 bg-[#0A0A0A] rounded-lg p-1">
            <button
              onClick={handleZoomOut}
              className="p-2 hover:bg-[#2A2A2A] rounded transition-colors"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-4 h-4 text-white" />
            </button>
            <span className="text-sm text-gray-300 min-w-[4rem] text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-2 hover:bg-[#2A2A2A] rounded transition-colors"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Download Button */}
          <a
            href={pdfUrl}
            download
            className="flex items-center gap-2 px-4 py-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download</span>
          </a>
        </div>
      </div>

      {/* PDF Content */}
      <div className="flex-1 overflow-auto bg-[#0A0A0A] p-4 sm:p-8">
        <div className="max-w-6xl mx-auto flex justify-center">
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex items-center justify-center p-8">
                <p className="text-gray-400">Loading PDF...</p>
              </div>
            }
            error={
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <p className="text-gray-400 mb-4">
                  Failed to load PDF document.
                </p>
                <a
                  href={pdfUrl}
                  download
                  className="px-6 py-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold rounded-lg transition-colors"
                >
                  Download PDF Instead
                </a>
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="shadow-2xl"
            />
          </Document>
        </div>
      </div>

      {/* Back to Services Link */}
      {!onClose && (
        <div className="px-6 py-4 bg-[#1A1A1A] border-t border-[#2A2A2A]">
          <Link
            href="/services/endpoint-mobile-security"
            className="inline-flex items-center gap-2 text-[#7C3AED] hover:text-[#6D28D9] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Endpoint & Mobile Security
          </Link>
        </div>
      )}
    </div>
  );
}
