// Comprehensive Mock Data Store for Nexus HRMS Lifecycle Demo

export const INITIAL_ROLE = 'HR Admin'; // 'HR Admin' | 'Hiring Manager' | 'Employee' | 'Recruiter' | 'Finance'

export const SYSTEM_METRICS = {
  totalHeadcount: 382,
  headcountTarget: 450,
  budgetAllocated: 9850000,
  budgetTotal: 12500000,
  openRequisitions: 14,
  activeCandidates: 48,
  pendingApprovals: 9,
  payrollStatus: 'Ready for Lock',
  exitInProcess: 3,
};

export const WORKFORCE_PLANS = [
  { id: 'WP-2026-ENG', dept: 'Engineering', grade: 'L3-L6', plannedHeadcount: 120, currentHeadcount: 98, allocatedBudget: 4200000, spentBudget: 3450000, status: 'Approved' },
  { id: 'WP-2026-PROD', dept: 'Product Management', grade: 'P3-P5', plannedHeadcount: 35, currentHeadcount: 28, allocatedBudget: 1800000, spentBudget: 1420000, status: 'Approved' },
  { id: 'WP-2026-MKT', dept: 'Growth & Marketing', grade: 'M2-M5', plannedHeadcount: 50, currentHeadcount: 42, allocatedBudget: 1500000, spentBudget: 1280000, status: 'Approved' },
  { id: 'WP-2026-SALES', dept: 'Global Sales', grade: 'S2-S6', plannedHeadcount: 90, currentHeadcount: 78, allocatedBudget: 2400000, spentBudget: 2100000, status: 'Approved' },
  { id: 'WP-2026-HR', dept: 'People & Operations', grade: 'H2-H4', plannedHeadcount: 20, currentHeadcount: 16, allocatedBudget: 800000, spentBudget: 620000, status: 'Approved' },
  { id: 'WP-2026-FIN', dept: 'Finance & Legal', grade: 'F2-F5', plannedHeadcount: 15, currentHeadcount: 12, allocatedBudget: 750000, spentBudget: 580000, status: 'Approved' },
];

export const MANPOWER_REQUISITIONS = [
  {
    id: 'REQ-2026-089',
    dept: 'Engineering',
    designation: 'Senior Full Stack Lead',
    vacancies: 3,
    hiringManager: 'Sarah Jenkins (Director of Tech)',
    employmentType: 'Full-time',
    expDoj: '2026-10-15',
    salaryMin: 140000,
    salaryMax: 180000,
    reason: 'New Platform Architecture Scale',
    budgetAvailable: true,
    status: 'Open',
    approvalHierarchy: [
      { role: 'Manager', name: 'Sarah Jenkins', status: 'Approved', date: '2026-09-10' },
      { role: 'Dept Head', name: 'Marcus Vance', status: 'Approved', date: '2026-09-11' },
      { role: 'HR Head', name: 'Elena Rostova', status: 'Approved', date: '2026-09-12' },
      { role: 'Finance Director', name: 'David Sterling', status: 'Approved', date: '2026-09-12' },
    ],
    jdId: 'JD-ENG-04',
    appliedCount: 24,
  },
  {
    id: 'REQ-2026-092',
    dept: 'Product Management',
    designation: 'Staff AI Product Manager',
    vacancies: 1,
    hiringManager: 'Alex Rivera (VP Product)',
    employmentType: 'Full-time',
    expDoj: '2026-11-01',
    salaryMin: 190000,
    salaryMax: 230000,
    reason: 'AI HRMS Copilot Initiative',
    budgetAvailable: false, // Triggers Exception Flow!
    budgetExceptionReason: 'Off-cycle AI Expansion requirement requiring budget reallocation',
    status: 'Pending Exception Approval',
    approvalHierarchy: [
      { role: 'Manager', name: 'Alex Rivera', status: 'Approved', date: '2026-09-20' },
      { role: 'Dept Head', name: 'Alex Rivera', status: 'Approved', date: '2026-09-20' },
      { role: 'HR Head', name: 'Elena Rostova', status: 'Approved', date: '2026-09-21' },
      { role: 'Finance Director', name: 'David Sterling', status: 'Under Review', date: null },
      { role: 'Managing Director', name: 'Victoria Thorne', status: 'Pending', date: null },
    ],
    jdId: 'JD-PROD-09',
    appliedCount: 8,
  },
  {
    id: 'REQ-2026-095',
    dept: 'Growth & Marketing',
    designation: 'Performance Marketing Specialist',
    vacancies: 2,
    hiringManager: 'Chloe Bennet',
    employmentType: 'Full-time',
    expDoj: '2026-10-01',
    salaryMin: 90000,
    salaryMax: 115000,
    reason: 'Backfill for Resignation',
    budgetAvailable: true,
    status: 'Open',
    approvalHierarchy: [
      { role: 'Manager', name: 'Chloe Bennet', status: 'Approved', date: '2026-09-15' },
      { role: 'HR Head', name: 'Elena Rostova', status: 'Approved', date: '2026-09-16' },
      { role: 'Finance Director', name: 'David Sterling', status: 'Approved', date: '2026-09-16' },
    ],
    jdId: 'JD-MKT-02',
    appliedCount: 42,
  },
];

