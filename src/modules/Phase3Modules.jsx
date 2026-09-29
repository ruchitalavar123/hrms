import React, { useState } from 'react';
import { 
  Clock, 
  CalendarDays, 
  Calculator, 
  Receipt, 
  Laptop, 
  GraduationCap, 
  TrendingUp, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Plus, 
  Lock, 
  Download, 
  Award,
  Sparkles,
  Eye,
  X,
  Check,
  Building2,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

// --- MODULE 12: PROBATION MANAGEMENT ---
export function ProbationManagementModule({ probationList, setProbationList }) {
  const [selectedProbDetail, setSelectedProbDetail] = useState(null);

  const handleConfirm = (id) => {
    setProbationList(probationList.map(p => p.id === id ? { ...p, managerRecommendation: 'Confirm Employee', hrReviewStatus: 'Confirmed' } : p));
    confetti({ particleCount: 60 });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="badge badge-amber">Module 12</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Probation Management & Review</h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Track probation periods, set 30-60-90 day goal reviews & execute confirmation decisions.
          </p>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '1rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.825rem', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
              <th style={{ padding: '0.6rem' }}>REVIEW ID</th>
              <th style={{ padding: '0.6rem' }}>EMPLOYEE & DEPT</th>
              <th style={{ padding: '0.6rem' }}>PROBATION END DATE</th>
              <th style={{ padding: '0.6rem' }}>MANAGER RATING</th>
              <th style={{ padding: '0.6rem' }}>RECOMMENDATION</th>
              <th style={{ padding: '0.6rem' }}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {probationList.map((p) => (
              <tr key={p.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700, color: '#fbbf24' }}>{p.id}</td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  <div style={{ fontWeight: 700, color: '#fff' }}>{p.empName}</div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>{p.dept}</div>
                </td>
                <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700 }}>
                  {p.probationEndDate} ({p.daysRemaining} days left)
                </td>
                <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700, color: '#34d399' }}>★ {p.managerRating}</td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  <span className="badge badge-emerald">{p.managerRecommendation}</span>
                </td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    <button onClick={() => setSelectedProbDetail(p)} className="btn btn-secondary btn-sm">
                      <Eye size={14} /> Full 30-60-90 Review
                    </button>
                    {p.hrReviewStatus !== 'Confirmed' && (
                      <button onClick={() => handleConfirm(p.id)} className="btn btn-success btn-sm">
                        Confirm Employee
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedProbDetail && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ padding: '1.5rem', maxWidth: '640px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div>
                <span className="badge badge-amber">{selectedProbDetail.id}</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '0.2rem' }}>Probation Review: {selectedProbDetail.empName}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Department: {selectedProbDetail.dept} | Joining Date: {selectedProbDetail.joiningDate}</p>
              </div>
              <button onClick={() => setSelectedProbDetail(null)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem', fontSize: '0.825rem' }}>
              <div style={{ fontWeight: 700, color: '#818cf8', marginBottom: '0.4rem' }}>30-60-90 Day Goal Achievement Summary:</div>
              <div style={{ color: '#fff' }}>{selectedProbDetail.goalsStatus}</div>
            </div>

            <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '1rem', borderRadius: 'var(--radius-md)', fontSize: '0.825rem' }}>
              <div style={{ fontWeight: 700, color: '#34d399', marginBottom: '0.4rem' }}>Manager Evaluation Rating & Comments:</div>
              <div>Rating: <strong>★ {selectedProbDetail.managerRating}/5.0</strong></div>
              <div style={{ fontStyle: 'italic', marginTop: '0.3rem', color: 'var(--text-secondary)' }}>"{selectedProbDetail.comments}"</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
              <button onClick={() => setSelectedProbDetail(null)} className="btn btn-secondary">Close Review</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- MODULE 13: ATTENDANCE & TIME MANAGEMENT ---
