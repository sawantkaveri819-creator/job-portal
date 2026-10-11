"use client";

import React from "react";
import { Star, Quote, CheckCircle } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Marcus Vance",
      role: "Senior Full Stack Engineer at Stripe",
      salary: "$195,000 / yr",
      avatarInitials: "MV",
      avatarBg: "bg-indigo-600 text-white",
      text: "JobConnect changed my entire search process. Within 4 days of applying through their verified direct link, I had two technical screens with engineering managers.",
      hiredTime: "Hired 3 weeks ago",
    },
    {
      name: "Sophia Zhang",
      role: "Lead Product Designer at Figma",
      salary: "$210,000 / yr",
      avatarInitials: "SZ",
      avatarBg: "bg-purple-600 text-white",
      text: "The salary transparency on JobConnect is refreshing. No guessing games or wasted rounds with recruiters who won't disclose real equity and compensation brackets.",
      hiredTime: "Hired 1 month ago",
    },
    {
      name: "Daniel Rivera",
      role: "Machine Learning Researcher at OpenAI",
      salary: "$290,000 / yr",
      avatarInitials: "DR",
      avatarBg: "bg-emerald-600 text-white",
      text: "The direct application and clean role breakdown saved me dozens of hours. Found my ideal team working on foundational models right here.",
      hiredTime: "Hired 2 weeks ago",
    },
  ];

  return (
    <section id="stats-section" className="py-16 sm:py-20 bg-slate-50/80 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-2">
            <CheckCircle className="w-3.5 h-3.5" />
            Candidate Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Hired Through JobConnect
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            See how engineers and designers discovered life-changing roles with verified compensation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
                  "{r.text}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${r.avatarBg}`}
                  >
                    {r.avatarInitials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{r.name}</h4>
                    <p className="text-xs text-slate-500">{r.role}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-600 block">
                    {r.salary}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {r.hiredTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