export const JOB_DESCRIPTIONS = [
  {
    id: 'JD-ENG-04',
    title: 'Senior Full Stack Lead',
    dept: 'Engineering',
    grade: 'L5',
    expYears: '6 - 9 Years',
    education: 'B.Tech / M.Tech in CS or Equivalent',
    salaryRange: '$140,000 - $180,000',
    skills: ['React', 'Node.js', 'PostgreSQL', 'Microservices', 'GraphQL', 'System Architecture'],
    roles: [
      'Lead a high-performing squad of 6 frontend and backend engineers',
      'Architect resilient microservices and real-time dashboard engines',
      'Conduct high-standards code reviews and mentor junior developers',
      'Drive tech debt reduction and performance optimizations',
    ],
    status: 'Approved',
  },
  {
    id: 'JD-PROD-09',
    title: 'Staff AI Product Manager',
    dept: 'Product Management',
    grade: 'P5',
    expYears: '8+ Years',
    education: 'BS/MS in CS, Engineering, MBA Preferred',
    salaryRange: '$190,000 - $230,000',
    skills: ['LLM Integration', 'Product Roadmap', 'UX Design', 'A/B Testing', 'Agile Product Ops'],
    roles: [
      'Define vision for Next-Gen HR Automation & Enterprise Copilots',
      'Partner with ML Research and Engineering to ship autonomous workflows',
      'Engage enterprise stakeholders to convert user feedback into features',
    ],
    status: 'Approved',
  },
  {
    id: 'JD-MKT-02',
    title: 'Performance Marketing Specialist',
    dept: 'Growth & Marketing',
    grade: 'M3',
    expYears: '3 - 5 Years',
    education: 'Bachelor in Marketing / Business Administration',
    salaryRange: '$90,000 - $115,000',
    skills: ['Google Ads', 'LinkedIn B2B Ads', 'SEO/SEM', 'Google Analytics 4', 'Conversion Rate Opt'],
    roles: [
      'Manage $200k monthly performance ad budgets across paid acquisition',
      'Optimize multi-touch customer attribution models and CAC',
    ],
    status: 'Approved',
  },
];

export const SOURCING_CHANNELS = [
  { name: 'LinkedIn Recruiter', applications: 142, hiresThisYear: 18, costPerHire: '$2,400', yieldRate: '12.6%' },
  { name: 'Employee Referral Program', applications: 48, hiresThisYear: 14, costPerHire: '$1,000', yieldRate: '29.1%' },
  { name: 'Company Careers Portal', applications: 210, hiresThisYear: 12, costPerHire: '$200', yieldRate: '5.7%' },
  { name: 'Naukri / Indeed Portals', applications: 185, hiresThisYear: 9, costPerHire: '$1,800', yieldRate: '4.8%' },
  { name: 'University Campus Drive', applications: 95, hiresThisYear: 8, costPerHire: '$800', yieldRate: '8.4%' },
  { name: 'Internal Mobility (IJP)', applications: 19, hiresThisYear: 6, costPerHire: '$0', yieldRate: '31.5%' },
];

export const CANDIDATES = [
  {
    id: 'CAND-8092',
    appId: 'APP-2026-901',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@techmail.io',
    phone: '+1 (555) 234-5678',
    reqId: 'REQ-2026-089',
    designation: 'Senior Full Stack Lead',
    source: 'LinkedIn Recruiter',
    appliedDate: '2026-09-14',
    expYears: 7,
    currentCompany: 'Apex Cloud Systems',
    noticePeriod: '30 Days',
    currentLocation: 'San Jose, CA',
    stage: 'Interview Scheduled',
    score: 8.8,
    resumeUrl: 'aarav_sharma_resume.pdf',
    skills: ['React', 'Node.js', 'System Architecture', 'AWS'],
    history: [
      { date: '2026-09-14', note: 'Applied via LinkedIn' },
      { date: '2026-09-15', note: 'Screened by Recruiter (Rachel Green) - Recommended' },
      { date: '2026-09-18', note: 'Passed Tech Round 1 with score 9/10' },
    ]
  },
  {
    id: 'CAND-8093',
    appId: 'APP-2026-902',
    name: 'Sophia Chen',
    email: 'sophia.chen@ai-innovate.com',
    phone: '+1 (555) 876-5432',
    reqId: 'REQ-2026-092',
    designation: 'Staff AI Product Manager',
    source: 'Employee Referral (by Marcus Vance)',
    appliedDate: '2026-09-18',
    expYears: 9,
    currentCompany: 'Cognitive Dynamics',
    noticePeriod: '15 Days',
    currentLocation: 'San Francisco, CA',
    stage: 'Offer Process',
    score: 9.4,
    resumeUrl: 'sophia_chen_resume.pdf',
    skills: ['AI/ML Strategy', 'LLMs', 'Product Lifecycle', 'Data Analytics'],
    history: [
      { date: '2026-09-18', note: 'Referral submitted' },
      { date: '2026-09-20', note: 'Tech & Product Panel cleared' },
      { date: '2026-09-24', note: 'Offer approval requested ($210k total comp)' },
    ]
  },
  {
    id: 'CAND-8094',
    appId: 'APP-2026-903',
    name: 'Devon Miller',
    email: 'devon.m@marketgrowth.org',
    phone: '+1 (555) 345-6789',
    reqId: 'REQ-2026-095',
    designation: 'Performance Marketing Specialist',
    source: 'Company Careers Portal',
    appliedDate: '2026-09-21',
    expYears: 4,
    currentCompany: 'AdPulse Agency',
    noticePeriod: 'Immediate',
    currentLocation: 'Austin, TX',
    stage: 'Screening',
    score: 7.6,
    resumeUrl: 'devon_miller_cv.pdf',
    skills: ['Google Ads', 'GA4', 'Paid Social', 'Funnel Optimization'],
    history: [
      { date: '2026-09-21', note: 'Application received' }
    ]
  },
  {
    id: 'CAND-8095',
    appId: 'APP-2026-904',
    name: 'Rohan Mehta',
    email: 'rohan.m@enterprise.io',
    phone: '+1 (555) 998-1122',
    reqId: 'REQ-2026-089',
    designation: 'Senior Full Stack Lead',
    source: 'Internal Mobility (IJP)',
    appliedDate: '2026-09-16',
    expYears: 6,
    currentCompany: 'Nexus HRMS (Internal L4 Engineer)',
    noticePeriod: 'Internal Transfer',
    currentLocation: 'San Jose, CA',
    stage: 'Document Collection',
    score: 9.1,
    resumeUrl: 'rohan_mehta_internal.pdf',
    skills: ['React', 'PostgreSQL', 'Kafka', 'Nexus Core'],
    history: [
      { date: '2026-09-16', note: 'IJP Submitted' },
      { date: '2026-09-22', note: 'Manager & Director Interview Cleared' },
      { date: '2026-09-25', note: 'Offer Accepted! Triggered Doc Collection' }
    ]
  },
];

