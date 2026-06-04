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
  Scissors,
  Calendar, 
  Clock, 
  ClipboardList,
  Shield,
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: "Best Tubal Ligation & Reversal in Keshav Nagar & Mundhwa | Dr. Poonam's Women's Clinic",
  description: "Get laparoscopic tubal ligation (tubectomy) or microsurgical tubal reversal under Dr. Poonam at Dr. Poonam's Women's Clinic in Keshav Nagar & Mundhwa, Pune. Meticulous reconstructive care. Book today.",
  alternates: {
    canonical: '/tubal-ligation-reversal-in-keshav-nagar/',
  }
};

export default function TubalLigationPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Tubal Ligation & Reversal' },
  ];

  const reversalFactors = [
    { 
      title: "Original Sterilization Method", 
      description: "Tubes blocked with medical clips or rings suffer the least damage and are easiest to reverse. Tubes closed using electrocautery (burning) have lower success rates.", 
      icon: <Scissors className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Remaining Tube Length", 
      description: "For a successful microsurgical re-anastomosis, at least 4 cm of healthy, vascularized fallopian tube must remain on both sides to facilitate egg transport.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Maternal Age & Ovarian Reserve", 
      description: "Maternal age directly dictates egg quality. Reversal outcomes are highest in women under 35 with confirmed normal reserves (AMH) and ovulation.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Partner's Semen Parameters", 
      description: "Prior to undertaking a reversal, a complete semen analysis for the partner is mandatory to ensure natural conception is biologically feasible.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    }
  ];

  const prepGuidelines = [
    { 
      title: "Microsurgical Diagnostic Audit", 
      description: "Retrieving previous surgery records and conducting a hysterosalpingogram (HSG dye test) to measure remaining tube segments and verify uterine health.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Sterilized Anesthesia Mapping", 
      description: "Reversals require microsurgery under general anesthesia. Pre-anesthetic checkups (blood profiles, ECG, chest X-rays) are completed for physical fitness.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Uterine Healing & Recovery Plan", 
      description: "Following post-operative instructions: resting for 7-14 days at home, avoiding lifting objects, and maintaining clean, dry dressings over the mini-laparotomy cut.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const processTimeline = [
    {
      title: 'Step 1: Diagnostic Workup & Reversal Candidate Check',
      description: 'Reviewing past surgical notes, performing transvaginal ultrasounds, testing ovulation AMH levels, and conducting semen assays for the partner.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Anesthesia & Mini-Laparotomy Access',
      description: 'Under general anesthesia in a highly sterilized hospital environment, a small horizontal mini-laparotomy incision is made just above the pubic hairline.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 3: Microsurgical Re-anastomosis',
      description: 'Using high-magnification surgical scopes and ultra-fine sutures, Dr. Poonam carefully dissects scar tissue and re-aligns the inner layers of the fallopian tubes.',
      icon: <Scissors className="w-5 h-5" />
    },
    {
      title: 'Step 4: Dye Patency Verification & Closure',
      description: 'A blue dye is flushed through the fallopian tubes (chromotubation) to confirm they are open and leak-free, followed by precise layer-by-layer closure.',
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: 'What is tubal ligation and is it permanently effective?',
      answer: 'Tubal ligation (female sterilization or tubectomy) is a permanent contraception method where the fallopian tubes are clipped, tied, cut, or sealed. This blocks the egg\'s pathway, boasting an effectiveness rating exceeding 99% against future pregnancies.'
    },
    {
      question: 'How is a laparoscopic tubal ligation performed?',
      answer: 'Laparoscopic tubal ligation is a quick day-care procedure. Under general anesthesia, a small incision is made near the navel. A laparoscope is inserted, and the fallopian tubes are closed using medical clips, bands, or by cutting and tying them.'
    },
    {
      question: 'What are the pregnancy success rates after a tubal ligation reversal?',
      answer: 'Pregnancy success rates after tubal reversal (tubal re-anastomosis) range from 40% to 80%. Success depends heavily on the mother\'s age, the remaining length of healthy fallopian tubes, and the sterilization method originally used.'
    },
    {
      question: 'What is the actual cost of Tubal Ligation and Tubal Reversal in Pune?',
      answer: 'We maintain clear pricing transparency. A laparoscopic daycare tubal ligation (tubectomy) typically ranges from ₹25,000 to ₹40,000. An advanced microsurgical tubal ligation reversal (requiring hospital stay, microsurgical equipment, and general anesthesia) ranges from ₹70,000 to ₹1,20,000 depending on complexity.'
    },
    {
      question: 'How long does recovery take after a ligation or reversal surgery?',
      answer: 'For laparoscopic ligation, recovery takes 3 to 5 days, and most women return to light work within a week. Reversal surgery is more complex and may require 1 to 2 weeks of recovery time before returning to normal activities.'
    },
    {
      question: 'How do I schedule an appointment, and is the clinic open 24/7?',
      answer: 'Dr. Poonam\'s Women\'s Clinic operates strictly by prior appointment during dedicated morning and evening hours. This is a private, single-doctor clinical setup designed to provide unhurried consultations and maintain a highly sterilized clinical environment, rather than a 24/7 walk-in model. Contact us directly to book a consult.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Tubal Ligation & Reversal" breadcrumbs={breadcrumbs} bgImage="/images/fertility-header.webp" />

        {/* === SECTION 1: What is Tubal Ligation & Reversal? (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[926/418] w-full max-h-[420px] max-w-[926px] mx-auto bg-white p-4 border border-black/[0.03] group">
                <Image 
                  src="/images/tubal-ligation-overview.webp" 
                  alt="Anatomical representation of fallopian tubes ligation and microsurgical reversal" 
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Tubal Ligation & Reversal?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  <strong>Tubal Ligation (Tubectomy)</strong> is a highly reliable, permanent surgical birth control method for women who decide their families are complete. Conversely, <strong>Tubal Reversal (microsurgical tubal re-anastomosis)</strong> is a delicate reconstructive surgery performed to reconnect blocked fallopian tube segments, helping women restore their natural fertility pathway if they decide they want more children.
                </p>
                <p>
                  At <strong>Dr. Poonam's Women's Clinic</strong>, recognized as a leading center for gynecological surgery and family planning in Keshav Nagar and Mundhwa, Pune, we support women through every reproductive phase. Dr. Poonam offers laparoscopic tubal ligation as a quick daycare procedure and performs highly advanced microsurgical tubal reversals to reconstruct fallopian pathways for couples planning a new pregnancy.
                </p>
                <p>
                  Because we run a focused, single-doctor private clinic rather than a busy corporate hospital, your surgical planning and counseling are conducted personally by Dr. Poonam. We operate by prior appointments to ensure that every patient receives absolute privacy, meticulous attention, and clinical accuracy in a highly sterilized clinical environment.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Family Planning Consultation Today
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

        {/* === SECTION 2: Tubal Ligation (Tubectomy) vs. Tubal Ligation Reversal: Method Comparison (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Tubal Ligation vs. Tubal Reversal Comparison" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              While ligation is a quick, straightforward procedure to permanently block the tubes, reversal is a highly complex microsurgery designed to meticulously put them back together.
            </p>

            {/* Custom Comparison layout styled exactly like the comparison table in PCOD section */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              {/* Vertical dotted line with VS circle in the middle (Desktop Only) */}
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-[#E2E8F0] z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center font-bold text-[#C0354A] shadow-sm z-10">
                  VS
                </div>
              </div>

              {/* Left Card: Tubal Ligation */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Tubal Ligation (Tubectomy)</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Permanent Sterilization. Contraception.</p>
                </div>
                
                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Clinical Goal</span>
                      <p className="text-text text-[14px] leading-relaxed">Provide highly reliable, permanent sterilization to prevent future pregnancy.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Procedure Duration</span>
                      <p className="text-text text-[14px] leading-relaxed">Quick surgical execution, typically taking 20 to 30 minutes to complete.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Surgical Method</span>
                      <p className="text-text text-[14px] leading-relaxed">Fallopian tubes are cut, tied, sealed using heat (electrocautery), or clipped.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Hospital Admission</span>
                      <p className="text-text text-[14px] leading-relaxed">Offered as a daycare procedure; patients return home the same day.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Efficacy Profile</span>
                      <p className="text-text text-[14px] leading-relaxed">Boasts over 99% efficacy in preventing pregnancy; highly secure contraception.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Tubal Reversal */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Tubal Ligation Reversal</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Fertility Reconstruction. Re-anastomosis.</p>
                </div>

                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Clinical Goal</span>
                      <p className="text-text text-[14px] leading-relaxed">Reconstruct the fallopian tubes to restore natural fertility pathways.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Procedure Duration</span>
                      <p className="text-text text-[14px] leading-relaxed">Delicate microsurgery requiring 2 to 3 hours of precise micro-suturing.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Surgical Method</span>
                      <p className="text-text text-[14px] leading-relaxed">Removing blocked scar segments and joining healthy ends using microscopic sutures.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Hospital Admission</span>
                      <p className="text-text text-[14px] leading-relaxed">Typically requires a 1 to 2 night inpatient admission for observation.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Efficacy Profile</span>
                      <p className="text-text text-[14px] leading-relaxed">Success averages 40% to 80% depending on age, tube length, and sterilization type.</p>
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

        {/* === SECTION 3: Key Factors Influencing Reversal Success (Cream bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Key Factors Influencing Reversal Success" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Not everyone is a candidate for tubal reversal. Dr. Poonam conducts a rigorous clinical evaluation of these primary success indicators to give you a realistic success probability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {reversalFactors.map((factor, index) => {
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
                        {factor.icon}
                      </div>
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug`}>
                        {factor.title}
                      </h3>
                      <p className={`${style.descText} text-[14px] leading-relaxed`}>
                        {factor.description}
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
              Reconstructing fallopian pathways requires surgical precision and pre-operative preparation. Let us review the primary guidelines.
            </p>
            
            {/* Bento image banner - exact 838*418 dimensions */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/tubal-ligation-prep.webp" 
                alt="Safe recovery and fertility guidelines after Tubal Reversal microsurgery" 
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

        {/* === SECTION 5: The Reversal Microsurgery Journey Step-by-Step (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="The Reversal Microsurgery Journey" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                Microsurgical tubal re-anastomosis is an incredibly delicate reconstructive surgery. Let us walk through our precise clinical journey map.
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

        {/* === SECTION 6: Why Choose Dr. Poonam's Women's Clinic for Tubal Ligation & Reversal? (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Why Choose Us */}
            <div className="bg-[#151722] text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Choose Dr. Poonam's Women's Clinic for Tubal Ligation & Reversal?
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
                      <strong className="block text-[16px] text-white">Specialized Microsurgical Reconstructive Skills</strong>
                      <span className="text-white/80 text-[14px]">Advanced surgical expertise in high-magnification fallopian reconstruction. Dr. Poonam conducts micro-suturing layer alignment with extreme clinical accuracy.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Daycare & Advanced Hospital Options</strong>
                      <span className="text-white/80 text-[14px]">Laparoscopic permanent sterilizations are managed as quick daycare operations. Microsurgical reversals are conducted under strict sterile setups in leading tertiary centers.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Dedicated Prior-Appointment Booking</strong>
                      <span className="text-white/80 text-[14px]">We maintain a single-doctor clinical setup. We operate strictly by prior appointment during dedicated morning and evening timings, preventing waiting room crowds and securing patient privacy.</span>
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
