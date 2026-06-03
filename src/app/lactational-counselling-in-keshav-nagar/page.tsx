import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import ComparisonCards from '@/components/ui/ComparisonCards';
import HorizontalScrollCards from '@/components/ui/HorizontalScrollCards';
import CircularProcess from '@/components/ui/CircularProcess';
import { ShieldCheck, CheckCircle, Activity, Heart, Baby, Stethoscope } from 'lucide-react';

export const metadata = {
  title: "Expert Lactational Counselling in Keshav Nagar Pune | Breastfeeding Support",
  description: "Professional lactational counseling and breastfeeding support by Dr. Poonam. Learn correct latching, manage supply issues, and resolve mastitis in Keshav Nagar, Hadapsar, and Mundhwa.",
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

  const comparisonData: [any, any] = [
    {
      title: "Normal, Healthy Latch",
      theme: "secondary",
      items: [
        { feature: "Sensation", isAvailable: "Gentle tugging sensation, completely pain-free." },
        { feature: "Mouth Position", isAvailable: "Baby's mouth is wide open, lips flared like a fish." },
        { feature: "Areola Coverage", isAvailable: "More of the lower areola is covered than the upper." },
        { feature: "Swallowing", isAvailable: "Slow, rhythmic, audible swallowing sounds." },
        { feature: "Nipple Shape", isAvailable: "Nipple is round and elongated after feeding." }
      ]
    },
    {
      title: "Poor Latch (Needs Correction)",
      theme: "primary",
      items: [
        { feature: "Sensation", isAvailable: "Sharp, pinching, or persistent pain during the feed." },
        { feature: "Mouth Position", isAvailable: "Lips are tucked inward, mouth barely open." },
        { feature: "Areola Coverage", isAvailable: "Baby is only sucking on the tip of the nipple." },
        { feature: "Swallowing", isAvailable: "Clicking or smacking noises, taking in air." },
        { feature: "Nipple Shape", isAvailable: "Nipple looks flattened, pinched, or lipstick-shaped." }
      ]
    }
  ];

  const subServices = [
    { title: "Latch & Positioning", description: "Hands-on training for the correct hold and mouth alignment to prevent nipple pain and ensure efficient milk transfer.", icon: <Baby className="w-5 h-5" /> },
    { title: "Supply Management", description: "Scientific planning to regulate your lactation cycle, stimulate healthy production, and resolve weight gain concerns.", icon: <Activity className="w-5 h-5" /> },
    { title: "Engorgement Care", description: "Preventive education and medical therapy for painful breast fullness, blocked ducts, and clinical breast infections (mastitis).", icon: <Heart className="w-5 h-5" /> },
    { title: "Back-to-Work Pumping", description: "Empowering working mothers with guidance on choosing breast pumps, hygienic milk extraction, storage, and schedules.", icon: <ShieldCheck className="w-5 h-5" /> }
  ];

  const consultationSteps = [
    {
      title: 'Detailed Lactation Assessment',
      description: 'Analyzing breast anatomy, reviewing your feeding history, and examining the infant\'s oral structure to check for issues like tongue-tie or lip-tie.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Live Feeding Observation',
      description: 'We observe a live feeding session to identify mechanical issues in the latch, infant positioning, or milk transfer efficiency.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Corrective Coaching',
      description: 'Providing step-by-step practical adjustments to your hold (cradle, football, side-lying) and the baby\'s mouth alignment to achieve a painless latch.',
      icon: <Heart className="w-5 h-5" />
    },
    {
      title: 'Custom Care Plan',
      description: 'You leave with a personalized feeding chart, nutritional guidance to boost milk supply, and a clear plan to heal any existing nipple trauma.',
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  const supplyTips = [
    { title: "Frequent Nursing", description: "Milk is produced based on demand. Nurse or pump every 2-3 hours to trigger maximum production." },
    { title: "Hydration & Rest", description: "Dehydration tanks milk supply. Drink plenty of water and prioritize sleep when the baby sleeps." },
    { title: "Dietary Galactagogues", description: "Incorporate oatmeal, fenugreek, cumin, and fennel into your diet to naturally boost lactation." }
  ];

  const faqs = [
    {
      question: 'What is lactational counselling, and when should I see a consultant?',
      answer: 'Lactational counselling is clinical guidance provided by a trained medical professional to help new mothers establish and maintain a successful breastfeeding relationship. You should seek counselling if you experience latch difficulties, persistent nipple pain, concerns about low milk supply, or if your baby is not gaining weight adequately.'
    },
    {
      question: 'How do I know if my baby is latching correctly during breastfeeding?',
      answer: 'A correct latch is pain-free. The baby should take a large portion of the lower areola (not just the nipple) into their mouth, their lips should be flared outward like a fish, their chin should touch your breast, and you should hear soft, rhythmic swallowing sounds rather than clicking noises.'
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
      question: 'Is it normal to experience nipple pain and soreness when breastfeeding?',
      answer: 'While mild sensitivity is common during the first few days, severe or persistent nipple pain, cracking, or bleeding is not normal. It is almost always a sign of an incorrect latch or poor positioning. Working with Dr. Poonam to correct the latch can quickly resolve this pain and heal the tissue.'
    },
    {
      question: 'How can working mothers safely express and store breast milk?',
      answer: 'Mothers can express milk using manual or electric breast pumps. Extracted breast milk is safe at room temperature for up to 4 hours, in a standard refrigerator for up to 4 days, and in a deep freezer for 3-6 months. Always use BPA-free storage containers and thaw milk gently in warm water (never microwave it).'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Lactational Counselling" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/lactational-counselling-in-keshav-nagar/" />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/service-lactational.webp" 
                      alt="Mother holding baby close in a supportive lactational counselling session" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <AnimatedHeading 
                    text="What is Lactational Counselling?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
                  />
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Breastfeeding is a natural and beautiful process, but it is also a learned skill that requires patience, proper technique, and medical support. Many new mothers face unexpected difficulties in the early weeks, such as latching struggles, severe nipple pain, painful engorgement, or deep anxiety about whether their baby is getting enough milk.
                    </p>
                    <p>
                      At Dr Poonam’s Women’s Clinic in Keshav Nagar, Pune, we understand the emotional and physical vulnerabilities of the postpartum period. Dr. Poonam provides highly compassionate, step-by-step lactational counselling to help you overcome feeding barriers and enjoy a comfortable bonding experience. If you reside in Hadapsar or Mundhwa and are looking for a trusted breastfeeding consultant for maternity support, we are here to guide you with warmth and medical expertise.
                    </p>
                  </div>
                </div>

                {/* Comparison Section */}
                <div>
                  <AnimatedHeading 
                    text="Is Your Baby Latching Correctly?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[30px] text-[15px] leading-relaxed">
                    A poor latch is the leading cause of nipple pain and low milk supply. Here is how to tell the difference.
                  </p>
                  <ComparisonCards columns={comparisonData} />
                </div>

                {/* Horizontal Scroll Cards for Services */}
                <div className="w-[calc(100vw-32px)] lg:w-full -ml-4 lg:ml-0 px-4 lg:px-0">
                  <HorizontalScrollCards 
                    title="Our Lactation Support Services" 
                    subtitle="We offer comprehensive lactation care programs to ensure a confident, pain-free transition into motherhood."
                    cards={subServices} 
                  />
                </div>

                {/* Consultation Steps (Vertical Timeline) */}
                <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
                  <AnimatedHeading 
                    text="Our Step-by-Step Feeding Rework" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                    We take a methodical, hands-on approach to identify and correct any mechanical issues causing you pain.
                  </p>
                  <VerticalTimeline items={consultationSteps} />
                </div>

                {/* Supply Tips (Circular Process) */}
                <div>
                  <CircularProcess 
                    title="How to Boost Milk Supply naturally" 
                    steps={supplyTips} 
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
                        <span><strong>Maternal-Focused:</strong> We offer a highly empathetic, private, and home-like clinical environment.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Comprehensive Care:</strong> Detailed assessment of both the mother's physiology and the baby's oral mechanics.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Direct WhatsApp access:</strong> Reach out directly for quick check-ins during those challenging late-night feeds.</span>
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
