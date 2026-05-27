import React from "react";
import Image from "next/image";
import Link from "next/link";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
];

const OUR_SERVICES = [
  { label: "Egg & Sperm Freezing", href: "/services/egg-sperm-freezing" },
  { label: "Fertility Testing", href: "/services/fertility-testing" },
  { label: "Intrauterine Insemination", href: "/services/intrauterine-insemination" },
  { label: "In Vitro Fertilization", href: "/services/in-vitro-fertilization" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary pt-[100px] text-white">
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px] lg:gap-[30px] mb-[60px]">
          {/* Logo & About */}
          <div className="flex flex-col gap-6">
            <Link href="/">
              <Image 
                src="/images/footer-logo.svg" 
                alt="Ferlix Footer Logo" 
                width={152} 
                height={51} 
              />
            </Link>
            <p className="text-white/80 text-[16px] leading-[1.6em]">
              Crafting intuitive, user-centric designs that bring ideas to life. With a passion for innovation and creativity, I help businesses and individuals.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              {['dribbble', 'facebook-f', 'instagram', 'linkedin-in'].map((network) => (
                <a 
                  key={network}
                  href="#" 
                  className="w-[30px] h-[30px] rounded-full bg-accent text-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-accent"
                  aria-label={`Follow on ${network}`}
                >
                  <i className={`fab fa-${network} text-[14px]`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6 lg:pl-10">
            <h3 className="text-[20px] font-semibold text-white">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors duration-300 flex items-center gap-2"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[20px] font-semibold text-white">Our Services</h3>
            <ul className="flex flex-col gap-4">
              {OUR_SERVICES.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors duration-300 flex items-center gap-2"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[20px] font-semibold text-white">Working Hours</h3>
            <ul className="flex flex-col gap-4 text-white/80">
              <li className="flex justify-between border-b border-dark-divider pb-3">
                <span>Monday To Friday</span>
                <span className="text-white font-medium">8am - 7pm</span>
              </li>
              <li className="flex justify-between border-b border-dark-divider pb-3">
                <span>Saturday</span>
                <span className="text-white font-medium">9am - 4pm</span>
              </li>
              <li className="flex justify-between pb-3">
                <span>Sunday</span>
                <span className="text-white font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-dark-divider py-[30px]">
        <div className="container mx-auto max-w-[1300px] px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[15px] text-white/80">
            <p>Copyright © 2026 Ferlix. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors duration-300">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
