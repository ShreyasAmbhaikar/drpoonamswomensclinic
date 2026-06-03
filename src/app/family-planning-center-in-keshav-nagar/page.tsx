import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import ComparisonCards from '@/components/ui/ComparisonCards';
import HorizontalScrollCards from '@/components/ui/HorizontalScrollCards';
import CircularProcess from '@/components/ui/CircularProcess';
import { ShieldCheck, CheckCircle, Activity, Heart, Baby } from 'lucide-react';

export const metadata = {
  title: "Best Family Planning Center in Keshav Nagar Pune | Dr Poonam",
  description: "Compassionate, professional family planning clinic services by Dr. Poonam. Pre-pregnancy guidance, spacing options, and permanent solutions in Keshav Nagar, Magarpatta, and Mundhwa.",
  alternates: {
    canonical: '/family-planning-center-in-keshav-nagar/',
  }
};

export default function FamilyPlanningCenterPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Family Planning Center' },
  ];

  const comparisonData: [any, any] = [
    {
      title: "Temporary Spacing Methods",
      theme: "secondary",
      items: [
        { feature: "Goal", isAvailable: "Delaying pregnancy until you are ready." },
        { feature: "Reversibility", isAvailable: "100% reversible; fertility returns immediately." },
        { feature: "Options", isAvailable: "Oral pills, injections, condoms, Mirena/Copper T." },
        { feature: "Ideal For", isAvailable: "Couples planning to have children in the future." }
      ]
    },
    {
      title: "Permanent Sterilization",
      theme: "primary",
      items: [
        { feature: "Goal", isAvailable: "Permanent prevention of future pregnancies." },
        { feature: "Reversibility", isAvailable: "Considered irreversible (requires complex surgery to undo)." },
        { feature: "Options", isAvailable: "Female Tubectomy (tubal ligation) or Male Vasectomy." },
        { feature: "Ideal For", isAvailable: "Couples who are certain their family is complete." }
      ]
    }
  ];

  const subServices = [
    { title: "Pregnancy Spacing", description: "Helping couples design optimal timelines between pregnancies to ensure physical recovery.", icon: <Activity className="w-5 h-5" /> },
    { title: "LARC Insertion", description: "Hassle-free, highly effective in-clinic placement of intrauterine devices like Copper T or Mirena.", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "Pre-conception Screening", description: "Blood panels and physiological checks to ensure your body is fully ready for a healthy pregnancy.", icon: <Heart className="w-5 h-5" /> },
    { title: "Permanent Solutions", description: "Expert surgical coordination and counseling for permanent options like female tubectomy.", icon: <CheckCircle className="w-5 h-5" /> }
  ];

  const careProtocol = [
    {
      title: 'Private Goal Discussion',
      description: 'A comfortable, supportive meeting to explore your family goals, career timelines, and personal health concerns in a completely private setting.',
      icon: <Heart className="w-5 h-5" />
    },
    {
      title: 'Medical Evaluation',
      description: 'Evaluating your cycle regularity, blood pressure, hormonal status, and general health to rule out methods that may carry risks.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Method Selection',
      description: 'Dr. Poonam explains the success rates and side effects of the best options, empowering you to make a confident decision.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Care Execution',
      description: 'Implementing the chosen method, whether it is prescribing daily medication, performing an IUD insertion, or starting pre-pregnancy vitamins.',
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  const spacingBenefits = [
    { title: "Maternal Recovery", description: "Waiting 18-24 months allows the mother's body to replenish critical iron and folate stores." },
    { title: "Lower Infant Risks", description: "Proper spacing significantly reduces the risk of preterm birth and low birth weight." },
    { title: "Family Harmony", description: "Allows parents to devote dedicated time to the older child and manage household finances better." }
  ];

  const faqs = [
    {
      question: 'What services does a family planning center provide?',
      answer: 'A family planning center provides comprehensive services including contraceptive counseling and distribution, insertion and removal of long-acting devices (IUDs), fertility awareness education, pre-conception health screenings, spacing advice, and counseling on permanent sterilization.'
    },
    {
      question: 'How long should we space pregnancies for maternal and baby health?',
      answer: 'Medical guidelines generally recommend waiting at least 18 to 24 months (but less than 5 years) after a live birth before attempting another pregnancy. This timeline allows the mother\'s body to replenish critical nutrient stores (such as iron and folate) and recover completely, reducing the risk of preterm birth or low birth weight.'
    },
    {
      question: 'What are permanent family planning (sterilization) options for women?',
      answer: 'The primary permanent contraceptive option for women is tubal ligation (commonly known as having your tubes tied). This is a surgical procedure that blocks, cuts, or seals the fallopian tubes to permanently prevent eggs from reaching the uterus. It is highly effective and intended to be irreversible.'
    },
    {
      question: 'Can family planning methods be reversed if we decide to have another baby?',
      answer: 'Yes, temporary family planning options are completely reversible. Devices like IUDs can be easily removed by Dr. Poonam in the clinic, and hormonal injections or pills can be discontinued. Once stopped, your natural menstrual cycle and fertility will return, allowing you to plan a pregnancy.'
    },
    {
      question: 'What is the role of pre-conception checks in family planning?',
      answer: 'Pre-conception checks are vital to prepare your body for a safe pregnancy. They involve checking for conditions like anemia, thyroid disorders, or rubella immunity, optimizing pre-pregnancy nutrition (like starting folic acid), and identifying any medical risks to ensure a healthy mother and baby.'
    },
    {
      question: 'How does age affect family planning options and success rates?',
      answer: 'A woman\'s fertility naturally begins to decline in her early 30s and decreases more rapidly after age 35. Age influences family planning decisions, such as when to start trying, the need for early prenatal genetic screenings, and selecting appropriate contraceptive spacing methods.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Family Planning Center" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/family-planning-center-in-keshav-nagar/" />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/service-family-planning.webp" 
                      alt="Doctor explaining family planning spacing options with anatomical uterus model" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <AnimatedHeading 
                    text="What is Family Planning Center?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
                  />
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Family planning is a fundamental pillar of modern women's healthcare and household health. It involves making informed decisions about if, when, and how many children to have, ensuring that pregnancy occurs under optimal physical, emotional, and financial conditions. By empowering couples with knowledge and medical options, family planning reduces maternal and infant health risks.
                    </p>
                    <p>
                      At Dr Poonam’s Women’s Clinic in Keshav Nagar, Pune, we provide supportive, professional, and non-judgmental family planning guidance. Dr. Poonam works closely with each couple, evaluating maternal health parameters, explaining various spacing methods, and providing top-tier pre-pregnancy support. If you reside in Magarpatta or Mundhwa and are looking for a trusted family planning clinic near me, we are dedicated to helping you plan your family's future safely.
                    </p>
                  </div>
                </div>

                {/* Comparison Section */}
                <div>
                  <AnimatedHeading 
                    text="Spacing vs. Sterilization" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[30px] text-[15px] leading-relaxed">
                    Depending on where you are in your family journey, we help you choose between temporary delays and permanent solutions.
                  </p>
                  <ComparisonCards columns={comparisonData} />
                </div>

                {/* Horizontal Scroll Cards for Services */}
                <div className="w-[calc(100vw-32px)] lg:w-full -ml-4 lg:ml-0 px-4 lg:px-0">
                  <HorizontalScrollCards 
                    title="Comprehensive Planning Services" 
                    subtitle="We offer a complete range of solutions designed to support your family goals and health needs."
                    cards={subServices} 
                  />
                </div>

                {/* Protocol (Vertical Timeline) */}
                <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
                  <AnimatedHeading 
                    text="Our Step-by-Step Consultation" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                    We ensure you feel completely comfortable and fully informed before making any decisions about your body.
                  </p>
                  <VerticalTimeline items={careProtocol} />
                </div>

                {/* Spacing Benefits (Circular Process) */}
                <div>
                  <CircularProcess 
                    title="The Benefits of Pregnancy Spacing" 
                    steps={spacingBenefits} 
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
                        <span><strong>Empathetic & Supportive:</strong> A warm, private setting that deeply respects your choices and cultural background.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Clinical Precision:</strong> Safe and highly experienced insertion of modern, long-term Copper T and Mirena IUD devices.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Accessible Contact:</strong> Directly contact Dr. Poonam via call or WhatsApp for emergency consultations or queries.</span>
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
