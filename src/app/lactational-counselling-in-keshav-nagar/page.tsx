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
  Calendar, 
  Clock, 
  ClipboardList,
  Shield,
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: "Best Lactational Counselling & Breastfeeding Support in Keshav Nagar & Mundhwa | Dr. Poonam's Women's Clinic",
  description: "Get compassionate, expert lactational counselling and breastfeeding support. Learn correct latching, manage supply issues, and treat mastitis under Dr. Poonam at Dr. Poonam's Women's Clinic in Keshav Nagar & Mundhwa, Pune. Book today.",
  alternates: {
    canonical: '/lactational-counselling-in-keshav-nagar/',
  }
};

export default function LactationalCounsellingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Lactational Counselling' },
  ];

  const lactationServices = [
    { 
      title: "Latch & Positioning Coaching", 
      description: "Hands-on guidance for correct body holds (cradle, football, side-lying) and baby mouth alignment to prevent nipple pain and ensure efficient milk transfer.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Supply & Volume Management", 
      description: "Developing evidence-based plans to regulate the lactation cycle, stimulate milk production, and resolve infant weight gain concerns.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Engorgement & Mastitis Care", 
      description: "Clinical evaluation and safe therapies for painful breast engorgement, blocked milk ducts, and medical care for breast infections (mastitis).", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Back-to-Work Pumping Blueprint", 
      description: "Empowering working mothers with guidance on choosing breast pumps, hygienic milk extraction techniques, schedules, and safe storage rules.", 
      icon: <Sparkles className="w-6 h-6 text-accent" /> 
    }
  ];

  const safetyGuidelines = [
    { 
      title: "Feeding Frequency Rules", 
      description: "Lactation is regulated entirely by supply and demand. Breastfeed or pump every 2 to 3 hours to trigger and maintain healthy milk production.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Hydration & Galactagogues", 
      description: "Dehydration reduces supply. Drink 3-4 liters of water daily and incorporate galactagogues (cumin, fenugreek, fennel, oats) into your maternal diet.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Safe Expressing & Milk Storage", 
      description: "Express using sterile pumps. Store breast milk at room temp up to 4 hours, in a fridge up to 4 days, or freezer up to 3-6 months. Thaw gently.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const journeySteps = [
    {
      title: 'Step 1: Detailed Feeding History',
      description: 'A quiet clinical consult with Dr. Poonam to review birth history, feeding schedules, diaper counts, weight charts, and maternal symptoms.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Infant Fetal Oral Assessment',
      description: 'Gently checking the baby\'s lips, palate, and tongue movement to rule out anatomical barriers to latching (like tongue-tie or lip-tie).',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 3: Live Feeding Observation',
      description: 'Dr. Poonam observes a live feeding session to diagnose mechanical issues in latching, infant neck positioning, and suck-swallow coordination.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 4: Corrective Hold Coaching',
      description: 'Hands-on practice to adjust baby\'s head tilt, neck support, and lip flaring. You leave with a custom nutritional plan and nipple healing guide.',
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  const comparisonData: [any, any] = [
    {
      title: "Normal Healthy Latch",
      theme: "secondary",
      items: [
        { feature: "Maternal Sensation", isAvailable: "A gentle, firm tugging sensation on the breast; entirely pain-free." },
        { feature: "Baby Mouth Flare", isAvailable: "Mouth is open wide; lips are flared outward like a fish." },
        { feature: "Areola Coverage", isAvailable: "More of the lower areola is covered than the upper areola." },
        { feature: "Swallow Sounds", isAvailable: "Slow, rhythmic, audible swallowing noises (puff/gulp sounds)." },
        { feature: "Post-Feed Nipple", isAvailable: "Nipple looks rounded and elongated without distortion." }
      ]
    },
    {
      title: "Poor Latch (Needs Rework)",
      theme: "primary",
      items: [
        { feature: "Maternal Sensation", isAvailable: "Sharp, pinching, or persistent pain during the feed." },
        { feature: "Baby Mouth Flare", isAvailable: "Lips are tucked inward; baby is biting on the nipple." },
        { feature: "Areola Coverage", isAvailable: "Baby is only sucking on the tip of the nipple." },
        { feature: "Swallow Sounds", isAvailable: "Frequent clicking or smacking noises; swallowing is irregular." },
        { feature: "Post-Feed Nipple", isAvailable: "Nipple looks flattened, pinched, or lipstick-shaped." }
      ]
    }
  ];

  const faqs = [
    {
      question: 'What is lactational counselling and when should I see a consultant?',
      answer: 'Lactational counselling is clinical guidance provided by a trained medical professional to help new mothers establish and maintain a successful breastfeeding relationship. You should seek counselling if you experience latch difficulties, persistent nipple pain, concerns about low milk supply, or if your baby is not gaining weight adequately.'
    },
    {
      question: 'How do I know if my baby is latching correctly during breastfeeding?',
      answer: 'A correct latch is pain-free. The baby should take a large portion of the lower areola (not just the nipple) into their mouth, their lips should be flared outward like a fish, their chin should touch your breast, and you should hear soft, rhythmic swallowing sounds rather than clicking noises.'
    },
    {
      question: 'What is the actual, genuine cost of lactational counselling at the clinic?',
      answer: 'At Dr. Poonam\'s Women\'s Clinic, transparency is paramount. A 45-minute clinical lactation assessment and hands-on coaching session with Dr. Poonam is ₹700. Post-procedure checks or follow-up latch reviews are ₹600. Outpatient therapies for engorgement or blocked duct management range from ₹1,000 to ₹2,500 depending on complexity.'
    },
    {
      question: 'What can I do to increase a low breast milk supply naturally?',
      answer: 'Supply is regulated by demand and supply. The most effective way to increase milk is frequent, thorough emptying of the breasts through direct feeding or pumping (every 2-3 hours). Additionally, staying well-hydrated, consuming nutritious meals containing galactagogues (like cumin, fenugreek, and fennel), and resting well can boost supply. Dr. Poonam can prescribe safe medications if needed.'
    },
    {
      question: 'How can I prevent or treat painful blocked ducts and mastitis?',
      answer: 'To prevent blocked ducts, ensure the breasts are fully emptied at each feed, alternate feeding positions, and avoid tight bras. If you develop a hard, painful lump or fever (signs of mastitis), apply warm compresses, gently massage the area towards the nipple while feeding, nurse frequently, and consult Dr. Poonam immediately for safe antibiotics.'
    },
    {
      question: 'Can I walk in with my newborn for breastfeeding support and is the clinic open 24/7?',
      answer: 'Dr. Poonam\'s Women\'s Clinic operates strictly by prior appointment during dedicated morning and evening timings. We do not support 24/7 walk-in emergency queues. This ensures that new mothers and newborns receive a quiet, private, and highly sterilized lobby space without waiting crowds. Please contact us directly to schedule your session.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Lactational Counselling" breadcrumbs={breadcrumbs} bgImage="/images/maternity_header.webp" />

        {/* === SECTION 1: What is Lactational Counselling? (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[926/418] w-full max-h-[420px] max-w-[926px] mx-auto bg-white p-4 border border-black/[0.03] group">
                <Image 
                  src="/images/lactational-overview.webp" 
                  alt="Mother holding infant close in a supportive, private lactational counselling session" 
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Lactational Counselling?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  <strong>Lactational Counselling</strong> represents the specialized clinical guidance, physical coaching, and medical support provided to new mothers to establish, optimize, and maintain a successful breastfeeding relationship. Routine lactation support involves diagnosing incorrect latches, addressing low milk supply concerns, treating painful breast engorgement or blocked milk ducts, and advising on pump schedules and milk storage.
                </p>
                <p>
                  At <strong>Dr. Poonam's Women's Clinic</strong>, the leading maternal and postpartum wellness clinic in Keshav Nagar and Mundhwa, Pune, we treat breastfeeding as a learned skill that requires patience and specialist guidance. Dr. Poonam provides compassionate, hands-on corrective latch coaching, helping mothers overcome physical discomfort and nurse with complete confidence.
                </p>
                <p>
                  Our clinic is run single-handedly by Dr. Poonam, ensuring that you receive direct, personal, and supportive medical guidance at every visit. We coordinate all lactation sessions strictly by prior appointment during dedicated hours, maintaining a quiet, highly sterilized environment that eliminates anxiety and public waiting room stress for you and your newborn.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Lactation Consultation Today
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

        {/* === SECTION 2: Normal Healthy Latch vs. Poor Latch: Comparison (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Normal Healthy Latch vs. Poor Latch" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              A poor latch is the leading cause of nipple pain, sore breasts, and low milk production. Understanding the mechanical differences is key to early correction.
            </p>

            {/* Custom Comparison layout styled exactly like the comparison table in MTP / PCOD section */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              {/* Vertical dotted line with VS circle in the middle (Desktop Only) */}
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-[#E2E8F0] z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center font-bold text-[#C0354A] shadow-sm z-10">
                  VS
                </div>
              </div>

              {/* Left Card: Normal Healthy Latch */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Normal Healthy Latch</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Painless Feeding. Rhythmic Swallowing.</p>
                </div>
                
                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Maternal Sensation</span>
                      <p className="text-text text-[14px] leading-relaxed">A gentle, firm tugging sensation on the breast tissue; completely pain-free.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Baby Mouth Flare</span>
                      <p className="text-text text-[14px] leading-relaxed">Mouth is open wide; baby&apos;s lips are flared outward like a fish.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Areola Coverage</span>
                      <p className="text-text text-[14px] leading-relaxed">More of the lower portion of the areola is covered than the upper portion.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Swallow Sounds</span>
                      <p className="text-text text-[14px] leading-relaxed">Slow, rhythmic, and audible swallowing noises (puff/gulp sounds) are heard.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Post-Feed Nipple</span>
                      <p className="text-text text-[14px] leading-relaxed">Nipple looks rounded, elongated, and symmetrical after the session ends.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Poor Latch (Needs Rework) */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Poor Latch (Needs Rework)</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Painful Pinching. Inefficient Feeding.</p>
                </div>

                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Maternal Sensation</span>
                      <p className="text-text text-[14px] leading-relaxed">Sharp, pinching, or persistent pain throughout the feeding session.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Baby Mouth Flare</span>
                      <p className="text-text text-[14px] leading-relaxed">Lips are tucked inward; baby is biting down on the nipple tissue.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Areola Coverage</span>
                      <p className="text-text text-[14px] leading-relaxed">Baby is only sucking on the tip of the nipple, missing the breast gland.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Swallow Sounds</span>
                      <p className="text-text text-[14px] leading-relaxed">Frequent clicking or smacking noises; baby swallows air frequently.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Post-Feed Nipple</span>
                      <p className="text-text text-[14px] leading-relaxed">Nipple looks flattened, pinched, or lipstick-shaped when baby detaches.</p>
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

        {/* === SECTION 3: Key Lactation Support Services We Provide (Cream bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Key Lactation Support Services We Provide" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Our clinic offers dedicated, gentle post-natal coaching to help you establish a pain-free, healthy feeding routine with your newborn.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {lactationServices.map((service, index) => {
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
                        {service.icon}
                      </div>
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug`}>
                        {service.title}
                      </h3>
                      <p className={`${style.descText} text-[14px] leading-relaxed`}>
                        {service.description}
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
              Adopting proper breastfeeding routines and storage protocols is essential to prevent mastitis infections and support healthy infant development.
            </p>
            
            {/* Bento image banner - exact 838*418 dimensions */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/lactational-prep.webp" 
                alt="Postpartum maternal guidance charts and clean infant nutrition checklist displays" 
                fill
                className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            
            {/* Grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyGuidelines.map((card, index) => {
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

        {/* === SECTION 5: The Feeding Assessment & Rework Process Step-by-Step (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="Our Feeding Assessment & Rework Process" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                We follow a hands-on, highly encouraging clinical path to help you correct latch mechanics and establish comfortable feeding.
              </p>
              <VerticalTimeline items={journeySteps} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 5 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 6: Why Choose Dr. Poonam's Women's Clinic for Lactational Counselling? (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Why Choose Us */}
            <div className="bg-[#151722] text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Choose Dr. Poonam's Women's Clinic for Lactational Counselling?
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
                      <strong className="block text-[16px] text-white">Empathetic, Postpartum-Focused Consultation</strong>
                      <span className="text-white/80 text-[14px]">Dr. Poonam communicates in a warm, reassuring style, addressing postpartum physical vulnerabilities and anxiety with ultimate patient care.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Dedicated Prior-Appointment Schedule</strong>
                      <span className="text-white/80 text-[14px]">We coordinate all lactation checkups strictly by prior appointment during dedicated timings. This prevents waiting room crowding and ensures a calm, sterilized space.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Direct Specialist Attention</strong>
                      <span className="text-white/80 text-[14px]">You consult Dr. Poonam personally at every session. Sensitive details about lactation, infection symptoms, or breast pain are discussed in a strictly private space.</span>
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
