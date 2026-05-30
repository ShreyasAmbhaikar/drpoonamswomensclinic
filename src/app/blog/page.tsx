import React, { Suspense } from "react";
import PageHeader from "@/components/landing/PageHeader";
import BlogListSection from "@/components/landing/BlogListSection";

export const metadata = {
  title: "Latest Health Articles & Insights | Dr Poonam's Women's Clinic",
  description: "Stay updated with expert health articles on pregnancy care, gynecological screening, normal delivery, and wellness tips from Dr. Poonam.",
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

