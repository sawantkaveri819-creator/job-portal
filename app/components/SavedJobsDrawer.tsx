"use client";

import React from "react";
import { X, Bookmark, Trash2, ExternalLink, MapPin, DollarSign, Briefcase } from "lucide-react";
import { Job } from "../data/jobs";

interface SavedJobsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedJobs: Job[];
  onRemoveSaved: (jobId: string) => void;
  onApplyJob: (job: Job) => void;
  onOpenDetails: (job: Job) => void;
}

export default function SavedJobsDrawer({
  isOpen,
  onClose,
  savedJobs,
  onRemoveSaved,
  onApplyJob,
  onOpenDetails,
}: SavedJobsDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/50 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-250"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-100 text-blue-600">
              <Bookmark className="w-5 h-5 fill-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Saved Positions</h3>
              <p className="text-xs text-slate-500">
                {savedJobs.length} {savedJobs.length === 1 ? "job" : "jobs"} bookmarked
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {savedJobs.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
                <Bookmark className="w-8 h-8 stroke-1" />
              </div>
              <h4 className="text-base font-bold text-slate-800">
                No saved jobs yet
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xs mx-auto">
                Click the bookmark icon on any job card to save opportunities you want to revisit later.
              </p>
              <button
                onClick={onClose}
                className="mt-5 px-4 py-2 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors cursor-pointer"
              >
                Browse Job Listings
              </button>
            </div>
          ) : (
            savedJobs.map((job) => (
              <div
                key={job.id}
                className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 transition-all shadow-2xs space-y-2.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${job.logoBg}`}
                    >
                      {job.companyInitials}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-500">
                        {job.company}
                      </span>
                      <h4
                        onClick={() => {
                          onClose();
                          onOpenDetails(job);
                        }}
                        className="text-sm font-bold text-slate-900 hover:text-blue-600 cursor-pointer line-clamp-1"
                      >
                        {job.title}
                      </h4>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveSaved(job.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                  <span className="font-semibold text-slate-800">{job.salary}</span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <MapPin className="w-3 h-3" />
                    {job.location}
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenDetails(job);
                    }}
                    className="flex-1 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onApplyJob(job);
                    }}
                    className="flex-1 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-2xs transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>Apply</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
