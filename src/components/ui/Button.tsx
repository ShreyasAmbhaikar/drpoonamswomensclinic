import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
  size?: "default" | "sm" | "lg";
  href?: string;
  icon?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", href, icon, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-400 ease-in-out rounded-[10px] text-center max-w-full";
    
    const variants = {
      primary: "bg-primary text-white hover:bg-accent",
      secondary: "bg-white text-primary hover:bg-primary hover:text-white border border-divider",
      accent: "bg-accent text-white hover:bg-primary",
    };
    
    const sizes = {
      default: "text-[16px] leading-[1.2em] py-[16px] px-[30px]",
      sm: "text-[14px] leading-[1.2em] py-[13px] px-[20px]",
      lg: "text-[18px] leading-[1.2em] py-[20px] px-[40px]",
    };

    const classes = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    const content = (
      <>
        <span>{children}</span>
        {icon && (
          <span className="ml-2 shrink-0 bg-white/20 w-[30px] h-[30px] rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
