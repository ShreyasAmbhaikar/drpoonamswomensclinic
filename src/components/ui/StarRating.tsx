import React from "react";
import { cn } from "@/lib/utils";

interface StarRatingProps extends React.HTMLAttributes<HTMLDivElement> {
  rating?: number; // max 5
  maxRating?: number;
  starSize?: number;
}

export const StarRating = React.forwardRef<HTMLDivElement, StarRatingProps>(
  ({ rating = 5, maxRating = 5, starSize = 16, className, ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={cn("flex items-center gap-[2px]", className)}
        {...props}
      >
        {Array.from({ length: maxRating }).map((_, i) => (
          <svg 
            key={i}
            xmlns="http://www.w3.org/2000/svg" 
            width={starSize} 
            height={starSize} 
            viewBox="0 0 24 24" 
            fill={i < rating ? "#FFC107" : "transparent"} 
            stroke={i < rating ? "#FFC107" : "#CBD5E1"} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
    );
  }
);

StarRating.displayName = "StarRating";
