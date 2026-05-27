import React from "react";
import PageHeader from "@/components/layout/PageHeader";
import { Snowflake, FlaskConical, ClipboardList, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Our Services – Ferlix",
  description: "Explore the wide range of advanced fertility treatments and diagnostic services offered at Ferlix IVF Clinic.",
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
      icon: <Snowflake className="w-10 h-10 text-accent" />,
      title: "Egg & Sperm Freezing",
      desc: "Advanced fertility preservation technique that allows you to store healthy eggs and sperm for future family planning.",
      href: "/services/egg-sperm-freezing/",
      isActive: true,
    },
    {
      icon: <FlaskConical className="w-10 h-10 text-accent" />,
      title: "In Vitro Fertilization (IVF)",
      desc: "Comprehensive IVF procedures using modern reproductive technologies to support individuals and couples in conceiving.",
      href: "/contact-us/",
      isActive: false,
    },
    {
      icon: <ClipboardList className="w-10 h-10 text-accent" />,
      title: "Fertility Testing & Evaluation",
      desc: "Detailed diagnostic evaluations, semen analysis, and hormonal checks to understand your unique reproductive profile.",
      href: "/contact-us/",
      isActive: false,
    },
    {
      icon: <HelpCircle className="w-10 h-10 text-accent" />,
      title: "Intrauterine Insemination (IUI)",
      desc: "A minimally invasive fertility treatment that places prepared sperm directly inside the uterus around ovulation.",
      href: "/contact-us/",
      isActive: false,
    },
  ];

  return (
    <>
      <main>
        <PageHeader title="Our Services" breadcrumbs={breadcrumbs} />

        {/* Services List Grid */}
        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="text-center max-w-[600px] mx-auto mb-[60px]">
              <h4 className="text-accent text-[16px] font-bold tracking-wider uppercase mb-3">Our Solutions</h4>
              <h2 className="text-[32px] md:text-[40px] font-bold text-primary">
                Advanced fertility services designed around you
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-8 md:p-10 rounded-[30px] border border-divider/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-6 items-start hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-secondary rounded-[20px] flex items-center justify-center shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1 flex flex-col h-full">
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
