import { HeroSection } from "@/components/landing/HeroSection";
import { InfoStrip } from "@/components/landing/InfoStrip";
import { AboutSection } from "@/components/landing/AboutSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { WhyChooseSection } from "@/components/landing/WhyChooseSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { BlogSection } from "@/components/landing/BlogSection";
import { FaqMapSection } from "@/components/landing/FaqMapSection";

export const metadata = {
  title: "Best Gynecologist in Keshav Nagar Pune | Dr Poonam's Women's Clinic",
  description: "Dr Poonam's Women's Clinic is Pune's leading gynecologist clinic in Keshav Nagar, Mundhwa. Led by Dr. Poonam (+10 yrs exp) for pregnancy, delivery, & PCOD.",
  alternates: {
    canonical: "/best-gynecologist-in-keshav-nagar/",
  },
};

export default function GynecologistKeshavNagarPage() {
  return (
    <>
      <main>
        <HeroSection />
        <InfoStrip />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <ProcessSection />
        <BlogSection />
        <TestimonialsSection />
        <FaqMapSection />
      </main>
    </>
  );
}
