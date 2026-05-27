import Image from 'next/image';
import PageHeader from '@/components/layout/PageHeader';
import ServiceSidebar from '@/components/sections/ServiceSidebar';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';

export const metadata = {
  title: 'Egg & Sperm Freezing – Ferlix',
  description: 'Egg Freezing, also known as oocyte cryopreservation, is an advanced fertility preservation technique that allows women to store their healthy eggs.',
  alternates: {
    canonical: '/services/egg-sperm-freezing/',
  }
};

export default function EggSpermFreezingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Egg & Sperm Freezing' },
  ];

  const expertCareList = [
    {
      title: 'Personalized Care for Every Patient',
      desc: 'We provide individualized care, tailoring each treatment plan to meet the unique needs of every patient.',
    },
    {
      title: 'Compassionate Solutions Tailored',
      desc: 'We provide individualized care, tailoring each treatment plan to meet the unique needs of every patient.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Tailored Guidance',
      desc: 'Based on your diagnosis, we proceed with the most suitable fertility treatment.',
    },
    {
      step: '02',
      title: 'Expert Consultation',
      desc: 'Based on your diagnosis, we proceed with the most suitable fertility treatment.',
    },
    {
      step: '03',
      title: 'Care Planning',
      desc: 'Based on your diagnosis, we proceed with the most suitable fertility treatment.',
    },
  ];

  const faqs = [
    {
      question: 'How long does an IVF cycle take?',
      answer: 'Schedule a consultation with our fertility experts and take the first step toward your parenthood journey.',
    },
    {
      question: 'How many IVF cycles might I need?',
      answer: 'Schedule a consultation with our fertility experts and take the first step toward your parenthood journey.',
    },
    {
      question: 'What are the success rates of IVF?',
      answer: 'Schedule a consultation with our fertility experts and take the first step toward your parenthood journey.',
    },
  ];

  return (
    <>
      <main>
      <PageHeader title="Egg & Sperm Freezing" breadcrumbs={breadcrumbs} />

      <section className="py-[80px] lg:py-[120px]">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
            
            {/* Sidebar */}
            <div className="w-full lg:w-[33.333%] order-2 lg:order-1">
              <ServiceSidebar currentPath="/services/egg-sperm-freezing/" hideContact={true} />
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-[66.666%] order-1 lg:order-2 flex flex-col gap-[40px] lg:gap-[60px]">
              
              {/* Overview */}
              <div>
                <div className="mb-[30px] lg:mb-[40px] rounded-[20px] overflow-hidden">
                  <Image 
                    src="/images/egg-sperm-freezing-overview.webp" 
                    alt="Egg & Sperm Freezing" 
                    width={1200} 
                    height={800} 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="text-text space-y-4">
                  <p>Egg Freezing, also known as oocyte cryopreservation, is an advanced fertility preservation technique that allows women to store their healthy eggs at a younger age for future use. Whether you’re focusing on your career, personal goals, or not ready for parenthood yet, egg freezing offers the freedom and peace of mind to plan pregnancy when the time is right — without compromising your chances of success.</p>
                  <p>IVF is often recommended for couples facing various fertility challenges such as blocked fallopian tubes, male factor infertility, ovulation disorders, or unexplained infertility. Beyond its clinical success, IVF offers emotional reassurance and renewed hope to countless individuals.</p>
                </div>
              </div>

              {/* Expert Care */}
              <div>
                <AnimatedHeading 
                  text="Expert care for your family journey" 
                  className="text-[30px] md:text-[40px] font-bold text-primary mb-[30px] capitalize leading-[1.2]" 
                />
                <div className="text-text mb-[40px]">
                  <p>IVF is not just a medical procedure — it’s a journey filled with hope, resilience, and emotional strength. For many, it represents a second chance at building the family they’ve always dreamed of. With supportive care and advanced technology, IVF continues to be a beacon of possibility in the field of reproductive health.</p>
                </div>
                
                <div className="bg-secondary rounded-[20px] p-[30px] md:p-[50px] flex flex-col md:flex-row items-center gap-[40px]">
                  <div className="w-full md:w-1/2 flex flex-col gap-6">
                    {expertCareList.map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="text-accent text-[24px] mt-1">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div>
                          <h3 className="text-[20px] font-bold text-primary mb-2">{item.title}</h3>
                          <p className="text-text">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="w-full md:w-1/2 text-center flex justify-center">
                    <Image 
                      src="/images/egg-sperm-freezing-expert.webp" 
                      alt="Expert Care" 
                      width={279} 
                      height={343} 
                      className="inline-block"
                    />
                  </div>
                </div>
              </div>

              {/* Information Banner */}
              <div className="flex flex-col md:flex-row gap-[30px]">
                <div className="w-full md:w-1/2 rounded-[20px] overflow-hidden">
                  <Image 
                    src="/images/egg-sperm-freezing-entry.webp" 
                    alt="Service Entry" 
                    width={414} 
                    height={232} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-[24px] font-bold text-primary mb-3">Our Centers Across the Region</h3>
                  <p className="text-text italic">"With locations across the region, centers are dedicated to serving local communities with excellence, accessibility & care—wherever you are."</p>
                </div>
              </div>

              {/* Parenthood Path */}
              <div>
                <AnimatedHeading 
                  text="Your path to parenthood" 
                  className="text-[30px] md:text-[40px] font-bold text-primary mb-[30px] capitalize leading-[1.2]" 
                />
                <div className="text-text mb-[40px]">
                  <p>IVF is not just a medical procedure — it’s a journey filled with hope, resilience, and emotional strength. For many, it represents a second chance at building the family they’ve always dreamed of. With supportive care and advanced technology, IVF continues to be a beacon of possibility in the field of reproductive health.</p>
                </div>
                
                <div className="bg-primary rounded-[20px] p-[30px] md:p-[50px] text-white">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white/10 rounded-[20px] p-8 hover:-translate-y-2 transition-transform duration-300">
                      <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center mb-6">
                        <svg width="32" height="32" viewBox="0 0 50 51" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M45.8 10.9c-.2-.2-.4-.4-.7-.5L25.1 2.2c-.2-.1-.4-.1-.6-.1-.2 0-.4 0-.6.1L3.9 10.5c-.3.1-.5.2-.7.4-.2.3-.3.7-.3 1.1v26.1c0 .4.1.7.3 1 .2.3.5.5.8.6l20 8.3h.6l20-8.3c.3-.1.6-.3.8-.6.2-.3.3-.6.3-1V12.1c0-.4-.1-.8-.3-1.1z"/><path d="M24.6 48.3V19.9M24.6 19.9v28.4M3.3 11.1l21.3 8.8 21.3-8.8"/></svg>
                      </div>
                      <h3 className="text-[20px] font-bold mb-2">Surrogacy Care</h3>
                      <p className="text-white/70 text-[14px]">Helping individuals and couples.</p>
                    </div>
                    
                    <div className="bg-white/10 rounded-[20px] p-8 hover:-translate-y-2 transition-transform duration-300">
                      <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center mb-6">
                        <svg width="32" height="32" viewBox="0 0 50 51" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M25 19.9c12.8 0 23.2-4 23.2-8.9S37.8 2 25 2 1.8 6 1.8 10.9s10.4 9 23.2 9z"/><path d="M1.8 10.9v28.6C1.8 44.4 12.2 48.4 25 48.4s23.2-4 23.2-8.9V10.9M48.2 25.2C48.2 30.1 37.8 34.1 25 34.1S1.8 30.1 1.8 25.2"/></svg>
                      </div>
                      <h3 className="text-[20px] font-bold mb-2">Parenthood Path</h3>
                      <p className="text-white/70 text-[14px]">Helping individuals and couples.</p>
                    </div>
                    
                    <div className="bg-white/10 rounded-[20px] p-8 hover:-translate-y-2 transition-transform duration-300">
                      <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center mb-6">
                        <svg width="32" height="32" viewBox="0 0 50 49" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M45.3 4.2c.4.4.4 1 0 1.4L33.2 17.8c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L43.9 4.2c.4-.4 1-.4 1.4 0z"/><path fillRule="evenodd" clipRule="evenodd" d="M4.7 4.2c.4-.4 1-.4 1.4 0l12.2 12.2c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L4.7 5.6c-.4-.4-.4-1 0-1.4z"/><path fillRule="evenodd" clipRule="evenodd" d="M18.2 31.3c.4.4.4 1 0 1.4L6.1 44.9c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L16.8 31.3c.4-.4 1-.4 1.4 0z"/><path fillRule="evenodd" clipRule="evenodd" d="M31.8 31.3c.4-.4 1-.4 1.4 0l12.2 12.2c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L31.8 32.7c-.4-.4-.4-1 0-1.4z"/><path fillRule="evenodd" clipRule="evenodd" d="M25 2.3C12.7 2.3 2.8 12.2 2.8 24.5S12.7 46.7 25 46.7 47.2 36.8 47.2 24.5 37.3 2.3 25 2.3zM.8 24.5C.8 11.1 11.6.3 25 .3S49.2 11.1 49.2 24.5 38.4 48.7 25 48.7.8 37.9 .8 24.5z"/><path fillRule="evenodd" clipRule="evenodd" d="M25 15C19.7 15 15.5 19.2 15.5 24.5S19.7 34 25 34s9.5-4.3 9.5-9.5S30.3 15 25 15zM13.5 24.5C13.5 18.1 18.6 13 25 13s11.5 5.1 11.5 11.5-5.1 11.5-11.5 11.5S13.5 30.9 13.5 24.5z"/></svg>
                      </div>
                      <h3 className="text-[20px] font-bold mb-2">Hopeful Journey</h3>
                      <p className="text-white/70 text-[14px]">Helping individuals and couples.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compassionate Care Process */}
              <div>
                <AnimatedHeading 
                  text="Compassionate care at every step" 
                  className="text-[30px] md:text-[40px] font-bold text-primary mb-[20px] capitalize leading-[1.2]" 
                />
                <div className="text-text mb-[40px] max-w-[720px]">
                  <p>IVF is not just a medical procedure — it’s a journey filled with hope, resilience, and emotional strength. For many, it represents a second chance at building the family they’ve always dreamed of. With supportive care and advanced technology, IVF continues to be a beacon of possibility in the field of reproductive health.</p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-[40px] lg:gap-[60px] items-start">
                  {/* Left Column: Steps */}
                  <div className="w-full md:w-1/2 relative flex flex-col">
                    {/* Connecting vertical line */}
                    <div className="absolute left-[19px] top-5 bottom-12 w-[2px] bg-[#5A4A66]/20"></div>

                    {processSteps.map((item, idx) => (
                      <div key={idx} className="flex gap-6 relative">
                        {/* Step Icon */}
                        <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#FAF6F3] border border-divider/10 shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#5A4A66" strokeWidth="2.5" className="w-5 h-5 text-accent">
                            <circle cx="12" cy="12" r="10" strokeWidth="2"></circle>
                            <circle cx="12" cy="12" r="3" fill="currentColor"></circle>
                          </svg>
                        </div>

                        {/* Content */}
                        <div className={`flex-1 ${idx < processSteps.length - 1 ? 'pb-10' : 'pb-0'}`}>
                          <div className="inline-block bg-[#5A4A66]/10 text-accent font-bold text-[12px] px-3 py-1 rounded-[100px] mb-2 uppercase tracking-wide">
                            Step {item.step}
                          </div>
                          <h3 className="text-[20px] font-bold text-primary mb-2 leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-text text-[15px] leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Column: Image */}
                  <div className="w-full md:w-1/2 rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-divider/10">
                    <Image 
                      src="/images/egg-sperm-freezing-step.webp" 
                      alt="Compassionate Care Process" 
                      width={411} 
                      height={446} 
                      className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <AnimatedHeading 
                  text="Frequently asked questions" 
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
