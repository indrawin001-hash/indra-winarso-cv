import React from 'react';
import {
  X,
  Building2,
  Calendar,
  Layers,
  CheckCircle2,
  TrendingUp,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { ProjectShowcase } from '../types';

interface ProjectModalProps {
  project: ProjectShowcase | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white p-6 sm:p-7 relative">
          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-700/80 border border-blue-400/30 text-blue-100 text-xs font-semibold uppercase tracking-wider mb-2">
            <span>{project.category}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-blue-200 font-medium">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4 pt-3 border-t border-blue-700/60 text-xs text-blue-200">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-blue-300" />
              {project.clientOrEmployer}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-blue-300" />
              {project.period}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Key Metrics Banner */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 bg-blue-50/70 border border-blue-100 rounded-xl">
              {project.metrics.map((m, i) => (
                <div key={i} className="text-center">
                  <div className="text-xs text-slate-500 font-medium">{m.label}</div>
                  <div className="text-base sm:text-lg font-extrabold text-blue-800">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Project Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wide mb-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span>Business Challenge</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wide mb-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Strategy & Solution</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Outcomes & Deliverables */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Measurable Business Outcomes
            </h4>
            <ul className="space-y-2.5">
              {project.keyOutcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies & Systems Used */}
          <div className="pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Technologies & Methodologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors cursor-pointer"
          >
            Close Showcase
          </button>
        </div>
      </div>
    </div>
  );
};
