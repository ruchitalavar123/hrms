import React from 'react';
import { 
  BarChart3, 
  FileText, 
  BookOpen, 
  Target, 
  UserPlus, 
  Calendar, 
  Award, 
  FolderCheck, 
  ShieldCheck, 
  UserCheck, 
  Users, 
  Clock, 
  CalendarDays, 
  Calculator, 
  Receipt, 
  Laptop, 
  GraduationCap, 
  TrendingUp, 
  User, 
  UserCog, 
  LogOut,
  Workflow,
  PieChart
} from 'lucide-react';

export const MODULE_LIST = [
  // Phase 1: Planning & Sourcing
  { id: 1, key: 'workforce', name: 'Workforce Planning & Budgeting', phase: 'Planning & Sourcing', icon: BarChart3, badge: 'Mod 1', color: '#818cf8' },
  { id: 2, key: 'requisition', name: 'Manpower Requisition', phase: 'Planning & Sourcing', icon: FileText, badge: 'Mod 2', color: '#818cf8' },
  { id: 3, key: 'jd', name: 'Job Description (JD) Hub', phase: 'Planning & Sourcing', icon: BookOpen, badge: 'Mod 3', color: '#818cf8' },
  { id: 4, key: 'sourcing', name: 'Recruitment & Sourcing', phase: 'Planning & Sourcing', icon: Target, badge: 'Mod 4', color: '#818cf8' },

  // Phase 2: Selection & Hiring
  { id: 5, key: 'candidate', name: 'Candidate & Application Master', phase: 'Selection & Hiring', icon: UserPlus, badge: 'Mod 5', color: '#22d3ee' },
  { id: 6, key: 'screening', name: 'Screening & Interview Hub', phase: 'Selection & Hiring', icon: Calendar, badge: 'Mod 6', color: '#22d3ee' },
  { id: 7, key: 'offer', name: 'Selection & Offer Process', phase: 'Selection & Hiring', icon: Award, badge: 'Mod 7', color: '#22d3ee' },
  { id: 8, key: 'documents', name: 'Document Collection', phase: 'Selection & Hiring', icon: FolderCheck, badge: 'Mod 8', color: '#22d3ee' },
  { id: 9, key: 'bgv', name: 'Background Verification (BGV)', phase: 'Selection & Hiring', icon: ShieldCheck, badge: 'Mod 9', color: '#22d3ee' },
  { id: 10, key: 'onboarding', name: 'Onboarding & Induction', phase: 'Selection & Hiring', icon: UserCheck, badge: 'Mod 10', color: '#22d3ee' },
  { id: 11, key: 'employee_master', name: 'Employee Master Registry', phase: 'Selection & Hiring', icon: Users, badge: 'Mod 11', color: '#22d3ee' },

  // Phase 3: Post Joining Operations
  { id: 12, key: 'probation', name: 'Probation Management', phase: 'Employee Lifecycle', icon: Clock, badge: 'Mod 12', color: '#fbbf24' },
  { id: 13, key: 'attendance', name: 'Attendance & Time Management', phase: 'Employee Lifecycle', icon: Clock, badge: 'Mod 13', color: '#fbbf24' },
  { id: 14, key: 'leave', name: 'Leave Management Engine', phase: 'Employee Lifecycle', icon: CalendarDays, badge: 'Mod 14', color: '#fbbf24' },
  { id: 15, key: 'payroll', name: 'Payroll Management', phase: 'Employee Lifecycle', icon: Calculator, badge: 'Mod 15', color: '#34d399' },
  { id: 16, key: 'expense', name: 'Expense Management', phase: 'Employee Lifecycle', icon: Receipt, badge: 'Mod 16', color: '#fbbf24' },
  { id: 17, key: 'asset', name: 'Asset Management', phase: 'Employee Lifecycle', icon: Laptop, badge: 'Mod 17', color: '#fbbf24' },
  { id: 18, key: 'learning', name: 'Learning & Development (L&D)', phase: 'Employee Lifecycle', icon: GraduationCap, badge: 'Mod 18', color: '#c084fc' },
  { id: 19, key: 'performance', name: 'Performance Management (PMS)', phase: 'Employee Lifecycle', icon: TrendingUp, badge: 'Mod 19', color: '#c084fc' },
  { id: 20, key: 'ess', name: 'Employee Self Service (ESS)', phase: 'Portals & Services', icon: User, badge: 'Mod 20', color: '#fb7185' },
  { id: 21, key: 'mss', name: 'Manager Self Service (MSS)', phase: 'Portals & Services', icon: UserCog, badge: 'Mod 21', color: '#fb7185' },

  // Phase 4: Exit Management
  { id: 22, key: 'exit', name: 'Exit Management Workflow', phase: 'Offboarding', icon: LogOut, badge: 'Mod 22', color: '#f43f5e' },
];

export default function Sidebar({ activeModuleKey, setActiveModuleKey, viewMode, setViewMode }) {
  const phases = [
    { title: 'Interactive Map', items: [{ key: 'flow_map', name: 'End-to-End Diagram Map', icon: Workflow, isDiagram: true }] },
    { title: '1. Sourcing & Planning', items: MODULE_LIST.filter(m => m.phase === 'Planning & Sourcing') },
    { title: '2. Selection & Onboarding', items: MODULE_LIST.filter(m => m.phase === 'Selection & Hiring') },
    { title: '3. Employee Lifecycle', items: MODULE_LIST.filter(m => m.phase === 'Employee Lifecycle') },
    { title: '4. Portals & Offboarding', items: MODULE_LIST.filter(m => m.phase === 'Portals & Services' || m.phase === 'Offboarding') },
  ];

  return (
    <aside style={{
      width: '280px',
      minWidth: '280px',
      backgroundColor: 'var(--bg-surface)',
      borderRight: '1px solid var(--border-subtle)',
      height: 'calc(100vh - 85px)',
      overflowY: 'auto',
      padding: '1rem 0.75rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem'
    }}>
      {phases.map((group, gIdx) => (
        <div key={gIdx}>
          <h3 style={{
            fontSize: '0.675rem',
            fontWeight: 800,
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.5rem',
            paddingLeft: '0.5rem'
          }}>
            {group.title}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            {group.items.map((mod) => {
              const Icon = mod.icon;
              const isActive = mod.isDiagram 
                ? viewMode === 'diagram' 
                : (viewMode === 'modules' && activeModuleKey === mod.key);

              return (
                <button
                  key={mod.key}
                  onClick={() => {
                    if (mod.isDiagram) {
                      setViewMode('diagram');
                    } else {
                      setViewMode('modules');
                      setActiveModuleKey(mod.key);
                    }
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '0.55rem 0.65rem',
                    borderRadius: 'var(--radius-md)',
                    border: 'none',
                    background: isActive ? 'linear-gradient(90deg, rgba(99, 102, 241, 0.25) 0%, rgba(99, 102, 241, 0.05) 100%)' : 'transparent',
                    borderLeft: isActive ? '3px solid var(--primary)' : '3px solid transparent',
                    color: isActive ? '#ffffff' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', overflow: 'hidden' }}>
                    <Icon size={16} color={isActive ? '#818cf8' : mod.color || 'var(--text-muted)'} />
                    <span style={{ fontSize: '0.8rem', fontWeight: isActive ? 700 : 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {mod.name}
                    </span>
                  </div>

                  {mod.badge && (
                    <span style={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      padding: '0.15rem 0.4rem',
                      borderRadius: '4px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      color: mod.color || 'var(--text-muted)'
                    }}>
                      {mod.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </aside>
  );
}
