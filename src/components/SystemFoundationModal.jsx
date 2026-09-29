import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Bell, 
  FileText, 
  Share2, 
  Lock, 
  CheckCircle2, 
  X,
  Users
} from 'lucide-react';

export default function SystemFoundationModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('rbac');

  if (!isOpen) return null;

  const rbacMatrix = [
    { module: 'Workforce Planning & Budgeting', hrAdmin: 'Full Access', manager: 'View Dept Only', recruiter: 'No Access', employee: 'No Access', finance: 'Approve Budget' },
    { module: 'Manpower Requisitions', hrAdmin: 'Full Access', manager: 'Create & View', recruiter: 'View Open', employee: 'No Access', finance: 'Approve Exception' },
    { module: 'Screening & Interview', hrAdmin: 'Full Access', manager: 'Evaluate Candidate', recruiter: 'Schedule & Manage', employee: 'No Access', finance: 'No Access' },
    { module: 'Payroll Management', hrAdmin: 'Full Access', manager: 'No Access', recruiter: 'No Access', employee: 'View Own Payslip', finance: 'Lock & Payout' },
    { module: 'Exit Management & F&F', hrAdmin: 'Full Access', manager: 'Approve Handover', recruiter: 'No Access', employee: 'View Status', finance: 'Clear No-Dues' },
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ maxWidth: '820px', padding: '1.5rem' }}>
        
        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShieldCheck size={24} color="#818cf8" />
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>SYSTEM FOUNDATION & ARCHITECTURE</h2>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Enterprise RBAC, Configurable Approval Hierarchy & Connectivity Threads</p>
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {/* Tab Buttons */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
          <button 
            onClick={() => setActiveTab('rbac')} 
            className={`btn btn-sm ${activeTab === 'rbac' ? 'btn-primary' : 'btn-secondary'}`}
          >
            RBAC & Security Matrix
          </button>
          <button 
            onClick={() => setActiveTab('approval')} 
            className={`btn btn-sm ${activeTab === 'approval' ? 'btn-primary' : 'btn-secondary'}`}
          >
            5-Level Approval Hierarchy Engine
          </button>
          <button 
            onClick={() => setActiveTab('audit')} 
            className={`btn btn-sm ${activeTab === 'audit' ? 'btn-primary' : 'btn-secondary'}`}
          >
            Real-time Audit Trail Logs
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'rbac' && (
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#818cf8', marginBottom: '0.75rem' }}>Role-Based Access Control (RBAC) Matrix</h4>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.775rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
                    <th style={{ padding: '0.5rem' }}>MODULE</th>
                    <th style={{ padding: '0.5rem' }}>HR ADMIN</th>
                    <th style={{ padding: '0.5rem' }}>MANAGER</th>
                    <th style={{ padding: '0.5rem' }}>RECRUITER</th>
                    <th style={{ padding: '0.5rem' }}>EMPLOYEE</th>
                    <th style={{ padding: '0.5rem' }}>FINANCE</th>
                  </tr>
                </thead>
                <tbody>
                  {rbacMatrix.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                      <td style={{ padding: '0.6rem', fontWeight: 700, color: '#fff' }}>{row.module}</td>
                      <td style={{ padding: '0.6rem', color: '#34d399' }}>{row.hrAdmin}</td>
                      <td style={{ padding: '0.6rem', color: '#818cf8' }}>{row.manager}</td>
                      <td style={{ padding: '0.6rem', color: '#22d3ee' }}>{row.recruiter}</td>
                      <td style={{ padding: '0.6rem', color: 'var(--text-muted)' }}>{row.employee}</td>
                      <td style={{ padding: '0.6rem', color: '#fbbf24' }}>{row.finance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'approval' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#818cf8' }}>Configurable Multi-Tier Approval Chain</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(15, 23, 42, 0.8)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div><strong style={{ color: '#fff' }}>Level 1: Direct Manager</strong> (Immediate Supervisor Approval)</div>
                <span className="badge badge-emerald">Auto-Routed</span>
              </div>
              <div style={{ padding: '0.75rem', background: 'rgba(15, 23, 42, 0.8)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div><strong style={{ color: '#fff' }}>Level 2: Department Head</strong> (VP / Director Approval)</div>
                <span className="badge badge-emerald">Auto-Routed</span>
              </div>
              <div style={{ padding: '0.75rem', background: 'rgba(15, 23, 42, 0.8)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div><strong style={{ color: '#fff' }}>Level 3: HR Operations Lead</strong> (Policy Compliance Check)</div>
                <span className="badge badge-emerald">Auto-Routed</span>
              </div>
              <div style={{ padding: '0.75rem', background: 'rgba(15, 23, 42, 0.8)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div><strong style={{ color: '#fff' }}>Level 4: Finance Controller</strong> (Budget Verification)</div>
                <span className="badge badge-amber">Conditional (If Amount &gt; $50k)</span>
              </div>
              <div style={{ padding: '0.75rem', background: 'rgba(15, 23, 42, 0.8)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div><strong style={{ color: '#fff' }}>Level 5: Managing Director / CEO</strong> (Executive Exception Signoff)</div>
                <span className="badge badge-rose">Conditional (Budget Exception Only)</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'audit' && (
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#818cf8', marginBottom: '0.75rem' }}>Immutable System Audit Log</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
              <div style={{ padding: '0.4rem 0.6rem', background: 'rgba(15, 23, 42, 0.8)', borderRadius: '4px' }}>
                <span style={{ color: 'var(--text-muted)' }}>[2026-09-29 19:30:12 UTC]</span> <span style={{ color: '#818cf8' }}>USER: elena.rostova (HR Admin)</span> ACTION: Approved Requisition REQ-2026-089 (Senior Full Stack Lead)
              </div>
              <div style={{ padding: '0.4rem 0.6rem', background: 'rgba(15, 23, 42, 0.8)', borderRadius: '4px' }}>
                <span style={{ color: 'var(--text-muted)' }}>[2026-09-29 18:45:01 UTC]</span> <span style={{ color: '#34d399' }}>USER: david.sterling (Finance)</span> ACTION: Locked September 2026 Payroll Run ($1.42M Gross)
              </div>
              <div style={{ padding: '0.4rem 0.6rem', background: 'rgba(15, 23, 42, 0.8)', borderRadius: '4px' }}>
                <span style={{ color: 'var(--text-muted)' }}>[2026-09-29 16:12:40 UTC]</span> <span style={{ color: '#fbbf24' }}>SYSTEM_ENGINE</span> ACTION: BGV Clear notification dispatched for Candidate CAND-8095 (Rohan Mehta)
              </div>
            </div>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
          <button onClick={onClose} className="btn btn-secondary">Close Architecture View</button>
        </div>
      </div>
    </div>
  );
}
