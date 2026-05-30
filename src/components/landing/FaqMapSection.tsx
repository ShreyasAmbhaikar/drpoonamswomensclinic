'use client';

import React from "react";
import Accordion from "@/components/ui/Accordion";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";

export const FaqMapSection = () => {
  const faqItems = [
    {
      question: "What services are offered at Dr Poonam's Women's Clinic?",
      answer: "We provide comprehensive obstetric and gynecological care, including normal delivery, Caesarean section (LSCS), infertility evaluation, IUI/IVF support, PCOD/PCOS management, laparoscopic procedures, and cervical cancer screening & vaccination."
    },
    {
      question: "When should I consult a gynecologist during pregnancy?",
      answer: "We recommend scheduling your first prenatal visit as soon as you confirm your pregnancy. Early care is essential to establish health parameters, schedule ultrasound scans, and receive nutritional guidance."
    },
    {
      question: "What is PCOD and how is it managed?",
      answer: "PCOD (Polycystic Ovarian Disease) is a common hormonal imbalance. We treat it holistically using personalized diet and lifestyle advice, weight management, and medical therapies to regulate cycles and improve fertility."
    },
    {
      question: "What is a scarless hysterectomy (NDVH)?",
      answer: "Non-Descent Vaginal Hysterectomy (NDVH) is a minimally invasive surgery where the uterus is removed through the vaginal canal. Because there are no abdominal cuts, patients experience less pain, rapid healing, and no scars."
    },
    {
      question: "Do you offer cervical cancer vaccination?",
      answer: "Yes, we offer HPV vaccination (cervical cancer prevention vaccine) for girls and women, along with routine Pap smear screening to ensure early detection and comprehensive preventative wellness."
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
                src="https://maps.google.com/maps?q=Dr%20Poonam's%20Women's%20Clinic%20Keshav%20Nagar%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                title="Dr Poonam's Women's Clinic, Keshav Nagar, Pune" 
                aria-label="Dr Poonam's Women's Clinic, Keshav Nagar, Pune"
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
