'use client';

import React from "react";
import Accordion from "@/components/ui/Accordion";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";

export const FaqMapSection = () => {
  const faqItems = [
    {
      question: "What is the first step in the IVF process?",
      answer: "The first step is a comprehensive fertility assessment for both partners. This includes blood tests, ultrasounds, and semen analysis to identify the cause of infertility and customize a treatment plan."
    },
    {
      question: "How long does a single IVF cycle typically take?",
      answer: "An IVF cycle typically takes about 4 to 6 weeks. This includes ovarian stimulation, egg retrieval, fertilization in the lab, embryo development, and finally, the embryo transfer."
    },
    {
      question: "What is the difference between ICSI and standard IVF?",
      answer: "In standard IVF, eggs and sperm are mixed together in a dish to fertilize naturally. In ICSI (Intracytoplasmic Sperm Injection), a single selected sperm is injected directly into a mature egg, which is ideal for male factor infertility."
    },
    {
      question: "Is IVF treatment painful, and what can I expect?",
      answer: "While most procedures involved in IVF are not painful, some patients experience mild cramping during ovarian stimulation and minor discomfort after egg retrieval. We prioritize patient comfort and provide gentle sedation during retrieval."
    },
    {
      question: "How long can frozen embryos or eggs be stored?",
      answer: "Embryos and eggs can be frozen and stored indefinitely using vitrification (ultra-rapid freezing). Studies show that the duration of storage does not impact success rates or the health of future pregnancies."
    }
  ];

  return (
    <section className="py-[80px] lg:py-[120px] bg-background">
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-6 flex flex-col justify-center animate-fade-in-up">
            {/* Subtitle */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e87c7c]"></span>
              <span className="text-[13px] font-bold tracking-[0.15em] text-accent uppercase">
                COMMON QUESTIONS
              </span>
            </div>

            {/* Title */}
            <h2 className="text-[34px] md:text-[46px] font-bold text-primary leading-[1.15em] mb-8">
              Frequently asked questions
            </h2>

            {/* Accordion */}
            <Accordion items={faqItems} />
          </div>

          {/* Right Column: Google Maps */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div 
              className="w-full h-[400px] lg:h-full rounded-[30px] overflow-hidden border border-divider/10 shadow-lg relative min-h-[400px] lg:min-h-[500px] animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <iframe 
                src="https://maps.google.com/maps?q=London%20Eye,%20London,%20United%20Kingdom&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                title="London Eye, London, United Kingdom" 
                aria-label="London Eye, London, United Kingdom"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
