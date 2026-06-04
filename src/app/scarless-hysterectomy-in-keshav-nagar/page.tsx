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
  Smile,
  Star,
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: "Best Scarless Hysterectomy (NDVH) in Keshav Nagar & Mundhwa | Dr. Poonam's Women's Clinic",
  description: "Get expert Non-Descent Vaginal Hysterectomy (NDVH) with no cuts or abdominal scars at Dr. Poonam's Women's Clinic in Keshav Nagar & Mundhwa, Pune. Transparent & evidence-based treatment. Book a consult today.",
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

  const procedureTimeline = [
    {
      title: 'Step 1: Pre-Operative Diagnostic Evaluation',
      description: 'Before surgery, Dr. Poonam conducts pelvic ultrasound scans to map the exact size of your uterus and confirm that it can safely pass through the vaginal canal.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Anesthesia & Internal Access',
      description: 'The procedure is performed under general or spinal anesthesia, ensuring you are completely pain-free. A circular incision is made internally around the cervix at the top of the vaginal canal.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 3: Uterine Vessel Ligation',
      description: 'Specialized surgical instruments are used to carefully clamp, tie off, and dissect the supporting blood vessels and ligaments holding the uterus in place.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 4: Uterine Extraction & Vault Closure',
      description: 'The uterus (and cervix) is gently extracted through the vagina. The top of the vagina (the vault) is then sutured closed with dissolvable internal threads, leaving zero external marks.',
      icon: <Heart className="w-5 h-5" />
    }
  ];

  const preparationCards = [
    { title: "Pre-Anesthetic Screening", description: "Mandatory blood investigations, ECG, and general health evaluations are completed to ensure physical fitness.", icon: <ClipboardList className="w-6 h-6 text-accent" /> },
    { title: "Strict Fasting Guidelines", description: "Expectant patients must follow strict fasting (no food or water) for 8 hours prior to the scheduled surgery.", icon: <Clock className="w-6 h-6 text-accent" /> },
    { title: "Post-Operative Packing", description: "Pack personal essentials, including comfortable loose clothing, sanitary pads, and basic toiletries for a 2-day hospital stay.", icon: <Home className="w-6 h-6 text-accent" /> },
    { title: "Discuss Medical List", description: "Inform Dr. Poonam of any daily medications (like blood-thinners or diabetic pills) to adjust dosages before surgery.", icon: <BookOpen className="w-6 h-6 text-accent" /> },
    { title: "Support Planning", description: "Arrange for family support to assist you at home for the first few days after discharge to facilitate restful healing.", icon: <Smile className="w-6 h-6 text-accent" /> }
  ];

  const recoveryCards = [
    {
      title: "Immediate Hospital Healing",
      description: "During the first 24-48 hours, you will receive pain relief and hydration in the ward. Early light walking is encouraged to promote blood circulation and prevent blood clots.",
      icon: <HeartPulse className="w-9 h-9 text-[#C0354A]" />,
      iconBg: 'rgba(232, 71, 95, 0.15)',
      bgGradient: 'linear-gradient(135deg, #FDE8EC 0%, #F3E7E9 40%, #E3EEFF 100%)',
      titleColor: '#4A154B',
      textColor: 'rgba(74, 21, 75, 0.78)'
    },
    {
      title: "At-Home Restoration",
      description: "Avoid lifting heavy weights, climbing stairs excessively, or bending forward during the first 2-3 weeks. Follow a fiber-rich diet to prevent constipation, which can strain internal sutures.",
      icon: <ShieldCheck className="w-9 h-9 text-[#5C35CC]" />,
      iconBg: 'rgba(124, 77, 255, 0.12)',
      bgGradient: 'linear-gradient(135deg, #EDE7F6 0%, #E0C3FC 40%, #8EC5FC 100%)',
      titleColor: '#1A1A5E',
      textColor: 'rgba(26, 26, 94, 0.78)'
    },
    {
      title: "Complete Internal Recovery",
      description: "It takes about 4 to 6 weeks for internal tissues to fully mend. During this healing window, strict avoidance of sexual intercourse, swimming, or douching is mandatory.",
      icon: <Smile className="w-9 h-9 text-[#2E7D32]" />,
      iconBg: 'rgba(76, 175, 80, 0.15)',
      bgGradient: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 40%, #DCEDC8 100%)',
      titleColor: '#1B5E20',
      textColor: 'rgba(27, 94, 32, 0.78)'
    }
  ];

  const faqs = [
    {
      question: 'What is the actual cost of a Scarless Hysterectomy (NDVH) in Pune?',
      answer: 'The total cost of a Non-Descent Vaginal Hysterectomy (NDVH) in Pune typically ranges between ₹80,000 and ₹1,30,000. This estimate is highly transparent and covers the surgeon\'s professional fee, operating theatre charges, standard anesthesia fees, standard surgical disposables, and a 24-48 hour hospital stay in a semi-private or private room. The final cost varies slightly depending on the specific hospital chosen for the procedure and the patient\'s general health status. Dr. Poonam provides a fully itemized breakdown during your initial consultation.'
    },
    {
      question: 'How does a scarless hysterectomy differ from a laparoscopic hysterectomy?',
      answer: 'While both are minimally invasive, a laparoscopic hysterectomy still requires 3 to 4 small keyhole cuts on your abdomen to insert camera ports. In contrast, a scarless hysterectomy (NDVH) is performed entirely through the natural vaginal canal, leaving zero external incisions, zero scars on the abdomen, and resulting in even less post-operative abdominal soreness.'
    },
    {
      question: 'Is a scarless hysterectomy possible for a large uterus or large fibroids?',
      answer: 'Yes. In many cases, a scarless hysterectomy can still be performed for large fibroids or an enlarged uterus. Dr. Poonam utilizes advanced techniques such as bisection or morcellation (carefully dividing the uterus into smaller, manageable sections internally) to safely retrieve it through the vaginal pathway without needing abdominal incisions.'
    },
    {
      question: 'How painful is recovery after an NDVH procedure?',
      answer: 'Since there are no cuts on the abdominal muscles, post-operative pain is significantly lower compared to open surgeries. Most patients describe a mild pelvic pressure or cramping sensation, which is easily managed with oral painkillers. Most women feel comfortable walking independently within 24 hours.'
    },
    {
      question: 'Who is not a candidate for a scarless hysterectomy?',
      answer: 'NDVH may not be recommended for women with severe pelvic adhesions (from multiple previous surgeries or severe endometriosis), suspected gynecological cancers, or a highly narrow vaginal canal that makes internal access restricted. Dr. Poonam performs a comprehensive diagnostic check to determine candidate suitability.'
    },
    {
      question: 'Will I experience menopause immediately after a hysterectomy?',
      answer: 'Not necessarily. A hysterectomy only removes the uterus (stopping menstrual cycles). If your ovaries are healthy and left intact, they will continue to produce hormones naturally, preventing immediate surgical menopause. Menopause only occurs if both ovaries are surgically removed (oophorectomy) during the procedure.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Scarless Hysterectomy (NDVH)" breadcrumbs={breadcrumbs} bgImage="/images/scarless-header.webp" />

        {/* === SECTION 1: What is Scarless Hysterectomy (NDVH)? (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[2.2/1] w-full max-h-[420px] bg-white p-4 border border-black/[0.03] group">
                <Image 
                  src="/images/scarless-prep.webp" 
                  alt="Non-Descent Vaginal Hysterectomy (NDVH) Scarless Uterus Removal Pelvic Anatomy Diagram" 
                  fill
                  className="object-contain group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Scarless Hysterectomy (NDVH)?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  Scarless Hysterectomy, clinically referred to as Non-Descent Vaginal Hysterectomy (NDVH), is a highly advanced, minimally invasive surgical technique for removing the uterus. By accessing the pelvic cavity entirely through the natural vaginal canal, it eliminates the need for any abdominal cuts, resulting in cosmetic preservation, dramatically less pain, and a much smoother recovery.
                </p>
                <p>
                  At <strong>Dr. Poonam's Women's Clinic</strong>, recognized as a premier gynecological care center in Keshav Nagar and Mundhwa, we specialize in offering NDVH for benign uterine conditions. Dr. Poonam provides compassionate counseling, rigorous pre-surgical assessments, and dedicated post-operative follow-up care to ensure that each patient mends quickly and safely.
                </p>
                <p>
                  We coordinate with leading local tertiary hospitals to execute all surgical procedures in fully sterile, advanced operating theatres. Our patient-first care philosophy ensures that you receive the highest medical standards, individualized attention, and transparent guidance at every step of your surgical path.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Hysterectomy Consultation Today
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

        {/* === SECTION 2: Benefits / Vaginal vs Abdominal Hysterectomy (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Vaginal vs. Abdominal Hysterectomy Comparison" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              According to global gynecological guidelines, a vaginal hysterectomy is the route of choice whenever technically feasible, due to its overwhelming advantages for recovery.
            </p>
            
            {/* Infographic comparing Scarless Vaginal vs Open Abdominal Hysterectomy */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[3/2] w-full max-h-[560px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/scarless-comparison.webp" 
                alt="Scarless Vaginal Hysterectomy (NDVH) vs Open Abdominal Hysterectomy Side-by-Side Comparison Infographic Chart" 
                fill
                className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* === Wave Divider 2 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FBF6F2" />
          </svg>
        </div>

        {/* === SECTION 3: Timeline / The Surgical Journey (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="The Surgical Journey (NDVH)" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                A scarless hysterectomy is performed entirely internally. The procedure generally takes 1 to 2 hours, leaving no abdominal cuts or visible marks.
              </p>
              <VerticalTimeline items={procedureTimeline} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 3 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 4: Preparing for a Safe Hysterectomy (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Preparing for a Safe Hysterectomy" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Proper preoperative planning helps ensure a smooth, secure surgical experience and sets the foundation for a rapid recovery.
            </p>
            
            {/* Bento image banner - replaced with standalone informational diagram */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/scarless-overview.webp" 
                alt="Hysterectomy Incision Site Comparison - Abdominal vs Laparoscopic vs Vaginal NDVH" 
                fill
                className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            
            {/* Grid of cards */}
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

        {/* === SECTION 5: Post-Operative Recovery Stages (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Post-Operative Recovery Stages" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Recovery from a scarless vaginal hysterectomy is remarkably fast, but allowing internal tissues to mend is crucial for long-term health.
            </p>
            <CardStack items={recoveryCards} />
          </div>
        </section>

        {/* === Wave Divider 5 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 6: Why Choose Dr. Poonam's Women's Clinic... (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Why Choose Us */}
            <div className="bg-[#151722] text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Choose Dr. Poonam's Women's Clinic for Scarless Hysterectomy Care?
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
                      <strong className="block text-[16px] text-white">Specialized Gynecological Surgery</strong>
                      <span className="text-white/80 text-[14px]">Over 10+ years of clinical experience successfully performing minimally invasive vaginal surgeries (NDVH) in Keshav Nagar, Mundhwa, Pune.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Empathetic & Personalized Consultations</strong>
                      <span className="text-white/80 text-[14px]">We provide direct, private one-on-one attention with Dr. Poonam at every appointment, ensuring transparent surgical guidance without rotating corporate clinic staff.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Safe Tertiary Coordination</strong>
                      <span className="text-white/80 text-[14px]">Dr. Poonam coordinates all surgical procedures in leading local tertiary hospitals, maintaining dedicated operating times and rigorous post-surgical follow-ups.</span>
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

        {/* === SECTION 7: FAQs & Final CTA (Cream bg) === */}
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
