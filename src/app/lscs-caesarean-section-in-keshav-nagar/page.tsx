import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import { Button } from '@/components/ui/Button';
import CardStack from '@/components/ui/CardStack';
import { 
  Heart, 
  CheckCircle, 
  Baby, 
  Activity, 
  ShieldCheck, 
  Clock, 
  Home, 
  Shield, 
  Stethoscope,
  Apple,
  BookOpen,
  ClipboardList,
  HeartPulse,
  Smile
} from 'lucide-react';

export const metadata = {
  title: "LSCS (Caesarean Section) Specialist in Keshav Nagar & Mundhwa | Dr. Poonam's Women's Clinic",
  description: "Expert Caesarean section (LSCS) care, high-risk pregnancy management, and safe sterile delivery planning by Dr. Poonam's Women's Clinic in Keshav Nagar & Mundhwa, Pune.",
  alternates: {
    canonical: '/lscs-caesarean-section-in-keshav-nagar/',
  }
};

export default function LscsCaesareanPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'LSCS (Caesarean Section)' },
  ];

  const indicationsData = [
    {
      title: "Fetal Distress",
      description: "Changes in the baby's heart rate or oxygen levels during labor may indicate that an immediate, safe delivery is required.",
      icon: <Activity className="w-7 h-7" />
    },
    {
      title: "Breech or Abnormal Position",
      description: "If the baby is positioned feet-first (breech), sideways (transverse), or in another complex position as your due date approaches.",
      icon: <Baby className="w-7 h-7" />
    },
    {
      title: "Previous Caesarean Delivery",
      description: "Depending on the type of previous uterine scar and your current pregnancy health, a repeat elective C-section may be the safest route.",
      icon: <ShieldCheck className="w-7 h-7" />
    },
    {
      title: "Multiple Pregnancies",
      description: "Mothers carrying twins or higher-order multiples frequently require a Caesarean delivery depending on fetal positions and maternal wellness.",
      icon: <HeartPulse className="w-7 h-7" />
    },
    {
      title: "Placental Complications",
      description: "Conditions such as placenta previa (placenta covering the cervix) or placental abruption make vaginal delivery unsafe.",
      icon: <Shield className="w-7 h-7" />
    },
    {
      title: "Failure to Progress in Labor",
      description: "When labor stalls and the cervix does not dilate adequately despite strong contractions, a C-section becomes a necessary intervention.",
      icon: <Clock className="w-7 h-7" />
    }
  ];

  const surgicalTimeline = [
    {
      title: 'Step 1: Preoperative Preparation',
      description: 'You will undergo routine wellness assessments, fetal heart rate monitoring, and a thorough anesthesia evaluation to ensure optimal safety before surgery.',
      icon: <ClipboardList className="w-5 h-5" />
    },
    {
      title: 'Step 2: Administration of Anesthesia',
      description: 'A specialist anesthetist will typically administer spinal or epidural anesthesia, allowing you to remain awake, comfortable, and pain-free while your lower body is numbed.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 3: Safe Delivery of the Baby',
      description: 'A carefully planned, small incision is made in the lower abdomen to gently and safely deliver your baby, usually within the first 10-15 minutes of the procedure.',
      icon: <Baby className="w-5 h-5" />
    },
    {
      title: 'Step 4: Closure and Smooth Recovery',
      description: 'After the baby and placenta are delivered, the incisions are meticulously closed with dissolvable stitches, and you are comfortably transferred to the recovery room for monitoring.',
      icon: <Heart className="w-5 h-5" />
    }
  ];

  const preparationCards = [
    { title: "Attend Regular Antenatal Checkups", description: "Routine prenatal appointments allow us to closely monitor your health and your baby’s development right up until the delivery date.", icon: <Stethoscope className="w-6 h-6 text-accent" /> },
    { title: "Follow Pre-Surgery Instructions", description: "Your obstetrician will provide clear guidelines regarding fasting (usually 8 hours prior), medications, and your hospital admission schedule.", icon: <ClipboardList className="w-6 h-6 text-accent" /> },
    { title: "Maintain Healthy Nutrition", description: "Eating a balanced, nutrient-rich diet leading up to your surgery supports better energy levels and faster tissue healing postpartum.", icon: <Apple className="w-6 h-6 text-accent" /> },
    { title: "Pack Your Hospital Bag", description: "Prepare essentials for both mother and baby ahead of time, including comfortable loose clothing, maternity pads, and baby care items.", icon: <Home className="w-6 h-6 text-accent" /> },
    { title: "Discuss Your Birth Plan", description: "Open communication with your doctor about the procedure, anesthesia options, and early newborn bonding helps you feel empowered and relaxed.", icon: <BookOpen className="w-6 h-6 text-accent" /> }
  ];

  const recoveryCards = [
    {
      title: "Gentle Incision Healing",
      description: "Keep the surgical site clean and dry. We will provide detailed postoperative instructions on wound care, pain management, and preventing infections.",
      icon: <ShieldCheck className="w-9 h-9 text-[#C0354A]" />,
      iconBg: 'rgba(232, 71, 95, 0.15)',
      bgGradient: 'linear-gradient(135deg, #FDE8EC 0%, #F3E7E9 40%, #E3EEFF 100%)',
      titleColor: '#4A154B',
      textColor: 'rgba(74, 21, 75, 0.78)'
    },
    {
      title: "Breastfeeding Support & Positioning",
      description: "You can usually begin breastfeeding shortly after delivery in the recovery room. We will guide you on comfortable nursing positions that avoid pressure on your incision.",
      icon: <Baby className="w-9 h-9 text-[#5C35CC]" />,
      iconBg: 'rgba(124, 77, 255, 0.12)',
      bgGradient: 'linear-gradient(135deg, #EDE7F6 0%, #E0C3FC 40%, #8EC5FC 100%)',
      titleColor: '#1A1A5E',
      textColor: 'rgba(26, 26, 94, 0.78)'
    },
    {
      title: "Physical & Emotional Restoration",
      description: "Adequate rest, gradual walking to prevent blood clots, excellent hydration, and strong emotional support from family are vital for a smooth transition into motherhood.",
      icon: <Smile className="w-9 h-9 text-[#2E7D32]" />,
      iconBg: 'rgba(76, 175, 80, 0.15)',
      bgGradient: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 40%, #DCEDC8 100%)',
      titleColor: '#1B5E20',
      textColor: 'rgba(27, 94, 32, 0.78)'
    }
  ];

  const faqs = [
    {
      question: 'What is the difference between normal delivery and a Caesarean section?',
      answer: 'A normal delivery occurs naturally through the birth canal, while a Caesarean section is a controlled surgical procedure where the baby is delivered through incisions in the mother\'s abdomen and uterus.'
    },
    {
      question: 'Is a Caesarean section safe for me and my baby?',
      answer: 'Yes. When performed by a highly qualified obstetrician under modern medical supervision, a Caesarean delivery is an extremely safe, life-saving procedure for both mother and child.'
    },
    {
      question: 'How long does a Caesarean section surgery take?',
      answer: 'The actual surgical procedure typically takes only 45 to 60 minutes. Your baby is usually delivered within the first 15 minutes, while the remaining time is dedicated to safely closing the incisions.'
    },
    {
      question: 'How long does recovery take after a C-section?',
      answer: 'Most mothers require approximately 4 to 6 weeks for significant physical recovery. However, complete internal healing may take a few months depending on individual health factors.'
    },
    {
      question: 'Can I breastfeed immediately after a Caesarean delivery?',
      answer: 'Absolutely. Most mothers are encouraged to begin skin-to-skin contact and breastfeeding shortly after delivery, with the dedicated support of our nursing team.'
    },
    {
      question: 'How much does a Caesarean section cost in Keshav Nagar?',
      answer: 'The cost of a C-section in Keshav Nagar typically ranges between ₹70,000 and ₹1,50,000. This depends on the hospital chosen, room category, pregnancy complexity, required investigations, and the duration of your hospital stay.'
    },
    {
      question: 'Is a normal delivery possible after a previous C-section?',
      answer: 'Yes, many women are excellent candidates for a VBAC (Vaginal Birth After Caesarean). This depends heavily on your medical history, the type of previous uterine scar, and a thorough assessment of your current pregnancy.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="LSCS (Caesarean Section)" breadcrumbs={breadcrumbs} bgImage="/images/lscs-header-indian.webp" />

        {/* === SECTION 1: Overview (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[420px] group">
                <Image 
                  src="/images/lscs-overview-indian.webp" 
                  alt="LSCS Caesarean Section Care in Keshav Nagar" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is LSCS (Caesarean Section)?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  LSCS (Lower Segment Caesarean Section), commonly known as a C-section or Caesarean delivery, is a safe surgical procedure used to deliver a baby through a careful incision in the mother's lower abdomen and uterus. It is typically recommended when a normal vaginal delivery poses potential risks to the mother, the baby, or both.
                </p>
                <p>
                  At Dr. Poonam's Women's Clinic, we provide comprehensive pregnancy care, advanced antenatal monitoring, and expert Caesarean section guidance for expectant mothers in Keshav Nagar, Mundhwa, and surrounding areas in Pune. Our primary goal is to ensure a smooth, stress-free delivery experience while prioritizing the supreme health and safety of both mother and newborn.
                </p>
                <p>
                  While many women successfully undergo normal deliveries, certain high-risk pregnancy conditions or sudden complications may necessitate a planned or emergency C-section. Through vigilant pregnancy checkups, continuous fetal monitoring, and compassionate obstetric care, we empower mothers to make informed, confident decisions about the safest delivery route.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Pregnancy Consultation Today
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

        {/* === SECTION 2: Indications (White bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="When is a Caesarean Section Recommended?" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[40px] leading-tight text-center" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {indicationsData.map((benefit, index) => {
                const pastels = [
                  { cardBg: 'bg-[#F2FBF5]', blob1: 'bg-[#B8E6C4]', blob2: 'bg-[#D1F2D9]', iconBg: 'bg-[#D1F2D9]', text: 'text-[#15332B]', descText: 'text-[#2D5545]' },
                  { cardBg: 'bg-[#EEF4FF]', blob1: 'bg-[#B3D1FF]', blob2: 'bg-[#C4DEFF]', iconBg: 'bg-[#C4DEFF]', text: 'text-[#142952]', descText: 'text-[#2B4A7A]' },
                  { cardBg: 'bg-[#F6F1FF]', blob1: 'bg-[#D4BFFF]', blob2: 'bg-[#E2D4FF]', iconBg: 'bg-[#E2D4FF]', text: 'text-[#2A1650]', descText: 'text-[#4A3270]' },
                  { cardBg: 'bg-[#FFF6EE]', blob1: 'bg-[#FFD4A8]', blob2: 'bg-[#FFE2C2]', iconBg: 'bg-[#FFE2C2]', text: 'text-[#4A2E0F]', descText: 'text-[#6B4A25]' },
                  { cardBg: 'bg-[#FFF1F5]', blob1: 'bg-[#FFC0D4]', blob2: 'bg-[#FFD0DF]', iconBg: 'bg-[#FFD0DF]', text: 'text-[#4A1228]', descText: 'text-[#6B2A45]' },
                  { cardBg: 'bg-[#EFF9F9]', blob1: 'bg-[#A8DEDE]', blob2: 'bg-[#C4EDED]', iconBg: 'bg-[#C4EDED]', text: 'text-[#103838]', descText: 'text-[#255555]' },
                ];
                const style = pastels[index % pastels.length];
                
                return (
                <div key={index} className={`${style.cardBg} p-7 rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-500 group relative overflow-hidden hover:-translate-y-1 border border-black/[0.04]`}>
                  <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[35px] opacity-70 ${style.blob1} group-hover:scale-150 transition-transform duration-1000 ease-out`}></div>
                  <div className={`absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-[35px] opacity-70 ${style.blob2} group-hover:scale-150 transition-transform duration-1000 ease-out`}></div>
                  
                  <div className="relative z-10">
                    <div className={`mb-5 ${style.iconBg} w-14 h-14 rounded-[16px] flex items-center justify-center ${style.text} group-hover:scale-110 transition-transform duration-500`}>
                      {benefit.icon}
                    </div>
                    <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug`}>
                      {benefit.title}
                    </h3>
                    <p className={`${style.descText} text-[14px] leading-relaxed`}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* === Wave Divider 2 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FBF6F2" />
          </svg>
        </div>

        {/* === SECTION 3: Timeline (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="Understanding the Caesarean Delivery Procedure" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                Knowing exactly what happens during a C-section can drastically reduce anxiety and help you feel fully prepared for the big day.
              </p>
              <VerticalTimeline items={surgicalTimeline} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 3 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 4: Preparation (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Preparing for a Planned Caesarean Section" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Proper preparation helps ensure a smooth, confident surgical experience and a faster postpartum recovery.
            </p>
            
            {/* Hero image banner */}
            <div className="rounded-[24px] overflow-hidden shadow-lg relative min-h-[320px] md:min-h-0 md:aspect-[21/9] w-full mb-8 group cursor-pointer">
              <Image 
                src="/images/lscs-prep-indian.webp" 
                alt="Pregnant Indian Woman Packing Hospital Bag" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#151722]/90 via-[#151722]/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white max-w-md z-10">
                <h4 className="text-[24px] font-bold mb-2 text-white drop-shadow-md">Preparation is Key</h4>
                <p className="text-white text-[15px] leading-relaxed drop-shadow-sm font-medium">Packing your hospital bag and discussing your birth plan early ensures a stress-free transition on the day of your planned caesarean.</p>
              </div>
            </div>
            
            {/* Grid of numbered cards — 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {preparationCards.map((card, index) => {
                const prepColors = [
                  { bg: 'bg-[#FDE8EC]', num: 'text-[#E8475F]', iconBg: 'bg-[#F9CDD5]' },
                  { bg: 'bg-[#FFF3E0]', num: 'text-[#F5A623]', iconBg: 'bg-[#FFE0B2]' },
                  { bg: 'bg-[#E8F5E9]', num: 'text-[#4CAF50]', iconBg: 'bg-[#C8E6C9]' },
                  { bg: 'bg-[#EDE7F6]', num: 'text-[#7C4DFF]', iconBg: 'bg-[#D1C4E9]' },
                  { bg: 'bg-[#E3F2FD]', num: 'text-[#2196F3]', iconBg: 'bg-[#BBDEFB]' },
                ];
                const c = prepColors[index % prepColors.length];
                return (
                  <div key={index} className={`${c.bg} p-7 rounded-[24px] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden border border-black/[0.03]`}>
                    {/* Step number watermark */}
                    <div className={`absolute -top-2 -right-1 text-[80px] font-black leading-none opacity-[0.06] ${c.num} pointer-events-none select-none`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    {/* Icon */}
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

        {/* === SECTION 5: Recovery + Why Choose + FAQ (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px] flex flex-col gap-[70px]">

            {/* Postnatal Care (Recovery Cards) */}
            <div>
              <AnimatedHeading 
                text="Recovery After a Caesarean Section" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
                While recovery from a C-section takes slightly longer than a normal delivery, dedicated postpartum care will ensure you heal comfortably and safely.
              </p>
              <CardStack items={recoveryCards} />
            </div>

            {/* Why Choose Us */}
            <div className="bg-[#151722] text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Choose Dr. Poonam's Women's Clinic for Caesarean Section Care?
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
                      <strong className="block text-[16px] text-white">Extensive Obstetric Expertise</strong>
                      <span className="text-white/80 text-[14px]">With over 15+ years of experience, we specialize in managing safe Caesarean deliveries, high-risk pregnancies, and VBAC cases across Keshav Nagar and Mundhwa, Pune.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Personalized Delivery Planning</strong>
                      <span className="text-white/80 text-[14px]">Every mother's journey is unique. We provide tailored monitoring, evidence-based recommendations, and customized birth plans focused entirely on maternal and fetal safety.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Compassionate Maternity Support</strong>
                      <span className="text-white/80 text-[14px]">From your first ultrasound through the operating room and your postpartum recovery, we provide continuous, empathetic, patient-centered maternity care.</span>
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
