"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Clock, User, ArrowRight, Search } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function BlogListSection() {
  const searchParams = useSearchParams();
  const searchParam = searchParams.get("search") || "";
  const tagParam = searchParams.get("tag") || null;

  const [searchQuery, setSearchQuery] = useState(searchParam);
  const [selectedTag, setSelectedTag] = useState<string | null>(tagParam);

  // Sync state if URL search parameters change (e.g. navigation / tag clicks)
  useEffect(() => {
    setSearchQuery(searchParam);
  }, [searchParam]);

  useEffect(() => {
    setSelectedTag(tagParam);
  }, [tagParam]);

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    const params = new URLSearchParams(window.location.search);
    if (val) {
      params.set("search", val);
    } else {
      params.delete("search");
    }
    const newUrl = `${window.location.pathname}${params.toString() ? "?" + params.toString() : ""}`;
    window.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, "", newUrl);
  };

  const handleTagChange = (tag: string | null) => {
    setSelectedTag(tag);
    const params = new URLSearchParams(window.location.search);
    if (tag) {
      params.set("tag", tag);
    } else {
      params.delete("tag");
    }
    const newUrl = `${window.location.pathname}${params.toString() ? "?" + params.toString() : ""}`;
    window.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, "", newUrl);
  };

  // Get recent posts (always top 3)
  const recentPosts = useMemo(() => BLOG_POSTS.slice(0, 3), []);

  // Get all unique tags
  const popularTags = useMemo(() => {
    return Array.from(new Set(BLOG_POSTS.flatMap((post) => post.tags))).slice(0, 8);
  }, []);

  // Filter posts based on search query and selected tag
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTag = !selectedTag || post.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <section className="py-[80px] lg:py-[120px] bg-background">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Blog List */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Active Filters Display */}
            {(searchQuery || selectedTag) && (
              <div className="bg-secondary/40 p-4 rounded-[16px] border border-divider/10 flex items-center justify-between flex-wrap gap-4 animate-fade-in-up">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[14px] text-primary font-semibold">Active filters:</span>
                  {searchQuery && (
                    <span className="bg-white px-3 py-1 rounded-full text-[13px] border border-divider/25 flex items-center gap-1.5 font-medium">
                      Search: "{searchQuery}"
                      <button onClick={() => handleSearchChange("")} className="text-accent hover:text-primary font-bold cursor-pointer">×</button>
                    </span>
                  )}
                  {selectedTag && (
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-[13px] flex items-center gap-1.5 font-medium">
                      Tag: #{selectedTag}
                      <button onClick={() => handleTagChange(null)} className="text-white/80 hover:text-white font-bold cursor-pointer">×</button>
                    </span>
                  )}
                </div>
                <button 
                  onClick={() => {
                    handleSearchChange("");
                    handleTagChange(null);
                  }}
                  className="text-[13px] text-accent hover:text-primary font-bold transition-colors cursor-pointer"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {filteredPosts.length === 0 ? (
              <div className="bg-white p-12 rounded-[30px] border border-divider/10 text-center flex flex-col items-center justify-center min-h-[300px]">
                <p className="text-[20px] font-bold text-primary mb-2">No Articles Found</p>
                <p className="text-text max-w-[400px] leading-relaxed text-[15px]">
                  We couldn't find any articles matching your search criteria. Try using different keywords or checking another tag.
                </p>
                <button
                  onClick={() => {
                    handleSearchChange("");
                    handleTagChange(null);
                  }}
                  className="mt-6 bg-accent text-white py-2.5 px-6 rounded-[10px] font-bold hover:bg-primary transition-colors cursor-pointer"
                >
                  Reset Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-fit">
                {filteredPosts.map((post) => (
                  <article 
                    key={post.slug} 
                    className="bg-white rounded-[30px] border border-divider/10 shadow-sm overflow-hidden group hover:shadow-md transition-shadow duration-300 flex flex-col h-full animate-fade-in-up"
                  >
                    {/* Featured Image */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-102 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-[12px] font-bold">
                        {post.category}
                      </div>
                    </div>

                    {/* Blog Content */}
                    <div className="p-6 md:p-8 flex flex-col flex-1">
                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 text-[13px] text-text mb-4 border-b border-divider/25 pb-3">
                        <div className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-accent" />
                          <span>By {post.author}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-accent" />
                          <span>{post.date}</span>
                        </div>
                      </div>

                      {/* Title & Excerpt */}
                      <h2 className="text-[18px] md:text-[21px] font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2 leading-[1.3]">
                        <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                      </h2>
                      <p className="text-text leading-[1.6] text-[14px] mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Read More Link */}
                      <div className="mt-auto">
                        <Link 
                          href={`/blog/${post.slug}/`}
                          className="inline-flex items-center gap-2 text-accent font-bold hover:text-primary transition-colors group/btn text-[14px]"
                        >
                          <span>Read Full Article</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-8">
            {/* Search Box */}
            <div className="bg-white p-6 rounded-[24px] border border-divider/10 shadow-sm">
              <h3 className="text-[18px] font-bold text-primary mb-4">Search Blogs</h3>
              <div className="relative">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Search here..."
                  className="w-full h-[50px] rounded-[10px] bg-secondary pl-5 pr-12 text-[15px] text-text border border-transparent focus:border-accent outline-none transition-colors"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-accent">
                  <Search className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-[24px] border border-divider/10 shadow-sm">
              <h3 className="text-[18px] font-bold text-primary mb-4">Recent Posts</h3>
              <div className="flex flex-col gap-4">
                {recentPosts.map((post) => (
                  <div key={post.slug} className="flex gap-4 items-center border-b border-divider/20 pb-4 last:border-0 last:pb-0">
                    <div className="relative w-16 h-16 rounded-[10px] overflow-hidden shrink-0">
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill 
                        className="object-cover" 
                        unoptimized
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
                  <button 
                    key={tag} 
                    onClick={() => handleTagChange(selectedTag === tag ? null : tag)}
                    className={`text-[13px] font-semibold px-3 py-1 rounded-full cursor-pointer transition-colors duration-200 ${
                      selectedTag === tag 
                        ? "bg-accent text-white" 
                        : "bg-secondary text-text hover:bg-accent hover:text-white"
                    }`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}

