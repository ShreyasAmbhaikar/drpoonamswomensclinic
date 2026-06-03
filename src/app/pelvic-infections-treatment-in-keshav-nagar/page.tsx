import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import SymptomGrid from '@/components/ui/SymptomGrid';
import ComparisonCards from '@/components/ui/ComparisonCards';
import HorizontalScrollCards from '@/components/ui/HorizontalScrollCards';
import { ShieldCheck, CheckCircle, Activity, AlertTriangle, Thermometer } from 'lucide-react';

export const metadata = {
  title: "Best Pelvic Infection & PID Treatment in Keshav Nagar Pune",
  description: "Specialized diagnostics and medical treatment for pelvic inflammatory disease (PID) & vaginal infections by Dr. Poonam in Keshav Nagar, Mundhwa, and Kharadi.",
  alternates: {
    canonical: '/pelvic-infections-treatment-in-keshav-nagar/',
  }
};

export default function PelvicInfectionsTreatmentPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Pelvic Infections' },
  ];

  const comparisonData: [any, any] = [
    {
      title: "Yeast Infection (Candidiasis)",
      theme: "secondary",
      items: [
        { feature: "Primary Cause", isAvailable: "Fungal overgrowth (Candida) in the vagina." },
        { feature: "Discharge", isAvailable: "Thick, white, cottage-cheese-like, usually odorless." },
        { feature: "Main Symptoms", isAvailable: "Intense itching, redness, external swelling." },
        { feature: "Pelvic Pain", isAvailable: "No deep pelvic pain or lower abdominal aching." },
        { feature: "Severity", isAvailable: "Superficial, easily treatable, does not cause infertility." }
      ]
    },
    {
      title: "Bacterial PID / Pelvic Infection",
      theme: "primary",
      items: [
        { feature: "Primary Cause", isAvailable: "Bacterial pathogens (e.g., Chlamydia, Gonorrhea) moving upwards." },
        { feature: "Discharge", isAvailable: "Yellow or green, heavy, foul-smelling." },
        { feature: "Main Symptoms", isAvailable: "Deep pelvic pain, pain during intercourse, fever." },
        { feature: "Pelvic Pain", isAvailable: "Significant aching in lower abdomen and pelvis." },
        { feature: "Severity", isAvailable: "Serious. Can cause tubal scarring, chronic pain, and infertility if untreated." }
      ]
    }
  ];

  const symptoms = [
    { title: "Pelvic Pain", description: "Dull, heavy, or sharp aching in the lower abdomen and pelvis.", icon: <Activity className="w-5 h-5" /> },
    { title: "Abnormal Discharge", description: "Heavy, unusual color (yellow/green), often with a strong odor.", icon: <AlertTriangle className="w-5 h-5" /> },
    { title: "Fever & Chills", description: "Systemic signs of infection, sometimes accompanied by nausea.", icon: <Thermometer className="w-5 h-5" /> },
    { title: "Painful Urination", description: "Burning sensation or increased frequency of urination.", icon: <AlertTriangle className="w-5 h-5" /> },
    { title: "Painful Intercourse", description: "Deep pain (dyspareunia) during sexual intimacy.", icon: <Activity className="w-5 h-5" /> },
    { title: "Irregular Bleeding", description: "Spotting between periods or unusually heavy menstrual flow.", icon: <AlertTriangle className="w-5 h-5" /> }
  ];

  const causesCards = [
    { title: "Untreated STIs", description: "Chlamydia and gonorrhea are the most common bacterial causes. If left untreated, they travel from the cervix up into the uterus and fallopian tubes." },
    { title: "Post-Surgical Infection", description: "Bacteria can be introduced into the reproductive tract during procedures like IUD insertion, D&E, or childbirth if strict sterility isn't maintained." },
    { title: "Douching", description: "Frequent vaginal douching washes away healthy protective bacteria (lactobacilli), altering the pH and allowing harmful pathogens to overgrow and ascend." },
    { title: "Bacterial Vaginosis (BV)", description: "A severe overgrowth of normal vaginal bacteria can sometimes create an environment where pelvic inflammatory disease is more likely to develop." }
  ];

  const treatmentTimeline = [
    {
      title: 'Detailed Clinical Evaluation',
      description: 'Taking a thorough medical history followed by a gentle bimanual pelvic examination to check for cervical motion tenderness and uterine inflammation.'
    },
    {
      title: 'Pathogen Swab & Culture',
      description: 'Collecting high vaginal and endocervical swabs to send to the lab. This identifies the exact bacterial or fungal strain, ensuring we prescribe the correct targeted medication rather than generic antibiotics.'
    },
    {
      title: 'Advanced Imaging (If Needed)',
      description: 'Performing a high-resolution transvaginal ultrasound to check the fallopian tubes and ovaries for fluid collections (hydrosalpinx) or abscesses.'
    },
    {
      title: 'Targeted Antimicrobial Therapy',
      description: 'Starting a precise regimen of antibiotics, antifungals, or anti-parasitic medications based on culture results. In severe PID cases, intramuscular injections may be given first.'
    },
    {
      title: 'Partner Screening',
      description: 'If a sexually transmitted pathogen is found, we provide guidelines for treating your partner to prevent a cycle of continuous reinfection.'
    },
    {
      title: 'Follow-Up & Fertility Check',
      description: 'A critical follow-up visit after 2-3 weeks to ensure the infection is completely cleared and to assess if any preventive tubal testing is needed for your future fertility.'
    }
  ];

  const faqs = [
    {
      question: 'What are the symptoms of a pelvic infection (PID)?',
      answer: 'Pelvic Inflammatory Disease (PID) symptoms include dull, persistent pain in the lower abdomen or pelvis, abnormal and foul-smelling vaginal discharge, painful intercourse (dyspareunia), painful urination, irregular menstrual bleeding, and sometimes fever with chills.'
    },
    {
      question: 'What causes Pelvic Inflammatory Disease, and how is it diagnosed?',
      answer: 'PID is caused by bacteria spreading from the vagina or cervix into the uterus, fallopian tubes, and ovaries. It is diagnosed through a combination of clinical pelvic examinations, vaginal swab tests to identify specific bacteria, and pelvic ultrasound to check for internal inflammation or abscesses.'
    },
    {
      question: 'Can an untreated pelvic infection lead to infertility?',
      answer: 'Yes, untreated pelvic infections (especially PID) can cause permanent scarring and blockage of the fallopian tubes. This prevents the egg from meeting the sperm, leading to tubal factor infertility or a significantly increased risk of a life-threatening ectopic pregnancy.'
    },
    {
      question: 'How are chronic vaginal and pelvic infections treated?',
      answer: 'Treatment involves target antibiotic or antimicrobial medication courses based on lab culture results. In chronic or recurring cases, long-term suppressive therapies, pH-restoring treatments, and treating the partner simultaneously may be required to prevent reinfection.'
    },
    {
      question: 'What is the difference between a yeast infection and a bacterial pelvic infection?',
      answer: 'A yeast infection is a superficial fungal overgrowth in the vagina causing intense itching and thick, white discharge without pelvic pain. A bacterial pelvic infection (like PID) involves pathogenic bacteria spreading to the upper reproductive organs, causing deep pelvic pain, fever, and potential scarring.'
    },
    {
      question: 'How can I prevent recurring pelvic infections?',
      answer: 'Prevention involves practicing safe intercourse, avoiding intimate douching (which washes away protective vaginal bacteria), wearing breathable cotton underwear, staying well-hydrated, maintaining healthy menstrual hygiene, and seeking prompt treatment for any vaginal discharge.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Pelvic Infections Treatment" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/pelvic-infections-treatment-in-keshav-nagar/" />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/service-pelvic-infections.webp" 
                      alt="Anatomy detail showing female pelvis structures and reproductive tract under evaluation" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <AnimatedHeading 
                    text="What is Pelvic Infections Treatment?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
                  />
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Pelvic infections and Pelvic Inflammatory Disease (PID) are common but serious conditions affecting the female reproductive system. If left undiagnosed or treated incorrectly with generic over-the-counter medications, infections can travel from the vagina to the upper reproductive tract, causing permanent scarring of the fallopian tubes, chronic pelvic pain, ectopic pregnancy, or infertility.
                    </p>
                    <p>
                      At Dr Poonam’s Women’s Clinic in Keshav Nagar, Pune, we emphasize accurate, culture-based diagnostics for pelvic infections. Dr. Poonam ensures a comforting, highly private space where your symptoms are evaluated, proper swabs are taken, and precise medication schedules are provided. If you reside in Mundhwa or Kharadi and are searching for pelvic pain relief or a vaginal infection specialist nearby, our clinic offers the advanced medical care you need.
                    </p>
                  </div>
                </div>

                {/* Comparison Section */}
                <div>
                  <AnimatedHeading 
                    text="Yeast Infection vs. Bacterial PID" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[30px] text-[15px] leading-relaxed">
                    Many women mistake early signs of a serious pelvic infection for a simple yeast infection. Understanding the differences is critical for seeking the right treatment quickly.
                  </p>
                  <ComparisonCards columns={comparisonData} />
                </div>

                {/* Symptoms Grid */}
                <div>
                  <SymptomGrid 
                    title="Warning Signs of Pelvic Infections" 
                    symptoms={symptoms} 
                  />
                </div>

                {/* Causes Horizontal Cards */}
                <div className="w-[calc(100vw-32px)] lg:w-full -ml-4 lg:ml-0 px-4 lg:px-0">
                  <HorizontalScrollCards 
                    title="How Do Pelvic Infections Develop?" 
                    subtitle="Understanding the common pathways of infection can help in prevention and early detection."
                    cards={causesCards} 
                  />
                </div>

                {/* Diagnostic Protocol (Vertical Timeline) */}
                <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
                  <AnimatedHeading 
                    text="Our Diagnostic & Treatment Protocol" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                    We do not rely on guesswork. Our structured protocol ensures we find the exact cause of your discomfort to prescribe the fastest, most effective cure.
                  </p>
                  <VerticalTimeline items={treatmentTimeline} />
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
                        <span><strong>Culture-Driven:</strong> Focus on identifying the specific pathogen rather than trial-and-error treatments.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Fertility Protection:</strong> Proactive upper tract care to shield your fallopian tubes and eggs from scarring.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Private & Judgement-Free:</strong> A comforting environment where you can discuss intimate health issues openly.</span>
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
