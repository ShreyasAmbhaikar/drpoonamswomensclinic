import { HeroSection } from "@/components/landing/HeroSection";
import { InfoStrip } from "@/components/landing/InfoStrip";
import { AboutSection } from "@/components/landing/AboutSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { WhyChooseSection } from "@/components/landing/WhyChooseSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
// import { BlogSection } from "@/components/landing/BlogSection";
import { FaqMapSection } from "@/components/landing/FaqMapSection";

export const metadata = {
  title: "Best Gynecologist in Keshav Nagar & Mundhwa | Dr. Poonam's Women's Clinic",
  description: "Consult Dr. Poonam (MBBS, DGO, PGDMCH), Senior Consultant Gynecologist with 15+ years experience at Dr. Poonam's Women's Clinic in Keshav Nagar & Mundhwa, Pune. Specializing in normal delivery, pregnancy care, PCOD/PCOS treatment, & IUI/IVF care. Book an appointment today.",
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
        {/* <BlogSection /> */}
        <TestimonialsSection />
        <FaqMapSection />
      </main>
    </>
  );
}