export const INTERVIEW_ROUNDS = [
  {
    id: 'INT-301',
    candidateId: 'CAND-8092',
    candidateName: 'Aarav Sharma',
    roundName: 'Round 2 - Architecture & System Design',
    interviewer: 'Sarah Jenkins (Tech Lead)',
    scheduledTime: '2026-09-30 14:00 PST',
    type: 'Video Call (Google Meet)',
    status: 'Scheduled',
    scorecard: { rating: null, coding: null, architecture: null, culture: null, feedback: '' }
  },
  {
    id: 'INT-299',
    candidateId: 'CAND-8093',
    candidateName: 'Sophia Chen',
    roundName: 'Round 3 - Leadership & VP Alignment',
    interviewer: 'Alex Rivera (VP Product)',
    scheduledTime: '2026-09-23 11:00 PST',
    type: 'In-person / Executive Suite',
    status: 'Completed',
    scorecard: { rating: 5, productSense: 5, leadership: 4.8, culture: 5, feedback: 'Outstanding candidate. Exceptionally clear vision on enterprise AI agents. Strong Hire!' }
  }
];

export const OFFERS = [
  {
    id: 'OFF-2026-044',
    candidateId: 'CAND-8093',
    candidateName: 'Sophia Chen',
    designation: 'Staff AI Product Manager',
    department: 'Product Management',
    grade: 'P5',
    baseSalary: 185000,
    variableBonus: 25000,
    stockOptions: '5,000 RSUs (4-yr vest)',
    joiningBonus: 10000,
    targetDoj: '2026-10-15',
    status: 'Released', // Draft, Pending Approval, Released, Accepted, Declined
    expiryDate: '2026-10-05',
    offeredBy: 'Elena Rostova (HR Lead)'
  },
  {
    id: 'OFF-2026-045',
    candidateId: 'CAND-8095',
    candidateName: 'Rohan Mehta',
    designation: 'Senior Full Stack Lead',
    department: 'Engineering',
    grade: 'L5',
    baseSalary: 155000,
    variableBonus: 15000,
    stockOptions: '2,500 RSUs',
    joiningBonus: 0,
    targetDoj: '2026-10-01',
    status: 'Accepted',
    expiryDate: '2026-09-28',
    offeredBy: 'Elena Rostova (HR Lead)'
  }
];

export const CANDIDATE_DOCUMENTS = [
  { id: 'DOC-101', candidateId: 'CAND-8095', candidateName: 'Rohan Mehta', docType: 'Government Photo Identity (Passport)', status: 'Accepted', uploadedDate: '2026-09-26', fileUrl: 'passport_scan.pdf' },
  { id: 'DOC-102', candidateId: 'CAND-8095', candidateName: 'Rohan Mehta', docType: 'Degree Certificate (M.Tech)', status: 'Accepted', uploadedDate: '2026-09-26', fileUrl: 'degree_mtech.pdf' },
  { id: 'DOC-103', candidateId: 'CAND-8095', candidateName: 'Rohan Mehta', docType: 'Relieving & Experience Letter', status: 'Under Review', uploadedDate: '2026-09-27', fileUrl: 'previous_exp.pdf' },
  { id: 'DOC-104', candidateId: 'CAND-8095', candidateName: 'Rohan Mehta', docType: 'Last 3 Months Payslips', status: 'Accepted', uploadedDate: '2026-09-26', fileUrl: 'payslips_bundle.pdf' },
  { id: 'DOC-105', candidateId: 'CAND-8093', candidateName: 'Sophia Chen', docType: 'Identity & Address Proof', status: 'Pending Upload', uploadedDate: null, fileUrl: null }
];

