'use client';

import React from "react";
import Accordion from "@/components/ui/Accordion";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";

export const FaqMapSection = () => {
  const faqItems = [
    {
      question: "Who is the best gynecologist in Keshav Nagar & Mundhwa for pregnancy care?",
      answer: "Dr. Poonam, director of Dr. Poonam's Women's Clinic, is widely trusted for prenatal care. As a Senior Consultant with over 15 years of clinical experience, she specializes in high-safety maternity monitoring, normal deliveries, and high-risk pregnancy care."
    },
    {
      question: "What treatments are offered at Dr. Poonam's Women's Clinic?",
      answer: "We provide comprehensive women's healthcare, including normal delivery, Caesarean section (LSCS), PCOS/PCOD management, infertility diagnostics & IUI guidance, cervical cancer screening & HPV vaccination, and minimally invasive laparoscopic procedures."
    },
    {
      question: "How is PCOS/PCOD diagnosed and treated at your clinic?",
      answer: "We use a patient-centered clinical approach. After proper diagnostic checks (ultrasound & hormone panels), we manage PCOS/PCOD holistically using evidence-based medical treatments combined with personalized lifestyle and nutritional modifications."
    },
    {
      question: "Is it possible to have a normal delivery after a previous C-section?",
      answer: "Vaginal Birth After Caesarean (VBAC) is indeed possible for many women. This depends on factors like the type of previous uterine scar and baby's positioning, which we evaluate closely under strict safety guidelines."
    },
    {
      question: "Do you offer preventative screening like Pap smears and HPV vaccines?",
      answer: "Yes, preventative care is a priority. We offer HPV vaccinations for cervical cancer prevention, along with regular Pap smear diagnostics and general gynecological screenings to ensure long-term reproductive wellness."
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
