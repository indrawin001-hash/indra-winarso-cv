export interface ContactInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  whatsappLink: string;
}

export interface CompetencyGroup {
  id: string;
  title: string;
  iconName: string;
  skills: string[];
  description: string;
}

export interface ExperienceRole {
  title: string;
  period: string;
  isConcurrent?: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  period: string;
  roles: ExperienceRole[];
  summary?: string;
  highlights: string[];
  modulesUsed: string[];
  keyTools: string[];
}

export interface ProjectShowcase {
  id: string;
  title: string;
  subtitle: string;
  clientOrEmployer: string;
  period: string;
  category: 'Rollouts & Migration' | 'Governance & Quality' | 'Planning & MRP' | 'ERP Modernization';
  description: string;
  challenge: string;
  solution: string;
  keyOutcomes: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
}

export interface EducationItem {
  degree: string;
  period: string;
  institution: string;
  location: string;
  field?: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  level: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  company: string;
  inquiryType: string;
  subject: string;
  message: string;
}
