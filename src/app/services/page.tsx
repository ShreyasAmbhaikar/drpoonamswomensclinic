import React from "react";
import PageHeader from "@/components/landing/PageHeader";
import { 
  Baby, 
  Layers, 
  Sparkles, 
  Activity, 
  Heart, 
  ShieldCheck, 
  Users, 
  FolderLock,
  Scissors,
  FileSpreadsheet,
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Obstetrics & Gynecologist Services in Keshav Nagar | Dr Poonam's Women's Clinic",
  description: "Comprehensive women's healthcare services at Dr Poonam's Women's Clinic in Keshav Nagar, Pune. Normal delivery, LSCS, PCOD care, IUI, and laparoscopic surgeries.",
  alternates: {
    canonical: "/services/",
  },
};

export default function ServicesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services" },
  ];

  const services = [
    {
      icon: <Baby className="w-10 h-10 text-accent" />,
      title: "Normal Delivery",
      desc: "Comprehensive prenatal care, continuous labor monitoring, and natural child birth support focusing on maternal safety.",
      href: "/normal-delivery-in-keshav-nagar/",
      isActive: true,
    },
    {
      icon: <Scissors className="w-10 h-10 text-accent" />,
      title: "LSCS (Caesarean Section)",
      desc: "Safe and highly professional surgical delivery options performed when medically indicated for mother or child.",
      href: "/lscs-caesarean-section-in-keshav-nagar/",
      isActive: true,
    },
    {
      icon: <Sparkles className="w-10 h-10 text-accent" />,
      title: "Infertility, IUI & IVF Care",
      desc: "Advanced fertility testing, follicle tracking, and Intrauterine Insemination (IUI) to assist couples on their parenthood path.",
      href: "/infertility-iui-ivf-in-keshav-nagar/",
      isActive: true,
    },
    {
      icon: <Layers className="w-10 h-10 text-accent" />,
      title: "Scarless Hysterectomy (NDVH)",
      desc: "Non-Descent Vaginal Hysterectomy for uterine conditions, allowing removal without any visible abdominal scars.",
      href: "/scarless-hysterectomy-in-keshav-nagar/",
      isActive: true,
    },
    {
      icon: <Heart className="w-10 h-10 text-accent" />,
      title: "PCOD / PCOS Care",
      desc: "Holistic, lifestyle-integrated medical management for ovulation issues, hormonal imbalances, and metabolic health.",
      href: "/pcod-pcos-care-in-keshav-nagar/",
      isActive: true,
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-accent" />,
      title: "Cervical Cancer Screening & HPV Vaccine",
      desc: "Regular Pap smears, HPV DNA screening, and preventative cervical cancer vaccinations to ensure long-term wellness.",
      href: "/cervical-cancer-vaccination-screening-in-keshav-nagar/",
      isActive: true,
    },
    {
      icon: <Users className="w-10 h-10 text-accent" />,
      title: "Pre Conceptional Counselling",
      desc: "Personalized genetic risk assessment, health screenings, and nutritional guidance for couples planning pregnancy.",
      href: "/pre-conceptional-counselling-in-keshav-nagar/",
      isActive: true,
    },
    {
      icon: <FileSpreadsheet className="w-10 h-10 text-accent" />,
      title: "MTP, D & E Services",
      desc: "Safe, legal, and strictly confidential Medical Termination of Pregnancy and Dilation & Evacuation procedures.",
      href: "/mtp-d-e-services-in-keshav-nagar/",
      isActive: true,
    },
    {
      icon: <FolderLock className="w-10 h-10 text-accent" />,
      title: "Tubal Ligation & Reversal",
      desc: "Permanent contraception options (tubectomy) and microsurgical tubal re-canalization to restore fertility pathways.",
      href: "/tubal-ligation-reversal-in-keshav-nagar/",
      isActive: true,
    },
    {
      icon: <Activity className="w-10 h-10 text-accent" />,
      title: "Laparoscopic Procedures",
      desc: "Minimally invasive keyhole surgeries for ovarian cysts, uterine fibroids, endometriosis, and diagnostic laparoscopy.",
      href: "/laparoscopic-procedures-in-keshav-nagar/",
      isActive: true,
    },
  ];

  return (
    <>
      <main>
        <PageHeader title="Our Services" breadcrumbs={breadcrumbs} />

        {/* Services List Grid */}
        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="text-center max-w-[700px] mx-auto mb-[60px]">
              <h4 className="text-accent text-[16px] font-bold tracking-wider uppercase mb-3">Our Offerings</h4>
              <h2 className="text-[32px] md:text-[40px] font-bold text-primary">
                Specialized Gynecologist and Obstetric Treatments in Pune
              </h2>
              <p className="text-text mt-3 text-[16px]">
                Dr Poonam's Women's Clinic targets high-standard clinical care for women of all age brackets, specialized around Keshav Nagar, Mundhwa, Hadapsar, and Kharadi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-8 rounded-[30px] border border-divider/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-6 items-start hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-secondary rounded-[20px] flex items-center justify-center shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1 flex flex-col h-full w-full">
                    <h3 className="text-[22px] font-bold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-text leading-[1.6] text-[15px] mb-6">
                      {service.desc}
                    </p>
                    
                    <div className="mt-auto">
                      <Link 
                        href={service.href}
                        className={`inline-flex items-center gap-2 font-bold transition-colors duration-300 ${
                          service.isActive 
                            ? "text-accent hover:text-primary" 
                            : "text-text/70 hover:text-accent"
                        }`}
                      >
                        <span>{service.isActive ? "View Treatment Details" : "Book Initial Consultation"}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