export const BACKGROUND_CHECKS = [
  {
    id: 'BGV-881',
    candidateId: 'CAND-8095',
    candidateName: 'Rohan Mehta',
    agency: 'Kroll Screening Solutions',
    initiatedDate: '2026-09-26',
    checks: {
      identity: 'Clear',
      education: 'Clear',
      previousEmployment: 'Clear',
      addressCheck: 'Clear',
      criminalRecord: 'Clear'
    },
    overallStatus: 'Clear',
    reportPdf: 'bgv_report_rohan_mehta.pdf'
  },
  {
    id: 'BGV-882',
    candidateId: 'CAND-8093',
    candidateName: 'Sophia Chen',
    agency: 'FirstAdvantage BGV',
    initiatedDate: '2026-09-28',
    checks: {
      identity: 'Clear',
      education: 'Clear',
      previousEmployment: 'In Progress',
      addressCheck: 'Clear',
      criminalRecord: 'Clear'
    },
    overallStatus: 'In Progress',
    reportPdf: null
  }
];

export const ONBOARDING_RECORDS = [
  {
    id: 'ONB-501',
    candidateId: 'CAND-8095',
    candidateName: 'Rohan Mehta',
    designation: 'Senior Full Stack Lead',
    department: 'Engineering',
    joiningDate: '2026-10-01',
    welcomeKitSent: true,
    policyAccepted: true,
    itSystemAccess: { emailCreated: true, slackInvite: true, githubAccess: true, vpnAccess: true },
    assetProvisioned: { laptop: 'MacBook Pro 16" M3 Max', idBadge: 'Issued #8821' },
    inductionScheduled: '2026-10-01 09:30 AM',
    deptIntroDone: true,
    joiningOutcome: 'Joined', // 'Joined' | 'Did Not Join' | 'Pending'
    empIdGenerated: 'EMP-1048'
  },
  {
    id: 'ONB-502',
    candidateId: 'CAND-8093',
    candidateName: 'Sophia Chen',
    designation: 'Staff AI Product Manager',
    department: 'Product Management',
    joiningDate: '2026-10-15',
    welcomeKitSent: true,
    policyAccepted: false,
    itSystemAccess: { emailCreated: false, slackInvite: false, githubAccess: false, vpnAccess: false },
    assetProvisioned: { laptop: 'MacBook Air M3', idBadge: 'Pending' },
    inductionScheduled: '2026-10-15 09:30 AM',
    deptIntroDone: false,
    joiningOutcome: 'Pending',
    empIdGenerated: null
  }
];

