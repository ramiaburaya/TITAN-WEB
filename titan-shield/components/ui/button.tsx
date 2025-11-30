// React 19: No need for forwardRef, ref is a prop now!
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark",
        "disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-brand-purple text-white hover:bg-brand-purple-dark shadow-lg shadow-brand-purple/20":
            variant === "primary",
          "bg-transparent text-brand-purple border-2 border-brand-purple hover:bg-brand-purple hover:text-white":
            variant === "secondary",
          "hover:bg-brand-dark-light text-gray-300 hover:text-white":
            variant === "ghost",
          "bg-red-600 text-white hover:bg-red-700": variant === "danger",
        },
        {
          "h-9 px-4 text-sm": size === "sm",
          "h-11 px-6 text-base": size === "md",
          "h-14 px-8 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
