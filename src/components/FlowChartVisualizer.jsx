import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  HelpCircle, 
  UserCheck, 
  FileText, 
  Layers, 
  ShieldCheck, 
  DollarSign, 
  Users, 
  Building2, 
  Briefcase, 
  Zap, 
  ChevronRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function FlowChartVisualizer({ onSelectModule }) {
  const [activeHoverNode, setActiveHoverNode] = useState(null);

  const topModules = [
    {
      num: 1,
      key: 'workforce',
      title: '1. WORKFORCE PLANNING & BUDGETING',
      color: '#4f46e5',
      bullets: ['Annual Budget', 'Dept Budget', 'Designation / Grade', 'Headcount Planning', 'Salary Budget', 'Budget Approval'],
      output: 'Approved Budget & Headcount Plan'
    },
    {
      num: 2,
      key: 'requisition',
      title: '2. MANPOWER REQUISITION',
      color: '#3b82f6',
      bullets: ['Requisition Raised', 'No. of Vacancy', 'Hiring Manager', 'Employment Type', 'Expected DOJ'],
      hasBranch: true,
      branchLabel: 'Budget Check'
    },
    {
      num: 3,
      key: 'jd',
      title: '3. JOB DESCRIPTION (JD)',
      color: '#8b5cf6',
      bullets: ['Designation', 'Roles & Responsibilities', 'Skills & Competency', 'Experience Criteria', 'Salary Range'],
      output: 'Approved JD Status'
    },
    {
      num: 4,
      key: 'sourcing',
      title: '4. RECRUITMENT & SOURCING',
      color: '#f59e0b',
      bullets: ['Internal Sourcing (IJP & Referral)', 'External Sourcing (LinkedIn/Naukri)', 'Company Careers Page', 'Campus & Agencies'],
      output: 'Campaign Management'
    },
    {
      num: 5,
      key: 'candidate',
      title: '5. CANDIDATE & APPLICATION',
      color: '#06b6d4',
      bullets: ['Candidate Master (Candidate ID)', 'Application ID', 'Resume & Experience', 'Source & Contact Details'],
      output: 'Application Master'
    },
    {
      num: 6,
      key: 'screening',
      title: '6. SCREENING & INTERVIEW',
      color: '#0284c7',
      bullets: ['Resume Screening', 'Interview Scheduling', 'Tech / HR / Managerial Rounds', 'Interviewer Scorecard'],
      output: 'Recommendations'
    },
    {
      num: 7,
      key: 'offer',
      title: '7. SELECTION & OFFER PROCESS',
      color: '#10b981',
      bullets: ['Candidate Selected', 'Compensation Check', 'Offer Approval', 'Offer Letter Generated & Released'],
      output: 'Offer Accepted / Declined'
    },
    {
      num: 8,
      key: 'documents',
      title: '8. DOCUMENT COLLECTION',
      color: '#f97316',
      bullets: ['Document Checklist', 'Secure Link Sent', 'Candidate Uploads', 'HR Verification'],
      output: 'Document Status Accepted'
    },
    {
      num: 9,
      key: 'bgv',
      title: '9. BACKGROUND VERIFICATION',
      color: '#d97706',
      bullets: ['BGV Initiated (Vendor/Internal)', 'Previous Employment & Education', 'Identity & Address Check', 'Criminal Record Check'],
      output: 'BGV Outcome: Clear / Exception'
    },
    {
      num: 10,
      key: 'onboarding',
      title: '10. ONBOARDING & INDUCTION',
      color: '#0d9488',
      bullets: ['Pre-Onboarding Welcome Kit', 'Policy Acceptance', 'IT System Access Provisioning', 'Dept Introduction & Joining Confirm'],
      output: 'Outcome: Joined'
    },
    {
      num: 11,
      key: 'employee_master',
      title: '11. EMPLOYEE MASTER',
      color: '#1e40af',
      bullets: ['Employee ID Generated', 'Personal & Family Details', 'Statutory & Bank Account', 'Compensation & Employment Details'],
      output: 'Employee Master Record Created'
    }
  ];

  const middleModules = [
    { num: 12, key: 'probation', title: '12. PROBATION MANAGEMENT', color: '#16a34a', bullets: ['Probation Period Setup', '30-60-90 Goals', 'Manager Review', 'Decision: Confirm / Extend / Exit'] },
    { num: 13, key: 'attendance', title: '13. ATTENDANCE & TIME', color: '#2563eb', bullets: ['Shift & Roster Scheduler', 'Biometric & System Capture', 'Overtime Calculation', 'Regularization Requests'] },
    { num: 14, key: 'leave', title: '14. LEAVE MANAGEMENT', color: '#9333ea', bullets: ['Leave Policy & Accruals', 'Holiday Calendar', 'Leave Request & Approvals', 'Encashment & Balance Ledger'] },
    { num: 15, key: 'payroll', title: '15. PAYROLL MANAGEMENT', color: '#059669', bullets: ['Salary & Attendance Inputs', 'Payroll Lock & Calculation', 'Payslip PDF Generation', 'Bank Transfer File Export'] },
    { num: 16, key: 'expense', title: '16. EXPENSE MANAGEMENT', color: '#ea580c', bullets: ['Expense Submission', 'Policy & Budget Checks', 'Manager & Finance Approval', 'Reimbursement Payout'] },
    { num: 17, key: 'asset', title: '17. ASSET MANAGEMENT', color: '#0891b2', bullets: ['Asset Policy & Request', 'Allocation & ID Badge', 'Laptop & Mobile Tracking', 'Asset Return & Clearance'] },
    { num: 18, key: 'learning', title: '18. LEARNING & DEVELOPMENT', color: '#4f46e5', bullets: ['Training Needs Matrix', 'Mandatory Compliance', 'Skill & Certification Tracking', 'E-Learning Progress'] },
    { num: 19, key: 'performance', title: '19. PERFORMANCE (PMS)', color: '#ca8a04', bullets: ['SMART Goal Setting & KRAs', 'Mid & Year End Reviews', '9-Box Rating Matrix', 'Increment & Promotion Plan'] },
    { num: 20, key: 'ess', title: '20. EMPLOYEE SELF SERVICE (ESS)', color: '#e11d48', bullets: ['Profile Updates', 'Apply Leave & Punch', 'View Payslips & Tax', 'Raise HR Ticket'] },
    { num: 21, key: 'mss', title: '21. MANAGER SELF SERVICE (MSS)', color: '#c026d3', bullets: ['Team Attendance View', 'Approve Leaves & Expenses', 'Probation & Performance Reviews', 'Hiring Requisition Requests'] },
  ];

  const exitSteps = [
    { step: 1, name: '1. Exit Initiated', desc: 'Resignation, Termination, Retirement' },
    { step: 2, name: '2. Exit Approval', desc: 'Manager & HR Approval, Last Working Date' },
    { step: 3, name: '3. Notice Period', desc: 'Tracking & Waiver Options' },
    { step: 4, name: '4. Handover Process', desc: 'Task & Knowledge Transfer' },
    { step: 5, name: '5. Mandatory Clearances', desc: 'Manager, HR, IT, Asset, Finance' },
    { step: 6, name: '6. Final Settlement', desc: 'Full & Final Calc, Leave Encashment' },
    { step: 7, name: '7. Document Generation', desc: 'Relieving & Experience Letters' },
    { step: 8, name: '8. Exit Completion', desc: 'Employee Status -> EXITED' }
  ];

  return (
    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Visual Header Banner */}
      <div className="glass-card" style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)',
        borderLeft: '4px solid var(--primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
            <span className="badge badge-indigo">Complete Architecture Map</span>
            <span className="badge badge-emerald">Interactive Clickable Flowchart</span>
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
            HRM SYSTEM – END TO END WORKFLOW & MODULE CONNECTIVITY
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            One Complete Employee Lifecycle – From Workforce Planning to Exit (Click any module node to enter its live interface!)
          </p>
        </div>

        {/* Legend */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          background: 'rgba(15, 23, 42, 0.8)',
          padding: '0.6rem 1rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)',
          fontSize: '0.725rem'
        }}>
          <div><strong style={{ color: '#fff' }}>Roles Legend:</strong></div>
          <span style={{ color: '#c084fc' }}>● Manager</span>
          <span style={{ color: '#818cf8' }}>● HR</span>
          <span style={{ color: '#22d3ee' }}>● Recruiter</span>
          <span style={{ color: '#fbbf24' }}>● Finance</span>
          <span style={{ color: '#fb7185' }}>● Employee</span>
          <span style={{ color: '#34d399' }}>● Director</span>
        </div>
      </div>

      {/* PHASE 1 & 2: RECRUITMENT & ONBOARDING FLOW (MODULES 1 to 11) */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#6366f1' }}></div>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#a5b4fc' }}>
            PHASE 1 & 2: WORKFORCE PLANNING, RECRUITMENT & ONBOARDING (MODULES 1 – 11)
          </h3>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '0.85rem',
          position: 'relative'
        }}>
          {topModules.map((mod) => (
            <div
              key={mod.key}
              onClick={() => onSelectModule(mod.key)}
              onMouseEnter={() => setActiveHoverNode(mod.key)}
              onMouseLeave={() => setActiveHoverNode(null)}
              className="glass-card glow-on-hover"
              style={{
                padding: '1rem',
                cursor: 'pointer',
                borderTop: `3px solid ${mod.color}`,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '220px',
                background: activeHoverNode === mod.key ? 'rgba(30, 41, 59, 0.95)' : 'var(--bg-card)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{
                    fontSize: '0.675rem',
                    fontWeight: 800,
                    padding: '0.15rem 0.45rem',
                    borderRadius: '4px',
                    backgroundColor: `${mod.color}25`,
                    color: mod.color,
                    border: `1px solid ${mod.color}40`
                  }}>
                    MODULE {mod.num}
                  </span>
                  <ExternalLink size={14} color="var(--text-muted)" />
                </div>

                <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  {mod.title.replace(/^\d+\.\s*/, '')}
                </h4>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.725rem', color: 'var(--text-secondary)' }}>
                  {mod.bullets.map((b, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.2rem' }}>
                      <span style={{ color: mod.color }}>›</span> {b}
                    </li>
                  ))}
                </ul>
              </div>

              {mod.output && (
                <div style={{
                  marginTop: '0.75rem',
                  paddingTop: '0.5rem',
                  borderTop: '1px dashed var(--border-subtle)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  color: mod.color,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}>
                  <CheckCircle2 size={12} /> {mod.output}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* PHASE 3: POST-JOINING EMPLOYEE LIFECYCLE (MODULES 12 to 21) */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></div>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fcd34d' }}>
            PHASE 3: POST-JOINING EMPLOYEE LIFECYCLE & OPERATIONS (MODULES 12 – 21)
          </h3>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '0.85rem'
        }}>
          {middleModules.map((mod) => (
            <div
              key={mod.key}
              onClick={() => onSelectModule(mod.key)}
              onMouseEnter={() => setActiveHoverNode(mod.key)}
              onMouseLeave={() => setActiveHoverNode(null)}
              className="glass-card glow-on-hover"
              style={{
                padding: '1rem',
                cursor: 'pointer',
                borderTop: `3px solid ${mod.color}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '190px',
                background: activeHoverNode === mod.key ? 'rgba(30, 41, 59, 0.95)' : 'var(--bg-card)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{
                    fontSize: '0.675rem',
                    fontWeight: 800,
                    padding: '0.15rem 0.45rem',
                    borderRadius: '4px',
                    backgroundColor: `${mod.color}25`,
                    color: mod.color,
                    border: `1px solid ${mod.color}40`
                  }}>
                    MODULE {mod.num}
                  </span>
                  <ExternalLink size={14} color="var(--text-muted)" />
                </div>

                <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  {mod.title.replace(/^\d+\.\s*/, '')}
                </h4>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.725rem', color: 'var(--text-secondary)' }}>
                  {mod.bullets.map((b, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.2rem' }}>
                      <span style={{ color: mod.color }}>›</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PHASE 4: MODULE 22 - EXIT MANAGEMENT WORKFLOW */}
      <div 
        onClick={() => onSelectModule('exit')}
        className="glass-card glow-on-hover" 
        style={{
          padding: '1.25rem',
          borderTop: '4px solid #f43f5e',
          cursor: 'pointer',
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(244, 63, 94, 0.08) 100%)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="badge badge-rose">MODULE 22</span>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>
                22. EXIT MANAGEMENT WORKFLOW (COMPLETE OFFBOARDING PROCESS)
              </h3>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
              End-to-end 8-Step Offboarding Pipeline with Mandatory Clearances & F&F Settlement
            </p>
          </div>

          <button className="btn btn-danger btn-sm">
            Launch Offboarding Workspace <ChevronRight size={14} />
          </button>
        </div>

        {/* 8-Step Exit Flow Ribbon */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '0.65rem'
        }}>
          {exitSteps.map((s) => (
            <div key={s.step} style={{
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '0.65rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#fb7185', marginBottom: '0.2rem' }}>
                {s.name}
              </div>
              <div style={{ fontSize: '0.675rem', color: 'var(--text-muted)' }}>
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
