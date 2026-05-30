"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ImageItem {
  src: string;
  alt: string;
  category: string;
}

const DUMMY_IMAGES: ImageItem[] = [
  { src: "/images/about-clinic-exterior.webp", alt: "Fertility Clinic Exterior", category: "Clinic" },
  { src: "/images/service-1.webp", alt: "IVF Consultation", category: "Consultation" },
  { src: "/images/egg-sperm-freezing-overview.webp", alt: "Cryopreservation Lab", category: "Laboratory" },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DUMMY_IMAGES.map((img, index) => (
          <div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300"
            onClick={() => setSelectedImage(img)}
          >
            <div className="aspect-[4/3] w-full relative">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-semibold text-[16px]">{img.alt}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[80vh] w-full h-full">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <button
            className="absolute top-6 right-6 text-white text-3xl font-light cursor-pointer"
            onClick={() => setSelectedImage(null)}
            aria-label="Close Gallery"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};
export default Gallery;
