import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import ComparisonCards from '@/components/ui/ComparisonCards';
import { Button } from '@/components/ui/Button';
import CardStack from '@/components/ui/CardStack';
import { 
  Heart, 
  CheckCircle, 
  Baby, 
  Activity, 
  ShieldCheck, 
  Clock, 
  Home, 
  Shield, 
  Stethoscope,
  Apple,
  BookOpen,
  ClipboardList,
  HeartPulse,
  Smile,
  Calendar,
  Sparkles,
  Star
} from 'lucide-react';

export const metadata = {
  title: "Best Infertility, IUI & IVF Treatment in Keshav Nagar & Mundhwa | Dr. Poonam's Women's Clinic",
  description: "Overcome infertility with expert IUI, IVF support, and personalized female fertility care by Dr. Poonam in Keshav Nagar & Mundhwa, Pune. Transparent & evidence-based treatment. Book a consult today.",
  alternates: {
    canonical: '/infertility-iui-ivf-in-keshav-nagar/',
  }
};

export default function InfertilityIuiIvfPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Infertility, IUI & IVF' },
  ];

  const seekTreatmentData = [
    {
      title: "Irregular or Absent Cycles",
      description: "Often linked to PCOS/PCOD, irregular periods indicate inconsistent ovulation, making tracking fertile windows difficult without medical support.",
      icon: <Calendar className="w-7 h-7" />
    },
    {
      title: "Known Gynecological Conditions",
      description: "Diagnosed issues like severe endometriosis, uterine fibroids, or blocked fallopian tubes directly impede fertilization or embryo implantation.",
      icon: <Stethoscope className="w-7 h-7" />
    },
    {
      title: "Recurrent Pregnancy Loss",
      description: "Experiencing multiple miscarriages warrants detailed evaluation of hormonal, anatomical, or genetic factors to secure future pregnancies.",
      icon: <Heart className="w-7 h-7" />
    },
    {
      title: "Low Ovarian Reserve & Age",
      description: "Natural fertility declines with age. Low anti-müllerian hormone (AMH) levels require proactive planning and specialized fertility protocols.",
      icon: <Activity className="w-7 h-7" />
    }
  ];

  const comparisonData: [any, any] = [
    {
      title: "Intrauterine Insemination (IUI)",
      theme: "secondary",
      items: [
        { feature: "Procedure", isAvailable: "Washed sperm is placed directly into the uterus." },
        { feature: "Invasiveness", isAvailable: "Low; feels similar to a routine Pap smear." },
        { feature: "Fertilization", isAvailable: "Occurs naturally inside the fallopian tubes." },
        { feature: "Cost & Time", isAvailable: "Lower cost, shorter cycle duration." },
        { feature: "Best For", isAvailable: "Mild male factor, unexplained infertility." }
      ]
    },
    {
      title: "In Vitro Fertilization (IVF)",
      theme: "primary",
      items: [
        { feature: "Procedure", isAvailable: "Eggs are retrieved and fertilized in a lab, then transferred." },
        { feature: "Invasiveness", isAvailable: "Moderate; requires light sedation for egg retrieval." },
        { feature: "Fertilization", isAvailable: "Occurs externally in a highly controlled laboratory." },
        { feature: "Cost & Time", isAvailable: "Higher investment, requires 4-6 weeks per cycle." },
        { feature: "Best For", isAvailable: "Blocked tubes, severe male factor, advanced age." }
      ]
    }
  ];

  const servicesStack = [
    {
      title: "Ovulation Induction",
      description: "Using safe, oral or injectable fertility medications to stimulate the ovaries to produce healthy mature eggs, combined with ultrasound tracking to identify the exact window of ovulation.",
      icon: <Activity className="w-9 h-9 text-[#C0354A]" />,
      iconBg: 'rgba(232, 71, 95, 0.15)',
      bgGradient: 'linear-gradient(135deg, #FDE8EC 0%, #F3E7E9 40%, #E3EEFF 100%)',
      titleColor: '#4A154B',
      textColor: 'rgba(74, 21, 75, 0.78)'
    },
    {
      title: "Intrauterine Insemination (IUI)",
      description: "A simple, outpatient procedure where washed, highly concentrated sperm is placed directly inside the uterus around ovulation, bypassing cervical barriers to enhance natural fertilization.",
      icon: <ShieldCheck className="w-9 h-9 text-[#5C35CC]" />,
      iconBg: 'rgba(124, 77, 255, 0.12)',
      bgGradient: 'linear-gradient(135deg, #EDE7F6 0%, #E0C3FC 40%, #8EC5FC 100%)',
      titleColor: '#1A1A5E',
      textColor: 'rgba(26, 26, 94, 0.78)'
    },
    {
      title: "Pre & Post IVF Support",
      description: "Comprehensive medical preparation before an IVF cycle and supportive monitoring, hormone injections, and early pregnancy care after the embryo transfer to optimize successful implantation.",
      icon: <Smile className="w-9 h-9 text-[#2E7D32]" />,
      iconBg: 'rgba(76, 175, 80, 0.15)',
      bgGradient: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 40%, #DCEDC8 100%)',
      titleColor: '#1B5E20',
      textColor: 'rgba(27, 94, 32, 0.78)'
    }
  ];

  const treatmentJourney = [
    {
      title: 'Step 1: Comprehensive Diagnostics',
      description: 'We perform thorough screening including ovarian reserve testing (AMH), semen analysis, and tubal patency tests (HSG) to accurately diagnose fertility barriers.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Ovulation Induction & Stimulation',
      description: 'Using low-dose hormone stimulation customized to your reserve, we encourage the development of healthy, mature eggs without risking ovarian overstimulation.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 3: Follicular Study & Monitoring',
      description: 'Through regular, precise transvaginal ultrasounds, we monitor the growth of follicles to identify the exact window of optimal ovulation.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 4: Controlled Insemination or Support',
      description: 'We trigger ovulation precisely, executing Intrauterine Insemination (IUI) in our sterile clinic using prepared sperm, or coordinating advanced IVF prep.',
      icon: <Heart className="w-5 h-5" />
    }
  ];

  const preparationCards = [
    { title: "Nutrient-Rich Diet", description: "Focus on a balanced, anti-inflammatory diet rich in antioxidants, folic acid, and lean proteins to improve egg and sperm quality.", icon: <Apple className="w-6 h-6 text-accent" /> },
    { title: "Lifestyle Optimization", description: "Maintain a healthy BMI, engage in gentle exercises like walking, and avoid habits that harm fertility like smoking or excess alcohol.", icon: <Activity className="w-6 h-6 text-accent" /> },
    { title: "Pre-Conception Vitamins", description: "Take prescribed supplements such as prenatal vitamins, CoQ10, and Vitamin D to optimize your reproductive environment.", icon: <Sparkles className="w-6 h-6 text-accent" /> },
    { title: "Stress Management", description: "Manage stress through yoga or meditation, as high stress levels can adversely impact reproductive hormones.", icon: <Smile className="w-6 h-6 text-accent" /> },
    { title: "Open Communication", description: "Discussing your expectations, timelines, and options openly with Dr. Poonam helps build trust and reduces anxiety.", icon: <BookOpen className="w-6 h-6 text-accent" /> }
  ];

  const faqs = [
    {
      question: 'What is the actual cost of IUI and IVF treatments in Pune?',
      answer: 'Fertility treatment costs vary based on individual medical requirements. In Pune, a single IUI cycle cost typically ranges from ₹8,500 to ₹25,000, heavily depending on the type of medications required for ovarian stimulation. For IVF, the cost is naturally higher due to advanced embryology lab requirements, generally ranging between ₹1,20,000 and ₹2,00,000 per cycle. At Dr. Poonam\'s clinic, we provide a completely transparent breakdown of all diagnostic and support costs during your initial consultation so you can plan your finances without surprises.'
    },
    {
      question: 'Is the IUI procedure painful, and how long does it take?',
      answer: 'IUI is a simple, outpatient procedure that is virtually painless—most women compare it to the sensation of a routine Pap smear. The actual insemination takes only a few minutes, and you can comfortably resume your normal daily activities almost immediately afterward.'
    },
    {
      question: 'What is the success rate of IUI treatment?',
      answer: 'The success rate of IUI generally hovers around 10% to 20% per cycle. This rate depends heavily on variables such as the woman\'s age, the quality of the sperm, and the underlying cause of infertility. We typically recommend a trial of 3 to 4 IUI cycles before considering more advanced options like IVF.'
    },
    {
      question: 'How does PCOS affect my chances of getting pregnant?',
      answer: 'PCOS (Polycystic Ovary Syndrome) causes hormonal imbalances that interrupt regular ovulation, making it harder to time conception. However, it is one of the most highly treatable causes of infertility. With customized lifestyle modifications, ovulation induction, and timed intercourse or IUI, the vast majority of women with PCOS successfully conceive.'
    },
    {
      question: 'Do I need to visit an IVF center immediately if I can\'t get pregnant naturally?',
      answer: 'Not necessarily. Most couples conceive with simpler, much less expensive interventions like lifestyle optimization, ovulation tracking, or IUI. During your detailed assessment, Dr. Poonam will evaluate your specific situation and will only recommend IVF if primary treatments are unsuccessful or if specific conditions (like severe bilateral tubal blockage) exist.'
    },
    {
      question: 'Do I need to take complete bed rest after an IUI or IVF embryo transfer?',
      answer: 'No, complete bed rest is a common myth. Strict medical guidelines suggest that routine, light daily activities are perfectly safe and are actually better for promoting healthy pelvic blood circulation. We advise avoiding heavy lifting or strenuous high-impact workouts, but confining yourself to bed does not improve success rates.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Infertility, IUI & IVF Support" breadcrumbs={breadcrumbs} bgImage="/images/fertility-header.webp" />

        {/* === SECTION 1: Overview (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[420px] group">
                <Image 
                  src="/images/iui-vs-ivf.webp" 
                  alt="IUI vs IVF Medical Diagram - Intrauterine Insemination and In Vitro Fertilization Processes" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Infertility, IUI & IVF Support?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  Infertility is generally defined as the inability to conceive naturally after 12 months of regular, unprotected intercourse (or after 6 months if you are over 35). <strong>IUI (Intrauterine Insemination)</strong> and <strong>IVF (In-Vitro Fertilization)</strong> are advanced assisted reproductive technologies designed to help couples overcome these challenges. IUI is a minimally invasive procedure that involves placing washed, highly motile sperm directly into the uterus during ovulation. IVF support involves comprehensive pre-cycle preparation, precise hormonal monitoring, and post-embryo transfer medical care to maximize the chances of a successful implantation.
                </p>
                <p>
                  At <strong>Dr. Poonam's Women's Clinic</strong>, recognized as a leading fertility care center in Keshav Nagar and Mundhwa, we believe in an empathetic, step-by-step approach to parenthood. We escalate treatments only when medically justified. Our specialized fertility care focuses on advanced diagnostics, ovulation induction, and minimally invasive treatments like IUI. Through routine hormonal monitoring, follicular tracking (TVS), and personalized medical care, we ensure you are physically and emotionally prepared for a positive outcome.
                </p>
                <p>
                  Whether you are seeking initial evaluations for irregular periods, PCOS management, or looking for a trusted fertility specialist near you for IUI treatment, our evidence-based, compassionate care prioritizes your dream of building a family.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Fertility Consultation Today
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

        {/* === SECTION 2: Indications / When to Seek (White bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="When Should You Seek Female Infertility Treatment?" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[40px] leading-tight text-center" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {seekTreatmentData.map((benefit, index) => {
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
                      {benefit.icon}
                    </div>
                    <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug`}>
                      {benefit.title}
                    </h3>
                    <p className={`${style.descText} text-[14px] leading-relaxed`}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* === Wave Divider 2 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FBF6F2" />
          </svg>
        </div>

        {/* === SECTION 3: IUI vs IVF (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="IUI vs. IVF: Understanding the Difference" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Many couples are unsure whether they need IUI or IVF. Understanding the key differences helps you plan your fertility journey with confidence.
            </p>
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 transition-all duration-500 hover:shadow-xl relative aspect-[3/2] w-full max-w-[840px] mx-auto">
              <Image 
                src="/images/iui-vs-ivf-chart.webp" 
                alt="IUI vs IVF Feature Comparison Infographic Chart" 
                fill
                className="object-contain p-2"
              />
            </div>
          </div>
        </section>

        {/* === Wave Divider 3 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 4: Services Stack (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Our Comprehensive Fertility Services" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              We provide a structured, holistic approach to overcoming fertility challenges under the personal guidance of Dr. Poonam.
            </p>
            <CardStack items={servicesStack} />
          </div>
        </section>

        {/* === Wave Divider 4 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FBF6F2" />
          </svg>
        </div>

        {/* === SECTION 5: Treatment Journey Timeline (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="Your Fertility Treatment Journey" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                We follow a methodical, tracking-based clinical process to map your ovulation cycles precisely, maximizing success rates for IUI.
              </p>
              <VerticalTimeline items={treatmentJourney} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 5 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 6: Preparation Bento Grid (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Preparing for Your Fertility Treatment" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Maximizing your chances of conception starts even before your medical treatment begins. At our clinic, we emphasize holistic preparation to boost your fertility naturally.
            </p>
            
            {/* Bento image banner */}
            <div className="rounded-[24px] overflow-hidden shadow-lg relative min-h-[320px] md:min-h-0 md:aspect-[21/9] w-full mb-8 group cursor-pointer">
              <Image 
                src="/images/fertility-care.webp" 
                alt="Doctor pointing to ultrasound screen showing follicle study" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#151722]/90 via-[#151722]/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white max-w-md z-10">
                <h4 className="text-[24px] font-bold mb-2 text-white drop-shadow-md">Follicular Study Support</h4>
                <p className="text-white text-[15px] leading-relaxed drop-shadow-sm font-medium">Tracking and monitoring of ovaries via digital ultrasound to observe egg maturation and identify optimal insemination timings.</p>
              </div>
            </div>
            
            {/* Grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {preparationCards.map((card, index) => {
                const prepColors = [
                  { bg: 'bg-[#FDE8EC]', num: 'text-[#E8475F]', iconBg: 'bg-[#F9CDD5]' },
                  { bg: 'bg-[#FFF3E0]', num: 'text-[#F5A623]', iconBg: 'bg-[#FFE0B2]' },
                  { bg: 'bg-[#E8F5E9]', num: 'text-[#4CAF50]', iconBg: 'bg-[#C8E6C9]' },
                  { bg: 'bg-[#EDE7F6]', num: 'text-[#7C4DFF]', iconBg: 'bg-[#D1C4E9]' },
                  { bg: 'bg-[#E3F2FD]', num: 'text-[#2196F3]', iconBg: 'bg-[#BBDEFB]' },
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

        {/* === Wave Divider 6 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FBF6F2" />
          </svg>
        </div>

        {/* === SECTION 7: Trust card, FAQs & Final CTA (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px] flex flex-col gap-[70px]">

            {/* Why Choose Us */}
            <div className="bg-[#151722] text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Choose Dr. Poonam's Women's Clinic for Infertility & IVF Support?
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
                      <strong className="block text-[16px] text-white">Extensive Experience</strong>
                      <span className="text-white/80 text-[14px]">Over 10+ years of clinical expertise managing complex female infertility cases, PCOS/PCOD, and guiding highly successful IUI cycles in Keshav Nagar, Mundhwa, Pune.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Personalized Fertility Care</strong>
                      <span className="text-white/80 text-[14px]">We provide individualized, one-on-one consultations directly with Dr. Poonam. We ensure absolute transparency regarding treatment timelines and genuine costs, offering continuous emotional support without the rushed environment of corporate hospitals.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Patient-Centered Services</strong>
                      <span className="text-white/80 text-[14px]">Our clinic strictly follows international evidence-based guidelines. We operate on a dedicated schedule to prioritize your time, focusing heavily on minimally invasive treatments before recommending advanced interventions.</span>
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
