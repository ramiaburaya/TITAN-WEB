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
          className="bg-[#1A1A1A] rounded-lg border border-[#2A2A2A] overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-[#222222] transition-colors"
          >
            <span className="text-lg font-semibold text-white">
              {item.title}
            </span>
            <ChevronDown
              className={`h-5 w-5 text-[#7C3AED] transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          {openIndex === index && (
            <div className="p-4 pt-0 border-t border-[#2A2A2A]">
              {Array.isArray(item.content) ? (
                <ul className="space-y-2 text-gray-300">
                  {item.content.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#7C3AED] mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-300">{item.content}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
