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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-[30px] mb-[60px] md:mb-[80px]">
          <div className="max-w-[600px]">
            <SectionTitle subtitle="OUR PROCESS">
              <AnimatedHeading text="Every step designed with your family first" />
            </SectionTitle>
          </div>
          <div className="shrink-0 animate-fade-in-up">
            <Button href="/contact-us" variant="secondary" icon>
              Contact Us
            </Button>
          </div>
        </div>

        {/* Creative Vertical Timeline */}
        <div className="flex flex-col md:flex-row gap-[40px] lg:gap-[60px] items-start">
          
          {/* Left Column: Intro text */}
          <div className="w-full md:w-[40%] flex flex-col gap-6 sticky top-24">
            <p className="text-text leading-relaxed text-[15px] md:text-[16px]">
              Starting your healthcare journey with Ferlix IVF is simple, transparent, and fully guided by experts. We make sure every step is clear and supportive – so you can focus on what matters most.
            </p>
            <div className="bg-[#FAF6F3] p-6 lg:p-8 rounded-[20px] border border-divider/10 shadow-sm transition-transform hover:translate-y-[-2px]">
              <h4 className="font-bold text-primary mb-3 text-[18px]">Patient Guidance</h4>
              <p className="text-text text-[14px] md:text-[15px] leading-relaxed">
                From your initial consultation to achieving your fertility goals, every phase of your journey is carefully managed to maximize safety, comfort, and peace of mind.
              </p>
            </div>
          </div>

          {/* Right Column: Vertical Timeline */}
          <div className="w-full md:w-[60%] relative flex flex-col pl-2 md:pl-4">
            {/* Connecting vertical line */}
            <div className="absolute left-[21px] md:left-[29px] top-5 bottom-12 w-[2px] bg-[#5A4A66]/20"></div>

            {TIMELINE_STEPS.map((step, idx) => (
              <div 
                key={idx} 
                className="flex gap-6 lg:gap-8 relative animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Step Icon */}
                <div className="relative z-10 flex items-center justify-center w-[26px] h-[26px] rounded-full bg-[#FAF6F3] border border-[#5A4A66] shrink-0 mt-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
                </div>

                {/* Content */}
                <div className={`flex-1 ${idx < TIMELINE_STEPS.length - 1 ? 'pb-10 lg:pb-12' : 'pb-0'}`}>
                  <div className="inline-block bg-[#5A4A66]/10 text-accent font-bold text-[12px] px-3 py-1 rounded-[100px] mb-3 uppercase tracking-wide">
                    Stage {step.number}
                  </div>
                  <h3 className="text-[20px] md:text-[22px] font-bold text-primary mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-text text-[15px] md:text-[16px] leading-relaxed">
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
