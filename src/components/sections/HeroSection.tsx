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
              text="Hope, care, science your IVF journey starts here"
              className="mb-[30px]"
            />
            
            <p className="text-[16px] text-text mb-[40px] max-w-[500px] leading-[1.6em] animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              At the heart of every family is a story of hope. With compassionate care cutting-edge science, we guide you every step of the parenthood.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 border-t border-divider pt-[40px] mb-[40px] animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div>
                <h3 className="text-[32px] md:text-[36px] font-bold text-primary leading-[1.2em]">
                  <Counter end={24} suffix=" X 7" />
                </h3>
                <p className="text-[14px] text-text">Patient support team</p>
              </div>
              <div>
                <h3 className="text-[32px] md:text-[36px] font-bold text-primary leading-[1.2em]">
                  <Counter end={85} suffix="%" />
                </h3>
                <p className="text-[14px] text-text">Success rate</p>
              </div>
              <div>
                <h3 className="text-[32px] md:text-[36px] font-bold text-primary leading-[1.2em]">
                  <Counter end={5} suffix="k+" />
                </h3>
                <p className="text-[14px] text-text">Successful pregnancies</p>
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
              <Link 
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                target="_blank"
                className="inline-flex items-center gap-3 text-primary font-bold hover:text-accent transition-colors duration-300 group"
              >
                Watch Video
                <span className="w-[50px] h-[50px] rounded-full border border-divider flex items-center justify-center bg-white text-accent hover:bg-accent hover:text-white transition-all duration-300 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Right Image (47% Width) */}
          <div className="w-full lg:w-[47%] relative lg:pl-[50px] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              
              {/* Image Container */}
              <div className="relative rounded-[30px] overflow-hidden aspect-[1/1.12] w-full animate-[serviceratingmoveobject_3s_ease-in-out_infinite_alternate]">
                <Image 
                  src="/images/hero-image.webp" 
                  alt="IVF Doctor consulting a patient" 
                  fill 
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating Ratings Badge */}
              <div className="absolute bottom-[40px] -left-[20px] md:bottom-[60px] md:-left-[30px] bg-white rounded-[20px] p-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] z-20 max-w-[280px]">
                <div className="flex flex-col gap-2">
                  {/* 5 Purple Stars */}
                  <div className="flex gap-[4px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg 
                        key={i} 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="14" 
                        height="14" 
                        viewBox="0 0 24 24" 
                        fill="#5A4A66" 
                        stroke="#5A4A66" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <h4 className="text-[18px] font-bold text-primary leading-tight">Best Service & 5 Star</h4>
                  <p className="text-[14px] text-text m-0 leading-normal">State-of-the-art lab with latest reproductive technology</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