export const EMPLOYEES = [
  {
    id: 'EMP-1001',
    name: 'Marcus Vance',
    email: 'marcus.vance@nexus.com',
    personalEmail: 'marcus.vance.tech@gmail.com',
    role: 'VP of Engineering',
    department: 'Engineering',
    designation: 'VP of Engineering',
    grade: 'E2',
    costCenter: 'CC-ENG-901',
    joiningDate: '2021-03-15',
    status: 'Confirmed',
    employmentType: 'Full-Time Permanent',
    phone: '+1 (555) 100-2001',
    workExtension: 'x4401',
    location: 'San Jose Headquarters, CA',
    workMode: 'Hybrid (3 days in office)',
    shiftRoster: 'Day Shift (09:00 - 18:00 PST)',
    manager: 'Victoria Thorne (CEO)',
    salary: 240000,
    probationStatus: 'Confirmed',
    probationTenure: 'Complied (6 Months)',
    noticePeriod: '60 Days',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    personal: {
      dob: '1985-06-22',
      gender: 'Male',
      bloodGroup: 'O+',
      maritalStatus: 'Married',
      nationality: 'United States',
      passportNo: 'A89012349',
      residentialAddress: '742 Evergreen Terrace, San Jose, CA 95112',
      permanentAddress: '742 Evergreen Terrace, San Jose, CA 95112'
    },
    family: {
      spouseName: 'Elena Vance',
      dependents: 2,
      emergencyPrimary: { name: 'Elena Vance', relation: 'Spouse', phone: '+1 (555) 900-1111', address: 'San Jose, CA' },
      emergencySecondary: { name: 'Robert Vance', relation: 'Father', phone: '+1 (555) 900-2222', address: 'Chicago, IL' }
    },
    statutory: {
      ssn: 'XXX-XX-4412',
      taxFiling: 'Single W-4 (2 Allowances)',
      taxId: 'TIN-889102',
      bankAccount: 'Chase Bank ****8812',
      bankName: 'JPMorgan Chase Bank N.A.',
      routingNo: '121000358',
      pfAccount: 'PF-US-990124',
      healthInsId: 'ANTHEM-BLUE-90021'
    },
    compensation: {
      baseSalary: 180000,
      hra: 36000,
      specialAllowance: 24000,
      performanceBonus: 35000,
      stockOptions: '12,500 RSUs (Vested 75%)',
      totalCtc: 275000
    },
    education: [
      { degree: 'Master of Science (MS) in Computer Science', institution: 'Stanford University', year: '2009', gpa: '3.92/4.0' },
      { degree: 'Bachelor of Technology (B.Tech) in Software Engineering', institution: 'UC Berkeley', year: '2007', gpa: '3.85/4.0' }
    ],
    previousEmployment: [
      { company: 'Cloudflare Inc.', designation: 'Principal Architect', tenure: '2016-2021', lastCtc: '$195,000', relievingDoc: 'cloudflare_relieving.pdf' },
      { company: 'Oracle Tech Systems', designation: 'Staff Software Engineer', tenure: '2009-2016', lastCtc: '$145,000', relievingDoc: 'oracle_relieving.pdf' }
    ],
    documentsVault: [
      { name: 'Signed Employment Contract', type: 'PDF', date: '2021-03-10', verified: true },
      { name: 'Passport & Identity Verification', type: 'PDF', date: '2021-03-12', verified: true },
      { name: 'Stanford MS Degree Certificate', type: 'PDF', date: '2021-03-12', verified: true },
      { name: 'BGV Clearance Report (Kroll)', type: 'PDF', date: '2021-03-14', verified: true },
      { name: 'Form W-4 Tax Certificate', type: 'PDF', date: '2021-03-15', verified: true }
    ]
  },
  {
    id: 'EMP-1024',
    name: 'Sarah Jenkins',
    email: 'sarah.jenkins@nexus.com',
    personalEmail: 'sarah.j.tech@gmail.com',
    role: 'Director of Tech',
    department: 'Engineering',
    designation: 'Director of Tech',
    grade: 'E1',
    costCenter: 'CC-ENG-901',
    joiningDate: '2022-07-01',
    status: 'Confirmed',
    employmentType: 'Full-Time Permanent',
    phone: '+1 (555) 100-2024',
    workExtension: 'x4424',
    location: 'San Jose Headquarters, CA',
    workMode: 'Hybrid (4 days in office)',
    shiftRoster: 'Day Shift (09:00 - 18:00 PST)',
    manager: 'Marcus Vance',
    salary: 195000,
    probationStatus: 'Confirmed',
    probationTenure: 'Complied (6 Months)',
    noticePeriod: '45 Days',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
    personal: {
      dob: '1989-11-14',
      gender: 'Female',
      bloodGroup: 'A+',
      maritalStatus: 'Married',
      nationality: 'United States',
      passportNo: 'B99014521',
      residentialAddress: '1204 Blossom Hill Rd, San Jose, CA 95123',
      permanentAddress: '1204 Blossom Hill Rd, San Jose, CA 95123'
    },
    family: {
      spouseName: 'Tom Jenkins',
      dependents: 1,
      emergencyPrimary: { name: 'Tom Jenkins', relation: 'Spouse', phone: '+1 (555) 900-2222', address: 'San Jose, CA' },
      emergencySecondary: { name: 'Claire Jenkins', relation: 'Mother', phone: '+1 (555) 900-3333', address: 'Seattle, WA' }
    },
    statutory: {
      ssn: 'XXX-XX-9901',
      taxFiling: 'Married Jointly (1 Allowance)',
      taxId: 'TIN-449103',
      bankAccount: 'Wells Fargo ****1204',
      bankName: 'Wells Fargo Bank N.A.',
      routingNo: '121000024',
      pfAccount: 'PF-US-881204',
      healthInsId: 'KAISER-PERM-88102'
    },
    compensation: {
      baseSalary: 155000,
      hra: 28000,
      specialAllowance: 12000,
      performanceBonus: 20000,
      stockOptions: '8,000 RSUs (Vested 50%)',
      totalCtc: 215000
    },
    education: [
      { degree: 'B.S. in Electrical Engineering & CS', institution: 'MIT', year: '2011', gpa: '3.90/4.0' }
    ],
    previousEmployment: [
      { company: 'Salesforce Inc.', designation: 'Engineering Manager', tenure: '2017-2022', lastCtc: '$165,000', relievingDoc: 'salesforce_relieving.pdf' }
    ],
    documentsVault: [
      { name: 'Signed Offer Letter & Agreement', type: 'PDF', date: '2022-06-20', verified: true },
      { name: 'MIT Degree Certificate', type: 'PDF', date: '2022-06-25', verified: true },
      { name: 'BGV Clearance (Kroll)', type: 'PDF', date: '2022-06-28', verified: true }
    ]
  },
  {
    id: 'EMP-1040',
    name: 'David Miller',
    email: 'david.miller@nexus.com',
    personalEmail: 'david.m.design@gmail.com',
    role: 'Senior UI/UX Designer',
    department: 'Product Management',
    designation: 'Senior Designer',
    grade: 'P4',
    costCenter: 'CC-PROD-802',
    joiningDate: '2026-06-15',
    status: 'Probation',
    employmentType: 'Full-Time Permanent',
    phone: '+1 (555) 100-2040',
    workExtension: 'x4440',
    location: 'Remote - Austin, TX',
    workMode: '100% Remote',
    shiftRoster: 'Central Shift (08:30 - 17:30 CST)',
    manager: 'Alex Rivera',
    salary: 135000,
    probationStatus: 'Under Review (14 Days Remaining)',
    probationTenure: '4 Months of 6 Months',
    noticePeriod: '30 Days',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
    personal: {
      dob: '1993-04-12',
      gender: 'Male',
      bloodGroup: 'B+',
      maritalStatus: 'Single',
      nationality: 'United States',
      passportNo: 'C77120934',
      residentialAddress: '401 Congress Ave, Austin, TX 78701',
      permanentAddress: '401 Congress Ave, Austin, TX 78701'
    },
    family: {
      spouseName: 'N/A',
      dependents: 0,
      emergencyPrimary: { name: 'Jessica Miller', relation: 'Sister', phone: '+1 (555) 900-3333', address: 'Austin, TX' },
      emergencySecondary: { name: 'Arthur Miller', relation: 'Father', phone: '+1 (555) 900-4444', address: 'Dallas, TX' }
    },
    statutory: {
      ssn: 'XXX-XX-1124',
      taxFiling: 'Single W-4',
      taxId: 'TIN-778812',
      bankAccount: 'Bank of America ****3391',
      bankName: 'Bank of America N.A.',
      routingNo: '111000012',
      pfAccount: 'PF-US-771124',
      healthInsId: 'AETNA-SELECT-44012'
    },
    compensation: {
      baseSalary: 110000,
      hra: 15000,
      specialAllowance: 10000,
      performanceBonus: 12000,
      stockOptions: '3,000 RSUs',
      totalCtc: 147000
    },
    education: [
      { degree: 'Bachelor of Fine Arts (BFA) in Interaction Design', institution: 'Rhode Island School of Design (RISD)', year: '2015', gpa: '3.80/4.0' }
    ],
    previousEmployment: [
      { company: 'Figma Design Studio', designation: 'Senior UX Designer', tenure: '2020-2026', lastCtc: '$120,000', relievingDoc: 'figma_relieving.pdf' }
    ],
    documentsVault: [
      { name: 'Signed Employment Offer', type: 'PDF', date: '2026-06-01', verified: true },
      { name: 'RISD Degree Diploma', type: 'PDF', date: '2026-06-05', verified: true },
      { name: 'BGV Clearance (FirstAdvantage)', type: 'PDF', date: '2026-06-10', verified: true }
    ]
  },
  {
    id: 'EMP-1048',
    name: 'Rohan Mehta',
    email: 'rohan.mehta@nexus.com',
    personalEmail: 'rohan.m.dev@gmail.com',
    role: 'Senior Full Stack Lead',
    department: 'Engineering',
    designation: 'Senior Full Stack Lead',
    grade: 'L5',
    costCenter: 'CC-ENG-901',
    joiningDate: '2026-10-01',
    status: 'New Hire',
    employmentType: 'Full-Time Permanent',
    phone: '+1 (555) 998-1122',
    workExtension: 'x4448',
    location: 'San Jose Headquarters, CA',
    workMode: 'Hybrid (3 days in office)',
    shiftRoster: 'Day Shift (09:00 - 18:00 PST)',
    manager: 'Sarah Jenkins',
    salary: 155000,
    probationStatus: 'Probation Active (90 Days Left)',
    probationTenure: '0 Months of 3 Months',
    noticePeriod: '30 Days',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80',
    personal: {
      dob: '1991-08-30',
      gender: 'Male',
      bloodGroup: 'O+',
      maritalStatus: 'Married',
      nationality: 'United States',
      passportNo: 'D88910023',
      residentialAddress: '550 S 1st St, San Jose, CA 95113',
      permanentAddress: '550 S 1st St, San Jose, CA 95113'
    },
    family: {
      spouseName: 'Priya Mehta',
      dependents: 1,
      emergencyPrimary: { name: 'Priya Mehta', relation: 'Spouse', phone: '+1 (555) 998-2233', address: 'San Jose, CA' },
      emergencySecondary: { name: 'Sanjay Mehta', relation: 'Father', phone: '+1 (555) 998-4455', address: 'Fremont, CA' }
    },
    statutory: {
      ssn: 'XXX-XX-7788',
      taxFiling: 'Married Jointly',
      taxId: 'TIN-990144',
      bankAccount: 'Citibank ****5512',
      bankName: 'Citibank N.A.',
      routingNo: '021000089',
      pfAccount: 'PF-US-997788',
      healthInsId: 'CIGNA-HEALTH-55102'
    },
    compensation: {
      baseSalary: 130000,
      hra: 15000,
      specialAllowance: 10000,
      performanceBonus: 15000,
      stockOptions: '2,500 RSUs',
      totalCtc: 170000
    },
    education: [
      { degree: 'Master of Technology (M.Tech) in Computer Engineering', institution: 'San Jose State University (SJSU)', year: '2015', gpa: '3.88/4.0' }
    ],
    previousEmployment: [
      { company: 'Apex Cloud Systems', designation: 'Lead Frontend Engineer', tenure: '2019-2026', lastCtc: '$140,000', relievingDoc: 'apex_relieving.pdf' }
    ],
    documentsVault: [
      { name: 'Passport & Identity Verification', type: 'PDF', date: '2026-09-26', verified: true },
      { name: 'M.Tech Degree Certificate', type: 'PDF', date: '2026-09-26', verified: true },
      { name: 'BGV Clearance Report (Kroll)', type: 'PDF', date: '2026-09-26', verified: true },
      { name: 'Previous Employment Payslips', type: 'PDF', date: '2026-09-27', verified: true }
    ]
  }
];

