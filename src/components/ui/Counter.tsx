"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CounterProps extends React.HTMLAttributes<HTMLDivElement> {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number; // in ms
}

export const Counter = React.forwardRef<HTMLDivElement, CounterProps>(
  ({ end, suffix = "", prefix = "", duration = 2000, className, ...props }, ref) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            let startTimestamp: number | null = null;
            
            const step = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              
              setCount(Math.floor(progress * end));
              
              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                setCount(end);
              }
            };
            
            window.requestAnimationFrame(step);
          }
        },
        { threshold: 0.5 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
    }, [end, duration]);

    return (
      <div 
        ref={(node) => {
          // Handle both refs
          // @ts-ignore
          elementRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn("inline-block font-bold", className)}
        {...props}
      >
        {prefix}{count}{suffix}
      </div>
    );
  }
);

Counter.displayName = "Counter";
