import React from "react";
import Link from "next/link";

const SERVICES = [
  {
    title: "Normal Delivery",
    description: "Compassionate prenatal support, continuous labor monitoring, and safe natural childbirth facilitation based on evidence-based protocols.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
        <path d="M30.3242 1.18451C30.617 0.89169 31.0918 0.89183 31.3847 1.18451C31.6776 1.47741 31.6776 1.95217 31.3847 2.24506L24.5283 9.10248C24.2355 9.39528 23.7606 9.3951 23.4677 9.10248L16.6103 2.24506C16.3174 1.95217 16.3174 1.47741 16.6103 1.18451C16.9032 0.89162 17.3779 0.89162 17.6708 1.18451L23.997 7.51069L30.3242 1.18451Z"></path>
        <path d="M1.18061 16.6142C1.4735 16.3213 1.94826 16.3213 2.24115 16.6142L9.09858 23.4716C9.39119 23.7645 9.39138 24.2394 9.09858 24.5322L2.24115 31.3886C1.94826 31.6815 1.4735 31.6815 1.18061 31.3886C0.887924 31.0957 0.887784 30.6209 1.18061 30.3281L7.50678 24.0009L1.18061 17.6747C0.887714 17.3819 0.887714 16.9071 1.18061 16.6142Z"></path>
        <path d="M23.5243 38.8477C23.8189 38.6075 24.2536 38.6249 24.5282 38.8995L31.3846 45.7569L31.4364 45.8135C31.6767 46.1081 31.6593 46.5428 31.3846 46.8174C31.11 47.0917 30.6762 47.1084 30.3817 46.8682L30.3241 46.8174L23.9969 40.4903L17.6708 46.8174C17.3779 47.1101 16.9031 47.1101 16.6102 46.8174C16.3174 46.5246 16.3175 46.0498 16.6102 45.7569L23.4676 38.8995L23.5243 38.8477Z"></path>
        <path d="M45.7489 16.6141C46.0418 16.3214 46.5166 16.3213 46.8094 16.6141C47.1022 16.907 47.1022 17.3818 46.8094 17.6747L40.4823 24.0009L46.8094 30.328L46.8602 30.3856C47.1004 30.6801 47.0837 31.1139 46.8094 31.3885C46.5348 31.6632 46.1001 31.6806 45.8055 31.4403L45.7489 31.3885L38.8915 24.5321C38.5986 24.2393 38.5987 23.7645 38.8915 23.4716L45.7489 16.6141Z"></path>
        <path d="M11.4697 11.4697C11.7626 11.1768 12.2373 11.1768 12.5302 11.4697L17.6728 16.6122C17.9657 16.9051 17.9657 17.3799 17.6728 17.6728C17.3799 17.9657 16.9051 17.9657 16.6122 17.6728L11.4697 12.5302C11.1768 12.2373 11.1768 11.7626 11.4697 11.4697Z"></path>
        <path d="M16.6122 30.329C16.905 30.0361 17.3798 30.0362 17.6727 30.329C17.9656 30.6219 17.9656 31.0966 17.6727 31.3895L12.5301 36.5321C12.2373 36.825 11.7625 36.825 11.4696 36.5321C11.1768 36.2392 11.1768 35.7644 11.4696 35.4716L16.6122 30.329Z"></path>
        <path d="M35.4637 11.4696C35.7566 11.1768 36.2314 11.1768 36.5243 11.4696C36.8172 11.7625 36.8172 12.2373 36.5243 12.5301L31.3817 17.6727C31.0888 17.9656 30.6141 17.9656 30.3212 17.6727C30.0284 17.3798 30.0283 16.905 30.3212 16.6122L35.4637 11.4696Z"></path>
        <path d="M30.3212 30.329C30.6141 30.0362 31.0889 30.0362 31.3818 30.329L36.5244 35.4716C36.8173 35.7645 36.8173 36.2393 36.5244 36.5322C36.2315 36.8251 35.7567 36.8251 35.4638 36.5322L30.3212 31.3896C30.0283 31.0967 30.0283 30.6219 30.3212 30.329Z"></path>
        <path d="M23.25 39.4277V8.57031C23.25 8.1561 23.5858 7.82031 24 7.82031C24.4142 7.82031 24.75 8.1561 24.75 8.57031V39.4277C24.7498 39.8418 24.4141 40.1777 24 40.1777C23.5859 40.1777 23.2502 39.8418 23.25 39.4277Z"></path>
        <path d="M39.4277 23.25H8.57031C8.1561 23.25 7.82031 23.5858 7.82031 24C7.82031 24.4142 8.1561 24.75 8.57031 24.75H39.4277Z"></path>
      </svg>
    ),
    href: "/normal-delivery-in-keshav-nagar/",
  },
  {
    title: "LSCS (Caesarean)",
    description: "Certified gynecological expertise in performing sterile and safe C-section surgeries (LSCS) for high-risk pregnancies, adhering to the highest hygiene standards and obstetric safety guidelines.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
        <path d="M40.3926 28.7684V19.2372C40.3928 15.3357 39.0019 11.5665 36.4766 8.60336L36.2295 8.31918L36.1807 8.25961C35.9577 7.95192 35.9995 7.51912 36.2891 7.26059C36.5981 6.98476 37.0718 7.01214 37.3477 7.32114C40.2748 10.6002 41.8928 14.8416 41.8926 19.2372V28.7684C41.8926 31.1181 41.4304 33.4452 40.5312 35.6161C39.6321 37.7868 38.3138 39.7593 36.6523 41.4207C34.9909 43.0822 33.0184 44.4005 30.8477 45.2997C28.6768 46.1989 26.3497 46.662 24 46.662C23.5859 46.662 23.2502 46.326 23.25 45.912C23.25 45.4977 23.5858 45.162 24 45.162C26.1527 45.162 28.2846 44.7377 30.2734 43.9139C32.2623 43.0901 34.0696 41.8824 35.5918 40.3602C37.1139 38.838 38.3217 37.0306 39.1455 35.0418C39.9692 33.0531 40.3926 30.921 40.3926 28.7684Z"></path>
        <path d="M6.10938 28.7686V23.043C6.10938 22.6288 6.44516 22.293 6.85938 22.293C7.27359 22.293 7.60938 22.6288 7.60938 23.043V28.7686C7.60828 31.9956 8.56011 35.1512 10.3447 37.8398C12.1293 40.5284 14.6675 42.6307 17.6416 43.8828C18.0233 44.0435 18.2026 44.4835 18.042 44.8652C17.8813 45.247 17.4413 45.4263 17.0596 45.2656C13.8133 43.899 11.0427 41.6045 9.09473 38.6699C7.26848 35.9186 6.24131 32.7193 6.12109 29.4277L6.10938 28.7686Z"></path>
        <path d="M19.3724 1.95341C23.813 0.763635 28.5357 1.32995 32.5628 3.52373L32.9496 3.7415L33.014 3.78252C33.3227 4.00479 33.4182 4.42947 33.224 4.76591C33.0297 5.10201 32.6146 5.23138 32.2679 5.07548L32.1996 5.04033L31.8451 4.84111C28.1556 2.83132 23.8293 2.31263 19.7611 3.40263C15.693 4.49263 12.2054 7.10467 10.015 10.6897L9.80698 11.0403C8.91265 12.5849 8.28162 14.2681 7.93979 16.0198C7.86047 16.4263 7.46643 16.6919 7.05991 16.6126C6.65336 16.5333 6.38781 16.1393 6.46714 15.7327C6.84083 13.8175 7.53136 11.978 8.50913 10.2894C10.8819 6.18037 14.7892 3.18151 19.3724 1.95341Z"></path>
        <path d="M31.8234 26.0918V20.5625C31.8386 19.387 31.5894 18.2228 31.0949 17.1563C30.6004 16.0899 29.8728 15.1482 28.966 14.4004C28.0589 13.6525 26.995 13.1172 25.8537 12.835C24.7124 12.5528 23.5223 12.5306 22.3713 12.7696C21.9657 12.8537 21.5687 12.5931 21.4845 12.1875C21.4004 11.782 21.661 11.385 22.0666 11.3008C23.4375 11.0162 24.8548 11.0429 26.214 11.3789C27.5732 11.715 28.8398 12.3516 29.9201 13.2422C31.0004 14.1329 31.8672 15.2552 32.4562 16.5254C33.0438 17.7927 33.34 19.1756 33.3234 20.5723V26.0918C33.3234 26.506 32.9875 26.8417 32.5734 26.8418C32.1592 26.8418 31.8234 26.506 31.8234 26.0918Z"></path>
      </svg>
    ),
    href: "/lscs-caesarean-section-in-keshav-nagar/",
  },
  {
    title: "PCOD / PCOS Care",
    description: "Patient-centered clinical care and customized medical management for hormonal imbalances, ovulation issues, and metabolic wellness.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M25.4079 0.964844H22.5925C21.7508 0.96733 20.9294 1.22405 20.236 1.70117L18.7067 3.63867L17.3268 7.19336L12.7126 9.81348L8.92449 9.23633L8.60418 9.2041C7.88406 9.1603 7.16242 9.30405 6.51141 9.62305C5.7676 9.98763 5.149 10.5653 4.73406 11.2822L3.36102 13.6855C2.93585 14.4123 2.74002 15.2508 2.79949 16.0908C2.85925 16.9336 3.17331 17.7386 3.69988 18.3994L6.10711 21.3857V26.6201L3.76824 29.6016C3.24158 30.2625 2.92753 31.0681 2.86785 31.9111C2.80827 32.7538 3.00521 33.5949 3.43328 34.3232L4.80047 36.7158C5.21745 37.4359 5.83672 38.0134 6.58074 38.3779C7.32475 38.7425 8.16014 38.878 8.98113 38.7666L12.7126 38.1865L17.3268 40.8037L18.7067 44.3633C19.0098 45.148 19.543 45.8229 20.236 46.2998C20.9294 46.777 21.7508 47.0336 22.5925 47.0361H25.4772C26.3188 47.0336 27.1404 46.7769 27.8337 46.2998C28.5269 45.8226 29.059 45.1465 29.362 44.3613L30.7409 40.8037L35.2897 38.1865L39.0759 38.7646C39.9086 38.878 40.7449 38.7425 41.4889 38.3779C42.2328 38.0133 42.8513 37.4357 43.2663 36.7188L44.6393 34.3145C45.0641 33.588 45.2602 32.7507 45.2009 31.9111C45.1412 31.0682 44.8281 30.2625 44.3014 29.6016L41.9684 26.6201V21.3857L44.3056 18.3994C44.826 17.7386 45.1922 16.9336 45.1325 16.0908C45.1922 15.2479 44.9953 14.4062 44.5671 13.6777L43.1979 11.2822C42.8513 10.5653 42.2328 9.94202 41.4196 9.62305C40.6756 9.25856 39.8401 9.12295 39.0192 9.23438L35.2214 9.81348L30.6716 7.19531L29.2946 4.17871C29.1 3.67546 28.5269 2.85349 27.8337 2.47266C27.1404 1.22405 26.3188 0.96733 25.4079 0.964844Z" />
        <circle cx="24" cy="24" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    href: "/pcod-pcos-care-in-keshav-nagar/",
  },
  {
    title: "Infertility & IUI/IVF",
    description: "Ethical, success-focused infertility diagnostics, advanced follicle tracking, and customized IUI/IVF guidance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 30 28" fill="currentColor">
        <path d="M17.4639 18.2861C17.4638 13.9665 13.9622 10.4648 9.64258 10.4648C5.32303 10.4649 1.82136 13.9666 1.82129 18.2861C1.82129 22.6057 5.32299 26.1073 9.64258 26.1074C13.9622 26.1074 17.4639 22.6058 17.4639 18.2861ZM18.9639 18.2861C18.9639 23.4342 14.7907 27.6074 9.64258 27.6074C4.49456 27.6073 0.321289 28.1211 0.321289 18.2861C0.321364 13.1382 4.49461 8.96492 9.64258 8.96484C14.7906 8.96484 18.9638 13.1381 18.9639 18.2861Z"></path>
        <path d="M28.1782 18.2861C28.1781 13.9665 24.6765 10.4648 20.3569 10.4648C16.0374 10.4649 12.5357 13.9666 12.5356 18.2861C12.5356 22.6057 16.0373 26.1074 20.3569 26.1074C24.6766 26.1074 28.1782 22.6058 28.1782 18.2861ZM29.6782 18.2861C29.6782 23.4342 25.505 27.6074 20.3569 27.6074C15.2089 27.6073 11.0356 23.4342 11.0356 18.2861C11.0357 13.1382 15.209 8.96492 20.3569 8.96484C25.505 8.96484 29.6781 13.1381 29.6782 18.2861Z"></path>
        <path d="M22.8208 9.71582C22.8207 5.39623 19.3191 1.89453 14.9995 1.89453C10.68 1.89461 7.1783 5.39628 7.17822 9.71582C7.17822 14.0354 10.6799 17.537 14.9995 17.5371C19.3192 17.5371 22.8208 14.0355 22.8208 9.71582ZM24.3208 9.71582C24.3208 14.8639 20.1476 19.0371 14.9995 19.0371C9.85149 19.037 5.67822 14.8639 5.67822 9.71582C5.6783 4.56785 9.85154 0.394606 14.9995 0.394531C20.1475 0.394531 24.3207 4.5678 24.3208 9.71582Z"></path>
      </svg>
    ),
    href: "/infertility-iui-ivf-in-keshav-nagar/",
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-[100px] lg:py-[120px] bg-secondary relative z-0">
      <div className="container mx-auto max-w-[1300px] px-4">
        
        {/* Header (2-column layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[30px] lg:gap-[60px] items-start mb-[50px]">
          {/* Left Column (60% width on large screens) */}
          <div className="lg:col-span-7 flex flex-col gap-3 animate-fade-in-up">
            {/* Subtitle */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e87c7c]"></span>
              <span className="text-[13px] md:text-[14px] font-bold tracking-[0.15em] text-accent uppercase">
                SERVICES
              </span>
            </div>
            {/* Main Heading */}
            <h2 className="text-[32px] md:text-[46px] font-bold text-primary leading-[1.2] tracking-tight -mt-1">
              Specialized women's healthcare and pregnancy services
            </h2>
          </div>
          
          {/* Right Column (40% width on large screens) */}
          <div className="lg:col-span-5 flex flex-col items-start lg:pt-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <p className="text-[16px] text-text leading-[1.65em] mb-6">
              At Dr Poonam's Women's Clinic, we provide a full range of gynecological and obstetric treatments, customized for every stage of your life.
            </p>
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center bg-accent text-white hover:bg-primary transition-all duration-300 font-bold rounded-[10px] text-[16px] py-[15px] px-[28px] gap-2 shadow-[0_4px_14px_rgba(90,74,102,0.2)] group"
            >
              View All Treatments
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </Link>
          </div>
        </div>

        {/* Services Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[30px]">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-[24px] p-[25px] md:p-[30px] border border-divider/10 transition-all duration-300 ease-in-out hover:bg-accent hover:text-white relative overflow-hidden z-10 shadow-[0_10px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] flex flex-col justify-between min-h-[300px] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div>
                {/* SVG Icon */}
                <div className="text-accent group-hover:text-white transition-colors duration-300 mb-[20px] inline-block">
                  {service.icon}
                </div>
                
                {/* Card Title */}
                <h3 className="text-[22px] md:text-[24px] font-bold text-primary mb-[12px] group-hover:text-white transition-colors duration-300 leading-snug">
                  <Link href={service.href} className="before:absolute before:inset-0">
                    {service.title}
                  </Link>
                </h3>
                
                {/* Description */}
                <p className="text-[15px] text-text leading-[1.6em] mb-[20px] group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
              
              {/* Read More link */}
              <div className="inline-flex items-center gap-[6px] text-[15px] font-bold text-accent group-hover:text-white transition-colors duration-300 mt-auto">
                Read More 
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-[60px] text-[16px] text-primary animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <span className="bg-accent text-white py-1 px-3.5 rounded-full text-[13px] font-bold uppercase tracking-wider">
            Appointment
          </span>
          <p className="font-medium text-center sm:text-left text-primary">
            Start your journey to better health today.{" "}
            <Link href="/contact-us" className="font-bold underline hover:text-accent transition-colors duration-300">
              Book an Appointment!
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
};
export default ServicesSection;
