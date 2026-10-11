"use client";

import React from "react";
import { Briefcase, ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-200">
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-xs">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Job<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Connect</span>
              </span>
            </div>

            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              JobConnect is the next-generation career platform connecting top tier developers, designers, and tech leaders with transparently compensated roles.
            </p>

            <div className="text-xs text-slate-400">
              © 2026 JobConnect Inc. All rights reserved.
            </div>
          </div>

          {/* Column 1 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              For Candidates
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#jobs-section" className="hover:text-blue-600 transition-colors">
                  Explore Tech Jobs
                </a>
              </li>
              <li>
                <a href="#stats-section" className="hover:text-blue-600 transition-colors">
                  Salary Calculator
                </a>
              </li>
              <li>
                <a href="#categories-section" className="hover:text-blue-600 transition-colors">
                  Remote Openings
                </a>
              </li>
              <li>
                <a href="#stats-section" className="hover:text-blue-600 transition-colors">
                  Career Advice
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              For Employers
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Post a Job Listing
                </a>
              </li>
              <li>
                <a href="#companies-section" className="hover:text-blue-600 transition-colors">
                  Employer Branding
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Talent Sourcing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  ATS Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  About JobConnect
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for global developers & tech builders</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 font-semibold cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
