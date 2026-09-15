import React from 'react';
import {
  FileText,
  Download,
  Mail,
  Phone,
  MessageSquare,
  ArrowUp,
  Globe,
  Database,
} from 'lucide-react';
import { contactInfo } from '../data/cvData';
import { generateResumePdf } from '../utils/pdfGenerator';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-base">
                IW
              </div>
              <div>
                <span className="font-bold text-white text-base block leading-none">
                  Indra Winarso
                </span>
                <span className="text-[11px] text-blue-400 font-medium">
                  SAP Master Data Management Professional
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Over two decades of experience orchestrating SAP Master Data Governance, MM/PP/QM module architecture, multi-country regional roll-outs, and enterprise data migrations across Asia Pacific.
            </p>

            <div className="flex items-center gap-2 pt-1 text-slate-400">
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>Bekasi, Indonesia · Regional APAC Practice</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#overview" className="hover:text-blue-400 transition-colors">
                  Overview & Summary
                </a>
              </li>
              <li>
                <a href="#competencies" className="hover:text-blue-400 transition-colors">
                  Core Competencies & Tools
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-400 transition-colors">
                  Professional Experience
                </a>
              </li>
              <li>
                <a href="#showcases" className="hover:text-blue-400 transition-colors">
                  Project Showcases
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-blue-400 transition-colors">
                  Education & Audits
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Document & Direct Actions */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Resume & Direct Channels
            </h4>
            <div className="space-y-2">
              <button
                id="footer-download-pdf-btn"
                onClick={generateResumePdf}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-600 text-white font-semibold transition-colors cursor-pointer text-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </button>

              <button
                id="footer-view-resume-btn"
                onClick={onOpenResumeModal}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors cursor-pointer text-xs"
              >
                <FileText className="w-3.5 h-3.5 text-blue-400" />
                <span>View Formatted Resume</span>
              </button>

              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/80 text-emerald-400 font-medium transition-colors text-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: {contactInfo.whatsapp}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[11px]">
            © {new Date().getFullYear()} Indra Winarso. All rights reserved. Built with professional blue & white design.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-medium transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
