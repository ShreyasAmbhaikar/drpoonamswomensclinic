import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import ComparisonCards from '@/components/ui/ComparisonCards';
import HorizontalScrollCards from '@/components/ui/HorizontalScrollCards';
import CircularProcess from '@/components/ui/CircularProcess';
import { ShieldCheck, CheckCircle, Activity, Stethoscope, Droplets } from 'lucide-react';

export const metadata = {
  title: "Menstrual Hygiene & Health Management in Keshav Nagar Pune",
  description: "Learn safe menstrual hygiene practices, treat abnormal bleeding or painful cramps, and get custom fertility advice from Dr. Poonam. Leading clinic in Keshav Nagar, Mundhwa, and Magarpatta.",
  alternates: {
    canonical: '/menstrual-hygiene-in-keshav-nagar/',
  }
};

export default function MenstrualHygienePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Menstrual Hygiene' },
  ];

  const comparisonData: [any, any] = [
    {
      title: "Normal Menstruation",
      theme: "secondary",
      items: [
        { feature: "Cycle Length", isAvailable: "Cycles occurring every 21 to 35 days." },
        { feature: "Bleeding Duration", isAvailable: "Bleeding lasts between 3 to 7 days." },
        { feature: "Pain Level", isAvailable: "Mild to moderate cramps that resolve with basic care." },
        { feature: "Blood Volume", isAvailable: "Changing a pad/tampon every 4 to 6 hours." },
        { feature: "Spotting", isAvailable: "Minimal to no spotting between periods." }
      ]
    },
    {
      title: "Abnormal Signs (Seek Help)",
      theme: "primary",
      items: [
        { feature: "Cycle Length", isAvailable: "Cycles shorter than 21 days or longer than 35 days." },
        { feature: "Bleeding Duration", isAvailable: "Bleeding consistently lasting longer than 7 days." },
        { feature: "Pain Level", isAvailable: "Severe, debilitating pelvic pain preventing daily work." },
        { feature: "Blood Volume", isAvailable: "Soaking through a pad/tampon every 1 to 2 hours." },
        { feature: "Spotting", isAvailable: "Frequent bleeding or spotting between periods." }
      ]
    }
  ];

  const subServices = [
    { title: "Hygiene Guidance", description: "Expert advice on safely transitioning between sanitary pads, tampons, and reusable medical-grade menstrual cups.", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "Dysmenorrhea (Cramp) Relief", description: "Investigating the root causes of extreme cramps (like endometriosis) and providing targeted pain management.", icon: <Activity className="w-5 h-5" /> },
    { title: "Abnormal Bleeding Management", description: "Diagnosing and treating heavy bleeding (menorrhagia) or skipped periods caused by hormonal imbalances.", icon: <Droplets className="w-5 h-5" /> },
    { title: "Vaginal Infection Care", description: "Education and fast medical treatment for reproductive tract infections resulting from poor hygiene practices.", icon: <Stethoscope className="w-5 h-5" /> }
  ];

  const evaluationTimeline = [
    {
      title: 'Detailed Cycle History',
      description: 'Dr. Poonam will extensively discuss your menstrual cycle history, tracking the frequency, pain levels, and flow volume to identify patterns.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Physical & Pelvic Assessment',
      description: 'A gentle, non-invasive physical examination may be performed to check for any visible signs of infection, inflammation, or structural anomalies.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Hormonal & Ultrasound Diagnostics',
      description: 'If PCOS or fibroids are suspected, we may conduct a blood test panel to check thyroid and reproductive hormones, along with a pelvic ultrasound.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Customized Treatment Plan',
      description: 'Based on the findings, a tailored plan is created. This could involve lifestyle modifications, hormonal therapy, or targeted medications to restore balance.',
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  const hygienePractices = [
    { title: "Change Regularly", description: "Change sanitary pads every 4-6 hours. Empty and rinse menstrual cups every 8-12 hours." },
    { title: "Wash Externally Only", description: "Wash the vulva with plain water. Avoid douching or using harsh scented soaps internally." },
    { title: "Wipe Front to Back", description: "Always wipe from the vagina towards the anus to prevent transmitting harmful intestinal bacteria." }
  ];

  const faqs = [
    {
      question: 'What are the basic guidelines for healthy menstrual hygiene?',
      answer: 'Healthy hygiene involves changing sanitary pads every 4–6 hours, washing the vulva from front to back to prevent intestinal bacteria transmission, using breathable cotton underwear, avoiding scented intimate washes, and tracking your cycle regularly.'
    },
    {
      question: 'Is it safe to use a menstrual cup? How do I sanitize it?',
      answer: 'Yes, menstrual cups are highly safe, cost-effective, and eco-friendly. To sanitize a menstrual cup, wash it with clean water and mild soap during your cycle, and boil it in water for 5–10 minutes at the end of each cycle before storing it in a breathable pouch.'
    },
    {
      question: 'How much pain during periods is considered abnormal (dysmenorrhea)?',
      answer: 'While mild cramping is normal, severe, debilitating pain that prevents you from going to work, school, or performing daily activities is abnormal. This condition can be caused by underlying issues like endometriosis, adenomyosis, or fibroids, and should be evaluated clinically by Dr. Poonam.'
    },
    {
      question: 'What is Toxic Shock Syndrome (TSS) and how is it related to tampons?',
      answer: 'Toxic Shock Syndrome is a rare, life-threatening bacterial infection linked to leaving highly absorbent tampons in for too long. To prevent TSS, change tampons every 4–6 hours, use the lowest absorbency needed, and consider alternating with sanitary pads or menstrual cups.'
    },
    {
      question: 'How often should sanitary pads or tampons be changed to prevent infections?',
      answer: 'Sanitary pads should be changed every 4 to 6 hours, and tampons should be changed every 4 to 6 hours (never left in longer than 8 hours). Prolonged use creates a warm, moist environment that promotes bacterial overgrowth, leading to vaginal candidiasis, bacterial vaginosis, or urinary tract infections.'
    },
    {
      question: 'What are the risks of using scented intimate washes, and what is the correct way to clean?',
      answer: 'Scented intimate washes can disrupt the natural acidic pH of the vagina (which should be between 3.8 and 4.5) and kill beneficial lactobacilli bacteria. The correct way to clean is to wash only the external vulva with plain warm water or a doctor-recommended pH-balanced wash, always wiping from front to back.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Menstrual Hygiene & Health" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/menstrual-hygiene-in-keshav-nagar/" />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/service-menstrual-hygiene.webp" 
                      alt="Eco friendly sanitary napkin and medical grade silicone menstrual cup on clean background" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <AnimatedHeading 
                    text="What is Menstrual Hygiene & Health?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
                  />
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Menstrual health and hygiene are the foundation of a woman’s reproductive health, fertility, and daily quality of life. Adopting safe hygiene practices prevents bacterial infections, skin rashes, and reproductive tract complications, while the timely management of issues like severe pain or abnormal bleeding protects your long-term wellness.
                    </p>
                    <p>
                      At Dr Poonam’s Women’s Clinic in Keshav Nagar, Pune, we believe in breaking the silence and taboos around menstruation. Dr. Poonam provides highly informative, confidential counseling on correct hygiene practices, menstrual disorders, PCOD-related irregular cycles, and endometriosis management. If you reside in Mundhwa or Magarpatta and are looking for a trusted gynaecologist nearby for menstrual health concerns, we offer clinical expertise with ultimate privacy.
                    </p>
                  </div>
                </div>

                {/* Comparison Section */}
                <div>
                  <AnimatedHeading 
                    text="Is Your Period Normal?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[30px] text-[15px] leading-relaxed">
                    Knowing the difference between typical menstrual symptoms and signs of an underlying issue is crucial for seeking early care.
                  </p>
                  <ComparisonCards columns={comparisonData} />
                </div>

                {/* Horizontal Scroll Cards for Services */}
                <div className="w-[calc(100vw-32px)] lg:w-full -ml-4 lg:ml-0 px-4 lg:px-0">
                  <HorizontalScrollCards 
                    title="Our Menstrual Health Services" 
                    subtitle="We offer specialized clinical consultations and diagnostic care to help you manage your cycles comfortably."
                    cards={subServices} 
                  />
                </div>

                {/* Diagnostic Process Steps (Vertical Timeline) */}
                <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
                  <AnimatedHeading 
                    text="Our Diagnostic Approach" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                    If you are experiencing severe pain or abnormal bleeding, we follow a strict clinical protocol to find and treat the root cause.
                  </p>
                  <VerticalTimeline items={evaluationTimeline} />
                </div>

                {/* Hygiene Practices (Circular Process) */}
                <div>
                  <CircularProcess 
                    title="Essential Hygiene Habits" 
                    steps={hygienePractices} 
                  />
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
                        <span><strong>Detailed Consultations:</strong> We take the time to listen to your cycle concerns, offering highly personalized treatments.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Root Cause Resolution:</strong> We don't just treat the pain; we investigate for underlying causes like endometriosis or fibroids.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Advanced Diagnostics:</strong> In-house facilities for hormonal screening, pelvic ultrasounds, and diagnostic hysteroscopy.</span>
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
