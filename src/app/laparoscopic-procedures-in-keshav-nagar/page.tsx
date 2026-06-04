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
  Crosshair,
  Calendar, 
  Clock, 
  ClipboardList,
  Shield,
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: "Best Laparoscopic Gynecologist Specialist in Keshav Nagar & Mundhwa | Dr. Poonam's Women's Clinic",
  description: "Advanced laparoscopic keyhole surgeries (cystectomy, myomectomy, endometriosis excision) under Dr. Poonam at Dr. Poonam's Women's Clinic in Keshav Nagar & Mundhwa, Pune. Safe, keyhole procedures.",
  alternates: {
    canonical: '/laparoscopic-procedures-in-keshav-nagar/',
  }
};

export default function LaparoscopicProceduresPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Laparoscopic Procedures' },
  ];

  const treatableConditions = [
    { 
      title: "Ovarian Cysts (Cystectomy)", 
      description: "Safely removing ovarian cysts (benign, dermoid, or endometriotic) using precision microscopic tools to preserve healthy ovarian tissues and safeguard your fertility pathway.", 
      icon: <Crosshair className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Uterine Fibroids (Myomectomy)", 
      description: "Extracting symptomatic uterine fibroids causing pelvic pressure or heavy bleeding through tiny keyhole incisions, restoring uterine wall integrity before pregnancy.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Endometriosis Excision", 
      description: "Identifying and carefully vaporizing or excising painful endometrial tissue implants in the pelvic cavity to treat chronic menstrual soreness and enhance natural conception.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Diagnostic Fertility Check", 
      description: "Conducting diagnostic laparoscopy with a blue dye test (chromotubation) to visually audit the fallopian tubes, pelvic peritoneum, and ovaries for unexplained infertility.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    }
  ];

  const prepGuidelines = [
    { 
      title: "Pre-Surgical Lab Profile", 
      description: "Completing mandatory blood profiles, clotting screens, viral tests, and an ECG checkup to confirm physical fitness for general anesthesia.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Fasting & Bowel Preparation", 
      description: "Adhering to strict fasting (no food or liquids) for 6–8 hours prior to surgery, along with gentle clinical bowel clearing to ensure safe abdominal viewing.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Post-Op Rest & Ambulation", 
      description: "Resting for 3 to 7 days, maintaining clean keyhole dressings, and engaging in early light walking to dissipate trapped carbon dioxide gas quickly.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const processTimeline = [
    {
      title: 'Step 1: Anesthesia & Tiny Port Entry',
      description: 'Under general anesthesia, the patient is completely asleep. A tiny 5-10mm keyhole incision is made, usually hidden inside the belly button.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Carbon Dioxide Gas Insufflation',
      description: 'Carbon dioxide is gently introduced to inflate the abdomen. This lifts the abdominal wall, creating a spacious, safe viewing area for the instruments.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 3: HD Camera & Scope Insertion',
      description: 'A laparoscope (a thin lighted rod with a high-definition video camera) is inserted, transmitting magnified, crystal-clear pelvic structures onto large monitors.',
      icon: <Crosshair className="w-5 h-5" />
    },
    {
      title: 'Step 4: Specialized Repair & Port Closure',
      description: 'Through 1-2 additional tiny side incisions, specialized instruments are used to remove cysts or repair tissues, followed by gas release and dissolvable stitches.',
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: 'What is laparoscopic surgery, and what are its advantages?',
      answer: 'Laparoscopic surgery (keyhole surgery) is a minimally invasive surgical technique that uses small abdominal incisions (5-10mm) and a camera. Advantages include significantly less pain, minimal scarring, lower infection rates, and much faster recovery compared to traditional open surgery.'
    },
    {
      question: 'What gynecological conditions can be treated using laparoscopy?',
      answer: 'Laparoscopy is commonly used to treat ovarian cysts (cystectomy), uterine fibroids (myomectomy), endometriosis, ectopic pregnancy, pelvic adhesions, diagnostic infertility checks, and hysterectomy.'
    },
    {
      question: 'What is the actual cost of a laparoscopic procedure in Pune?',
      answer: 'We maintain clear pricing transparency. A diagnostic laparoscopy and dye test ranges from ₹25,000 to ₹40,000. Operative laparoscopic procedures (such as keyhole ovarian cystectomy, myomectomy, or endometriosis excision) typically range from ₹60,000 to ₹1,20,000 depending on case complexity, hospital category, and the duration of stay required.'
    },
    {
      question: 'Why do patients experience shoulder pain after a keyhole surgery?',
      answer: 'During the procedure, carbon dioxide (CO2) gas is used to inflate the abdomen. Small amounts of trapped gas can irritate the diaphragmatic nerve, which shares pathway pathways with the shoulder. This pain is harmless and subsides in 24-48 hours.'
    },
    {
      question: 'How long is the recovery period after a laparoscopic procedure?',
      answer: 'Most patients go home the same day or the next morning. Initial recovery takes 3 to 7 days, and you can generally resume light work within a week. Full internal tissue healing occurs in about 2 to 3 weeks.'
    },
    {
      question: 'How do I book an appointment, and is the clinic open for emergency walk-ins?',
      answer: 'Dr. Poonam\'s Women\'s Clinic operates strictly by prior appointment during dedicated morning and evening timings. This is a private, single-doctor clinical setup designed to provide unhurried consultations and maintain a highly sterilized clinical environment, rather than a 24/7 emergency walk-in model. Contact us directly to book a consult.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Laparoscopic Procedures" breadcrumbs={breadcrumbs} bgImage="/images/fertility-header.webp" />

        {/* === SECTION 1: What is Laparoscopic Procedures? (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[926/418] w-full max-h-[420px] max-w-[926px] mx-auto bg-white p-4 border border-black/[0.03] group">
                <Image 
                  src="/images/laparoscopy-overview.webp" 
                  alt="High definition laparoscopy camera console and keyhole surgery port visualization" 
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Laparoscopic Procedures?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  <strong>Laparoscopy (Keyhole Surgery)</strong> is the modern clinical standard for pelvic and gynecological surgeries. By using specialized instruments and a high-definition camera system inserted through tiny incisions, it allows gynecologists to perform complex surgeries with absolute precision, avoiding large abdominal cuts, reducing postoperative pain, and accelerating recovery.
                </p>
                <p>
                  At <strong>Dr. Poonam's Women's Clinic</strong>, recognized as a premier center for gynecological wellness and family planning in Keshav Nagar and Mundhwa, Pune, we perform advanced gynecological laparoscopy. Dr. Poonam brings over a decade of clinical and surgical expertise to treat ovarian cysts, fibroids, endometriosis, and conduct diagnostic checks for fertility in sterile, state-of-the-art operating suites.
                </p>
                <p>
                  Because we run a focused, single-doctor private clinic rather than a busy corporate hospital, your surgical planning and counseling are conducted personally by Dr. Poonam. We operate by prior appointments to ensure that every patient receives absolute privacy, meticulous attention, and clinical accuracy in a highly sterilized clinical environment.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Laparoscopy Consultation Today
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

        {/* === SECTION 2: Laparoscopic Surgery vs. Traditional Open Surgery: Method Comparison (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Laparoscopic vs. Traditional Open Surgery Comparison" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Whenever medically feasible, Dr. Poonam prioritizes minimally invasive keyhole procedures over open surgery to secure faster healing and fewer clinical risks.
            </p>

            {/* Custom Comparison layout styled exactly like the comparison table in PCOD section */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              {/* Vertical dotted line with VS circle in the middle (Desktop Only) */}
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-[#E2E8F0] z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center font-bold text-[#C0354A] shadow-sm z-10">
                  VS
                </div>
              </div>

              {/* Left Card: Laparoscopic Surgery */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Laparoscopic (Keyhole) Surgery</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Minimally Invasive. Fast Recovery.</p>
                </div>
                
                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Incision Size</span>
                      <p className="text-text text-[14px] leading-relaxed">Tiny keyhole cuts measuring 0.5 cm to 1 cm in size.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Hospital Admission</span>
                      <p className="text-text text-[14px] leading-relaxed">Daycare procedure or brief inpatient stay (usually under 24 hours).</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Post-Op Pain</span>
                      <p className="text-text text-[14px] leading-relaxed">Significantly lower pain level; minimal muscle or tissue disruption.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Visible Scarring</span>
                      <p className="text-text text-[14px] leading-relaxed">Minimal, dot-like scars that fade and become barely visible over time.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Recovery Timeline</span>
                      <p className="text-text text-[14px] leading-relaxed">Return to light household activities and office work within 1 to 2 weeks.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Traditional Open Surgery */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Traditional Open Surgery</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Invasive Approach. Longer Healing.</p>
                </div>

                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Incision Size</span>
                      <p className="text-text text-[14px] leading-relaxed">Requires a large 10 cm to 15 cm incision across the lower abdomen.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Hospital Admission</span>
                      <p className="text-text text-[14px] leading-relaxed">Requires 3 to 5 days of inpatient admission for pain monitoring.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Post-Op Pain</span>
                      <p className="text-text text-[14px] leading-relaxed">Higher pain levels; requires intravenous analgesics and muscle relaxants.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Visible Scarring</span>
                      <p className="text-text text-[14px] leading-relaxed">Leaves a permanent, prominent linear scar across the abdominal wall.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Recovery Timeline</span>
                      <p className="text-text text-[14px] leading-relaxed">Requires 4 to 6 weeks of resting for muscle layer healing and strength.</p>
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

        {/* === SECTION 3: Gynecological Conditions Treated via Laparoscopy (Cream bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Gynecological Conditions Treated via Laparoscopy" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              This minimally invasive technique is highly versatile, providing both diagnostic visualization and therapeutic surgical solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {treatableConditions.map((condition, index) => {
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

        {/* === SECTION 4: Our Pre-Surgery Preparation & Safe Guidelines (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Our Pre-Surgery Preparation & Safe Guidelines" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Proper pre-operative alignment guarantees a smooth surgical process and lays the groundwork for rapid post-operative healing.
            </p>
            
            {/* Bento image banner - exact 838*418 dimensions */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/laparoscopy-prep.webp" 
                alt="Safe recovery and pre-surgical guidelines for Laparoscopic procedures" 
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

        {/* === SECTION 5: The Surgical Keyhole Journey (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="The Surgical Keyhole Journey" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                Understanding the stages of keyhole surgery helps alleviate patient anxiety. We ensure complete clinical accuracy at every step.
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

        {/* === SECTION 6: Why Choose Dr. Poonam's Women's Clinic for Laparoscopic Procedures? (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Why Choose Us */}
            <div className="bg-[#151722] text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Choose Dr. Poonam's Women's Clinic for Laparoscopic Procedures?
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
                      <strong className="block text-[16px] text-white">Senior Minimally Invasive Surgeon</strong>
                      <span className="text-white/80 text-[14px]">Over 10+ years of dedicated surgical experience successfully performing laparoscopic cystectomies, myomectomies, and tubal procedures.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Coordinated Advanced Hospital Theatres</strong>
                      <span className="text-white/80 text-[14px]">Dr. Poonam coordinates all surgical operations in leading tertiary centers with state-of-the-art high-definition laparoscopy towers and specialized instruments.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Prior-Appointment Private Consultation</strong>
                      <span className="text-white/80 text-[14px]">We maintain a single-doctor practice. Your surgical planning and post-op checkups are conducted strictly by prior appointment, ensuring absolute confidentiality and zero crowding.</span>
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
