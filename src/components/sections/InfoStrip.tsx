import React from "react";
import Link from "next/link";

export const InfoStrip = () => {
  return (
    <div className="relative -mt-[50px] z-30 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="bg-white rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-[30px] md:p-[40px] flex flex-col md:flex-row items-center justify-between gap-[30px]">
          
          <div className="flex flex-col md:flex-row items-center gap-[40px] w-full md:w-auto">
            
            {/* Phone Info */}
            <div className="flex items-center gap-[20px] w-full md:w-auto">
              <div className="w-[60px] h-[60px] rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <p className="text-[14px] font-semibold text-accent uppercase tracking-[0.1em] mb-1">
                  Need Dental Services ?
                </p>
                <a href="tel:(+91)987828745" className="text-[20px] md:text-[24px] font-bold text-primary hover:text-accent transition-colors duration-300">
                  Call on : (+91) 987 828 745
                </a>
              </div>
            </div>
 
            {/* Divider (hidden on mobile) */}
            <div className="hidden lg:block w-[1px] h-[60px] bg-divider"></div>
 
            {/* Hours Info */}
            <div className="flex items-center gap-[20px] w-full md:w-auto">
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
                <h4 className="text-[20px] font-bold text-primary whitespace-nowrap">
                  Mon to Sat 9:00AM to 9:00PM
                </h4>
              </div>
            </div>
            
          </div>
 
          {/* Action Button styled with a diagonal arrow */}
          <div className="w-full md:w-auto shrink-0">
            <Link 
              href="/contact-us" 
              className="inline-flex items-center justify-center gap-2 bg-accent text-white font-bold text-[15px] px-[28px] py-[15px] rounded-[10px] hover:bg-primary transition-all duration-300 group w-full md:w-auto"
            >
              Book a Consultation
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </Link>
          </div>
 
        </div>
      </div>
    </div>
  );
};
