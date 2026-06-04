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
  Shield, 
  HeartPulse, 
  Smile, 
  Star, 
  Sparkles,
  ClipboardList
} from 'lucide-react';

export const metadata = {
  title: "Best Pre-Conceptional Counselling in Keshav Nagar & Mundhwa | Dr. Poonam's Women's Clinic",
  description: "Prepare for a safe, healthy pregnancy with expert Pre-Conceptional Counselling under Dr. Poonam at Dr. Poonam's Women's Clinic in Keshav Nagar & Mundhwa, Pune. Private pre-pregnancy checkups and genetic screening. Book today.",
  alternates: {
    canonical: '/pre-conceptional-counselling-in-keshav-nagar/',
  }
};

export default function PreConceptionalPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Pre Conceptional Counselling' },
  ];

  const screeningElements = [
    { 
      title: "Comprehensive Ovarian & Uterine Scan", 
      description: "A high-resolution pelvic ultrasound to evaluate uterine structure and assess ovarian reserves (antral follicle count), ruling out structural obstacles before conception.", 
      icon: <Stethoscope className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Biochemical & Hormonal Panels", 
      description: "Evaluating thyroid markers (TSH, Free T4), fasting blood glucose, and hemoglobin levels to verify maternal metabolic readiness and support stable embryogenesis.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Infection & Immunization Profiling", 
      description: "Testing maternal IgG antibody levels for Rubella and Varicella, and screening for chronic viral markers (Hepatitis B, HIV) to plan catch-up vaccines safely.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Genetic & Hemoglobinopathy Screen", 
      description: "Screening couples for thalassemia minor and other genetic carrier statuses to evaluate hereditary transmission risks and formulate an evidence-based clinical path.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    }
  ];

  const prepSchedules = [
    { 
      title: "Prenatal Folic Acid Intake", 
      description: "Daily intake of 400 mcg of folic acid starting 1 to 3 months before active attempts to conceive is critical to reduce fetal neural tube defects (spina bifida) by over 70%.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Active Medication Review", 
      description: "Evaluating all daily medications (for acne, blood pressure, or diabetes) to switch teratogenic drugs to pregnancy-safe options before fertilization occurs.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Nutritional & BMI Optimization", 
      description: "Designing customized, local low-glycemic index dietary pathways to optimize body mass index (BMI), which improves fertility rates and prevents gestational complications.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const processTimeline = [
    {
      title: 'Step 1: Clinical History & Lifestyle Audit',
      description: 'Dr. Poonam conducts a private, exhaustive review of maternal medical history, BMI, blood pressure, past gynecological records, and family hereditary disorders.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Targeted Pre-Pregnancy Diagnostics',
      description: 'Running essential laboratory tests including complete blood count, blood typing (Rh factor), thyroid assays, blood sugar levels, and viral antibody screens.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 3: Nutritional Mapping & Folic Acid Setup',
      description: 'Starting vital pre-conception vitamins, adjusting lifestyle habits, and providing honest advice on removing high-risk chemical exposure or harmful daily habits.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 4: Ovulation & Conception Plan',
      description: 'Educating the couple on tracking natural ovulation cycles and recognizing fertile windows, establishing a stress-free biological path to healthy conception.',
      icon: <Clock className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: 'What is pre-conceptional counseling and why is it recommended?',
      answer: 'Pre-conceptional counseling is a specialized medical consultation for couples planning a pregnancy. It evaluates physical health, family histories, and lifestyle habits to identify factors that could impact pregnancy. By addressing these beforehand, couples can optimize maternal health, reduce gestational complications, and secure a healthy start for the baby.'
    },
    {
      question: 'When is the best time to schedule a pre-pregnancy checkup with Dr. Poonam?',
      answer: 'It is highly recommended to schedule a pre-conceptional consultation at least 3 to 6 months before you actively begin planning to conceive. This provides ample window for routine screens, nutritional adjustments, vaccine catch-ups, or stabilizing chronic health markers like thyroid or blood sugar.'
    },
    {
      question: 'What is the actual cost of pre-conceptional counseling and diagnostics at the clinic?',
      answer: 'We maintain complete pricing transparency. A standard pre-conceptional consultation with Dr. Poonam ranges from ₹800 to ₹1,200. A comprehensive pre-pregnancy diagnostic profile (including complete blood count, thyroid profile, blood sugar levels, viral markers, and pelvic ultrasound) typically averages between ₹4,000 and ₹7,500 depending on specific diagnostic requirements.'
    },
    {
      question: 'Why is it critical to start taking Folic Acid before getting pregnant?',
      answer: 'A baby\'s brain and spinal cord (neural tube) develop in the first few weeks of pregnancy, often before you realize you have conceived. Daily folic acid intake starting at least a month before conception reduces the risk of serious neural tube defects like spina bifida by up to 70%.'
    },
    {
      question: 'Can pre-pregnancy counseling help if we have a family history of genetic disorders?',
      answer: 'Yes, pre-pregnancy counseling is highly beneficial for couples with family histories of genetic conditions like thalassemia, hemophilia, or cystic fibrosis. Dr. Poonam can assess the risks, recommend targeted genetic screenings, and coordinate with specialists to map out a safe plan for a healthy child.'
    },
    {
      question: 'How do I book a consultation, and what are the clinic hours?',
      answer: 'Dr. Poonam’s Women’s Clinic operates strictly by prior appointment during dedicated morning and evening timings. This is a dedicated, single-doctor private clinic designed to provide private, unhurried attention in a sterilized clinical environment, rather than a 24/7 emergency hospital. You can contact us directly to reserve your slot.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Pre Conceptional Counselling" breadcrumbs={breadcrumbs} bgImage="/images/fertility-header.webp" />

        {/* === SECTION 1: What is Pre-Conceptional Counselling? (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[926/418] w-full max-h-[420px] max-w-[926px] mx-auto bg-white p-4 border border-black/[0.03] group">
                <Image 
                  src="/images/preconceptional-overview.webp" 
                  alt="Pre-Conceptional Counseling consultation and prenatal preparation checklist" 
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Pre-Conceptional Counselling?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  Planning a family is a beautiful milestone, and preparing your body beforehand is the single most effective way to support a healthy pregnancy. <strong>Pre-Conceptional Counselling</strong> is a proactive, clinical wellness strategy for couples preparing to conceive. By thoroughly evaluating physical health, genetic risks, nutritional status, and lifestyle factors before pregnancy begins, couples can significantly reduce pregnancy risks and support healthy fetal development from day one.
                </p>
                <p>
                  At <strong>Dr. Poonam's Women's Clinic</strong>, recognized as a leading hormonal wellness and family planning center in Keshav Nagar and Mundhwa, Pune, we provide a private, confidential screening environment. Dr. Poonam conducts comprehensive diagnostic screens, guides you through proper folic acid dosing, and advises on optimal health choices to make your parenthood journey safe and stress-free.
                </p>
                <p>
                  Because we run a focused, single-doctor private clinic rather than a busy corporate hospital, your consultations are conducted personally by Dr. Poonam. We operate by prior appointments to ensure that every couple receives absolute privacy, meticulous attention, and clinical accuracy in a highly sterilized clinical environment.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Pre-Pregnancy Consultation Today
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

        {/* === SECTION 2: Unplanned vs. Planned Pregnancy: Pre-pregnancy Comparison (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Unplanned vs. Planned Pregnancy: Pre-pregnancy Comparison" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              A planned pregnancy allows us to create the perfect biological environment for your baby to grow, significantly reducing maternal and fetal risks.
            </p>

            {/* Custom Comparison layout styled exactly like the comparison table in PCOD section */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              {/* Vertical dotted line with VS circle in the middle (Desktop Only) */}
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-[#E2E8F0] z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center font-bold text-[#C0354A] shadow-sm z-10">
                  VS
                </div>
              </div>

              {/* Left Card: Unplanned Pregnancy */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Unplanned Pregnancy</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Higher Risk. Reactive Interventions.</p>
                </div>
                
                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Neural Tube Risk</span>
                      <p className="text-text text-[14px] leading-relaxed">Higher risk of birth defects if vital folic acid was not taken prior to conception.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Chronic Conditions</span>
                      <p className="text-text text-[14px] leading-relaxed">Thyroid levels or blood glucose may be uncontrolled during early fetal development.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Infection Immunity</span>
                      <p className="text-text text-[14px] leading-relaxed">Mother may lack immunity to Rubella or Varicella, exposing the fetus to viral risks.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Teratogenic Drugs</span>
                      <p className="text-text text-[14px] leading-relaxed">Exposure to daily medications that are harmful to early developmental stages.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Psychological Stress</span>
                      <p className="text-text text-[14px] leading-relaxed">Higher anxiety levels due to lack of physical preparation and unexpected changes.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Planned Pregnancy */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Planned Pregnancy</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Mitigated Risk. Proactive Health.</p>
                </div>

                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Neural Tube Risk</span>
                      <p className="text-text text-[14px] leading-relaxed">Defects reduced by up to 70% through pre-pregnancy folic acid supplementation.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Chronic Conditions</span>
                      <p className="text-text text-[14px] leading-relaxed">Thyroid levels and HbA1c are medically stabilized before conception is attempted.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Infection Immunity</span>
                      <p className="text-text text-[14px] leading-relaxed">Vaccination mapping catches up on Rubella and Varicella defenses before pregnancy.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Teratogenic Drugs</span>
                      <p className="text-text text-[14px] leading-relaxed">High-risk daily drugs are carefully swapped for pregnancy-safe alternatives.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Psychological Stress</span>
                      <p className="text-text text-[14px] leading-relaxed">Lower stress levels and high confidence due to physical readiness and expert advice.</p>
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

        {/* === SECTION 3: Key Elements of Pre-Pregnancy Checkups (Cream bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Key Elements of Pre-Pregnancy Checkups" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Our clinical method focuses on complete physiological assessment. We conduct precise screening elements to build a secure biological foundation for gestation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {screeningElements.map((element, index) => {
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
                        {element.icon}
                      </div>
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug`}>
                        {element.title}
                      </h3>
                      <p className={`${style.descText} text-[14px] leading-relaxed`}>
                        {element.description}
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

        {/* === SECTION 4: Our Pre-Conceptional Counselling & Supplement Schedules (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Pre-Conceptional Counselling & Supplement Schedules" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Optimizing nutritional reserves and balancing current medical treatments sets the stage for healthy conception. Review the vital pre-pregnancy preparation schedules.
            </p>
            
            {/* Bento image banner - exact 838*418 dimensions */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/preconceptional-prep.webp" 
                alt="PCOS and Pre-Conceptional Counseling Diet and Supplement Schedule Diagram" 
                fill
                className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            
            {/* Grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prepSchedules.map((card, index) => {
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

        {/* === SECTION 5: The Pre-Conceptional Counselling Journey (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="The Pre-Conceptional Counselling Journey" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                Our clinical pathway is organized to walk couples systematically toward conception. We maintain complete clinical accuracy to assure maternal health safety.
              </p>
              <VerticalTimeline items={processTimeline} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 5 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 6: Why Choose Dr. Poonam's Women's Clinic for Pre-Conceptional Counselling? (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Why Choose Us */}
            <div className="bg-[#151722] text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Choose Dr. Poonam's Women's Clinic for Pre-Conceptional Counselling?
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
                      <strong className="block text-[16px] text-white">Single-Doctor Comprehensive Consultation</strong>
                      <span className="text-white/80 text-[14px]">You consult directly and only with Dr. Poonam at every visit. We offer honest advice and private counseling designed strictly for your specific lifestyle and genetic profile.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Tailored Medical & Supplement Mapping</strong>
                      <span className="text-white/80 text-[14px]">Detailed planning for maternal chronic illnesses (TSH correction, glycemic audits) and switching daily medicines to fetal-safe alternatives.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Strict Prior-Appointment Sterilized Clinic</strong>
                      <span className="text-white/80 text-[14px]">We coordinate schedules strictly by prior appointment during dedicated clinical hours. This ensures a quiet, highly sterilized clinical environment and zero lobby crowding.</span>
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
