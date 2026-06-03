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
  title: "Best Cervical & Gynecological Cancer Screening in Keshav Nagar Pune",
  description: "Preventative cervical, ovarian, and breast cancer screenings by Dr. Poonam. Pap smears, HPV DNA tests, and physical wellness checks in Keshav Nagar, Kharadi, and Hadapsar.",
  alternates: {
    canonical: '/cancer-screening-in-keshav-nagar/',
  }
};

export default function CancerScreeningPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Cancer Screening' },
  ];

  const comparisonData: [any, any] = [
    {
      title: "Pap Smear (Cytology)",
      theme: "secondary",
      items: [
        { feature: "What it looks for", isAvailable: "Abnormal or pre-cancerous cell changes." },
        { feature: "How it works", isAvailable: "Cells swabbed from the cervix and viewed under a microscope." },
        { feature: "Frequency", isAvailable: "Usually recommended every 3 years." },
        { feature: "Primary Goal", isAvailable: "Catching cellular abnormalities early." }
      ]
    },
    {
      title: "HPV DNA Test",
      theme: "primary",
      items: [
        { feature: "What it looks for", isAvailable: "High-risk strains of Human Papillomavirus." },
        { feature: "How it works", isAvailable: "Molecular test on cervical fluid to detect viral DNA." },
        { feature: "Frequency", isAvailable: "Every 5 years (often co-tested with a Pap smear)." },
        { feature: "Primary Goal", isAvailable: "Identifying the virus before it damages cells." }
      ]
    }
  ];

  const subServices = [
    { title: "Pap Smear Cytology", description: "A painless in-clinic swab test that collects cells from the cervix to detect early pre-cancerous changes.", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "HPV DNA Testing", description: "Highly sensitive molecular testing that checks cervical fluid for high-risk HPV strains linked to cancer.", icon: <Activity className="w-5 h-5" /> },
    { title: "Breast Examination", description: "Clinical breast exams to check for lumps or anomalies, along with guidance on performing self-exams at home.", icon: <Heart className="w-5 h-5" /> },
    { title: "Pelvic Ultrasound", description: "Non-invasive sonography to evaluate the ovaries and endometrial lining for cysts, masses, or thickening.", icon: <Activity className="w-5 h-5" /> },
    { title: "HPV Vaccination", description: "Administering the Gardasil vaccine to provide robust immunity against the most dangerous HPV strains.", icon: <ShieldCheck className="w-5 h-5" /> }
  ];

  const screeningSteps = [
    {
      title: 'Clinical Discussion & Risk Assessment',
      description: 'Dr. Poonam reviews your personal and family medical history, age, and lifestyle to determine your specific cancer risk profile.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Gentle Specimen Collection',
      description: 'While you rest comfortably, Dr. Poonam uses a specialized, soft cytobrush to gently swab the cervix. The process takes less than a minute and is completely painless.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Laboratory Analysis',
      description: 'The specimen is sent to an advanced accredited laboratory where pathologists analyze the cells or extract DNA to check for high-risk HPV strains.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Reporting & Prevention Strategy',
      description: 'We review the lab findings with you. If the results are normal, we schedule your next routine check. If abnormal, we map out a clear, immediate plan for further diagnostics (like colposcopy).',
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  const ageGuidelines = [
    { title: "Ages 21 to 29", description: "Should undergo a Pap smear every 3 years. HPV testing is generally not recommended unless the Pap smear is abnormal." },
    { title: "Ages 30 to 65", description: "Should receive a Pap smear combined with an HPV DNA test (Co-testing) every 5 years, or a Pap smear alone every 3 years." },
    { title: "Age 40+", description: "In addition to cervical screening, annual clinical breast exams and routine mammograms should commence." }
  ];

  const faqs = [
    {
      question: 'Why is regular cancer screening important for women?',
      answer: 'Regular cancer screening is critical because many gynecological cancers (especially cervical and ovarian) develop silently without early symptoms. Screenings like Pap smears and HPV tests can detect cell changes or viral infections years before cancer develops, allowing for early treatment and prevention.'
    },
    {
      question: 'What is a Pap smear, and how often should I get one?',
      answer: 'A Pap smear is a brief, painless test where cells are gently collected from your cervix and analyzed in a laboratory for abnormalities. Generally, women aged 21-65 should undergo a Pap smear every 3 years, or every 5 years when combined with an HPV DNA test.'
    },
    {
      question: 'What is the HPV DNA test, and how does it differ from a Pap smear?',
      answer: 'A Pap smear checks for abnormal or pre-cancerous cells on the cervix. The HPV DNA test is a molecular check that looks specifically for the presence of high-risk Human Papillomavirus (HPV) strains, which are the primary cause of cervical cancer, even before cellular changes occur.'
    },
    {
      question: 'At what age should women start screening for breast and ovarian cancers?',
      answer: 'Women should begin annual clinical breast exams around age 30-35, and start routine mammograms at age 40 (or earlier if there is a strong family history of breast cancer). Ovarian cancer screening, via pelvic ultrasounds and CA-125 blood tests, is recommended for high-risk individuals or those presenting specific symptoms.'
    },
    {
      question: 'Can cervical cancer be prevented through screening and vaccination?',
      answer: 'Yes, absolutely! Cervical cancer is one of the most preventable cancers. Regular Pap and HPV screenings catch pre-cancerous cells early, and the HPV vaccine (administered ideally between ages 9 and 26) protects against the high-risk viral strains responsible for most cervical cancers.'
    },
    {
      question: 'What happens if my Pap smear result comes back abnormal?',
      answer: 'An abnormal Pap smear does not mean you have cancer. It simply means that slightly unusual cells were detected. Dr. Poonam will evaluate the findings and may recommend repeating the test, performing an HPV DNA test, or conducting a colposcopy (a detailed look at the cervix using a special magnifying lens).'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Cancer Screening" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/cancer-screening-in-keshav-nagar/" />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/service-cancer-screening.webp" 
                      alt="Cervical cytobrush and pap smear screening collection kit in clinic" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <AnimatedHeading 
                    text="What is Cancer Screening?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
                  />
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Gynecological cancer screening is a vital, life-saving component of proactive female health management. Many reproductive tract cancers (particularly cervical and ovarian cancers) develop slowly over several years. During these early pre-malignant phases, there are typically no visible signs or physical symptoms, meaning that routine clinical screening is the only way to detect and stop them.
                    </p>
                    <p>
                      At Dr Poonam’s Women’s Clinic in Keshav Nagar, Pune, we emphasize comprehensive preventive care. Dr. Poonam provides a highly supportive, gentle, and comfortable experience for Pap smears, HPV DNA tests, and clinical breast exams. We help demystify the screening process and empower women with protective strategies. If you reside in Kharadi or Hadapsar and are searching for a cervical cancer check or Pap smear clinic, we welcome you to prioritize your wellness with us.
                    </p>
                  </div>
                </div>

                {/* Comparison Section */}
                <div>
                  <AnimatedHeading 
                    text="Cervical Screening: Pap vs. HPV Test" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[30px] text-[15px] leading-relaxed">
                    While both tests use a simple cervical swab, they analyze different markers to provide a complete picture of your cervical health.
                  </p>
                  <ComparisonCards columns={comparisonData} />
                </div>

                {/* Horizontal Scroll Cards for Services */}
                <div className="w-[calc(100vw-32px)] lg:w-full -ml-4 lg:ml-0 px-4 lg:px-0">
                  <HorizontalScrollCards 
                    title="Our Screening Capabilities" 
                    subtitle="We offer a full spectrum of preventative gynecological and breast health screening evaluations."
                    cards={subServices} 
                  />
                </div>

                {/* Procedure Steps (Vertical Timeline) */}
                <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
                  <AnimatedHeading 
                    text="The Screening Process" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                    A cervical screening is incredibly fast, taking only a few minutes during a routine pelvic exam. Here is what to expect.
                  </p>
                  <VerticalTimeline items={screeningSteps} />
                </div>

                {/* Age Guidelines (Circular Process) */}
                <div>
                  <CircularProcess 
                    title="Screening Guidelines by Age" 
                    steps={ageGuidelines} 
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
                        <span><strong>Painless & Gentle Swabs:</strong> Dr. Poonam takes extreme care to ensure the specimen collection is fast, comfortable, and stress-free.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Partnered Labs:</strong> High-precision cervical liquid cytology and HPV DNA testing through leading accredited laboratories.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Comprehensive Care:</strong> Direct translation from screening reports into custom follow-up colposcopies or vaccine planning.</span>
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
