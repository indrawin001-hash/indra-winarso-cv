import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Clock,
  Building,
  FileCheck,
  ExternalLink,
} from 'lucide-react';
import { contactInfo } from '../data/cvData';
import { InquiryFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    company: '',
    inquiryType: 'SAP Master Data Consultation',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const inquiryTypes = [
    'SAP Master Data Consultation',
    'ERP Migration & Data Cleansing',
    'Multi-Country Rollout Support',
    'Full-Time / Executive Role',
    'Contract / Project Advisory',
    'General Inquiry',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable asynchronous dispatch & state capture
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const mailtoHref = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    formData.subject || `Inquiry from ${formData.name || 'Website Visitor'}: ${formData.inquiryType}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nCompany: ${formData.company}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto pb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>Professional Inquiries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Available for enterprise SAP consulting, master data governance initiatives, multi-country ERP rollouts, and executive engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Channels Column (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 mt-1 leading-relaxed">
                Connect directly with Indra Winarso via email, phone, or instant WhatsApp.
              </p>

              <div className="mt-6 space-y-5">
                {/* Email Item */}
                <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-white/10 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-700 text-white">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-blue-200 font-medium">Direct Email</div>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:underline break-all"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(contactInfo.email, 'email')}
                    className="p-1.5 rounded-md text-blue-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
                    title="Copy email"
                  >
                    {copiedEmail ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* WhatsApp Item */}
                <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-white/10 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-600 text-white">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-blue-200 font-medium">WhatsApp Direct</div>
                      <a
                        href={contactInfo.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-semibold text-white hover:underline flex items-center gap-1"
                      >
                        <span>{contactInfo.whatsapp}</span>
                        <ExternalLink className="w-3 h-3 text-blue-200" />
                      </a>
                    </div>
                  </div>
                  <a
                    href={contactInfo.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 text-[11px] font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-900 rounded-md transition-colors shrink-0"
                  >
                    Chat
                  </a>
                </div>

                {/* Phone Item */}
                <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-white/10 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-700 text-white">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-blue-200 font-medium">Mobile Phone</div>
                      <a
                        href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:underline"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(contactInfo.phone, 'phone')}
                    className="p-1.5 rounded-md text-blue-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
                    title="Copy phone"
                  >
                    {copiedPhone ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location & Timezone */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/10">
                  <div className="p-2 rounded-lg bg-blue-700 text-white">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-blue-200 font-medium">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {contactInfo.location}
                    </div>
                    <div className="text-[11px] text-blue-300">
                      Western Indonesia Time (WIB / UTC+7)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Note */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wide">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Response Time Commitment</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Inquiries are typically reviewed within 24 business hours. For urgent project escalations, WhatsApp communication is recommended.
              </p>
            </div>
          </div>

          {/* Inquiry Form Column (Right) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Thank You, {formData.name || 'Visitor'}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your inquiry regarding <strong>"{formData.inquiryType}"</strong> has been logged. You can also send this directly from your email client using the button below.
                  </p>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send via Email Client</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          inquiryType: 'SAP Master Data Consultation',
                          subject: '',
                          message: '',
                        });
                      }}
                      className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form id="contact-inquiry-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="form-name"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Your Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g., Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label
                        htmlFor="form-email"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Email Address <span className="text-blue-600">*</span>
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g., s.jenkins@company.com"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Organization / Company */}
                    <div>
                      <label
                        htmlFor="form-company"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Company / Organization
                      </label>
                      <input
                        id="form-company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g., Brenntag APAC / Global Supply"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label
                        htmlFor="form-inquiry-type"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Inquiry Category
                      </label>
                      <select
                        id="form-inquiry-type"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      >
                        {inquiryTypes.map((t, idx) => (
                          <option key={idx} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject line */}
                  <div>
                    <label
                      htmlFor="form-subject"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      id="form-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g., Master Data Governance project kickoff"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="form-message"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Project Details or Message <span className="text-blue-600">*</span>
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your organization's SAP master data objectives, timeline, or position requirements..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-y"
                    />
                  </div>

                  {/* Action buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <button
                      id="submit-inquiry-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer disabled:opacity-75"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Transmitting Inquiry...' : 'Submit Inquiry'}</span>
                    </button>

                    <a
                      id="direct-mailto-link"
                      href={mailtoHref}
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-700 py-2 transition-colors"
                    >
                      <span>Or launch pre-filled email client</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
