"use client";

import React, { useState, useMemo, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSearch from "./components/HeroSearch";
import CategorySection from "./components/CategorySection";
import JobCard from "./components/JobCard";
import JobDetailModal from "./components/JobDetailModal";
import ApplicationModal from "./components/ApplicationModal";
import SavedJobsDrawer from "./components/SavedJobsDrawer";
import PostJobModal from "./components/PostJobModal";
import CompanyLogos from "./components/CompanyLogos";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { FEATURED_JOBS, Job } from "./data/jobs";
import {
  SlidersHorizontal,
  RotateCcw,
  Sparkles,
  Search,
  Briefcase,
  CheckCircle,
  TrendingUp,
  MapPin,
  X,
} from "lucide-react";

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>(FEATURED_JOBS);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedWorkplace, setSelectedWorkplace] = useState<string>("All");
  const [selectedExperience, setSelectedExperience] = useState<string>("All");
  const [selectedJobType, setSelectedJobType] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("featured");

  // Saved Jobs state
  const [savedJobIds, setSavedJobIds] = useState<string[]>([]);

  // Applied Jobs tracking
  const [appliedJobIds, setAppliedJobIds] = useState<string[]>([]);

  // Modals state
  const [selectedJobForDetails, setSelectedJobForDetails] = useState<Job | null>(null);
  const [selectedJobForApply, setSelectedJobForApply] = useState<Job | null>(null);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [isPostJobModalOpen, setIsPostJobModalOpen] = useState(false);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Toggle Save job
  const handleToggleSave = (jobId: string) => {
    setSavedJobIds((prev) => {
      const isAlreadySaved = prev.includes(jobId);
      if (isAlreadySaved) {
        showToast("Job removed from saved list");
        return prev.filter((id) => id !== jobId);
      } else {
        showToast("Job saved to your bookmarks!");
        return [...prev, jobId];
      }
    });
  };

  // Handle application success
  const handleApplicationSuccess = (jobId: string) => {
    setAppliedJobIds((prev) => (prev.includes(jobId) ? prev : [...prev, jobId]));
    showToast("Application submitted successfully!");
  };

  // Handle newly created job
  const handleJobCreated = (newJob: Job) => {
    setJobs((prev) => [newJob, ...prev]);
    showToast(`Job listing for "${newJob.title}" posted successfully!`);
    const el = document.getElementById("jobs-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Filter & Sort logic
  const filteredJobs = useMemo(() => {
    return jobs
      .filter((job) => {
        // Search Term filter
        if (searchTerm.trim()) {
          const q = searchTerm.toLowerCase();
          const matchTitle = job.title.toLowerCase().includes(q);
          const matchCompany = job.company.toLowerCase().includes(q);
          const matchCategory = job.category.toLowerCase().includes(q);
          const matchTags = job.tags.some((t) => t.toLowerCase().includes(q));
          if (!matchTitle && !matchCompany && !matchCategory && !matchTags) {
            return false;
          }
        }

        // Location filter
        if (locationTerm.trim()) {
          const loc = locationTerm.toLowerCase();
          const matchLocation = job.location.toLowerCase().includes(loc);
          const matchWorkplace = job.workplaceType.toLowerCase().includes(loc);
          if (!matchLocation && !matchWorkplace) {
            return false;
          }
        }

        // Category filter
        if (selectedCategory !== "All" && job.category !== selectedCategory) {
          return false;
        }

        // Workplace filter
        if (selectedWorkplace !== "All" && job.workplaceType !== selectedWorkplace) {
          return false;
        }

        // Experience filter
        if (selectedExperience !== "All" && job.experience !== selectedExperience) {
          return false;
        }

        // Job Type filter
        if (selectedJobType !== "All" && job.type !== selectedJobType) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "salary-high") {
          return b.salaryMax - a.salaryMax;
        }
        if (sortBy === "salary-low") {
          return a.salaryMin - b.salaryMin;
        }
        if (sortBy === "newest") {
          return b.id.localeCompare(a.id);
        }
        // Default: featured first
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      });
  }, [
    jobs,
    searchTerm,
    locationTerm,
    selectedCategory,
    selectedWorkplace,
    selectedExperience,
    selectedJobType,
    sortBy,
  ]);

  const hasActiveFilters =
    searchTerm !== "" ||
    locationTerm !== "" ||
    selectedCategory !== "All" ||
    selectedWorkplace !== "All" ||
    selectedExperience !== "All" ||
    selectedJobType !== "All";

  const clearAllFilters = () => {
    setSearchTerm("");
    setLocationTerm("");
    setSelectedCategory("All");
    setSelectedWorkplace("All");
    setSelectedExperience("All");
    setSelectedJobType("All");
    setSortBy("featured");
    showToast("Filters reset to default");
  };

  const savedJobsList = useMemo(() => {
    return jobs.filter((job) => savedJobIds.includes(job.id));
  }, [jobs, savedJobIds]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-900 text-white shadow-2xl border border-slate-700 animate-in slide-in-from-bottom-4 duration-200">
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar
        savedCount={savedJobIds.length}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
        onOpenPostJob={() => setIsPostJobModalOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section with Interactive Search */}
        <HeroSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          locationTerm={locationTerm}
          setLocationTerm={setLocationTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onSearchSubmit={() => {
            const el = document.getElementById("jobs-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          totalResults={filteredJobs.length}
        />

        {/* Company Logos Banner */}
        <CompanyLogos />

        {/* Categories Section */}
        <CategorySection
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* Main Job Feed Section */}
        <section id="jobs-section" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified Career Opportunities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Latest Job Openings
              </h2>
              <p className="mt-1 text-slate-600 text-sm sm:text-base">
                Showing{" "}
                <span className="font-bold text-blue-600">
                  {filteredJobs.length}
                </span>{" "}
                {filteredJobs.length === 1 ? "position" : "positions"} available
              </p>
            </div>

            {/* Quick Sort Control */}
            <div className="flex items-center gap-3">
              <label className="text-xs sm:text-sm font-semibold text-slate-600 shrink-0">
                Sort by:
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-800 shadow-2xs hover:border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
              >
                <option value="featured">Featured & Relevant</option>
                <option value="salary-high">Highest Salary</option>
                <option value="salary-low">Lowest Salary</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>

          {/* Quick Filters Pill Bar */}
          <div className="mb-8 p-3.5 sm:p-4 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter:
              </span>

              {/* Workplace buttons */}
              {["All", "Remote", "Hybrid", "On-site"].map((wp) => (
                <button
                  key={wp}
                  onClick={() => setSelectedWorkplace(wp)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedWorkplace === wp
                      ? "bg-slate-900 text-white shadow-xs"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {wp === "All" ? "All Workplaces" : wp}
                </button>
              ))}

              <div className="hidden sm:block h-4 w-px bg-slate-200 mx-1"></div>

              {/* Experience buttons */}
              {["All", "Entry-level", "Mid-level", "Senior", "Lead"].map((exp) => (
                <button
                  key={exp}
                  onClick={() => setSelectedExperience(exp)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedExperience === exp
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {exp === "All" ? "All Levels" : exp}
                </button>
              ))}
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 hover:bg-rose-50 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>

          {/* Jobs Grid */}
          {filteredJobs.length === 0 ? (
            <div className="text-center py-20 px-4 bg-white rounded-3xl border border-dashed border-slate-300 max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                No job openings match your criteria
              </h3>
              <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">
                Try loosening your filters, searching for alternate keywords, or clear all filters to see all available tech roles.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <button
                  onClick={clearAllFilters}
                  className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                >
                  Clear All Filters
                </button>
                <button
                  onClick={() => setIsPostJobModalOpen(true)}
                  className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-slate-100 text-slate-800 hover:bg-slate-200 transition-all cursor-pointer"
                >
                  Post a Job Listing
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  isSaved={savedJobIds.includes(job.id)}
                  onToggleSave={handleToggleSave}
                  onOpenDetails={(selected) => setSelectedJobForDetails(selected)}
                  onOpenApply={(selected) => setSelectedJobForApply(selected)}
                  onFilterTag={(tag) => {
                    setSearchTerm(tag);
                    const el = document.getElementById("jobs-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              ))}
            </div>
          )}
        </section>

        {/* Testimonials & Hired Candidates */}
        <Testimonials />

        {/* Newsletter Signup Banner */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <JobDetailModal
        job={selectedJobForDetails}
        isOpen={!!selectedJobForDetails}
        onClose={() => setSelectedJobForDetails(null)}
        isSaved={selectedJobForDetails ? savedJobIds.includes(selectedJobForDetails.id) : false}
        onToggleSave={handleToggleSave}
        onOpenApply={(job) => {
          setSelectedJobForDetails(null);
          setSelectedJobForApply(job);
        }}
      />

      <ApplicationModal
        job={selectedJobForApply}
        isOpen={!!selectedJobForApply}
        onClose={() => setSelectedJobForApply(null)}
        onApplicationSuccess={handleApplicationSuccess}
      />

      <SavedJobsDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedJobs={savedJobsList}
        onRemoveSaved={handleToggleSave}
        onApplyJob={(job) => {
          setIsSavedDrawerOpen(false);
          setSelectedJobForApply(job);
        }}
        onOpenDetails={(job) => {
          setIsSavedDrawerOpen(false);
          setSelectedJobForDetails(job);
        }}
      />

      <PostJobModal
        isOpen={isPostJobModalOpen}
        onClose={() => setIsPostJobModalOpen(false)}
        onJobCreated={handleJobCreated}
      />
    </div>
  );
}
