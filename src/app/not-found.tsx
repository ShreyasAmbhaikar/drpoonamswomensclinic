import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Page Not Found | Dr Poonam's Women's Clinic",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main>
      <section className="pt-[140px] pb-[80px] lg:pt-[180px] lg:pb-[120px] bg-background">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="flex flex-col items-center justify-center text-center max-w-[600px] mx-auto">
            {/* 404 Image */}
            <div className="mb-10 w-full max-w-[400px] flex justify-center">
              <Image
                src="/images/404-error-img.webp"
                alt="404 Error"
                width={400}
                height={215}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Content */}
            <h2 className="text-[32px] md:text-[40px] font-bold text-primary mb-4 capitalize">
              Oops! Page Not Found
            </h2>
            <p className="text-text text-[16px] md:text-[18px] mb-10 leading-[1.6]">
              The page you are looking for does not exist.
            </p>

            <Button href="/" icon>
              Back To Home
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
