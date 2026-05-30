import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Heart, ShieldCheck, CheckCircle } from 'lucide-react';

export const metadata = {
  title: "MTP, D & E Services (Confidential Abortion) in Keshav Nagar Pune",
  description: "Safe, legal, and highly confidential Medical Termination of Pregnancy (MTP) and Dilation & Evacuation (D&E) services by Dr. Poonam. Serving patients in Keshav Nagar, Mundhwa, and Kharadi.",
  alternates: {
    canonical: '/mtp-d-e-services-in-keshav-nagar/',
  }
};

export default function MtpDePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'MTP, D & E Services' },
  ];

  const processTimeline = [
    {
      step: '01',
      title: 'Confidential Pre-Evaluation',
      desc: 'Confirming pregnancy duration using pelvic ultrasound scan, reviewing medical history, and verifying compliance with the MTP Act of India.'
    },
    {
      step: '02',
      title: 'Method Selection',
      desc: 'Choosing between medical termination pills (up to 7 weeks gestation) or a minor surgical procedure (D&E or suction evacuation).'
    },
    {
      step: '03',
      title: 'Safe Procedure Execution',
      desc: 'Performing the procedure under strict sterile settings with options for local block or light sedation to ensure absolute pain control.'
    },
    {
      step: '04',
      title: 'Post-Procedure Recovery',
      desc: 'Observing the patient, offering post-care hygiene counseling, providing contraceptive guidance, and scheduling a 2-week checkup.'
    }
  ];

  const safetyGuidelines = [
    {
      title: 'Prescription Safety',
      desc: 'Never take abortion pills (MTP kits) over-the-counter without a gynecologist\'s prescription, as they can cause life-threatening hemorrhages or incomplete abortions.'
    },
    {
      title: 'Rule Out Ectopic Pregnancy',
      desc: 'A pre-procedure ultrasound scan is mandatory to ensure the pregnancy is in the uterus and not in the fallopian tubes (ectopic pregnancy).'
    },
    {
      title: 'Post-Care Alert signs',
      desc: 'Monitoring for fever, severe lower abdominal cramping, foul-smelling discharge, or heavy bleeding (soaking more than two sanitary pads per hour).'
    }
  ];

  const faqs = [
    {
      question: 'What is the legal limit for pregnancy termination (MTP) in India?',
      answer: 'According to the Medical Termination of Pregnancy (MTP) Act of India, pregnancy can be legally terminated up to 20 weeks under specified criteria (and up to 24 weeks for specific vulnerable categories), under the advice of registered gynecologists at government-approved facilities.'
    },
    {
      question: 'What is the difference between Medical Abortion and Surgical Abortion (D&E)?',
      answer: 'Medical abortion utilizes prescribed medications (mifepristone and misoprostol) to induce uterine contractions, suitable for early pregnancies (up to 7 weeks). Surgical abortion (Dilation and Evacuation or vacuum aspiration) is a quick clinical procedure to remove uterine tissue, suitable for pregnancies up to 12 weeks or in cases of incomplete miscarriage.'
    },
    {
      question: 'Why is taking over-the-counter abortion pills highly dangerous?',
      answer: 'Over-the-counter pills carry high risks of severe uncontrolled bleeding, incomplete expulsion of pregnancy tissues (leading to severe pelvic infection), or failure to identify an ectopic pregnancy, which can rupture and cause life-threatening internal bleeding.'
    },
    {
      question: 'What recovery precautions should be taken after an MTP or D&E?',
      answer: 'Avoid insertive vaginal products (tampons, cups) and sexual intercourse for 2 weeks to prevent infection. Rest for a few days, take prescribed antibiotics, and complete the follow-up ultrasound scan to confirm the uterus is entirely clear.'
    },
    {
      question: 'Is surgical abortion (D&E) safe, and how long does it take?',
      answer: 'Yes, Dilation and Evacuation (D&E) is an extremely safe, routine minor surgical procedure when performed by a registered gynaecologist. The active clinical procedure takes approximately 10 to 15 minutes, and patients are usually discharged on the same day after a brief recovery observation.'
    },
    {
      question: 'How do I find a legal and private abortion doctor near me in Keshav Nagar, Pune?',
      answer: 'If you are looking for a legal, safe, and private abortion clinic near me or MTP doctor near me around the area of Keshav Nagar, Mundhwa, or Kharadi, Dr Poonam’s Women’s Clinic is a certified center. We prioritize complete patient privacy, legal consent, and compassionate medical care.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="MTP, D & E Services" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/mtp-d-e-services-in-keshav-nagar/" />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[40px] lg:gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/mtp-de.webp" 
                      alt="Prescribed Gynecology Care Pills and Patient File for Confidential MTP Services" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Medical Termination of Pregnancy (MTP) and Dilation & Evacuation (D&E) are safe, clinically approved medical procedures used to terminate an unplanned pregnancy or clear retained tissues after an incomplete miscarriage. Undergoing these procedures under registered medical supervision ensures the preservation of maternal health and future fertility.
                    </p>
                    <p>
                      At Dr Poonam's Women's Clinic in Keshav Nagar, Pune, we offer strictly confidential, compassionate, and legally compliant abortion services in accordance with the MTP Act of India. Dr. Poonam provides thorough pre-procedure counseling, sterile procedures, and attentive post-operative support. If you reside in nearby Mundhwa or Kharadi and are seeking a private, legal gynaecology clinic around the area, our center provides safe and trusted medical termination care.
                    </p>
                  </div>
                </div>

                {/* Procedure Steps */}
                <div>
                  <AnimatedHeading 
                    text="Our Safe & Legal MTP / D&E Protocol" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[30px] leading-tight" 
                  />
                  <div className="flex flex-col md:flex-row gap-[40px] lg:gap-[60px] items-start">
                    {/* Left Column: Intro text */}
                    <div className="w-full md:w-[40%] flex flex-col gap-4">
                      <p className="text-text leading-relaxed text-[15px]">
                        Medical Termination of Pregnancy (MTP) and D&E services are carried out with absolute clinical safety and legal confidentiality. If you live around the area of Mundhwa or Kharadi, our certified protocols involve:
                      </p>
                      <div className="bg-[#FAF6F3] p-6 rounded-[20px] border border-divider/10 mt-2">
                        <h4 className="font-bold text-primary mb-2 text-[16px]">Safety Standard</h4>
                        <p className="text-text text-[14px] leading-relaxed">
                          All diagnostic ultrasound checks, pill administrations, or minor surgical evacuations are conducted by registered medical experts in sterile environments.
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

                {/* Safety Tips */}
                <div>
                  <AnimatedHeading 
                    text="Patient Safety & Self-Care Warnings" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[30px] leading-tight" 
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {safetyGuidelines.map((tip, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-[20px] border border-divider/10 shadow-sm flex flex-col">
                        <div className="w-10 h-10 bg-accent/15 rounded-full flex items-center justify-center text-accent mb-4 shrink-0">
                          <ShieldCheck className="w-5 h-5" />
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
                      Why Choose Dr. Poonam's Clinic for MTP?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>100% Confidentiality:</strong> Complete protection of patient privacy and medical records in a safe clinical space.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Approved Facility Standards:</strong> Medical protocols and approvals matching the guidelines of the Ministry of Health, India.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>attentive Post-Care:</strong> Immediate availability for post-operative concerns, pain control, and contraceptive counseling.</span>
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
