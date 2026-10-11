"use client";

import React from "react";
import { Search, MapPin, Briefcase, Sparkles, ArrowRight, Building, CheckCircle2 } from "lucide-react";
import { CATEGORIES } from "../data/jobs";

interface HeroSearchProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  locationTerm: string;
  setLocationTerm: (val: string) => void;
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
  onSearchSubmit: () => void;
  totalResults: number;
}

export default function HeroSearch({
  searchTerm,
  setSearchTerm,
  locationTerm,
  setLocationTerm,
  selectedCategory,
  setSelectedCategory,
  onSearchSubmit,
  totalResults,
}: HeroSearchProps) {
  const popularKeywords = [
    "Frontend",
    "Next.js",
    "AI Engineer",
    "Remote",
    "Product Designer",
    "DevOps",
    "Full Stack",
  ];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSearchSubmit();
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-14 lg:pt-14 lg:pb-20 bg-gradient-to-b from-blue-50/60 via-white to-slate-50 border-b border-slate-200/60">
      {/* Decorative background glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-blue-400/20 via-indigo-300/20 to-purple-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold mb-6 shadow-xs animate-in fade-in zoom-in-95 duration-200">
          <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
          <span>Over 25,000+ Verified Tech Jobs Updated Daily</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.15]">
          Find Your Dream Job at{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
            Top Tech Companies
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Connect directly with innovative engineering teams, high-growth unicorn startups, and Fortune 500 tech leaders with verified transparent salaries.
        </p>

        {/* Modern Multi-Field Search Bar */}
        <div className="mt-10 max-w-5xl mx-auto">
          <div className="bg-white p-2 sm:p-3 rounded-2xl sm:rounded-3xl shadow-xl shadow-blue-900/5 border border-slate-200/90 hover:border-blue-300/80 transition-all duration-200">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-3 items-center">
              {/* Job Title / Keyword Input */}
              <div className="md:col-span-5 relative flex items-center px-3 py-2 sm:py-2.5 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500/30 transition-all">
                <Search className="w-5 h-5 text-slate-400 shrink-0 ml-1" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Job title, keywords, or company..."
                  className="w-full bg-transparent border-none pl-3 pr-2 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="text-xs text-slate-400 hover:text-slate-600 px-1"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Location Input */}
              <div className="md:col-span-3 relative flex items-center px-3 py-2 sm:py-2.5 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500/30 transition-all">
                <MapPin className="w-5 h-5 text-slate-400 shrink-0 ml-1" />
                <input
                  type="text"
                  value={locationTerm}
                  onChange={(e) => setLocationTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="City, Remote, or Country..."
                  className="w-full bg-transparent border-none pl-3 pr-2 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
                />
              </div>

              {/* Category Dropdown */}
              <div className="md:col-span-2 relative flex items-center px-3 py-2 sm:py-2.5 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500/30 transition-all">
                <Briefcase className="w-5 h-5 text-slate-400 shrink-0 ml-1" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-transparent border-none pl-2 pr-1 text-sm text-slate-800 focus:outline-hidden cursor-pointer"
                >
                  <option value="All">All Categories</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Submit CTA */}
              <div className="md:col-span-2">
                <button
                  type="button"
                  onClick={onSearchSubmit}
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-md shadow-blue-600/25 active:scale-98 transition-all cursor-pointer"
                >
                  <span>Search</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Popular Tag suggestions */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-slate-500">
            <span className="font-medium text-slate-600">Popular Searches:</span>
            {popularKeywords.map((kw) => (
              <button
                key={kw}
                onClick={() => {
                  setSearchTerm(kw);
                  onSearchSubmit();
                }}
                className="px-2.5 py-1 rounded-full bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200/80 hover:border-blue-200 transition-colors shadow-2xs cursor-pointer"
              >
                {kw}
              </button>
            ))}
          </div>
        </div>

        {/* Live Platform Stats */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-200/80">
          <div className="p-3 bg-white/70 backdrop-blur-xs rounded-xl border border-slate-200/60 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">25,400+</div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Active Job Openings</div>
          </div>
          <div className="p-3 bg-white/70 backdrop-blur-xs rounded-xl border border-slate-200/60 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">1,280+</div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Verified Tech Companies</div>
          </div>
          <div className="p-3 bg-white/70 backdrop-blur-xs rounded-xl border border-slate-200/60 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">$172,000</div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Avg Tech Compensation</div>
          </div>
          <div className="p-3 bg-white/70 backdrop-blur-xs rounded-xl border border-slate-200/60 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">96.8%</div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Application Response Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
