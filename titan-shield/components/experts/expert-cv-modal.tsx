"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { ExpertCVContent } from "./expert-cv-content";
import { Expert } from "@/types";
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

interface ExpertCVModalProps {
  experts: Expert[];
  selectedIndex: number;
  onClose: () => void;
}

export function ExpertCVModal({ experts, selectedIndex, onClose }: ExpertCVModalProps) {
  const [currentIndex, setCurrentIndex] = useState(selectedIndex);

  // Update current index when selectedIndex prop changes
  useEffect(() => {
    setCurrentIndex(selectedIndex);
  }, [selectedIndex]);

  // Circular navigation handlers
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % experts.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + experts.length) % experts.length);
  };

  // Keyboard navigation (arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
        case "ArrowLeft":
          e.preventDefault();
          handlePrevious();
          break;
        case "ArrowDown":
        case "ArrowRight":
          e.preventDefault();
          handleNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const currentExpert = experts[currentIndex];

  return (
    <Modal isOpen={true} onClose={onClose}>
      {/* Desktop Navigation - Enhanced Right Sidebar (Vertical) */}
      <div className="hidden md:flex fixed right-6 lg:right-8 top-1/2 -translate-y-1/2 z-[60] flex-col gap-4">
        <button
          onClick={handlePrevious}
          className="group p-4 bg-linear-to-br from-[#8B5CF6] to-[#7C3AED] hover:from-[#a855f7] hover:to-[#8B5CF6] text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg shadow-[#8B5CF6]/30 hover:shadow-[#8B5CF6]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white border border-[#8B5CF6]/30"
          aria-label="Previous expert"
        >
          <ChevronUp className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Enhanced Index Indicator */}
        <div className="relative">
          <div className="bg-linear-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl px-4 py-3 text-center font-bold border border-white/20 shadow-lg">
            <div className="text-2xl text-white font-black leading-none mb-1">
              {currentIndex + 1}
            </div>
            <div className="text-[10px] text-gray-400 uppercase tracking-wider">
              of {experts.length}
            </div>
          </div>
          {/* Purple glow effect */}
          <div className="absolute inset-0 bg-linear-to-br from-[#8B5CF6]/20 to-[#7C3AED]/20 rounded-2xl blur-xl -z-10"></div>
        </div>

        <button
          onClick={handleNext}
          className="group p-4 bg-linear-to-br from-[#8B5CF6] to-[#7C3AED] hover:from-[#a855f7] hover:to-[#8B5CF6] text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg shadow-[#8B5CF6]/30 hover:shadow-[#8B5CF6]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white border border-[#8B5CF6]/30"
          aria-label="Next expert"
        >
          <ChevronDown className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Mobile Navigation - Enhanced Bottom Bar (Horizontal) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] p-4 bg-linear-to-t from-[#1A1A1C] to-[#18181A] border-t border-white/10 backdrop-blur-lg flex justify-between items-center gap-4 shadow-2xl">
        <button
          onClick={handlePrevious}
          className="group flex items-center gap-2 px-5 py-3 bg-linear-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#a855f7] hover:to-[#8B5CF6] text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-[#8B5CF6]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white border border-[#8B5CF6]/30"
          aria-label="Previous expert"
        >
          <ChevronLeft className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span className="text-sm font-bold">Prev</span>
        </button>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/10">
          <span className="text-sm text-white font-bold">
            {currentIndex + 1}
          </span>
          <span className="text-xs text-gray-400 mx-1">/</span>
          <span className="text-xs text-gray-400">
            {experts.length}
          </span>
        </div>

        <button
          onClick={handleNext}
          className="group flex items-center gap-2 px-5 py-3 bg-linear-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#a855f7] hover:to-[#8B5CF6] text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-[#8B5CF6]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white border border-[#8B5CF6]/30"
          aria-label="Next expert"
        >
          <span className="text-sm font-bold">Next</span>
          <ChevronRight className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* CV Content with padding for mobile navigation */}
      <div className="pb-24 md:pb-0">
        <ExpertCVContent expert={currentExpert} />
      </div>
    </Modal>
  );
}
