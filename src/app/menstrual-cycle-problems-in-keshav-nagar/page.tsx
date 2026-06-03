import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import SymptomGrid from '@/components/ui/SymptomGrid';
import ComparisonCards from '@/components/ui/ComparisonCards';
import HorizontalScrollCards from '@/components/ui/HorizontalScrollCards';
import { Activity, AlertTriangle, Calendar, CheckCircle, Clock } from 'lucide-react';

export const metadata = {
  title: "Best Treatment for Menstrual Cycle Problems in Keshav Nagar Pune",
  description: "Expert diagnosis and care for irregular periods, heavy bleeding, skipped cycles, and painful periods by Dr. Poonam. Leading clinic in Keshav Nagar, Magarpatta, and Mundhwa.",
  alternates: {
    canonical: '/menstrual-cycle-problems-in-keshav-nagar/',
  }
};

export default function MenstrualCycleProblemsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Menstrual Cycle Problems' },
  ];

  const comparisonData: [any, any] = [
    {
      title: "Healthy Menstrual Cycle",
      theme: "secondary",
      items: [
        { feature: "Cycle Length", isAvailable: "Consistently between 21 to 35 days." },
        { feature: "Bleeding Duration", isAvailable: "Lasts between 3 to 7 days." },
        { feature: "Flow Volume", isAvailable: "Requires changing pads/tampons every 3-4 hours." },
        { feature: "Pain Level", isAvailable: "Mild cramping that doesn't disrupt daily activities." },
        { feature: "Predictability", isAvailable: "You can generally predict when it will arrive." }
      ]
    },
    {
      title: "Abnormal Menstrual Cycle",
      theme: "primary",
      items: [
        { feature: "Cycle Length", isAvailable: "Shorter than 21 days or longer than 35 days." },
        { feature: "Bleeding Duration", isAvailable: "Bleeding that lasts longer than 7 days." },
        { feature: "Flow Volume", isAvailable: "Soaking through pads every 1-2 hours or large clots." },
        { feature: "Pain Level", isAvailable: "Severe, debilitating cramps that cause nausea or fainting." },
        { feature: "Predictability", isAvailable: "Highly irregular, skipping months entirely." }
      ]
    }
  ];

  const symptoms = [
    { title: "Irregular Periods", description: "Oligomenorrhea: Cycles occurring less frequently than 35 days.", icon: <Calendar className="w-5 h-5" /> },
    { title: "Heavy Bleeding", description: "Menorrhagia: Changing protection every hour or passing large clots.", icon: <AlertTriangle className="w-5 h-5" /> },
    { title: "Absent Periods", description: "Amenorrhea: Missing 3 or more cycles consecutively when not pregnant.", icon: <Clock className="w-5 h-5" /> },
    { title: "Severe Pain", description: "Dysmenorrhea: Debilitating pelvic cramps that radiate to the back/legs.", icon: <Activity className="w-5 h-5" /> },
    { title: "Spotting", description: "Bleeding irregularly between your normal menstrual periods.", icon: <AlertTriangle className="w-5 h-5" /> },
    { title: "Severe PMS", description: "Extreme mood swings, bloating, or breast tenderness (PMDD).", icon: <Activity className="w-5 h-5" /> }
  ];

  const causesCards = [
    { title: "Hormonal Imbalances", description: "PCOS, thyroid dysfunction (hypo/hyperthyroidism), or elevated prolactin levels can severely disrupt the delicate hormonal axis that triggers ovulation and menstruation." },
    { title: "Stress & Lifestyle", description: "Chronic stress spikes cortisol, which inhibits reproductive hormones. Extreme weight loss, intense exercise, or eating disorders can completely stop your cycle." },
    { title: "Uterine Fibroids", description: "Non-cancerous growths in or on the uterus can cause incredibly heavy bleeding (menorrhagia) and prolonged menstrual cycles." },
    { title: "Endometriosis", description: "Tissue similar to the uterine lining grows outside the uterus, causing severe, debilitating pain (dysmenorrhea) during menstruation." }
  ];

  const diagnosticTimeline = [
    {
      title: 'Detailed Symptom Mapping',
      description: 'We begin by meticulously logging your cycle patterns, flow volume, pain intensity, and associated physical signs like sudden weight changes, acne, or extreme fatigue.'
    },
    {
      title: 'Endocrine (Hormone) Profiling',
      description: 'Conducting targeted blood tests to check your thyroid function, prolactin, FSH, LH, and androgen levels to identify chemical imbalances.'
    },
    {
      title: 'Pelvic Ultrasound Imaging',
      description: 'Using high-resolution sonography to visually inspect the uterus and ovaries for structural issues like fibroids, polyps, or polycystic ovaries.'
    },
    {
      title: 'Personalized Medical Therapy',
      description: 'Depending on the findings, we prescribe cycle-regulating hormones, ovulation-inducing medication, or targeted treatments for thyroid/PCOS.'
    },
    {
      title: 'Surgical Intervention (If Needed)',
      description: 'If severe fibroids or polyps are causing heavy bleeding, minimally invasive hysteroscopy or laparoscopy may be recommended to remove them.'
    }
  ];

  const faqs = [
    {
      question: 'What are the common causes of irregular menstrual cycles?',
      answer: 'Irregular menstrual cycles are frequently caused by hormonal imbalances (such as Polycystic Ovary Syndrome or PCOS), thyroid disorders (hypothyroidism or hyperthyroidism), high stress levels, rapid weight fluctuations, extreme exercise routines, or transition phases like puberty and perimenopause.'
    },
    {
      question: 'How much menstrual bleeding is considered heavy bleeding (menorrhagia)?',
      answer: 'Bleeding is considered clinically heavy (menorrhagia) if you soak through one or more sanitary pads or tampons every hour for several consecutive hours, need to double pad, wake up during the night to change protection, bleed for longer than 7 days, or pass blood clots larger than a coin.'
    },
    {
      question: 'Why did I skip my period if I am not pregnant?',
      answer: 'Skipping a period (secondary amenorrhea) when not pregnant can occur due to severe emotional or physical stress, sudden weight loss or gain, hormonal imbalances like PCOS, elevated prolactin levels, thyroid dysfunction, or stopping birth control pills. Dr. Poonam evaluates your hormone levels to find the exact cause.'
    },
    {
      question: 'When should I see a doctor for painful periods or spotting between cycles?',
      answer: 'You should consult Dr. Poonam if your menstrual cramps are severe enough to disrupt daily life, fail to improve with standard over-the-counter pain relievers, or are accompanied by spotting or bleeding between cycles, as these symptoms can point to issues like endometriosis, pelvic infections, or uterine polyps.'
    },
    {
      question: 'Can stress and weight changes alter my menstrual cycle?',
      answer: 'Yes, absolutely. Stress triggers the release of cortisol, which directly interferes with the hypothalamus (the brain area that controls hormones regulating your period). Significant weight loss or gain can also disrupt estrogen production, leading to skipped, irregular, or abnormally heavy periods.'
    },
    {
      question: 'How are menstrual cycle problems diagnosed and treated by a gynaecologist?',
      answer: 'Dr. Poonam diagnoses cycle issues using detailed clinical history, blood tests (to check thyroid, prolactin, and ovarian hormones), and pelvic ultrasounds. Treatment is highly personalized and may include lifestyle/dietary guidance, hormonal therapy (such as cycle-regulating pills), or treating underlying issues like fibroids or thyroid disorders.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Menstrual Cycle Problems" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/menstrual-cycle-problems-in-keshav-nagar/" />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/service-menstrual-problems.webp" 
                      alt="Menstrual cycle tracking calendar and hormonal evaluation diagrams shown on tablet screen" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <AnimatedHeading 
                    text="What is Menstrual Cycle Problems?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
                  />
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Menstrual health is an excellent window into a woman's general endocrine and reproductive health. While occasional cycle variations are normal, persistent problems like irregular periods, missing cycles, extremely heavy bleeding, or debilitating cramps should not be ignored. If left unmanaged, cycle abnormalities can lead to complications like chronic fatigue (from anemia), metabolic challenges, or difficulties conceiving.
                    </p>
                    <p>
                      At Dr Poonam’s Women’s Clinic in Keshav Nagar, Pune, we provide precise, compassionate medical care to restore menstrual health. Dr. Poonam takes a detailed, step-by-step diagnostic approach to identify the root hormonal or anatomical cause of your symptoms, building a personalized, sustainable treatment pathway. If you live around Magarpatta or Mundhwa and are looking for a gynaecologist nearby for menstrual cycle correction, we welcome you to schedule a consultation at our clinic.
                    </p>
                  </div>
                </div>

                {/* Comparison Section */}
                <div>
                  <AnimatedHeading 
                    text="Is My Cycle Normal?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[30px] text-[15px] leading-relaxed">
                    It can be hard to know what is "normal" when every woman's body is different. Here is a quick guide to help you determine if you should seek a medical consultation.
                  </p>
                  <ComparisonCards columns={comparisonData} />
                </div>

                {/* Symptoms Grid */}
                <div>
                  <SymptomGrid 
                    title="Types of Menstrual Disorders" 
                    symptoms={symptoms} 
                  />
                </div>

                {/* Causes Horizontal Cards */}
                <div className="w-[calc(100vw-32px)] lg:w-full -ml-4 lg:ml-0 px-4 lg:px-0">
                  <HorizontalScrollCards 
                    title="What Disrupts the Menstrual Cycle?" 
                    subtitle="Menstruation requires a complex, synchronized dance of hormones. When one thing goes off balance, the whole cycle shifts."
                    cards={causesCards} 
                  />
                </div>

                {/* Diagnostic Protocol (Vertical Timeline) */}
                <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
                  <AnimatedHeading 
                    text="How We Diagnose & Treat" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                    We don't just prescribe pain pills to mask the problem. We map your symptoms to find out exactly why your body is responding this way.
                  </p>
                  <VerticalTimeline items={diagnosticTimeline} />
                </div>

                {/* Why Choose Us */}
                <div className="bg-[#151722] text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center gap-[45px]">
                  <div className="w-full md:w-2/3 flex flex-col gap-6">
                    <h3 className="text-[26px] font-bold text-white leading-tight">
                      Why Choose Dr. Poonam's Clinic?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Endocrine Mapping:</strong> Thorough screening of thyroid, insulin, and ovarian hormones to locate root triggers.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>PCOD Specialists:</strong> Extensive expertise in lifestyle, diet, and clinical management for ovulation disorders.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Accessible Care:</strong> Direct on-call access to Dr. Poonam for questions about medications or spotting alerts.</span>
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
