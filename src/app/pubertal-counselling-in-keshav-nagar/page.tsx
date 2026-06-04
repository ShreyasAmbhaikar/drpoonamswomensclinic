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
  title: "Best Pubertal Counselling & Adolescent Health in Keshav Nagar & Mundhwa | Dr. Poonam's Women's Clinic",
  description: "Help your daughter navigate puberty with confidence. Gentle menstrual advice, hormonal wellness, and pubertal counselling under Dr. Poonam at Dr. Poonam's Women's Clinic in Keshav Nagar & Mundhwa, Pune. Book today.",
  alternates: {
    canonical: '/pubertal-counselling-in-keshav-nagar/',
  }
};

export default function PubertalCounsellingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Pubertal Counselling' },
  ];

  const adolescentWellnessAreas = [
    { 
      title: "Menarche Education & Period Prep", 
      description: "Explaining the menstrual cycle using interactive models, teaching correct usage and disposal of sanitary hygiene products, and tracking periods to eliminate fear.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Menstrual Irregularity & PCOS Care", 
      description: "Evaluating early indicators of hormonal imbalances, adolescent PCOS, or thyroid disorders that cause irregular periods, excessive cramping, or heavy flows.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Acne & Teen Weight Management", 
      description: "Addressing metabolic changes during puberty, managing hormonal acne outbreaks, and offering customized nutritional counseling for healthy weight maintenance.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Emotional Wellness & Body Image", 
      description: "Providing supportive, non-judgmental counseling to help adolescent girls manage sudden mood fluctuations, peer stress, and build positive body image confidence.", 
      icon: <Sparkles className="w-6 h-6 text-accent" /> 
    }
  ];

  const parentGuidelines = [
    { 
      title: "Fear-Free Preparation", 
      description: "Initiating open, positive discussions about physical changes and menstruation before they occur, framing menarche as a healthy, proud milestone of growing up.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Sanitary Kit & Tracking", 
      description: "Helping your daughter assemble a portable period hygiene kit and showing her how to utilize mobile apps or calendars to track cycle lengths and dates.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "HPV Vaccination Planning", 
      description: "Scheduling the cervical cancer vaccine (HPV vaccine) during early adolescence (recommended starting age 9 to 14) for optimal, life-long cervical immunity.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const journeySteps = [
    {
      title: 'Step 1: Warm Trust Building',
      description: 'A relaxed, conversational meeting with Dr. Poonam. We focus entirely on making the young girl feel comfortable, safe, respected, and heard.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Interactive Pubertal Education',
      description: 'Explaining reproductive anatomy, hormonal cycles, and bodily transitions using simple, friendly, and scientific educational models.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 3: Gentle Development Check',
      description: 'Conducting non-invasive height, weight, and general growth chart checks. We do not perform internal pelvic exams unless medically necessary.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 4: Empowered Self-Care Blueprint',
      description: 'Providing practical tips for tracking periods, managing pelvic cramps safely, maintaining sanitary hygiene, and maintaining a balanced, iron-rich diet.',
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  const comparisonData: [any, any] = [
    {
      title: "Normal Pubertal Milestones",
      theme: "secondary",
      items: [
        { feature: "First Period (Menarche)", isAvailable: "Usually begins naturally between ages 10 and 15." },
        { feature: "Cycle Consistency", isAvailable: "Irregular cycles are common for the first 1 to 2 years post-menarche." },
        { feature: "Skin & Weight", isAvailable: "Mild acne breakouts and normal weight changes due to hormones." },
        { feature: "Pelvic Sensation", isAvailable: "Mild pelvic cramping manageable with heating pads or basic rest." },
        { feature: "Emotional Vibe", isAvailable: "Manageable mood shifts as the teen adapts to new hormonal levels." }
      ]
    },
    {
      title: "When to Seek Clinical Help",
      theme: "primary",
      items: [
        { feature: "First Period (Menarche)", isAvailable: "No menstrual bleeding by age 15, or lack of breast development by age 13." },
        { feature: "Cycle Consistency", isAvailable: "Cycles consistently under 21 days, over 45 days, or periods lasting >7 days." },
        { feature: "Skin & Weight", isAvailable: "Severe cystic acne, sudden weight gains, or excess facial/body hair." },
        { feature: "Pelvic Sensation", isAvailable: "Severe, debilitating pain that causes the student to miss school days." },
        { feature: "Emotional Vibe", isAvailable: "Severe anxiety, withdrawal, or distressing body dysmorphia." }
      ]
    }
  ];

  const faqs = [
    {
      question: 'What is pubertal counselling and why is it important for adolescent girls?',
      answer: 'Pubertal counselling involves medical, educational, and psychological guidance tailored for girls transitioning through puberty. It helps teenagers understand biological changes, manage hormonal transitions, adopt healthy sanitary habits, and eliminates anxiety or fear surrounding their first period (menarche).'
    },
    {
      question: 'When should a young girl have her first gynaecological consultation?',
      answer: 'Medical guidelines recommend scheduling the first gynecological consult between ages 13 and 15, or earlier if menstrual problems occur. The first visit is strictly conversational and educational—designed to build trust, check developmental growth, and establish comfort with a specialist.'
    },
    {
      question: 'What is the actual, genuine cost of pubertal counselling at the clinic?',
      answer: 'At Dr. Poonam\'s Women\'s Clinic, we maintain absolute pricing transparency. A private, 45-minute pubertal counseling and adolescent wellness consultation with Dr. Poonam is ₹700. If baseline screening laboratory panels (such as thyroid or basic hormone profiles) are required, standard lab costs range from ₹1,500 to ₹3,000.'
    },
    {
      question: 'Are irregular periods normal during the first two years after menarche?',
      answer: 'Yes, it is common for menstrual cycles to be irregular for the first 1 to 2 years following menarche because the body\'s hormonal feedback loop (the HPO axis) is still maturing. However, if periods are missed for more than 3 months, occur more frequently than 21 days, or are accompanied by severe pain, an evaluation is recommended.'
    },
    {
      question: 'How does Dr. Poonam manage adolescent PCOS or hormonal acne?',
      answer: 'Dr. Poonam diagnoses teen PCOS through careful symptom analysis, growth tracking, and simple blood panels. We prioritize gentle, non-medicinal management first, including detailed insulin-sensitizing dietary guides, weight control programs, and targeted pelvic exercise schedules to restore hormonal balance naturally.'
    },
    {
      question: 'Can I schedule walk-in checkups for my daughter, and is the clinic open 24/7?',
      answer: 'Dr. Poonam\'s Women\'s Clinic operates strictly by prior appointment during dedicated morning and evening timings. This ensures adolescent patients receive a quiet, stress-free, and private environment without crowded waiting rooms. We are not a 24/7 walk-in clinic. You can contact us directly to book your daughter\'s session.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Pubertal Counselling" breadcrumbs={breadcrumbs} bgImage="/images/maternity_header.webp" />

        {/* === SECTION 1: What is Pubertal Counselling? (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[926/418] w-full max-h-[420px] max-w-[926px] mx-auto bg-white p-4 border border-black/[0.03] group">
                <Image 
                  src="/images/pubertal-counselling-overview.webp" 
                  alt="Educational adolescent growth materials and biological endocrine charts on a clinical table" 
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Pubertal Counselling?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  <strong>Pubertal Counselling</strong> is a specialized, supportive branch of adolescent gynaecology focused on guiding young girls through the physical, hormonal, and emotional transitions of puberty. It demystifies the biological process of menstruation, addresses common early gynaecological concerns (like irregular periods, severe cramping, or acne), and empowers teenagers with positive habits for long-term health.
                </p>
                <p>
                  At <strong>Dr. Poonam's Women's Clinic</strong>, the premier center for teen health and gynaecological care in Keshav Nagar and Mundhwa, Pune, we provide a warm, welcoming, and strictly confidential space for adolescent girls. Dr. Poonam acts as a gentle, encouraging mentor, explaining bodily changes using simple, interactive models and checking developmental milestones.
                </p>
                <p>
                  Our clinic is run single-handedly by Dr. Poonam, ensuring that your daughter receives consistent, personal, and supportive medical guidance at every visit. We coordinate all adolescent wellness checkups strictly by prior appointment during dedicated hours, maintaining a quiet, highly sterilized environment that eliminates anxiety and waiting room stress.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Adolescent Wellness Consultation Today
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

        {/* === SECTION 2: Normal Milestones vs. When to Seek Help: Comparison (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Normal Pubertal Milestones vs. When to Seek Help" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              It is often challenging for parents and teenagers to distinguish between normal developmental adjustments and issues requiring medical attention.
            </p>

            {/* Custom Comparison layout styled exactly like the comparison table in MTP / PCOD section */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              {/* Vertical dotted line with VS circle in the middle (Desktop Only) */}
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-[#E2E8F0] z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center font-bold text-[#C0354A] shadow-sm z-10">
                  VS
                </div>
              </div>

              {/* Left Card: Normal Pubertal Milestones */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Normal Milestones</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Expected Transitions. Natural Rhythm.</p>
                </div>
                
                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">First Period (Menarche)</span>
                      <p className="text-text text-[14px] leading-relaxed">Periods begin naturally between the ages of 10 and 15 years old.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Cycle Consistency</span>
                      <p className="text-text text-[14px] leading-relaxed">Cycles are irregular for the first 1 to 2 years post-menarche as hormones settle.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Skin & Weight Shifts</span>
                      <p className="text-text text-[14px] leading-relaxed">Mild breakouts and expected weight changes during growth spurts.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Pelvic Sensation</span>
                      <p className="text-text text-[14px] leading-relaxed">Mild pelvic cramping manageable with warmth, stretching, or light rest.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Emotional Vibe</span>
                      <p className="text-text text-[14px] leading-relaxed">Moderate, temporary mood changes as the brain adjusts to hormone levels.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: When to Seek Clinical Help */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">When to Seek Help</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Clinical Anomalies. Expert Care.</p>
                </div>

                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">First Period (Menarche)</span>
                      <p className="text-text text-[14px] leading-relaxed">No menstrual bleeding by age 15, or lack of breast development by age 13.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Cycle Consistency</span>
                      <p className="text-text text-[14px] leading-relaxed">Cycles consistently under 21 days, over 45 days, or bleeding lasting more than 7 days.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Skin & Weight Shifts</span>
                      <p className="text-text text-[14px] leading-relaxed">Severe cystic acne, rapid weight gain, or excess facial/body hair (PCOS signs).</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Pelvic Sensation</span>
                      <p className="text-text text-[14px] leading-relaxed">Severe, debilitating menstrual pain that causes the teenager to miss school.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Emotional Vibe</span>
                      <p className="text-text text-[14px] leading-relaxed">Severe anxiety, social withdrawal, or distressing body dysmorphia concerns.</p>
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

        {/* === SECTION 3: Key Areas of Adolescent Wellness (Cream bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Key Areas of Adolescent Wellness" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Our clinic focuses on helping teenagers navigate physical, metabolic, and emotional changes safely and with absolute confidence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {adolescentWellnessAreas.map((area, index) => {
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
                        {area.icon}
                      </div>
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug`}>
                        {area.title}
                      </h3>
                      <p className={`${style.descText} text-[14px] leading-relaxed`}>
                        {area.description}
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
              Preparing correctly for your daughter&apos;s first gynecological visit ensures she feels comfortable, builds trust, and adopts healthy self-care strategies.
            </p>
            
            {/* Bento image banner - exact 838*418 dimensions */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/pubertal-counselling-prep.webp" 
                alt="Clean medical charts and checklist preparing for an adolescent wellness checkup" 
                fill
                className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            
            {/* Grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {parentGuidelines.map((card, index) => {
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

        {/* === SECTION 5: The Adolescent Care Journey Step-by-Step (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="The Adolescent Care Journey" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                The first gynecological checkup should be welcoming and educational. We map out each stage of our conversational consultation.
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

        {/* === SECTION 6: Why Choose Dr. Poonam's Women's Clinic for Pubertal Counselling? (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Why Choose Us */}
            <div className="bg-[#151722] text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Choose Dr. Poonam's Women's Clinic for Pubertal Counselling?
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
                      <strong className="block text-[16px] text-white">Mentor-Like, Friendly Consultation Style</strong>
                      <span className="text-white/80 text-[14px]">Dr. Poonam communicates in an encouraging, warm manner that immediately diffuses adolescent anxiety, framing health discussions positively.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Dedicated Prior-Appointment Booking</strong>
                      <span className="text-white/80 text-[14px]">We maintain a private clinic structure. All sessions are booked by prior appointment during dedicated hours, preventing waiting room crowds and securing patient privacy.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Focus on Non-Invasive Lifestyle Medicine</strong>
                      <span className="text-white/80 text-[14px]">We prioritize metabolic health, insulin resistance control, and menstrual regulation through dietary education and pelvic exercise before advising medicinal therapies.</span>
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
