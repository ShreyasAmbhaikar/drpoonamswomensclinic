"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Button } from "@/components/ui/Button";

export const FeaturesSection = () => {
  return (
    <section className="py-[100px] bg-background">
      <div className="container mx-auto max-w-[1300px] px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-[30px] mb-[60px]">
          <div className="max-w-[700px]">
            <SectionTitle subtitle="OUR FEATURES">
              <AnimatedHeading text="Advanced fertility care with human touch" />
            </SectionTitle>
          </div>
          <div className="shrink-0 mb-[30px] md:mb-[60px] animate-fade-in-up">
            <Button href="/about-us" variant="secondary" icon>
              Explore Features
            </Button>
          </div>
        </div>

        {/* Feature Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-[60px]">
          <div className="rounded-[20px] overflow-hidden relative aspect-[1/0.83] group">
            <Image 
              src="/images/feature-image-1.webp" 
              alt="Lab technician" 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-110" 
            />
          </div>
          <div className="rounded-[20px] overflow-hidden relative aspect-[1/0.83] mt-0 md:mt-[40px] group">
            <Image 
              src="/images/feature-image-2.webp" 
              alt="Consultation" 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-110" 
            />
          </div>
          <div className="rounded-[20px] overflow-hidden relative aspect-[1/0.83] mt-0 md:mt-[80px] group">
            <Image 
              src="/images/feature-image-3.webp" 
              alt="Baby feet" 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-110" 
            />
          </div>
        </div>

        {/* Feature Stats List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          
          <div className="border-t border-divider pt-[30px] animate-fade-in-up">
            <div className="flex gap-[20px]">
              <div className="w-[60px] h-[60px] rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31"></path><path d="M14 9.3V1.99"></path><path d="M8.5 2h7"></path><path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path><path d="M5.52 16h12.96"></path></svg>
              </div>
              <div>
                <h4 className="text-[20px] font-bold text-primary mb-2">10+ In-House Diagnostic Lab</h4>
                <p className="text-[16px] text-text m-0 leading-[1.6em]">
                  We know that every path to parenthood is unique, and so is our approach.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-divider pt-[30px] animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex gap-[20px]">
              <div className="w-[60px] h-[60px] rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <div>
                <h4 className="text-[20px] font-bold text-primary mb-2">75% Personalized Treatment Plans</h4>
                <p className="text-[16px] text-text m-0 leading-[1.6em]">
                  We know that every path to parenthood is unique, and so is our approach.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-divider pt-[30px] animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex gap-[20px]">
              <div className="w-[60px] h-[60px] rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div>
                <h4 className="text-[20px] font-bold text-primary mb-2">95% High IVF Success Rates</h4>
                <p className="text-[16px] text-text m-0 leading-[1.6em]">
                  We know that every path to parenthood is unique, and so is our approach.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
