import React, { useState } from 'react';
import {
  Download,
  FileText,
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  Globe,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Building2,
  Database,
} from 'lucide-react';
import { contactInfo, professionalSummary, statsOverview } from '../data/cvData';
import { generateResumePdf } from '../utils/pdfGenerator';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    try {
      generateResumePdf();
    } finally {
      setTimeout(() => setDownloading(false), 1200);
    }
  };

  return (
    <section
      id="overview"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 border-b border-slate-200/80"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#1d4ed8_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Info Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Regional Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs font-semibold tracking-wide uppercase shadow-sm">
              <Globe className="w-3.5 h-3.5 text-blue-700" />
              <span>Regional Asia Pacific Scope · 20+ Years Enterprise Practice</span>
            </div>

            {/* Title & Name */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Indra Winarso
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-semibold text-blue-700">
                SAP Master Data Management Professional
              </p>
            </div>

            {/* Executive Professional Summary */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
              {professionalSummary}
            </p>

            {/* Quick Contact Badges */}
            <div className="flex flex-wrap items-center gap-y-2.5 gap-x-4 pt-1 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-md border border-slate-200 shadow-2xs">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{contactInfo.location}</span>
              </div>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-md border border-slate-200 shadow-2xs hover:text-blue-700 hover:border-blue-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{contactInfo.email}</span>
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-md border border-slate-200 shadow-2xs hover:text-blue-700 hover:border-blue-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{contactInfo.phone}</span>
              </a>
              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-md border border-emerald-200 shadow-2xs hover:bg-emerald-100 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>WhatsApp: {contactInfo.whatsapp}</span>
              </a>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                id="hero-download-resume-pdf-btn"
                onClick={handleDownload}
                disabled={downloading}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-75"
              >
                <Download className="w-4 h-4" />
                <span>{downloading ? 'Preparing Official PDF...' : 'Download Resume (PDF)'}</span>
              </button>

              <button
                id="hero-preview-resume-modal-btn"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-sm hover:border-slate-400 transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-700" />
                <span>Preview Document</span>
              </button>

              <a
                id="hero-jump-showcases-btn"
                href="#showcases"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-blue-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <span>Explore Project Showcases</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Profile Snapshot Card (Right Column) */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 flex items-center justify-center font-bold text-xl">
                    <Database className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      Master Data Governance
                    </h3>
                    <p className="text-xs text-slate-500">Cross-Country Standard</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Active
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Regional SAP Rollouts:</strong> Singapore, Australia, New Zealand & Thailand.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Core Functional Focus:</strong> SAP MM, PP-PI, QM, WM and SD integration.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Manufacturing & MRP:</strong> BOMs, Routings, Recipes, and Plant Costing.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Legacy Migrations:</strong> TIMMS to SAP R/3 and Microsoft Dynamics 365.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Standards:</strong> ISO 9001 / OHSAS 18001 Certified Auditor.
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <a
                  id="hero-contact-cta-card"
                  href="#contact"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-blue-700 bg-blue-50/80 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Submit Inquiry or Consultation Request</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {statsOverview.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-lg border border-slate-200/80 p-4 sm:p-5 shadow-2xs hover:border-blue-200 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-800 tracking-tight">
                {item.value}
              </div>
              <div className="font-semibold text-xs sm:text-sm text-slate-900 mt-1">
                {item.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
