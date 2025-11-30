import { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export function Textarea({ className, error, ...props }: TextareaProps) {
  return (
    <div className="w-full">
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-md border bg-brand-dark-light px-4 py-3 text-base",
          "border-brand-gray text-white placeholder:text-brand-gray-light",
          "focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "transition-colors resize-y",
          error && "border-red-500 focus:ring-red-500",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
}
