import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import ComparisonCards from '@/components/ui/ComparisonCards';
import HorizontalScrollCards from '@/components/ui/HorizontalScrollCards';
import CircularProcess from '@/components/ui/CircularProcess';
import { ShieldCheck, CheckCircle, Heart, Activity, Smile } from 'lucide-react';

export const metadata = {
  title: "Pubertal Counselling & Adolescent Health in Keshav Nagar Pune",
  description: "Help teenagers transition smoothly through puberty. Expert menstrual advice, hormonal counselling, and adolescent health consultations by Dr. Poonam serving Keshav Nagar, Kharadi, and Hadapsar.",
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

  const comparisonData: [any, any] = [
    {
      title: "Normal Pubertal Changes",
      theme: "secondary",
      items: [
        { feature: "Menarche", isAvailable: "Starting periods between ages 10 and 15." },
        { feature: "Cycle Regularity", isAvailable: "Irregular cycles for the first 1-2 years are normal." },
        { feature: "Skin Changes", isAvailable: "Mild breakouts or oily skin due to hormone shifts." },
        { feature: "Growth", isAvailable: "Sudden growth spurts and breast development." },
        { feature: "Mood", isAvailable: "Occasional mood swings as the brain adjusts." }
      ]
    },
    {
      title: "When to Seek Help",
      theme: "primary",
      items: [
        { feature: "Menarche", isAvailable: "No first period by the age of 15." },
        { feature: "Cycle Regularity", isAvailable: "Bleeding lasting >7 days, or cycles <21 days apart." },
        { feature: "Skin Changes", isAvailable: "Severe, cystic acne that doesn't respond to basic care." },
        { feature: "Growth", isAvailable: "Rapid, unexplained weight gain or excess facial hair." },
        { feature: "Mood", isAvailable: "Severe pelvic pain causing missed school days." }
      ]
    }
  ];

  const subServices = [
    { title: "Menarche Education", description: "Helping young girls understand menstruation, correct sanitary product usage, and cycle tracking without fear.", icon: <Smile className="w-5 h-5" /> },
    { title: "Irregular Period Evaluation", description: "Identifying and treating early indicators of PCOS or thyroid disorders to regulate menstrual cycles.", icon: <Activity className="w-5 h-5" /> },
    { title: "Acne & Weight Management", description: "Addressing distressing pubertal concerns like acne and rapid weight gain through dietary changes.", icon: <Heart className="w-5 h-5" /> },
    { title: "Emotional Wellness", description: "Comforting, friendly counseling to help adolescents manage mood fluctuations and body image issues.", icon: <Smile className="w-5 h-5" /> },
    { title: "HPV Vaccine Planning", description: "Scheduling the cervical cancer vaccine during early adolescence for maximum lifelong immunity.", icon: <ShieldCheck className="w-5 h-5" /> }
  ];

  const consultationJourney = [
    {
      title: 'Warm Welcome & Trust Building',
      description: 'The first visit is purely conversational. Dr. Poonam ensures a friendly, relaxed environment where the adolescent feels safe, respected, and heard.',
      icon: <Smile className="w-5 h-5" />
    },
    {
      title: 'Open Dialogue',
      description: 'Discussing the biological changes of puberty using simple, interactive models. Answering any questions about anatomy or menstruation without judgment.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Non-Invasive Assessment',
      description: 'If necessary, a basic, non-invasive check of height, weight, and general development is conducted. No internal pelvic exams are performed unless medically required.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Empowerment & Education',
      description: 'Providing the teenager with practical tools for tracking her cycle, maintaining hygiene, managing period cramps, and eating a balanced diet.',
      icon: <Heart className="w-5 h-5" />
    }
  ];

  const wellnessFocusAreas = [
    { title: "Understanding Anatomy", description: "Simple explanations of reproductive anatomy to demystify bodily changes." },
    { title: "Hormonal Balance", description: "Explaining how estrogen and progesterone regulate growth and cycles." },
    { title: "Nutrition & Lifestyle", description: "Guidance on iron-rich diets, physical activity, and sleep hygiene." }
  ];

  const faqs = [
    {
      question: 'What is pubertal counselling and why is it important for young girls?',
      answer: 'Pubertal counselling involves medical, physical, and psychological guidance for adolescents transitioning through puberty. It helps girls understand physical changes, manage hormonal shifts, and prevent anxiety or fear surrounding their first period (menarche).'
    },
    {
      question: 'When should a young girl have her first gynaecologist visit?',
      answer: 'The American College of Obstetricians and Gynecologists recommends that a girl’s first visit to a gynecologist take place between the ages of 13 and 15. The first visit is typically just a friendly, conversational consultation to build trust, answer questions, and check general development.'
    },
    {
      question: 'Are irregular periods normal in the first two years after menarche?',
      answer: 'Yes, it is common for periods to be irregular for the first 1 to 2 years after menarche because the body’s hormonal pathways are still maturing. However, if periods are missed for more than 3 months, are extremely heavy, or occur more frequently than every 21 days, a clinical evaluation by Dr. Poonam is recommended.'
    },
    {
      question: 'How can I help my daughter prepare for her first period (menarche)?',
      answer: 'You can prepare her by talking openly about menstruation before it starts, explaining that it is a healthy, normal process, and showing her how to use sanitary pads or menstrual cups. Having a supportive talk or scheduling a friendly pubertal counseling session with Dr. Poonam can alleviate any fear.'
    },
    {
      question: 'What is pubertal PCOS, and how do weight and acne relate to it?',
      answer: 'Polycystic Ovary Syndrome (PCOS) can begin during adolescence. It causes hormonal imbalances leading to irregular periods, persistent acne, and unexplained weight gain due to insulin resistance. Dr. Poonam helps diagnose this early through hormonal panels and manages it with custom lifestyle and dietary counseling.'
    },
    {
      question: 'How does Dr. Poonam ensure comfort and privacy during adolescent consultations?',
      answer: 'Dr. Poonam adopts a gentle, friendly, and strictly confidential approach. Adolescent conversations are conducted without judgment, using positive reinforcement, simple models, and private settings to make teenage patients feel safe and comfortable sharing their symptoms.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Pubertal Counselling" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/pubertal-counselling-in-keshav-nagar/" />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/service-pubertal-counselling.webp" 
                      alt="Printed Adolescent Growth Charts and Female Endocrine Diagrams on Doctor Table" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <AnimatedHeading 
                    text="What is Pubertal Counselling?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
                  />
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Puberty is a major milestone in a young girl’s life, marked by rapid physical, hormonal, and emotional transitions. Navigating these changes can often be confusing, stressful, or frightening for both teenagers and their parents. Pubertal counseling provides teenagers with accurate, comforting medical information, demystifies biological processes, and establishes healthy self-care habits for a lifetime of wellness.
                    </p>
                    <p>
                      At Dr Poonam’s Women’s Clinic in Keshav Nagar, Pune, we provide a warm, encouraging, and highly welcoming space for adolescent girls. Dr. Poonam acts as a trusted guide, offering friendly counseling on menstruation, hormonal cycles, acne management, and psychological adjustments. If you reside in Kharadi or Hadapsar and are searching for a compassionate gynaecologist for puberty consultations, our clinic is here to help your daughter transition smoothly and confidently.
                    </p>
                  </div>
                </div>

                {/* Comparison Section */}
                <div>
                  <AnimatedHeading 
                    text="Navigating the Changes" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[30px] text-[15px] leading-relaxed">
                    It can be hard to know what is a normal part of growing up and what requires a doctor's attention. Here is a quick guide.
                  </p>
                  <ComparisonCards columns={comparisonData} />
                </div>

                {/* Horizontal Scroll Cards for Services */}
                <div className="w-[calc(100vw-32px)] lg:w-full -ml-4 lg:ml-0 px-4 lg:px-0">
                  <HorizontalScrollCards 
                    title="Our Adolescent Care Services" 
                    subtitle="We offer dedicated, gentle counselling tailored for the unique physiological and emotional needs of teenagers."
                    cards={subServices} 
                  />
                </div>

                {/* Consultation Journey (Vertical Timeline) */}
                <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
                  <AnimatedHeading 
                    text="What to Expect at the First Visit" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                    The first gynecological visit should never be scary. We focus entirely on education and comfort.
                  </p>
                  <VerticalTimeline items={consultationJourney} />
                </div>

                {/* Wellness Focus (Circular Process) */}
                <div>
                  <CircularProcess 
                    title="Core Areas of Education" 
                    steps={wellnessFocusAreas} 
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
                        <span><strong>Friendly & Comfortable Atmosphere:</strong> Conversations are conducted in a warm, friendly style, feeling like a conversation with a mentor.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Adolescent-Centric Approach:</strong> Explaining complex hormonal or physical shifts in easy, encouraging, and relatable ways.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Total Privacy & Trust:</strong> Creating a safe, non-judgmental space for teenagers to voice sensitive concerns.</span>
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
