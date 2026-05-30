import React from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const PRICING_PLANS = [
  {
    name: "Basic",
    price: "$49",
    period: "/Monthly",
    isPopular: false,
    features: [
      "Initial fertility consultation",
      "Basic diagnostic testing (blood work & ultrasound)",
      "Access to patient support group",
      "Personalized lifestyle",
      "One follow-up visit per month"
    ]
  },
  {
    name: "Standard",
    price: "$59",
    period: "/Monthly",
    isPopular: true,
    features: [
      "Everything in the Basic Plan",
      "Advanced diagnostic testing (e.g., semen analysis)",
      "Medication management & guidance",
      "Priority scheduling for appointments",
      "Nutritional & psychological counseling"
    ]
  },
  {
    name: "Advanced",
    price: "$69",
    period: "/Monthly",
    isPopular: false,
    features: [
      "Everything in the Standard Plan",
      "Full IVF cycle monitoring",
      "24/7 direct access to your fertility specialist",
      "Acupuncture & holistic therapies",
      "Extended embryo storage (up to 2 years)"
    ]
  }
];

export const PricingSection = () => {
  return (
    <section className="py-[100px] bg-secondary">
      <div className="container mx-auto max-w-[1300px] px-4">
        
        <SectionTitle subtitle="OUR PRICING" alignment="center">
          <AnimatedHeading text="Flexible membership plans for every goffer" className="max-w-[700px] mx-auto" />
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[60px]">
          {PRICING_PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={cn(
                "rounded-[20px] p-[40px] flex flex-col transition-transform duration-400 ease-in-out hover:-translate-y-2 animate-fade-in-up",
                plan.isPopular ? "bg-primary text-white shadow-xl" : "bg-white text-text border border-divider"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="border-b border-divider/20 pb-[30px] mb-[30px]">
                <h4 className={cn("text-[24px] font-bold mb-[15px]", plan.isPopular ? "text-white" : "text-primary")}>
                  {plan.name}
                </h4>
                <div className="flex items-end gap-1">
                  <span className={cn("text-[50px] font-bold leading-none", plan.isPopular ? "text-white" : "text-accent")}>
                    {plan.price}
                  </span>
                  <span className="text-[16px] mb-2">{plan.period}</span>
                </div>
              </div>

              <ul className="flex flex-col gap-[15px] flex-1 mb-[40px]">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <span className={cn("mt-1 shrink-0", plan.isPopular ? "text-accent" : "text-accent")}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span className="leading-[1.6em]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                href="/contact-us" 
                variant={plan.isPopular ? "accent" : "secondary"} 
                className="w-full"
              >
                Choose Package
              </Button>
            </div>
          ))}
        </div>

        {/* Benefits list */}
        <div className="flex flex-wrap justify-center gap-[20px] md:gap-[40px] mt-[60px] animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center gap-2">
            <span className="text-accent"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg></span>
            <span className="text-[16px] font-medium text-primary">30-Days Trial</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span>
            <span className="text-[16px] font-medium text-primary">No Hidden Fees</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"></path></svg></span>
            <span className="text-[16px] font-medium text-primary">Cancel Anytime</span>
          </div>
        </div>

      </div>
    </section>
  );
};
