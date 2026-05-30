"use client";

import React, { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/landing/PageHeader";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: "reception" | "consultation" | "treatment" | "patient-care";
  categoryLabel: string;
  title: string;
  spanClass: string;
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const breadcrumbs = [
    { label: "Home", href: "/best-gynecologist-in-keshav-nagar/" },
    { label: "Gallery" },
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/images/gallery-reception.png",
      alt: "Clinic Reception Desk and Waiting Lounge",
      category: "reception",
      categoryLabel: "Reception & Lounge",
      title: "Clinic Reception Lounge",
      spanClass: "md:col-span-2 md:row-span-2",
    },
    {
      id: 2,
      src: "/images/gallery-consultation.png",
      alt: "Doctor Consultation Room and Counseling Area",
      category: "consultation",
      categoryLabel: "Consulting Suite",
      title: "Dr. Poonam's Consultation Room",
      spanClass: "md:col-span-1 md:row-span-1",
    },
    {
      id: 3,
      src: "/images/gallery-treatment.png",
      alt: "Ultrasound scan and advanced clinical diagnosis equipment",
      category: "treatment",
      categoryLabel: "Diagnostic & Treatment",
      title: "Ultrasound & Diagnostics Suite",
      spanClass: "md:col-span-1 md:row-span-2",
    },
    {
      id: 4,
      src: "/images/gallery-recovery.png",
      alt: "Comfortable recovery ward for patients post minor surgeries",
      category: "patient-care",
      categoryLabel: "Patient Care",
      title: "Patient Recovery Room",
      spanClass: "md:col-span-2 md:row-span-1",
    },
    {
      id: 5,
      src: "/images/about-clinic-exterior.webp",
      alt: "Dr Poonam's Women's Clinic Entrance and Exterior board",
      category: "patient-care",
      categoryLabel: "Patient Care",
      title: "Clinic Entrance Lobby",
      spanClass: "md:col-span-1 md:row-span-1",
    },
  ];

  const categories = [
    { value: "all", label: "All Facilities" },
    { value: "reception", label: "Reception & Lounge" },
    { value: "consultation", label: "Consultation Suites" },
    { value: "treatment", label: "Diagnostics & Labs" },
    { value: "patient-care", label: "Patient Wards & Entrance" },
  ];

  const filteredImages = selectedCategory === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        activeImageIndex === 0 ? filteredImages.length - 1 : activeImageIndex - 1
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        activeImageIndex === filteredImages.length - 1 ? 0 : activeImageIndex + 1
      );
    }
  };

  return (
    <>
      <main>
        <PageHeader title="Our Clinic Gallery" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            {/* Header intro */}
            <div className="text-center max-w-[750px] mx-auto mb-[50px] flex flex-col gap-4">
              <span className="text-accent text-[14px] font-bold tracking-widest uppercase">
                Take a Tour
              </span>
              <h2 className="text-[32px] md:text-[42px] font-bold text-primary leading-tight">
                Step Inside Dr Poonam's Women's Clinic
              </h2>
              <p className="text-text text-[16px] leading-relaxed">
                Explore our state-of-the-art facilities in Keshav Nagar, Pune. We maintain a warm, welcoming, and sterile clinical environment equipped with premium diagnostic and patient care systems to make your visit safe and stress-free.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-[50px]">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-6 py-2.5 rounded-full font-bold text-[14px] transition-all duration-300 ${
                    selectedCategory === cat.value
                      ? "bg-accent text-white shadow-md shadow-accent/20"
                      : "bg-[#FAF6F3] text-primary border border-divider/5 hover:bg-secondary hover:text-accent"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Holy Grail CSS Grid Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
              {filteredImages.map((image, idx) => (
                <div
                  key={image.id}
                  onClick={() => openLightbox(idx)}
                  className={`group relative overflow-hidden rounded-[24px] border border-divider/10 shadow-sm cursor-pointer ${image.spanClass} transition-all duration-500 hover:shadow-lg`}
                >
                  {/* Image wrapper */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Dark Vignette Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300 z-10" />

                  {/* Absolute UI overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-end justify-between">
                    <div>
                      <span className="inline-block bg-accent/20 backdrop-blur-sm border border-accent/20 text-accent font-bold text-[11px] px-3 py-0.5 rounded-full uppercase tracking-wider mb-2">
                        {image.categoryLabel}
                      </span>
                      <h3 className="text-white font-bold text-[18px] md:text-[20px] leading-tight">
                        {image.title}
                      </h3>
                    </div>
                    
                    {/* Maximize Icon */}
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Consultation Ribbon */}
            <div className="mt-[60px] bg-secondary border border-divider/10 rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h4 className="font-bold text-[20px] text-primary mb-1">
                  Want to consult Dr. Poonam in person?
                </h4>
                <p className="text-text text-[15px]">
                  Book an appointment online or call us directly to schedule a clinic visit today.
                </p>
              </div>
              <a
                href="/contact-us"
                className="bg-accent text-white font-bold text-[15px] px-6 py-3 rounded-[12px] hover:bg-primary transition-all duration-300 shrink-0 shadow-sm"
              >
                Schedule Clinic Visit
              </a>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {activeImageIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors duration-200 z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors duration-200 z-50"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Current Image Container */}
            <div className="relative max-w-[1000px] w-full max-h-[80vh] aspect-[16/10] md:aspect-[16/9] z-40">
              <Image
                src={filteredImages[activeImageIndex].src}
                alt={filteredImages[activeImageIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
              {/* Description strip at the bottom */}
              <div className="absolute bottom-[-50px] left-0 right-0 text-center text-white/90">
                <span className="text-[12px] font-bold tracking-wider text-accent uppercase block mb-1">
                  {filteredImages[activeImageIndex].categoryLabel}
                </span>
                <p className="text-[16px] md:text-[18px] font-bold">
                  {filteredImages[activeImageIndex].title}
                </p>
              </div>
            </div>

            {/* Right Nav Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors duration-200 z-50"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </main>
    </>
  );
}
