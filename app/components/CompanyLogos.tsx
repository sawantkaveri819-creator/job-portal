"use client";

import React from "react";
import { Building2, Sparkles, Shield, Flame } from "lucide-react";

export default function CompanyLogos() {
  const companies = [
    { name: "Stripe", badge: "Fintech Leader", color: "text-indigo-600" },
    { name: "OpenAI", badge: "Frontier AI", color: "text-emerald-600" },
    { name: "Figma", badge: "Design Systems", color: "text-purple-600" },
    { name: "Vercel", badge: "Cloud Platform", color: "text-black dark:text-white" },
    { name: "Linear", badge: "Issue Tracking", color: "text-blue-600" },
    { name: "Spotify", badge: "Audio & Streaming", color: "text-green-600" },
    { name: "Notion", badge: "Workplace OS", color: "text-slate-800" },
    { name: "GitHub", badge: "Developer Tools", color: "text-slate-900" },
  ];

  return (
    <section id="companies-section" className="py-12 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-400">
          Trusted by top engineering teams and innovative tech unicorns
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
          {companies.map((c, i) => (
            <div
              key={i}
              className="group p-3 rounded-2xl border border-slate-100 hover:border-blue-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center cursor-default"
            >
              <span className={`text-base font-extrabold tracking-tight ${c.color} group-hover:scale-105 transition-transform`}>
                {c.name}
              </span>
              <span className="text-[10px] text-slate-400 font-medium mt-0.5">
                {c.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
