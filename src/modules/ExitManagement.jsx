import React, { useState } from 'react';
import { 
  LogOut, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  FileText, 
  ShieldCheck, 
  DollarSign, 
  UserCheck, 
  Download, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function ExitManagementModule({ exitCases, setExitCases }) {
  const exitCase = exitCases[0];
  const [activeStep, setActiveStep] = useState(5); // Clearances Step
  const [showRelievingLetterModal, setShowRelievingLetterModal] = useState(false);

  const steps = [
    { num: 1, label: '1. Exit Initiated' },
    { num: 2, label: '2. Exit Approval' },
    { num: 3, label: '3. Notice Period' },
    { num: 4, label: '4. Handover Process' },
    { num: 5, label: '5. Clearances' },
    { num: 6, label: '6. Final Settlement' },
    { num: 7, label: '7. Docs Generation' },
    { num: 8, label: '8. Exit Completion' },
  ];

  const handleToggleClearance = (key) => {
    const updatedClearances = { ...exitCase.clearances, [key]: !exitCase.clearances[key] };
    const updatedCase = { ...exitCase, clearances: updatedClearances };
    setExitCases([updatedCase, ...exitCases.slice(1)]);
    confetti({ particleCount: 30 });
  };

  const handleCompleteExit = () => {
    const updatedCase = { ...exitCase, status: 'Exited Successfully' };
    setExitCases([updatedCase, ...exitCases.slice(1)]);
    confetti({ particleCount: 100, spread: 90 });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Module Title Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="badge badge-rose">Module 22</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Exit Management Workflow (Complete Offboarding Process)</h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            8-Step offboarding lifecycle with mandatory IT/Asset clearances & Full & Final (F&F) settlement.
          </p>
        </div>

        {exitCase.status === 'Exited Successfully' ? (
          <button onClick={() => setShowRelievingLetterModal(true)} className="btn btn-success btn-sm">
            <FileText size={16} /> Download Relieving & Experience Letter
          </button>
        ) : (
          <button onClick={handleCompleteExit} className="btn btn-danger btn-sm">
            <LogOut size={16} /> 1-Click Complete Exit & Transition to EXITED
          </button>
        )}
      </div>

      {/* 8-Step Interactive Offboarding Stepper */}
      <div className="glass-card" style={{ padding: '1rem', overflowX: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minWidth: '700px' }}>
          {steps.map((s) => {
            const isDone = s.num < activeStep || exitCase.status === 'Exited Successfully';
            const isCurrent = s.num === activeStep && exitCase.status !== 'Exited Successfully';

            return (
              <div 
                key={s.num}
                onClick={() => setActiveStep(s.num)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.35rem',
                  cursor: 'pointer',
                  opacity: isDone || isCurrent ? 1 : 0.5
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: isDone ? '#10b981' : isCurrent ? 'var(--primary)' : 'rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: isCurrent ? '0 0 12px rgba(99, 102, 241, 0.6)' : 'none'
                }}>
                  {isDone ? <CheckCircle2 size={18} /> : s.num}
                </div>
                <span style={{ fontSize: '0.725rem', fontWeight: isCurrent ? 700 : 500, color: isCurrent ? '#fff' : 'var(--text-secondary)' }}>
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Exit Overview Card */}
      <div className="grid-3">
        {/* Left: Employee Exit Record */}
        <div className="glass-card" style={{ padding: '1.25rem' }}>
          <span className="badge badge-rose">{exitCase.id}</span>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginTop: '0.3rem' }}>{exitCase.empName}</h3>
          <p style={{ fontSize: '0.775rem', color: '#818cf8', fontWeight: 600 }}>{exitCase.designation} • {exitCase.dept}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem', fontSize: '0.775rem', color: 'var(--text-secondary)' }}>
            <div>📌 <strong>Exit Type:</strong> {exitCase.exitType}</div>
            <div>📅 <strong>Resignation Date:</strong> {exitCase.resignationDate}</div>
            <div>🗓️ <strong>Last Working Day:</strong> {exitCase.lastWorkingDay}</div>
            <div>🤝 <strong>Handover Assigned To:</strong> {exitCase.handoverPerson}</div>
          </div>
        </div>

        {/* Center: Mandatory Clearances Checklist (Step 5) */}
        <div className="glass-card" style={{ padding: '1.25rem' }}>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#818cf8', marginBottom: '0.75rem' }}>
            Step 5: Mandatory Department Clearances
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div 
              onClick={() => handleToggleClearance('managerClearance')}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem', background: 'rgba(15, 23, 42, 0.6)', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}
            >
              <span style={{ fontSize: '0.8rem' }}>👔 Manager Clearance</span>
              <span className={`badge ${exitCase.clearances.managerClearance ? 'badge-emerald' : 'badge-amber'}`}>
                {exitCase.clearances.managerClearance ? 'Approved' : 'Pending'}
              </span>
            </div>

            <div 
              onClick={() => handleToggleClearance('hrClearance')}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem', background: 'rgba(15, 23, 42, 0.6)', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}
            >
              <span style={{ fontSize: '0.8rem' }}>👑 HR Clearance & Exit Interview</span>
              <span className={`badge ${exitCase.clearances.hrClearance ? 'badge-emerald' : 'badge-amber'}`}>
                {exitCase.clearances.hrClearance ? 'Approved' : 'Pending'}
              </span>
            </div>

            <div 
              onClick={() => handleToggleClearance('itAccessRevoked')}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem', background: 'rgba(15, 23, 42, 0.6)', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}
            >
              <span style={{ fontSize: '0.8rem' }}>💻 IT System Access Revocation</span>
              <span className={`badge ${exitCase.clearances.itAccessRevoked ? 'badge-emerald' : 'badge-amber'}`}>
                {exitCase.clearances.itAccessRevoked ? 'Revoked' : 'Pending'}
              </span>
            </div>

            <div 
              onClick={() => handleToggleClearance('assetReturnVerified')}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem', background: 'rgba(15, 23, 42, 0.6)', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}
            >
              <span style={{ fontSize: '0.8rem' }}>💻 Asset Return (Laptop/Badge)</span>
              <span className={`badge ${exitCase.clearances.assetReturnVerified ? 'badge-emerald' : 'badge-amber'}`}>
                {exitCase.clearances.assetReturnVerified ? 'Returned' : 'Pending'}
              </span>
            </div>

            <div 
              onClick={() => handleToggleClearance('financeNoDuesClear')}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem', background: 'rgba(15, 23, 42, 0.6)', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}
            >
              <span style={{ fontSize: '0.8rem' }}>💰 Finance No-Dues Clearance</span>
              <span className={`badge ${exitCase.clearances.financeNoDuesClear ? 'badge-emerald' : 'badge-amber'}`}>
                {exitCase.clearances.financeNoDuesClear ? 'Cleared' : 'Pending'}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Full & Final (F&F) Settlement Calculation (Step 6) */}
        <div className="glass-card" style={{ padding: '1.25rem' }}>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#34d399', marginBottom: '0.75rem' }}>
            Step 6: Full & Final (F&F) Settlement
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Unpaid Basic Salary:</span>
              <span>${exitCase.settlement.basicDue.toLocaleString()}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Leave Encashment ({exitCase.settlement.leaveEncashmentDays} Days):</span>
              <span>+${exitCase.settlement.leaveEncashmentAmount.toLocaleString()}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fb7185' }}>
              <span>Tax Deductions:</span>
              <span>-${exitCase.settlement.taxDeduction.toLocaleString()}</span>
            </div>

            <div style={{ borderTop: '1px dashed var(--border-subtle)', paddingTop: '0.5rem', marginTop: '0.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>NET FINAL SETTLEMENT PAYOUT</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#34d399' }}>
                ${exitCase.settlement.netFinalPayout.toLocaleString()} USD
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Relieving & Experience Letter Generator Modal */}
      {showRelievingLetterModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ padding: '2rem', maxWidth: '680px' }}>
            <div style={{ textAlign: 'center', borderBottom: '2px solid var(--primary)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff' }}>NEXUS HRMS GLOBAL CORP</h2>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>RELIEVING & EXPERIENCE CERTIFICATE</p>
            </div>

            <div style={{ fontSize: '0.85rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>Date: October 01, 2026</div>
              <div><strong>TO WHOMSOEVER IT MAY CONCERN</strong></div>
              <p>
                This is to certify that <strong>{exitCase.empName}</strong> was employed with Nexus HRMS Global Corp from March 15, 2023 to October 01, 2026 as <strong>{exitCase.designation}</strong> in the {exitCase.dept} department.
              </p>
              <p>
                During their tenure with us, we found {exitCase.empName} to be sincere, industrious, and result-oriented. All mandatory clearances and Full & Final settlements have been successfully completed.
              </p>
              <p>We wish them all the best in their future endeavors.</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem' }}>
              <button onClick={() => setShowRelievingLetterModal(false)} className="btn btn-secondary">Close</button>
              <button onClick={() => { confetti(); setShowRelievingLetterModal(false); }} className="btn btn-primary">
                <Download size={14} /> Download Signed PDF Certificate
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
