import React from 'react';
import {
  GraduationCap,
  Languages,
  Award,
  CheckCircle2,
  Calendar,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { educationData, languageData, certificationsData } from '../data/cvData';

export const EducationLanguageSection: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education & Academic Background */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold tracking-wide uppercase mb-2">
                <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
                <span>Academic Foundation</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Education
              </h2>
            </div>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  id="education-item-ugm"
                  className="bg-white rounded-xl border border-slate-200/90 shadow-2xs p-6 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold mb-3">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-semibold text-blue-800 mt-0.5">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{edu.location}</span>
                      </div>
                      {edu.field && (
                        <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100">
                          Field of Study: <span className="font-medium text-slate-800">{edu.field}</span>
                        </p>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-lg">
                      <Calendar className="w-3 h-3 text-blue-600" />
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Languages card */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold tracking-wide uppercase mb-3">
                <Languages className="w-3.5 h-3.5 text-blue-700" />
                <span>Language Proficiencies</span>
              </div>

              <div className="bg-white rounded-xl border border-slate-200/90 shadow-2xs p-6 space-y-4">
                {languageData.map((lang, lIdx) => (
                  <div
                    key={lIdx}
                    id={`language-item-${lang.language.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100"
                  >
                    <div>
                      <div className="font-bold text-sm text-slate-900">
                        {lang.language}
                      </div>
                      <div className="text-xs text-slate-500">
                        {lang.level}
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications & Quality Audits */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold tracking-wide uppercase mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>Auditing & Governance</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Auditing & Quality Certifications
              </h2>
            </div>

            <div className="space-y-4">
              {certificationsData.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  id={`cert-item-${cIdx}`}
                  className="bg-white rounded-xl border border-slate-200/90 shadow-2xs p-5 hover:border-emerald-300 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                          {cert.title}
                        </h3>
                        <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                          {cert.role}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed pt-1">
                        {cert.scope}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cross-border note card */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-blue-700 to-blue-800 text-white shadow-sm space-y-2">
              <h3 className="font-bold text-sm flex items-center gap-2 text-white">
                <Award className="w-4 h-4 text-blue-200" />
                <span>Cross-Border Operational Readiness</span>
              </h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                Demonstrated success partnering with multinational stakeholder teams across Germany, Singapore, Australia, New Zealand, and Thailand adhering strictly to global SAP templates, ISO guidelines, and SOX/IT audit trails.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
