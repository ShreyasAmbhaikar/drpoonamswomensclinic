import React from "react";
import Link from "next/link";

export const InfoStrip = () => {
  return (
    <div className="relative -mt-[50px] z-30 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="bg-white rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-[30px] md:p-[40px] grid grid-cols-1 lg:grid-cols-3 gap-[30px] lg:gap-0 items-center">
          
          {/* Phone Info */}
          <div className="flex items-center gap-[20px] w-full lg:pr-6 lg:border-r lg:border-divider h-full">
            <div className="w-[60px] h-[60px] rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-semibold text-accent uppercase tracking-[0.1em] mb-1">
                Need Gynecologist Services?
              </p>
              <div className="text-[17px] font-bold text-primary leading-snug">
                Call on : <a href="tel:09711929529" className="hover:text-accent transition-colors duration-300 whitespace-nowrap">097119 29529</a> / <a href="tel:08149661830" className="hover:text-accent transition-colors duration-300 whitespace-nowrap">081496 61830</a>
              </div>
            </div>
          </div>

          {/* Hours Info */}
          <div className="flex items-center gap-[20px] w-full lg:px-8 lg:border-r lg:border-divider h-full">
            <div className="w-[60px] h-[60px] rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-semibold text-accent uppercase tracking-[0.1em] mb-1">
                Opening Hours
              </p>
              <h4 className="text-[17px] font-bold text-primary leading-tight">
                Mon to Sat: 10am - 2pm <br />
                <span>6pm - 9pm</span>
              </h4>
            </div>
          </div>

          {/* Address Info */}
          <div className="flex items-center gap-[20px] w-full lg:pl-8 h-full">
            <div className="w-[60px] h-[60px] rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-semibold text-accent uppercase tracking-[0.1em] mb-1">
                Clinic Location
              </p>
              <a 
                href="https://www.google.com/maps/place/Dr+Poonam's+Women's+Clinic+%7C+Gynecologist/data=!4m2!3m1!1s0x0:0xd39aed6b8c64a153?sa=X&ved=1t:2428&hl=en&ictx=111" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[17px] font-bold text-primary hover:text-accent transition-colors duration-300 leading-snug"
              >
                Shop No 33, Mantra Mesmer Rd, Keshav Nagar, Pune
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
