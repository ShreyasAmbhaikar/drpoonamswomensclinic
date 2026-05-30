import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Heart, CheckCircle } from 'lucide-react';

export const metadata = {
  title: "Scarless Hysterectomy (NDVH) in Keshav Nagar Pune | Dr Poonam's Clinic",
  description: "Non-Descent Vaginal Hysterectomy (NDVH) specialist in Pune. Remove uterus through the vaginal canal with no abdominal cuts or visible scars under Dr. Poonam. Serving patients in Keshav Nagar, Hadapsar, and Magarpatta.",
  alternates: {
    canonical: '/scarless-hysterectomy-in-keshav-nagar/',
  }
};

export default function ScarlessHysterectomyPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Scarless Hysterectomy' },
  ];

  const procedureTimeline = [
    {
      step: '01',
      title: 'Diagnostic Pre-Operative Check',
      desc: 'Conducting pelvic ultrasound scans and biopsy tests to map uterine size and confirm suitability for vaginal extraction.'
    },
    {
      step: '02',
      title: 'Vaginal Pathway Access',
      desc: 'Accessing the pelvic cavity through a small internal incision at the top of the vagina under general or spinal anesthesia.'
    },
    {
      step: '03',
      title: 'Supporting Ligament Dissection',
      desc: 'Carefully clamping and separating the blood vessels and ligaments supporting the uterus, with zero abdominal cuts.'
    },
    {
      step: '04',
      title: 'Uterine Extraction & Vault Closure',
      desc: 'Gently extracting the uterus through the natural birth canal and suturing the vaginal vault with dissolvable internal threads.'
    }
  ];

  const recoveryTips = [
    {
      title: 'Rest & Limit Strains',
      desc: 'Avoiding heavy weight lifting, pushing, pulling, or strenuous abdominal tasks for at least 4 to 6 weeks.'
    },
    {
      title: 'Pelvic Rest Protocols',
      desc: 'Strictly avoiding vaginal douching, tampons, or sexual intercourse for 6 weeks to allow internal tissues to fully heal.'
    },
    {
      title: 'High-Fiber Nutrition',
      desc: 'Consuming high-fiber foods and drinking 3 liters of water daily to prevent straining during bowel movements.'
    }
  ];

  const faqs = [
    {
      question: 'What is a Scarless Hysterectomy (NDVH)?',
      answer: 'Non-Descent Vaginal Hysterectomy (NDVH) is a surgical technique where the uterus is removed entirely through the natural vaginal canal, even in the absence of uterine prolapse (descent). This leaves no scars on the abdomen.'
    },
    {
      question: 'What are the main benefits of NDVH over abdominal hysterectomy?',
      answer: 'NDVH offers significant advantages: zero abdominal scars, dramatically reduced postoperative pain, lower risk of wound infections, shorter hospital stay (often just 24-48 hours), and a much faster return to daily activities.'
    },
    {
      question: 'How long does the recovery process take after a vaginal hysterectomy?',
      answer: 'Most women can return to light activity within 2 weeks. However, complete internal healing takes about 4 to 6 weeks. Strenuous exercises and lifting heavy objects should be avoided during this period.'
    },
    {
      question: 'Who is a suitable candidate for a scarless hysterectomy?',
      answer: 'Women requiring hysterectomy for benign conditions like small-to-moderate fibroids, adenomyosis, or abnormal uterine bleeding (AUB) are excellent candidates, provided the uterine size fits vaginal extraction criteria.'
    },
    {
      question: 'How do I choose the best scarless hysterectomy doctor near me in Keshav Nagar, Pune?',
      answer: 'If you are searching for a vaginal hysterectomy doctor near me or scarless uterus removal near me around the area of Keshav Nagar, Hadapsar, or Magarpatta, Dr Poonam’s Women’s Clinic is a top-rated choice. Dr. Poonam is highly experienced in NDVH procedures and collaborates with local tertiary hospitals to ensure safe and comfortable surgical care.'
    },
    {
      question: 'Is vaginal hysterectomy possible for large uterine fibroids?',
      answer: 'Yes, in many cases, a scarless hysterectomy can still be performed for large fibroids. Dr. Poonam uses specialized surgical techniques (like morcellation or bisection) to reduce the size of the uterus internally, allowing it to be safely extracted through the vagina without abdominal cuts.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Scarless Hysterectomy (NDVH)" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/scarless-hysterectomy-in-keshav-nagar/" />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[40px] lg:gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/scarless-hysterectomy.webp" 
                      alt="Gynecological Surgical Instruments on Metal Tray for Scarless Hysterectomy" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Scarless Hysterectomy, clinically referred to as Non-Descent Vaginal Hysterectomy (NDVH), is a highly advanced, minimally invasive surgical technique for removing the uterus. By accessing the pelvic cavity through the natural vaginal canal, it eliminates the need for any abdominal cuts, resulting in cosmetic preservation and a much smoother recovery.
                    </p>
                    <p>
                      At Dr Poonam's Women's Clinic in Keshav Nagar, Pune, we specialize in NDVH for benign uterine conditions. Dr. Poonam brings extensive surgical expertise and post-surgical clinical oversight to ensure our patients experience minimal discomfort and can return to their routines quickly. If you are residing in Hadapsar or Magarpatta and are searching for a scarless hysterectomy doctor around the area, our clinic provides expert surgical consultations and follow-up care close to home.
                    </p>
                  </div>
                </div>

                {/* Procedure Steps */}
                <div>
                  <AnimatedHeading 
                    text="NDVH Surgical Journey" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[30px] leading-tight" 
                  />
                  <div className="flex flex-col md:flex-row gap-[40px] lg:gap-[60px] items-start">
                    {/* Left Column: Intro text */}
                    <div className="w-full md:w-[40%] flex flex-col gap-4">
                      <p className="text-text leading-relaxed text-[15px]">
                        A scarless hysterectomy (NDVH) is carried out through the natural vaginal canal, leaving no external cuts on the abdomen. Understanding the surgical journey helps patients proceed with reassurance and ease. If you live around the area of Mundhwa or Kharadi, our center provides:
                      </p>
                      <div className="bg-[#FAF6F3] p-6 rounded-[20px] border border-divider/10 mt-2">
                        <h4 className="font-bold text-primary mb-2 text-[16px]">NDVH Path</h4>
                        <p className="text-text text-[14px] leading-relaxed">
                          This minimally invasive procedure takes approximately 1 hour, allowing patients to stand and walk comfortably within 24 hours of surgery.
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
                    text="Guidelines For Post-Op Healing" 
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
                      Why Choose Dr. Poonam's Clinic for NDVH?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Specialized Training:</strong> Deep experience in executing Non-Descent Vaginal Hysterectomy procedures successfully.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Zero Abdominal Scars:</strong> Absolute preservation of cosmetic appearance and minimal tissue trauma.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Comprehensive Care Plan:</strong> Diagnostic ultrasound checks, sterile operating conditions, and customized recovery tracking.</span>
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
