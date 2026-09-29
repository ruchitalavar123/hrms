import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  DollarSign, 
  Briefcase, 
  CheckSquare, 
  Bell, 
  Search, 
  ShieldCheck, 
  Workflow, 
  Layers,
  Sparkles,
  ChevronDown,
  Sun,
  Moon
} from 'lucide-react';

export default function Header({ 
  activeRole, 
  setActiveRole, 
  activeModule, 
  setActiveModule, 
  viewMode, 
  setViewMode, 
  unreadAlertsCount, 
  setShowAlertsDrawer, 
  setShowFoundationModal,
  metrics,
  searchQuery,
  setSearchQuery
}) {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
    if (!isLightTheme) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  };

  const roles = [
    { id: 'HR Admin', label: '👑 HR Admin / Director' },
    { id: 'Hiring Manager', label: '👔 Hiring Manager' },
    { id: 'Employee', label: '👤 Employee (ESS)' },
    { id: 'Recruiter', label: '🎯 Recruiter' },
    { id: 'Finance', label: '💰 Finance Officer' },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'var(--bg-surface)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '0.75rem 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.65rem',
      boxShadow: 'var(--shadow-sm)'
    }}>
      {/* Top Main Navigation Row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        
        {/* Logo & App Name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #1e40af 0%, #0284c7 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(30, 64, 175, 0.4)',
            color: '#ffffff'
          }}>
            <Workflow size={22} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <h1 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '0.04em' }}>
                HRMS
              </h1>
            </div>
            <p style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
              End-To-End Workforce Planning to Exit Flow Demo
            </p>
          </div>
        </div>

        {/* Global Search Bar */}
        <div style={{ flex: '1', maxWidth: '360px', position: 'relative' }}>
          <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input 
            type="text" 
            placeholder="Search employees, requisitions, candidates..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input" 
            style={{ paddingLeft: '2.3rem', height: '38px', borderRadius: 'var(--radius-full)' }}
          />
        </div>

        {/* Action Controls & Role Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          
          {/* Theme Toggle Button: Slate Dark vs Alpine Light */}
          <button
            onClick={toggleTheme}
            className="btn btn-secondary btn-sm"
            style={{ height: '38px', gap: '0.4rem', border: '1px solid var(--border-subtle)' }}
            title="Toggle Executive Light / Dark Theme"
          >
            {isLightTheme ? <Moon size={15} color="#d97706" /> : <Sun size={15} color="#fbbf24" />}
            <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>{isLightTheme ? 'Midnight Theme' : 'Alpine Light'}</span>
          </button>

          {/* View Mode Toggle: Interactive Flow Map vs Direct Dashboard */}
          <div style={{
            display: 'inline-flex',
            background: 'var(--bg-main)',
            padding: '3px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)'
          }}>
            <button
              onClick={() => setViewMode('diagram')}
              className={`btn btn-sm ${viewMode === 'diagram' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ border: 'none', padding: '0.35rem 0.75rem' }}
            >
              <Workflow size={14} /> Interactive Flow Map
            </button>
            <button
              onClick={() => setViewMode('modules')}
              className={`btn btn-sm ${viewMode === 'modules' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ border: 'none', padding: '0.35rem 0.75rem' }}
            >
              <Layers size={14} /> Module Workspace
            </button>
          </div>

          {/* Role Switcher Pill */}
          <div style={{ position: 'relative' }}>
            <select
              value={activeRole}
              onChange={(e) => setActiveRole(e.target.value)}
              className="form-select"
              style={{
                height: '38px',
                fontSize: '0.8rem',
                fontWeight: 600,
                background: 'var(--primary-light)',
                color: 'var(--primary)',
                borderColor: 'var(--border-glow)'
              }}
            >
              {roles.map(r => (
                <option key={r.id} value={r.id} style={{ background: 'var(--bg-card)', color: 'var(--text-main)' }}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>

          {/* System Foundation & RBAC Button */}
          <button 
            onClick={() => setShowFoundationModal(true)}
            className="btn btn-secondary btn-sm"
            title="View System Foundation, RBAC & Approval Engine"
            style={{ height: '38px' }}
          >
            <ShieldCheck size={16} /> Foundation & RBAC
          </button>

          {/* Smart Alerts Bell */}
          <button 
            onClick={() => setShowAlertsDrawer(true)}
            style={{
              position: 'relative',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-main)'
            }}
            title="Smart Automation & Alerts"
          >
            <Bell size={18} />
            {unreadAlertsCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                backgroundColor: 'var(--accent-rose)',
                color: '#fff',
                fontSize: '0.65rem',
                fontWeight: 800,
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 8px rgba(225, 29, 72, 0.6)'
              }}>
                {unreadAlertsCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Bottom Quick KPI Stats Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        paddingTop: '0.4rem',
        borderTop: '1px dashed var(--border-subtle)',
        fontSize: '0.775rem',
        color: 'var(--text-secondary)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', overflowX: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Users size={14} color="var(--primary)" />
            <span>Headcount: <strong>{metrics.totalHeadcount} / {metrics.headcountTarget}</strong></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <DollarSign size={14} color="var(--accent-emerald)" />
            <span>Budget: <strong>${(metrics.budgetAllocated / 1000000).toFixed(2)}M / ${(metrics.budgetTotal / 1000000).toFixed(2)}M</strong></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Briefcase size={14} color="var(--accent-amber)" />
            <span>Open Requisitions: <strong>{metrics.openRequisitions}</strong></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <CheckSquare size={14} color="var(--accent-purple)" />
            <span>Pending Approvals: <strong>{metrics.pendingApprovals}</strong></span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="badge badge-emerald" style={{ fontSize: '0.65rem' }}>
            <Sparkles size={10} /> Mode: Client Interactive Demo (No Backend Required)
          </span>
        </div>
      </div>
    </header>
  );
}
