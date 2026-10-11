"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, Sparkles, Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Never Miss Top Tech Opportunities</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Get Tailored Job Alerts Delivered Weekly
        </h2>

        <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
          Join 85,000+ engineers, product managers, and designers receiving handpicked remote & high-salary roles every Tuesday morning.
        </p>

        {isSubscribed ? (
          <div className="mt-8 p-5 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl max-w-md mx-auto text-emerald-300 flex items-center justify-center gap-3 animate-in zoom-in-95 duration-200">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
            <span className="text-sm font-semibold text-emerald-200">
              You're all set! Check your inbox for your first curated digest.
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
          >
            <div className="relative w-full">
              <Mail className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email address..."
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25 active:scale-98 transition-all shrink-0 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Subscribe</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-slate-400">
          No spam, strictly curated roles. Unsubscribe with one click anytime.
        </p>
      </div>
    </section>
  );
}
