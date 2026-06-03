"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const TESTIMONIALS = [
  {
    name: "Mayuri Mehta",
    role: "Verified Patient",
    image: "/images/review-1-mayuri.webp",
    text: "Had a very good experience with Dr. Poonam. She was professional, patient, and explained everything clearly. She listened carefully to my concerns and made me feel comfortable throughout the consultation. Her guidance was very helpful and reassuring. Highly recommend her to anyone looking for a knowledgeable and caring gynac.",
    rating: 5,
    isLocalGuide: false
  },
  {
    name: "Kartika Gurjar",
    role: "Verified Patient",
    image: "/images/review-5-kartika.webp",
    text: "I'm taking my treatment from Dr. Poonam and honestly she feels like home very comfortable very kind and a good listener also now a days doctors are not available on call or whatsapp but she is available all the time inbetween you have any query you can reach out to her without any hesitation..\nAnd talking about treatment i personally found very helpful and effective.",
    rating: 5,
    isLocalGuide: false
  },
  {
    name: "Govinda Budhvant",
    role: "Verified Patient",
    image: "/images/review-3-govinda.webp",
    text: "I had a wonderful experience with Dr. Poonam. As a new patient, I was a bit nervous, but she made us feel completely at ease. She took the time to listen to all our concerns without rushing and explained everything in a way that was easy to understand. Highly recommend her for anyone looking for a knowledgeable and compassionate doctor.",
    rating: 5,
    isLocalGuide: true
  },
  {
    name: "Amani Borra",
    role: "Verified Patient",
    image: "/images/review-6-amani.webp",
    text: "Here is the honest review I am sharing\nDr. Poonam Mam I have never seen a doctor like you.\nMam is very very much friendly and her first priority is the treatment of patient I have consulted her 2 times she is very responsible with her duities and she treated me very well and I suggest Dr.Poonam is the best for any Gynec related problems\nAlso Mam thank you soo much for the best treatment.",
    rating: 5,
    isLocalGuide: false
  },
  {
    name: "Shrutika Bhute",
    role: "Verified Patient",
    image: "/images/review-2-shrutika.webp",
    text: "I had a wonderful experience with Dr. Poonam. From the start, she made me feel completely at ease. She took the time to listen to all my concerns and explained everything in a way that was easy to understand. Highly recommend for anyone looking for a comfortable and supportive environment!",
    rating: 5,
    isLocalGuide: false
  },
  {
    name: "Prapti Nirmal",
    role: "Verified Patient",
    image: "/images/review-7-prapti.webp",
    text: "Best gynacologist in keshav nagar. She guided me well and very caring",
    rating: 5,
    isLocalGuide: true
  },
  {
    name: "Shivkanya Dongare",
    role: "Verified Patient",
    image: "/images/review-4-shivkanya.webp",
    text: "I had a very good experience with Dr. Poonam. She listens carefully to the patient's concerns and provide clear, thoughful guidance for diagnosis. Instead of jumping to conclusions, she follows step by step approach to treatment. She is also available on phone, which is quite rare and truly reassuring.",
    rating: 5,
    isLocalGuide: false
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
              <SwiperSlide key={index} className="!flex h-auto">
                <div 
                  className="border rounded-[20px] p-[40px] w-full flex flex-col justify-between"
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

                    {/* Quote Text Clamped to 6 lines */}
                    <p className="text-[19px] font-normal leading-[1.6em] text-white mb-[30px] line-clamp-6">
                      “{item.text}”
                    </p>
                  </div>

                  {/* Author Info with fixed height and top-alignment for perfect alignment of divider lines */}
                  <div className="flex items-start gap-[15px] pt-[20px] border-t border-white/10 mt-[20px] h-[95px]">
                    <div className="w-[50px] h-[50px] rounded-full relative shrink-0">
                      <div className="w-full h-full rounded-full overflow-hidden relative">
                        <Image 
                          src={item.image} 
                          alt={item.name} 
                          fill 
                          className="object-cover"
                          sizes="50px"
                        />
                      </div>
                      {item.isLocalGuide && (
                        <div className="absolute bottom-0 right-0 w-[18px] h-[18px] rounded-full flex items-center justify-center border border-white"
                          style={{
                            background: "radial-gradient(circle, #FFA000 0%, #FF6F00 100%)",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                          }}
                        >
                          <svg className="w-[10px] h-[10px] fill-white" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-[18px] font-bold text-white leading-tight mb-0.5">{item.name}</h4>
                      {item.isLocalGuide ? (
                        <div className="flex flex-col items-start gap-1">
                          <p className="text-[14px] text-white/60 m-0 leading-normal">{item.role}</p>
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FFB300] bg-[#FFB300]/10 px-2 py-0.5 rounded-full border border-[#FFB300]/30 uppercase tracking-wider">
                            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                            Local Guide
                          </span>
                        </div>
                      ) : (
                        <p className="text-[14px] text-white/60 m-0 leading-normal">{item.role}</p>
                      )}
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

