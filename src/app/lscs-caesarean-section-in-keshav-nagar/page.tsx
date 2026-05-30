import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Heart, ShieldCheck, CheckCircle } from 'lucide-react';

export const metadata = {
  title: "LSCS Caesarean Section Specialist in Keshav Nagar Pune | Dr Poonam's Clinic",
  description: "Safe, sterile and professional Lower Segment Caesarean Section (LSCS) surgery by senior gynecologist Dr. Poonam. Expert care for patients in Keshav Nagar, Mundhwa, and Hadapsar.",
  alternates: {
    canonical: '/lscs-caesarean-section-in-keshav-nagar/',
  }
};

export default function LscsCaesareanPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'LSCS C-Section' },
  ];

  const procedureTimeline = [
    {
      step: '01',
      title: 'Pre-Surgical Preparation',
      desc: 'Administering regional anesthesia (spinal/epidural), sterile cleaning of the abdominal site, and stabilizing maternal vitals.'
    },
    {
      step: '02',
      title: 'Surgical Delivery',
      desc: 'Making a horizontal lower segment uterine incision, followed by the safe and gentle extraction of the newborn within minutes.'
    },
    {
      step: '03',
      title: 'Placental Extraction & Closure',
      desc: 'Careful removal of the placenta and multi-layer suturing using high-quality absorbable cosmetic threads to support optimal tissue healing.'
    },
    {
      step: '04',
      title: 'Vitals & Post-Op Recovery',
      desc: 'Monitoring the mother in the recovery room, establishing early breastfeeding support, and managing postoperative pain.'
    }
  ];

  const recoveryTips = [
    {
      title: 'Wound Care & Hygiene',
      desc: 'Keeping the incision site clean and dry, avoiding tight clothing, and monitoring for any signs of infection like fever or discharge.'
    },
    {
      title: 'Gradual Mobilization',
      desc: 'Gentle walking within 24 hours of surgery to improve blood circulation, prevent deep vein thrombosis, and reduce gas pain.'
    },
    {
      title: 'Dietary Adjustments',
      desc: 'High-protein, fiber-rich foods along with optimal liquids to promote tissue repair and prevent postpartum constipation.'
    }
  ];

  const faqs = [
    {
      question: 'What are the main clinical reasons for undergoing an LSCS (C-section)?',
      answer: 'An LSCS may be planned or done as an emergency due to fetal distress, abnormal baby positioning (breech), placenta previa (placenta covering the cervix), cephalopelvic disproportion (baby too large for birth canal), or active maternal health conditions.'
    },
    {
      question: 'How long is the typical hospital stay and recovery period after a C-section?',
      answer: 'The average hospital stay is 3 to 4 days. While initial recovery occurs within 2 to 3 weeks, complete internal tissue healing generally takes 6 to 8 weeks. Physical strains and heavy weight-lifting should be avoided during this timeframe.'
    },
    {
      question: 'When is it safe to start regular exercise after an LSCS?',
      answer: 'Light walking is recommended immediately. However, core exercises, swimming, heavy lifting, or strenuous workouts should only be started after 6 to 8 weeks, following a physical checkup and clearance from Dr. Poonam.'
    },
    {
      question: 'How do I care for my C-section scar to reduce its visibility?',
      answer: 'Keep the area clean and dry. Once the sutures dissolve or are removed and the wound is closed, you can apply silicone gel sheets or massage the scar gently under medical advice to minimize scar tissue buildup.'
    },
    {
      question: 'How do I choose the best C-section specialist near me in Keshav Nagar, Pune?',
      answer: 'If you are looking for a C-section doctor near me in Keshav Nagar, Mundhwa, or Hadapsar, Dr Poonam’s Women’s Clinic is a premier local clinic. Dr. Poonam has +10 years of obstetric experience and collaborates with multi-specialty hospitals to ensure safe C-section procedures.'
    },
    {
      question: 'Can I attempt a normal delivery after having an LSCS in a previous pregnancy?',
      answer: 'Yes, Vaginal Birth After Caesarean (VBAC) is highly possible. If the reason for your previous C-section does not recur, you have a transverse uterine scar, and your pregnancy progresses healthily, Dr. Poonam can guide you through a safe VBAC attempt.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="LSCS (Caesarean Section)" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/lscs-caesarean-section-in-keshav-nagar/" />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[40px] lg:gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/lscs-caesarean.webp" 
                      alt="LSCS Cardiotocography Fetal Heart Monitor Screening" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Lower Segment Caesarean Section (LSCS) is a life-saving surgical procedure used to deliver a baby through incisions made in the mother's abdomen and uterus. It is indicated when vaginal delivery poses health risks to either the mother or the child, ensuring a safe and controlled delivery environment.
                    </p>
                    <p>
                      At Dr Poonam's Women's Clinic in Keshav Nagar, Pune, we perform both planned and emergency C-section procedures in association with state-of-the-art operation theaters in Pune. Dr. Poonam brings over a decade of surgical expertise to ensure sterile conditions, minimal incision scars, and optimal postoperative healing. If you are residing in Mundhwa or Hadapsar and are searching for a safe C-section doctor around the area, our clinic provides comprehensive pre- and post-op care.
                    </p>
                  </div>
                </div>

                {/* Procedure Steps */}
                <div>
                  <AnimatedHeading 
                    text="Surgical Stages of LSCS C-Section" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[30px] leading-tight" 
                  />
                  <div className="flex flex-col md:flex-row gap-[40px] lg:gap-[60px] items-start">
                    {/* Left Column: Intro text */}
                    <div className="w-full md:w-[40%] flex flex-col gap-4">
                      <p className="text-text leading-relaxed text-[15px]">
                        Understanding the surgical stages of an LSCS (C-Section) helps expectant parents prepare for the delivery journey with confidence. Dr. Poonam ensures each stage is carried out under strict clinical standards to prioritize safety and comfort for both mother and newborn.
                      </p>
                      <div className="bg-[#FAF6F3] p-6 rounded-[20px] border border-divider/10 mt-2">
                        <h4 className="font-bold text-primary mb-2 text-[16px]">Quick Timeline Overview</h4>
                        <p className="text-text text-[14px] leading-relaxed">
                          The active surgical phase generally takes 30 to 45 minutes, with the baby safely delivered within the first 5 to 10 minutes of the procedure.
                        </p>
                      </div>
                    </div>

                    {/* Right Column: Vertical Timeline */}
                    <div className="w-full md:w-[60%] relative flex flex-col pl-2">
                      {/* Connecting vertical line */}
                      <div className="absolute left-[21px] top-5 bottom-12 w-[2px] bg-[#5A4A66]/20"></div>

                      {procedureTimeline.map((step, idx) => (
                        <div key={idx} className="flex gap-6 relative">
                          {/* Step Icon */}
                          <div className="relative z-10 flex items-center justify-center w-[26px] h-[26px] rounded-full bg-[#FAF6F3] border border-[#5A4A66] shrink-0 mt-1">
                            <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
                          </div>

                          {/* Content */}
                          <div className={`flex-1 ${idx < procedureTimeline.length - 1 ? 'pb-10' : 'pb-0'}`}>
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

                {/* Recovery Care */}
                <div>
                  <AnimatedHeading 
                    text="Postoperative C-Section Care Guidelines" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[30px] leading-tight" 
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {recoveryTips.map((tip, idx) => (
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
                      Why Choose Dr. Poonam for LSCS?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Surgical Precision:</strong> Senior consultant specializing in low-scar, cosmetic suture techniques.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Emergency Support:</strong> Associated with tertiary healthcare hospitals with 24/7 emergency theaters.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Complete Post-op Monitoring:</strong> Direct clinical recovery tracking for wound healing, lactation support, and postnatal diet.</span>
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
