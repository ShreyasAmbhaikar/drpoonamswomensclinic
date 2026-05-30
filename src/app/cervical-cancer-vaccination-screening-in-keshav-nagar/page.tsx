import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Heart, ShieldCheck, CheckCircle } from 'lucide-react';

export const metadata = {
  title: "Cervical Cancer Screening & HPV Vaccine in Keshav Nagar Pune",
  description: "Protect yourself with Cervical Cancer screening (Pap Smear, HPV DNA test) and HPV vaccinations (Gardasil 9) by Dr. Poonam. Expert gynecologist serving Keshav Nagar, Mundhwa, and Kharadi.",
  alternates: {
    canonical: '/cervical-cancer-vaccination-screening-in-keshav-nagar/',
  }
};

export default function CervicalCancerPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Cervical Screening & HPV Vaccine' },
  ];

  const screeningPrograms = [
    {
      title: 'Liquid-Based Pap Smear Cytology',
      desc: 'A simple, highly accurate test to collect cervical cell samples. It helps detect pre-cancerous cellular changes early, allowing for successful preventive action.'
    },
    {
      title: 'Advanced HPV DNA Testing',
      desc: 'A molecular diagnostics screen that checks for the presence of high-risk human papillomavirus (HPV) genotypes (such as types 16 and 18) directly linked to cervical cancer.'
    },
    {
      title: 'Modern HPV Vaccination (Gardasil 9 / Cervavac)',
      desc: 'Administering the latest WHO-approved HPV vaccines. Vaccinating girls and women builds robust immunity against common cancer-causing viral strains.'
    },
    {
      title: 'Annual Gynaecological Examination',
      desc: 'A comprehensive visual and physical screening of reproductive health, evaluating overall cervix health, pelvic structure, and identifying potential concerns early.'
    }
  ];

  const vaccineSchedules = [
    {
      title: 'Dosage for Ages 9 to 14',
      desc: 'Requires a 2-dose schedule: the second dose is administered 6 months after the first dose, providing lifetime protection.'
    },
    {
      title: 'Dosage for Ages 15 to 45',
      desc: 'Requires a 3-dose schedule: the second dose is given at 1-2 months, and the third dose is given 6 months after the first.'
    },
    {
      title: 'Screening Frequency',
      desc: 'Pap smears are recommended every 3 years from age 21 to 29; a combination Pap + HPV DNA test every 5 years from age 30 to 65.'
    }
  ];

  const faqs = [
    {
      question: 'What is a Pap smear test and why is it necessary?',
      answer: 'A Pap smear is a simple, quick screening test that detects precancerous changes in cervical cells before they turn into cancer. Early detection allows for highly effective preventive treatments and boasts a success rate of over 95% in preventing cervical cancer development.'
    },
    {
      question: 'At what age should girls or women get the HPV vaccine?',
      answer: 'The HPV vaccine is most effective when administered before any exposure to the virus. The recommended age is between 9 and 14 years. However, catch-up vaccinations are highly beneficial and recommended up to age 26, and can be given up to age 45 under clinical guidance.'
    },
    {
      question: 'Can I get the HPV vaccine if I am already married or sexually active?',
      answer: 'Yes, married or sexually active women can still receive the vaccine. Although it is most effective when given before sexual debut, the vaccine still protects against HPV strains you have not yet been exposed to, offering significant prevention against cervical cancers.'
    },
    {
      question: 'How do I search for a reliable Pap smear test near me in Keshav Nagar, Mundhwa or Kharadi?',
      answer: 'If you are looking for a cervical cancer screening near me or Pap smear test near me around the area of Keshav Nagar, Mundhwa, or Kharadi, Dr Poonam’s Women’s Clinic is a trusted local center. We offer a private, clinical environment with female gynaecological expertise.'
    },
    {
      question: 'Is screening still necessary after getting the cervical cancer vaccine?',
      answer: 'Yes, regular screenings are still necessary even if you have received the HPV vaccine. The vaccine protects against the most common high-risk strains (like HPV 16 and 18), but does not cover all strains that could cause cervical cancer. Annual checkups and regular Pap tests remain essential.'
    },
    {
      question: 'Is the HPV vaccine safe, and does it have side effects?',
      answer: 'Yes, the HPV vaccine is globally tested and recognized as extremely safe. Common side effects are mild and temporary, including minor pain, swelling, or redness at the injection site, or a low-grade fever.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Cervical Screening & HPV Vaccine" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/cervical-cancer-vaccination-screening-in-keshav-nagar/" />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[40px] lg:gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/cervical-screening.webp" 
                      alt="HPV Vaccine Vial and Syringe on Medical Tray for Cervical Cancer Prevention" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Cervical cancer is one of the most preventable types of cancer in women. It is primarily caused by persistent infection with high-risk strains of the Human Papillomavirus (HPV). Through regular screening tests like Pap smears and HPV DNA tests, alongside timely HPV vaccination, the risk of developing cervical cancer can be reduced by over 90%.
                    </p>
                    <p>
                      At Dr Poonam's Women's Clinic in Keshav Nagar, Pune, we are dedicated to preventative women's wellness. Dr. Poonam offers gentle and confidential Pap smear screenings, advanced HPV DNA tests, and approved HPV vaccines (including Gardasil 9 and Cervavac) to safeguard your long-term health. If you reside in Mundhwa or Kharadi and are searching for a cervical cancer vaccine or screening around the area, our clinic provides convenient access to quality preventative care.
                    </p>
                  </div>
                </div>

                {/* Preventive Health Programs (Fluid Layout) */}
                <div>
                  <AnimatedHeading 
                    text="Cervical Cancer Prevention Programs" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                    For women living in Keshav Nagar, Mundhwa, and nearby locations seeking a gynaecologist near me for preventative screenings, we offer structured diagnostic packages. These programs help detect cells anomalies years before they could turn malignant:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {screeningPrograms.map((prog, idx) => (
                      <div 
                        key={idx} 
                        className="bg-white p-6 rounded-[24px] border border-divider/10 hover:border-accent hover:bg-secondary/15 transition-all duration-300 shadow-sm flex flex-col gap-3"
                      >
                        <div className="w-12 h-12 bg-accent/10 text-accent rounded-2xl flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-primary text-[18px] leading-snug">
                          {prog.title}
                        </h3>
                        <p className="text-text text-[14px] leading-relaxed">
                          {prog.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vaccine Schedules */}
                <div>
                  <AnimatedHeading 
                    text="Dosage Schedules & Frequencies" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[30px] leading-tight" 
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {vaccineSchedules.map((tip, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-[20px] border border-divider/10 shadow-sm flex flex-col">
                        <div className="w-10 h-10 bg-accent/15 rounded-full flex items-center justify-center text-accent mb-4 shrink-0">
                          <ShieldCheck className="w-5 h-5" />
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
                      Why Choose Dr. Poonam's Clinic?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Approved HPV Vaccines:</strong> Availability of latest Cervavac (India's indigenous vaccine) and Gardasil 9 options.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Gentle & Painless Screening:</strong> Expert specimen collection by a senior female gynecologist ensuring absolute patient comfort.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Trusted Follow-ups:</strong> Digital reminder tracking for subsequent vaccine doses and routine screening cycles.</span>
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