export const PROBATION_REVIEWS = [
  {
    id: 'PROB-101',
    empId: 'EMP-1040',
    empName: 'David Miller',
    dept: 'Product Management',
    joiningDate: '2026-06-15',
    probationEndDate: '2026-10-15',
    daysRemaining: 14,
    goalsStatus: '3/3 Objectives Achieved (Design System V2 completed ahead of schedule)',
    managerRating: 4.8,
    managerRecommendation: 'Confirm Employee', // 'Confirm Employee' | 'Extend Probation' | 'Exit Process'
    hrReviewStatus: 'Pending Final Confirmation',
    comments: 'David has integrated seamlessly into the design team and raised UI design quality immensely.'
  }
];

export const ATTENDANCE_RECORDS = [
  { id: 'ATT-01', empId: 'EMP-1001', name: 'Marcus Vance', date: '2026-09-29', checkIn: '08:52 AM', checkOut: '06:15 PM', hours: 9.38, status: 'Present', mode: 'Biometric Scanner Gate A' },
  { id: 'ATT-02', empId: 'EMP-1024', name: 'Sarah Jenkins', date: '2026-09-29', checkIn: '09:04 AM', checkOut: '05:50 PM', hours: 8.76, status: 'Present', mode: 'Mobile ESS Punch' },
  { id: 'ATT-03', empId: 'EMP-1040', name: 'David Miller', date: '2026-09-29', checkIn: '09:30 AM', checkOut: '06:00 PM', hours: 8.50, status: 'Present (Remote)', mode: 'Web IP Gateway' },
  { id: 'ATT-04', empId: 'EMP-1048', name: 'Rohan Mehta', date: '2026-09-29', checkIn: '--', checkOut: '--', hours: 0, status: 'Onboarding Prep', mode: 'System' },
];

