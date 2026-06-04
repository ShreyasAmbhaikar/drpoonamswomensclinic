import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import { Button } from '@/components/ui/Button';
import { 
  ShieldCheck, 
  CheckCircle, 
  Activity, 
  Heart, 
  Stethoscope, 
  Calendar, 
  Clock, 
  ClipboardList,
  Shield,
  Sparkles,
  Baby,
  Smile
} from 'lucide-react';

export const metadata = {
  title: "Best Irregular Periods & Menstrual Problems Treatment in Keshav Nagar & Mundhwa | Dr. Poonam's Women's Clinic",
  description: "Get expert clinical treatment for irregular periods, heavy bleeding, missed cycles, and painful cramps under Dr. Poonam at Dr. Poonam's Women's Clinic in Keshav Nagar & Mundhwa, Pune. Book today.",
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

  const subServices = [
    { 
      title: "Irregular Periods & Oligomenorrhea", 
      description: "Comprehensive endocrine evaluations to restore regular cycle intervals for cycles occurring less frequently than 35 days.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Heavy Bleeding & Menorrhagia Care", 
      description: "Diagnostic screening for uterine fibroids, endometrial thickening, or polyps, and targeted medical therapies to manage excessive bleeding.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Skipped Cycles & Amenorrhea Support", 
      description: "Identifying underlying hormonal triggers like PCOS, stress, or thyroid dysfunction to safely regulate and restart missing periods.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Dysmenorrhea & Severe Pain Management", 
      description: "Thorough clinical checks for adenomyosis, endometriosis, or pelvic infections, providing effective pain relief and targeted cures.", 
      icon: <Sparkles className="w-6 h-6 text-accent" /> 
    }
  ];

  const safetyGuidelines = [
    { 
      title: "Log Your Cycle Details", 
      description: "Maintain a detailed diary or digital tracker recording period start dates, bleeding duration, and relative flow intensity (pad counts).", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Note Secondary Symptoms", 
      description: "Record any other physical signs like sudden weight changes, acne outbreaks, facial hair growth, severe fatigue, or mood shifts.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Avoid Self-Medicating", 
      description: "Refrain from taking unprescribed hormonal pills or overuse of strong painkillers without diagnostic checks, as they mask underlying disorders.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const careProtocol = [
    {
      title: 'Step 1: Detailed Cycle Mapping',
      description: 'A private consultation with Dr. Poonam to review period charts, symptom onset, physical signs, and family history of endocrine disorders.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Endocrine (Hormone) Profiling',
      description: 'Targeted laboratory blood panels checking thyroid function (TSH), prolactin, insulin resistance, and ovarian hormones (FSH/LH).',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 3: High-Resolution Pelvic Ultrasound',
      description: 'Performing a screening transvaginal pelvic ultrasound scan to inspect the uterus and ovaries for fibroids, polyps, or polycystic ovaries.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 4: Tailored Therapeutic Strategy',
      description: 'Initiating cycle-regulating hormones, thyroid correction, or minimally invasive procedures for fibroids, paired with structured follow-ups.',
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: 'What are the primary causes of irregular periods and cycles?',
      answer: 'Irregular menstrual cycles are most commonly caused by hormonal imbalances such as Polycystic Ovary Syndrome (PCOS), thyroid disorders (hypo or hyperthyroidism), high prolactin levels, chronic emotional or physical stress, rapid weight fluctuations, intense exercise routines, or hormonal fluctuations during puberty and perimenopause.'
    },
    {
      question: 'What is the actual, genuine cost of menstrual problem treatment at the clinic?',
      answer: 'We practice complete transparency. A pelvic health and menstrual cycle consultation with Dr. Poonam is ₹600. A baseline screening pelvic ultrasound (to evaluate uterus, ovaries, and lining thickness) ranges from ₹1,500 to ₹2,500. Standard laboratory blood panels (thyroid, prolactin, or complete hormone profiles) range from ₹1,200 to ₹3,000 depending on tests. Outpatient medical treatment kits range from ₹500 to ₹1,500.'
    },
    {
      question: 'How much menstrual bleeding is considered heavy bleeding (menorrhagia)?',
      answer: 'Menstrual bleeding is clinically heavy if you soak through one or more sanitary pads every hour for several consecutive hours, need to change protection during the night, bleed for more than 7 days, pass blood clots larger than a coin, or experience severe fatigue due to flow volume.'
    },
    {
      question: 'Why did I skip my period if my pregnancy test is negative?',
      answer: 'Skipping periods (secondary amenorrhea) when not pregnant can happen due to elevated stress levels, sudden weight shifts, hormonal imbalances like PCOS, high prolactin levels, thyroid dysfunction, or stopping birth control pills. Dr. Poonam conducts hormone checks to locate the biological cause.'
    },
    {
      question: 'Can chronic stress or weight changes alter my menstrual cycle?',
      answer: 'Yes, absolutely. Stress releases cortisol, which direct disrupts the hypothalamus (the brain area that regulates menstrual hormones). Significant weight loss or rapid weight gain also alters estrogen production, leading to skipped, irregular, or abnormally heavy periods.'
    },
    {
      question: 'Is the clinic open 24/7 for emergency period pain treatment?',
      answer: 'Dr. Poonam\'s Women\'s Clinic operates strictly by prior appointment during dedicated morning and evening timings to maintain a quiet, sterilized clinical lobby. We do not support 24/7 walk-in emergency queues. Registered patients experiencing severe pelvic pain can contact our coordinator to book a priority consult.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Menstrual Cycle Problems" breadcrumbs={breadcrumbs} bgImage="/images/maternity_header.webp" />

        {/* === SECTION 1: What is Menstrual Cycle Problems Treatment? (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[926/418] w-full max-h-[420px] max-w-[926px] mx-auto bg-white p-4 border border-black/[0.03] group">
                <Image 
                  src="/images/menstrual-problems-overview.webp" 
                  alt="Menstrual cycle tracking calendar and hormonal evaluation diagrams shown on tablet screen" 
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Menstrual Cycle Problems?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  Menstrual health is an excellent window into a woman's general endocrine, metabolic, and reproductive health. While occasional minor variations in cycle dates are common, persistent issues such as irregular periods, skipped cycles, abnormally heavy bleeding, or debilitating uterine cramps should not be ignored. If left unmanaged, cycle irregularities can lead to anemia, metabolic disorders, and future fertility challenges.
                </p>
                <p>
                  At <strong>Dr. Poonam's Women's Clinic</strong>, the leading menstrual wellness and gynecological center in Keshav Nagar and Mundhwa, Pune, we focus on identifying the root hormonal or anatomical cause of your symptoms. Dr. Poonam provides compassionate, expert care, helping you regulate your menstrual health through structured clinical management.
                </p>
                <p>
                  Our clinic is run single-handedly by Dr. Poonam, ensuring that you receive direct, personal, and highly supportive medical care at every visit. All consultations are coordinated strictly by prior appointment during dedicated hours, maintaining a quiet, highly sterilized environment that eliminates lobby crowds and waiting room anxiety.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Menstrual Wellness Consultation Today
              </Button>
            </div>

          </div>
        </section>

        {/* === Wave Divider 1 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 2: Healthy Menstrual Cycle vs. Abnormal Menstrual Cycle: Comparison (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Healthy Cycle vs. Abnormal Cycle" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Every woman's body is unique, but persistent deviations from standard biological intervals are indicators that warrant clinical evaluation.
            </p>

            {/* Custom Comparison layout styled exactly like the comparison table in MTP / PCOD section */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              {/* Vertical dotted line with VS circle in the middle (Desktop Only) */}
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-[#E2E8F0] z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center font-bold text-[#C0354A] shadow-sm z-10">
                  VS
                </div>
              </div>

              {/* Left Card: Healthy Cycle */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Healthy Menstrual Cycle</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Predictable Windows. Balanced Hormones.</p>
                </div>
                
                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Cycle Length</span>
                      <p className="text-text text-[14px] leading-relaxed">Consistently between 21 to 35 days from the start of one period to the next.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Bleeding Duration</span>
                      <p className="text-text text-[14px] leading-relaxed">Active menstrual bleeding typically lasts between 3 to 7 days.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Flow Volume</span>
                      <p className="text-text text-[14px] leading-relaxed">Requires changing pads every 3-4 hours; no passage of large blood clots.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Pain Level</span>
                      <p className="text-text text-[14px] leading-relaxed">Mild, tolerable uterine cramping that does not disrupt daily work or routines.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Predictability</span>
                      <p className="text-text text-[14px] leading-relaxed">Dates can be anticipated and calculated with a high level of predictability.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Abnormal Cycle */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Abnormal Menstrual Cycle</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Irregular Windows. Hormonal Disruptions.</p>
                </div>

                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Cycle Length</span>
                      <p className="text-text text-[14px] leading-relaxed">Shorter than 21 days or longer than 35 days from one start date to the next.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Bleeding Duration</span>
                      <p className="text-text text-[14px] leading-relaxed">Active bleeding or spotting that continues for more than 7 consecutive days.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Flow Volume</span>
                      <p className="text-text text-[14px] leading-relaxed">Soaking through pads every 1-2 hours, double-padding, or passing large clots.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Pain Level</span>
                      <p className="text-text text-[14px] leading-relaxed">Severe, debilitating pelvic cramps radiating to back or legs, causing nausea.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Predictability</span>
                      <p className="text-text text-[14px] leading-relaxed">Highly irregular; skipping periods for months or having double cycles in a month.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* === Wave Divider 2 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FBF6F2" />
          </svg>
        </div>

        {/* === SECTION 3: Menstrual Disorders We Treat (Cream bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Menstrual Disorders We Treat" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Dr. Poonam offers specialized endocrine and anatomical evaluations to diagnose and correct menstrual irregularities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {subServices.map((service, index) => {
                const pastels = [
                  { cardBg: 'bg-[#F2FBF5]', blob1: 'bg-[#B8E6C4]', blob2: 'bg-[#D1F2D9]', iconBg: 'bg-[#D1F2D9]', text: 'text-[#15332B]', descText: 'text-[#2D5545]' },
                  { cardBg: 'bg-[#EEF4FF]', blob1: 'bg-[#B3D1FF]', blob2: 'bg-[#C4DEFF]', iconBg: 'bg-[#C4DEFF]', text: 'text-[#142952]', descText: 'text-[#2B4A7A]' },
                  { cardBg: 'bg-[#F6F1FF]', blob1: 'bg-[#D4BFFF]', blob2: 'bg-[#E2D4FF]', iconBg: 'bg-[#E2D4FF]', text: 'text-[#2A1650]', descText: 'text-[#4A3270]' },
                  { cardBg: 'bg-[#FFF6EE]', blob1: 'bg-[#FFD4A8]', blob2: 'bg-[#FFE2C2]', iconBg: 'bg-[#FFE2C2]', text: 'text-[#4A2E0F]', descText: 'text-[#6B4A25]' },
                ];
                const style = pastels[index % pastels.length];
                
                return (
                  <div key={index} className={`${style.cardBg} p-7 rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-500 group relative overflow-hidden hover:-translate-y-1 border border-black/[0.04]`}>
                    <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[35px] opacity-70 ${style.blob1} group-hover:scale-150 transition-transform duration-1000 ease-out`}></div>
                    <div className={`absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-[35px] opacity-70 ${style.blob2} group-hover:scale-150 transition-transform duration-1000 ease-out`}></div>
                    
                    <div className="relative z-10">
                      <div className={`mb-5 ${style.iconBg} w-14 h-14 rounded-[16px] flex items-center justify-center ${style.text} group-hover:scale-110 transition-transform duration-500`}>
                        {service.icon}
                      </div>
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug`}>
                        {service.title}
                      </h3>
                      <p className={`${style.descText} text-[14px] leading-relaxed`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* === Wave Divider 3 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 4: Our Pre-Procedure Preparation & Safe Guidelines (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Our Pre-Procedure Preparation & Safe Guidelines" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Keeping detailed records and avoiding unprescribed treatments are essential steps to ensure a highly accurate diagnosis.
            </p>
            
            {/* Bento image banner - exact 838*418 dimensions */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/menstrual-problems-prep.webp" 
                alt="Menstrual cycle health checklists and hormonal tracking logs" 
                fill
                className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            
            {/* Grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyGuidelines.map((card, index) => {
                const prepColors = [
                  { bg: 'bg-[#FDE8EC]', num: 'text-[#E8475F]', iconBg: 'bg-[#F9CDD5]' },
                  { bg: 'bg-[#FFF3E0]', num: 'text-[#F5A623]', iconBg: 'bg-[#FFE0B2]' },
                  { bg: 'bg-[#E8F5E9]', num: 'text-[#4CAF50]', iconBg: 'bg-[#C8E6C9]' },
                ];
                const c = prepColors[index % prepColors.length];
                return (
                  <div key={index} className={`${c.bg} p-7 rounded-[24px] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden border border-black/[0.03]`}>
                    <div className={`absolute -top-2 -right-1 text-[80px] font-black leading-none opacity-[0.06] ${c.num} pointer-events-none select-none`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className={`${c.iconBg} w-12 h-12 rounded-[14px] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {card.icon}
                    </div>
                    <h3 className="text-[18px] font-bold text-primary mb-2 leading-snug">{card.title}</h3>
                    <p className="text-text text-[14px] leading-relaxed">{card.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* === Wave Divider 4 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FBF6F2" />
          </svg>
        </div>

        {/* === SECTION 5: The Diagnostic & Treatment Protocol (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="Our Diagnostic & Treatment Protocol" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                We do not rely on symptomatic masking. Dr. Poonam follows a clear clinical pathway to isolate hormone or anatomical anomalies.
              </p>
              <VerticalTimeline items={careProtocol} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 5 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 6: Why Choose Dr. Poonam's Women's Clinic for Menstrual Cycle Correction? (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Why Choose Us */}
            <div className="bg-[#151722] text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Choose Dr. Poonam's Women's Clinic for Menstrual Cycle Correction?
                </h3>
                
                {/* Google Rating (Mobile Only - Below Heading) */}
                <div className="block md:hidden w-full max-w-[280px] bg-white/10 border border-white/15 p-6 rounded-[24px] text-center backdrop-blur-sm">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="text-[42px] font-bold text-[#FFD700] drop-shadow-[0_0_15px_rgba(255,215,0,0.6)] leading-none">5.0</div>
                  </div>
                  <p className="text-[13px] font-bold uppercase tracking-wider text-white/90 mb-1">Google Rating</p>
                  <p className="text-[14px] text-white/80">Based on 42 Reviews</p>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Root-Cause Endocrine Investigation</strong>
                      <span className="text-white/80 text-[14px]">We screen thyroid profiles, insulin levels, and ovarian hormone balances to treat the physiological trigger, not just cover symptoms.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Hormonal & PCOS Management Expertise</strong>
                      <span className="text-white/80 text-[14px]">Offering extensive, evidence-based expertise in ovulation induction, lifestyle counseling, and dietary guidance for cycle regulation.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Dedicated Prior-Appointment Schedule</strong>
                      <span className="text-white/80 text-[14px]">Consultations are coordinated strictly by appointment during dedicated shifts. This ensures private, quiet lobbying and maximum clinical hygiene.</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="hidden md:flex w-full md:w-[35%] lg:w-[30%] justify-center md:justify-end shrink-0 relative z-10">
                <div className="bg-white/10 border border-white/15 p-8 rounded-[24px] text-center w-full max-w-[280px] backdrop-blur-sm">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="text-[52px] font-bold text-[#FFD700] drop-shadow-[0_0_15px_rgba(255,215,0,0.6)] leading-none">5.0</div>
                  </div>
                  <p className="text-[14px] font-bold uppercase tracking-wider text-white/90 mb-1">Google Rating</p>
                  <p className="text-[15px] text-white/80">Based on 42 Reviews</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* === Wave Divider 6 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FBF6F2" />
          </svg>
        </div>

        {/* === SECTION 7: Frequently Asked Questions (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* FAQs */}
            <div>
              <AnimatedHeading 
                text="Frequently Asked Questions" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[30px] leading-tight text-center" 
              />
              <Accordion items={faqs} />
              
              <div className="mt-[50px] text-center">
                <Button href="/contact-us" variant="primary" icon size="lg">
                  Have More Questions? Schedule a Visit Today
                </Button>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
