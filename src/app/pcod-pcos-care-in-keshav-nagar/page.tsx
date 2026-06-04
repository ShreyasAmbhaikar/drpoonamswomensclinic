import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import { Button } from '@/components/ui/Button';
import CardStack from '@/components/ui/CardStack';
import { 
  Heart, 
  CheckCircle, 
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
  Star,
  Sparkles,
  Calendar,
  AlertCircle
} from 'lucide-react';

export const metadata = {
  title: "Best PCOD & PCOS Care in Keshav Nagar & Mundhwa | Dr. Poonam's Women's Clinic",
  description: "Get personalized PCOD & PCOS care, hormonal balance treatments, and metabolic wellness guidance under Dr. Poonam at Keshav Nagar & Mundhwa, Pune. Transparent & evidence-based treatment. Book a consult today.",
  alternates: {
    canonical: '/pcod-pcos-care-in-keshav-nagar/',
  }
};

export default function PcodCarePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'PCOD & PCOS Care' },
  ];

  const symptomsData = [
    {
      title: "Irregular Periods",
      description: "Infrequent, irregular, or prolonged menstrual cycles, which are often the first sign of anovulatory cycles.",
      icon: <Calendar className="w-7 h-7" />
    },
    {
      title: "Weight Gain",
      description: "Rapid weight gain, particularly around the abdomen (visceral fat), which is closely linked to insulin resistance.",
      icon: <Heart className="w-7 h-7" />
    },
    {
      title: "Excess Androgen",
      description: "Elevated male hormone levels resulting in severe cystic acne, male-pattern hair thinning, and hirsutism.",
      icon: <AlertCircle className="w-7 h-7" />
    },
    {
      title: "Hirsutism",
      description: "Excessive, dark facial and body hair growth, especially on the chin, chest, upper back, and abdomen.",
      icon: <Activity className="w-7 h-7" />
    }
  ];

  const treatmentTimeline = [
    {
      title: 'Step 1: Diagnostics & Hormone Profiling',
      description: 'We conduct detailed hormone assays (LH, FSH, prolactin, fasting insulin, AMH) and high-resolution pelvic ultrasounds to evaluate follicular patterns and ovarian volume.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Low-GI Indian Dietary Mapping',
      description: 'We design custom anti-inflammatory, low-glycemic dietary plans customized for Indian kitchens to prevent insulin spikes and balance hormones.',
      icon: <Apple className="w-5 h-5" />
    },
    {
      title: 'Step 3: Tailored Fitness & Activity Plans',
      description: 'We formulate active fitness guidance combining strength training and aerobic exercises to improve insulin receptor sensitivity and burn visceral fat.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 4: Targeted Medical Management',
      description: 'We prescribe evidence-based cycle regulators, insulin-sensitizing medications, or targeted ovulation induction protocols for patients attempting to conceive.',
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  const preparationCards = [
    { title: "Custom Dietary Mapping", description: "Developing low-glycemic, anti-inflammatory whole-food meal plans adjusted for Indian kitchens to prevent insulin spikes.", icon: <Apple className="w-6 h-6 text-accent" /> },
    { title: "Tailored Fitness Schedules", description: "Guiding you on strength training and active workouts (150 minutes weekly) to burn abdominal fat and improve insulin sensitivity.", icon: <Activity className="w-6 h-6 text-accent" /> },
    { title: "Precise Medical Interventions", description: "Utilizing evidence-based insulin sensitizers, ovulation inductors, or cycle regulators based on your pregnancy plans.", icon: <Stethoscope className="w-6 h-6 text-accent" /> },
    { title: "Stress & Cortisol Control", description: "Mitigating stress hormones through mindfulness, meditation, and healthy sleep hygiene to restore endocrine balance.", icon: <Clock className="w-6 h-6 text-accent" /> },
    { title: "Regular Biochemical Audits", description: "Tracking follicular growth (TVS) and conducting periodic hormonal checks to measure progress and adjust treatments.", icon: <ClipboardList className="w-6 h-6 text-accent" /> }
  ];

  const recoveryCards = [
    {
      title: "Metabolic Stabilization",
      description: "Focusing on reversing insulin resistance through targeted lifestyle shifts. Stabilizing blood sugar levels halts fat storage and begins lowering excess androgen production.",
      icon: <HeartPulse className="w-9 h-9 text-[#C0354A]" />,
      iconBg: 'rgba(232, 71, 95, 0.15)',
      bgGradient: 'linear-gradient(135deg, #FDE8EC 0%, #F3E7E9 40%, #E3EEFF 100%)',
      titleColor: '#4A154B',
      textColor: 'rgba(74, 21, 75, 0.78)'
    },
    {
      title: "Hormonal Cycle Reset",
      description: "Restoring natural ovulatory cycles. Within 3-6 months of consistent habits and medical support, menstrual frequency mends and ovulation becomes regular.",
      icon: <ShieldCheck className="w-9 h-9 text-[#5C35CC]" />,
      iconBg: 'rgba(124, 77, 255, 0.12)',
      bgGradient: 'linear-gradient(135deg, #EDE7F6 0%, #E0C3FC 40%, #8EC5FC 100%)',
      titleColor: '#1A1A5E',
      textColor: 'rgba(26, 26, 94, 0.78)'
    },
    {
      title: "Long-term Remission Support",
      description: "Sustaining a symptom-free status. Regular checks prevent long-term endocrine complications, such as gestational diabetes, hypertension, or endometrial health issues.",
      icon: <Smile className="w-9 h-9 text-[#2E7D32]" />,
      iconBg: 'rgba(76, 175, 80, 0.15)',
      bgGradient: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 40%, #DCEDC8 100%)',
      titleColor: '#1B5E20',
      textColor: 'rgba(27, 94, 32, 0.78)'
    }
  ];

  const faqs = [
    {
      question: 'What is the actual cost of PCOD and PCOS Care in Pune?',
      answer: 'The total cost of PCOD and PCOS care in Pune typically ranges between ₹3,000 and ₹8,000 for initial diagnostics, which include complete hormone assays (AMH, LH, FSH, thyroid, prolactin, fasting insulin) and high-resolution pelvic ultrasounds for follicle studies. Ongoing management, including regular follow-up consultations, metabolic checks, and lifestyle/dietary guidance, averages between ₹1,000 and ₹3,000 per month. Dr. Poonam provides a fully transparent breakdown of diagnostic and medical options during your initial consultation.'
    },
    {
      question: 'What is the main difference between PCOD and PCOS?',
      answer: 'PCOD (Polycystic Ovarian Disease) is a common condition where the ovaries release immature or partially mature eggs due to a temporary hormonal imbalance, often managed effectively through diet and lifestyle shifts. PCOS (Polycystic Ovarian Syndrome) is a more complex endocrine and metabolic disorder involving elevated male hormone levels and insulin resistance, requiring medical treatment and long-term supervision to prevent metabolic complications.'
    },
    {
      question: 'Can PCOD or PCOS lead to infertility, and is natural conception possible?',
      answer: 'Yes, both conditions can cause irregular periods and anovulation (lack of egg release), which is a common cause of infertility. However, natural conception is highly achievable. Under Dr. Poonam\'s guidance, lifestyle modification, weight loss, and low-dose ovulation induction medications successfully restore ovulation, allowing most patients to conceive naturally.'
    },
    {
      question: 'How does weight loss help in managing PCOD or PCOS symptoms?',
      answer: 'Losing just 5% to 10% of your body weight is highly therapeutic. It significantly reduces insulin resistance, lowers androgen (male hormone) levels, regulates menstrual cycles, clears up skin issues, and significantly improves natural ovulation and fertility rates.'
    },
    {
      question: 'Is it possible to completely cure PCOD or PCOS?',
      answer: 'PCOS is a chronic endocrine condition, meaning there is no permanent cure, but its symptoms can be highly controlled and put into remission. By maintaining healthy lifestyle choices, balanced nutrition, and appropriate medical support, you can live symptom-free and prevent long-term health risks.'
    },
    {
      question: 'What foods should I absolutely avoid if I have PCOD or PCOS?',
      answer: 'It is crucial to avoid processed sugars, refined carbohydrates (like white bread, maida), sweetened beverages, deep-fried snacks, and excess dairy. These foods trigger rapid spikes in blood glucose, which worsens insulin resistance and amplifies hormonal imbalances.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="PCOD & PCOS Care" breadcrumbs={breadcrumbs} bgImage="/images/fertility-header.webp" />

        {/* === SECTION 1: What is PCOD & PCOS Care? (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group bg-white border border-black/[0.03]">
                <Image 
                  src="/images/pcod-overview.webp" 
                  alt="Normal Ovary vs Polycystic Ovary (PCOS) Medical Diagram" 
                  fill
                  className="object-contain p-4 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is PCOD & PCOS Care?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  Polycystic Ovarian Disease (PCOD) and Polycystic Ovarian Syndrome (PCOS) are highly prevalent endocrine and metabolic conditions affecting women of reproductive age. Driven by insulin resistance and hormonal imbalances, these conditions lead the ovaries to produce multiple fluid-filled follicles (cysts), which interrupt regular egg development. This can lead to irregular menstrual cycles, pelvic discomfort, unexplained weight gain, skin issues like severe acne, excessive hair growth, and difficulties with natural conception.
                </p>
                <p>
                  At <strong>Dr. Poonam's Women's Clinic</strong>, recognized as a leading hormonal wellness and gynecological center in Keshav Nagar and Mundhwa, we reject temporary quick-fixes. Dr. Poonam provides specialized, holistic medical care targeting the root metabolic causes of PCOD and PCOS. We focus on balancing insulin levels, correcting endocrine pathways, and restoring healthy ovulatory cycles naturally.
                </p>
                <p>
                  Because our clinic is a dedicated, single-doctor practice, you receive personal, unhurried consultations where your concerns are addressed in a private environment. Dr. Poonam designs customized lifestyle and medical plans to manage your symptoms safely and mends your long-term wellness.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your PCOD/PCOS Consultation Today
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

        {/* === SECTION 2: PCOD vs PCOS Comparison (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="PCOD vs. PCOS: Understanding the Difference" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Although often used interchangeably, PCOD and PCOS are distinct conditions. Understanding these key differences is essential for effective treatment.
            </p>

            {/* Custom Comparison layout styled exactly like Image Attachment 3 */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              {/* Vertical dotted line with VS circle in the middle (Desktop Only) */}
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-[#E2E8F0] z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center font-bold text-[#C0354A] shadow-sm z-10">
                  VS
                </div>
              </div>

              {/* Left Card: PCOD */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Polycystic Ovarian Disease (PCOD)</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Hormonal Imbalance. Lifestyle Managed.</p>
                </div>
                
                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Nature of Condition</span>
                      <p className="text-text text-[14px] leading-relaxed">Mild hormonal imbalance where ovaries release immature, partially mature eggs.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Severity Level</span>
                      <p className="text-text text-[14px] leading-relaxed">Considered less severe. Ovaries still function relatively normally with proper care.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Fertility Impact</span>
                      <p className="text-text text-[14px] leading-relaxed">Women can often still ovulate and conceive naturally with basic lifestyle shifts.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Systemic Effects</span>
                      <p className="text-text text-[14px] leading-relaxed">Primarily affects the ovaries; exhibits minimal long-term metabolic health complications.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Management Approach</span>
                      <p className="text-text text-[14px] leading-relaxed">Managed successfully through exercise, target diets, and minor lifestyle revisions.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: PCOS */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Polycystic Ovarian Syndrome (PCOS)</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Endocrine Disorder. Medical Management.</p>
                </div>

                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Nature of Condition</span>
                      <p className="text-text text-[14px] leading-relaxed">Complex endocrine and metabolic disorder involving high androgen levels.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Severity Level</span>
                      <p className="text-text text-[14px] leading-relaxed">More severe, significantly disrupting the entire endocrine and metabolic pathways.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Fertility Impact</span>
                      <p className="text-text text-[14px] leading-relaxed">Leading cause of anovulatory infertility; requires ovulation induction and support.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Systemic Effects</span>
                      <p className="text-text text-[14px] leading-relaxed">Linked to insulin resistance, obesity, type 2 diabetes, and cardiovascular risks.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Management Approach</span>
                      <p className="text-text text-[14px] leading-relaxed">Requires medical management, lifestyle revisions, and insulin sensitizers.</p>
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

        {/* === SECTION 3: Symptoms Grid (Cream bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Common Symptoms to Watch For" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[40px] leading-tight text-center" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {symptomsData.map((symptom, index) => {
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
                      {symptom.icon}
                    </div>
                    <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug`}>
                      {symptom.title}
                    </h3>
                    <p className={`${style.descText} text-[14px] leading-relaxed`}>
                      {symptom.description}
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

        {/* === SECTION 4: Timeline / Our Holistic Treatment Pathway (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="Our Holistic Treatment Pathway" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                Our clinical method targets metabolic restoration. We guide patients in Keshav Nagar and Mundhwa through systematic hormonal stabilization.
              </p>
              <VerticalTimeline items={treatmentTimeline} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 4 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FBF6F2" />
          </svg>
        </div>

        {/* === SECTION 5: Lifestyle Shifts & Metabolic Support (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Lifestyle Shifts & Metabolic Support" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Addressing PCOS is a continuous lifestyle shift. Reversing metabolic resistance mends clinical outcomes.
            </p>
            
            {/* Bento image banner - exact 838*418 dimensions */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/pcod-prep.webp" 
                alt="PCOS Holistic Lifestyle Shifts and Metabolic Support Diagram" 
                fill
                className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
              />
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

        {/* === Wave Divider 5 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 6: Recovery / Metabolic Restoration (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Expected Treatment Milestones" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Hormonal balance mends progressively. Here is what you can expect during your metabolic recovery journey under Dr. Poonam's care.
            </p>
            <CardStack items={recoveryCards} />
          </div>
        </section>

        {/* === Wave Divider 6 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FBF6F2" />
          </svg>
        </div>

        {/* === SECTION 7: Trust, FAQs & Final CTA (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px] flex flex-col gap-[70px]">

            {/* Why Choose Us */}
            <div className="bg-[#151722] text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Choose Dr. Poonam's Women's Clinic for PCOD & PCOS Care?
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
                      <strong className="block text-[16px] text-white">Root-Cause Metabolic Reset</strong>
                      <span className="text-white/80 text-[14px]">Addressing underlying insulin resistance and hormonal cascades rather than simply suppressing symptoms with temporary pills.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Personalized Indian Lifestyle Maps</strong>
                      <span className="text-white/80 text-[14px]">Providing practical low-GI dietary charts and activity structures adjusted for daily Indian household diets.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Focused Fertility Restoration</strong>
                      <span className="text-white/80 text-[14px]">Tailoring follicle tracking and ovulation monitoring directly with Dr. Poonam for patients seeking natural conception.</span>
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
