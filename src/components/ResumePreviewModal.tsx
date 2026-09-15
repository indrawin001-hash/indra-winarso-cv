import React, { useState } from 'react';
import {
  X,
  Download,
  Printer,
  FileText,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import {
  contactInfo,
  professionalSummary,
  experienceData,
  educationData,
  languageData,
} from '../data/cvData';
import { generateResumePdf } from '../utils/pdfGenerator';

interface ResumePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumePreviewModal: React.FC<ResumePreviewModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    try {
      generateResumePdf();
    } finally {
      setTimeout(() => setDownloading(false), 1000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-xs">
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 sm:px-6 bg-slate-900 text-white flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-400" />
            <div>
              <h3 className="text-sm font-bold leading-none">
                Curriculum Vitae Preview
              </h3>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Indra Winarso — SAP Master Data Management Professional
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-modal-print-btn"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Print document or save via system PDF dialog"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              id="resume-modal-download-btn"
              onClick={handleDownload}
              disabled={downloading}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm transition-colors cursor-pointer disabled:opacity-75"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloading ? 'Generating...' : 'Download PDF'}</span>
            </button>

            <button
              id="resume-modal-close-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content (formatted like an A4 printed page) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-100/80">
          <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-md border border-slate-200 text-slate-900 font-sans">
            {/* Header */}
            <div className="border-b-2 border-blue-900 pb-3">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
                {contactInfo.name}
              </h1>
              <p className="text-sm font-semibold text-blue-800 mt-1">
                {contactInfo.title}
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 mt-2">
                <span>{contactInfo.location}</span>
                <span>•</span>
                <span>{contactInfo.email}</span>
                <span>•</span>
                <span>{contactInfo.phone}</span>
                <span>(WhatsApp: {contactInfo.whatsapp})</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mt-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-900 border-b border-blue-200 pb-1">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-800 mt-2 leading-relaxed">
                {professionalSummary}
              </p>
            </div>

            {/* Core Competencies */}
            <div className="mt-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-900 border-b border-blue-200 pb-1">
                Core Competencies
              </h2>
              <div className="mt-2 space-y-1 text-xs sm:text-[13px] leading-relaxed">
                <p>
                  <strong className="text-blue-900 font-semibold">SAP Modules: </strong>
                  MM, PP-PI, QM, WM, SD (support)
                </p>
                <p>
                  <strong className="text-blue-900 font-semibold">SAP Tools: </strong>
                  SQVI, SQ01, SQ02, SQ03, SAP IDES 4.7, SAP R/3
                </p>
                <p>
                  <strong className="text-blue-900 font-semibold">Master Data: </strong>
                  Governance, Migration, Cleansing, Harmonization, Data Integrity & Quality
                </p>
                <p>
                  <strong className="text-blue-900 font-semibold">Planning & Manufacturing: </strong>
                  MRP, BOM & Routings, Production Planning, Manufacturing Costing
                </p>
                <p>
                  <strong className="text-blue-900 font-semibold">Other Systems: </strong>
                  Microsoft Dynamics 365 Business Central, Microsoft Axapta, TIMMS
                </p>
                <p>
                  <strong className="text-blue-900 font-semibold">Leadership: </strong>
                  Cross-functional & Cross-country Coordination, Team Supervision, ISO 9001/18001 Internal Auditing
                </p>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="mt-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-900 border-b border-blue-200 pb-1">
                Professional Experience
              </h2>

              <div className="mt-3 space-y-4">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="text-xs sm:text-[13px]">
                    <div className="flex flex-wrap items-baseline justify-between gap-1">
                      <span className="font-bold text-slate-900">{exp.company}</span>
                      <span className="text-slate-500 italic text-[11px]">{exp.period}</span>
                    </div>

                    {exp.roles.map((role, rIdx) => (
                      <div key={rIdx} className="text-blue-800 font-semibold text-xs">
                        {role.title} {role.isConcurrent && '(concurrent)'}
                      </div>
                    ))}

                    <ul className="mt-1.5 space-y-1 pl-4 list-disc text-slate-700">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="leading-snug">
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mt-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-900 border-b border-blue-200 pb-1">
                Education
              </h2>
              {educationData.map((edu, idx) => (
                <div key={idx} className="mt-2 text-xs sm:text-[13px] flex items-baseline justify-between">
                  <div>
                    <span className="font-bold text-slate-900">{edu.degree}</span> — {edu.institution}
                  </div>
                  <span className="text-slate-500 italic text-[11px]">{edu.period}</span>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-900 border-b border-blue-200 pb-1">
                Languages
              </h2>
              <div className="mt-2 text-xs sm:text-[13px] text-slate-800">
                {languageData.map((l) => `${l.language} — ${l.proficiency.split('/')[0].trim()}`).join('   |   ')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
