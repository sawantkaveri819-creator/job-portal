"use client";

import React, { useState } from "react";
import { Briefcase, Bookmark, PlusCircle, Menu, X, Sparkles, Building2 } from "lucide-react";

interface NavbarProps {
  savedCount: number;
  onOpenSaved: () => void;
  onOpenPostJob: () => void;
}

export default function Navbar({
  savedCount,
  onOpenSaved,
  onOpenPostJob,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-all duration-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="group flex items-center gap-2.5 focus:outline-hidden"
              aria-label="JobConnect Home"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
                <Briefcase className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  Job<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Connect</span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 -mt-1">
                  Tech Careers
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              <a
                href="#jobs-section"
                className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-100/70 rounded-lg transition-colors"
              >
                Find Jobs
              </a>
              <a
                href="#categories-section"
                className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-100/70 rounded-lg transition-colors"
              >
                Categories
              </a>
              <a
                href="#companies-section"
                className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-100/70 rounded-lg transition-colors"
              >
                Companies
              </a>
              <a
                href="#stats-section"
                className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-100/70 rounded-lg transition-colors"
              >
                Salaries & Insights
              </a>
            </nav>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Saved Jobs Indicator */}
            <button
              onClick={onOpenSaved}
              className="relative inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 bg-slate-100/80 hover:bg-slate-200/70 rounded-xl transition-all"
              title="View saved jobs"
            >
              <Bookmark className={`w-4 h-4 ${savedCount > 0 ? "fill-blue-600 text-blue-600" : ""}`} />
              <span>Saved</span>
              {savedCount > 0 && (
                <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-semibold text-white bg-blue-600 rounded-full animate-pulse">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Post Job CTA */}
            <button
              onClick={onOpenPostJob}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-sm shadow-blue-500/25 hover:shadow-md hover:shadow-blue-500/30 active:scale-98 transition-all"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Post a Job</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenSaved}
              className="p-2 text-slate-600 hover:text-blue-600 relative rounded-lg"
              aria-label="Saved jobs"
            >
              <Bookmark className={`w-5 h-5 ${savedCount > 0 ? "fill-blue-600 text-blue-600" : ""}`} />
              {savedCount > 0 && (
                <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150 shadow-lg">
          <div className="flex flex-col space-y-2">
            <a
              href="#jobs-section"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-100 rounded-lg"
            >
              Find Jobs
            </a>
            <a
              href="#categories-section"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-100 rounded-lg"
            >
              Job Categories
            </a>
            <a
              href="#companies-section"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-100 rounded-lg"
            >
              Top Tech Companies
            </a>
            <a
              href="#stats-section"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-100 rounded-lg"
            >
              Salary Benchmarks
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenPostJob();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Post a Job Free</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
