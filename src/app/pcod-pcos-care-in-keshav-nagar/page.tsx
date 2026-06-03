import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import SymptomGrid from '@/components/ui/SymptomGrid';
import ComparisonCards from '@/components/ui/ComparisonCards';
import HorizontalScrollCards from '@/components/ui/HorizontalScrollCards';
import { Heart, Activity, CheckCircle, Shield, Award, Calendar, AlertCircle } from 'lucide-react';

export const metadata = {
  title: "PCOD & PCOS Care Specialist in Keshav Nagar Pune | Dr Poonam's Clinic",
  description: "Specialized PCOD & PCOS treatment at Dr Poonam's Women's Clinic in Keshav Nagar, Pune. Expert hormonal management, low-GI diet guides, and fertility tracking for patients in Hadapsar and Magarpatta.",
  alternates: {
    canonical: '/pcod-pcos-care-in-keshav-nagar/',
  }
};

export default function PcodCarePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'PCOD Care' },
  ];

  const comparisonData: [any, any] = [
    {
      title: "PCOD (Polycystic Ovarian Disease)",
      theme: "secondary",
      items: [
        { feature: "Nature of Condition", isAvailable: "Mild hormonal imbalance where ovaries release immature, partially mature eggs." },
        { feature: "Severity", isAvailable: "Considered less severe. Ovaries still function relatively normally." },
        { feature: "Fertility Impact", isAvailable: "Women can often still ovulate and conceive naturally with minimal help." },
        { feature: "Systemic Effects", isAvailable: "Primarily affects the ovaries, less impact on overall metabolic health." },
        { feature: "Management", isAvailable: "Often managed entirely through diet, exercise, and lifestyle changes." }
      ]
    },
    {
      title: "PCOS (Polycystic Ovarian Syndrome)",
      theme: "primary",
      items: [
        { feature: "Nature of Condition", isAvailable: "Complex metabolic and endocrine disorder involving high androgen levels." },
        { feature: "Severity", isAvailable: "More severe, significantly disrupting the entire endocrine system." },
        { feature: "Fertility Impact", isAvailable: "Leading cause of anovulatory infertility; conception often requires medical intervention." },
        { feature: "Systemic Effects", isAvailable: "Linked to insulin resistance, obesity, type 2 diabetes, and cardiovascular risks." },
        { feature: "Management", isAvailable: "Requires long-term medical management, insulin sensitizers, and lifestyle overhaul." }
      ]
    }
  ];

  const symptoms = [
    { title: "Irregular Periods", description: "Infrequent, irregular, or prolonged menstrual cycles.", icon: <Calendar className="w-5 h-5" /> },
    { title: "Excess Androgen", description: "Elevated male hormone levels leading to physical signs.", icon: <Activity className="w-5 h-5" /> },
    { title: "Hirsutism", description: "Excessive facial and body hair growth, especially on the chin and chest.", icon: <AlertCircle className="w-5 h-5" /> },
    { title: "Severe Acne", description: "Deep cystic acne on the face, chest, and upper back.", icon: <AlertCircle className="w-5 h-5" /> },
    { title: "Weight Gain", description: "Unexplained weight gain, particularly around the abdomen (visceral fat).", icon: <Heart className="w-5 h-5" /> },
    { title: "Hair Thinning", description: "Male-pattern baldness or significant thinning of hair on the scalp.", icon: <AlertCircle className="w-5 h-5" /> }
  ];

  const causesCards = [
    { title: "Insulin Resistance", description: "Cells become resistant to the action of insulin, causing blood sugar levels to rise and the body to produce more insulin. Excess insulin increases androgen production." },
    { title: "Low-Grade Inflammation", description: "Women with PCOS often experience chronic low-grade inflammation, which stimulates polycystic ovaries to produce androgens, leading to heart and blood vessel problems." },
    { title: "Heredity", description: "Research suggests that certain genes might be linked to PCOS. Having a mother or sister with PCOS significantly increases your risk." },
    { title: "Excess Androgen", description: "The ovaries naturally produce small amounts of male hormones. In PCOS, they produce unusually high levels, preventing ovulation and causing acne and hair growth." }
  ];

  const treatmentTimeline = [
    {
      title: 'Hormonal & Diagnostic Screening',
      description: 'Conducting comprehensive metabolic profiles and hormone panels (LH, FSH, prolactin, fasting insulin, and thyroid) coupled with high-resolution pelvic ultrasound scans to analyze ovarian follicle counts and thickness.'
    },
    {
      title: 'Customized Low-GI Indian Diet Plans',
      description: 'Creating personalized dietary charts focused on low-glycemic, anti-inflammatory whole foods suitable for Indian kitchens. This helps stabilize blood glucose and mitigate insulin resistance—the primary driver of PCOD.'
    },
    {
      title: 'Custom Fitness & Active Workouts',
      description: 'Formulating sustainable workout schedules combining strength training and aerobic exercises. Just 150 minutes of weekly activity helps burn excess abdominal fats and improves insulin receptor sensitivity.'
    },
    {
      title: 'Targeted Medical Management',
      description: 'Prescribing evidence-based therapeutic options like insulin sensitizers (metformin), cycle regulators, or advanced ovulation-induction medications for patients attempting to conceive.'
    },
    {
      title: 'Stress Relief & Cortisol Control',
      description: 'Guiding you through mindfulness techniques, sleep hygiene adjustments, and stress management protocols designed to lower cortisol levels and regulate endocrine pathways.'
    },
    {
      title: 'Long-term Ovulation Monitoring',
      description: 'Providing regular follicular tracking scans and biochemical reviews to measure hormonal progress, helping to prevent complications such as type 2 diabetes or cardiovascular risks.'
    }
  ];

  const faqs = [
    {
      question: 'Can PCOD lead to infertility, and is natural conception possible?',
      answer: 'Yes, PCOD and PCOS are leading causes of anovulatory infertility, where irregular cycles interfere with egg release. However, natural conception is highly achievable. Under Dr. Poonam’s care, integrating structured weight management, low-GI diet routines, and targeted ovulation induction medications successfully restores ovulation and supports healthy pregnancies.'
    },
    {
      question: 'How do I find a reliable PCOD specialist near me in Keshav Nagar or Mundhwa?',
      answer: 'If you are looking for a PCOD/PCOS doctor near me in Keshav Nagar, Hadapsar, Magarpatta, or surrounding areas, Dr Poonam\'s Women\'s Clinic is a top-rated healthcare provider. Located centrally on Mantra Mesmer Road, we provide customized, holistic treatment plans targeting the root causes of hormonal imbalance.'
    },
    {
      question: 'Can weight loss completely reverse the symptoms of PCOS or PCOD?',
      answer: 'While PCOD cannot be permanently cured, losing even 5% to 10% of your body weight has been clinically proven to reverse symptoms. Weight reduction dramatically reduces insulin resistance, lowers androgen levels, restores regular menstrual cycles, and significantly improves ovulation and fertility rates.'
    },
    {
      question: 'What are the long-term health risks if PCOS is left untreated?',
      answer: 'If PCOS remains unmanaged for years, it can lead to chronic metabolic complications. These include an elevated risk of developing gestational diabetes, type 2 diabetes, high blood pressure, endometrial hyperplasia (due to infrequent shedding of the uterine lining), abnormal cholesterol profiles, and heart diseases.'
    },
    {
      question: 'Is it safe to take oral contraceptives for treating PCOD?',
      answer: 'Yes, for women who are not trying to get pregnant, oral contraceptive pills (birth control) are a standard and safe treatment. They help regulate the menstrual cycle, lower androgen levels, and clear up acne. Dr. Poonam carefully selects the appropriate formulation based on your specific health profile.'
    },
    {
      question: 'What foods should I absolutely avoid if I have PCOD?',
      answer: 'It is crucial to avoid highly processed foods, refined carbohydrates (like white bread, pastries), sugary drinks, and excess dairy. These foods cause rapid spikes in blood sugar, exacerbating insulin resistance and worsening hormonal imbalances.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="PCOD & PCOS Care" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/pcod-pcos-care-in-keshav-nagar/" />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/pcod-care.webp" 
                      alt="Microscope and Laboratory Hormonal Blood Test Analysis for PCOD PCOS" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <AnimatedHeading 
                    text="What is PCOD & PCOS Care?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
                  />
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Polycystic Ovarian Disease (PCOD) and Polycystic Ovarian Syndrome (PCOS) are highly prevalent endocrine disorders affecting reproductive-aged women. Characterized by hormonal imbalances and insulin resistance, these conditions cause multiple fluid-filled sacs (cysts) in the ovaries, leading to irregular menstrual cycles, heavy periods, skin issues, rapid weight gain, and ovulation difficulties.
                    </p>
                    <p>
                      At Dr Poonam's Women's Clinic in Keshav Nagar, Pune, we approach PCOD care holistically. Rather than simply managing the symptoms, Dr. Poonam designs personalized medical and lifestyle guidelines, helping you manage insulin levels, normalize ovulation, and restore emotional well-being. Whether you reside in nearby Hadapsar or Magarpatta, our center provides accessible, expert guidance to manage this condition naturally.
                    </p>
                  </div>
                </div>

                {/* Comparison Section */}
                <div>
                  <AnimatedHeading 
                    text="Understanding the Difference" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[30px] text-[15px] leading-relaxed">
                    While often used interchangeably, PCOD and PCOS are distinctly different conditions. Understanding which you have is the first step toward effective management.
                  </p>
                  <ComparisonCards columns={comparisonData} />
                </div>

                {/* Symptoms Grid */}
                <div>
                  <SymptomGrid 
                    title="Common Symptoms to Watch For" 
                    symptoms={symptoms} 
                  />
                </div>

                {/* Causes Horizontal Cards */}
                <div className="w-[calc(100vw-32px)] lg:w-full -ml-4 lg:ml-0 px-4 lg:px-0">
                  <HorizontalScrollCards 
                    title="What Causes PCOD/PCOS?" 
                    subtitle="While the exact cause is unknown, several key factors play a significant role in developing the condition."
                    cards={causesCards} 
                  />
                </div>

                {/* Treatment Journey (Vertical Timeline) */}
                <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
                  <AnimatedHeading 
                    text="Our Holistic Treatment Pathway" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                    If you are searching for a PCOD clinic near me around the area of Hadapsar or Magarpatta, you will find our treatment methodology unique. We structure your recovery across <strong>six primary pillars</strong> designed to reset your metabolism.
                  </p>
                  <VerticalTimeline items={treatmentTimeline} />
                </div>

                {/* Why Choose Us */}
                <div className="bg-[#151722] text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center gap-[45px]">
                  <div className="w-full md:w-2/3 flex flex-col gap-6">
                    <h3 className="text-[26px] font-bold text-white leading-tight">
                      Why Choose Dr. Poonam's Clinic for PCOD Care?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Root-Cause Focus:</strong> Addressing insulin resistance and lifestyle choices rather than temporary symptom blocking.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Custom Diet & Exercise Maps:</strong> Direct dietary planning and physical activity templates modified for Indian lifestyles.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Fertility Restoration:</strong> Specialized follicular monitoring and ovulation induction protocols for women planning a pregnancy.</span>
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
