import React from "react";
import PageHeader from "@/components/layout/PageHeader";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Contact Us – Ferlix",
  description: "Get in touch with Ferlix IVF & Fertility Clinic. Reach out for personalized IVF support, schedule hours, or send us a message to start your parenthood journey.",
  alternates: {
    canonical: "/contact-us/",
  },
};

export default function ContactUsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact Us" },
  ];

  return (
    <>
      <main>
        <PageHeader title="Contact Us" breadcrumbs={breadcrumbs} />

        {/* Info Boxes Section */}
        <section className="py-[80px] lg:py-[100px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              
              {/* Schedule Hours */}
              <div className="bg-secondary p-8 rounded-[30px] border border-divider/10 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full text-primary">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6 shrink-0">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-[24px] font-bold text-primary mb-4">Schedule Hours</h3>
                <ul className="space-y-3 text-text">
                  <li className="flex justify-between border-b border-divider/20 pb-2">
                    <span className="capitalize">Monday - Thursday</span>
                    <span className="font-semibold text-primary">08:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between border-b border-divider/20 pb-2">
                    <span className="capitalize">Friday</span>
                    <span className="font-semibold text-primary">08:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between pb-1">
                    <span className="capitalize">Saturday</span>
                    <span className="font-semibold text-primary">08:00 - 18:00</span>
                  </li>
                </ul>
              </div>

              {/* Our Locations */}
              <div className="bg-accent text-white p-8 rounded-[30px] border border-white/5 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
                <div className="w-14 h-14 bg-white/15 rounded-full flex items-center justify-center text-white mb-6 shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="text-[24px] font-bold text-white mb-2">Our Locations</h3>
                <p className="text-white/80 mb-6 text-[15px]">Providing expert IVF care locally.</p>
                <p className="text-white font-semibold leading-[1.6] mt-auto">
                  123 Ipsum Road, Loremton Dolorshire, LO1 2RM, United Kingdom
                </p>
              </div>

              {/* Contact Us */}
              <div className="bg-primary text-white p-8 rounded-[30px] border border-white/5 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white mb-6 shrink-0">
                  <Phone className="w-7 h-7" />
                </div>
                <h3 className="text-[24px] font-bold text-white mb-2">Contact Us</h3>
                <p className="text-white/80 mb-6 text-[15px]">Reach out for personalized IVF support.</p>
                <div className="space-y-3 mt-auto">
                  <a 
                    href="tel:+91-258-8520" 
                    className="flex items-center gap-3 text-white font-bold hover:text-white/80 transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4 text-white" />
                    <span>+91-258-8520</span>
                  </a>
                  <a 
                    href="mailto:info@domainname.com" 
                    className="flex items-center gap-3 text-white font-bold hover:text-white/80 transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4 text-white" />
                    <span>info@domainname.com</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Map Section (Full Width aligned) */}
        <section className="pb-[80px] lg:pb-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="w-full h-[450px] lg:h-[550px] rounded-[30px] overflow-hidden border border-divider/10 shadow-lg relative">
              <iframe 
                src="https://maps.google.com/maps?q=London%20Eye,%20London,%20United%20Kingdom&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                title="London Eye, London, United Kingdom" 
                aria-label="London Eye, London, United Kingdom"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