export function AttendanceManagementModule({ attendance, setAttendance }) {
  const [selectedAttDetail, setSelectedAttDetail] = useState(null);

  const handlePunch = () => {
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newRecord = {
      id: `ATT-0${attendance.length + 1}`,
      empId: 'EMP-1024',
      name: 'Sarah Jenkins',
      date: '2026-09-29',
      checkIn: timeStr,
      checkOut: '06:00 PM',
      hours: 8.5,
      status: 'Present',
      mode: 'Web Punch Simulator'
    };
    setAttendance([newRecord, ...attendance]);
    confetti({ particleCount: 30 });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="badge badge-amber">Module 13</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Attendance & Time Management</h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Biometric integration, shift rosters, overtime calculation & regularization requests.
          </p>
        </div>

        <button onClick={handlePunch} className="btn btn-primary btn-sm">
          <Clock size={16} /> Simulate Web Punch-In
        </button>
      </div>

      <div className="glass-card" style={{ padding: '1rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.825rem', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
              <th style={{ padding: '0.6rem' }}>EMP ID & NAME</th>
              <th style={{ padding: '0.6rem' }}>DATE</th>
              <th style={{ padding: '0.6rem' }}>CHECK-IN</th>
              <th style={{ padding: '0.6rem' }}>CHECK-OUT</th>
              <th style={{ padding: '0.6rem' }}>HOURS</th>
              <th style={{ padding: '0.6rem' }}>CAPTURE MODE</th>
              <th style={{ padding: '0.6rem' }}>STATUS</th>
              <th style={{ padding: '0.6rem' }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((a) => (
              <tr key={a.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700, color: '#fff' }}>{a.name} ({a.empId})</td>
                <td style={{ padding: '0.75rem 0.6rem' }}>{a.date}</td>
                <td style={{ padding: '0.75rem 0.6rem', color: '#34d399', fontWeight: 600 }}>{a.checkIn}</td>
                <td style={{ padding: '0.75rem 0.6rem', color: '#fb7185', fontWeight: 600 }}>{a.checkOut}</td>
                <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700 }}>{a.hours} hrs</td>
                <td style={{ padding: '0.75rem 0.6rem', color: 'var(--text-secondary)' }}>{a.mode}</td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  <span className="badge badge-emerald">{a.status}</span>
                </td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  <button onClick={() => setSelectedAttDetail(a)} className="btn btn-secondary btn-sm">
                    <Eye size={14} /> Audit Log
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedAttDetail && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Attendance Audit Log: {selectedAttDetail.name}
            </h3>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
              <div>📅 Date: {selectedAttDetail.date}</div>
              <div>⏰ Check-in Time: {selectedAttDetail.checkIn}</div>
              <div>⏱️ Check-out Time: {selectedAttDetail.checkOut}</div>
              <div>📍 Capture Mode: {selectedAttDetail.mode}</div>
              <div>🔒 Biometric Device ID: GATE-A-BIOMETRIC-SENSOR-#901</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
              <button onClick={() => setSelectedAttDetail(null)} className="btn btn-secondary">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- MODULE 14: LEAVE MANAGEMENT ---
export function LeaveManagementModule({ leaveRequests, setLeaveRequests, balances }) {
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [leaveForm, setLeaveForm] = useState({ leaveType: 'Casual Leave (CL)', startDate: '2026-10-10', days: 2, reason: 'Personal work' });

  const handleApplyLeave = (e) => {
    e.preventDefault();
    const newReq = {
      id: `LR-${Math.floor(910 + Math.random() * 80)}`,
      empId: 'EMP-1024',
      empName: 'Sarah Jenkins',
      dept: 'Engineering',
      leaveType: leaveForm.leaveType,
      startDate: leaveForm.startDate,
      endDate: leaveForm.startDate,
      days: parseInt(leaveForm.days),
      reason: leaveForm.reason,
      appliedDate: '2026-09-29',
      status: 'Pending Manager Approval',
      manager: 'Marcus Vance'
    };
    setLeaveRequests([newReq, ...leaveRequests]);
    setShowLeaveModal(false);
    confetti({ particleCount: 30 });
  };

  const handleApprove = (id) => {
    setLeaveRequests(leaveRequests.map(l => l.id === id ? { ...l, status: 'Approved' } : l));
    confetti({ particleCount: 40 });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="badge badge-amber">Module 14</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Leave Management Engine</h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Leave policies, automated accruals, holiday calendars & approval workflows.
          </p>
        </div>

        <button onClick={() => setShowLeaveModal(true)} className="btn btn-primary btn-sm">
          <Plus size={16} /> Apply for Leave
        </button>
      </div>

      <div className="glass-card" style={{ padding: '1rem' }}>
        <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem' }}>Active Leave Requests</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.825rem', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
              <th style={{ padding: '0.6rem' }}>REQ ID</th>
              <th style={{ padding: '0.6rem' }}>EMPLOYEE</th>
              <th style={{ padding: '0.6rem' }}>LEAVE TYPE</th>
              <th style={{ padding: '0.6rem' }}>DATES & DURATION</th>
              <th style={{ padding: '0.6rem' }}>REASON</th>
              <th style={{ padding: '0.6rem' }}>STATUS</th>
              <th style={{ padding: '0.6rem' }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((l) => (
              <tr key={l.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700, color: '#c084fc' }}>{l.id}</td>
                <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700, color: '#fff' }}>{l.empName}</td>
                <td style={{ padding: '0.75rem 0.6rem' }}>{l.leaveType}</td>
                <td style={{ padding: '0.75rem 0.6rem', fontWeight: 600 }}>{l.startDate} ({l.days} days)</td>
                <td style={{ padding: '0.75rem 0.6rem', color: 'var(--text-secondary)' }}>{l.reason}</td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  <span className={`badge ${l.status === 'Approved' ? 'badge-emerald' : 'badge-amber'}`}>
                    {l.status}
                  </span>
                </td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  {l.status !== 'Approved' && (
                    <button onClick={() => handleApprove(l.id)} className="btn btn-success btn-sm">
                      Approve Leave
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showLeaveModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1rem' }}>Apply for Leave</h3>
            <form onSubmit={handleApplyLeave} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Leave Type</label>
                <select value={leaveForm.leaveType} onChange={(e) => setLeaveForm({ ...leaveForm, leaveType: e.target.value })} className="form-select">
                  <option value="Casual Leave (CL)">Casual Leave (CL)</option>
                  <option value="Sick Leave (SL)">Sick Leave (SL)</option>
                  <option value="Earned Leave (EL)">Earned Leave (EL)</option>
                </select>
              </div>

              <div className="grid-2">
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Start Date</label>
                  <input type="date" value={leaveForm.startDate} onChange={(e) => setLeaveForm({ ...leaveForm, startDate: e.target.value })} className="form-input" />
                </div>
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Number of Days</label>
                  <input type="number" value={leaveForm.days} onChange={(e) => setLeaveForm({ ...leaveForm, days: e.target.value })} className="form-input" />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Reason for Leave</label>
                <textarea rows={3} value={leaveForm.reason} onChange={(e) => setLeaveForm({ ...leaveForm, reason: e.target.value })} className="form-textarea" />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <button type="button" onClick={() => setShowLeaveModal(false)} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Submit Leave Request</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// --- MODULE 15: PAYROLL MANAGEMENT ---
export function PayrollManagementModule({ payrollRuns, setPayrollRuns }) {
  const currentRun = payrollRuns[0];
  const [showPayslipModal, setShowPayslipModal] = useState(false);

  const handleLockPayroll = () => {
    setPayrollRuns(payrollRuns.map((r, i) => i === 0 ? { ...r, status: 'Locked & Approved', stepIndex: 5 } : r));
    confetti({ particleCount: 80 });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="badge badge-emerald">Module 15</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Payroll Engine & Payslip Vault</h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Execute 5-stage payroll wizard: Inputs → Validation → Lock → Payslip Gen → Bank File Export.
          </p>
        </div>

        {currentRun.status !== 'Locked & Approved' ? (
          <button onClick={handleLockPayroll} className="btn btn-primary btn-sm">
            <Lock size={16} /> 1-Click Lock & Approve Payroll
          </button>
        ) : (
          <button onClick={() => setShowPayslipModal(true)} className="btn btn-success btn-sm">
            <FileText size={16} /> View Sample Payslip PDF
          </button>
        )}
      </div>

      <div className="grid-4">
        <div className="glass-card" style={{ padding: '1rem' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Period</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>{currentRun.period}</div>
        </div>
        <div className="glass-card" style={{ padding: '1rem' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Total Gross Payroll</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#34d399' }}>${currentRun.grossSalary.toLocaleString()}</div>
        </div>
        <div className="glass-card" style={{ padding: '1rem' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Total Tax & PF Deductions</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fb7185' }}>${currentRun.totalDeductions.toLocaleString()}</div>
        </div>
        <div className="glass-card" style={{ padding: '1rem' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Net Payout to Bank</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#818cf8' }}>${currentRun.netPayout.toLocaleString()}</div>
        </div>
      </div>

      {showPayslipModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ padding: '2rem', maxWidth: '640px' }}>
            <div style={{ textAlign: 'center', borderBottom: '2px solid var(--primary)', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>PAYSLIP - SEPTEMBER 2026</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Employee: Sarah Jenkins (EMP-1024) | Director of Tech</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', fontSize: '0.825rem' }}>
              <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontWeight: 700, color: '#34d399', marginBottom: '0.5rem' }}>Earnings</div>
                <div>Basic Salary: $10,500</div>
                <div>HRA: $4,200</div>
                <div>Special Allowance: $1,550</div>
                <div style={{ fontWeight: 700, marginTop: '0.5rem' }}>Total Gross: $16,250</div>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontWeight: 700, color: '#fb7185', marginBottom: '0.5rem' }}>Deductions</div>
                <div>Federal Income Tax: $2,850</div>
                <div>Provident Fund: $650</div>
                <div>Health Insurance: $250</div>
                <div style={{ fontWeight: 700, marginTop: '0.5rem' }}>Total Deductions: $3,750</div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '1.5rem', background: 'rgba(99, 102, 241, 0.15)', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>NET TAKE-HOME SALARY</span>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#34d399' }}>$12,500.00 USD</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
              <button onClick={() => setShowPayslipModal(false)} className="btn btn-secondary">Close Payslip</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- MODULE 16: EXPENSE MANAGEMENT ---
export function ExpenseManagementModule({ expenses }) {
  const [selectedExpDetail, setSelectedExpDetail] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span className="badge badge-amber">Module 16</span>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Expense & Reimbursements</h2>
      </div>

      <div className="glass-card" style={{ padding: '1rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.825rem', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
              <th style={{ padding: '0.6rem' }}>CLAIM ID</th>
              <th style={{ padding: '0.6rem' }}>EMPLOYEE</th>
              <th style={{ padding: '0.6rem' }}>CATEGORY</th>
              <th style={{ padding: '0.6rem' }}>AMOUNT</th>
              <th style={{ padding: '0.6rem' }}>POLICY CHECK</th>
              <th style={{ padding: '0.6rem' }}>STATUS</th>
              <th style={{ padding: '0.6rem' }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((exp) => (
              <tr key={exp.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700, color: '#ea580c' }}>{exp.id}</td>
                <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700, color: '#fff' }}>{exp.empName}</td>
                <td style={{ padding: '0.75rem 0.6rem' }}>{exp.category}</td>
                <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700, color: '#34d399' }}>${exp.amount.toFixed(2)}</td>
                <td style={{ padding: '0.75rem 0.6rem', color: 'var(--text-secondary)' }}>{exp.policyStatus}</td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  <span className="badge badge-emerald">{exp.status}</span>
                </td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  <button onClick={() => setSelectedExpDetail(exp)} className="btn btn-secondary btn-sm">
                    <Eye size={14} /> Receipt
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedExpDetail && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Expense Claim Inspector: {selectedExpDetail.id}
            </h3>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
              <div>Submitted By: <strong>{selectedExpDetail.empName}</strong> ({selectedExpDetail.dept})</div>
              <div>Expense Category: {selectedExpDetail.category}</div>
              <div>Claim Amount: <strong style={{ color: '#34d399' }}>${selectedExpDetail.amount.toFixed(2)} USD</strong></div>
              <div>Policy Compliance: <span className="badge badge-emerald">{selectedExpDetail.policyStatus}</span></div>
              <div>Manager Signoff: {selectedExpDetail.managerApproval}</div>
              <div>Receipt Document: 📄 {selectedExpDetail.receiptUrl}</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
              <button onClick={() => setSelectedExpDetail(null)} className="btn btn-secondary">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- MODULE 17: ASSET MANAGEMENT ---
export function AssetManagementModule({ assets }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span className="badge badge-amber">Module 17</span>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Asset Management Lifecycle</h2>
      </div>

      <div className="glass-card" style={{ padding: '1rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.825rem', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
              <th style={{ padding: '0.6rem' }}>ASSET TAG</th>
              <th style={{ padding: '0.6rem' }}>HARDWARE TITLE</th>
              <th style={{ padding: '0.6rem' }}>SERIAL NO</th>
              <th style={{ padding: '0.6rem' }}>ASSIGNED TO</th>
              <th style={{ padding: '0.6rem' }}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((ast) => (
              <tr key={ast.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700, color: '#0891b2' }}>{ast.id}</td>
                <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700, color: '#fff' }}>{ast.title}</td>
                <td style={{ padding: '0.75rem 0.6rem', color: 'var(--text-secondary)' }}>{ast.serial}</td>
                <td style={{ padding: '0.75rem 0.6rem' }}>{ast.assignedTo}</td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  <span className="badge badge-cyan">{ast.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- MODULE 18: LEARNING & DEVELOPMENT ---
export function LearningDevelopmentModule({ courses }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span className="badge badge-purple">Module 18</span>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Learning & Development (L&D)</h2>
      </div>

      <div className="grid-3">
        {courses.map((c) => (
          <div key={c.id} className="glass-card" style={{ padding: '1.25rem' }}>
            <span className="badge badge-purple">{c.category}</span>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fff', margin: '0.5rem 0' }}>{c.title}</h3>
            <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Duration: {c.duration}</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#34d399', marginTop: '0.5rem' }}>
              Completion Rate: {c.completionRate} ({c.enrolledCount} enrolled)
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- MODULE 19: PERFORMANCE MANAGEMENT (PMS) ---
export function PerformanceManagementModule({ reviews }) {
  const r = reviews[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span className="badge badge-purple">Module 19</span>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Performance Management System (PMS)</h2>
      </div>

      <div className="glass-card" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>{r.name} ({r.dept})</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Cycle: {r.period} | 9-Box Grid Position: <strong>{r.nineBoxGrid}</strong></p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Final Rating</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#34d399' }}>★ {r.finalScore}/5.0</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.25rem' }}>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#818cf8', marginBottom: '0.5rem' }}>SMART Goals & KRA Performance</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {r.smartGoals.map((g, i) => (
              <div key={i} style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.825rem', fontWeight: 600 }}>
                  <span>{g.goal}</span>
                  <span style={{ color: '#34d399' }}>{g.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'rgba(99, 102, 241, 0.15)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>INCREMENT & PROMOTION RECOMMENDATION</div>
          <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginTop: '0.2rem' }}>{r.incrementRecommended}</div>
        </div>
      </div>
    </div>
  );
}

// --- MODULE 20 & 21: SELF SERVICE PORTALS (ESS & MSS) ---
export function SelfServicePortalsModule({ isManager, employees }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span className="badge badge-rose">{isManager ? 'Module 21 (MSS)' : 'Module 20 (ESS)'}</span>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{isManager ? 'Manager Self Service (MSS)' : 'Employee Self Service (ESS)'} Portal</h2>
      </div>

      <div className="grid-3">
        <div className="glass-card" style={{ padding: '1.25rem' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Quick Actions</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.75rem' }}>
            <button className="btn btn-primary btn-sm">{isManager ? 'Approve Team Leaves' : 'Apply for Leave'}</button>
            <button className="btn btn-secondary btn-sm">{isManager ? 'Review Team Performance' : 'Download Latest Payslip'}</button>
            <button className="btn btn-secondary btn-sm">{isManager ? 'Approve Expense Claims' : 'Submit Expense Claim'}</button>
          </div>
        </div>

        <div className="glass-card" style={{ gridColumn: 'span 2', padding: '1.25rem' }}>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            {isManager ? 'Direct Reportees Summary' : 'My Profile & Statutory Overview'}
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            {isManager ? '3 Direct Reports (Sarah Jenkins, David Miller, Rohan Mehta)' : 'SSN: XXX-XX-4412 | W-4 Filing: Single | Bank Account: Chase ****8812'}
          </p>
        </div>
      </div>
    </div>
  );
}
