import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { CheckCircle, Award, ShieldAlert } from 'lucide-react';

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

  const expertCareList = [
    {
      title: 'Personalized Diagnostic Mapping',
      desc: 'We conduct thorough male and female fertility evaluations, customizing hormone panels and ovulation tracking to pinpoint exact challenges.',
    },
    {
      title: 'Compassionate & Dedicated Care',
      desc: 'Fertility treatment is a deeply personal journey. We provide a supportive, stress-free clinical environment to guide you at every milestone.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Comprehensive Fertility Assessment',
      desc: 'Conducting clinical checks including ovarian reserve testing (AMH), semen analysis, and tubal patency tests (HSG) to assess baseline fertility.',
    },
    {
      step: '02',
      title: 'Follicular Monitoring & Stimulation',
      desc: 'Using serial transvaginal ultrasound scans to monitor follicle growth, combined with low-dose hormone stimulation to optimize egg maturation.',
    },
    {
      step: '03',
      title: 'IUI Procedure / IVF Coordination',
      desc: 'Performing Intrauterine Insemination (IUI) in our sterile clinic using washed, highly motile sperm, or coordinating advanced IVF cycles.',
    },
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
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[40px] lg:gap-[60px]">
                
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
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Infertility is defined as the inability to conceive after 12 months of regular, unprotected intercourse. Finding the right medical direction is key. Modern reproductive medicine offers highly effective, step-by-step fertility options—ranging from simple ovulation induction and Intrauterine Insemination (IUI) to advanced In Vitro Fertilization (IVF).
                    </p>
                    <p>
                      At Dr Poonam's Women's Clinic in Keshav Nagar, Pune, we provide empathetic, comprehensive fertility diagnostics. Dr. Poonam evaluates underlying factors such as PCOD, blocked fallopian tubes, or ovulation issues. For couples living in nearby Mundhwa or Hadapsar searching for an experienced IUI clinic or fertility specialist around the area, our clinic provides dedicated fertility monitoring close to home.
                    </p>
                  </div>
                </div>

                {/* Expert Care */}
                <div>
                  <AnimatedHeading 
                    text="Expert Fertility Care Tailored For You" 
                    className="text-[30px] md:text-[40px] font-bold text-primary mb-[20px] capitalize leading-[1.2]" 
                  />
                  <div className="text-text mb-[40px] leading-relaxed">
                    <p>
                      We believe fertility care is not just a clinical treatment; it is a journey of trust, hope, and physical preparation. By using advanced diagnostic technologies and custom cycles, we maximize the chances of a healthy pregnancy while supporting you emotionally at every stage.
                    </p>
                  </div>
                  
                  <div className="bg-secondary rounded-[20px] p-[30px] md:p-[50px] flex flex-col md:flex-row items-center gap-[40px]">
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                      {expertCareList.map((item, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div className="text-accent text-[24px] mt-1 shrink-0">
                            <CheckCircle className="w-6 h-6 text-accent" />
                          </div>
                          <div>
                            <h3 className="text-[20px] font-bold text-primary mb-2">{item.title}</h3>
                            <p className="text-text text-[14px] leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="w-full md:w-1/2 text-center flex justify-center shrink-0">
                      <Image 
                        src="/images/egg-sperm-freezing-expert.webp" 
                        alt="Dr Poonam consulting a patient for fertility cycle mapping" 
                        width={279} 
                        height={343} 
                        className="inline-block rounded-[20px] shadow-sm object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Information Banner */}
                <div className="flex flex-col md:flex-row gap-[30px] items-center">
                  <div className="w-full md:w-1/2 rounded-[20px] overflow-hidden shadow-sm relative aspect-[4/3] max-h-[220px]">
                    <Image 
                      src="/images/egg-sperm-freezing-entry.webp" 
                      alt="Modern sterile examination room for gynaecology and fertility tracking" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h3 className="text-[24px] font-bold text-primary mb-3">Accessible Local Support</h3>
                    <p className="text-text italic text-[15px] leading-relaxed">
                      "Located centrally in Keshav Nagar, our center is dedicated to serving local communities with clinical excellence and gentle care—ensuring you feel supported at every step of your journey."
                    </p>
                  </div>
                </div>

                {/* Parenthood Path */}
                <div>
                  <AnimatedHeading 
                    text="Our Integrated Fertility Offerings" 
                    className="text-[30px] md:text-[40px] font-bold text-primary mb-[30px] capitalize leading-[1.2]" 
                  />
                  
                  <div className="bg-primary rounded-[20px] p-[30px] md:p-[50px] text-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      <div className="bg-white/10 rounded-[20px] p-8 hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center mb-6">
                          <CheckCircle className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-[20px] font-bold mb-2">Ovulation Induction</h3>
                        <p className="text-white/70 text-[14px]">Hormonal management to stimulate egg development.</p>
                      </div>
                      
                      <div className="bg-white/10 rounded-[20px] p-8 hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center mb-6">
                          <CheckCircle className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-[20px] font-bold mb-2">IUI Insemination</h3>
                        <p className="text-white/70 text-[14px]">Direct uterine sperm deposition to facilitate natural fertilization.</p>
                      </div>
                      
                      <div className="bg-white/10 rounded-[20px] p-8 hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center mb-6">
                          <CheckCircle className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-[20px] font-bold mb-2">IVF Coordination</h3>
                        <p className="text-white/70 text-[14px]">Expert reference and cycle support for advanced In Vitro procedures.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Compassionate Care Process */}
                <div>
                  <AnimatedHeading 
                    text="Your Step-by-Step Treatment Journey" 
                    className="text-[30px] md:text-[40px] font-bold text-primary mb-[20px] capitalize leading-[1.2]" 
                  />
                  <div className="text-text mb-[40px] max-w-[720px] leading-relaxed">
                    <p>
                      If you are looking for an IUI clinic near me around the area of Kharadi or Hadapsar, our personalized schedule tracks follicle maturity systematically to ensure the best possible pregnancy results:
                    </p>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-[40px] lg:gap-[60px] items-start">
                    {/* Left Column: Steps */}
                    <div className="w-full md:w-1/2 relative flex flex-col">
                      {/* Connecting vertical line */}
                      <div className="absolute left-[19px] top-5 bottom-12 w-[2px] bg-[#5A4A66]/20"></div>

                      {processSteps.map((item, idx) => (
                        <div key={idx} className="flex gap-6 relative">
                          {/* Step Icon */}
                          <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#FAF6F3] border border-[#5A4A66] shrink-0">
                            <span className="w-3 h-3 rounded-full bg-accent"></span>
                          </div>

                          {/* Content */}
                          <div className={`flex-1 ${idx < processSteps.length - 1 ? 'pb-10' : 'pb-0'}`}>
                            <div className="inline-block bg-[#5A4A66]/10 text-accent font-bold text-[12px] px-3 py-1 rounded-[100px] mb-2 uppercase tracking-wide">
                              Step {item.step}
                            </div>
                            <h3 className="text-[20px] font-bold text-primary mb-2 leading-snug">
                              {item.title}
                            </h3>
                            <p className="text-text text-[14px] leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right Column: Image */}
                    <div className="w-full md:w-1/2 rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-divider/10 relative aspect-[4/3] max-h-[300px]">
                      <Image 
                        src="/images/egg-sperm-freezing-step.webp" 
                        alt="Gynecologist performing follicular ultrasound tracking" 
                        fill
                        className="object-cover hover:scale-102 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* FAQs */}
                <div>
                  <AnimatedHeading 
                    text="Frequently Asked Questions" 
                    className="text-[30px] md:text-[40px] font-bold text-primary mb-[30px] capitalize leading-[1.2]" 
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
