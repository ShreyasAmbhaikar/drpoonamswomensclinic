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
  AlertTriangle,
  Calendar, 
  Clock, 
  ClipboardList,
  Shield,
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: "Best High Risk Pregnancy Management in Keshav Nagar & Mundhwa | Dr. Poonam's Women's Clinic",
  description: "Specialized, safe High Risk Pregnancy Management under Dr. Poonam at Dr. Poonam's Women's Clinic in Keshav Nagar & Mundhwa, Pune. Meticulous care for diabetes, high BP, and twins. Book today.",
  alternates: {
    canonical: '/high-risk-pregnancy-management-in-keshav-nagar/',
  }
};

export default function HighRiskPregnancyPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'High Risk Pregnancy Management' },
  ];

  const highRiskConditions = [
    { 
      title: "Gestational Diabetes Control", 
      description: "Aggressive blood glucose mapping, customized diabetic diet planning, physical activity regimes, and medication/insulin support to prevent macrosomia (oversized baby).", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Gestational Hypertension & Preeclampsia", 
      description: "Strict surveillance of rising maternal blood pressure, urine protein screenings, and safe pregnancy-compatible medications to prevent placental abruption.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Multiple Gestations (Twins/Triplets)", 
      description: "Specialized nutritional support, frequent ultrasound monitoring of inter-twin weights, amniotic fluid audits, and pre-term labor prevention protocols.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Recurrent Pregnancy Loss & Past LSCS", 
      description: "Managing pregnancies with a history of recurrent miscarriages, cervical incompetence (offering cerclage), or planning VBAC (Vaginal Birth After Caesarean) vs. repeat LSCS.", 
      icon: <Sparkles className="w-6 h-6 text-accent" /> 
    }
  ];

  const prepGuidelines = [
    { 
      title: "Self-Monitoring Log Integration", 
      description: "Consistent home charting of blood pressure (BP) levels or daily capillary blood glucose (glucometer checkups) to build a detailed log for review.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Doppler & Fetal Surveillance Plan", 
      description: "Scheduling routine growth scans, cervical length assessments, and umbilical artery Doppler flows to track oxygen and nutrient delivery to the baby.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Hospital Admission Coordination", 
      description: "Pre-planning hospital admissions at our fully equipped partner facilities, coordinating neonatologists (NICU team), and setting up delivery protocols.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const managementTimeline = [
    {
      title: 'Step 1: Early Risk Profiling & Screening',
      description: 'A detailed medical history review, baseline laboratory screens, and early ultrasound check at the first consult with Dr. Poonam to catalog high-risk variables.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Placental & Fetal Surveillance',
      description: 'Scheduling frequent high-resolution target scans and Doppler flow checks to verify that the placenta is functioning properly and baby growth is normal.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 3: Therapeutic Stabilization',
      description: 'Prescribing safe medications to keep blood pressure stable, managing gestational sugars, and conducting Cardiotocography (CTG) checks to rule out fetal distress.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 4: Planned Hospitalization & Safe Delivery',
      description: 'Determining the optimal delivery timeline (weeks 37-39) to protect both mother and child. Coordinated deliveries are personally conducted by Dr. Poonam at affiliated hospitals.',
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: 'What defines a pregnancy as high-risk and how is it managed?',
      answer: 'A pregnancy is defined as high-risk if maternal or fetal conditions threaten health safety. Risk factors include pre-existing illnesses (diabetes, high BP, thyroid disorders), pregnancy-induced complications (gestational diabetes, preeclampsia, placenta previa), twin/multiple pregnancies, advanced maternal age (over 35), or past miscarriages. Management involves more frequent checkups, targeted scans, sugar/BP logs, and close fetal surveillance.'
    },
    {
      question: 'Can a high-risk pregnancy still culminate in a normal delivery?',
      answer: 'Yes, absolutely! Having a high-risk classification does not mean a C-section (LSCS) is mandatory. Under Dr. Poonam\'s meticulous clinical supervision, many patients with gestational diabetes, controlled hypertension, or twin pregnancies deliver via a healthy, safe normal vaginal birth.'
    },
    {
      question: 'What is the actual, genuine cost of high-risk pregnancy management in Pune?',
      answer: 'At Dr. Poonam\'s Women\'s Clinic, we practice complete transparency. A high-risk pregnancy consultation is ₹600. Detailed growth and umbilical artery Doppler scans range from ₹2,500 to ₹4,500. Fetal Cardiotocography (CTG) monitoring is ₹800 per session. Delivery packages at our affiliated hospital partners in Pune typically range from ₹35,000 to ₹55,000 for a normal vaginal delivery, and ₹50,000 to ₹75,000 for a Caesarean section (LSCS) depending on room choices.'
    },
    {
      question: 'What warning signs in a high-risk pregnancy require immediate medical attention?',
      answer: 'You must seek immediate clinical help if you experience vaginal bleeding or spotting, sudden leakage of amniotic fluid, persistent severe headaches accompanied by blurred vision, sudden swelling of the hands or face (signs of preeclampsia), severe abdominal cramping, or a noticeable decrease in baby movement counts after week 28.'
    },
    {
      question: 'How is gestational diabetes managed to prevent complications?',
      answer: 'Gestational diabetes is managed through a customized diabetic diet chart, routine pelvic exercise plans, self-monitoring of blood sugar levels using a home glucometer, and safe oral medications or insulin therapy if dietary measures alone are insufficient to maintain target sugar ranges.'
    },
    {
      question: 'Do you offer 24/7 emergency walk-in maternity services at the clinic?',
      answer: 'Dr. Poonam\'s Women\'s Clinic operates strictly by prior appointment during dedicated morning and evening hours to provide a quiet, highly sterilized, and unhurried clinical experience. We are not a 24/7 walk-in emergency hospital. For planned deliveries and active labor, patients are admitted directly to our affiliated tertiary care hospital facilities in Pune, where Dr. Poonam personally conducts the delivery.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="High Risk Pregnancy Care" breadcrumbs={breadcrumbs} bgImage="/images/maternity_header.webp" />

        {/* === SECTION 1: What is High Risk Pregnancy Management? (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[926/418] w-full max-h-[420px] max-w-[926px] mx-auto bg-white p-4 border border-black/[0.03] group">
                <Image 
                  src="/images/high-risk-overview.webp" 
                  alt="Realistic 3D medical illustration showing twin gestation in separate amniotic sacs within the uterus" 
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is High Risk Pregnancy Management?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  <strong>High Risk Pregnancy Management</strong> involves specialized clinical monitoring, diagnostic screenings, and therapeutic protocols tailored to manage maternal or fetal complications during gestation. Pre-existing health conditions like diabetes and high blood pressure, or pregnancy-related conditions like gestational diabetes, preeclampsia, and twin pregnancies, require meticulous care to protect both mother and child.
                </p>
                <p>
                  At <strong>Dr. Poonam's Women's Clinic</strong>, the leading center for comprehensive obstetrics and hormonal care in Keshav Nagar and Mundhwa, Pune, we provide expert high-risk pregnancy protocols. Dr. Poonam brings over a decade of clinical experience in managing complicated pregnancies, providing patient-centric, evidence-based care to guide couples safely to parenthood.
                </p>
                <p>
                  Our clinic is run single-handedly by Dr. Poonam, guaranteeing that you receive direct, personal medical supervision at every consultation without delegation. We coordinate checkups strictly by prior appointment during dedicated morning and evening timings, maintaining a quiet, highly sterilized environment and ensuring zero waiting room delays.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your High-Risk Assessment Today
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
              text="Routine vs. High-Risk Pregnancy Care Comparison" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              A high-risk pregnancy classification simply means that your pregnancy requires extra monitoring, specialized scans, and customized safety paths.
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
                      <span className="font-bold text-primary text-[15px] mb-1 block">Antenatal Monitoring</span>
                      <p className="text-text text-[14px] leading-relaxed">Routine prenatal checkups, standard weight, and vital tracking.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Scan Frequency</span>
                      <p className="text-text text-[14px] leading-relaxed">Standard 3 to 4 major scans: dating, NT, anomaly, and late growth check.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Doctor Visits</span>
                      <p className="text-text text-[14px] leading-relaxed">Once a month up to week 28, bi-weekly up to week 36, then weekly.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Delivery Preparation</span>
                      <p className="text-text text-[14px] leading-relaxed">Aims for a normal vaginal delivery with natural labor exercises.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Postpartum Needs</span>
                      <p className="text-text text-[14px] leading-relaxed">Routine 6-week recovery check and newborn breastfeeding coaching.</p>
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
                      <span className="font-bold text-primary text-[15px] mb-1 block">Antenatal Monitoring</span>
                      <p className="text-text text-[14px] leading-relaxed">Vigilant mapping of blood pressure, blood glucose, fetal Doppler, and cervical lengths.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Scan Frequency</span>
                      <p className="text-text text-[14px] leading-relaxed">Frequent growth and umbilical artery Doppler scans to check baby blood flows.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Doctor Visits</span>
                      <p className="text-text text-[14px] leading-relaxed">More frequent visits; weekly or bi-weekly starting much earlier in gestation.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Delivery Preparation</span>
                      <p className="text-text text-[14px] leading-relaxed">Planned labor induction or C-section at equipped tertiary hospitals.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Postpartum Needs</span>
                      <p className="text-text text-[14px] leading-relaxed">Specialized surgical wound checks, metabolic tracking, or BP control.</p>
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

        {/* === SECTION 3: High-Risk Conditions We Manage (Cream bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="High-Risk Conditions We Manage" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Our clinical protocol provides dedicated surveillance and personalized therapies to protect mothers facing the following high-risk factors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {highRiskConditions.map((condition, index) => {
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
                        {condition.icon}
                      </div>
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug`}>
                        {condition.title}
                      </h3>
                      <p className={`${style.descText} text-[14px] leading-relaxed`}>
                        {condition.description}
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
              Managing a high-risk pregnancy successfully requires structured clinical scheduling, home vitals logs, and advanced fetal scans.
            </p>
            
            {/* Bento image banner - exact 838*418 dimensions */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/high-risk-prep.webp" 
                alt="High-resolution Cardiotocography CTG monitoring display showing fetal heart rate patterns" 
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

        {/* === SECTION 5: Our High-Risk Management Protocol Step-by-Step (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="Our High-Risk Management Protocol" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                We follow a rigorous, step-by-step surveillance protocol to preempt complications, support fetal growth, and coordinate deliveries safely.
              </p>
              <VerticalTimeline items={managementTimeline} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 5 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 6: Why Choose Dr. Poonam's Women's Clinic for High Risk Pregnancy Care? (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Why Choose Us */}
            <div className="bg-[#151722] text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Choose Dr. Poonam's Women's Clinic for High Risk Pregnancy Care?
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
                      <strong className="block text-[16px] text-white">Continuity & Direct Access to the Specialist</strong>
                      <span className="text-white/80 text-[14px]">You consult Dr. Poonam personally at every visit. Registered high-risk mothers get direct contact lines for timely clinical guidance, avoiding delays.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Dedicated Prior-Appointment Schedule</strong>
                      <span className="text-white/80 text-[14px]">We coordinate consultations strictly by prior appointment during dedicated hours. This keeps wait times short and limits exposure in a highly sterilized lobby.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">NICU & Multi-Specialty Support Network</strong>
                      <span className="text-white/80 text-[14px]">While outpatient diagnostics occur in our clinic, complex hospital stays and deliveries are conducted at leading fully-equipped tertiary care hospitals in Pune.</span>
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
