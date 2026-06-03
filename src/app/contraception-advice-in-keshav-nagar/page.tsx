import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import ComparisonCards from '@/components/ui/ComparisonCards';
import HorizontalScrollCards from '@/components/ui/HorizontalScrollCards';
import CircularProcess from '@/components/ui/CircularProcess';
import { ShieldCheck, CheckCircle, Activity, Stethoscope, Heart } from 'lucide-react';

export const metadata = {
  title: "Best Contraception Advice & Birth Control in Keshav Nagar Pune",
  description: "Expert contraception advice and birth control planning by Dr. Poonam. Safe options including Copper T, IUDs, oral pills, and emergency contraception in Keshav Nagar, Kharadi, and Mundhwa.",
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

  const comparisonData: [any, any] = [
    {
      title: "Daily Oral Pills",
      theme: "secondary",
      items: [
        { feature: "Routine", isAvailable: "Must be taken at the exact same time every day." },
        { feature: "Duration", isAvailable: "Short-term; effects reverse quickly when stopped." },
        { feature: "Hormones", isAvailable: "Contains estrogen and/or progestin." },
        { feature: "Side Benefits", isAvailable: "Can help regulate periods and reduce acne." },
        { feature: "Maintenance", isAvailable: "Requires monthly prescription refills." }
      ]
    },
    {
      title: "Intrauterine Devices (IUD)",
      theme: "primary",
      items: [
        { feature: "Routine", isAvailable: "Fit and forget; zero daily maintenance required." },
        { feature: "Duration", isAvailable: "Long-term; provides 3 to 10 years of protection." },
        { feature: "Hormones", isAvailable: "Hormonal (Mirena) or entirely hormone-free (Copper T)." },
        { feature: "Side Benefits", isAvailable: "Hormonal IUDs significantly reduce heavy bleeding." },
        { feature: "Maintenance", isAvailable: "Requires an initial clinic visit, then annual checks." }
      ]
    }
  ];

  const subServices = [
    { title: "Oral Contraceptive Pills", description: "Daily hormonal pills that prevent ovulation. Dr. Poonam prescribes modern pills with minimal side effects.", icon: <Activity className="w-5 h-5" /> },
    { title: "IUD / Copper T Insertion", description: "Highly effective, long-acting reversible contraceptives (LARC) inserted into the uterus.", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "Injectables", description: "Quarterly hormonal injections (e.g., Depo-Provera) that offer medium-term protection.", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Emergency Contraception", description: "Timely guidance on morning-after pills or emergency IUD insertion after unprotected intercourse.", icon: <Heart className="w-5 h-5" /> }
  ];

  const evaluationSteps = [
    {
      title: 'Health & History Review',
      description: 'We review your age, medical history, blood pressure, BMI, and any history of migraines or blood clots to rule out methods that may be risky for you.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Family Planning Goals',
      description: 'We discuss your timeline. Do you want to prevent pregnancy for 1 year or 5 years? This determines whether a short-acting or long-acting method is best.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Method Selection',
      description: 'Dr. Poonam explains the pros, cons, and potential side effects of the suitable methods, empowering you to make the final informed decision.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Safe Prescription or Fitting',
      description: 'If you choose pills, a prescription and schedule are provided. If you choose an IUD, it is inserted safely in-clinic using sterile, painless protocols.',
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  const selectionFactors = [
    { title: "Efficacy", description: "How crucial is it to avoid pregnancy right now? Methods range from 80% to 99.9% effective." },
    { title: "Convenience", description: "Can you remember a daily pill, or do you need a 'set and forget' IUD?" },
    { title: "Side Effects", description: "Are you sensitive to hormones? A non-hormonal Copper T might be best." }
  ];

  const faqs = [
    {
      question: 'What are the different types of contraception methods available?',
      answer: 'Contraceptive methods are broadly classified into temporary options (like daily oral pills, barrier methods, or vaginal rings), long-acting reversible contraceptives (such as Copper T, Mirena IUDs, or injections), and permanent solutions (like tubal ligation or vasectomy).'
    },
    {
      question: 'How do I choose the best contraceptive method for my body?',
      answer: 'Choosing the right method depends on your age, future pregnancy plans, medical history, cycle regularity, and general lifestyle. During a personal consultation, Dr. Poonam reviews these parameters to recommend the safest and most effective option for you.'
    },
    {
      question: 'What is the difference between oral contraceptive pills and emergency pills?',
      answer: 'Regular oral contraceptive pills are taken daily to continuously prevent pregnancy and regulate hormones. Emergency contraceptive pills (morning-after pills) are highly concentrated hormones taken only as a backup within 72 hours of unprotected intercourse to prevent fertilization.'
    },
    {
      question: 'How effective are copper IUDs (Copper T) and how long do they last?',
      answer: 'Intrauterine Devices (IUDs) like the Copper T are over 99% effective, making them one of the most reliable forms of birth control. Depending on the specific model chosen, they can provide continuous, hassle-free protection for 3, 5, or 10 years, and can be removed by a doctor at any time.'
    },
    {
      question: 'Are there any side effects of starting hormonal birth control?',
      answer: 'Some women may experience mild, temporary side effects during the first 2-3 months, such as light spotting between cycles, mild breast tenderness, or nausea. Dr. Poonam monitors your transition closely to adjust the dosage or change the method if symptoms persist.'
    },
    {
      question: 'Can contraception affect my long-term fertility or future pregnancies?',
      answer: 'No, temporary and long-acting contraceptive methods (like pills, injections, and IUDs) do not cause permanent fertility changes. Once you discontinue the pills or have the IUD removed by Dr. Poonam, your natural fertility returns, and you can plan a healthy pregnancy immediately.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Contraception Advice" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/contraception-advice-in-keshav-nagar/" />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/service-contraception.webp" 
                      alt="Contraception options chart and birth control options shown on desk" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <AnimatedHeading 
                    text="What is Contraception Advice?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
                  />
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Contraception advice and family planning are essential aspects of a woman's health, reproductive autonomy, and family well-being. Selecting the right birth control method empowers women to manage their life plans, prevent unintended pregnancies, space births for optimal maternal recovery, and successfully manage underlying issues like painful cycles or hormonal acne.
                    </p>
                    <p>
                      At Dr Poonam’s Women’s Clinic in Keshav Nagar, Pune, we offer highly personalized, strictly confidential counselling for contraception. Dr. Poonam evaluates your comprehensive health profile, answers all your questions, and guides you to a choice that perfectly aligns with your body and lifestyle goals. Whether you reside in Kharadi or Mundhwa and are looking for a reliable gynaecologist for birth control placement, we provide expert clinical support in a safe environment.
                    </p>
                  </div>
                </div>

                {/* Comparison Section */}
                <div>
                  <AnimatedHeading 
                    text="Pills vs. IUDs: Which is right for you?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[30px] text-[15px] leading-relaxed">
                    Deciding between daily pills and a long-acting IUD is a common choice. Here is how they compare on key lifestyle factors.
                  </p>
                  <ComparisonCards columns={comparisonData} />
                </div>

                {/* Horizontal Scroll Cards for Options */}
                <div className="w-[calc(100vw-32px)] lg:w-full -ml-4 lg:ml-0 px-4 lg:px-0">
                  <HorizontalScrollCards 
                    title="Our Contraceptive Arsenal" 
                    subtitle="We offer a wide range of contraceptive options, helping you select the most suitable and comfortable solution."
                    cards={subServices} 
                  />
                </div>

                {/* Consultation Process (Vertical Timeline) */}
                <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
                  <AnimatedHeading 
                    text="Our Evaluation & Fitting Process" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                    We do not believe in a one-size-fits-all approach. Every prescription or fitting is preceded by a thorough clinical review.
                  </p>
                  <VerticalTimeline items={evaluationSteps} />
                </div>

                {/* Factors to Consider (Circular Process) */}
                <div>
                  <CircularProcess 
                    title="Key Selection Factors" 
                    steps={selectionFactors} 
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
                        <span><strong>Confidential & Private:</strong> Strictly confidential discussions where you can speak open-mindedly.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Certified Skill:</strong> High-precision in-clinic insertion and removal of long-term IUDs (Copper T/Mirena).</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Direct Contact support:</strong> Directly reachable via WhatsApp for follow-up concerns or pill-schedule questions.</span>
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
