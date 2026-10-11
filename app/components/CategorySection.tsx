"use client";

import React from "react";
import {
  Code,
  Sparkles,
  Palette,
  Layers,
  Cloud,
  ShieldCheck,
  TrendingUp,
  Target,
  ArrowUpRight,
} from "lucide-react";
import { CATEGORIES, Category } from "../data/jobs";

interface CategorySectionProps {
  selectedCategory: string;
  onSelectCategory: (categoryName: string) => void;
}

export default function CategorySection({
  selectedCategory,
  onSelectCategory,
}: CategorySectionProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "Code":
        return <Code className="w-6 h-6" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6" />;
      case "Palette":
        return <Palette className="w-6 h-6" />;
      case "Layers":
        return <Layers className="w-6 h-6" />;
      case "Cloud":
        return <Cloud className="w-6 h-6" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6" />;
      case "Target":
        return <Target className="w-6 h-6" />;
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  return (
    <section id="categories-section" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold mb-2">
              Browse Specializations
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Popular Job Categories
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              Explore open positions curated by high-demand technical specializations.
            </p>
          </div>

          {selectedCategory !== "All" && (
            <button
              onClick={() => onSelectCategory("All")}
              className="self-start md:self-auto text-sm font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-4 cursor-pointer"
            >
              Reset Category Filter (Viewing: {selectedCategory})
            </button>
          )}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.name;

            return (
              <div
                key={cat.id}
                onClick={() => {
                  onSelectCategory(isSelected ? "All" : cat.name);
                  // smooth scroll down to jobs section
                  const el = document.getElementById("jobs-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className={`group relative p-5 rounded-2xl bg-white border cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                  isSelected
                    ? "border-blue-600 ring-2 ring-blue-500/20 shadow-md bg-blue-50/30"
                    : "border-slate-200 hover:border-blue-300 shadow-xs"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110 ${cat.bgLight} ${cat.textColor}`}
                  >
                    {getIcon(cat.iconName)}
                  </div>
                  <span className="inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                    {cat.growth}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                  <span>{cat.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-blue-600" />
                </h3>

                <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
                  {cat.jobCount.toLocaleString()} open vacancies
                </p>

                {isSelected && (
                  <div className="mt-3 text-xs font-semibold text-blue-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    Currently Selected
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
