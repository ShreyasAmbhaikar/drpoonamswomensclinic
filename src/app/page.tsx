import { HeroSection } from "@/components/sections/HeroSection";
import { InfoStrip } from "@/components/sections/InfoStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FaqMapSection } from "@/components/sections/FaqMapSection";

export default function Home() {
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


