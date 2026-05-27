"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

const SERVICES_ITEMS = [
  { label: "Egg & Sperm Freezing", href: "/services/egg-sperm-freezing/" },
  { label: "In Vitro Fertilization (IVF)", href: "/contact-us/" },
  { label: "Fertility Testing", href: "/contact-us/" },
  { label: "Intrauterine Insemination (IUI)", href: "/contact-us/" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const normalize = (path: string) => path.replace(/\/$/, "") || "/";
  const isLinkActive = (href: string) => {
    const normPath = normalize(pathname || "");
    const normHref = normalize(href);
    if (normHref === "/") {
      return normPath === "/";
    }
    return normPath === normHref || normPath.startsWith(normHref + "/");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out py-4",
        isScrolled ? "bg-white shadow-md py-3" : "bg-white"
      )}
    >
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 block shrink-0">
            <Image
              src="/images/logo-women-health.svg"
              alt="Ferlix IVF Clinic"
              width={152}
              height={50}
              className="h-auto w-[120px] md:w-[152px]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href);
              if (link.label === "Services") {
                return (
                  <div key={link.label} className="relative group py-2">
                    <Link
                      href={link.href}
                      className={cn(
                        "text-[16px] font-semibold transition-all duration-300 flex items-center gap-1 pb-[4px] border-b-2",
                        active ? "text-accent border-accent" : "text-primary border-transparent hover:text-accent"
                      )}
                    >
                      <span>{link.label}</span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </Link>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[280px] bg-white border border-divider/10 shadow-xl rounded-[16px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 py-3 flex flex-col gap-1">
                      {SERVICES_ITEMS.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className={cn(
                            "px-5 py-2 text-[14px] font-semibold transition-colors duration-200 hover:bg-secondary hover:text-accent text-primary block",
                            isLinkActive(item.href) ? "text-accent bg-secondary/50 font-bold" : ""
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-[16px] font-semibold transition-all duration-300 pb-[4px] border-b-2",
                    active ? "text-accent border-accent" : "text-primary border-transparent hover:text-accent"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button href="/contact-us" size="sm" icon>
              Book An Appointment
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-50 p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Slide-out */}
      <div
        className={cn(
          "fixed top-0 left-0 bottom-0 w-[300px] bg-white z-50 lg:hidden flex flex-col p-6 transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="mt-16 flex flex-col gap-6">
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(link.href);
            if (link.label === "Services") {
              return (
                <div key={link.label} className="flex flex-col border-b border-divider pb-4">
                  <Link
                    href={link.href}
                    className={cn(
                      "text-[18px] font-semibold transition-all duration-300 pb-2 pl-2 border-l-4",
                      active ? "text-accent font-bold border-accent" : "text-primary border-transparent"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                  <div className="flex flex-col gap-3 pl-4 pt-2">
                    {SERVICES_ITEMS.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={cn(
                          "text-[15px] font-medium transition-all duration-300 pl-2 border-l-2",
                          isLinkActive(item.href) ? "text-accent font-bold border-accent" : "text-primary/80 border-transparent hover:text-accent"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-[18px] font-semibold transition-all duration-300 border-b border-divider pb-4 pl-2 border-l-4",
                  active ? "text-accent font-bold border-accent" : "text-primary border-transparent"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Button href="/contact-us" size="sm" icon className="w-full mt-4">
            Book An Appointment
          </Button>
        </div>
      </div>
    </header>
  );
};
