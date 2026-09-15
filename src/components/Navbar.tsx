import React, { useState, useEffect } from 'react';
import {
  FileText,
  Download,
  Mail,
  Menu,
  X,
  Database,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import { contactInfo } from '../data/cvData';
import { generateResumePdf } from '../utils/pdfGenerator';

interface NavbarProps {
  onOpenResumeModal: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResumeModal,
  onOpenContact,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    setIsDownloading(true);
    try {
      generateResumePdf();
    } finally {
      setTimeout(() => setIsDownloading(false), 1000);
    }
  };

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Competencies', href: '#competencies' },
    { name: 'Experience', href: '#experience' },
    { name: 'Showcases', href: '#showcases' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <a
          id="nav-brand-logo"
          href="#overview"
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-lg bg-blue-700 text-white flex items-center justify-center font-bold text-lg tracking-wider shadow-sm group-hover:bg-blue-800 transition-colors">
            IW
          </div>
          <div>
            <div className="font-bold text-slate-900 text-base sm:text-lg leading-tight tracking-tight flex items-center gap-2">
              <span>Indra Winarso</span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                SAP MDM
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Master Data Management Professional
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              id={`nav-link-${link.name.toLowerCase()}`}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-700 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            id="nav-preview-resume-btn"
            onClick={onOpenResumeModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors cursor-pointer"
            title="Preview Printable Resume"
          >
            <FileText className="w-3.5 h-3.5 text-slate-600" />
            <span>View Resume</span>
          </button>

          <button
            id="nav-download-resume-btn"
            onClick={handleDownload}
            disabled={isDownloading}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 rounded-lg shadow-sm transition-colors cursor-pointer disabled:opacity-75"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isDownloading ? 'Generating...' : 'Download PDF'}</span>
          </button>

          <a
            id="nav-quick-whatsapp-btn"
            href={contactInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden xl:inline">WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="mobile-download-pdf-btn"
            onClick={handleDownload}
            className="p-2 text-blue-700 bg-blue-50 border border-blue-200 rounded-lg"
            title="Download PDF"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-dropdown-menu"
          className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 mt-3 space-y-3 shadow-lg"
        >
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50/60 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              id="mobile-drawer-preview-resume"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg"
            >
              <FileText className="w-4 h-4 text-slate-600" />
              Preview Full Resume
            </button>
            <button
              id="mobile-drawer-download-resume"
              onClick={() => {
                setMobileMenuOpen(false);
                handleDownload();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 rounded-lg"
            >
              <Download className="w-4 h-4" />
              Download Resume (PDF)
            </button>
            <a
              id="mobile-drawer-whatsapp"
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp (+62 812-1930-9611)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
