"use client";

import React from "react";
import {
  X,
  MapPin,
  Briefcase,
  DollarSign,
  Clock,
  CheckCircle2,
  Bookmark,
  Users,
  ShieldCheck,
  Gift,
  Building2,
  Share2,
} from "lucide-react";
import { Job } from "../data/jobs";

interface JobDetailModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onOpenApply: (job: Job) => void;
}

export default function JobDetailModal({
  job,
  isOpen,
  onClose,
  isSaved,
  onToggleSave,
  onOpenApply,
}: JobDetailModalProps) {
  if (!isOpen || !job) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg shrink-0 ${job.logoBg}`}
            >
              {job.companyInitials}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-blue-300">
                  {job.company}
                </span>
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/15 text-slate-200">
                  {job.workplaceType}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mt-1 text-white">
                {job.title}
              </h2>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {job.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {job.postedAt}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  {job.applicantCount} applicants
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
          <div className="p-3 bg-white rounded-xl border border-slate-200/80">
            <span className="text-xs text-slate-500 font-medium block">
              Salary Range
            </span>
            <span className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 block">
              {job.salary}
            </span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200/80">
            <span className="text-xs text-slate-500 font-medium block">
              Job Type
            </span>
            <span className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 block">
              {job.type}
            </span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200/80">
            <span className="text-xs text-slate-500 font-medium block">
              Experience
            </span>
            <span className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 block">
              {job.experience}
            </span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200/80">
            <span className="text-xs text-slate-500 font-medium block">
              Department
            </span>
            <span className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 block truncate">
              {job.category}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[55vh] overflow-y-auto space-y-6">
          {/* Tags */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Key Technologies & Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold rounded-lg bg-blue-50 text-blue-700 border border-blue-200/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              About the Role
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {job.description}
            </p>
          </div>

          {/* Responsibilities */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-2.5">
              Responsibilities
            </h3>
            <ul className="space-y-2">
              {job.responsibilities.map((resp, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm sm:text-base text-slate-600"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-2.5">
              Qualifications & Requirements
            </h3>
            <ul className="space-y-2">
              {job.requirements.map((req, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm sm:text-base text-slate-600"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-2.5 flex items-center gap-2">
              <Gift className="w-4 h-4 text-indigo-600" />
              <span>Perks & Benefits</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {job.benefits.map((b, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Actions Bar */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4">
          <button
            onClick={() => onToggleSave(job.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
              isSaved
                ? "bg-blue-50 border-blue-300 text-blue-700"
                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? "fill-blue-600" : ""}`} />
            <span>{isSaved ? "Saved Job" : "Save Job"}</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-800 rounded-xl transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenApply(job);
              }}
              className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-md shadow-blue-500/20 active:scale-98 transition-all cursor-pointer"
            >
              Apply for this Position
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
