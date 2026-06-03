import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import ComparisonCards from '@/components/ui/ComparisonCards';
import HorizontalScrollCards from '@/components/ui/HorizontalScrollCards';
import CircularProcess from '@/components/ui/CircularProcess';
import { ShieldCheck, CheckCircle, Eye, Scissors, Heart, Activity } from 'lucide-react';

export const metadata = {
  title: "Best Hysteroscopy Procedure in Keshav Nagar Pune | Dr Poonam",
  description: "Looking for a hysteroscopy near me in Keshav Nagar, Mundhwa, or Kharadi? Dr. Poonam offers advanced diagnostic and operative hysteroscopy with expert care.",
  alternates: {
    canonical: '/hysteroscopy-in-keshav-nagar/',
  }
};

export default function HysteroscopyPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Hysteroscopy' },
  ];

  const comparisonData: [any, any] = [
    {
      title: "Diagnostic Hysteroscopy",
      theme: "secondary",
      items: [
        { feature: "Primary Goal", isAvailable: "To visually inspect the inside of the uterus." },
        { feature: "Anesthesia", isAvailable: "Often done with local anesthesia or no anesthesia." },
        { feature: "Setting", isAvailable: "Usually performed in an outpatient clinic setting." },
        { feature: "Instruments", isAvailable: "Uses an ultra-thin viewing scope only." },
        { feature: "Recovery", isAvailable: "Immediate. Go home right after the test." }
      ]
    },
    {
      title: "Operative Hysteroscopy",
      theme: "primary",
      items: [
        { feature: "Primary Goal", isAvailable: "To surgically treat or remove abnormalities." },
        { feature: "Anesthesia", isAvailable: "Usually requires regional or general anesthesia." },
        { feature: "Setting", isAvailable: "Performed in an operating room." },
        { feature: "Instruments", isAvailable: "Scope has channels for tiny surgical tools." },
        { feature: "Recovery", isAvailable: "Short recovery room stay; 1-2 days at home." }
      ]
    }
  ];

  const conditionsCards = [
    { title: "Uterine Polyps", description: "Small, non-cancerous growths on the uterine lining that cause irregular spotting or heavy periods.", icon: <Eye className="w-5 h-5" /> },
    { title: "Submucosal Fibroids", description: "Fibroids that bulge into the uterine cavity, interfering with embryo implantation and causing pain.", icon: <Scissors className="w-5 h-5" /> },
    { title: "Uterine Septum", description: "A congenital band of tissue dividing the uterus, which is a major cause of recurrent miscarriages.", icon: <Scissors className="w-5 h-5" /> },
    { title: "Asherman's Syndrome", description: "Intrauterine adhesions or scar tissue that can form after past infections or surgeries, blocking menstruation.", icon: <Activity className="w-5 h-5" /> },
    { title: "Lost IUD Retreival", description: "Safely locating and extracting an intrauterine device (Copper-T/Mirena) when the strings are no longer visible.", icon: <Eye className="w-5 h-5" /> }
  ];

  const procedureTimeline = [
    {
      title: 'Preparation & Timing',
      description: 'The procedure is scheduled in the first week after your period ends, when the uterine lining is thinnest. You will be positioned comfortably, similar to a routine pelvic exam.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Anesthesia Administration',
      description: 'Depending on whether the procedure is diagnostic or operative, Dr. Poonam administers local anesthetic around the cervix, or the anesthetist provides sedation.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Scope Insertion & Expansion',
      description: 'The hysteroscope (a thin lighted tube) is gently passed through the vagina and cervix. Sterile saline fluid is introduced to gently expand the uterine walls.',
      icon: <Eye className="w-5 h-5" />
    },
    {
      title: 'Visual Inspection & Surgery',
      description: 'Dr. Poonam views the high-definition feed on a monitor. If polyps or fibroids are found during an operative procedure, tiny tools are passed through the scope to remove them instantly.',
      icon: <Scissors className="w-5 h-5" />
    }
  ];

  const recoverySteps = [
    { title: "The First 24 Hours", description: "Mild cramping (similar to menstrual cramps) and light spotting are completely normal. Rest and use a heating pad." },
    { title: "Days 2 to 3", description: "Most patients return to normal work activities. Continue to wear panty liners instead of tampons." },
    { title: "Weeks 1 to 2", description: "Avoid sexual intercourse, swimming pools, and heavy workouts to allow the cervix to close and prevent infection." }
  ];

  const faqs = [
    {
      question: 'What is a hysteroscopy and why is it performed?',
      answer: 'Hysteroscopy is a minimally invasive clinical procedure where a thin, lighted camera telescope (hysteroscope) is guided through the cervix into the uterus. This allows Dr. Poonam to directly visualize the uterine cavity, helping identify and treat causes of abnormal bleeding, recurrent miscarriages, or endometrial polyps.'
    },
    {
      question: 'Is a hysteroscopy performed under anesthesia?',
      answer: 'Yes, depending on whether it is diagnostic or operative, a hysteroscopy can be performed under local anesthesia, conscious sedation, or general anesthesia. Dr. Poonam ensures optimal comfort and blocks pelvic pain, making the procedure highly tolerable.'
    },
    {
      question: 'What is the best time during the menstrual cycle to schedule a hysteroscopy?',
      answer: 'The best time to perform a hysteroscopy is during the first week after your period ends (usually days 5 to 10 of your cycle). During this window, the endometrial lining is at its thinnest, offering the clearest visual details of the uterine structures.'
    },
    {
      question: 'Can a hysteroscopy help improve my fertility or chances of IVF success?',
      answer: 'Yes. By evaluating the uterine cavity directly, a hysteroscopy can identify sub-clinical barriers to implantation like septums, polyps, or intrauterine adhesions (Asherman’s syndrome). Correcting these surgically (operative hysteroscopy) significantly improves natural conception and IVF success rates.'
    },
    {
      question: 'What is the recovery time and post-procedure care after a hysteroscopy?',
      answer: 'Most patients recover within 24 to 48 hours. You can resume normal daily tasks the following day. Dr. Poonam advises avoiding tampons and intercourse for 1–2 weeks to prevent pelvic infections, and you may experience mild spotting or cramping, which is completely normal.'
    },
    {
      question: 'Are there any risks or complications associated with a hysteroscopy?',
      answer: 'Hysteroscopy is extremely safe, with a complication rate under 1%. Rare risks include mild uterine bleeding, infection, or minor cervical injury. Dr. Poonam follows strict sterile protocols and clinical diagnostics to minimize these occurrences.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Hysteroscopy Procedure" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/hysteroscopy-in-keshav-nagar/" />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/service-hysteroscopy.webp" 
                      alt="Modern Hysteroscopy Instrument Setup with Sterile Medical Equipment" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <AnimatedHeading 
                    text="What is Hysteroscopy Procedure?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
                  />
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Hysteroscopy is a cornerstone of modern, minimally invasive gynecology. By bypassing the need for abdominal incisions entirely, it allows direct visual access to the inside of the womb (uterine cavity) via the natural vaginal canal. This high-precision technique ensures accurate diagnoses of conditions that cannot be fully evaluated with standard ultrasounds.
                    </p>
                    <p>
                      At Dr Poonam’s Women’s Clinic in Keshav Nagar, Pune, we perform diagnostic and operative hysteroscopy to help patients overcome fertility hurdles and abnormal uterine bleeding. Dr. Poonam combines clinical expertise with a compassionate, gentle approach, guiding patients step-by-step through the process. If you reside near Kharadi or Mundhwa and are looking for a reliable local gynecology clinic for a uterus evaluation, our doors are open to offer you expert care.
                    </p>
                  </div>
                </div>

                {/* Comparison Section */}
                <div>
                  <AnimatedHeading 
                    text="Diagnostic vs. Operative Hysteroscopy" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[30px] text-[15px] leading-relaxed">
                    The scope used is incredibly thin, allowing us to perform visual inspections effortlessly, and if needed, surgically remove issues in the same sitting.
                  </p>
                  <ComparisonCards columns={comparisonData} />
                </div>

                {/* Horizontal Scroll Cards for Conditions */}
                <div className="w-[calc(100vw-32px)] lg:w-full -ml-4 lg:ml-0 px-4 lg:px-0">
                  <HorizontalScrollCards 
                    title="What Can Hysteroscopy Treat?" 
                    subtitle="If you are experiencing recurrent miscarriages or extremely heavy periods, a hysteroscopy is often the best diagnostic tool."
                    cards={conditionsCards} 
                  />
                </div>

                {/* Procedure Steps (Vertical Timeline) */}
                <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
                  <AnimatedHeading 
                    text="How is a Hysteroscopy Performed?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                    The procedure is fast, typically taking between 10 to 30 minutes, and requires absolutely no abdominal cuts.
                  </p>
                  <VerticalTimeline items={procedureTimeline} />
                </div>

                {/* Recovery Process (Circular Process) */}
                <div>
                  <CircularProcess 
                    title="Swift Post-Procedure Recovery" 
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
                        <span><strong>Minimally Invasive Expertise:</strong> Pain-free diagnostic testing using ultra-thin scopes for maximum comfort.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Comprehensive Care Path:</strong> Direct translation from diagnostic findings into precise surgical or fertility plans.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Highly Rated Clinic:</strong> A trusted clinic with 5.0 Google stars representing authentic patient satisfaction.</span>
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
