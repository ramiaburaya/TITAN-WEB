"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription logic in Phase 3
    console.log("Newsletter subscription:", email);
    setIsSubmitted(true);
    setEmail("");

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-20 bg-brand-dark border-t border-brand-dark-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-purple/10 mb-6">
            <Mail className="h-8 w-8 text-brand-purple" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated on Cybersecurity Threats
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Get the latest security insights, threat intelligence, and best
            practices delivered to your inbox monthly.
          </p>

          {isSubmitted ? (
            <div className="flex items-center justify-center gap-2 text-green-400 font-semibold">
              <CheckCircle className="h-5 w-5" />
              <span>Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" size="lg" className="sm:w-auto">
                Subscribe
              </Button>
            </form>
          )}

          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
