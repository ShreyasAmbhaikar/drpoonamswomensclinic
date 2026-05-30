import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Heart, Activity, CheckCircle, Shield, Award, Calendar } from 'lucide-react';

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

  const pcodPillars = [
    {
      title: 'Hormonal & Diagnostic Screening',
      desc: 'Conducting comprehensive metabolic profiles and hormone panels (LH, FSH, prolactin, fasting insulin, and thyroid) coupled with high-resolution pelvic ultrasound scans to analyze ovarian follicle counts and thickness.'
    },
    {
      title: 'Customized low-GI Indian Diet Plans',
      desc: 'Creating personalized dietary charts focused on low-glycemic, anti-inflammatory whole foods suitable for Indian kitchens. This helps stabilize blood glucose and mitigate insulin resistance—the primary driver of PCOD.'
    },
    {
      title: 'Custom Fitness & Active Workouts',
      desc: 'Formulating sustainable workout schedules combining strength training and aerobic exercises. Just 150 minutes of weekly activity helps burn excess abdominal fats and improves insulin receptor sensitivity.'
    },
    {
      title: 'Targeted Medical Management',
      desc: 'Prescribing evidence-based therapeutic options like insulin sensitizers (metformin), cycle regulators, or advanced ovulation-induction medications for patients attempting to conceive.'
    },
    {
      title: 'Stress Relief & Cortisol Control',
      desc: 'Guiding you through mindfulness techniques, sleep hygiene adjustments, and stress management protocols designed to lower cortisol levels and regulate endocrine pathways.'
    },
    {
      title: 'Long-term Ovulation Monitoring',
      desc: 'Providing regular follicular tracking scans and biochemical reviews to measure hormonal progress, helping to prevent complications such as type 2 diabetes or cardiovascular risks.'
    }
  ];

  const pcodGuidelines = [
    {
      title: 'Balanced Nutrition',
      desc: 'Focus on high-fiber grains, green leafy vegetables, healthy seeds, and lean protein, while strictly avoiding refined sugars and high GI processed foods.'
    },
    {
      title: 'Regular Physical Activity',
      desc: 'Incorporate at least 30 minutes of daily physical exercise (brisk walking, cycling, or yoga) to enhance insulin responsiveness.'
    },
    {
      title: 'Quality Rest & Recovery',
      desc: 'Maintain a consistent sleeping pattern of 7 to 8 hours to restore natural circadian rhythms and balance cortisol secretion.'
    }
  ];

  const faqs = [
    {
      question: 'What is the core difference between PCOD and PCOS?',
      answer: 'PCOD (Polycystic Ovarian Disease) is a common hormonal imbalance where ovaries release immature eggs that turn into cysts, mostly manageable through diet and lifestyle modifications. PCOS (Polycystic Ovarian Syndrome) is a broader metabolic and endocrine disorder involving high androgen levels. It requires long-term clinical management as it is associated with wider health issues like insulin resistance, risk of type 2 diabetes, and severe weight gain.'
    },
    {
      question: 'What are the most common symptoms of PCOD/PCOS to look out for?',
      answer: 'Key symptoms include irregular or missed periods, abnormally heavy menstrual flow, hirsutism (excessive hair on the face, chin, or body), severe cystic acne, thinning scalp hair, unexplained weight gain around the abdomen, and difficulty getting pregnant due to irregular ovulation.'
    },
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
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[40px] lg:gap-[60px]">
                
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
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Polycystic Ovarian Disease (PCOD) and Polycystic Ovarian Syndrome (PCOS) are highly prevalent endocrine disorders affecting reproductive-aged women. Characterized by hormonal imbalances and insulin resistance, these conditions cause multiple fluid-filled sacs (cysts) in the ovaries, leading to irregular menstrual cycles, heavy periods, skin issues, rapid weight gain, and ovulation difficulties.
                    </p>
                    <p>
                      At Dr Poonam's Women's Clinic in Keshav Nagar, Pune, we approach PCOD care holistically. Rather than simply managing the symptoms, Dr. Poonam designs personalized medical and lifestyle guidelines, helping you manage insulin levels, normalize ovulation, and restore emotional well-being. Whether you reside in nearby Hadapsar or Magarpatta, our center provides accessible, expert guidance to manage this condition naturally.
                    </p>
                  </div>
                </div>

                {/* Treatment Journey (Fluid Pillar Layout) */}
                <div>
                  <AnimatedHeading 
                    text="Our Holistic PCOD Treatment Pillars" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                    If you are searching for a PCOD clinic near me around the area of Hadapsar or Magarpatta, you will find our treatment methodology unique. We do not rely on standard pill prescriptions. Instead, we structure your recovery across <strong>six primary pillars</strong> designed to reset your metabolism and restore hormonal harmony.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pcodPillars.map((pillar, idx) => (
                      <div 
                        key={idx} 
                        className="bg-[#FAF6F3] p-6 rounded-[24px] border border-divider/10 hover:border-accent hover:bg-white transition-all duration-300 shadow-sm flex flex-col gap-3 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center font-bold text-[16px] group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                          {idx + 1}
                        </div>
                        <h3 className="font-bold text-primary text-[18px] leading-snug">
                          {pillar.title}
                        </h3>
                        <p className="text-text text-[14px] leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lifestyle Guidelines */}
                <div>
                  <AnimatedHeading 
                    text="PCOD Preventive Care Guidelines" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[30px] leading-tight" 
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pcodGuidelines.map((tip, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-[20px] border border-divider/10 shadow-sm flex flex-col">
                        <div className="w-10 h-10 bg-accent/15 rounded-full flex items-center justify-center text-accent mb-4 shrink-0">
                          <Heart className="w-5 h-5" />
                        </div>
                        <h3 className="text-[18px] font-bold text-primary mb-2">{tip.title}</h3>
                        <p className="text-text text-[14px] leading-relaxed">{tip.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-[#242736] text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center gap-[45px]">
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
                      <div className="text-[44px] font-bold text-accent mb-1">5.0</div>
                      <p className="text-[13px] font-bold uppercase tracking-wider text-white/90 mb-1">Google Rating</p>
                      <p className="text-[12px] text-white/70">Based on 42 Verified Reviews</p>
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
