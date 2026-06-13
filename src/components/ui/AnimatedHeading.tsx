"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export const AnimatedHeading = React.forwardRef<HTMLHeadingElement, AnimatedHeadingProps>(
  ({ text, as: Tag = "h2", className, ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={cn(
          "text-[36px] md:text-[48px] font-bold leading-[1.1em] text-primary",
          className
        )}
        {...props}
      >
        {text}
      </Tag>
    );
  }
);

AnimatedHeading.displayName = "AnimatedHeading";
