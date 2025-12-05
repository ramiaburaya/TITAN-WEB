"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  title: string;
  content: string | string[];
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className={`bg-[#1A1A1A] rounded-lg border overflow-hidden transition-all duration-300 ${
            openIndex === index
              ? "border-[#7C3AED] shadow-lg shadow-[#7C3AED]/20"
              : "border-[#2A2A2A] hover:border-[#3A3A3A]"
          }`}
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-[#222222] transition-all duration-300 group"
          >
            <span className={`text-lg font-semibold transition-colors duration-300 ${
              openIndex === index ? "text-[#7C3AED]" : "text-white group-hover:text-gray-200"
            }`}>
              {item.title}
            </span>
            <ChevronDown
              className={`h-5 w-5 text-[#7C3AED] transition-all duration-300 ${
                openIndex === index ? "rotate-180 scale-110" : "group-hover:scale-110"
              }`}
            />
          </button>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openIndex === index
                ? "max-h-[2000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-6 pt-4 border-t border-[#2A2A2A] animate-in fade-in slide-in-from-top-2 duration-500">
              {Array.isArray(item.content) ? (
                <ul className="space-y-3">
                  {item.content.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3 group">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7C3AED] group-hover:scale-150 transition-transform" />
                      <span className="text-gray-300 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-gray-300 space-y-4">
                  {item.content.split('\n\n').map((paragraph, idx) => {
                    // Check if paragraph is a bullet point (starts with text followed by colon or period)
                    if (paragraph.trim().startsWith('•') || paragraph.includes('\n•')) {
                      return (
                        <ul key={idx} className="space-y-3 mt-3">
                          {paragraph.split('\n').filter(line => line.trim()).map((line, lineIdx) => (
                            <li key={lineIdx} className="flex items-center gap-3 group">
                              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7C3AED] group-hover:scale-150 transition-transform" />
                              <span className="text-gray-300 leading-relaxed">{line.replace(/^•\s*/, '')}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return <p key={idx} className="leading-relaxed">{paragraph}</p>;
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
