import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import ComparisonCards from '@/components/ui/ComparisonCards';
import HorizontalScrollCards from '@/components/ui/HorizontalScrollCards';
import CircularProcess from '@/components/ui/CircularProcess';
import { ShieldCheck, CheckCircle, Activity, Heart, Stethoscope } from 'lucide-react';

export const metadata = {
  title: "Infertility, IUI & IVF Specialist in Keshav Nagar Pune | Dr Poonam's Clinic",
  description: "Advanced fertility care, follicle tracking, and Intrauterine Insemination (IUI) at Dr Poonam's Women's Clinic in Keshav Nagar, Pune. Dedicated fertility support for couples in Mundhwa and Hadapsar.",
  alternates: {
    canonical: '/infertility-iui-ivf-in-keshav-nagar/',
  }
};

export default function InfertilityIuiIvfPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Infertility, IUI & IVF' },
  ];

  const comparisonData: [any, any] = [
    {
      title: "Intrauterine Insemination (IUI)",
      theme: "secondary",
      items: [
        { feature: "Procedure", isAvailable: "Washed sperm is placed directly into the uterus." },
        { feature: "Invasiveness", isAvailable: "Low; feels similar to a routine Pap smear." },
        { feature: "Fertilization", isAvailable: "Occurs naturally inside the fallopian tubes." },
        { feature: "Cost & Time", isAvailable: "Lower cost, shorter cycle duration." },
        { feature: "Best For", isAvailable: "Mild male factor infertility, unexplained infertility." }
      ]
    },
    {
      title: "In Vitro Fertilization (IVF)",
      theme: "primary",
      items: [
        { feature: "Procedure", isAvailable: "Eggs are retrieved and fertilized in a lab, then transferred." },
        { feature: "Invasiveness", isAvailable: "Moderate; requires light sedation for egg retrieval." },
        { feature: "Fertilization", isAvailable: "Occurs externally in a highly controlled laboratory." },
        { feature: "Cost & Time", isAvailable: "Higher investment, requires 4-6 weeks per cycle." },
        { feature: "Best For", isAvailable: "Blocked tubes, severe male factor, advanced age." }
      ]
    }
  ];

  const subServices = [
    { title: "Ovulation Induction", description: "Hormonal medication management to stimulate healthy egg development and release.", icon: <Activity className="w-5 h-5" /> },
    { title: "Follicular Monitoring", description: "Serial transvaginal ultrasounds to track follicle growth and pinpoint exact ovulation.", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "IUI Insemination", description: "Direct uterine sperm deposition of washed, highly motile sperm to facilitate natural fertilization.", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "IVF Coordination", description: "Expert reference and cycle preparation support for advanced In Vitro procedures.", icon: <Heart className="w-5 h-5" /> }
  ];

  const processSteps = [
    {
      title: 'Comprehensive Fertility Assessment',
      description: 'Conducting clinical checks including ovarian reserve testing (AMH), semen analysis, and tubal patency tests (HSG) to assess baseline fertility.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Follicular Stimulation',
      description: 'Using low-dose hormone stimulation (oral or injectable) tailored to your ovarian reserve to optimize egg maturation without overstimulation.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Ultrasound Monitoring',
      description: 'Serial transvaginal ultrasound scans (usually 3-4 times a cycle) to track the growth of fluid-filled sacs (follicles) in the ovaries.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'IUI Procedure / Conception',
      description: 'Triggering ovulation precisely, followed by Intrauterine Insemination (IUI) in our sterile clinic using washed sperm, or advising timed intercourse.',
      icon: <Heart className="w-5 h-5" />
    }
  ];

  const expertCareList = [
    { title: "Personalized Diagnostics", description: "We conduct thorough male and female evaluations to pinpoint exact fertility challenges." },
    { title: "Compassionate Care", description: "Fertility treatment is deeply personal. We provide a supportive, stress-free clinical environment." },
    { title: "Evidence-Based Protocols", description: "Utilizing modern reproductive medicine protocols to maximize your chances of success." }
  ];

  const faqs = [
    {
      question: 'How long does a standard IVF treatment cycle take?',
      answer: 'A standard IVF cycle typically takes between 4 to 6 weeks. This includes the initial ovarian stimulation phase (approx 10-12 days of hormone injections), egg retrieval under light sedation, fertilization in the lab, and subsequent embryo transfer back into the uterus.'
    },
    {
      question: 'How many IVF cycles might a couple need to achieve pregnancy?',
      answer: 'The number of IVF cycles required varies based on maternal age, egg quality, and underlying cause of infertility. While many couples conceive during their first cycle, others may require 2 to 3 cycles. Dr. Poonam conducts detailed assessments to optimize success rates for each cycle.'
    },
    {
      question: 'What is follicular monitoring and why is it important in fertility treatment?',
      answer: 'Follicular monitoring involves a series of transvaginal ultrasound scans (usually 3 to 4 times a cycle) to track the growth of fluid-filled sacs (follicles) in the ovaries containing the eggs. It is crucial to determine the optimal day for ovulation and time natural intercourse, IUI, or egg retrieval.'
    },
    {
      question: 'How do I choose the best fertility or IUI clinic near me in Keshav Nagar, Mundhwa, or Kharadi?',
      answer: 'If you are searching for a fertility clinic near me or IUI specialist near me in Keshav Nagar, Mundhwa, or Hadapsar, Dr Poonam’s Women’s Clinic is a top-rated healthcare provider. Centrally located on Mantra Mesmer Road, our clinic specializes in personalized, high-success IUI treatments and fertility diagnostics.'
    },
    {
      question: 'What are the success rates of IUI compared to IVF?',
      answer: 'IUI (Intrauterine Insemination) generally has a success rate of 10% to 15% per cycle, often recommended as a non-invasive first-line treatment. IVF (In Vitro Fertilization) offers higher success rates, averaging 40% to 60% per cycle, depending heavily on maternal age and embryo quality.'
    },
    {
      question: 'Is the IUI procedure painful and are there any side effects?',
      answer: 'The IUI procedure is virtually painless and is performed as an outpatient process without anesthesia, taking about 15-20 minutes. It feels similar to a Pap smear. Some women may experience mild, temporary cramping or spotty bleeding for a day, which is normal and resolves quickly.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Infertility, IUI & IVF Support" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/infertility-iui-ivf-in-keshav-nagar/" hideContact={true} />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/egg-sperm-freezing-overview.webp" 
                      alt="Advanced Embryo Fertilization and IVF Laboratory Care" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <AnimatedHeading 
                    text="What is Infertility, IUI & IVF Support?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
                  />
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Infertility is defined as the inability to conceive after 12 months of regular, unprotected intercourse. Finding the right medical direction is key. Modern reproductive medicine offers highly effective, step-by-step fertility options—ranging from simple ovulation induction and Intrauterine Insemination (IUI) to advanced In Vitro Fertilization (IVF).
                    </p>
                    <p>
                      At Dr Poonam's Women's Clinic in Keshav Nagar, Pune, we provide empathetic, comprehensive fertility diagnostics. Dr. Poonam evaluates underlying factors such as PCOD, blocked fallopian tubes, or ovulation issues. For couples living in nearby Mundhwa or Hadapsar searching for an experienced IUI clinic or fertility specialist, our clinic provides dedicated fertility monitoring close to home.
                    </p>
                  </div>
                </div>

                {/* Comparison Section */}
                <div>
                  <AnimatedHeading 
                    text="Choosing the Right Path: IUI vs. IVF" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[30px] text-[15px] leading-relaxed">
                    We start with the least invasive, most effective treatments for your specific diagnosis. Here is how the two primary fertility treatments compare.
                  </p>
                  <ComparisonCards columns={comparisonData} />
                </div>

                {/* Horizontal Scroll Cards for Offerings */}
                <div className="w-[calc(100vw-32px)] lg:w-full -ml-4 lg:ml-0 px-4 lg:px-0">
                  <HorizontalScrollCards 
                    title="Our Integrated Fertility Offerings" 
                    subtitle="We offer a stepwise approach to reproductive care, maximizing your chances of a healthy pregnancy."
                    cards={subServices} 
                  />
                </div>

                {/* Process Steps (Vertical Timeline) */}
                <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
                  <AnimatedHeading 
                    text="Your Treatment Journey" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                    Our personalized schedule tracks follicle maturity systematically to ensure the best possible pregnancy results.
                  </p>
                  <VerticalTimeline items={processSteps} />
                </div>

                {/* Expert Care (Circular Process) */}
                <div>
                  <CircularProcess 
                    title="Expert Fertility Care Tailored For You" 
                    steps={expertCareList} 
                  />
                </div>

                {/* Information Banner */}
                <div className="flex flex-col md:flex-row gap-[30px] items-center bg-[#242736] text-white rounded-[24px] p-8 md:p-10">
                  <div className="w-full md:w-1/2 rounded-[20px] overflow-hidden shadow-sm relative aspect-[4/3] max-h-[220px]">
                    <Image 
                      src="/images/egg-sperm-freezing-entry.webp" 
                      alt="Modern sterile examination room for gynaecology and fertility tracking" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
                    <h3 className="text-[26px] font-bold text-white mb-2 leading-tight">Accessible Local Support</h3>
                    <p className="text-white/80 italic text-[15px] leading-relaxed">
                      "Located centrally in Keshav Nagar, our center is dedicated to serving local communities with clinical excellence and gentle care—ensuring you feel supported at every step of your journey."
                    </p>
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