export const LEAVE_BALANCES = [
  { empId: 'EMP-1024', name: 'Sarah Jenkins', casualLeave: 8, sickLeave: 6, earnedLeave: 14, maternityPaternity: 0, totalRemaining: 28 },
  { empId: 'EMP-1040', name: 'David Miller', casualLeave: 4, sickLeave: 5, earnedLeave: 6, maternityPaternity: 0, totalRemaining: 15 },
  { empId: 'EMP-1048', name: 'Rohan Mehta', casualLeave: 12, sickLeave: 10, earnedLeave: 15, maternityPaternity: 0, totalRemaining: 37 },
];

export const LEAVE_REQUESTS = [
  {
    id: 'LR-901',
    empId: 'EMP-1040',
    empName: 'David Miller',
    dept: 'Product Management',
    leaveType: 'Earned Leave (EL)',
    startDate: '2026-10-12',
    endDate: '2026-10-16',
    days: 5,
    reason: 'Annual family vacation trip to Hawaii',
    appliedDate: '2026-09-25',
    status: 'Pending Manager Approval',
    manager: 'Alex Rivera'
  },
  {
    id: 'LR-898',
    empId: 'EMP-1024',
    empName: 'Sarah Jenkins',
    dept: 'Engineering',
    leaveType: 'Casual Leave (CL)',
    startDate: '2026-09-18',
    endDate: '2026-09-18',
    days: 1,
    reason: 'Personal home maintenance appointment',
    appliedDate: '2026-09-16',
    status: 'Approved',
    manager: 'Marcus Vance'
  }
];

export const PAYROLL_RUNS = [
  {
    period: 'September 2026',
    totalEmployees: 382,
    grossSalary: 1420000,
    totalDeductions: 284000,
    netPayout: 1136000,
    status: 'Pending HR Lock',
    stepIndex: 3, // 1: Inputs, 2: Calculation & Adjustments, 3: Approval & Lock, 4: Payslip Gen, 5: Bank Transfer
    breakdown: {
      basicPay: 852000,
      hra: 340800,
      specialAllowance: 142000,
      reimbursements: 85200,
      taxDeductions: 198800,
      providentFund: 85200
    }
  }
];

export const EXPENSE_CLAIMS = [
  {
    id: 'EXP-4091',
    empId: 'EMP-1024',
    empName: 'Sarah Jenkins',
    dept: 'Engineering',
    category: 'Client Tech Dinner & Summit',
    amount: 485.50,
    date: '2026-09-22',
    receiptAttached: true,
    receiptUrl: 'receipt_dinner_sept22.pdf',
    policyStatus: 'Compliant (Under $500 Meal Cap)',
    managerApproval: 'Approved',
    financeApproval: 'Pending Payout',
    status: 'Approved for Payout'
  },
  {
    id: 'EXP-4095',
    empId: 'EMP-1040',
    empName: 'David Miller',
    dept: 'Product Management',
    category: 'Home Office Ergonomic Monitor',
    amount: 620.00,
    date: '2026-09-26',
    receiptAttached: true,
    receiptUrl: 'receipt_monitor_dell.pdf',
    policyStatus: 'Exception (Exceeds $500 Home Cap by $120)',
    managerApproval: 'Approved (Exception Granted)',
    financeApproval: 'Under Review',
    status: 'Pending Finance Exception Approval'
  }
];

