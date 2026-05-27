import React from "react";
import Image from "next/image";
import Link from "next/link";

const BLOGS = [
  {
    title: "Understanding IVF A Step-by-Step Guide for Beginners",
    image: "/images/post-1.webp",
    href: "/blog/first-trimester-guide"
  },
  {
    title: "Coping with IVF Tips for Emotional Wellbeing",
    image: "/images/post-2.webp",
    href: "/blog/understanding-pcos"
  },
  {
    title: "Fertility Nutrition Foods That May Boost IVF Success",
    image: "/images/post-3.webp",
    href: "/blog/importance-of-screenings"
  }
];

export const BlogSection = () => {
  return (
    <section className="py-[80px] lg:py-[120px] bg-background">
      <div className="container mx-auto max-w-[1300px] px-4">
        
        {/* Redesigned Header: 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[30px] lg:gap-[60px] items-start mb-[50px]">
          {/* Left Column: Subtitle + Heading */}
          <div className="lg:col-span-7 flex flex-col gap-4 animate-fade-in-up">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e87c7c]"></span>
              <span className="text-[13px] font-bold tracking-[0.15em] text-accent uppercase">
                LATEST BLOG
              </span>
            </div>
            <h2 className="text-[34px] md:text-[46px] font-bold text-primary leading-[1.15em]">
              Expert advice and latest updates on IVF<span className="text-accent">.</span>
            </h2>
          </div>
          
          {/* Right Column: Description + Button */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:pt-[25px] animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-[16px] text-text leading-[1.65em]">
              Stay informed with expert insights, fertility tips, and the latest advancements in IVF to support your parenthood journey.
            </p>
            <div>
              <Link 
                href="/blog" 
                className="inline-flex items-center justify-center bg-accent text-white hover:bg-primary transition-all duration-300 rounded-[10px] py-[15px] px-[28px] font-bold gap-2 group"
              >
                View All Blog
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[60px]">
          {BLOGS.map((post, index) => (
            <div 
              key={index} 
              className="bg-transparent overflow-hidden group animate-fade-in-up flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[1/0.695] w-full overflow-hidden rounded-[20px] mb-6">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>

              {/* Content (directly on the transparent card background) */}
              <div className="flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-[19px] md:text-[21px] font-bold text-primary leading-[1.35em] mb-4">
                  <Link href={post.href} className="hover:text-accent transition-colors duration-300">
                    {post.title}
                  </Link>
                </h3>

                {/* Read More Link with Diagonal Arrow */}
                <div className="mt-auto">
                  <Link 
                    href={post.href} 
                    className="inline-flex items-center gap-[6px] text-[15px] font-bold text-[#242736] group-hover:text-accent transition-colors duration-300"
                  >
                    Read More
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
