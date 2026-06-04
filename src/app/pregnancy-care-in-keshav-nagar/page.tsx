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
  Apple, 
  AlertTriangle,
  Calendar, 
  Clock, 
  ClipboardList,
  Shield,
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: "Best Pregnancy Care & Maternity Clinic in Keshav Nagar & Mundhwa | Dr. Poonam's Women's Clinic",
  description: "Get comprehensive pregnancy care (maternity care), routine prenatal scans, and personalized delivery planning under Dr. Poonam at Dr. Poonam's Women's Clinic in Keshav Nagar & Mundhwa, Pune. Book today.",
  alternates: {
    canonical: '/pregnancy-care-in-keshav-nagar/',
  }
};

export default function PregnancyCarePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Pregnancy Care (Maternity)' },
  ];

  const maternalIndicators = [
    { 
      title: "Hypertension & Preeclampsia Checks", 
      description: "Consistent blood pressure monitoring at every antenatal checkup to detect and manage preeclampsia early, keeping both mother and fetus safe.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Gestational Diabetes Screening", 
      description: "Routine oral glucose tolerance testing between weeks 24 and 28 to identify and manage gestational blood sugar levels via diet and medical support.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Fetal Growth & Fluid Tracking", 
      description: "Measuring fundal height, tracking amniotic fluid levels, and monitoring fetal movements to ensure healthy, uninterrupted baby development.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Iron & Hemoglobin Optimization", 
      description: "Frequent maternal blood profiling to prevent iron-deficiency anemia, supporting the healthy expansion of blood volume during pregnancy.", 
      icon: <Sparkles className="w-6 h-6 text-accent" /> 
    }
  ];

  const prepGuidelines = [
    { 
      title: "Prenatal Health Diary", 
      description: "Documenting pregnancy symptoms, dietary changes, and tracking kick counts after week 28 to keep a close log for your routine checkups.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Nutritional & Vitamin Schedule", 
      description: "Strictly adhering to prescribed folic acid, iron, calcium, and vitamin D3 supplements, paired with a balanced, protein-rich maternal diet.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Labor Preparation & Hospital Plan", 
      description: "Reviewing labor warning signs, planning hospital logistics, and coordinating your birth plan with Dr. Poonam well before your estimated due date.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const trimesterTimeline = [
    {
      title: 'First Trimester: Foundation Stage (Weeks 1-12)',
      description: 'Confirming pregnancy via pelvic scan, calculating the estimated due date (EDD), checking the early fetal heartbeat, and prescribing essential folic acid. We provide guidance to manage early symptoms like morning sickness, nausea, and fatigue.',
      icon: <Heart className="w-5 h-5" />
    },
    {
      title: 'Second Trimester: Growth Stage (Weeks 13-28)',
      description: 'The anomaly scan (fetal organ scan) is performed at weeks 18-20 to verify structural development. We conduct glucose tolerance checks for gestational diabetes and continue checking maternal blood pressure and iron stores.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Third Trimester: Fetal Maturation (Weeks 29-40)',
      description: 'Checkups increase to twice a month, then weekly. We track fetal positioning, amniotic fluid volume, and cervical changes. We finalize delivery plans, identify labor indicators, and prepare for a safe, natural birth.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Postpartum: Recovery & Lactation Support (Weeks 1-6)',
      description: 'Maternal recovery assessments, guidance on pelvic floor healing, mental wellness checks, and dedicated clinical support for successful breastfeeding and newborn care.',
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: 'What does comprehensive pregnancy care (maternity care) include?',
      answer: 'Pregnancy care at our clinic includes routine antenatal consultations, due date estimation, tracking fetal growth and heart rate, monitoring maternal vitals (blood pressure and blood sugar), prescribing essential prenatal supplements (folic acid, iron, and calcium), coordinating screening scans, and helping you prepare a personalized birth and delivery plan.'
    },
    {
      question: 'What is the standard schedule for routine prenatal checkups?',
      answer: 'For a low-risk, healthy pregnancy, we recommend one clinical visit every 4 weeks up to week 28 of pregnancy. From week 28 to week 36, consultations are scheduled every 2 weeks. From week 36 until your delivery, checks are scheduled weekly to monitor baby positioning and prepare for labor.'
    },
    {
      question: 'What is the actual, genuine cost of pregnancy care and delivery in Pune?',
      answer: 'At Dr. Poonam\'s Women\'s Clinic, we practice absolute transparency. Individual pregnancy consultations are ₹600. A standard trimester antenatal lab profile (CBC, blood group, blood sugar, urine routine, thyroid profile) ranges from ₹3,500 to ₹5,500. Standard delivery packages at our affiliated hospital partners in Pune typically range from ₹35,000 to ₹55,000 for normal vaginal deliveries, and ₹50,000 to ₹75,000 for a Caesarean section (LSCS) depending on the hospital category and room selections.'
    },
    {
      question: 'How do I contact the doctor in case of non-emergency queries or urgent symptoms?',
      answer: 'Our single-doctor practice offers a highly valued direct line of communication. Registered pregnancy care patients can connect directly with Dr. Poonam via phone or WhatsApp for quick clarifications. For urgent warning signs (like bleeding, severe cramping, high fever, or decreased baby movement), patients are guided directly to our affiliated multi-specialty hospital partner where Dr. Poonam coordinates immediate care.'
    },
    {
      question: 'What are the essential scans and screening tests required during pregnancy?',
      answer: 'Critical screens include: 1. Dating scan (weeks 6-8) to confirm heartbeat; 2. NT scan & Double Marker (weeks 11-13) for chromosomal screening; 3. Anomaly scan (weeks 18-20) to check organ development; 4. Oral Glucose Tolerance Test (weeks 24-28) to screen for diabetes; and 5. Fetal growth and Doppler scans in the third trimester to verify fluid levels and baby size.'
    },
    {
      question: 'Do you offer 24/7 emergency walk-in maternity services at the clinic?',
      answer: 'Dr. Poonam\'s Women\'s Clinic operates strictly by prior appointment during dedicated morning and evening hours to provide a quiet, highly sterilized, and unhurried clinical experience. We are not a 24/7 walk-in emergency hospital. For planned deliveries and active labor, patients are admitted directly to our affiliated tertiary care hospital facilities in Pune, where Dr. Poonam personally conducts the delivery.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Pregnancy Care (Maternity)" breadcrumbs={breadcrumbs} bgImage="/images/maternity_header.webp" />

        {/* === SECTION 1: What is Pregnancy Care (Maternity)? (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[926/418] w-full max-h-[420px] max-w-[926px] mx-auto bg-white p-4 border border-black/[0.03] group">
                <Image 
                  src="/images/pregnancy-overview.webp" 
                  alt="Detailed medical 3D illustration showing a healthy pregnant uterus with developing fetus in head-down position" 
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Pregnancy Care (Maternity)?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  <strong>Pregnancy Care (Maternity Care)</strong> represents the comprehensive clinical, emotional, and physical support provided to a mother-to-be from conception until postpartum. Routine antenatal care involves monitoring fetal development, checking maternal health indicators, coordinating screening scans, and formulating a safe delivery plan. Consistent monitoring is essential to prevent complications and support a healthy, natural pregnancy journey.
                </p>
                <p>
                  At <strong>Dr. Poonam's Women's Clinic</strong>, recognized as a leading center for comprehensive family planning and gynaecological care in Keshav Nagar and Mundhwa, Pune, we treat pregnancy as a deeply personal journey. Dr. Poonam provides individualized care, explaining every ultrasound finding and baseline test clearly, putting first-time mothers completely at ease.
                </p>
                <p>
                  Because we run a focused, single-doctor private clinic rather than a crowded corporate hospital, you receive direct, personal attention from Dr. Poonam at every visit. We operate strictly by prior appointment during dedicated morning and evening timings to maintain a quiet, highly sterilized clinical environment and eliminate long waiting room delays.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Prenatal Consultation Today
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

        {/* === SECTION 2: Routine vs. High-Risk Pregnancy Care: Method Comparison (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Low-Risk vs. High-Risk Pregnancy Care" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              We monitor both routine low-risk pregnancies and complex high-risk conditions with specialized clinical pathways, prioritizing maternal safety.
            </p>

            {/* Custom Comparison layout styled exactly like the comparison table in MTP / PCOD section */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              {/* Vertical dotted line with VS circle in the middle (Desktop Only) */}
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-[#E2E8F0] z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center font-bold text-[#C0354A] shadow-sm z-10">
                  VS
                </div>
              </div>

              {/* Left Card: Routine Pregnancy Care */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Routine Care (Low-Risk)</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Standard Monitoring. Fetal Milestones.</p>
                </div>
                
                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Clinical Focus</span>
                      <p className="text-text text-[14px] leading-relaxed">Tracking standard growth indicators, maternal vitals, and checking baby heartbeat.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Visit Frequency</span>
                      <p className="text-text text-[14px] leading-relaxed">Standard antenatal schedule: monthly up to week 28, bi-weekly up to week 36, then weekly.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Delivery Planning</span>
                      <p className="text-text text-[14px] leading-relaxed">Strong emphasis on normal vaginal birth, pelvic stamina preparation, and breathing cycles.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Diagnostic Profiling</span>
                      <p className="text-text text-[14px] leading-relaxed">Routine trimester lab checks, NT screenings, anomaly scan, and growth check scans.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Postpartum Recovery</span>
                      <p className="text-text text-[14px] leading-relaxed">Standard 6-week recovery checks, newborn care tracking, and basic lactation counseling.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: High-Risk Pregnancy Care */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">High-Risk Pregnancy Care</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Advanced Surveillance. Co-morbidities.</p>
                </div>

                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Clinical Focus</span>
                      <p className="text-text text-[14px] leading-relaxed">Close monitoring of pre-existing hypertension, gestational diabetes, twins, or history of LSCS.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Visit Frequency</span>
                      <p className="text-text text-[14px] leading-relaxed">Custom, highly frequent scheduling. Regular monitoring of fetal doppler flows and cervical length.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Delivery Planning</span>
                      <p className="text-text text-[14px] leading-relaxed">Carefully coordinated hospital births at equipped tertiary centers with NICU backup options.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Diagnostic Profiling</span>
                      <p className="text-text text-[14px] leading-relaxed">Frequent ultrasound scans, non-stress tests (NST), Doppler blood flows, and growth audits.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Postpartum Recovery</span>
                      <p className="text-text text-[14px] leading-relaxed">Specialized care for surgical wound healing, blood sugar tracking, and postpartum thyroid control.</p>
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

        {/* === SECTION 3: Key Maternal Health Indicators (Cream bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Key Maternal Health Indicators" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Regularly checking these vital biological markers during your pregnancy is essential to prevent complications and support healthy development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {maternalIndicators.map((indicator, index) => {
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
                        {indicator.icon}
                      </div>
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug`}>
                        {indicator.title}
                      </h3>
                      <p className={`${style.descText} text-[14px] leading-relaxed`}>
                        {indicator.description}
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
              Preparing step-by-step during each pregnancy milestone is key to ensuring maternal safety, supporting normal births, and promoting fetal development.
            </p>
            
            {/* Bento image banner - exact 838*418 dimensions */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/pregnancy-prep.webp" 
                alt="Sterile ultrasound monitor displaying fetal scan and antenatal checklist chart" 
                fill
                className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            
            {/* Grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prepGuidelines.map((card, index) => {
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

        {/* === SECTION 5: The Antenatal Care Journey Step-by-Step (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="The Antenatal Care Journey" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                Antenatal care is a step-by-step process built to guide and support mother and baby through every trimester milestones successfully.
              </p>
              <VerticalTimeline items={trimesterTimeline} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 5 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 6: Why Choose Dr. Poonam's Women's Clinic for Pregnancy Care (Maternity)? (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Why Choose Us */}
            <div className="bg-[#151722] text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Choose Dr. Poonam's Women's Clinic for Pregnancy Care (Maternity)?
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
                      <strong className="block text-[16px] text-white">Direct Medical Access & Continuity of Care</strong>
                      <span className="text-white/80 text-[14px]">Because we run a single-doctor practice, you consult Dr. Poonam at every visit. Our patients get direct phone guidance for non-emergency pregnancy questions.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Dedicated Prior-Appointment Schedule</strong>
                      <span className="text-white/80 text-[14px]">We coordinate all prenatal checks strictly by prior appointment during dedicated hours, preventing waiting-room crowds and securing a sterile space.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Affiliated Tertiary Hospital Networks</strong>
                      <span className="text-white/80 text-[14px]">While routine monitoring takes place in our clinic, planned deliveries are carried out at leading fully equipped hospitals in Pune, with Dr. Poonam conducting the birth.</span>
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
