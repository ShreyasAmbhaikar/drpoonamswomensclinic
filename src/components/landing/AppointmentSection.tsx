"use client";

import React from "react";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Button } from "@/components/ui/Button";

export const AppointmentSection = () => {
  return (
    <section className="bg-background pt-[100px]">
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="bg-white rounded-[30px] p-[40px] lg:p-[60px] shadow-sm flex flex-col lg:flex-row gap-[40px] items-center relative overflow-hidden">
          
          {/* Left: Contact Form */}
          <div className="w-full lg:w-1/2 relative z-10">
            <SectionTitle subtitle="BOOK APPOINTMENT">
              <AnimatedHeading text="Start your journey to parenthood today" />
            </SectionTitle>

            <form className="mt-[40px] grid grid-cols-1 md:grid-cols-2 gap-[20px]" onSubmit={(e) => e.preventDefault()}>
              <div className="md:col-span-2">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full h-[60px] rounded-[10px] bg-secondary px-[20px] text-[16px] text-text border border-transparent focus:border-accent outline-none transition-colors" 
                />
              </div>
              <div className="md:col-span-2 lg:col-span-1">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full h-[60px] rounded-[10px] bg-secondary px-[20px] text-[16px] text-text border border-transparent focus:border-accent outline-none transition-colors" 
                />
              </div>
              <div className="md:col-span-2 lg:col-span-1">
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full h-[60px] rounded-[10px] bg-secondary px-[20px] text-[16px] text-text border border-transparent focus:border-accent outline-none transition-colors" 
                />
              </div>
              <div className="md:col-span-2">
                <select className="w-full h-[60px] rounded-[10px] bg-secondary px-[20px] text-[16px] text-text border border-transparent focus:border-accent outline-none transition-colors appearance-none cursor-pointer">
                  <option value="">Select Service</option>
                  <option value="ivf">In Vitro Fertilization</option>
                  <option value="iui">Intrauterine Insemination</option>
                  <option value="testing">Fertility Testing</option>
                  <option value="freezing">Egg & Sperm Freezing</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full rounded-[10px] bg-secondary p-[20px] text-[16px] text-text border border-transparent focus:border-accent outline-none transition-colors"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <Button type="submit" icon className="w-full">
                  Make An Appointment
                </Button>
              </div>
            </form>
          </div>

          {/* Right: Background Element (or image) */}
          <div className="w-full lg:w-1/2 rounded-[20px] overflow-hidden relative aspect-[1/1] lg:aspect-[1/1.2] hidden lg:block">
            <div className="absolute inset-0 bg-primary/5 rounded-[20px]"></div>
            <Image 
              src="/images/process-img-2.webp" 
              alt="Book appointment" 
              fill 
              className="object-cover rounded-[20px]" 
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};
