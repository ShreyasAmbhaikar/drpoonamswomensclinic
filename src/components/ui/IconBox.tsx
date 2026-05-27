import React from "react";
import { cn } from "@/lib/utils";

interface IconBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  iconBgColor?: string;
  variant?: "default" | "accent" | "dark" | "bordered";
}

export const IconBox = React.forwardRef<HTMLDivElement, IconBoxProps>(
  ({ title, description, icon, iconBgColor = "bg-accent/10", variant = "bordered", className, ...props }, ref) => {
    const variants = {
      default: "bg-white border-transparent",
      accent: "bg-accent text-white",
      dark: "bg-primary text-white",
      bordered: "bg-white border border-divider hover:border-transparent transition-all duration-400 ease-in-out hover:shadow-lg",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-[20px] p-[30px] md:p-[20px] h-full animate-fade-in-up",
          variants[variant],
          className
        )}
        {...props}
      >
        <div className="flex flex-col gap-4">
          {icon && (
            <div className={cn("w-[60px] h-[60px] rounded-full flex items-center justify-center text-accent shrink-0", iconBgColor)}>
              {icon}
            </div>
          )}
          <div>
            <h3 className={cn("text-[20px] font-semibold mb-2", (variant === "accent" || variant === "dark") ? "text-white" : "text-primary")}>
              {title}
            </h3>
            {description && (
              <p className={cn("text-[16px]", (variant === "accent" || variant === "dark") ? "text-white/80" : "text-text")}>
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
);

IconBox.displayName = "IconBox";
