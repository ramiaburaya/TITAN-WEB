import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export function Input({ className, error, ...props }: InputProps) {
  return (
    <div className="w-full">
      <input
        className={cn(
          "flex h-11 w-full rounded-md border bg-brand-dark-light px-4 py-2 text-base",
          "border-brand-gray text-white placeholder:text-brand-gray-light",
          "focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "transition-colors",
          error && "border-red-500 focus:ring-red-500",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
}
