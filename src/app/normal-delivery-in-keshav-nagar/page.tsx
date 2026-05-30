import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Heart, CheckCircle } from 'lucide-react';

export const metadata = {
  title: "Normal Delivery Specialist in Keshav Nagar Pune | Dr Poonam's Clinic",
  description: "Expert normal vaginal delivery and VBAC services by Dr. Poonam (MBBS, DGO, PGDMCH) in Keshav Nagar, Pune. Compassionate prenatal monitoring for mothers in Mundhwa and Hadapsar.",
  alternates: {
    canonical: '/normal-delivery-in-keshav-nagar/',
  }
};

export default function NormalDeliveryPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Normal Delivery' },
  ];

  const procedureTimeline = [
    {
      step: '01',
      title: 'Active Labor Tracking',
      desc: 'Close monitoring of uterine contractions, cervical dilation, and continuous fetal heart rate tracking to ensure baby safety.'
    },
    {
      step: '02',
      title: 'Facilitated Childbirth',
      desc: 'Expert support during the pushing phase with breathing guidance, positioning techniques, and perineal support.'
    },
    {
      step: '03',
      title: 'Placental Delivery',
      desc: 'Gentle, natural delivery of the placenta shortly after the baby is born, followed by clinical safety checks.'
    },
    {
      step: '04',
      title: 'Immediate Postnatal Care',
      desc: 'Promoting skin-to-skin bonding, initial newborn assessment, and monitoring maternal vitals during early recovery.'
    }
  ];

  const preventiveTips = [
    {
      title: 'Antenatal Exercises',
      desc: 'Gentle pelvic floor exercises (Kegels), prenatal yoga, and regular walking to build stamina for labor.'
    },
    {
      title: 'Nutritional Support',
      desc: 'Balanced iron-rich and calcium-rich diet along with optimal hydration to maintain amniotic fluid levels.'
    },
    {
      title: 'Regular Antenatal Checks',
      desc: 'Timely growth scans, hemoglobin tests, and blood pressure monitoring to identify any risk factors early.'
    }
  ];

  const faqs = [
    {
      question: 'What are the early warning signs that labor has started?',
      answer: 'Common signs of labor onset include regular and progressively painful contractions, lower backache radiating to the abdomen, vaginal discharge of a pinkish mucus plug (bloody show), or leakage/rupture of the amniotic sac (water breaking).'
    },
    {
      question: 'How can I increase my chances of having a normal delivery?',
      answer: 'To improve normal birthing chances, maintain a healthy diet, stay active with prenatal exercises approved by your obstetrician, manage stress through relaxation techniques, and ensure regular, timely antenatal checkups.'
    },
    {
      question: 'Is a normal delivery possible after a previous C-section (VBAC)?',
      answer: 'Yes, Vaginal Birth After Caesarean (VBAC) is highly possible for many women, depending on the reason for the previous C-section, the type of uterine incision made, and other safety parameters evaluated by Dr. Poonam during your pregnancy.'
    },
    {
      question: 'How do I choose the best normal delivery gynecologist near me in Keshav Nagar or Mundhwa?',
      answer: 'If you are looking for a normal delivery doctor near me in Keshav Nagar, Mundhwa, or Hadapsar, Dr Poonam’s Women’s Clinic is a premier center. Led by Dr. Poonam with +10 years of experience, we provide compassionate and personalized maternity care plans close to your home.'
    },
    {
      question: 'What is active labor tracking, and why is it important during birth?',
      answer: 'Active labor tracking involves the continuous or intermittent monitoring of uterine contractions and fetal heart rate (using CTG machines) along with cervical dilation progress. This tracking ensures the baby is tolerating labor well and helps prevent fetal distress during delivery.'
    },
    {
      question: 'What pain relief options are available during a normal delivery?',
      answer: 'Pain management options include non-medical techniques (breathing exercises, warm compresses, active positioning, birthing balls) as well as medical options such as epidural analgesia, which can be administered under expert guidance.'
    }
  ];

  return (
    <>
      <main>
        <PageHeader title="Normal Delivery" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              {/* Sidebar */}
              <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
                <ServiceSidebar currentPath="/normal-delivery-in-keshav-nagar/" />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[40px] lg:gap-[60px]">
                
                {/* Overview */}
                <div>
                  <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[380px]">
                    <Image 
                      src="/images/normal-delivery.webp" 
                      alt="Normal Delivery Care and Fetal Ultrasound Screening" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="text-text space-y-4 leading-relaxed">
                    <p>
                      Normal vaginal delivery is the natural birth of a baby through the birth canal without surgical interventions. It is globally recognized as the safest and most beneficial form of childbirth for both the mother and the newborn, facilitating faster physical recovery, a lower risk of surgical complications, and natural immunity transfer to the baby.
                    </p>
                    <p>
                      At Dr Poonam's Women's Clinic in Keshav Nagar, Pune, we prioritize supporting your body's natural birth plan. Led by Dr. Poonam, with over 10 years of obstetric experience, we provide compassionate, state-of-the-art prenatal monitoring to guide you through a healthy, safe, and positive delivery experience. For expectant mothers residing in nearby Mundhwa or Hadapsar searching for a normal delivery doctor around the area, our clinic offers comprehensive antenatal care close to home.
                    </p>
                  </div>
                </div>

                {/* Creative Vertical Timeline for Procedure */}
                <div>
                  <AnimatedHeading 
                    text="The Normal Delivery Birthing Stages" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[30px] leading-tight" 
                  />
                  <div className="flex flex-col md:flex-row gap-[40px] lg:gap-[60px] items-start">
                    {/* Left Column: Intro text */}
                    <div className="w-full md:w-[40%] flex flex-col gap-4">
                      <p className="text-text leading-relaxed text-[15px]">
                        The path of normal vaginal birth is a beautiful, structured sequence of physical stages. If you are living around the area of Mundhwa or Hadapsar, Dr. Poonam's expert oversight ensures that each contraction phase is tracked for maximum safety and comfort:
                      </p>
                      <div className="bg-[#FAF6F3] p-6 rounded-[20px] border border-divider/10 mt-2">
                        <h4 className="font-bold text-primary mb-2 text-[16px]">Labor Guidance</h4>
                        <p className="text-text text-[14px] leading-relaxed">
                          From initial cervix dilation monitoring to immediate post-birth skin-to-skin bonding, every stage is carefully managed to maximize safety and peace of mind.
                        </p>
                      </div>
                    </div>

                    {/* Right Column: Vertical Timeline */}
                    <div className="w-full md:w-[60%] relative flex flex-col pl-2">
                      {/* Connecting vertical line */}
                      <div className="absolute left-[21px] top-5 bottom-12 w-[2px] bg-[#5A4A66]/20"></div>

                      {procedureTimeline.map((step, idx) => (
                        <div key={idx} className="flex gap-6 relative">
                          {/* Step Icon */}
                          <div className="relative z-10 flex items-center justify-center w-[26px] h-[26px] rounded-full bg-[#FAF6F3] border border-[#5A4A66] shrink-0 mt-1">
                            <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
                          </div>

                          {/* Content */}
                          <div className={`flex-1 ${idx < procedureTimeline.length - 1 ? 'pb-10' : 'pb-0'}`}>
                            <div className="inline-block bg-[#5A4A66]/10 text-accent font-bold text-[12px] px-3 py-1 rounded-[100px] mb-2 uppercase tracking-wide">
                              Stage {step.step}
                            </div>
                            <h3 className="text-[18px] font-bold text-primary mb-2 leading-snug">
                              {step.title}
                            </h3>
                            <p className="text-text text-[14px] leading-relaxed">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Preventive Care */}
                <div>
                  <AnimatedHeading 
                    text="Maternal Guidelines & Preventive Care" 
                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[30px] leading-tight" 
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {preventiveTips.map((tip, idx) => (
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
                      Why Choose Dr. Poonam's Maternity Care?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Original Experience:</strong> +10 Years of expert medical handling of normal deliveries and VBAC plans.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>24/7 Support Network:</strong> Continuous labor monitoring in association with leading multi-specialty hospitals near Keshav Nagar.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                        <span><strong>Compassionate Approach:</strong> Providing personalized breathing guidance and active birth exercises for a comfortable delivery.</span>
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
