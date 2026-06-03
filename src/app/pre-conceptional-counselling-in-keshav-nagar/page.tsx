import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import ComparisonCards from '@/components/ui/ComparisonCards';
import HorizontalScrollCards from '@/components/ui/HorizontalScrollCards';
import CircularProcess from '@/components/ui/CircularProcess';
import { ShieldCheck, CheckCircle, Activity, Heart, Stethoscope } from 'lucide-react';

export const metadata = {
  title: "Pre Conceptional Counselling in Keshav Nagar Pune | Dr Poonam's Clinic",
  description: "Plan your pregnancy safely with comprehensive pre-pregnancy checkups, genetic screenings, and custom medical advice by Dr. Poonam. Expert care for couples in Keshav Nagar, Mundhwa, and Kharadi.",
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

  const comparisonData: [any, any] = [
    {
      title: "Unplanned Pregnancy",
      theme: "secondary",
      items: [
        { feature: "Neural Tube Risk", isAvailable: "Higher risk if folic acid was not taken prior to conception." },
        { feature: "Chronic Conditions", isAvailable: "Thyroid or blood sugar may be uncontrolled during early development." },
        { feature: "Infection Immunity", isAvailable: "Mother may lack immunity to Rubella or Varicella." },
        { feature: "Stress Levels", isAvailable: "Often associated with higher emotional and financial anxiety." }
      ]
    },
    {
      title: "Planned Pregnancy",
      theme: "primary",
      items: [
        { feature: "Neural Tube Risk", isAvailable: "Risk reduced by 70% with pre-pregnancy folic acid." },
        { feature: "Chronic Conditions", isAvailable: "Conditions are medically stabilized before conception." },
        { feature: "Infection Immunity", isAvailable: "Vaccines are caught up to protect the fetus from infections." },
        { feature: "Stress Levels", isAvailable: "Lower anxiety due to physical readiness and clear guidance." }
      ]
    }
  ];

  const essentialTests = [
    { title: "Complete Blood Count", description: "Screens for anemia to ensure you have enough iron to support increased blood volume during pregnancy.", icon: <Activity className="w-5 h-5" /> },
    { title: "Thyroid Profile (TSH)", description: "Checks for hypothyroidism, which can affect fertility and early fetal brain development.", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Viral Markers & Immunity", description: "Screens for Rubella, Hepatitis B, HIV, and checks your immunity status for critical viral infections.", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "Blood Sugar (HbA1c)", description: "Evaluates your average blood sugar levels to rule out pre-diabetes or diabetes before conception.", icon: <Heart className="w-5 h-5" /> }
  ];

  const processTimeline = [
    {
      title: 'Initial Health Assessment',
      description: 'Conducting a thorough check of maternal medical history, BMI, blood pressure, lifestyle habits, and evaluating any history of chronic conditions or previous complicated pregnancies.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Essential Diagnostic Screening',
      description: 'Running routine pre-pregnancy blood tests including complete blood count, blood typing (Rh factor), thyroid levels (TSH), blood sugar (HbA1c), and rubella antibodies.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Nutritional Optimizing & Supplementation',
      description: 'Prescribing vital pre-pregnancy vitamins (folic acid) and advising on dietary transitions, while adjusting any ongoing medications to guarantee fetal safety.',
      icon: <Heart className="w-5 h-5" />
    },
    {
      title: 'Ovulation & Fertile Window Tracking',
      description: 'Educating couples on tracking ovulation cycles, understanding fertile windows, and modifying lifestyle habits to confidently support healthy conception.',
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  const planningTips = [
    { title: "Folic Acid", description: "Start 400 mcg of folic acid daily at least 1-3 months before trying to conceive to prevent neural tube defects." },
    { title: "Weight Management", description: "Achieving a healthy BMI improves fertility and significantly lowers the risk of gestational diabetes and preeclampsia." },
    { title: "Medication Review", description: "Review all current medications with Dr. Poonam. Some acne or blood pressure meds must be stopped before pregnancy." }
  ];

  const faqs = [
    {
      question: 'What is pre-conceptional counseling and why is it important?',
      answer: 'Pre-conceptional counseling is a medical consultation for couples planning a pregnancy. It evaluates physical health, family histories, and lifestyle habits to identify factors that could impact pregnancy. By addressing these beforehand, couples can optimize maternal health, reduce gestational complications, and secure a healthy start for the baby.'
    },
    {
      question: 'When should a couple schedule a pre-pregnancy checkup?',
      answer: 'It is highly recommended to schedule a pre-conceptional consultation with Dr. Poonam at least 3 to 6 months before you actively begin planning to conceive. This provides ample window for routine screens, nutritional adjustments, vaccine catch-ups, or stabilizing chronic health markers.'
    },
    {
      question: 'What clinical tests are typically done during a pre-pregnancy visit?',
      answer: 'Routine checks include complete blood count (CBC) to screen for anemia, blood typing and Rh factor, blood sugar levels, thyroid stimulating hormone (TSH), infectious disease screens (Hepatitis B, HIV, VDRL), Rubella IgG antibodies, and Thalassemia screening.'
    },
    {
      question: 'How do I locate a clinic for pre-pregnancy planning near me in Keshav Nagar or Hadapsar?',
      answer: 'If you are looking for a pre-pregnancy checkup near me or pre-conceptional counseling near me around the area of Keshav Nagar, Mundhwa, or Kharadi, Dr Poonam’s Women’s Clinic is a top-rated choice. Our clinic offers complete diagnostics and personalized counselor services to help couples prepare for pregnancy safely.'
    },
    {
      question: 'Why is it critical to start taking Folic Acid before getting pregnant?',
      answer: 'A baby\'s brain and spinal cord (neural tube) develop in the first few weeks of pregnancy, often before you realize you have conceived. Daily folic acid intake starting at least a month before conception reduces the risk of serious neural tube defects like spina bifida by up to 70%.'
    },
    {
      question: 'Can pre-conceptional counselling help if we have a family history of genetic disorders?',
      answer: 'Yes, pre-pregnancy counseling is highly beneficial for couples with family histories of genetic conditions like thalassemia, hemophilia, or cystic fibrosis. Dr. Poonam can assess the risks, recommend targeted genetic screenings, and coordinate with specialists to map out a safe plan for a healthy child.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Pre Conceptional Counselling" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/pre-conceptional-counselling-in-keshav-nagar/" />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/pre-conceptional.webp" 
                      alt="Stethoscope and Folic Acid Supplement bottle on Doctor Consultation Desk" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <AnimatedHeading 
                    text="What is Pre Conceptional Counselling?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
                  />
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Pre-conceptional counseling is a proactive, clinical wellness strategy for couples preparing to start a family. By thoroughly evaluating physical wellness, genetic histories, immunization status, and lifestyle habits before pregnancy begins, couples can significantly reduce pregnancy risks and support healthy fetal development from day one.
                    </p>
                    <p>
                      At Dr Poonam's Women's Clinic in Keshav Nagar, Pune, we provide highly supportive, expert pre-pregnancy planning. Dr. Poonam conducts comprehensive diagnostic screens, guides you through proper folic acid dosing, and advises on optimal health choices to make your parenthood journey safe and stress-free. Whether you are living in Mundhwa or Kharadi and looking for a reliable pre-pregnancy counselor, our clinic provides personalized care tailored to your specific needs.
                    </p>
                  </div>
                </div>

                {/* Comparison Section */}
                <div>
                  <AnimatedHeading 
                    text="Why Plan Ahead?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[30px] text-[15px] leading-relaxed">
                    A planned pregnancy allows us to create the perfect biological environment for your baby to grow, significantly reducing risks.
                  </p>
                  <ComparisonCards columns={comparisonData} />
                </div>

                {/* Horizontal Scroll Cards for Tests */}
                <div className="w-[calc(100vw-32px)] lg:w-full -ml-4 lg:ml-0 px-4 lg:px-0">
                  <HorizontalScrollCards 
                    title="Essential Pre-Pregnancy Screens" 
                    subtitle="We run a comprehensive panel of tests to ensure your body is fully prepared for the demands of pregnancy."
                    cards={essentialTests} 
                  />
                </div>

                {/* Process (Vertical Timeline) */}
                <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
                  <AnimatedHeading 
                    text="Our Pre-pregnancy Process" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                    From general medical reviews to specific nutrition planning and ovulation tracking, we align each step with your pregnancy goals.
                  </p>
                  <VerticalTimeline items={processTimeline} />
                </div>

                {/* Planning Tips (Circular Process) */}
                <div>
                  <CircularProcess 
                    title="Vital Preparation Steps" 
                    steps={planningTips} 
                  />
                </div>

                {/* Why Choose Us */}
                <div className="bg-[#151722] text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center gap-[45px]">
                  <div className="w-full md:w-2/3 flex flex-col gap-6">
                    <h3 className="text-[26px] font-bold text-white leading-tight">
                      Why Choose Dr. Poonam for Planning?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Detailed Medical Mapping:</strong> Expert clinical assessment of pre-existing parameters like PCOD, thyroid, or diabetes.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Nutritional Balance:</strong> Direct advice on pre-pregnancy supplements and vitamin schedules.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Comprehensive Care:</strong> Helping you track ovulation fertile cycles and managing genetic risk screenings.</span>
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
