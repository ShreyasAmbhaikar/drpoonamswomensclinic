import React from "react";
import { cn } from "@/lib/utils";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";

interface TimelineItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface VerticalTimelineProps {
  items: TimelineItem[];
  title?: string;
  introText?: string;
  guidanceTitle?: string;
  guidanceText?: string;
}

const stageColors = [
  { dot: 'bg-[#E8475F]', ring: 'border-[#E8475F]', ripple: 'bg-[#E8475F]', badge: 'bg-[#FDE8EC] text-[#C0354A]' },
  { dot: 'bg-[#F5A623]', ring: 'border-[#F5A623]', ripple: 'bg-[#F5A623]', badge: 'bg-[#FFF3E0] text-[#D48C1A]' },
  { dot: 'bg-[#4CAF50]', ring: 'border-[#4CAF50]', ripple: 'bg-[#4CAF50]', badge: 'bg-[#E8F5E9] text-[#388E3C]' },
  { dot: 'bg-[#7C4DFF]', ring: 'border-[#7C4DFF]', ripple: 'bg-[#7C4DFF]', badge: 'bg-[#EDE7F6] text-[#5C35CC]' },
];

export default function VerticalTimeline({ 
  items, 
  title,
  introText = "Every treatment and procedure at our clinic is performed with the highest standards of safety, compassion, and expertise. Dr. Poonam ensures each step of your journey is carefully monitored and optimized for the best possible outcomes.",
  guidanceTitle = "Expert Guidance",
  guidanceText = "From your initial consultation through recovery, our dedicated team is here to support you with personalized care, ensuring your comfort and peace of mind at every stage."
}: VerticalTimelineProps) {
  return (
    <div className="w-full py-8">
      {title && (
        <AnimatedHeading 
          text={title}
          className="text-[28px] md:text-[34px] font-bold text-primary mb-[30px] leading-tight" 
        />
      )}
      
      <div className="flex flex-col md:flex-row gap-[40px] lg:gap-[60px] items-start">
        
        {/* Left Column: Intro text and Guidance Box */}
        <div className="w-full md:w-[40%] flex flex-col gap-4">
          <p className="text-text leading-relaxed text-[15px]">
            {introText}
          </p>
          <div className="bg-[#FAF6F3] p-6 rounded-[20px] border border-divider/10 mt-2">
            <h4 className="font-bold text-primary mb-2 text-[16px]">{guidanceTitle}</h4>
            <p className="text-text text-[14px] leading-relaxed">
              {guidanceText}
            </p>
          </div>
        </div>

        {/* Right Column: Vertical Timeline */}
        <div className="w-full md:w-[60%] relative flex flex-col pl-2">
          {/* Connecting vertical line – gradient */}
          <div className="absolute left-[21px] top-5 bottom-12 w-[2px] bg-gradient-to-b from-[#E8475F] via-[#F5A623] to-[#7C4DFF] opacity-40"></div>

          {items.map((item, idx) => {
            const color = stageColors[idx % stageColors.length];
            return (
            <div 
              key={idx} 
              className="flex gap-6 relative animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Step Icon (Colorful circle with ripple) */}
              <div className="relative z-10 flex items-center justify-center w-[26px] h-[26px] shrink-0 mt-1">
                {/* Ripple ring */}
                <span className={`absolute inset-0 rounded-full ${color.ripple} animate-ripple`} style={{ animationDelay: `${idx * 0.5}s` }}></span>
                {/* Outer ring */}
                <span className={`absolute inset-0 rounded-full bg-[#FAF6F3] border-2 ${color.ring}`}></span>
                {/* Inner dot */}
                <span className={`relative w-2.5 h-2.5 rounded-full ${color.dot}`}></span>
              </div>

              {/* Content */}
              <div className={`flex-1 ${idx < items.length - 1 ? 'pb-10' : 'pb-0'}`}>
                <div className={`inline-block ${color.badge} font-bold text-[12px] px-3 py-1 rounded-[100px] mb-2 uppercase tracking-wide`}>
                  Stage {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-[18px] font-bold text-primary mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-text text-[14px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
