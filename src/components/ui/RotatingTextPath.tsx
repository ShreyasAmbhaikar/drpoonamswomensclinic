import React from "react";
import { cn } from "@/lib/utils";

interface RotatingTextPathProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  radius?: number;
  fontSize?: number;
  letterSpacing?: string;
}

export const RotatingTextPath = React.forwardRef<HTMLDivElement, RotatingTextPathProps>(
  ({ text, radius = 68, fontSize = 14, letterSpacing = "0.12em", className, ...props }, ref) => {
    const padding = 20; // safe padding to prevent text clipping
    const size = radius * 2 + padding * 2;
    const center = radius + padding;
    const pathId = React.useId();
    
    // Mathematically centered circular path
    const pathD = `M ${center}, ${padding} a ${radius},${radius} 0 1,1 0,${radius * 2} a ${radius},${radius} 0 1,1 0,-${radius * 2}`;

    return (
      <div 
        ref={ref} 
        className={cn("relative inline-flex items-center justify-center rounded-full bg-primary text-white shadow-xl", className)}
        style={{ width: size, height: size }}
        {...props}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width={size} 
          height={size} 
          viewBox={`0 0 ${size} ${size}`}
          className="animate-rotate-metal"
        >
          <path d={pathD} id={pathId} fill="none" />
          <text fill="currentColor" fontSize={fontSize} fontWeight="700" style={{ letterSpacing }}>
            <textPath 
              href={`#${pathId}`} 
              startOffset="0%"
              textLength={Math.round(2 * Math.PI * radius)}
              lengthAdjust="spacing"
            >
              {text}
            </textPath>
          </text>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>
    );
  }
);

RotatingTextPath.displayName = "RotatingTextPath";
