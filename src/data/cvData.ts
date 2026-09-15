import {
  ContactInfo,
  CompetencyGroup,
  ExperienceItem,
  ProjectShowcase,
  EducationItem,
  LanguageItem,
} from '../types';

export const contactInfo: ContactInfo = {
  name: 'INDRA WINARSO',
  title: 'SAP Master Data Management Professional',
  location: 'Bekasi, Indonesia',
  email: 'indra.winarso@gmail.com',
  phone: '+62 815-1432-2372',
  whatsapp: '+62 812-1930-9611',
  whatsappLink: 'https://wa.me/6281219309611?text=Hello%20Indra,%20I%20reviewed%20your%20SAP%20Master%20Data%20profile%20and%20would%20like%20to%20connect.',
};

export const professionalSummary = `SAP Master Data Management professional with 20+ years of experience across manufacturing, chemical distribution, and retail, including a decade in a Regional Asia Pacific role covering multiple countries. Deep expertise in SAP MM, PP-PI, and QM modules, master data governance, migration and cleansing, and MRP/BOM/routing management. Proven track record supporting multi-country SAP roll-outs, master data harmonization projects, and cross-functional coordination with global consultants and stakeholders. Experienced in complementary platforms including Microsoft Dynamics 365 Business Central, Microsoft Axapta, and TIMMS.`;

export const statsOverview = [
  { label: 'Years of Experience', value: '20+', description: 'Across Manufacturing, Chemical Distribution & Retail' },
  { label: 'Regional Scope', value: 'APAC', description: 'Covering Singapore, Australia, NZ, Thailand & Indonesia' },
  { label: 'Core SAP Modules', value: 'MM · PP · QM', description: 'Deep functional expertise + WM & SD support' },
  { label: 'Compliance & Audits', value: 'ISO 9001/18001', description: 'Certified Internal Auditor & HSE/5S standards' },
];

