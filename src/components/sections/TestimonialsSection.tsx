"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const TESTIMONIALS = [
  {
    name: "Floyd Miles",
    role: "Product Designer",
    image: "/images/author-2.webp",
    text: "The doctors, staff, and counselors were so supportive throughout. Everything was explained in detail, and we felt genuinely.",
    rating: 5
  },
  {
    name: "Floyd Miles",
    role: "Product Designer",
    image: "/images/author-1.webp",
    text: "The doctors, staff, and counselors were so supportive throughout. Everything was explained in detail, and we felt genuinely.",
    rating: 5
  },
  {
    name: "Floyd Miles",
    role: "Product Designer",
    image: "/images/author-4.webp",
    text: "The doctors, staff, and counselors were so supportive throughout. Everything was explained in detail, and we felt genuinely.",
    rating: 5
  },
  {
    name: "Floyd Miles",
    role: "Product Designer",
    image: "/images/author-3.webp",
    text: "The doctors, staff, and counselors were so supportive throughout. Everything was explained in detail, and we felt genuinely.",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-[100px] bg-primary bg-[url('/images/testimonials-bg-metal.png')] bg-no-repeat bg-center bg-cover relative">
      <div className="container mx-auto max-w-[1300px] px-4">
        
        {/* Header Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-[50px] lg:mb-[60px] animate-fade-in-up">
          {/* Left Column: Subtitle & Heading */}
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e87c7c]"></span>
              <span className="text-[13px] md:text-[14px] font-bold tracking-[0.15em] text-white uppercase">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="text-[32px] md:text-[46px] font-bold text-white leading-[1.2] tracking-tight -mt-1 max-w-[600px]">
              Real experiences shared by real IVF patients
            </h2>
          </div>

          {/* Right Column: Button */}
          <div>
            <Link 
              href="/testimonials" 
              className="inline-flex items-center gap-2 bg-accent-secondary text-primary font-bold text-[15px] px-[28px] py-[14px] rounded-[10px] hover:bg-[#F8E6D8] transition-all duration-300 group"
            >
              View All Member
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

        {/* Swiper Slider */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
            className="w-full"
          >
            {TESTIMONIALS.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div 
                  className="border rounded-[20px] p-[40px] h-full flex flex-col justify-between"
                  style={{ 
                    backgroundColor: "#2d303f",
                    borderColor: "rgba(255, 255, 255, 0.1)"
                  }}
                >
                  
                  <div>
                    {/* 5 Solid Glowing Yellow Stars */}
                    <div className="flex gap-[6px] mb-[25px]">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <svg 
                          key={i} 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 576 512" 
                          className="w-[18px] h-[18px]"
                          style={{
                            fill: "#FFC107",
                            filter: "drop-shadow(0 0 5px rgba(255, 193, 7, 0.9))"
                          }}
                        >
                          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote Text */}
                    <p className="text-[19px] font-normal leading-[1.6em] text-white mb-[30px]">
                      “{item.text}”
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-[15px] pt-[20px] border-t border-white/10 mt-[20px]">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden relative shrink-0">
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        className="object-cover"
                        sizes="50px"
                      />
                    </div>
                    <div>
                      <h4 className="text-[18px] font-bold text-white leading-tight mb-0.5">{item.name}</h4>
                      <p className="text-[14px] text-white/60 m-0 leading-normal">{item.role}</p>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Navigation Arrows */}
        <div className="flex justify-center items-center gap-[15px] mt-[40px] animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <button className="testimonial-prev flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white/10 text-white hover:bg-accent-secondary hover:text-primary transition-all duration-300 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <button className="testimonial-next flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white/10 text-white hover:bg-accent-secondary hover:text-primary transition-all duration-300 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

