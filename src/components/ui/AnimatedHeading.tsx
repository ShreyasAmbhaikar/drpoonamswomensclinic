"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface AnimatedHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export const AnimatedHeading = React.forwardRef<HTMLHeadingElement, AnimatedHeadingProps>(
  ({ text, as: Tag = "h2", className, ...props }, ref) => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
      if (!headingRef.current) return;
      
      const chars = headingRef.current.querySelectorAll(".char");
      
      gsap.fromTo(chars, 
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.02,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          }
        }
      );
    }, { scope: containerRef });

    // Split text into words, then words into chars
    const words = text.split(" ").map((word, wordIndex) => {
      return (
        <span key={wordIndex} className="inline-block relative mr-[0.25em] whitespace-nowrap">
          {word.split("").map((char, charIndex) => (
            <span 
              key={charIndex} 
              className="char inline-block relative opacity-0 translate-x-[50px]"
            >
              {char}
            </span>
          ))}
        </span>
      );
    });

    return (
      <div ref={containerRef}>
        <Tag
          ref={headingRef}
          className={cn(
            "text-[36px] md:text-[48px] font-bold leading-[1.1em] text-primary",
            className
          )}
          style={{ perspective: "400px" }}
          {...props}
        >
          {words}
        </Tag>
      </div>
    );
  }
);

AnimatedHeading.displayName = "AnimatedHeading";
