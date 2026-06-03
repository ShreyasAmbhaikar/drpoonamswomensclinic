import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import ComparisonCards from '@/components/ui/ComparisonCards';
import HorizontalScrollCards from '@/components/ui/HorizontalScrollCards';
import CircularProcess from '@/components/ui/CircularProcess';
import { Activity, CheckCircle, ShieldCheck, Heart, Crosshair } from 'lucide-react';

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

  const comparisonData: [any, any] = [
    {
      title: "Laparoscopic (Keyhole) Surgery",
      theme: "secondary",
      items: [
        { feature: "Incision Size", isAvailable: "Tiny 0.5cm to 1cm incisions." },
        { feature: "Hospital Stay", isAvailable: "Often discharged the same day or within 24 hours." },
        { feature: "Pain Level", isAvailable: "Significantly less post-operative pain." },
        { feature: "Scarring", isAvailable: "Minimal, barely noticeable scars that fade quickly." },
        { feature: "Recovery Time", isAvailable: "Back to normal daily activities within 1-2 weeks." }
      ]
    },
    {
      title: "Traditional Open Surgery",
      theme: "primary",
      items: [
        { feature: "Incision Size", isAvailable: "Large 10cm to 15cm abdominal cut." },
        { feature: "Hospital Stay", isAvailable: "Requires 3 to 5 days of inpatient care." },
        { feature: "Pain Level", isAvailable: "Higher pain requiring stronger pain medications." },
        { feature: "Scarring", isAvailable: "Leaves a large, permanent abdominal scar." },
        { feature: "Recovery Time", isAvailable: "Takes 4 to 6 weeks for full tissue healing." }
      ]
    }
  ];

  const treatableConditions = [
    { title: "Ovarian Cysts (Cystectomy)", description: "Safe removal of painful or complex cysts while preserving the healthy ovarian tissue, crucial for future fertility.", icon: <Crosshair className="w-5 h-5" /> },
    { title: "Uterine Fibroids (Myomectomy)", description: "Extracting non-cancerous uterine growths that cause heavy bleeding and pelvic pressure, through tiny abdominal ports.", icon: <Crosshair className="w-5 h-5" /> },
    { title: "Endometriosis Excision", description: "Identifying and vaporizing ectopic endometrial tissue that causes debilitating menstrual pain and fertility issues.", icon: <Crosshair className="w-5 h-5" /> },
    { title: "Ectopic Pregnancy", description: "A life-saving emergency procedure to remove a fertilized egg growing outside the uterus, usually in the fallopian tube.", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "Diagnostic Fertility Check", description: "A thorough visual inspection of the pelvic organs combined with a dye test (chromotubation) to check if fallopian tubes are open.", icon: <Activity className="w-5 h-5" /> }
  ];

  const procedureSteps = [
    {
      title: 'Pre-Surgical Preparation',
      description: 'You are placed under general anesthesia so you will be completely asleep. The abdominal area is sterilized, and a tiny incision (usually inside the navel) is made.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Gas Insufflation',
      description: 'Carbon dioxide gas is gently pumped into the abdomen. This lifts the abdominal wall away from the internal organs, creating a spacious, safe viewing area for the surgeon.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Camera Insertion & Navigation',
      description: 'A laparoscope (a thin tube with a high-definition camera and light) is inserted. The live video feed is displayed on large monitors, providing a magnified, crystal-clear view of the pelvic organs.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Surgical Treatment',
      description: 'If treatment is needed, 1-3 additional tiny incisions are made lower on the abdomen to insert specialized, pencil-thin surgical instruments to cut, extract, or repair tissue.',
      icon: <Crosshair className="w-5 h-5" />
    },
    {
      title: 'Deflation and Closure',
      description: 'Once complete, the CO2 gas is carefully released, instruments are removed, and the tiny incisions are closed with dissolving sutures and covered with small bandages.',
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  const recoveryTimeline = [
    { title: "Days 1-2", description: "Resting at home. You may feel mild shoulder pain from the CO2 gas; gentle walking helps it dissipate quickly." },
    { title: "Days 3-7", description: "Most patients can return to light desk work or normal household activities. Keep incision bandages dry." },
    { title: "Weeks 2-3", description: "Full internal healing. You can usually resume regular exercise routines and sexual activity after medical clearance." }
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
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[60px]">
                
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
                  <AnimatedHeading 
                    text="What is Laparoscopic Procedures?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
                  />
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Laparoscopy (Keyhole Surgery) is the modern clinical standard for pelvic and gynecological surgeries. By using specialized instruments and a high-definition camera system inserted through tiny incisions, it allows gynecologists to perform complex surgeries with absolute precision, avoiding large abdominal cuts, reducing postoperative pain, and accelerating recovery.
                    </p>
                    <p>
                      At Dr Poonam's Women's Clinic in Keshav Nagar, Pune, we perform advanced gynecological laparoscopy. Dr. Poonam brings over a decade of clinical and surgical expertise to treat ovarian cysts, fibroids, endometriosis, and conduct diagnostic checks for fertility in sterile, state-of-the-art operating suites. For patients residing in Mundhwa or Kharadi searching for a laparoscopic keyhole surgeon around the area, our clinic provides complete evaluation and recovery support.
                    </p>
                  </div>
                </div>

                {/* Comparison Section */}
                <div>
                  <AnimatedHeading 
                    text="Why Choose Keyhole Surgery?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[30px] text-[15px] leading-relaxed">
                    Whenever medically possible, Dr. Poonam opts for laparoscopic approaches over traditional open surgery due to the overwhelming benefits for the patient.
                  </p>
                  <ComparisonCards columns={comparisonData} />
                </div>

                {/* Horizontal Scroll Cards for Treatable Conditions */}
                <div className="w-[calc(100vw-32px)] lg:w-full -ml-4 lg:ml-0 px-4 lg:px-0">
                  <HorizontalScrollCards 
                    title="Conditions Treated via Laparoscopy" 
                    subtitle="This minimally invasive technique is highly versatile and used for both diagnostic and operative procedures."
                    cards={treatableConditions} 
                  />
                </div>

                {/* Surgical Steps (Vertical Timeline) */}
                <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
                  <AnimatedHeading 
                    text="How the Procedure is Performed" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                    Understanding the surgical process helps alleviate pre-operative anxiety. Here is exactly what happens during a standard laparoscopic surgery.
                  </p>
                  <VerticalTimeline items={procedureSteps} />
                </div>

                {/* Recovery Process (Circular Process) */}
                <div>
                  <CircularProcess 
                    title="Rapid Post-Op Recovery" 
                    steps={recoveryTimeline} 
                  />
                </div>

                {/* Why Choose Us */}
                <div className="bg-[#151722] text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center gap-[45px]">
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
                        <span><strong>Safe Fertility Assessment:</strong> Diagnostic laparoscopy and chromotubation to safely evaluate tubal patency and pelvic health.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/3 flex justify-center shrink-0">
                    <div className="bg-white/10 border border-white/15 p-6 rounded-[20px] text-center w-full max-w-[220px]">
                      <div className="text-[44px] font-bold text-white mb-1">5.0</div>
                      <p className="text-[13px] font-bold uppercase tracking-wider text-white/90 mb-1">Google Rating</p>
                      <p className="text-[14px] md:text-[15px] text-white/80">Based on 42 Verified Reviews</p>
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
