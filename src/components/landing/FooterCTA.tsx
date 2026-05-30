import React from "react";
import { RotatingTextPath } from "@/components/ui/RotatingTextPath";

export const FooterCTA = () => {
  return (
    <section className="bg-background pt-[100px] pb-[50px] relative z-10 -mb-[50px]">
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="bg-secondary rounded-[30px] p-[60px] md:p-[80px] lg:p-[100px] flex flex-col md:flex-row items-center justify-between gap-[40px]">
          <div className="max-w-[500px]">
            <h2 className="text-[36px] md:text-[48px] font-bold text-primary mb-4 leading-[1.1em]">
              Ready to schedule your visit?
            </h2>
            <p className="text-text text-[16px] leading-[1.6em]">
              BOOK AN APPOINTMENT WITH DR POONAM FOR PERSONALIZED & COMPASSIONATE WOMEN'S HEALTHCARE.
            </p>
          </div>
          
          <div className="shrink-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <RotatingTextPath text="Book a Consultation * Book a Consultation * " radius={120} />
          </div>
        </div>
      </div>
    </section>
  );
};
