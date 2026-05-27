import React, { Suspense } from "react";
import PageHeader from "@/components/layout/PageHeader";
import BlogListSection from "@/components/sections/BlogListSection";

export const metadata = {
  title: "Latest Blogs & Health Tips – Ferlix",
  description: "Stay updated with expert articles on pregnancy care, gynecological screening, hormonal balance, IVF, and fertility treatments from Dr. Priya Sharma.",
  alternates: {
    canonical: "/blog/",
  },
};

export default function BlogListPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog Insights" },
  ];

  return (
    <>
      <main>
        <PageHeader title="Latest Blogs & Health Tips" breadcrumbs={breadcrumbs} />
        <Suspense fallback={
          <div className="py-[80px] text-center bg-background">
            <p className="text-[18px] font-semibold text-text">Loading articles...</p>
          </div>
        }>
          <BlogListSection />
        </Suspense>
      </main>
    </>
  );
}

