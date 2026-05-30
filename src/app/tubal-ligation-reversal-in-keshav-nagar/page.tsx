import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Heart, ShieldCheck, CheckCircle } from 'lucide-react';

export const metadata = {
  title: "Tubal Ligation & Reversal in Keshav Nagar Pune | Dr Poonam's Clinic",
  description: "Permanent family planning (tubectomy) and microsurgical tubal ligation reversal by Dr. Poonam. Reconstruct fallopian tubes to restore fertility. Expert care in Keshav Nagar, Hadapsar, and Magarpatta.",
  alternates: {
    canonical: '/tubal-ligation-reversal-in-keshav-nagar/',
  }
};

export default function TubalLigationPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Tubal Ligation & Reversal' },
  ];

  const processTimeline = [
    {
      step: '01',
      title: 'Detailed Fertility Counseling',
      desc: 'Discussing contraceptive goals, confirming decision finality for ligation, or evaluating reversal eligibility and analyzing past surgical records.'
    },
    {
      step: '02',
      title: 'Diagnostic HSG Dye Check',
      desc: 'For reversal cases, performing a Hysterosalpingogram (HSG dye test) to evaluate the length and health of the remaining fallopian tube segments.'
    },
    {
      step: '03',
      title: 'Microsurgical Pathway Reconstruction',
      desc: 'Performing laparoscopic ligation (using clips/rings) or executing precise microsurgical re-anastomosis to rejoin the fallopian tubes.'
    },
    {
      step: '04',
      title: 'Post-Op Monitoring & Recovering',
      desc: 'Observing the patient in the daycare recovery suite, organizing pain management, and outlining custom discharge instructions.'
    }
  ];

  const planningTips = [
    {
      title: 'Sterilization Certainty',
      desc: 'Ligation is a permanent sterilization procedure. Ensure absolute alignment with your partner and complete family planning finality.'
    },
    {
      title: 'Tubal Reversal Factors',
      desc: 'Reconstructive success relies heavily on the type of ligation originally performed (clips are easiest to reverse, burning/cauterization is hardest).'
    },
    {
      title: 'Post-operative Recovery Rest',
      desc: 'Avoid heavy lifting, strenuous abdominal exercises, or swimming for 2 weeks after laparoscopic ligation or reversal surgery.'
    }
  ];

  const faqs = [
    {
      question: 'What is tubal ligation and is it a permanent form of birth control?',
      answer: 'Tubal ligation (commonly known as female sterilization or tubectomy) is a surgical procedure where the fallopian tubes are blocked, cut, or sealed. This prevents the egg from meeting the sperm, providing highly effective, permanent birth control.'
    },
    {
      question: 'How is a laparoscopic tubal ligation performed?',
      answer: 'Laparoscopic tubal ligation is a quick day-care procedure. Under general anesthesia, a small incision is made near the navel. A laparoscope is inserted, and the fallopian tubes are closed using medical clips, bands, or by cutting and tying them.'
    },
    {
      question: 'What are the success rates of achieving pregnancy after a tubal reversal?',
      answer: 'Pregnancy success rates after tubal reversal (tubal re-anastomosis) range from 40% to 80%. Success depends heavily on the mother\'s age, the remaining length of healthy fallopian tubes, and the sterilization method originally used.'
    },
    {
      question: 'How long does recovery take after a ligation or reversal surgery?',
      answer: 'For laparoscopic ligation, recovery takes 3 to 5 days, and most women return to light work within a week. Reversal surgery is more complex and may require 1 to 2 weeks of recovery time before returning to normal activities.'
    },
    {
      question: 'Is a tubectomy 100% effective in preventing pregnancy?',
      answer: 'Tubal ligation is one of the most effective birth control methods, with an efficacy rate exceeding 99%. However, in extremely rare cases (less than 1 in 200), the fallopian tubes can grow back together or create a new pathway (recanalization), leading to pregnancy.'
    },
    {
      question: 'Can I get pregnant naturally after a tubal ligation reversal, or is IVF required?',
      answer: 'Yes, the main goal of a tubal reversal is to enable you to conceive naturally without requiring IVF. If the reversal surgery is successful and the fallopian tubes are confirmed to be open (patent), you can attempt natural conception during your fertile window.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Tubal Ligation & Reversal" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/tubal-ligation-reversal-in-keshav-nagar/" />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[40px] lg:gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/tubal-ligation.webp" 
                      alt="Laparoscopy Surgery Console Tower displaying Fallopian Tubes diagnostic graphic" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Tubal Ligation is a highly reliable surgical permanent contraception option for women who decide their families are complete. Conversely, Tubal Reversal (microsurgical tubal re-anastomosis) is a delicate reconstructive surgery performed to reconnect blocked fallopian tube segments, helping women restore their natural fertility pathway.
                    </p>
                    <p>
                      At Dr Poonam's Women's Clinic in Keshav Nagar, Pune, we support women through every phase of family planning. Dr. Poonam offers laparoscopic tubal ligation as a quick daycare procedure and performs advanced microsurgical tubal reversals to reconstruct fallopian pathways for couples planning a new pregnancy. If you reside in Hadapsar or Magarpatta and are searching for a tubectomy doctor around the area, our clinic provides secure and personalized fertility pathways close to home.
                    </p>
                  </div>
                </div>

                {/* Procedure Steps */}
                <div>
                  <AnimatedHeading 
                    text="Surgical & Reconstruction Steps" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[30px] leading-tight" 
                  />
                  <div className="flex flex-col md:flex-row gap-[40px] lg:gap-[60px] items-start">
                    {/* Left Column: Intro text */}
                    <div className="w-full md:w-[40%] flex flex-col gap-4">
                      <p className="text-text leading-relaxed text-[15px]">
                        Whether undergoing a permanent tubectomy or planning a microsurgical tubal reversal, the sequence of surgical steps follows high medical standards. If you are living around the area of Mundhwa or Hadapsar, our clinic coordinates:
                      </p>
                      <div className="bg-[#FAF6F3] p-6 rounded-[20px] border border-divider/10 mt-2">
                        <h4 className="font-bold text-primary mb-2 text-[16px]">Method Details</h4>
                        <p className="text-text text-[14px] leading-relaxed">
                          For reversals, a diagnostic HSG dye check is conducted prior to using micro-sutures under magnification to rejoin fallopian segments.
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
                    text="Preparation & Self-Care Guidelines" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[30px] leading-tight" 
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {planningTips.map((tip, idx) => (
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
                      Why Choose Dr. Poonam's Clinic?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Advanced Microsurgery:</strong> Deep surgical precision for joining fallopian tube layers with micro-sutures.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Daycare Ligation Options:</strong> Laparoscopic tubectomy using highly sterile daycare operation units.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Fertility Counseling:</strong> Comprehensive support to evaluate partner fertility and optimal ovulation tracking before reversal.</span>
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
