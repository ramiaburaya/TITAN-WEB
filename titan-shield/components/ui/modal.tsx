"use client";

import { ReactNode, useEffect, useRef } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Store the currently focused element
      previousActiveElement.current = document.activeElement as HTMLElement;

      // Prevent body scroll
      document.body.style.overflow = "hidden";

      // Focus the modal
      modalRef.current?.focus();
    } else {
      // Restore body scroll
      document.body.style.overflow = "";

      // Return focus to the previous element
      previousActiveElement.current?.focus();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      {/* Enhanced Backdrop with gradient */}
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-sm"
        aria-hidden="true"
      >
        {/* Subtle purple glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 via-transparent to-[#7C3AED]/5"></div>
      </div>

      {/* Modal Content - Enhanced */}
      <div
        ref={modalRef}
        className="relative bg-gradient-to-br from-[#1A1A1C] to-[#18181A] rounded-2xl shadow-2xl shadow-[#8B5CF6]/10 max-w-6xl w-full max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom-4 duration-300 border border-white/5"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Enhanced close button */}
        <div className="absolute top-5 right-5 z-10">
          <button
            onClick={onClose}
            className="group p-3 bg-white/5 hover:bg-[#8B5CF6] text-white rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] shadow-lg hover:shadow-[#8B5CF6]/50 border border-white/10 hover:border-[#8B5CF6]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Content with enhanced scrollbar */}
        <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
          {children}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 10px;
          margin: 8px 0;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #8B5CF6 0%, #7C3AED 100%);
          border-radius: 10px;
          border: 2px solid transparent;
          background-clip: padding-box;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #a855f7 0%, #8B5CF6 100%);
          border-radius: 10px;
          border: 2px solid transparent;
          background-clip: padding-box;
        }
      `}</style>
    </div>
  );
}
