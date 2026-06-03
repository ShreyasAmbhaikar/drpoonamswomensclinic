import React from 'react';

interface ProcessStep {
  title: string;
  description: string;
}

interface CircularProcessProps {
  steps: ProcessStep[];
  title?: string;
  centerText?: string;
}

export default function CircularProcess({ steps, title, centerText }: CircularProcessProps) {
  // A simplistic layout for up to 4-5 items in a circular/grid pattern 
  // tailored for responsive behavior without absolute positioning complex math.
  return (
    <div className="w-full">
      {title && (
        <h3 className="text-[24px] md:text-[28px] font-bold text-primary mb-[40px] text-center leading-tight">
          {title}
        </h3>
      )}
      <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-10 items-center">
        {/* For mobile, it's a simple list. For desktop, it flex-wraps around a center point visually */}
        
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white p-6 rounded-[24px] border border-divider/10 shadow-sm w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-26px)] flex flex-col items-center text-center relative z-10 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-secondary text-primary font-bold text-[18px] flex items-center justify-center mb-4 border-4 border-white shadow-sm">
              {idx + 1}
            </div>
            <h4 className="font-bold text-primary text-[18px] mb-2">{step.title}</h4>
            <p className="text-text text-[14px] leading-relaxed">{step.description}</p>
          </div>
        ))}
        
      </div>
    </div>
  );
}
