/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompetenciesSection } from './components/CompetenciesSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectShowcases } from './components/ProjectShowcases';
import { EducationLanguageSection } from './components/EducationLanguageSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumePreviewModal } from './components/ResumePreviewModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResumeModal = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  const handleOpenContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar
        onOpenResumeModal={handleOpenResumeModal}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Executive Overview & Hero */}
        <Hero onOpenResumeModal={handleOpenResumeModal} />

        {/* Technical Skills & Core Competencies */}
        <CompetenciesSection />

        {/* Professional Career Experience Timeline */}
        <ExperienceTimeline />

        {/* Interactive Project Showcases */}
        <ProjectShowcases />

        {/* Education, Languages & Certifications */}
        <EducationLanguageSection />

        {/* Inquiry & Contact Form */}
        <ContactSection />
      </main>

      {/* Professional Footer */}
      <Footer onOpenResumeModal={handleOpenResumeModal} />

      {/* Printable / Previewable Resume Modal */}
      <ResumePreviewModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResumeModal}
      />
    </div>
  );
}

