import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import ComparisonCards from '@/components/ui/ComparisonCards';
import HorizontalScrollCards from '@/components/ui/HorizontalScrollCards';
import CircularProcess from '@/components/ui/CircularProcess';
import { Heart, CheckCircle, Activity, ShieldCheck, Stethoscope, Crosshair } from 'lucide-react';

export const metadata = {
  title: "Scarless Hysterectomy (NDVH) in Keshav Nagar Pune | Dr Poonam's Clinic",
  description: "Non-Descent Vaginal Hysterectomy (NDVH) specialist in Pune. Remove uterus through the vaginal canal with no abdominal cuts or visible scars under Dr. Poonam. Serving patients in Keshav Nagar, Hadapsar, and Magarpatta.",
  alternates: {
    canonical: '/scarless-hysterectomy-in-keshav-nagar/',
  }
};

export default function ScarlessHysterectomyPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Scarless Hysterectomy' },
  ];

  const comparisonData: [any, any] = [
    {
      title: "Scarless (Vaginal) Hysterectomy",
      theme: "secondary",
      items: [
        { feature: "Abdominal Scars", isAvailable: "Zero external abdominal scars." },
        { feature: "Surgical Pain", isAvailable: "Significantly lower post-operative pain." },
        { feature: "Hospital Stay", isAvailable: "Short stay, usually 24 to 48 hours." },
        { feature: "Infection Risk", isAvailable: "Very low risk of wound site infections." },
        { feature: "Recovery to Normal", isAvailable: "Usually 2 to 3 weeks for light activities." }
      ]
    },
    {
      title: "Open Abdominal Hysterectomy",
      theme: "primary",
      items: [
        { feature: "Abdominal Scars", isAvailable: "Requires a large 5-7 inch abdominal incision." },
        { feature: "Surgical Pain", isAvailable: "High pain level requiring stronger analgesics." },
        { feature: "Hospital Stay", isAvailable: "Longer stay, usually 3 to 5 days." },
        { feature: "Infection Risk", isAvailable: "Higher risk due to the large external wound." },
        { feature: "Recovery to Normal", isAvailable: "Usually takes 6 to 8 weeks." }
      ]
    }
  ];

  const indicationsCards = [
    { title: "Abnormal Uterine Bleeding", description: "Severe, uncontrollable menstrual bleeding that does not respond to hormonal therapy or other medications.", icon: <Activity className="w-5 h-5" /> },
    { title: "Uterine Fibroids", description: "Benign tumors growing in the uterus that cause pelvic pain, heavy bleeding, or pressure on the bladder/bowels.", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Adenomyosis", description: "A condition where the inner lining of the uterus breaks through the muscle wall of the uterus, causing intense pain.", icon: <Heart className="w-5 h-5" /> },
    { title: "Endometriosis", description: "In severe cases where endometrial tissue has spread extensively and the patient has completed her family.", icon: <Activity className="w-5 h-5" /> },
    { title: "Uterine Prolapse", description: "When pelvic floor muscles weaken and the uterus descends into the vaginal canal.", icon: <ShieldCheck className="w-5 h-5" /> }
  ];

  const procedureTimeline = [
    {
      title: 'Diagnostic Pre-Operative Check',
      description: 'Before surgery, Dr. Poonam conducts pelvic ultrasound scans to map the exact size of your uterus and confirm that it can safely pass through the vaginal canal.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Anesthesia & Positioning',
      description: 'The procedure is performed under general or spinal anesthesia, ensuring you are completely pain-free. The surgery is accessed entirely from below.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Vaginal Pathway Access',
      description: 'A small circular incision is made internally around the cervix at the top of the vaginal canal. No cuts are made on the abdomen.',
      icon: <Crosshair className="w-5 h-5" /> // Using a generic icon approach since Crosshair isn't imported, let's use Activity
    },
    {
      title: 'Supporting Ligament Dissection',
      description: 'The blood vessels, fallopian tubes, and ligaments supporting the uterus are carefully clamped, cut, and tied off using specialized surgical instruments.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Uterine Extraction & Vault Closure',
      description: 'The uterus (and cervix) is gently extracted through the vagina. The top of the vagina (the vault) is then sutured closed with dissolvable internal threads.',
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  const recoverySteps = [
    { title: "First 48 Hours", description: "Hospital monitoring. You will be given IV pain relief and a catheter, which is usually removed the next day. Light walking begins." },
    { title: "Weeks 1 to 2", description: "Resting at home. Mild spotting or vaginal discharge is normal. Avoid lifting anything heavier than a small bag of groceries." },
    { title: "Weeks 4 to 6", description: "Internal sutures are dissolving. Strict avoidance of sexual intercourse, tampons, or swimming until Dr. Poonam gives the clear." }
  ];

  const faqs = [
    {
      question: 'What is a Scarless Hysterectomy (NDVH)?',
      answer: 'Non-Descent Vaginal Hysterectomy (NDVH) is a surgical technique where the uterus is removed entirely through the natural vaginal canal, even in the absence of uterine prolapse (descent). This leaves no scars on the abdomen.'
    },
    {
      question: 'What are the main benefits of NDVH over abdominal hysterectomy?',
      answer: 'NDVH offers significant advantages: zero abdominal scars, dramatically reduced postoperative pain, lower risk of wound infections, shorter hospital stay (often just 24-48 hours), and a much faster return to daily activities.'
    },
    {
      question: 'How long does the recovery process take after a vaginal hysterectomy?',
      answer: 'Most women can return to light activity within 2 weeks. However, complete internal healing takes about 4 to 6 weeks. Strenuous exercises and lifting heavy objects should be avoided during this period.'
    },
    {
      question: 'Who is a suitable candidate for a scarless hysterectomy?',
      answer: 'Women requiring hysterectomy for benign conditions like small-to-moderate fibroids, adenomyosis, or abnormal uterine bleeding (AUB) are excellent candidates, provided the uterine size fits vaginal extraction criteria.'
    },
    {
      question: 'How do I choose the best scarless hysterectomy doctor near me in Keshav Nagar, Pune?',
      answer: 'If you are searching for a vaginal hysterectomy doctor near me or scarless uterus removal near me around the area of Keshav Nagar, Hadapsar, or Magarpatta, Dr Poonam’s Women’s Clinic is a top-rated choice. Dr. Poonam is highly experienced in NDVH procedures and collaborates with local tertiary hospitals to ensure safe and comfortable surgical care.'
    },
    {
      question: 'Is vaginal hysterectomy possible for large uterine fibroids?',
      answer: 'Yes, in many cases, a scarless hysterectomy can still be performed for large fibroids. Dr. Poonam uses specialized surgical techniques (like morcellation or bisection) to reduce the size of the uterus internally, allowing it to be safely extracted through the vagina without abdominal cuts.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Scarless Hysterectomy (NDVH)" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/scarless-hysterectomy-in-keshav-nagar/" />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/scarless-hysterectomy.webp" 
                      alt="Gynecological Surgical Instruments on Metal Tray for Scarless Hysterectomy" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <AnimatedHeading 
                    text="What is Scarless Hysterectomy (NDVH)?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
                  />
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Scarless Hysterectomy, clinically referred to as Non-Descent Vaginal Hysterectomy (NDVH), is a highly advanced, minimally invasive surgical technique for removing the uterus. By accessing the pelvic cavity entirely through the natural vaginal canal, it eliminates the need for any abdominal cuts, resulting in cosmetic preservation, dramatically less pain, and a much smoother recovery.
                    </p>
                    <p>
                      At Dr Poonam's Women's Clinic in Keshav Nagar, Pune, we specialize in NDVH for benign uterine conditions. Dr. Poonam brings extensive surgical expertise and strict post-surgical clinical oversight to ensure our patients experience minimal discomfort and can return to their routines quickly. If you are residing in Hadapsar or Magarpatta and are searching for a scarless hysterectomy doctor around the area, our clinic provides expert surgical consultations and follow-up care close to home.
                    </p>
                  </div>
                </div>

                {/* Comparison Section */}
                <div>
                  <AnimatedHeading 
                    text="Vaginal vs. Abdominal Hysterectomy" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[30px] text-[15px] leading-relaxed">
                    According to global gynecological standards, vaginal hysterectomy is the route of choice whenever technically feasible, due to its overwhelming benefits for the patient.
                  </p>
                  <ComparisonCards columns={comparisonData} />
                </div>

                {/* Horizontal Scroll Cards for Indications */}
                <div className="w-[calc(100vw-32px)] lg:w-full -ml-4 lg:ml-0 px-4 lg:px-0">
                  <HorizontalScrollCards 
                    title="Why Might You Need a Hysterectomy?" 
                    subtitle="A hysterectomy is a definitive cure for several benign but severely painful or disruptive pelvic conditions."
                    cards={indicationsCards} 
                  />
                </div>

                {/* Procedure Steps (Vertical Timeline) */}
                <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
                  <AnimatedHeading 
                    text="The Surgical Journey (NDVH)" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                    A scarless hysterectomy is performed entirely internally. The procedure generally takes 1 to 2 hours, and leaves no visible trace on your abdomen.
                  </p>
                  <VerticalTimeline items={procedureTimeline} />
                </div>

                {/* Recovery Process (Circular Process) */}
                <div>
                  <CircularProcess 
                    title="Post-Operative Healing" 
                    steps={recoverySteps} 
                  />
                </div>

                {/* Why Choose Us */}
                <div className="bg-[#151722] text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center gap-[45px]">
                  <div className="w-full md:w-2/3 flex flex-col gap-6">
                    <h3 className="text-[26px] font-bold text-white leading-tight">
                      Why Choose Dr. Poonam's Clinic for NDVH?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Specialized Training:</strong> Deep experience in executing Non-Descent Vaginal Hysterectomy procedures successfully.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Zero Abdominal Scars:</strong> Absolute preservation of cosmetic appearance and minimal tissue trauma.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Comprehensive Care Plan:</strong> Diagnostic ultrasound checks, sterile operating conditions, and customized recovery tracking.</span>
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
