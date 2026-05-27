import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWidgets } from "@/components/layout/FloatingWidgets";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ferlix – IVF & Fertility Clinic | Trusted Fertility Treatments",
  description: "Ferlix is a leading IVF and fertility clinic providing compassionate care, personalized treatment plans, and cutting-edge reproductive technology.",
  keywords: ["IVF", "Fertility Clinic", "In Vitro Fertilization", "Surrogacy", "Egg Freezing", "Sperm Freezing"],
  authors: [{ name: "Ferlix Clinic" }],
  creator: "Ferlix",
  publisher: "Ferlix",
  robots: "index, follow, max-image-preview:large",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com/",
    siteName: "Ferlix",
    title: "Ferlix – IVF & Fertility Clinic",
    description: "Hope, care, science your IVF journey starts here.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferlix – IVF & Fertility Clinic",
    description: "Hope, care, science your IVF journey starts here.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Ferlix – IVF & Fertility Clinic",
    "url": "https://yourdomain.com",
    "logo": "https://yourdomain.com/images/logo-women-health.svg",
    "description": "Ferlix is a leading IVF and fertility clinic providing compassionate care and personalized treatment plans.",
    "telephone": "+01-987-828-745",
    "openingHours": "Mo,Tu,We,Th,Fr 08:00-19:00 Sa 09:00-16:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "4000"
    },
    "medicalSpecialty": "Fertility Clinic"
  };

  return (
    <html lang="en" className={`${onest.variable} scroll-smooth antialiased`}>
      <head>
        <meta name="theme-color" content="#242736" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-clip bg-background">
        <Header />
        {children}
        <Footer />
        <FloatingWidgets />
      </body>
    </html>
  );
}

