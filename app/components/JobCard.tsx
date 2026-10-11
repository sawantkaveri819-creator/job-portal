"use client";

import React from "react";
import {
  MapPin,
  DollarSign,
  Clock,
  Bookmark,
  CheckCircle2,
  ExternalLink,
  Flame,
  Zap,
  Users,
  Briefcase,
} from "lucide-react";
import { Job } from "../data/jobs";

interface JobCardProps {
  job: Job;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onOpenDetails: (job: Job) => void;
  onOpenApply: (job: Job) => void;
  onFilterTag?: (tag: string) => void;
}

export default function JobCard({
  job,
  isSaved,
  onToggleSave,
  onOpenDetails,
  onOpenApply,
  onFilterTag,
}: JobCardProps) {
  const getWorkplaceBadgeColor = (type: Job["workplaceType"]) => {
    switch (type) {
      case "Remote":
        return "bg-emerald-50 text-emerald-700 border-emerald-200/80";
      case "Hybrid":
        return "bg-amber-50 text-amber-700 border-amber-200/80";
      case "On-site":
        return "bg-indigo-50 text-indigo-700 border-indigo-200/80";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs hover:shadow-xl hover:border-blue-400/80 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      {/* Top badges bar */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {job.isFeatured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              <Zap className="w-3 h-3 text-blue-600 fill-blue-600" />
              Featured
            </span>
          )}
          {job.isUrgent && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
              <Flame className="w-3 h-3 text-rose-600" />
              Urgent Hire
            </span>
          )}
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getWorkplaceBadgeColor(
              job.workplaceType
            )}`}
          >
            {job.workplaceType}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
            {job.type}
          </span>
        </div>

        {/* Save / Bookmark Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(job.id);
          }}
          className={`p-2 rounded-xl transition-all cursor-pointer ${
            isSaved
              ? "bg-blue-50 text-blue-600 ring-1 ring-blue-200"
              : "text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          }`}
          aria-label={isSaved ? "Remove from saved jobs" : "Save job"}
          title={isSaved ? "Saved" : "Save job"}
        >
          <Bookmark className={`w-4 h-4 ${isSaved ? "fill-blue-600" : ""}`} />
        </button>
      </div>

      {/* Main Job & Company Info */}
      <div className="flex items-start gap-3.5 sm:gap-4">
        {/* Company Avatar */}
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-bold text-base sm:text-lg shrink-0 shadow-xs ${job.logoBg}`}
        >
          {job.companyInitials}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-xs sm:text-sm font-semibold text-slate-700 truncate">
              {job.company}
            </span>
            <span title="Verified Employer">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            </span>
          </div>

          <h3
            onClick={() => onOpenDetails(job)}
            className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 cursor-pointer mt-0.5"
          >
            {job.title}
          </h3>

          <div className="mt-1 flex items-center gap-1 text-xs text-slate-500 font-medium">
            <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{job.category}</span>
            <span className="mx-1">•</span>
            <span>{job.experience}</span>
          </div>
        </div>
      </div>

      {/* Salary & Location highlight strip */}
      <div className="mt-4 pt-3.5 pb-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-slate-900 font-semibold text-sm sm:text-base">
          <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
            $
          </div>
          <span>{job.salary}</span>
        </div>

        <div className="flex items-center gap-1 text-xs sm:text-sm text-slate-500">
          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="truncate max-w-[170px]">{job.location}</span>
        </div>
      </div>

      {/* Tags / Stack chips */}
      <div className="mt-2 flex flex-wrap gap-1.5">
        {job.tags.slice(0, 4).map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (onFilterTag) onFilterTag(tag);
            }}
            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600 border border-slate-200/80 transition-colors cursor-pointer"
          >
            {tag}
          </button>
        ))}
        {job.tags.length > 4 && (
          <span className="px-2 py-1 text-xs text-slate-400 font-medium">
            +{job.tags.length - 4} more
          </span>
        )}
      </div>

      {/* Footer Actions: Posted time, View Details, Apply Now Button */}
      <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
        <div className="flex flex-col text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {job.postedAt}
          </span>
          <span className="flex items-center gap-1 mt-0.5">
            <Users className="w-3 h-3" />
            {job.applicantCount} applicants
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick View Button */}
          <button
            type="button"
            onClick={() => onOpenDetails(job)}
            className="px-3 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          >
            Details
          </button>

          {/* Apply Now Button */}
          <button
            type="button"
            onClick={() => onOpenApply(job)}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-xs shadow-blue-500/20 active:scale-98 transition-all cursor-pointer"
          >
            <span>Apply Now</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
