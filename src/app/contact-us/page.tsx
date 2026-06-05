import React from "react";
import PageHeader from "@/components/landing/PageHeader";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Contact Us | Dr. Poonam's Women's Clinic",
  description: "Get in touch with Dr. Poonam's Women's Clinic in Keshav Nagar, Pune. Reach out for expert pregnancy care, delivery consultations, PCOD support, and fertility care.",
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
                <h3 className="text-[24px] font-bold text-primary mb-2">Schedule Hours</h3>
                <p className="text-text mb-6 text-[15px]">Clinic timing and consultation schedule.</p>
                <ul className="space-y-3 text-text">
                  <li className="flex justify-between border-b border-divider/20 pb-2">
                    <span className="capitalize font-semibold text-primary">Monday - Saturday</span>
                    <div className="flex flex-col items-end text-right font-medium">
                      <span>10:00 - 14:00</span>
                      <span>18:00 - 21:00</span>
                    </div>
                  </li>
                  <li className="flex justify-between pb-1">
                    <span className="capitalize font-semibold text-primary">Sunday</span>
                    <span className="font-semibold text-accent">Closed</span>
                  </li>
                </ul>
              </div>

              {/* Our Locations */}
              <div className="bg-accent text-white p-8 rounded-[30px] border border-white/5 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
                <div className="w-14 h-14 bg-white/15 rounded-full flex items-center justify-center text-white mb-6 shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="text-[24px] font-bold text-white mb-2">Our Locations</h3>
                <p className="text-white/80 mb-6 text-[15px]">Providing expert gynecologist care locally.</p>
                <a 
                  href="https://www.google.com/maps/place/Dr+Poonam's+Women's+Clinic+%7C+Gynecologist/data=!4m2!3m1!1s0x0:0xd39aed6b8c64a153?sa=X&ved=1t:2428&hl=en&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors duration-300 font-semibold leading-[1.6] block"
                >
                  Shop No 33, Shopping Complex, Mantra Mesmer Rd, in front of Florida River Bank, Keshav Nagar, Mundhwa, Mundhawa, Pune, Maharashtra 411036
                </a>
              </div>

              {/* Contact Us */}
              <div className="bg-primary text-white p-8 rounded-[30px] border border-white/5 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white mb-6 shrink-0">
                  <Phone className="w-7 h-7" />
                </div>
                <h3 className="text-[24px] font-bold text-white mb-2">Contact Us</h3>
                <p className="text-white/80 mb-6 text-[15px]">Reach out for pregnancy and gynae support.</p>
                <div className="space-y-3">
                  <a 
                    href="tel:09711929529" 
                    className="flex items-center gap-3 text-white font-bold hover:text-white/80 transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4 text-white" />
                    <span>097119 29529</span>
                  </a>
                  <a 
                    href="tel:08149661830" 
                    className="flex items-center gap-3 text-white font-bold hover:text-white/80 transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4 text-white" />
                    <span>081496 61830</span>
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
                src="https://maps.google.com/maps?q=Dr%20Poonam's%20Women's%20Clinic%20Keshav%20Nagar%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                title="Dr Poonam's Women's Clinic, Keshav Nagar, Pune" 
                aria-label="Dr Poonam's Women's Clinic, Keshav Nagar, Pune"
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
