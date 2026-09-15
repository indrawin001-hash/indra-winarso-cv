import React, { useState } from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Building,
  Layers,
  Sparkles,
} from 'lucide-react';
import { experienceData } from '../data/cvData';

export const ExperienceTimeline: React.FC = () => {
  const [expandedCompanies, setExpandedCompanies] = useState<Record<string, boolean>>({
    'amanah-mulia-niaga': true,
    'brenntag': true,
    'dystar': true,
    'akzo-nobel': true,
  });

  const toggleCompany = (id: string) => {
    setExpandedCompanies((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    experienceData.forEach((exp) => {
      allExpanded[exp.id] = true;
    });
    setExpandedCompanies(allExpanded);
  };

  const collapseAll = () => {
    const allCollapsed: Record<string, boolean> = {};
    experienceData.forEach((exp) => {
      allCollapsed[exp.id] = false;
    });
    setExpandedCompanies(allCollapsed);
  };

  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold tracking-wide uppercase mb-2">
              <Briefcase className="w-3.5 h-3.5 text-blue-700" />
              <span>Career Trajectory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Professional Experience
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600 max-w-2xl">
              20+ years driving master data integrity, SAP implementations, and MRP systems across multinational enterprises.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={expandAll}
              className="text-xs font-semibold text-blue-700 hover:text-blue-900 px-3 py-1.5 rounded bg-white border border-slate-200 shadow-2xs hover:bg-slate-50 cursor-pointer"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="text-xs font-semibold text-slate-600 hover:text-slate-800 px-3 py-1.5 rounded bg-white border border-slate-200 shadow-2xs hover:bg-slate-50 cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Timeline list */}
        <div className="mt-10 relative">
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-blue-200" />

          <div className="space-y-8">
            {experienceData.map((exp, index) => {
              const isExpanded = !!expandedCompanies[exp.id];
              return (
                <div
                  key={exp.id}
                  id={`experience-item-${exp.id}`}
                  className="relative md:pl-20 transition-all"
                >
                  {/* Timeline Dot on larger screens */}
                  <div className="hidden md:flex absolute left-5 top-5 -translate-x-1/2 w-7 h-7 rounded-full bg-white border-4 border-blue-600 items-center justify-center shadow-sm z-10">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                  </div>

                  {/* Main Card */}
                  <div className="bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow overflow-hidden">
                    {/* Card Top Banner */}
                    <div
                      onClick={() => toggleCompany(exp.id)}
                      className="p-5 sm:p-6 bg-white hover:bg-slate-50/70 border-b border-slate-100 cursor-pointer transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                            <Building className="w-4 h-4 text-blue-700 shrink-0" />
                            <span>{exp.company}</span>
                          </h3>
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200/60">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            {exp.location}
                          </span>
                        </div>

                        {/* Roles summary */}
                        <div className="pt-1">
                          {exp.roles.map((role, rIdx) => (
                            <div key={rIdx} className="flex flex-wrap items-center gap-2 text-sm">
                              <span className="font-semibold text-blue-800">{role.title}</span>
                              {role.isConcurrent && (
                                <span className="text-[11px] font-semibold bg-blue-50 text-blue-700 px-2 py-0.2 rounded border border-blue-200">
                                  Concurrent Role
                                </span>
                              )}
                              <span className="text-xs text-slate-400">({role.period})</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0 self-start sm:self-center">
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 rounded-lg border border-blue-100 text-xs font-bold text-blue-800">
                          <Calendar className="w-3.5 h-3.5 text-blue-600" />
                          <span>{exp.period}</span>
                        </div>
                        <button
                          type="button"
                          className="p-1 rounded text-slate-400 hover:text-slate-600"
                          aria-label={isExpanded ? 'Collapse' : 'Expand'}
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Collapsible Content */}
                    {isExpanded && (
                      <div className="p-5 sm:p-6 space-y-6">
                        {/* Summary description */}
                        {exp.summary && (
                          <p className="text-sm text-slate-700 font-medium bg-blue-50/40 p-3 rounded-lg border border-blue-100/60">
                            {exp.summary}
                          </p>
                        )}

                        {/* Bullet Highlights from CV */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                            Key Deliverables & Responsibilities
                          </h4>
                          <ul className="space-y-2.5">
                            {exp.highlights.map((bullet, bIdx) => (
                              <li
                                key={bIdx}
                                className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed"
                              >
                                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Modules & Key Tools Tags */}
                        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="font-semibold text-slate-500 mr-1">Modules:</span>
                            {exp.modulesUsed.map((mod, mIdx) => (
                              <span
                                key={mIdx}
                                className="px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 font-medium border border-blue-100"
                              >
                                {mod}
                              </span>
                            ))}
                          </div>

                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="font-semibold text-slate-500 mr-1">Tools & Platforms:</span>
                            {exp.keyTools.map((tool, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 font-medium border border-slate-200"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
