import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import SymptomGrid from '@/components/ui/SymptomGrid';
import ComparisonCards from '@/components/ui/ComparisonCards';
import HorizontalScrollCards from '@/components/ui/HorizontalScrollCards';
import { ShieldCheck, CheckCircle, AlertTriangle, Activity, Heart, Clock } from 'lucide-react';

export const metadata = {
  title: "High Risk Pregnancy Management in Keshav Nagar Pune | Dr Poonam",
  description: "Specialized care for high-risk pregnancy conditions like gestational hypertension, diabetes, twins, or history of miscarriage. Expert gynaecologist in Keshav Nagar, Mundhwa, and Magarpatta.",
  alternates: {
    canonical: '/high-risk-pregnancy-management-in-keshav-nagar/',
  }
};

export default function HighRiskPregnancyPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'High Risk Pregnancy Management' },
  ];

  const comparisonData: [any, any] = [
    {
      title: "Routine Pregnancy",
      theme: "secondary",
      items: [
        { feature: "Scan Frequency", isAvailable: "Standard 3 to 4 major scans." },
        { feature: "Doctor Visits", isAvailable: "Once a month until third trimester." },
        { feature: "Delivery Plan", isAvailable: "Usually planned for natural, term delivery." },
        { feature: "Fetal Monitoring", isAvailable: "Routine heartbeat checks at appointments." },
        { feature: "Maternal Health", isAvailable: "Mother has no severe pre-existing health issues." }
      ]
    },
    {
      title: "High-Risk Pregnancy",
      theme: "primary",
      items: [
        { feature: "Scan Frequency", isAvailable: "Frequent Doppler and growth scans needed." },
        { feature: "Doctor Visits", isAvailable: "Bi-weekly or weekly monitoring much earlier." },
        { feature: "Delivery Plan", isAvailable: "May require early induction or planned C-section." },
        { feature: "Fetal Monitoring", isAvailable: "Frequent Cardiotocography (CTG) to check baby's distress levels." },
        { feature: "Maternal Health", isAvailable: "Conditions like diabetes or hypertension need aggressive management." }
      ]
    }
  ];

  const conditionCards = [
    { title: "Gestational Diabetes", description: "High blood sugar levels developing during pregnancy. It requires strict diet control, glucose charting, and sometimes insulin to prevent oversized babies." },
    { title: "Preeclampsia (High BP)", description: "A dangerous condition marked by high blood pressure and protein in the urine. It restricts blood flow to the placenta and requires immediate management." },
    { title: "Multiple Gestations", description: "Carrying twins or triplets naturally increases risks of preterm labor, restricted fetal growth, and maternal anemia." },
    { title: "Advanced Maternal Age", description: "Pregnancies in mothers over 35 carry a slightly higher risk of chromosomal abnormalities and pregnancy-induced complications." },
    { title: "Previous Miscarriages", description: "A history of recurrent pregnancy loss requires specialized early-stage support, progesterone supplements, and cervical length monitoring." }
  ];

  const warningSigns = [
    { title: "Vaginal Bleeding", description: "Any bleeding or spotting should be reported immediately.", icon: <AlertTriangle className="w-5 h-5" /> },
    { title: "Fluid Leakage", description: "A sudden gush or constant trickle of watery fluid from the vagina.", icon: <Activity className="w-5 h-5" /> },
    { title: "Severe Headaches", description: "Headaches that don't go away, often accompanied by blurry vision.", icon: <AlertTriangle className="w-5 h-5" /> },
    { title: "Sudden Swelling", description: "Rapid puffiness in your hands, face, or ankles (a sign of preeclampsia).", icon: <AlertTriangle className="w-5 h-5" /> },
    { title: "Decreased Movement", description: "Noticeably fewer baby kicks or movements than usual after 28 weeks.", icon: <Activity className="w-5 h-5" /> },
    { title: "Severe Abdominal Pain", description: "Sharp, persistent pain or severe cramping.", icon: <AlertTriangle className="w-5 h-5" /> }
  ];

  const managementTimeline = [
    {
      title: 'Early Identification & Mapping',
      description: 'We perform a comprehensive clinical evaluation at your very first visit to identify any existing risk factors like thyroid issues, blood pressure, or a history of complicated pregnancies.'
    },
    {
      title: 'Advanced Fetal Surveillance',
      description: 'Implementing frequent Doppler ultrasound scans to check blood flow in the umbilical cord and brain, ensuring the baby is receiving enough oxygen and nutrients.'
    },
    {
      title: 'Maternal Stabilization',
      description: 'Prescribing safe, pregnancy-compatible medications to control blood pressure or blood sugar. We also provide strict dietary and lifestyle guidelines tailored to your specific condition.'
    },
    {
      title: 'Cardiotocography (CTG) Monitoring',
      description: 'In the third trimester, we use CTG machines to monitor the baby\'s heart rate response to uterine activity, checking for any signs of fetal distress.'
    },
    {
      title: 'Strategic Delivery Planning',
      description: 'Determining the safest time and method (normal delivery vs. LSCS) to deliver your baby. We coordinate with neonatal specialists if early delivery is necessary.'
    }
  ];

  const faqs = [
    {
      question: 'What defines a pregnancy as high-risk?',
      answer: 'A pregnancy is considered high-risk if there are pre-existing health conditions (like diabetes, high blood pressure, or thyroid issues), pregnancy-specific complications (like gestational diabetes, preeclampsia, or placenta previa), multiple babies (twins/triplets), advanced maternal age, or a history of recurrent miscarriages.'
    },
    {
      question: 'How is a high-risk pregnancy managed differently?',
      answer: 'Management involves more frequent prenatal checkups, detailed growth and Doppler ultrasounds, regular laboratory investigations, specific dietary interventions, and closer coordination with neonatologists. Dr. Poonam designs a highly customized clinical path for every high-risk case.'
    },
    {
      question: 'Can a high-risk pregnancy still result in a normal delivery?',
      answer: 'Yes, absolutely! Having a high-risk factor does not automatically mean you need a Caesarean section. Under the expert, step-by-step clinical guidance of Dr. Poonam, many high-risk pregnancies are managed successfully to culminate in a safe, healthy normal delivery.'
    },
    {
      question: 'What warning signs in a high-risk pregnancy require an immediate hospital visit?',
      answer: 'Immediate medical attention is needed if you experience vaginal bleeding, sudden leakage of amniotic fluid, severe abdominal pain, persistent headaches, visual disturbances (blurriness), sudden swelling of your hands or face, or a noticeable decrease in baby movements.'
    },
    {
      question: 'How does gestational diabetes affect pregnancy, and how is it controlled?',
      answer: 'Gestational diabetes can lead to excessive fetal growth (macrosomia), higher risk of LSCS, and post-birth baby blood sugar drops. Dr. Poonam controls it through a detailed plan including self-blood-glucose tracking, dietary modifications, pelvic exercise plans, and insulin/medication when necessary.'
    },
    {
      question: 'What is the role of Doppler scans and CTG monitoring in high-risk care?',
      answer: 'Doppler scans evaluate blood flow in the umbilical cord and fetal brain to check placental function, while Cardiotocography (CTG) monitors the baby\'s heart rate response to contractions. These tools allow Dr. Poonam to detect fetal distress early and make timely delivery decisions.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="High Risk Pregnancy Care" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/high-risk-pregnancy-management-in-keshav-nagar/" />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/service-high-risk-pregnancy.webp" 
                      alt="Fetal Heart Rate Cardiotocography Monitor with ECG Graph Printout in Clinic" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <AnimatedHeading 
                    text="What is High Risk Pregnancy Care?" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
                  />
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      While most pregnancies progress smoothly, some involve maternal or fetal risk factors that require specialized clinical vigilance. High-risk pregnancy management involves identifying potential threats early, monitoring fetal development closely with advanced technology, and adopting proactive protocols to safeguard the health of both mother and baby.
                    </p>
                    <p>
                      At Dr Poonam’s Women’s Clinic in Keshav Nagar, Pune, we specialize in offering meticulous, evidence-based care for high-risk pregnancies. Dr. Poonam’s decade of clinical experience, combined with her step-by-step diagnostic approach and accessibility on call/WhatsApp, ensures that you feel safe, supported, and reassured throughout this journey. If you reside near Mundhwa or Magarpatta and are searching for a high-risk pregnancy doctor around the area, our clinic provides the expert care you need.
                    </p>
                  </div>
                </div>

                {/* Comparison Section */}
                <div>
                  <AnimatedHeading 
                    text="Routine vs. High-Risk Care" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[30px] text-[15px] leading-relaxed">
                    A high-risk pregnancy simply means that you and your baby need extra monitoring and a specialized care plan to ensure a healthy outcome.
                  </p>
                  <ComparisonCards columns={comparisonData} />
                </div>

                {/* Horizontal Scroll Cards for Conditions */}
                <div className="w-[calc(100vw-32px)] lg:w-full -ml-4 lg:ml-0 px-4 lg:px-0">
                  <HorizontalScrollCards 
                    title="High-Risk Conditions We Manage" 
                    subtitle="Our clinic provides comprehensive monitoring and customized medical solutions for various maternal and fetal conditions."
                    cards={conditionCards} 
                  />
                </div>

                {/* Warning Signs Grid */}
                <div>
                  <SymptomGrid 
                    title="Critical Warning Signs" 
                    symptoms={warningSigns} 
                  />
                </div>

                {/* Management Protocol (Vertical Timeline) */}
                <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
                  <AnimatedHeading 
                    text="Our Step-by-Step Management Protocol" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
                  />
                  <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                    We leave nothing to chance. From early anomaly scans to third-trimester fetal surveillance, our protocol is designed to keep you and your baby safe.
                  </p>
                  <VerticalTimeline items={managementTimeline} />
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
                        <span><strong>Meticulous Monitoring:</strong> Access to cardiotocography (CTG) and high-resolution Doppler ultrasound imaging.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Direct Doctor Access:</strong> Reach out to Dr. Poonam on call or WhatsApp for emergency consultations without hesitation.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Clinical Partners:</strong> Backed by partnerships with leading tertiary care hospitals and neonatal ICU setups.</span>
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
