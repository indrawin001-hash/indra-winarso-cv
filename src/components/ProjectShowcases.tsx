import React, { useState } from 'react';
import {
  FolderGit2,
  Filter,
  ExternalLink,
  Building2,
  Calendar,
  CheckCircle2,
  Search,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { projectShowcases } from '../data/cvData';
import { ProjectShowcase } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectShowcases: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [activeProject, setActiveProject] = useState<ProjectShowcase | null>(null);

  const categories = [
    'All',
    'Rollouts & Migration',
    'Governance & Quality',
    'Planning & MRP',
    'ERP Modernization',
  ];

  const filteredProjects = projectShowcases.filter((p) => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    if (!matchesCat) return false;

    if (!searchFilter.trim()) return true;
    const query = searchFilter.toLowerCase();
    return (
      p.title.toLowerCase().includes(query) ||
      p.subtitle.toLowerCase().includes(query) ||
      p.clientOrEmployer.toLowerCase().includes(query) ||
      p.technologies.some((t) => t.toLowerCase().includes(query))
    );
  });

  return (
    <section id="showcases" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Interactive Enterprise Case Studies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Project Showcases & Implementations
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600 max-w-2xl">
              Real-world implementations spanning multi-country SAP roll-outs, master data governance, legacy ERP migrations, and MRP automation.
            </p>
          </div>

          {/* Search box */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="projects-search-input"
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Search by country, tool, or module..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
            {searchFilter && (
              <button
                onClick={() => setSearchFilter('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 py-6 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`project-category-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-white rounded-xl border border-slate-200 shadow-2xs hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Card Header Top */}
                <div className="p-5 border-b border-slate-100 bg-gradient-to-br from-slate-50/80 to-blue-50/20">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">
                      {project.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {project.period}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {project.subtitle}
                  </p>

                  <div className="flex items-center gap-1.5 mt-2.5 text-xs text-slate-600 font-medium">
                    <Building2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>{project.clientOrEmployer}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-4">
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights / Outcomes */}
                  <div className="space-y-1.5">
                    {project.keyOutcomes.slice(0, 2).map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{outcome}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics preview */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                      {project.metrics.slice(0, 2).map((m, mIdx) => (
                        <div key={mIdx} className="bg-slate-50 p-2 rounded border border-slate-100 text-center">
                          <div className="text-[10px] text-slate-500 uppercase">{m.label}</div>
                          <div className="text-xs font-bold text-blue-800">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[11px] font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="p-4 bg-slate-50/70 border-t border-slate-100">
                <button
                  id={`open-project-btn-${project.id}`}
                  onClick={() => setActiveProject(project)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-blue-700 bg-white hover:bg-blue-50 border border-blue-200 rounded-lg shadow-2xs hover:border-blue-300 transition-colors cursor-pointer"
                >
                  <span>Interactive Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-200">
            <p className="text-sm text-slate-600">
              No project showcases match your search criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchFilter('');
              }}
              className="mt-2 text-xs font-semibold text-blue-700 hover:underline"
            >
              Show all projects
            </button>
          </div>
        )}
      </div>

      {/* Interactive Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
