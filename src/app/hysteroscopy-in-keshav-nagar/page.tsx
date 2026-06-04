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
  Eye, 
  Scissors,
  Calendar, 
  Clock, 
  ClipboardList,
  Shield,
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: "Best Hysteroscopy Procedures in Keshav Nagar & Mundhwa | Dr. Poonam's Women's Clinic",
  description: "Get advanced diagnostic & operative hysteroscopy (uterine cavity evaluation) under Dr. Poonam at Dr. Poonam's Women's Clinic in Keshav Nagar & Mundhwa, Pune. Safe, expert care. Book today.",
  alternates: {
    canonical: '/hysteroscopy-in-keshav-nagar/',
  }
};

export default function HysteroscopyPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Hysteroscopy Procedures' },
  ];

  const clinicalIndications = [
    { 
      title: "Abnormal Uterine Bleeding", 
      description: "Investigating the root causes of exceptionally heavy periods, irregular intermenstrual spotting, or unexpected postmenopausal bleeding.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Infertility & IVF Optimization", 
      description: "Identifying sub-clinical endometrial barriers to embryo implantation, such as uterine adhesions or chronic endometritis, to improve IVF success.", 
      icon: <Sparkles className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Uterine Polyps & Fibroids", 
      description: "Direct visualization and guided micro-surgical removal of benign tissue growths within the uterine cavity that cause bleeding or reproductive failure.", 
      icon: <Eye className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Uterine Septum & Adhesions", 
      description: "Correcting congenital uterine septums (tissue dividers) or clearing intrauterine scar tissue (Asherman's Syndrome) that trigger recurrent miscarriages.", 
      icon: <Scissors className="w-6 h-6 text-accent" /> 
    }
  ];

  const prepGuidelines = [
    { 
      title: "Menstrual Cycle Alignment", 
      description: "Scheduling the procedure during the first week after your period ends (usually cycle days 5 to 10) when the uterine lining is thinnest, ensuring maximum visual clarity.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Pre-Procedural Fitness Profile", 
      description: "Completing basic pelvic ultrasound mapping, blood work, and securing pre-anesthetic clearance if conscious sedation or general anesthesia is planned.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Strict Fasting & Escort Prep", 
      description: "Adhering to a strict 6-hour fasting window (no food or water) before sedation. Patients must arrange for a family member to accompany them home.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const procedureTimeline = [
    {
      title: 'Step 1: Clinical Check & Diagnostic Workup',
      description: 'A private consultation with Dr. Poonam to review symptoms, conduct a baseline pelvic ultrasound, check menstrual cycle timing, and coordinate scheduling.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Gentle Anesthesia & Sterile Prep',
      description: 'The procedure is carried out in a highly sterilized operating theatre. Local cervical blocks or gentle intravenous sedation are administered to guarantee patient comfort.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 3: Scope Insertion & Saline Distension',
      description: 'A micro-thin, lighted hysteroscope is gently guided through the natural canal of the vagina and cervix. Sterile saline fluid is introduced to gently distend the uterine walls.',
      icon: <Eye className="w-5 h-5" />
    },
    {
      title: 'Step 4: HD Monitoring & Target Therapy',
      description: 'Dr. Poonam visualizes the uterine cavity in high-definition on a monitor. For operative procedures, micro-instruments are passed through the scope to address abnormalities on the spot.',
      icon: <Scissors className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: 'What is a hysteroscopy and when is it clinically necessary?',
      answer: 'A hysteroscopy is a minimally invasive procedure where a thin, lighted telescope-like camera (hysteroscope) is inserted through the cervix into the uterine cavity. It allows direct visual inspection of the uterus without any incisions. It is clinically necessary to diagnose and treat abnormal uterine bleeding, recurrent miscarriages, uterine polyps, submucosal fibroids, or to optimize the uterine lining before IVF cycles.'
    },
    {
      question: 'Is a hysteroscopy procedure painful?',
      answer: 'Most patients experience minimal discomfort. Diagnostic hysteroscopy is highly tolerable and often performed under a local anesthetic block. Operative hysteroscopy (such as polyp or fibroid removal) is carried out under conscious sedation or general anesthesia, making the entire procedure completely pain-free.'
    },
    {
      question: 'What is the actual, genuine cost of a hysteroscopy procedure in Pune?',
      answer: 'At Dr. Poonam\'s Women\'s Clinic, we believe in complete transparency. A diagnostic hysteroscopy ranges from ₹8,000 to ₹15,000. An operative hysteroscopy (including removal of polyps, fibroids, septum resection, or clearing intrauterine adhesions) typically ranges from ₹20,000 to ₹45,000 depending on the complexity of the case, surgical tools used, and anesthesia requirements.'
    },
    {
      question: 'What is the recovery time after a hysteroscopy procedure?',
      answer: 'Hysteroscopy is an outpatient daycare procedure, meaning you can return home the same day. Most patients resume light, normal activities within 24 to 48 hours. Mild pelvic cramping and light spotting are normal for a few days. We advise avoiding vaginal inserts, swimming, and intercourse for 1 to 2 weeks post-procedure to ensure complete healing.'
    },
    {
      question: 'Why is cycle timing important for scheduling a hysteroscopy?',
      answer: 'A hysteroscopy is ideally scheduled during the first week after your menstrual period ends (typically cycle days 5 to 10). During this window, the endometrial lining is at its thinnest, which provides the clearest view of the uterine cavity and helps identify tiny polyps or structural defects that might otherwise be hidden.'
    },
    {
      question: 'How do I book a session and does the clinic offer emergency 24/7 walk-ins?',
      answer: 'Dr. Poonam\'s Women\'s Clinic is a dedicated, single-doctor private practice designed to offer highly personalized, unhurried gynecological care. We operate strictly by prior appointment during dedicated morning and evening timings, rather than a 24/7 walk-in system. This prevents lobby crowds and maintains a highly sterilized clinical environment. You can schedule your consultation by calling our clinic line directly.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Hysteroscopy Procedures" breadcrumbs={breadcrumbs} bgImage="/images/fertility-header.webp" />

        {/* === SECTION 1: What is Hysteroscopy Procedure? (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[926/418] w-full max-h-[420px] max-w-[926px] mx-auto bg-white p-4 border border-black/[0.03] group">
                <Image 
                  src="/images/hysteroscopy-overview.webp" 
                  alt="Detailed medical cross-section illustration of hysteroscopy camera evaluating the uterine cavity" 
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Hysteroscopy Procedure?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  A <strong>Hysteroscopy</strong> is a highly advanced, minimally invasive gynecological procedure used to diagnose and treat structural abnormalities inside the uterus. By inserting a micro-thin, lighted camera telescope (hysteroscope) through the vagina and cervix, the surgeon gets direct visual access to the uterine cavity on a high-definition monitor. Because it utilizes natural pathways, there are absolutely no abdominal cuts, incisions, or surgical scars.
                </p>
                <p>
                  At <strong>Dr. Poonam's Women's Clinic</strong>, the premier center for specialized gynecological care in Keshav Nagar and Mundhwa, Pune, we utilize hysteroscopy to deliver precise answers for reproductive concerns. Dr. Poonam performs both diagnostic hysteroscopy to evaluate uterine health and operative hysteroscopy to address polyps, submucosal fibroids, or structural septums.
                </p>
                <p>
                  Our clinic is run single-handedly by Dr. Poonam, ensuring that you receive highly personalized, individual care from diagnosis to recovery. We schedule all consultations strictly by prior appointment during dedicated clinical hours, ensuring a calm, sterile environment, absolute patient confidentiality, and minimal waiting room times.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Hysteroscopy Consultation Today
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

        {/* === SECTION 2: Diagnostic vs. Operative Hysteroscopy: Method Comparison (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Diagnostic vs. Operative Hysteroscopy: Method Comparison" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Depending on your clinical symptoms, Dr. Poonam will determine whether a quick visual check or a micro-surgical corrective procedure is required.
            </p>

            {/* Custom Comparison layout styled exactly like the comparison table in MTP / PCOD section */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              {/* Vertical dotted line with VS circle in the middle (Desktop Only) */}
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-[#E2E8F0] z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center font-bold text-[#C0354A] shadow-sm z-10">
                  VS
                </div>
              </div>

              {/* Left Card: Diagnostic Hysteroscopy */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Diagnostic Hysteroscopy</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Visual Inspection. Office Evaluation.</p>
                </div>
                
                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Clinical Goal</span>
                      <p className="text-text text-[14px] leading-relaxed">Visually inspect the uterine lining, cervical canal, and tubal openings to detect issues.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Procedure Duration</span>
                      <p className="text-text text-[14px] leading-relaxed">Quick and straightforward, usually taking only 5 to 10 minutes to complete.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Surgical Scope</span>
                      <p className="text-text text-[14px] leading-relaxed">Non-surgical check using a micro-thin scope; no tissue removal is performed.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Anesthesia Needs</span>
                      <p className="text-text text-[14px] leading-relaxed">Performed under simple local paracervical block or mild oral sedation.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Recovery Profile</span>
                      <p className="text-text text-[14px] leading-relaxed">Excellent. Patient can return home immediately after a brief 30-minute rest.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Operative Hysteroscopy */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Operative Hysteroscopy</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Corrective Surgery. Micro-Instruments.</p>
                </div>

                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Clinical Goal</span>
                      <p className="text-text text-[14px] leading-relaxed">Actively treat, remove, or repair diagnosed structural pathology in the cavity.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Procedure Duration</span>
                      <p className="text-text text-[14px] leading-relaxed">Takes about 15 to 45 minutes, depending on the size and complexity of pathology.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Surgical Scope</span>
                      <p className="text-text text-[14px] leading-relaxed">Uses specialized hysteroscopes equipped with channels for micro-surgical tools.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Anesthesia Needs</span>
                      <p className="text-text text-[14px] leading-relaxed">Performed under safe conscious intravenous sedation or light general anesthesia.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Recovery Profile</span>
                      <p className="text-text text-[14px] leading-relaxed">Daycare recovery. Return home same day; resume work in 24 to 48 hours.</p>
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

        {/* === SECTION 3: Key Clinical Indications for Hysteroscopy (Cream bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Key Clinical Indications for Hysteroscopy" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Hysteroscopy is the clinical gold standard for exploring the uterine interior. Dr. Poonam recommends this advanced mapping for the following indications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {clinicalIndications.map((indicator, index) => {
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
              Preparing correctly for a hysteroscopy ensures patient safety, provides the doctor with a clear view, and supports a swift post-procedure recovery.
            </p>
            
            {/* Bento image banner - exact 838*418 dimensions */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/hysteroscopy-prep.webp" 
                alt="Safe medical setup and monitors preparing for a diagnostic hysteroscopy procedure" 
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

        {/* === SECTION 5: The Hysteroscopy Journey Step-by-Step (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="The Hysteroscopy Journey Step-by-Step" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                We perform hysteroscopic evaluations with extreme gentle precision, ensuring patient safety and diagnostic accuracy at every milestone.
              </p>
              <VerticalTimeline items={procedureTimeline} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 5 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 6: Why Choose Dr. Poonam's Women's Clinic for Hysteroscopy Procedures? (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Why Choose Us */}
            <div className="bg-[#151722] text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Choose Dr. Poonam's Women's Clinic for Hysteroscopy Procedures?
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
                      <strong className="block text-[16px] text-white">Focused Single-Doctor Expert Care</strong>
                      <span className="text-white/80 text-[14px]">You receive undivided, personal attention from Dr. Poonam throughout your journey. Your diagnostics and post-procedure counseling are never delegated.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Strict Prior-Appointment Scheduling</strong>
                      <span className="text-white/80 text-[14px]">To preserve patient privacy and prevent lobby crowds, we coordinate all checkups strictly by prior appointment during dedicated morning and evening hours.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">State-of-the-Art Sterile Equipment</strong>
                      <span className="text-white/80 text-[14px]">We utilize advanced micro-scopes and sterile diagnostic setups. Operative procedures are conducted at premier tertiary hospitals in Pune with certified anesthesiologists.</span>
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
