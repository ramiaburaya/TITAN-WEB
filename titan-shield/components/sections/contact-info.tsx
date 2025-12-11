"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export function ContactInfo() {
  const contactCards = [
    {
      icon: MapPin,
      title: "Location",
      details: ["4th Floor, Hamayel Center, Office No.", "3, Al-Bireh, Palestine"],
    },
    {
      icon: Phone,
      title: "Phone Address",
      details: ["+970 (562) 420000", "+970 (562) 420011"],
    },
    {
      icon: Mail,
      title: "Email & Website",
      details: ["Info@titanshield.ps", "www.titanshield.ps"],
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {contactCards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div
            key={index}
            className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#8B5CF6]/10 rounded-lg">
                <Icon className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {card.title}
                </h3>
                {card.details.map((detail, idx) => (
                  <p
                    key={idx}
                    className="text-gray-400 leading-relaxed"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
