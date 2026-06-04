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
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: "Best Contraception Advice & Family Planning in Keshav Nagar & Mundhwa | Dr. Poonam's Women's Clinic",
  description: "Get expert, safe contraception advice and family planning. IUD/Copper T insertion, oral birth control pills, and emergency contraception under Dr. Poonam at Dr. Poonam's Women's Clinic in Keshav Nagar & Mundhwa, Pune. Book today.",
  alternates: {
    canonical: '/contraception-advice-in-keshav-nagar/',
  }
};

export default function ContraceptionAdvicePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Contraception Advice' },
  ];

  const contraceptiveServices = [
    { 
      title: "Daily Oral Contraceptive Pills", 
      description: "Prescribing modern, low-dose oral contraceptive pills (OCPs) that prevent ovulation, carefully customized to minimize hormonal side effects.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Long-Acting IUD / Copper T", 
      description: "High-precision, sterile in-clinic insertion and removal of hormone-free Copper T or advanced hormonal IUDs (Mirena) for long-term birth control.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Medium-Term Hormonal Injectables", 
      description: "Administering quarterly contraceptive injections (such as Depo-Provera) that prevent pregnancy for three months, suitable for busy schedules.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Emergency Backup Contraception", 
      description: "Providing timely, professional guidance on morning-after pills or emergency copper IUD insertions within a strict post-intercourse window.", 
      icon: <Sparkles className="w-6 h-6 text-accent" /> 
    }
  ];

  const selectionGuidelines = [
    { 
      title: "Efficacy Assessment", 
      description: "Evaluating the pregnancy prevention rate of each method, which ranges from 91% for standard oral pills to over 99.9% for long-acting IUDs.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Convenience & Lifestyle Audit", 
      description: "Determining whether you prefer a daily pill routine or a long-term, hassle-free \"fit and forget\" intrauterine device (IUD) to suit your lifestyle.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Hormonal Sensitivity Review", 
      description: "Analyzing whether you have sensitivities to estrogen or progesterone, helping decide if a non-hormonal Copper T or hormone-free option is safest.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const journeySteps = [
    {
      title: 'Step 1: Comprehensive Health Review',
      description: 'Reviewing age, blood pressure, BMI, and medical history to screen for risk factors (like migraines or thromboembolism) before prescribing any hormonal methods.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Timeline & Family Planning Goals',
      description: 'Discussing your spacing goals. We determine whether a short-acting daily method or a long-acting reversible contraceptive (LARC) matches your timeline.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 3: Personalized Method Selection',
      description: 'Dr. Poonam explains the pros, cons, and potential side effects of suitable contraceptive methods, empowering you to make an informed selection.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 4: Safe Sterile Placement / Prescription',
      description: 'Providing clear instructions and prescriptions for oral methods, or conducting sterile, high-precision IUD insertions in our private clinic room.',
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  const comparisonData: [any, any] = [
    {
      title: "Daily Oral Contraceptive Pills",
      theme: "secondary",
      items: [
        { feature: "Daily Routine", isAvailable: "Must be taken at the exact same time every day to maintain efficacy." },
        { feature: "Protection Span", isAvailable: "Short-term. Normal fertility returns immediately upon discontinuation." },
        { feature: "Hormonal Profile", isAvailable: "Contains estrogen and progestin, or progestin-only formulations." },
        { feature: "Non-Contraceptive Perks", isAvailable: "Highly effective at regulating cycles, reducing flow, and clearing acne." },
        { feature: "Clinical Maintenance", isAvailable: "Requires regular pharmacy refills and self-disciplined tracking." }
      ]
    },
    {
      title: "Intrauterine Devices (IUD)",
      theme: "primary",
      items: [
        { feature: "Daily Routine", isAvailable: "Hassle-free \"fit and forget\" method; zero daily tracking required." },
        { feature: "Protection Span", isAvailable: "Long-term. Provides continuous protection for 3 to 10 years." },
        { feature: "Hormonal Profile", isAvailable: "Available as hormonal (Mirena) or entirely hormone-free (Copper T)." },
        { feature: "Non-Contraceptive Perks", isAvailable: "Hormonal IUDs (Mirena) significantly reduce heavy bleeding and cramping." },
        { feature: "Clinical Maintenance", isAvailable: "Requires an initial clinic insertion, followed by minor annual checks." }
      ]
    }
  ];

  const faqs = [
    {
      question: 'What are the primary contraception options available at the clinic?',
      answer: 'We provide temporary, short-term birth control options (daily oral pills, barrier methods), medium-term options (quarterly hormonal injections), and long-acting reversible contraceptives (such as Copper T and Mirena IUD insertions). Permanent sterilization (tubal ligation) is coordinated at our affiliated hospitals.'
    },
    {
      question: 'How does Dr. Poonam help determine the best birth control option for my body?',
      answer: 'Dr. Poonam conducts a personalized medical screening checking your age, blood pressure, blood clotting history, cycle regularity, and future family planning timeline. We explain the side effects and match the method that fits your metabolic health and daily routine perfectly.'
    },
    {
      question: 'What is the actual, genuine cost of contraceptive consultations and IUD fittings?',
      answer: 'At Dr. Poonam\'s Women\'s Clinic, transparency is paramount. A family planning and contraception consultation is ₹600. A standard Copper-T insertion (including the sterile device, local anesthetic block, and clinical insertion procedure) ranges from ₹2,500 to ₹4,500. Advanced hormonal IUD fittings (such as Mirena for heavy bleeding control) range from ₹6,500 to ₹9,500 depending on the device cost. Quarterly contraceptive injection administration is ₹600 per dose.'
    },
    {
      question: 'Are intrauterine devices (IUDs like Copper T) safe and how long do they last?',
      answer: 'Yes, IUDs are over 99% effective, making them highly secure. Copper T is entirely hormone-free and lasts for 5 or 10 years, whereas Mirena hormonal IUD lasts for 5 years and helps manage heavy menstrual flows. They can be safely removed at our clinic at any time if you decide to plan a pregnancy.'
    },
    {
      question: 'Will starting hormonal birth control affect my future fertility?',
      answer: 'No, temporary and long-acting contraceptives do not affect your long-term fertility. Once you stop taking oral birth control pills or have the IUD removed, your natural ovulatory cycles return, and you can plan a healthy pregnancy immediately.'
    },
    {
      question: 'Can I walk in for emergency contraception advice and is the clinic open 24/7?',
      answer: 'Dr. Poonam\'s Women\'s Clinic operates strictly by prior appointment during dedicated morning and evening hours to maintain a quiet, highly sterilized environment and protect patient privacy. We do not support 24/7 walk-in queues. Registered patients can contact our clinic coordinator for urgent guidance on emergency pills (morning-after pills) or backup emergency IUD insertion, which must be completed within 72 to 120 hours of unprotected intercourse.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Contraception Advice" breadcrumbs={breadcrumbs} bgImage="/images/maternity_header.webp" />

        {/* === SECTION 1: What is Contraception Advice? (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[926/418] w-full max-h-[420px] max-w-[926px] mx-auto bg-white p-4 border border-black/[0.03] group">
                <Image 
                  src="/images/contraception-overview.webp" 
                  alt="Contraception methods layout including pills, calendar, and anatomical family planning models" 
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Contraception Advice?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  <strong>Contraception Advice & Family Planning</strong> represents the clinical counseling, safety assessment, and medical placement of birth control methods designed to prevent unplanned pregnancies, manage menstrual cycles, and support maternal reproductive recovery. Selecting the correct method—whether temporary pills, injectable hormones, or long-acting reversible IUDs—is key to securing physical health and family-planning autonomy.
                </p>
                <p>
                  At <strong>Dr. Poonam's Women's Clinic</strong>, the leading center for comprehensive obstetrics, family planning, and hormonal health in Keshav Nagar and Mundhwa, Pune, we provide strictly confidential, patient-centered contraception advice. Dr. Poonam conducts detailed health screenings to rule out contraindications, offering clear explanations to help women select birth control with confidence.
                </p>
                <p>
                  Our clinic is run single-handedly by Dr. Poonam, ensuring that you receive direct, personal, and supportive medical guidance at every visit. We coordinate all family planning checkups strictly by prior appointment during dedicated hours, maintaining a quiet, highly sterilized environment that eliminates anxiety and public waiting room stress.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Contraception Consultation Today
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

        {/* === SECTION 2: Daily Oral Pills vs. Intrauterine Devices (IUD): Comparison (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Daily Oral Pills vs. Intrauterine Devices (IUD)" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Deciding between a self-administered daily pill and a long-acting, clinical \"fit and forget\" IUD depends on your medical history and lifestyle preference.
            </p>

            {/* Custom Comparison layout styled exactly like the comparison table in MTP / PCOD section */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              {/* Vertical dotted line with VS circle in the middle (Desktop Only) */}
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-[#E2E8F0] z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center font-bold text-[#C0354A] shadow-sm z-10">
                  VS
                </div>
              </div>

              {/* Left Card: Daily Oral Contraceptive Pills */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Daily Oral Pills</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Self-Administered. Temporary Option.</p>
                </div>
                
                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Daily Routine</span>
                      <p className="text-text text-[14px] leading-relaxed">Must be taken at the exact same time every day to maintain maximum efficacy.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Protection Span</span>
                      <p className="text-text text-[14px] leading-relaxed">Short-term. Natural fertility returns immediately upon discontinuing usage.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Hhormonal Profile</span>
                      <p className="text-text text-[14px] leading-relaxed">Contains estrogen and progestin, or progestin-only formulations.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Non-Contraceptive Perks</span>
                      <p className="text-text text-[14px] leading-relaxed">Highly effective at regulating menstrual cycles, reducing flow, and clearing acne.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Clinical Maintenance</span>
                      <p className="text-text text-[14px] leading-relaxed">Requires regular pharmacy refills and self-disciplined daily tracking.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Intrauterine Devices (IUD) */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Intrauterine Devices (IUD)</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Clinical Fitting. Long-Acting.</p>
                </div>

                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Daily Routine</span>
                      <p className="text-text text-[14px] leading-relaxed">Hassle-free \"fit and forget\" method; zero daily tracking required.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Protection Span</span>
                      <p className="text-text text-[14px] leading-relaxed">Long-term. Provides continuous protection for 3 to 10 years.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Hormonal Profile</span>
                      <p className="text-text text-[14px] leading-relaxed">Available as hormonal (Mirena) or entirely hormone-free (Copper T).</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Non-Contraceptive Perks</span>
                      <p className="text-text text-[14px] leading-relaxed">Hormonal IUDs (Mirena) significantly reduce heavy bleeding and cramping.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Clinical Maintenance</span>
                      <p className="text-text text-[14px] leading-relaxed">Requires an initial clinic insertion, followed by minor annual checks.</p>
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

        {/* === SECTION 3: Key Contraceptive Services We Provide (Cream bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Key Contraceptive Services We Provide" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Our clinic offers a wide range of contraceptive options, helping you select the most suitable, safe, and comfortable solution for your body.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {contraceptiveServices.map((service, index) => {
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
              Selecting contraception wisely requires checking multiple parameters to rule out physical side effects and support pelvic health.
            </p>
            
            {/* Bento image banner - exact 838*418 dimensions */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/contraception-prep.webp" 
                alt="Clean medical charts and birth control options checklist preparing for a clinic fitting" 
                fill
                className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            
            {/* Grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectionGuidelines.map((card, index) => {
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

        {/* === SECTION 5: The Contraceptive Process Step-by-Step (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="Our Evaluation & Fitting Process" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                We believe in a highly customized approach to family planning. Every prescription or fitting is preceded by a meticulous clinical audit.
              </p>
              <VerticalTimeline items={journeySteps} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 5 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 6: Why Choose Dr. Poonam's Women's Clinic for Contraception Advice? (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Why Choose Us */}
            <div className="bg-[#151722] text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Choose Dr. Poonam's Women's Clinic for Contraception Advice?
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
                      <strong className="block text-[16px] text-white">Absolute Confidentiality & Privacy</strong>
                      <span className="text-white/80 text-[14px]">We maintain a strictly private, non-judgmental space where family planning goals and contraceptive decisions can be discussed with absolute anonymity.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Certified In-Clinic Fitting Expertise</strong>
                      <span className="text-white/80 text-[14px]">Dr. Poonam exhibits specialized skills in the sterile, high-precision insertion and removal of long-term reversible contraceptives (Copper T/Mirena).</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Dedicated Prior-Appointment Schedule</strong>
                      <span className="text-white/80 text-[14px]">We coordinate consultations strictly by prior appointment during dedicated hours. This keeps wait times short and limits exposure in a highly sterilized lobby.</span>
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
