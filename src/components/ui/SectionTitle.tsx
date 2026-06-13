import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  subtitle: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export const SectionTitle = React.forwardRef<HTMLDivElement, SectionTitleProps>(
  ({ subtitle, alignment = "left", className, children, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn(
          "mb-[60px] md:mb-[30px]",
          alignment === "center" && "text-center",
          alignment === "right" && "text-right",
          className
        )}
        {...props}
      >
        <h3 className="text-[14px] font-semibold leading-[1.4em] tracking-[0.1em] text-accent uppercase mb-2">
          {subtitle}
        </h3>
        {children}
      </div>
    );
  }
);

SectionTitle.displayName = "SectionTitle";
