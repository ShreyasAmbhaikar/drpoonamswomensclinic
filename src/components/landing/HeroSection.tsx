"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Counter } from "@/components/ui/Counter";

export const HeroSection = () => {
  return (
    <section className="pt-[150px] pb-[100px] lg:pt-[200px] lg:pb-[140px] gradient-bg-metal relative overflow-hidden">
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[40px] lg:gap-0">
          
          {/* Left Content (53% Width) */}
          <div className="w-full lg:w-[53%] relative z-10 lg:pr-[60px]">
            <AnimatedHeading 
              as="h1" 
              text="Trusted Obstetrician & Gynecologist in Keshav Nagar"
              className="mb-[30px]"
            />
            
            <p className="text-[16px] text-text mb-[40px] max-w-[500px] leading-[1.6em] animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Led by Senior Consultant Dr. Poonam (MBBS, DGO, PGDMCH), we provide compassionate, state-of-the-art women's healthcare services, specializing in normal delivery, pregnancy care, infertility/IUI, PCOD, and laparoscopic procedures.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 border-t border-divider pt-[40px] mb-[40px] animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div>
                <h3 className="text-[32px] md:text-[36px] font-bold text-primary leading-[1.2em]">
                  <Counter end={15} suffix="+" />
                </h3>
                <p className="text-[14px] text-text">Years of experience</p>
              </div>
              <div>
                <h3 className="text-[32px] md:text-[36px] font-bold text-primary leading-[1.2em]">
                  <Counter end={5} suffix=".0" />
                </h3>
                <p className="text-[14px] text-text">Google rating</p>
              </div>
              <div>
                <h3 className="text-[32px] md:text-[36px] font-bold text-primary leading-[1.2em]">
                  <Counter end={42} suffix="+" />
                </h3>
                <p className="text-[14px] text-text">Google reviews</p>
              </div>
            </div>

            {/* Buttons Container */}
            <div className="flex flex-wrap items-center gap-[30px] animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <Link 
                href="/contact-us" 
                className="inline-flex items-center gap-2 bg-accent text-white font-bold text-[15px] px-[28px] py-[15px] rounded-[10px] hover:bg-primary transition-all duration-300 group"
              >
                Book a Consultation
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Image (47% Width) */}
          <div className="w-full lg:w-[47%] relative lg:pl-[50px] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              
              {/* Image Container */}
              <div className="relative rounded-[30px] overflow-hidden aspect-[1/1.12] w-full animate-[serviceratingmoveobject_3s_ease-in-out_infinite_alternate]">
                <Image 
                  src="/images/doctor-poonam-hero.webp" 
                  alt="Dr. Poonam consulting in her office at Dr. Poonam's Women's Clinic" 
                  fill 
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating Ratings Badge (Floats Up & Down) */}
              <div className="absolute bottom-[40px] -left-[20px] md:bottom-[60px] md:-left-[30px] bg-white rounded-[20px] p-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] z-20 max-w-[280px] animate-float">
                <div className="flex flex-col gap-2">
                  {/* 5 Glowing Yellow Stars */}
                  <div className="flex gap-[4px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg 
                        key={i} 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 576 512" 
                        className="w-[16px] h-[16px]"
                        style={{
                          fill: "#FFC107",
                          filter: "drop-shadow(0 0 4px rgba(255, 193, 7, 0.95))"
                        }}
                      >
                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                      </svg>
                    ))}
                  </div>
                  <h4 className="text-[18px] font-bold text-primary leading-tight">5-Star Rated Clinic</h4>
                  <p className="text-[14px] text-text m-0 leading-normal">Compassionate clinical care and advanced diagnostics for women</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

