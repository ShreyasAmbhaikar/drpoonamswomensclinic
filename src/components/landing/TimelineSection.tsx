import React from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Button } from "@/components/ui/Button";

const TIMELINE_STEPS = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "Your journey begins with a comprehensive consultation where we discuss your medical history, concerns, and goals."
  },
  {
    number: "02",
    title: "Personalized Treatment Plan",
    description: "Based on your diagnostic results, our specialists will craft a customized treatment plan tailored specifically to your needs."
  },
  {
    number: "03",
    title: "Treatment Begins",
    description: "Whether it’s IVF, IUI, or another path, your treatment begins with our expert team guiding you through each step safely."
  },
  {
    number: "04",
    title: "Monitoring & Support",
    description: "We carefully monitor your progress with frequent ultrasounds and blood tests, ensuring everything is on track for success."
  },
  {
    number: "05",
    title: "Achieving Success",
    description: "Our ultimate goal is to help you achieve a healthy pregnancy, providing ongoing care and support until you graduate to your OB-GYN."
  }
];

export const TimelineSection = () => {
  return (
    <section className="py-[100px] bg-background">
      <div className="container mx-auto max-w-[1300px] px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-[30px] mb-[80px]">
          <div className="max-w-[600px]">
            <SectionTitle subtitle="OUR PROCESS">
              <AnimatedHeading text="Every step designed with your family first" />
            </SectionTitle>
          </div>
          <div className="shrink-0 mb-[30px] md:mb-[60px] animate-fade-in-up">
            <Button href="/contact-us" variant="secondary" icon>
              Contact Us
            </Button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical dashed line for desktop */}
          <div className="hidden lg:block absolute left-[50px] top-[40px] bottom-[40px] w-[2px] border-l-2 border-dashed border-divider"></div>

          <div className="flex flex-col gap-[40px] lg:gap-[60px]">
            {TIMELINE_STEPS.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col lg:flex-row items-start gap-[20px] lg:gap-[40px] relative z-10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Number circle */}
                <div className="w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] rounded-full bg-accent text-white flex items-center justify-center text-[24px] lg:text-[32px] font-bold shrink-0 shadow-lg">
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="bg-white rounded-[20px] p-[30px] md:p-[40px] border border-divider hover:border-accent transition-colors duration-400 flex-1 shadow-sm">
                  <h3 className="text-[20px] md:text-[24px] font-bold text-primary mb-[15px]">
                    {step.title}
                  </h3>
                  <p className="text-[16px] text-text leading-[1.6em] m-0">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
