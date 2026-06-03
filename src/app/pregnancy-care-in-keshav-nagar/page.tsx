import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import SymptomGrid from '@/components/ui/SymptomGrid';
import ComparisonCards from '@/components/ui/ComparisonCards';
import HorizontalScrollCards from '@/components/ui/HorizontalScrollCards';
import CircularProcess from '@/components/ui/CircularProcess';
import { ShieldCheck, CheckCircle, Heart, Activity, AlertTriangle, Apple } from 'lucide-react';

export const metadata = {
  title: "Best Pregnancy Care & Maternity Clinic in Keshav Nagar Pune",
  description: "Comprehensive pregnancy care, routine prenatal scans, and delivery planning by Dr. Poonam. Leading maternity care serving Keshav Nagar, Mundhwa, and Hadapsar.",
  alternates: {
    canonical: '/pregnancy-care-in-keshav-nagar/',
  }
};

export default function PregnancyCarePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Pregnancy Care' },
  ];

  const trimesterTimeline = [
    {
      title: 'First Trimester (Weeks 1-12)',
      description: 'The foundation stage. We focus on confirming the pregnancy via ultrasound, estimating the due date, checking the fetal heartbeat, and prescribing essential folic acid. We also manage early symptoms like morning sickness and fatigue.',
      icon: <Heart className="w-5 h-5" />
    },
    {
      title: 'Second Trimester (Weeks 13-28)',
      description: 'The growth stage. We conduct the crucial Anomaly Scan (around 18-20 weeks) to check baby\'s organ development. You will also take a glucose tolerance test to screen for gestational diabetes, and we will monitor your blood pressure and iron levels.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Third Trimester (Weeks 29-40)',
      description: 'The final stretch. Appointments become more frequent (every 2 weeks, then weekly). We monitor the baby\'s growth, amniotic fluid levels, and positioning. We finalize your birth plan, discuss labor signs, and prepare for delivery.',
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  const warningSigns = [
    { title: "Severe Bleeding", description: "Any heavy vaginal bleeding should be reported immediately.", icon: <AlertTriangle className="w-5 h-5" /> },
    { title: "Severe Cramping", description: "Sharp or persistent abdominal pain that doesn't go away.", icon: <AlertTriangle className="w-5 h-5" /> },
    { title: "Decreased Movement", description: "Noticing a significant drop in the baby's kicks after 28 weeks.", icon: <Activity className="w-5 h-5" /> },
    { title: "Sudden Swelling", description: "Rapid swelling of hands/face, accompanied by headaches or vision changes.", icon: <AlertTriangle className="w-5 h-5" /> },
    { title: "Fluid Leakage", description: "A sudden gush or constant trickle of watery fluid from the vagina.", icon: <AlertTriangle className="w-5 h-5" /> },
    { title: "High Fever", description: "A temperature over 100.4°F (38°C) accompanied by chills.", icon: <Activity className="w-5 h-5" /> }
  ];

  const nutritionCards = [
    { title: "Folic Acid", description: "Crucial in the first trimester to prevent neural tube defects. Found in leafy greens, fortified cereals, and supplements.", icon: <Apple className="w-5 h-5" /> },
    { title: "Iron-Rich Foods", description: "Your blood volume increases massively. Eat spinach, beans, and lean meats to prevent maternal anemia and fatigue.", icon: <Apple className="w-5 h-5" /> },
    { title: "Calcium for Bones", description: "Your baby needs calcium to build bones. If you don't consume enough dairy or fortified foods, your body will take it from your own bones.", icon: <Apple className="w-5 h-5" /> },
    { title: "Hydration", description: "Drinking 8-10 glasses of water daily helps form amniotic fluid, builds new tissue, and helps prevent constipation and UTIs.", icon: <Apple className="w-5 h-5" /> }
  ];

  const visitSchedule = [
    { title: "Weeks 4 to 28", description: "One visit every 4 weeks. General health checks and baseline scans." },
    { title: "Weeks 28 to 36", description: "One visit every 2 weeks. Monitoring growth and checking for gestational diabetes/hypertension." },
    { title: "Weeks 36 to Delivery", description: "Weekly visits. Checking baby's position, cervix dilation, and finalizing birth plans." }
  ];

  const faqs = [
    {
      question: 'How often should I visit Dr. Poonam during pregnancy?',
      answer: 'Typically, during a healthy pregnancy, you will visit Dr. Poonam once a month up to week 28, then every 2 weeks until week 36, and weekly until your delivery date. This schedule helps closely track baby development, check blood pressure, and keep you healthy and prepared.'
    },
    {
      question: 'What are the essential scans and tests needed during pregnancy?',
      answer: 'Important evaluations include the early dating scan (weeks 6-8), NT scan for chromosomal screening (weeks 11-13), Anomaly scan for structural checkups (weeks 18-20), and growth scans in the third trimester, alongside routine blood and urine panels.'
    },
    {
      question: 'Can I contact Dr. Poonam in case of emergencies or queries?',
      answer: 'Yes! One of the most unique and reassuring features of Dr Poonam’s clinic is that she is accessible to her patients via phone or WhatsApp. This direct communication line is extremely helpful for urgent queries and provides peace of mind throughout your pregnancy.'
    },
    {
      question: 'What lifestyle modifications are recommended in the first trimester?',
      answer: 'Dr. Poonam recommends starting folic acid supplements immediately, staying well-hydrated, eating frequent small meals to curb morning sickness, avoiding heavy lifting or rigorous exercise, and consulting the doctor before taking any medications.'
    },
    {
      question: 'Is it safe to exercise during pregnancy, and what exercises are recommended?',
      answer: 'Yes, moderate exercise is highly beneficial for most pregnant women. Walking, prenatal yoga, and pelvic floor exercises (Kegels) help build pelvic stamina, improve posture, and prepare your body for a smoother normal vaginal birth.'
    },
    {
      question: 'How can I manage morning sickness and nausea in early pregnancy?',
      answer: 'Nausea can be managed by eating small, frequent meals rather than large ones, dry snacks like crackers before getting out of bed, avoiding greasy/spicy foods, staying hydrated, and using ginger-infused warm teas. Consult Dr. Poonam for safe anti-nausea medications if symptoms are severe.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Pregnancy Care (Maternity)" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/pregnancy-care-in-keshav-nagar/" />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/service-pregnancy-care.webp" 
                      alt="Ultrasound Screen Displaying Fetus Scan in a Maternity Clinic" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <AnimatedHeading 
                    text="What is Pregnancy Care (Maternity)?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
                  />
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      A pregnancy is a beautiful, transformative journey that requires consistent, expert medical care to ensure the health of both mother and child. Antenatal care (pregnancy care) involves routine examinations, nutritional counseling, screening scans, and preventative actions to detect and manage potential issues before they become serious.
                    </p>
                    <p>
                      At Dr Poonam’s Women’s Clinic in Keshav Nagar, Pune, we believe that pregnancy care should be a supportive, warm, and comforting experience. Dr. Poonam treats every patient like family, taking the time to listen to your concerns, explain diagnostic scans clearly, and support you from conception to holding your baby. If you live around Hadapsar or Mundhwa and are looking for a reliable gynaecologist nearby for pregnancy guidance, we welcome you to experience our clinic’s dedicated maternal care.
                    </p>
                  </div>
                </div>

                {/* Trimester Journey (Vertical Timeline) */}
                <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
                  <AnimatedHeading 
                    text="Your Journey: Trimester by Trimester" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                    Every stage of pregnancy brings new developments. We structure your care to match your baby's growth milestones.
                  </p>
                  <VerticalTimeline items={trimesterTimeline} />
                </div>

                {/* Circular Process for Schedule */}
                <div>
                  <CircularProcess 
                    title="Standard Antenatal Visit Schedule" 
                    steps={visitSchedule} 
                  />
                </div>

                {/* Warning Signs Grid */}
                <div>
                  <SymptomGrid 
                    title="Warning Signs: When to Call the Doctor" 
                    symptoms={warningSigns} 
                  />
                </div>

                {/* Nutrition Horizontal Cards */}
                <div className="w-[calc(100vw-32px)] lg:w-full -ml-4 lg:ml-0 px-4 lg:px-0">
                  <HorizontalScrollCards 
                    title="Maternal Nutrition Guidelines" 
                    subtitle="What you eat directly impacts your baby's development. Here are the core pillars of prenatal nutrition."
                    cards={nutritionCards} 
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
                        <span><strong>24/7 Phone Availability:</strong> Direct call or WhatsApp access to Dr. Poonam for all your urgent queries during pregnancy.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Home-like Comfort:</strong> Warm, compassionate consultations that put nervous first-time mothers completely at ease.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>High Success Rates:</strong> Highly experienced in normal deliveries, prioritizing natural methods wherever healthy.</span>
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
