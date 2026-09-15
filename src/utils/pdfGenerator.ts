import { jsPDF } from 'jspdf';
import {
  contactInfo,
  professionalSummary,
  competencyGroups,
  experienceData,
  educationData,
  languageData,
} from '../data/cvData';

export function generateResumePdf(): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
      return true;
    }
    return false;
  };

  const drawSectionHeader = (title: string) => {
    checkPageBreak(12);
    y += 4;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 76, 129); // Professional SAP Navy Blue
    doc.text(title.toUpperCase(), margin, y);
    y += 1.5;

    // Header divider line
    doc.setDrawColor(15, 76, 129);
    doc.setLineWidth(0.4);
    doc.line(margin, y, margin + contentWidth, y);
    y += 4.5;
  };

  // --- HEADER ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text(contactInfo.name, margin, y);
  y += 6.5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 76, 129);
  doc.text(contactInfo.title, margin, y);
  y += 5.5;

  // Contact info line
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105); // slate-600
  const contactLine = `${contactInfo.location}  |  ${contactInfo.email}  |  ${contactInfo.phone} (WhatsApp: ${contactInfo.whatsapp})`;
  doc.text(contactLine, margin, y);
  y += 4;

  // Top divider
  doc.setDrawColor(203, 213, 225); // slate-300
  doc.setLineWidth(0.3);
  doc.line(margin, y, margin + contentWidth, y);
  y += 4;

  // --- PROFESSIONAL SUMMARY ---
  drawSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.2);
  doc.setTextColor(30, 41, 59);
  const summaryLines = doc.splitTextToSize(professionalSummary, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 4.2 + 2;

  // --- CORE COMPETENCIES ---
  drawSectionHeader('Core Competencies');
  doc.setFontSize(8.8);

  const competencyItems = [
    { label: 'SAP Modules', val: 'MM, PP-PI, QM, WM, SD (support)' },
    { label: 'SAP Tools', val: 'SQVI, SQ01, SQ02, SQ03, SAP IDES 4.7, SAP R/3' },
    { label: 'Master Data', val: 'Governance, Migration, Cleansing, Harmonization, Data Integrity & Quality' },
    { label: 'Planning & Manufacturing', val: 'MRP, BOM & Routings, Production Planning, Manufacturing Costing' },
    { label: 'Other Systems', val: 'Microsoft Dynamics 365 Business Central, Microsoft Axapta, TIMMS' },
    { label: 'Leadership', val: 'Cross-functional & Cross-country Coordination, Team Supervision, ISO 9001/18001 Auditing' },
  ];

  competencyItems.forEach((comp) => {
    checkPageBreak(5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 76, 129);
    doc.text(`${comp.label}: `, margin, y);
    const labelWidth = doc.getTextWidth(`${comp.label}: `);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(30, 41, 59);
    const valueLines = doc.splitTextToSize(comp.val, contentWidth - labelWidth);
    doc.text(valueLines[0], margin + labelWidth, y);

    if (valueLines.length > 1) {
      for (let i = 1; i < valueLines.length; i++) {
        y += 3.8;
        doc.text(valueLines[i], margin + labelWidth, y);
      }
    }
    y += 4.2;
  });
  y += 2;

  // --- PROFESSIONAL EXPERIENCE ---
  drawSectionHeader('Professional Experience');

  experienceData.forEach((exp) => {
    checkPageBreak(16);

    // Company & Location header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text(exp.company, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    const locationWidth = doc.getTextWidth(exp.location);
    doc.text(exp.location, margin + contentWidth - locationWidth, y);
    y += 4.5;

    // Roles
    exp.roles.forEach((role) => {
      checkPageBreak(5);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(15, 76, 129);
      doc.text(role.title, margin, y);

      doc.setFont('helvetica', 'italic');
      doc.setFontSize(8.5);
      doc.setTextColor(71, 85, 105);
      const periodWidth = doc.getTextWidth(role.period);
      doc.text(role.period, margin + contentWidth - periodWidth, y);
      y += 4.2;
    });

    // Bullets
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 41, 59);

    exp.highlights.forEach((highlight) => {
      const bulletIndent = 4;
      const textLines = doc.splitTextToSize(highlight, contentWidth - bulletIndent);
      checkPageBreak(textLines.length * 3.8 + 1);

      doc.text('•', margin, y);
      doc.text(textLines, margin + bulletIndent, y);
      y += textLines.length * 3.8 + 1.2;
    });

    y += 2.5;
  });

  // --- EDUCATION ---
  drawSectionHeader('Education');
  educationData.forEach((edu) => {
    checkPageBreak(10);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(edu.degree, margin, y);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(9);
    doc.setTextColor(71, 85, 105);
    const periodWidth = doc.getTextWidth(edu.period);
    doc.text(edu.period, margin + contentWidth - periodWidth, y);
    y += 4.2;

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(30, 41, 59);
    doc.text(`${edu.institution}, ${edu.location}`, margin, y);
    y += 5.5;
  });

  // --- LANGUAGES ---
  drawSectionHeader('Languages');
  checkPageBreak(8);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);
  const langText = languageData
    .map((l) => `${l.language} — ${l.proficiency.split('/')[0].trim()}`)
    .join('   |   ');
  doc.text(langText, margin, y);

  // Add Page Numbers
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text(
      `Indra Winarso — SAP Master Data Management Professional — Page ${i} of ${totalPages}`,
      margin,
      pageHeight - 8
    );
  }

  // Save the document
  doc.save('Indra_Winarso_SAP_Master_Data_Resume.pdf');
}