export const ASSET_INVENTORY = [
  { id: 'AST-1001', title: 'MacBook Pro 16" M3 Max', category: 'Laptop', serial: 'C02G8912KLM', assignedTo: 'EMP-1001 (Marcus Vance)', status: 'Allocated', condition: 'Excellent' },
  { id: 'AST-1002', title: 'MacBook Pro 14" M3', category: 'Laptop', serial: 'C02H9914RST', assignedTo: 'EMP-1024 (Sarah Jenkins)', status: 'Allocated', condition: 'Excellent' },
  { id: 'AST-1003', title: 'Dell UltraSharp 32" 4K', category: 'Monitor', serial: 'CN08821990', assignedTo: 'EMP-1040 (David Miller)', status: 'Allocated', condition: 'New' },
  { id: 'AST-1004', title: 'MacBook Air M3 15"', category: 'Laptop', serial: 'C02J1122ABC', assignedTo: 'Unassigned (Reserved for Sophia Chen)', status: 'In Stock / Reserved', condition: 'Brand New In Box' },
  { id: 'AST-1005', title: 'Nexus Smart Key Card', category: 'Security Badge', serial: 'BADGE-8821', assignedTo: 'EMP-1048 (Rohan Mehta)', status: 'Allocated', condition: 'Active' },
];

export const TRAINING_COURSES = [
  { id: 'TRN-201', title: 'Enterprise Data Security & ISO 27001 Compliance', category: 'Mandatory Compliance', duration: '2 Hours', enrolledCount: 382, completionRate: '94%', mandatory: true },
  { id: 'TRN-202', title: 'AI Engineering & Prompt Architecture Masterclass', category: 'Technical Upskilling', duration: '12 Hours', enrolledCount: 65, completionRate: '68%', mandatory: false },
  { id: 'TRN-203', title: 'Inclusive Leadership & High Performance Coaching', category: 'Management Development', duration: '6 Hours', enrolledCount: 28, completionRate: '85%', mandatory: false },
];

export const PERFORMANCE_REVIEWS = [
  {
    empId: 'EMP-1024',
    name: 'Sarah Jenkins',
    dept: 'Engineering',
    period: '2026 Annual Cycle',
    selfRating: 4.7,
    managerRating: 4.8,
    finalScore: 4.75,
    ratingCategory: 'Exceeds Expectations (High Potential)',
    smartGoals: [
      { goal: 'Deliver Cloud Multi-Region Migration', progress: 100, status: 'Achieved' },
      { goal: 'Reduce P99 API Latency < 120ms', progress: 95, status: 'Achieved' },
      { goal: 'Hire 8 Core Senior Engineers', progress: 87, status: 'In Progress' }
    ],
    nineBoxGrid: 'Star / High Performer - High Potential',
    incrementRecommended: '12.5% Merit Increase + Stock Refresh'
  }
];

export const EXIT_CASES = [
  {
    id: 'EXIT-2026-012',
    empId: 'EMP-992',
    empName: 'Julian Thorne',
    designation: 'Staff DevOps Engineer',
    dept: 'Engineering',
    exitType: 'Resignation (Better Opportunity)',
    resignationDate: '2026-09-01',
    lastWorkingDay: '2026-10-01',
    noticePeriodServed: '30 Days',
    handoverPerson: 'Rohan Mehta',
    handoverStatus: 'Task & Repo Knowledge Transfer 100% Complete',
    clearances: {
      managerClearance: true,
      hrClearance: true,
      itAccessRevoked: true,
      assetReturnVerified: true,
      financeNoDuesClear: true
    },
    settlement: {
      basicDue: 12500,
      leaveEncashmentDays: 14,
      leaveEncashmentAmount: 6200,
      noticePeriodWaiver: '$0',
      totalGrossSettlement: 18700,
      taxDeduction: 3400,
      netFinalPayout: 15300
    },
    documentsGenerated: {
      relievingLetter: true,
      experienceCertificate: true,
      noDuesCertificate: true
    },
    status: 'Ready for Exit Completion'
  }
];

export const SMART_ALERTS = [
  { id: 'ALT-01', type: 'Probation Alert', title: 'Probation Ending in 14 Days', desc: 'David Miller (Senior UI/UX Designer) probation review is pending manager sign-off.', urgency: 'High', actionModule: 'probation' },
  { id: 'ALT-02', type: 'Budget Warning', title: 'Budget Utilization > 90%', desc: 'Engineering Dept has utilized $3.45M of $4.2M annual hiring budget.', urgency: 'Medium', actionModule: 'workforce' },
  { id: 'ALT-03', type: 'Requisition Exception', title: 'Off-Cycle Budget Exception Request', desc: 'REQ-2026-092 for Staff AI Product Manager requires Finance Director approval.', urgency: 'High', actionModule: 'requisition' },
  { id: 'ALT-04', type: 'Offboarding', title: 'Final Settlement Clearance Pending', desc: 'Julian Thorne (EXIT-2026-012) last working day is Oct 1st. F&F clear to execute.', urgency: 'Medium', actionModule: 'exit' },
  { id: 'ALT-05', type: 'Celebration', title: 'Upcoming Work Anniversary', desc: 'Sarah Jenkins celebrates 4 years with Nexus HRMS on July 1st.', urgency: 'Low', actionModule: 'employees' },
];
