import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Button } from "@/components/ui/Button";

const TEAM = [
  {
    name: "Dr. Laura Davis",
    role: "Senior IVF Specialist",
    image: "/images/team-image-1.webp",
    socials: ['facebook-f', 'twitter', 'linkedin-in']
  },
  {
    name: "Dr. Robert Smith",
    role: "Reproductive Endocrinologist",
    image: "/images/team-image-2.webp",
    socials: ['facebook-f', 'twitter', 'linkedin-in']
  },
  {
    name: "Dr. Sarah Lee",
    role: "Embryologist",
    image: "/images/team-image-3.webp",
    socials: ['facebook-f', 'twitter', 'linkedin-in']
  },
  {
    name: "Dr. Emily Chen",
    role: "Fertility Counselor",
    image: "/images/team-image-4.webp",
    socials: ['facebook-f', 'twitter', 'linkedin-in']
  }
];

export const TeamSection = () => {
  return (
    <section className="py-[100px] bg-background">
      <div className="container mx-auto max-w-[1300px] px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-[30px] mb-[60px]">
          <div className="max-w-[700px]">
            <SectionTitle subtitle="OUR EXPERT TEAM">
              <AnimatedHeading text="Meet the specialists behind your success" />
            </SectionTitle>
          </div>
          <div className="shrink-0 mb-[30px] md:mb-[60px] animate-fade-in-up">
            <Button href="/our-team" variant="secondary" icon>
              View All Team
            </Button>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {TEAM.map((member, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-[20px] bg-white animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[1/1.2] w-full overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>

              {/* Info & Socials */}
              <div className="absolute bottom-0 left-0 right-0 p-[20px] bg-gradient-to-t from-primary/90 to-transparent pt-[60px] translate-y-[50px] group-hover:translate-y-0 transition-transform duration-400 ease-in-out">
                
                {/* Social Icons (Hidden until hover) */}
                <div className="flex items-center gap-[10px] mb-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-100">
                  {member.socials.map((social) => (
                    <a 
                      key={social}
                      href="#"
                      className="w-[35px] h-[35px] bg-white text-primary rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors duration-300"
                    >
                      <i className={`fab fa-${social} text-[14px]`}></i>
                    </a>
                  ))}
                </div>

                <div className="bg-white rounded-[15px] p-[15px] text-center shadow-lg transform transition-transform duration-400">
                  <h4 className="text-[20px] font-bold text-primary mb-[5px]">
                    <Link href={`/our-team/${member.name.toLowerCase().replace(/[\s.]+/g, '-')}`} className="hover:text-accent transition-colors">
                      {member.name}
                    </Link>
                  </h4>
                  <p className="text-[14px] text-text m-0">{member.role}</p>
                </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
