import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { FloatingWidgets } from "@/components/landing/FloatingWidgets";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  display: "fallback",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dr. Poonam's Women's Clinic | Best Gynecologist in Keshav Nagar & Mundhwa",
  description: "Dr. Poonam's Women's Clinic is Pune's leading gynecologist clinic in Keshav Nagar & Mundhwa. Expert pregnancy care, delivery, PCOD, and infertility treatments.",
  keywords: [
    "gynecologist in keshav nagar",
    "gynecologist keshav nagar",
    "gynecologist in mundhwa",
    "best gynecologist in pune",
    "obstetrician gynecologist in pune",
    "pregnancy care clinic keshav nagar",
    "PCOD treatment keshav nagar",
    "IUI specialist pune",
    "normal delivery doctor keshav nagar"
  ],
  authors: [{ name: "Dr. Poonam's Women's Clinic" }],
  creator: "Dr. Poonam",
  publisher: "Dr. Poonam",
  robots: "index, follow, max-image-preview:large",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com/",
    siteName: "Dr. Poonam's Women's Clinic",
    title: "Dr. Poonam's Women's Clinic | Best Gynecologist in Keshav Nagar & Mundhwa",
    description: "Dr. Poonam's Women's Clinic is a top gynecologist clinic in Keshav Nagar & Mundhwa, Pune. Led by senior consultant Obstetrician-Gynecologist Dr. Poonam.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Poonam's Women's Clinic | Best Gynecologist in Keshav Nagar & Mundhwa",
    description: "Dr. Poonam's Women's Clinic is a top gynecologist clinic in Keshav Nagar & Mundhwa, Pune. Led by senior consultant Obstetrician-Gynecologist Dr. Poonam.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Poonam's Women's Clinic",
    "url": "https://yourdomain.com",
    "logo": "https://yourdomain.com/images/logo-women-health.svg",
    "image": "https://yourdomain.com/images/logo-women-health.svg",
    "description": "Dr. Poonam's Women's Clinic is a leading gynecologist clinic in Keshav Nagar, Pune. Led by Dr. Poonam (MBBS, DGO, PGDMCH), senior consultant in pregnancy care, normal delivery, infertility, PCOD, and laparoscopic procedures.",
    "telephone": "097119 29529",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No 33, Shopping Complex, Mantra Mesmer Rd, Keshav Nagar, Mundhwa",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411036",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.520412",
      "longitude": "73.9392261"
    },
    "openingHours": "Mo,Tu,We,Th,Fr,Sa 10:00-14:00, 18:00-21:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "42"
    },
    "medicalSpecialty": "ObstetricianGynecologist"
  };

  return (
    <html lang="en" className={`${onest.variable} scroll-smooth antialiased overflow-x-hidden`}>
      <head>
        <meta name="theme-color" content="#242736" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-background">
        <Header />
        {children}
        <Footer />
        <FloatingWidgets />
      </body>
    </html>
  );
}