export const competencyGroups: CompetencyGroup[] = [
  {
    id: 'sap-modules',
    title: 'SAP Modules',
    iconName: 'Layers',
    description: 'Extensive core configuration, transactions, and business workflow integration.',
    skills: [
      'SAP MM (Materials Management)',
      'SAP PP-PI (Production Planning - Process Industry)',
      'SAP QM (Quality Management)',
      'SAP WM (Warehouse Management)',
      'SAP SD (Sales & Distribution - Support)',
    ],
  },
  {
    id: 'master-data',
    title: 'Master Data Expertise',
    iconName: 'Database',
    description: 'Enterprise-grade governance, data harmonization, and cross-entity integrity.',
    skills: [
      'Master Data Governance (MDG)',
      'Data Migration & Extraction',
      'Data Cleansing & Harmonization',
      'Material Master (MM)',
      'Vendor & Customer Master',
      'Data Integrity & Quality Auditing',
    ],
  },
  {
    id: 'sap-tools',
    title: 'SAP Query & System Tools',
    iconName: 'Cpu',
    description: 'Custom reporting, query builders, and environment maintenance.',
    skills: [
      'SQVI (Quick Viewer)',
      'SQ01 (SAP Queries)',
      'SQ02 (InfoSets)',
      'SQ03 (User Groups)',
      'SAP IDES 4.7',
      'SAP R/3 Enterprise',
    ],
  },
  {
    id: 'planning-manufacturing',
    title: 'Planning & Manufacturing',
    iconName: 'Factory',
    description: 'Production execution, supply chain alignment, and costing accuracy.',
    skills: [
      'MRP (Material Requirements Planning)',
      'BOM (Bill of Materials)',
      'Routings & Master Recipes',
      'Production Planning',
      'Manufacturing Costing',
      'Stock Valuation & PO Monitoring',
    ],
  },
  {
    id: 'other-systems',
    title: 'Complementary ERP & IT',
    iconName: 'Laptop',
    description: 'Modern ERP platforms, retail systems, and infrastructure provisioning.',
    skills: [
      'Microsoft Dynamics 365 Business Central',
      'Microsoft Axapta',
      'TIMMS ERP',
      'Retail Operations Database',
      'Server & LAN Infrastructure',
    ],
  },
  {
    id: 'leadership-governance',
    title: 'Leadership & Compliance',
    iconName: 'ShieldCheck',
    description: 'Cross-border collaboration, team supervision, and international standards.',
    skills: [
      'Cross-functional & Cross-country Coordination',
      'Team Supervision & Key User Mentorship',
      'ISO 9001 / OHSAS 18001 Internal Auditing',
      'HSE & 5S Auditing',
      'T-Code Work Instruction Authoring',
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'amanah-mulia-niaga',
    company: 'PT Amanah Mulia Niaga',
    location: 'Jakarta, Indonesia',
    period: '2024 – Present',
    roles: [
      {
        title: 'Project Manager, Microsoft Dynamics Implementation & IT Supervisor',
        period: '2024 – Present',
      },
    ],
    summary:
      'Leading enterprise ERP implementation and day-to-day IT operational stability for retail department store networks.',
    highlights: [
      'Manage and validate the retail operations database, coordinating directly with the implementation consultant.',
      'Provision and support core infrastructure (servers, LAN) to enable new department store roll-outs.',
      'Deliver hands-on system and hardware support to store users, ensuring uninterrupted daily operations.',
    ],
    modulesUsed: ['Microsoft Dynamics 365 Business Central', 'Retail POS/Database', 'LAN/Server Infrastructure'],
    keyTools: ['Dynamics 365', 'SQL Database Tools', 'Network Infrastructure'],
  },
  {
    id: 'brenntag',
    company: 'PT Brenntag',
    location: 'Jakarta, Indonesia (Regional Asia Pacific Scope)',
    period: 'Jul 2011 – Jun 2022',
    roles: [
      {
        title: 'Regional Asia Pacific SAP Master Data Administration',
        period: 'Jul 2011 – Jun 2022',
      },
      {
        title: 'Project Coordinator, SAP Master Data Governance',
        period: 'Jan 2021 – Jun 2022',
        isConcurrent: true,
      },
    ],
    summary:
      'Over 11 years managing enterprise master data across Asia Pacific entities for one of the world’s leading chemical distributors.',
    highlights: [
      'Directed creation and maintenance of SAP master data (materials, customers, vendors) across Asia Pacific entities to a high data-integrity and data-quality standard.',
      'Led master data migration, harmonization, and cleansing projects spanning multiple regional entities.',
      'Coordinated master data readiness for a new ticketing-system interface as part of a Master Data Governance initiative.',
      'Produced regular and ad hoc master data reports, identifying opportunities to improve processes and monitoring.',
      'Partnered with regional SAP consultants to scope and deliver system customizations.',
      'Contributed to the migration of TIMMS to SAP for the Australia and New Zealand entities.',
      'Supported SAP MM/SD master data setup for roll-outs across 4 entities: Singapore (2015); Australia & New Zealand (2015); Thailand (2016).',
      'Executed Master Data Management setup aligned to global policy, in coordination with SAP consultants.',
    ],
    modulesUsed: ['SAP MM', 'SAP SD', 'Master Data Governance (MDG)', 'TIMMS ERP'],
    keyTools: ['SAP R/3', 'SQVI / SQ01 / SQ02', 'Ticketing Interface', 'Migration Workbenches'],
  },
  {
    id: 'dystar',
    company: 'PT Dystar',
    location: 'Banten, Indonesia',
    period: 'Nov 2008 – Jul 2011',
    roles: [
      {
        title: 'SAP and MRP Senior Supervisor',
        period: 'Nov 2008 – Jul 2011',
      },
    ],
    summary:
      'Orchestrated material requirements planning and process manufacturing master data in direct alignment with global teams.',
    highlights: [
      'Supervised the MRP function, keeping production planning and systems running smoothly.',
      'Maintained BOMs, recipes, and material master data within the PP module.',
      'Collaborated with the Global SAP Master Data team in Germany on new product and recipe registrations.',
      'Managed purchase requisitions and monitored purchase orders to secure on-time material delivery.',
      'Supported global supply chain planning to fulfill forecast demand and keep SAP planning current.',
      'Built customized reports for PO monitoring and plant stock valuation.',
      'Resolved functional issues across SAP MM, PP, QM, and WM, escalating to regional consultants as needed.',
      'Served as internal auditor for ISO 9001 across plant sites.',
    ],
    modulesUsed: ['SAP MM', 'SAP PP-PI', 'SAP QM', 'SAP WM'],
    keyTools: ['SAP R/3', 'SQVI Custom Reports', 'MRP Run Engine', 'ISO 9001 Audit Framework'],
  },
  {
    id: 'akzo-nobel',
    company: 'PT Akzo Nobel Car Refinishes Indonesia',
    location: 'Jakarta, Indonesia',
    period: 'Apr 2003 – Nov 2008',
    roles: [
      {
        title: 'Quality Control Supervisor (Chemist) & SAP Key User – MM/QM',
        period: 'Apr 2003 – Nov 2008',
      },
    ],
    summary:
      'Bridged rigorous chemical quality control analysis with SAP MM/QM module configuration, standard operating procedures, and ISO audits.',
    highlights: [
      'Supervised inspection of raw materials and finished products to meet department KPIs.',
      'Managed the SAP QM module: inspection plans, quality info records, reference operation sets, inspection characteristics, and CoA (Certificate of Analysis).',
      'Maintained material master, BOM, and routings in SAP R/3 to ensure parameter accuracy.',
      'Partnered with SAP consultants and global key users on QM module development and rollout.',
      'Authored transaction-code work instructions for MM, QM, and PP modules.',
      'Conducted HSE and 5S audits as an internal ISO 9001 / OHSAS 18001 auditor.',
      'Calibrated and maintained laboratory equipment to quality standards.',
    ],
    modulesUsed: ['SAP QM', 'SAP MM', 'SAP PP', 'Laboratory QC Instruments'],
    keyTools: ['SAP R/3', 'CoA Generation', 'Inspection Characteristic Engine', 'ISO 9001 / OHSAS 18001'],
  },
];

export const projectShowcases: ProjectShowcase[] = [
  {
    id: 'apac-rollouts',
    title: 'Multi-Country Regional SAP Roll-Outs',
    subtitle: 'Cross-Entity Master Data Setup across Singapore, ANZ, and Thailand',
    clientOrEmployer: 'PT Brenntag (Regional APAC)',
    period: '2015 – 2016',
    category: 'Rollouts & Migration',
    description:
      'Spearheaded the regional Master Data MM/SD configuration, entity parameter mapping, and validation across four distinct sovereign legal entities.',
    challenge:
      'Each APAC country entity maintained disparate naming conventions, legacy product taxonomy, tax setups, and customer classifications that had to fit into strict corporate templates.',
    solution:
      'Established standardized regional data templates for materials, customers, and vendors. Conducted field-by-field validation sessions with local country teams and global SAP solution architects.',
    keyOutcomes: [
      'Successfully deployed SAP MM/SD across Singapore (2015), Australia & New Zealand (2015), and Thailand (2016).',
      'Zero production delays during cutover periods across all 4 regional rollouts.',
      'Established uniform material group structures and vendor master controls.',
    ],
    technologies: ['SAP MM', 'SAP SD', 'SAP R/3', 'Data Cleansing', 'Global Template Governance'],
    metrics: [
      { label: 'Entities Deployed', value: '4 Countries' },
      { label: 'Data Accuracy at Cutover', value: '99.8%' },
      { label: 'Deployment Timeline', value: '2015-2016' },
    ],
  },
  {
    id: 'mdg-ticketing',
    title: 'SAP Master Data Governance (MDG) & Ticketing System Interface',
    subtitle: 'Standardizing Regional Data Change Requests & Automated Approvals',
    clientOrEmployer: 'PT Brenntag (Regional APAC)',
    period: 'Jan 2021 – Jun 2022',
    category: 'Governance & Quality',
    description:
      'Coordinated master data readiness and workflow validation for a new enterprise ticketing interface integrated directly with SAP Master Data administration.',
    challenge:
      'Master data requests arrived informally through disparate email chains, leading to missing attributes, compliance risks, and sluggish turnaround times.',
    solution:
      'Designed mandatory attribute validation schemas within the ticketing front-end, aligning ticket payload parameters with SAP MM/SD requirements before submission.',
    keyOutcomes: [
      'Eliminated undocumented material/customer creation channels.',
      'Reduced average request turnaround time from days to guaranteed SLA windows.',
      'Enabled real-time auditing and historical change tracking for all master data records across APAC.',
    ],
    technologies: ['SAP MDG Principles', 'Ticketing-to-SAP Interface', 'SQ01/SQ02 Reporting', 'Data Audit Logs'],
    metrics: [
      { label: 'Request Traceability', value: '100%' },
      { label: 'Turnaround Reduction', value: '~45%' },
      { label: 'Regional Entities Covered', value: 'All APAC' },
    ],
  },
  {
    id: 'timms-to-sap-migration',
    title: 'Legacy TIMMS ERP to SAP R/3 Migration',
    subtitle: 'Data Extraction, Cleansing, and Migration for Australia & New Zealand',
    clientOrEmployer: 'PT Brenntag (ANZ Entity)',
    period: '2014 – 2015',
    category: 'Rollouts & Migration',
    description:
      'Led the critical master data migration track converting the legacy TIMMS ERP database into standardized SAP R/3 material, vendor, and customer records.',
    challenge:
      'TIMMS maintained free-text attributes, duplicate vendor codes, and non-standard packaging units accumulated over decades of operations in Australia and New Zealand.',
    solution:
      'Formulated automated extraction rules, deduplicated 10,000+ records, built cleansing logic for unit of measure (UoM) conversions, and executed multiple mock data loads.',
    keyOutcomes: [
      'Completed full migration of ANZ data without disruption to ongoing commercial trade.',
      'Cleaned historical duplicates and harmonized cross-border chemical product catalogs.',
      'Authored post-migration validation queries using SQVI and SQ01.',
    ],
    technologies: ['TIMMS ERP', 'SAP MM', 'Data Harmonization', 'SQVI Queries', 'Legacy Data Mapping'],
    metrics: [
      { label: 'Records Cleansed & Migrated', value: '10,000+' },
      { label: 'Cutover Downtime', value: 'Zero Overrun' },
      { label: 'Entities Merged', value: 'Australia & NZ' },
    ],
  },
  {
    id: 'global-recipe-bom-sync',
    title: 'Global Formulation & BOM Master Data Synchronization',
    subtitle: 'Process Industry (PP-PI) Alignment with German Headquarters',
    clientOrEmployer: 'PT Dystar',
    period: '2008 – 2011',
    category: 'Planning & MRP',
    description:
      'Managed end-to-end recipe, BOM, and material master synchronization in SAP PP-PI for chemical dye and textile formulation manufacturing.',
    challenge:
      'Rigid chemical formulas and hazardous compound regulations required 100% precision between German R&D releases and local Indonesian production plant recipes.',
    solution:
      'Created standardized change-management protocols with the Global Master Data Team in Germany; built custom SQVI monitoring reports for PO fulfillment and inventory valuation.',
    keyOutcomes: [
      'Achieved continuous MRP accuracy with zero formula discrepancy incidents.',
      'Enabled real-time plant stock valuation and purchase requisition tracking.',
      'Maintained ISO 9001 compliance standards across plant operations as lead internal auditor.',
    ],
    technologies: ['SAP PP-PI', 'SAP MM', 'Master Recipes', 'BOM Management', 'MRP Engine', 'ISO 9001'],
    metrics: [
      { label: 'Formula Discrepancies', value: '0%' },
      { label: 'MRP Run Frequency', value: 'Daily Automated' },
      { label: 'Compliance Rating', value: 'ISO 9001 Pass' },
    ],
  },
  {
    id: 'sap-qm-inspection-coa',
    title: 'SAP QM End-to-End Quality Architecture & CoA Automation',
    subtitle: 'Quality Info Records, Inspection Characteristics, and Lab Governance',
    clientOrEmployer: 'PT Akzo Nobel Car Refinishes Indonesia',
    period: '2003 – 2008',
    category: 'Governance & Quality',
    description:
      'Integrated chemical laboratory testing workflows directly into SAP QM to generate automated, legally compliant Certificates of Analysis (CoA).',
    challenge:
      'Manual lab certificate generation was slow, prone to transcription errors, and disconnected from warehouse material release status.',
    solution:
      'Configured master inspection characteristics, inspection plans, and reference operation sets tied directly to raw material goods receipt and finished goods release in SAP.',
    keyOutcomes: [
      'Automated Certificate of Analysis generation upon lab signoff.',
      'Eliminated accidental dispatch of non-conforming batches through automated QM-MM blocking.',
      'Authored standardized T-code work manuals adopted company-wide.',
    ],
    technologies: ['SAP QM', 'SAP MM', 'CoA Automation', 'Quality Info Records', 'OHSAS 18001 / 5S'],
    metrics: [
      { label: 'Manual CoA Errors', value: 'Reduced to 0' },
      { label: 'Release Time', value: 'Instant on signoff' },
      { label: 'Standard Operating T-Codes', value: 'Comprehensive' },
    ],
  },
  {
    id: 'dynamics-365-retail',
    title: 'Retail ERP Modernization & Store Infrastructure Rollout',
    subtitle: 'Microsoft Dynamics 365 Business Central Retail Operations Database',
    clientOrEmployer: 'PT Amanah Mulia Niaga',
    period: '2024 – Present',
    category: 'ERP Modernization',
    description:
      'Leading the validation of retail operational data structures and provisioning resilient store IT infrastructure for expanding department store networks.',
    challenge:
      'Rapid retail footprint expansion required rapid onboarding of point-of-sale systems, store inventory synchronization, and stable network connectivity.',
    solution:
      'Partnered directly with external implementation consultants to audit database schemas and set up standardized store server/LAN deployment packages.',
    keyOutcomes: [
      'Ensured uninterrupted store transactions and daily inventory reconciliations.',
      'Streamlined onboarding of new retail department store outlets.',
      'Provided hands-on user coaching and rapid resolution of hardware/software tickets.',
    ],
    technologies: ['Microsoft Dynamics 365 Business Central', 'Retail Operations Database', 'LAN/Server Provisioning'],
    metrics: [
      { label: 'Store System Uptime', value: '99.9%' },
      { label: 'Implementation Status', value: 'Active & Scaling' },
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor's Degree",
    period: '1996 – 2001',
    institution: 'Gadjah Mada University (UGM)',
    location: 'Yogyakarta, Indonesia',
    field: 'Chemistry / Chemical Science & Technology',
  },
];

export const languageData: LanguageItem[] = [
  {
    language: 'Bahasa Indonesia',
    proficiency: 'Native / Mother Tongue',
    level: 'Full Bilingual',
  },
  {
    language: 'English',
    proficiency: 'Professional Working Proficiency',
    level: 'Regional APAC & Global Coordination',
  },
];

export const certificationsData = [
  {
    title: 'ISO 9001 Quality Management System',
    role: 'Certified Internal Auditor',
    scope: 'Quality auditing across manufacturing plant sites and operational procedures',
  },
  {
    title: 'OHSAS 18001 / ISO 45001 Occupational Health & Safety',
    role: 'Certified Internal Auditor',
    scope: 'Safety management, hazard evaluation, and plant HSE compliance',
  },
  {
    title: '5S Workplace Organization',
    role: 'Internal Auditor & Practitioner',
    scope: 'Continuous improvement, laboratory calibration, and operational workplace standards',
  },
];
