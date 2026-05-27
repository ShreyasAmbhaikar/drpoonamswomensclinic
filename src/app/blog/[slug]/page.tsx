import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import { BLOG_POSTS } from "@/lib/blog-data";
import { Clock, User, ArrowRight, Search, Heart } from "lucide-react";
import ShareButton from "@/components/ui/ShareButton";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  const baseUrl = "https://yourdomain.com";

  return {
    title: `${post.title} – Ferlix`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}/`,
    },
    openGraph: {
      title: `${post.title} – Ferlix`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `${baseUrl}/blog/${post.slug}/`,
      images: [
        {
          url: `${baseUrl}${post.image}`,
          width: 1200,
          height: 750,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} – Ferlix`,
      description: post.excerpt,
      images: [`${baseUrl}${post.image}`],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title },
  ];

  const recentPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  const popularTags = Array.from(new Set(BLOG_POSTS.flatMap(post => post.tags))).slice(0, 8);

  return (
    <>
      <main>
        <PageHeader title={post.category} breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Left Column: Article Body */}
              <div className="lg:col-span-8">
                <article className="bg-white rounded-[30px] border border-divider/10 shadow-sm overflow-hidden p-6 md:p-10">
                  {/* Featured Image */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[20px] mb-8">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-6 text-[14px] text-text mb-6 border-b border-divider/20 pb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-accent" />
                      <span>By {post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-accent" />
                      <span>{post.date} &bull; {post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h1 className="text-[28px] md:text-[38px] font-bold text-primary mb-6 leading-[1.2]">
                    {post.title}
                  </h1>

                  {/* Render content blocks */}
                  <div className="prose max-w-none text-text">
                    {post.content.map((block, idx) => {
                      if (block.type === "paragraph") {
                        return (
                          <p key={idx} className="text-[16px] leading-[1.7] mb-6">
                            {block.text}
                          </p>
                        );
                      }
                      if (block.type === "heading2") {
                        return (
                          <h2 key={idx} className="text-[24px] md:text-[28px] font-bold text-primary mt-8 mb-4">
                            {block.text}
                          </h2>
                        );
                      }
                      if (block.type === "heading3") {
                        return (
                          <h3 key={idx} className="text-[18px] md:text-[22px] font-bold text-primary mt-6 mb-3">
                            {block.text}
                          </h3>
                        );
                      }
                      if (block.type === "list") {
                        return (
                          <ul key={idx} className="list-none space-y-3 mb-6 pl-0">
                            {block.items?.map((item, i) => (
                              <li key={i} className="flex gap-3 items-start text-[15px] leading-[1.6]">
                                <span className="w-2.5 h-2.5 rounded-full bg-accent mt-2 shrink-0"></span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      return null;
                    })}
                  </div>

                  {/* Tags and Share */}
                  <div className="border-t border-divider/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="text-[14px] font-bold text-primary mr-1">Tags:</span>
                      {post.tags.map((tag) => (
                        <Link 
                          key={tag} 
                          href={`/blog?tag=${encodeURIComponent(tag)}`}
                          className="bg-secondary hover:bg-accent hover:text-white text-text text-[13px] font-semibold px-3 py-1 rounded-full transition-colors duration-200"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                    <ShareButton title={post.title} />
                  </div>

                </article>
              </div>

              {/* Right Column: Sidebar */}
              <aside className="lg:col-span-4 flex flex-col gap-8">
                {/* Search Box */}
                <div className="bg-white p-6 rounded-[24px] border border-divider/10 shadow-sm">
                  <h3 className="text-[18px] font-bold text-primary mb-4">Search Blogs</h3>
                  <form action="/blog" method="GET" className="relative">
                    <input 
                      type="text" 
                      name="search"
                      placeholder="Search here..."
                      className="w-full h-[50px] rounded-[10px] bg-secondary pl-5 pr-12 text-[15px] text-text border border-transparent focus:border-accent outline-none transition-colors"
                    />
                    <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-accent hover:text-primary transition-colors">
                      <Search className="w-5 h-5" />
                    </button>
                  </form>
                </div>

                {/* Recent Posts */}
                <div className="bg-white p-6 rounded-[24px] border border-divider/10 shadow-sm">
                  <h3 className="text-[18px] font-bold text-primary mb-4">Other Blogs</h3>
                  <div className="flex flex-col gap-4">
                    {recentPosts.map((post) => (
                      <div key={post.slug} className="flex gap-4 items-center border-b border-divider/20 pb-4 last:border-0 last:pb-0">
                        <div className="relative w-16 h-16 rounded-[10px] overflow-hidden shrink-0">
                          <Image 
                            src={post.image} 
                            alt={post.title} 
                            fill 
                            className="object-cover" 
                          />
                        </div>
                        <div>
                          <h4 className="text-[14px] font-bold text-primary line-clamp-2 hover:text-accent transition-colors">
                            <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                          </h4>
                          <span className="text-[12px] text-text">{post.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="bg-white p-6 rounded-[24px] border border-divider/10 shadow-sm">
                  <h3 className="text-[18px] font-bold text-primary mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <Link 
                        key={tag} 
                        href={`/blog?tag=${encodeURIComponent(tag)}`}
                        className="bg-secondary hover:bg-accent hover:text-white text-text text-[13px] font-semibold px-3 py-1 rounded-full cursor-pointer transition-colors duration-200"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
