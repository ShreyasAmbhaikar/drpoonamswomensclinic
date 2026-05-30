import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Heart, CheckCircle, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: "Pre Conceptional Counselling in Keshav Nagar Pune | Dr Poonam's Clinic",
  description: "Plan your pregnancy safely with comprehensive pre-pregnancy checkups, genetic screenings, and custom medical advice by Dr. Poonam. Expert care for couples in Keshav Nagar, Mundhwa, and Kharadi.",
  alternates: {
    canonical: '/pre-conceptional-counselling-in-keshav-nagar/',
  }
};

export default function PreConceptionalPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Pre Conceptional Counselling' },
  ];

  const processTimeline = [
    {
      step: '01',
      title: 'Initial Health Assessment',
      desc: 'Conducting a thorough check of maternal medical history, BMI, blood pressure, lifestyle habits, and evaluating any history of chronic conditions or previous complicated pregnancies.'
    },
    {
      step: '02',
      title: 'Essential Diagnostic Screening',
      desc: 'Recommending routine pre-pregnancy tests including complete blood count, blood typing (Rh factor), thyroid levels (TSH), blood sugar (HbA1c), rubella antibodies, and thalassemia screen.'
    },
    {
      step: '03',
      title: 'Nutritional Optimizing & Supplementation',
      desc: 'Prescribing vital pre-pregnancy vitamins (folic acid) and advising on dietary transitions, while adjusting any ongoing medications to guarantee fetal safety.'
    },
    {
      step: '04',
      title: 'Ovulation & Fertile Window Tracking',
      desc: 'Educating couples on tracking ovulation cycles, understanding fertile windows, and modifying lifestyle habits to support healthy conception.'
    }
  ];

  const planningTips = [
    {
      title: 'Folic Acid Supplementation',
      desc: 'Starting a daily dose of 400 mcg of folic acid at least 1 to 3 months before active trying to substantially reduce fetal neural tube birth defects.'
    },
    {
      title: 'Immunization Check',
      desc: 'Verifying vaccine history and updating immunity against Rubella (German Measles), Varicella, and Hepatitis B before planning conception.'
    },
    {
      title: 'Chronic Condition Control',
      desc: 'Achieving safe control levels for chronic maternal concerns like diabetes, thyroid, or hypertension prior to stopping active contraception.'
    }
  ];

  const faqs = [
    {
      question: 'What is pre-conceptional counseling and why is it important?',
      answer: 'Pre-conceptional counseling is a medical consultation for couples planning a pregnancy. It evaluates physical health, family histories, and lifestyle habits to identify factors that could impact pregnancy. By addressing these beforehand, couples can optimize maternal health, reduce gestational complications, and secure a healthy start for the baby.'
    },
    {
      question: 'When should a couple schedule a pre-pregnancy checkup?',
      answer: 'It is highly recommended to schedule a pre-conceptional consultation with Dr. Poonam at least 3 to 6 months before you actively begin planning to conceive. This provides ample window for routine screens, nutritional adjustments, vaccine catch-ups, or stabilizing chronic health markers.'
    },
    {
      question: 'What clinical tests are typically done during a pre-pregnancy visit?',
      answer: 'Routine checks include complete blood count (CBC) to screen for anemia, blood typing and Rh factor, blood sugar levels, thyroid stimulating hormone (TSH), infectious disease screens (Hepatitis B, HIV, VDRL), Rubella IgG antibodies, and Thalassemia screening.'
    },
    {
      question: 'How do I locate a clinic for pre-pregnancy planning near me in Keshav Nagar or Hadapsar?',
      answer: 'If you are looking for a pre-pregnancy checkup near me or pre-conceptional counseling near me around the area of Keshav Nagar, Mundhwa, or Kharadi, Dr Poonam’s Women’s Clinic is a top-rated choice. Our clinic offers complete diagnostics and personalized counselor services to help couples prepare for pregnancy safely.'
    },
    {
      question: 'Why is it critical to start taking Folic Acid before getting pregnant?',
      answer: 'A baby\'s brain and spinal cord (neural tube) develop in the first few weeks of pregnancy, often before you realize you have conceived. Daily folic acid intake starting at least a month before conception reduces the risk of serious neural tube defects like spina bifida by up to 70%.'
    },
    {
      question: 'Can pre-conceptional counselling help if we have a family history of genetic disorders?',
      answer: 'Yes, pre-pregnancy counseling is highly beneficial for couples with family histories of genetic conditions like thalassemia, hemophilia, or cystic fibrosis. Dr. Poonam can assess the risks, recommend targeted genetic screenings, and coordinate with specialists to map out a safe plan for a healthy child.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Pre Conceptional Counselling" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/pre-conceptional-counselling-in-keshav-nagar/" />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[40px] lg:gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/pre-conceptional.webp" 
                      alt="Stethoscope and Folic Acid Supplement bottle on Doctor Consultation Desk" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Pre-conceptional counseling is a proactive, clinical wellness strategy for couples preparing to start a family. By thoroughly evaluating physical wellness, genetic histories, immunization status, and lifestyle habits before pregnancy begins, couples can significantly reduce pregnancy risks and support healthy fetal development from day one.
                    </p>
                    <p>
                      At Dr Poonam's Women's Clinic in Keshav Nagar, Pune, we provide supportive, expert pre-pregnancy planning. Dr. Poonam conducts comprehensive diagnostic screens, guides you through proper folic acid dosing, and advises on optimal health choices to make your parenthood journey safe and stress-free. Whether you are living in Mundhwa or Kharadi and looking for a reliable pre-pregnancy counselor around the area, our clinic provides personalized care tailored to your needs.
                    </p>
                  </div>
                </div>

                {/* Counselling Process */}
                <div>
                  <AnimatedHeading 
                    text="Our Pre-pregnancy Counseling Process" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[30px] leading-tight" 
                  />
                  <div className="flex flex-col md:flex-row gap-[40px] lg:gap-[60px] items-start">
                    {/* Left Column: Intro text */}
                    <div className="w-full md:w-[40%] flex flex-col gap-4">
                      <p className="text-text leading-relaxed text-[15px]">
                        Preparing for pregnancy involves a series of physical health checks and proactive counseling. If you reside around the area of Mundhwa or Kharadi, our structured counseling process helps couples identify and manage any potential risk factors early:
                      </p>
                      <div className="bg-[#FAF6F3] p-6 rounded-[20px] border border-divider/10 mt-2">
                        <h4 className="font-bold text-primary mb-2 text-[16px]">Counselling Path</h4>
                        <p className="text-text text-[14px] leading-relaxed">
                          From general medical reviews to specific nutrition planning and ovulation tracking, we align each step with your pregnancy goals.
                        </p>
                      </div>
                    </div>

                    {/* Right Column: Vertical Timeline */}
                    <div className="w-full md:w-[60%] relative flex flex-col pl-2">
                      {/* Connecting vertical line */}
                      <div className="absolute left-[21px] top-5 bottom-12 w-[2px] bg-[#5A4A66]/20"></div>

                      {processTimeline.map((step, idx) => (
                        <div key={idx} className="flex gap-6 relative">
                          {/* Step Icon */}
                          <div className="relative z-10 flex items-center justify-center w-[26px] h-[26px] rounded-full bg-[#FAF6F3] border border-[#5A4A66] shrink-0 mt-1">
                            <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
                          </div>

                          {/* Content */}
                          <div className={`flex-1 ${idx < processTimeline.length - 1 ? 'pb-10' : 'pb-0'}`}>
                            <div className="inline-block bg-[#5A4A66]/10 text-accent font-bold text-[12px] px-3 py-1 rounded-[100px] mb-2 uppercase tracking-wide">
                              Stage {step.step}
                            </div>
                            <h3 className="text-[18px] font-bold text-primary mb-2 leading-snug">
                              {step.title}
                            </h3>
                            <p className="text-text text-[14px] leading-relaxed">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Planning Guidelines */}
                <div>
                  <AnimatedHeading 
                    text="Pre-pregnancy Guidelines & Preparations" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[30px] leading-tight" 
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {planningTips.map((tip, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-[20px] border border-divider/10 shadow-sm flex flex-col">
                        <div className="w-10 h-10 bg-accent/15 rounded-full flex items-center justify-center text-accent mb-4 shrink-0">
                          <Heart className="w-5 h-5" />
                        </div>
                        <h3 className="text-[18px] font-bold text-primary mb-2">{tip.title}</h3>
                        <p className="text-text text-[14px] leading-relaxed">{tip.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-[#242736] text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center gap-[45px]">
                  <div className="w-full md:w-2/3 flex flex-col gap-6">
                    <h3 className="text-[26px] font-bold text-white leading-tight">
                      Why Choose Dr. Poonam for Pre-pregnancy Planning?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Detailed Medical Mapping:</strong> Expert clinical assessment of pre-existing parameters like PCOD, thyroid, or diabetes.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Hormonal & Nutritional Balance:</strong> Direct advice on pre-pregnancy supplements and vitamin schedules.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Comprehensive Care:</strong> Helping you track ovulation fertile cycles and managing genetic risk screenings.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/3 flex justify-center shrink-0">
                    <div className="bg-white/10 border border-white/15 p-6 rounded-[20px] text-center w-full max-w-[220px]">
                      <div className="text-[44px] font-bold text-accent mb-1">5.0</div>
                      <p className="text-[13px] font-bold uppercase tracking-wider text-white/90 mb-1">Google Rating</p>
                      <p className="text-[12px] text-white/70">Based on 42 Verified Reviews</p>
                    </div>
                  </div>
                </div>

                {/* FAQs */}
                <div>
                  <AnimatedHeading 
                    text="Frequently Asked Questions" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[30px] leading-tight" 
                  />
                  <Accordion items={faqs} />
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
