import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import ComparisonCards from '@/components/ui/ComparisonCards';
import HorizontalScrollCards from '@/components/ui/HorizontalScrollCards';
import CircularProcess from '@/components/ui/CircularProcess';
import { ShieldCheck, CheckCircle, AlertTriangle, Scale, Activity } from 'lucide-react';

export const metadata = {
  title: "MTP, D & E Services (Confidential Abortion) in Keshav Nagar Pune",
  description: "Safe, legal, and highly confidential Medical Termination of Pregnancy (MTP) and Dilation & Evacuation (D&E) services by Dr. Poonam. Serving patients in Keshav Nagar, Mundhwa, and Kharadi.",
  alternates: {
    canonical: '/mtp-d-e-services-in-keshav-nagar/',
  }
};

export default function MtpDePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'MTP, D & E Services' },
  ];

  const comparisonData: [any, any] = [
    {
      title: "Medical Abortion (MTP Pills)",
      theme: "secondary",
      items: [
        { feature: "Timeframe", isAvailable: "Applicable only up to 7 weeks of pregnancy." },
        { feature: "Procedure Type", isAvailable: "Non-surgical. Involves taking prescribed oral medication." },
        { feature: "Process", isAvailable: "Mimics a heavy menstrual period/miscarriage at home." },
        { feature: "Anesthesia", isAvailable: "No anesthesia required. Painkillers are prescribed." },
        { feature: "Success Rate", isAvailable: "Highly effective, but requires an ultrasound to confirm." }
      ]
    },
    {
      title: "Surgical Abortion (D&E / Suction)",
      theme: "primary",
      items: [
        { feature: "Timeframe", isAvailable: "Applicable up to 12 weeks (first trimester)." },
        { feature: "Procedure Type", isAvailable: "Minor, safe surgical procedure." },
        { feature: "Process", isAvailable: "Quick clinical evacuation taking 10-15 minutes." },
        { feature: "Anesthesia", isAvailable: "Performed under local block or light sedation." },
        { feature: "Success Rate", isAvailable: "100% effective. Uterus is completely cleared." }
      ]
    }
  ];

  const safetyLegalCards = [
    { title: "Strictly Confidential", description: "Your privacy is our utmost priority. Medical records are kept strictly confidential and only discussed privately with you.", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "Legally Compliant", description: "We operate fully within the framework of the Medical Termination of Pregnancy (MTP) Act of India.", icon: <Scale className="w-5 h-5" /> },
    { title: "No OTC Pills", description: "Never take abortion pills bought over the counter. They can lead to severe, life-threatening internal bleeding without medical supervision.", icon: <AlertTriangle className="w-5 h-5" /> },
    { title: "Ectopic Pregnancy Check", description: "A pre-procedure ultrasound is mandatory to ensure the pregnancy isn't in the fallopian tubes, which would require emergency surgery.", icon: <Activity className="w-5 h-5" /> }
  ];

  const protocolTimeline = [
    {
      title: 'Private Consultation & Ultrasound',
      description: 'You will have a private, non-judgmental consultation with Dr. Poonam. A quick ultrasound is performed to confirm the exact gestational age and rule out an ectopic pregnancy.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Method Selection & Consent',
      description: 'Based on the ultrasound results and your medical history, Dr. Poonam will safely guide you to choose either the medical (pill) route or the surgical (D&E) route. Legal consent forms are signed.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Safe Procedure Execution',
      description: 'If taking pills, you will be given a precise dosage plan. If undergoing D&E, it will be performed in a sterile setting under light sedation to ensure absolute pain control.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Follow-up Evaluation',
      description: 'A mandatory follow-up visit and ultrasound are scheduled two weeks later to ensure the uterus is completely empty and recovering well.',
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  const recoverySteps = [
    { title: "Immediate Rest", description: "Rest for 24-48 hours. Expect cramping and bleeding heavier than a normal period." },
    { title: "Infection Prevention", description: "Do not use tampons, menstrual cups, or engage in sexual intercourse for at least 2 weeks." },
    { title: "Warning Signs", description: "Contact us immediately if you soak more than 2 pads an hour, have a high fever, or severe abdominal pain." }
  ];

  const faqs = [
    {
      question: 'What is the legal limit for pregnancy termination (MTP) in India?',
      answer: 'According to the Medical Termination of Pregnancy (MTP) Act of India, pregnancy can be legally terminated up to 20 weeks under specified criteria (and up to 24 weeks for specific vulnerable categories), under the advice of registered gynecologists at government-approved facilities.'
    },
    {
      question: 'What is the difference between Medical Abortion and Surgical Abortion (D&E)?',
      answer: 'Medical abortion utilizes prescribed medications (mifepristone and misoprostol) to induce uterine contractions, suitable for early pregnancies (up to 7 weeks). Surgical abortion (Dilation and Evacuation or vacuum aspiration) is a quick clinical procedure to remove uterine tissue, suitable for pregnancies up to 12 weeks or in cases of incomplete miscarriage.'
    },
    {
      question: 'Why is taking over-the-counter abortion pills highly dangerous?',
      answer: 'Over-the-counter pills carry high risks of severe uncontrolled bleeding, incomplete expulsion of pregnancy tissues (leading to severe pelvic infection), or failure to identify an ectopic pregnancy, which can rupture and cause life-threatening internal bleeding.'
    },
    {
      question: 'What recovery precautions should be taken after an MTP or D&E?',
      answer: 'Avoid insertive vaginal products (tampons, cups) and sexual intercourse for 2 weeks to prevent infection. Rest for a few days, take prescribed antibiotics, and complete the follow-up ultrasound scan to confirm the uterus is entirely clear.'
    },
    {
      question: 'Is surgical abortion (D&E) safe, and how long does it take?',
      answer: 'Yes, Dilation and Evacuation (D&E) is an extremely safe, routine minor surgical procedure when performed by a registered gynaecologist. The active clinical procedure takes approximately 10 to 15 minutes, and patients are usually discharged on the same day after a brief recovery observation.'
    },
    {
      question: 'How do I find a legal and private abortion doctor near me in Keshav Nagar, Pune?',
      answer: 'If you are looking for a legal, safe, and private abortion clinic near me or MTP doctor near me around the area of Keshav Nagar, Mundhwa, or Kharadi, Dr Poonam’s Women’s Clinic is a certified center. We prioritize complete patient privacy, legal consent, and compassionate medical care.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="MTP, D & E Services" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/mtp-d-e-services-in-keshav-nagar/" />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/mtp-de.webp" 
                      alt="Prescribed Gynecology Care Pills and Patient File for Confidential MTP Services" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <AnimatedHeading 
                    text="What is MTP, D & E Services?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
                  />
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Medical Termination of Pregnancy (MTP) and Dilation & Evacuation (D&E) are safe, clinically approved medical procedures used to terminate an unplanned pregnancy or clear retained tissues after an incomplete miscarriage. Undergoing these procedures under registered medical supervision is critical to protecting maternal health and preserving future fertility.
                    </p>
                    <p>
                      At Dr Poonam's Women's Clinic in Keshav Nagar, Pune, we offer strictly confidential, highly compassionate, and legally compliant abortion services in accordance with the MTP Act of India. Dr. Poonam provides thorough, non-judgmental pre-procedure counseling, sterile procedures, and attentive post-operative support. If you reside in nearby Mundhwa or Kharadi and are seeking a private, legal gynaecology clinic, our center provides safe and trusted medical care.
                    </p>
                  </div>
                </div>

                {/* Comparison Section */}
                <div>
                  <AnimatedHeading 
                    text="Medical vs. Surgical Termination" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[30px] text-[15px] leading-relaxed">
                    Depending on your gestational age (how far along the pregnancy is), Dr. Poonam will recommend one of the two safest, legally approved methods.
                  </p>
                  <ComparisonCards columns={comparisonData} />
                </div>

                {/* Horizontal Scroll Cards for Safety/Legal */}
                <div className="w-[calc(100vw-32px)] lg:w-full -ml-4 lg:ml-0 px-4 lg:px-0">
                  <HorizontalScrollCards 
                    title="Our Commitment to Safety & Privacy" 
                    subtitle="Your health and confidentiality are our highest priorities."
                    cards={safetyLegalCards} 
                  />
                </div>

                {/* Procedure Steps (Vertical Timeline) */}
                <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
                  <AnimatedHeading 
                    text="The Confidential Protocol" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                    We ensure you are fully informed and comfortable at every step of this sensitive process.
                  </p>
                  <VerticalTimeline items={protocolTimeline} />
                </div>

                {/* Recovery Process (Circular Process) */}
                <div>
                  <CircularProcess 
                    title="Post-Procedure Care Guidelines" 
                    steps={recoverySteps} 
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
                        <span><strong>100% Confidentiality:</strong> Complete protection of patient privacy and medical records in a safe, non-judgmental space.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Approved Facility Standards:</strong> Medical protocols and approvals matching the strict guidelines of the Ministry of Health, India.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Attentive Post-Care:</strong> Immediate availability for post-operative concerns, pain control, and contraceptive counseling.</span>
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
