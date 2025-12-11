"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    countryCode: "+970",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const countryCodes = [
    { code: "+970", flag: "🇵🇸", country: "Palestine" },
    { code: "+1", flag: "🇺🇸", country: "USA" },
    { code: "+44", flag: "🇬🇧", country: "UK" },
    { code: "+971", flag: "🇦🇪", country: "UAE" },
    { code: "+966", flag: "🇸🇦", country: "Saudi Arabia" },
    { code: "+20", flag: "🇪🇬", country: "Egypt" },
    { code: "+962", flag: "🇯🇴", country: "Jordan" },
    { code: "+961", flag: "🇱🇧", country: "Lebanon" },
    { code: "+963", flag: "🇸🇾", country: "Syria" },
    { code: "+964", flag: "🇮🇶", country: "Iraq" },
    { code: "+965", flag: "🇰🇼", country: "Kuwait" },
    { code: "+968", flag: "🇴🇲", country: "Oman" },
    { code: "+974", flag: "🇶🇦", country: "Qatar" },
    { code: "+973", flag: "🇧🇭", country: "Bahrain" },
    { code: "+212", flag: "🇲🇦", country: "Morocco" },
    { code: "+213", flag: "🇩🇿", country: "Algeria" },
    { code: "+216", flag: "🇹🇳", country: "Tunisia" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "This field is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "This field is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Handle form submission here
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with gradient lines */}
      <div className="flex items-center gap-4">
        <div className="h-0.5 w-[100px] bg-linear-to-l from-[#7C3AED] to-transparent"></div>
        <h3 className="text-sm font-semibold text-[#ffffff] uppercase tracking-wider whitespace-nowrap">
          CONTACT US
        </h3>
        <div className="h-0.5 w-[100px] bg-linear-to-r from-[#7C3AED] to-transparent"></div>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-white">
        Send us a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 p-8 border-2 border-[#3A3A3A] rounded-lg bg-[#0F0F0F]">
        {/* 2x2 Grid for first 4 fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`w-full px-4 py-3 bg-[#1A1A1A] border ${
                errors.name ? "border-red-500" : "border-[#2A2A2A]"
              } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#7C3AED] transition-colors`}
              placeholder="Your Name"
            />
            {errors.name && (
              <p id="name-error" role="alert" className="text-red-500 text-sm">
                {errors.name}
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
              Phone Number
            </label>
            <div className="flex gap-2 w-full">
              <select
                name="countryCode"
                id="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                aria-label="Country code"
                className="w-[90px] px-2 py-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-white text-sm focus:outline-none focus:border-[#7C3AED] transition-colors shrink-0 cursor-pointer"
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.flag} {country.code}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 min-w-0 px-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#7C3AED] transition-colors"
                placeholder="562 420000"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`w-full px-4 py-3 bg-[#1A1A1A] border ${
                errors.email ? "border-red-500" : "border-[#2A2A2A]"
              } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#7C3AED] transition-colors`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p id="email-error" role="alert" className="text-red-500 text-sm">
                {errors.email}
              </p>
            )}
          </div>

          {/* Subject Field */}
          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#7C3AED] transition-colors"
              placeholder="How can we help?"
            />
          </div>
        </div>

        {/* Message Textarea - Full Width */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#7C3AED] transition-colors resize-none"
            placeholder="Tell us more about your inquiry..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full md:w-auto px-8 py-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold rounded-lg transition-colors duration-300"
        >
          Send The Message
        </button>
      </form>
    </div>
  );
}
