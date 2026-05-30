import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Activity, CheckCircle } from 'lucide-react';

export const metadata = {
  title: "Laparoscopic Gynecologist Specialist in Keshav Nagar Pune | Dr Poonam's Clinic",
  description: "Advanced laparoscopic keyhole surgeries by senior gynecologist Dr. Poonam. Treat fibroids, ovarian cysts, and endometriosis with minimal scars. Serving Keshav Nagar, Mundhwa, and Kharadi.",
  alternates: {
    canonical: '/laparoscopic-procedures-in-keshav-nagar/',
  }
};

export default function LaparoscopicProceduresPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Laparoscopic Procedures' },
  ];

  const processTimeline = [
    {
      step: '01',
      title: 'Diagnostic & Anesthesia Planning',
      desc: 'Performing detailed pelvic ultrasound or MRI scans, conducting pre-anesthetic checkups (PAC), and marking port locations.'
    },
    {
      step: '02',
      title: 'Navel Entry & Gas Insufflation',
      desc: 'Under general anesthesia, making a tiny 5-10mm incision inside the navel and inflating the abdomen with CO2 gas for a clear visual field.'
    },
    {
      step: '03',
      title: 'Surgical Keyhole Treatment',
      desc: 'Inserting specialized laparoscopic instruments through secondary tiny ports to excise cysts, remove fibroids, or clear endometriosis.'
    },
    {
      step: '04',
      title: 'Suture & Ward Recovery',
      desc: 'Releasing the carbon dioxide gas, closing keyholes with absorbable cosmetic sutures, and observing the patient for comfortable discharge.'
    }
  ];

  const postOpCareTips = [
    {
      title: 'CO2 Gas Bloating Relief',
      desc: 'Mild bloating or shoulder tip discomfort is normal due to residual carbon dioxide. Gentle walking around the room helps clear the gas.'
    },
    {
      title: 'Keyhole Dressing Hygiene',
      desc: 'Keep the incision dressings dry and intact for 48 hours. Afterwards, clean the wounds gently with mild soap and pat them dry.'
    },
    {
      title: 'Gradual Return to Activity',
      desc: 'Avoid lifting loads over 5kg, intense core workouts, or swimming for 2 to 3 weeks to support internal muscular healing.'
    }
  ];

  const faqs = [
    {
      question: 'What is laparoscopic surgery, and what are its advantages?',
      answer: 'Laparoscopic surgery (also known as keyhole surgery) is a minimally invasive surgical technique that uses small abdominal incisions (5-10mm) and a camera. Advantages include significantly less pain, minimal scarring, lower infection rates, and much faster recovery compared to traditional open surgery.'
    },
    {
      question: 'What gynecological conditions can be treated using laparoscopy?',
      answer: 'Laparoscopy is commonly used to treat ovarian cysts (cystectomy), uterine fibroids (myomectomy), endometriosis, ectopic pregnancy, pelvic adhesions, diagnostic infertility checks, and hysterectomy.'
    },
    {
      question: 'How long is the recovery period after a laparoscopic procedure?',
      answer: 'Most patients go home the same day or the next morning. Initial recovery takes 3 to 7 days, and you can generally resume light work within a week. Full internal tissue healing occurs in about 2 to 3 weeks.'
    },
    {
      question: 'Why do patients experience shoulder pain after a keyhole surgery?',
      answer: 'During the procedure, carbon dioxide (CO2) gas is used to inflate the abdomen. Small amounts of trapped gas can irritate the diaphragmatic nerve, which shares pathway pathways with the shoulder. This pain is harmless and subsides in 24-48 hours.'
    },
    {
      question: 'How do I choose the best laparoscopic gynecologist near me in Keshav Nagar or Mundhwa?',
      answer: 'If you are looking for a laparoscopic surgeon near me or keyhole surgery gynecologist near me in Keshav Nagar, Mundhwa, or Kharadi, Dr Poonam’s Women’s Clinic is a top-rated choice. Dr. Poonam has +10 years of surgical experience and performs surgeries at leading nearby hospitals.'
    },
    {
      question: 'Is diagnostic laparoscopy helpful for infertility diagnosis?',
      answer: 'Yes, diagnostic laparoscopy is highly valuable for investigating unexplained infertility. It allows direct visualization of the ovaries, outer uterine structure, fallopian tubes, and pelvic environment. During the procedure, a dye test (chromotubation) is performed to verify if the fallopian tubes are open and functional.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Laparoscopic Procedures" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/laparoscopic-procedures-in-keshav-nagar/" />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[40px] lg:gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/laparoscopic-procedures.webp" 
                      alt="Laparoscopy camera handle and keyhole surgery instruments on sterile drape" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Laparoscopic procedure is the modern clinical standard for pelvic and gynecological surgeries. By using specialized keyhole instruments and a high-definition camera system, it allows gynecologists to perform complex surgeries with absolute precision, avoiding large incisions, reducing postoperative pain, and accelerating recovery.
                    </p>
                    <p>
                      At Dr Poonam's Women's Clinic in Keshav Nagar, Pune, we perform advanced gynecological laparoscopy. Dr. Poonam brings over a decade of clinical and surgical expertise to treat ovarian cysts, fibroids, and diagnostic checks for fertility in sterile, state-of-the-art operating suites in Pune. For patients residing in Mundhwa or Kharadi searching for a laparoscopic keyhole surgeon around the area, our clinic provides complete evaluation and recovery support.
                    </p>
                  </div>
                </div>

                {/* Procedure Timeline */}
                <div>
                  <AnimatedHeading 
                    text="Our Keyhole Laparoscopic Steps" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[30px] leading-tight" 
                  />
                  <div className="flex flex-col md:flex-row gap-[40px] lg:gap-[60px] items-start">
                    {/* Left Column: Intro text */}
                    <div className="w-full md:w-[40%] flex flex-col gap-4">
                      <p className="text-text leading-relaxed text-[15px]">
                        Laparoscopy keyhole surgeries follow a highly standardized clinical pathway, minimizing abdominal cuts and tissue trauma to accelerate post-operative recovery. If you live around the area of Mundhwa or Kharadi, our surgical protocol coordinates:
                      </p>
                      <div className="bg-[#FAF6F3] p-6 rounded-[20px] border border-divider/10 mt-2">
                        <h4 className="font-bold text-primary mb-2 text-[16px]">Procedural Detail</h4>
                        <p className="text-text text-[14px] leading-relaxed">
                          From diagnostic keyhole planning and carbon dioxide insufflation to precise camera-guided surgical excisions, we ensure maximum precision.
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

                {/* Post-Op Guidelines */}
                <div>
                  <AnimatedHeading 
                    text="Postoperative Recovering Guidelines" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[30px] leading-tight" 
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {postOpCareTips.map((tip, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-[20px] border border-divider/10 shadow-sm flex flex-col">
                        <div className="w-10 h-10 bg-accent/15 rounded-full flex items-center justify-center text-accent mb-4 shrink-0">
                          <Activity className="w-5 h-5" />
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
                      Why Choose Dr. Poonam for Laparoscopy?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Minimally Invasive Focus:</strong> Senior surgeon prioritizing laparoscopic keyhole routes to prevent large abdominal cuts.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Advanced Operating Units:</strong> Coordinated operations in top hospitals equipped with HD camera consoles and gas filters.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Safe Fertility Assessment:</strong> Diagnostic laparoscopy and chromotubation to evaluate tubal patency and pelvic health.</span>
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
