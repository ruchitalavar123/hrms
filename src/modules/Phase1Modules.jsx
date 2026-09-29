import React, { useState } from 'react';
import { 
  BarChart3, 
  Plus, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Search, 
  Send, 
  Sparkles, 
  Users, 
  DollarSign, 
  Building2, 
  ChevronRight,
  TrendingUp,
  Share2,
  Eye,
  X,
  Target,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';

// --- MODULE 1: WORKFORCE PLANNING & BUDGETING ---
export function WorkforceBudgetingModule({ plans, setPlans }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedPlanDetail, setSelectedPlanDetail] = useState(null);
  const [newPlan, setNewPlan] = useState({ dept: 'Engineering', grade: 'L4-L6', plannedHeadcount: 20, allocatedBudget: 600000 });

  const totalPlanned = plans.reduce((acc, p) => acc + p.plannedHeadcount, 0);
  const totalCurrent = plans.reduce((acc, p) => acc + p.currentHeadcount, 0);
  const totalAllocated = plans.reduce((acc, p) => acc + p.allocatedBudget, 0);
  const totalSpent = plans.reduce((acc, p) => acc + p.spentBudget, 0);

  const handleAddPlan = (e) => {
    e.preventDefault();
    const plan = {
      id: `WP-2026-${newPlan.dept.substring(0, 3).toUpperCase()}`,
      dept: newPlan.dept,
      grade: newPlan.grade,
      plannedHeadcount: parseInt(newPlan.plannedHeadcount),
      currentHeadcount: 0,
      allocatedBudget: parseInt(newPlan.allocatedBudget),
      spentBudget: 0,
      status: 'Approved'
    };
    setPlans([...plans, plan]);
    setShowAddModal(false);
    confetti({ particleCount: 50, spread: 60 });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Module Title Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="badge badge-indigo">Module 1</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Workforce Planning & Budgeting</h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Set annual headcount targets, allocate departmental cost center budgets & monitor quarter-by-quarter expenditure.
          </p>
        </div>

        <button onClick={() => setShowAddModal(true)} className="btn btn-primary btn-sm">
          <Plus size={16} /> Add Workforce Plan
        </button>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid-4">
        <div className="glass-card" style={{ padding: '1rem' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Total Headcount Planned</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', margin: '0.2rem 0' }}>
            {totalCurrent} / {totalPlanned}
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
            {Math.round((totalCurrent / totalPlanned) * 100)}% Capacity Reached
          </div>
        </div>

        <div className="glass-card" style={{ padding: '1rem' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Total Allocated Budget</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', margin: '0.2rem 0' }}>
            ${(totalAllocated / 1000000).toFixed(2)}M
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
            Approved Annual Cap
          </div>
        </div>

        <div className="glass-card" style={{ padding: '1rem' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Spent Budget</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#818cf8', margin: '0.2rem 0' }}>
            ${(totalSpent / 1000000).toFixed(2)}M
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--accent-amber)', fontWeight: 600 }}>
            {Math.round((totalSpent / totalAllocated) * 100)}% Utilized
          </div>
        </div>

        <div className="glass-card" style={{ padding: '1rem' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Available Budget</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#34d399', margin: '0.2rem 0' }}>
            ${((totalAllocated - totalSpent) / 1000000).toFixed(2)}M
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
            Ready for Requisitions
          </div>
        </div>
      </div>

      {/* Workforce Plans Table */}
      <div className="glass-card" style={{ padding: '1rem' }}>
        <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem' }}>
          Departmental Budget & Headcount Breakdown
        </h3>

        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.825rem', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
              <th style={{ padding: '0.6rem' }}>PLAN ID</th>
              <th style={{ padding: '0.6rem' }}>DEPARTMENT</th>
              <th style={{ padding: '0.6rem' }}>GRADES</th>
              <th style={{ padding: '0.6rem' }}>HEADCOUNT (FILLED / TARGET)</th>
              <th style={{ padding: '0.6rem' }}>BUDGET UTILIZATION</th>
              <th style={{ padding: '0.6rem' }}>STATUS</th>
              <th style={{ padding: '0.6rem' }}>INSPECT</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((p) => {
              const utilPct = Math.round((p.spentBudget / p.allocatedBudget) * 100);
              return (
                <tr key={p.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                  <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700, color: '#818cf8' }}>{p.id}</td>
                  <td style={{ padding: '0.75rem 0.6rem', fontWeight: 600 }}>{p.dept}</td>
                  <td style={{ padding: '0.75rem 0.6rem', color: 'var(--text-secondary)' }}>{p.grade}</td>
                  <td style={{ padding: '0.75rem 0.6rem' }}>
                    <div style={{ fontWeight: 700 }}>{p.currentHeadcount} / {p.plannedHeadcount}</div>
                    <div style={{ height: '4px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '2px', marginTop: '4px' }}>
                      <div style={{ height: '100%', width: `${(p.currentHeadcount / p.plannedHeadcount) * 100}%`, background: '#6366f1', borderRadius: '2px' }}></div>
                    </div>
                  </td>
                  <td style={{ padding: '0.75rem 0.6rem' }}>
                    <div style={{ fontWeight: 600 }}>${(p.spentBudget / 1000).toFixed(0)}k / ${(p.allocatedBudget / 1000).toFixed(0)}k ({utilPct}%)</div>
                    <div style={{ height: '4px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '2px', marginTop: '4px' }}>
                      <div style={{ height: '100%', width: `${utilPct}%`, background: utilPct > 85 ? '#f59e0b' : '#10b981', borderRadius: '2px' }}></div>
                    </div>
                  </td>
                  <td style={{ padding: '0.75rem 0.6rem' }}>
                    <span className="badge badge-emerald">{p.status}</span>
                  </td>
                  <td style={{ padding: '0.75rem 0.6rem' }}>
                    <button onClick={() => setSelectedPlanDetail(p)} className="btn btn-secondary btn-sm">
                      <Eye size={14} /> Full Plan
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Full Plan Details Modal */}
      {selectedPlanDetail && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ padding: '1.5rem', maxWidth: '680px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div>
                <span className="badge badge-indigo">{selectedPlanDetail.id}</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '0.2rem' }}>{selectedPlanDetail.dept} Workforce Plan</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Target Grade Bands: {selectedPlanDetail.grade}</p>
              </div>
              <button onClick={() => setSelectedPlanDetail(null)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', fontSize: '0.825rem', marginBottom: '1rem' }}>
              <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                <div style={{ color: 'var(--text-muted)' }}>Planned Headcount Target</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff' }}>{selectedPlanDetail.plannedHeadcount} Positions</div>
                <div style={{ color: '#34d399', fontSize: '0.75rem' }}>Filled: {selectedPlanDetail.currentHeadcount} | Vacant: {selectedPlanDetail.plannedHeadcount - selectedPlanDetail.currentHeadcount}</div>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                <div style={{ color: 'var(--text-muted)' }}>Allocated Salary Budget</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#34d399' }}>${selectedPlanDetail.allocatedBudget.toLocaleString()} USD</div>
                <div style={{ color: '#818cf8', fontSize: '0.75rem' }}>Spent: ${selectedPlanDetail.spentBudget.toLocaleString()}</div>
              </div>
            </div>

            <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '0.85rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem' }}>
              <div style={{ fontWeight: 700, color: '#818cf8', marginBottom: '0.4rem' }}>Quarterly Hiring Phasing Target (2026):</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', textAlign: 'center' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem', borderRadius: '4px' }}>
                  <div style={{ color: 'var(--text-muted)' }}>Q1</div>
                  <strong>{Math.ceil(selectedPlanDetail.plannedHeadcount * 0.25)} Hires</strong>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem', borderRadius: '4px' }}>
                  <div style={{ color: 'var(--text-muted)' }}>Q2</div>
                  <strong>{Math.ceil(selectedPlanDetail.plannedHeadcount * 0.35)} Hires</strong>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem', borderRadius: '4px' }}>
                  <div style={{ color: 'var(--text-muted)' }}>Q3</div>
                  <strong>{Math.ceil(selectedPlanDetail.plannedHeadcount * 0.25)} Hires</strong>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem', borderRadius: '4px' }}>
                  <div style={{ color: 'var(--text-muted)' }}>Q4</div>
                  <strong>{Math.floor(selectedPlanDetail.plannedHeadcount * 0.15)} Hires</strong>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
              <button onClick={() => setSelectedPlanDetail(null)} className="btn btn-secondary">Close Inspector</button>
            </div>
          </div>
        </div>
      )}

      {/* Add Plan Modal */}
      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1rem' }}>Create New Department Workforce Plan</h3>
            <form onSubmit={handleAddPlan} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Department</label>
                <select 
                  value={newPlan.dept} 
                  onChange={(e) => setNewPlan({ ...newPlan, dept: e.target.value })} 
                  className="form-select"
                >
                  <option value="Engineering">Engineering</option>
                  <option value="Product Management">Product Management</option>
                  <option value="Growth & Marketing">Growth & Marketing</option>
                  <option value="Global Sales">Global Sales</option>
                  <option value="Customer Success">Customer Success</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Grade Target</label>
                <input 
                  type="text" 
                  value={newPlan.grade} 
                  onChange={(e) => setNewPlan({ ...newPlan, grade: e.target.value })} 
                  className="form-input" 
                />
              </div>

              <div className="grid-2">
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Planned Headcount</label>
                  <input 
                    type="number" 
                    value={newPlan.plannedHeadcount} 
                    onChange={(e) => setNewPlan({ ...newPlan, plannedHeadcount: e.target.value })} 
                    className="form-input" 
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Allocated Salary Budget ($)</label>
                  <input 
                    type="number" 
                    value={newPlan.allocatedBudget} 
                    onChange={(e) => setNewPlan({ ...newPlan, allocatedBudget: e.target.value })} 
                    className="form-input" 
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <button type="button" onClick={() => setShowAddModal(false)} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Submit for Budget Approval</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// --- MODULE 2: MANPOWER REQUISITION ---
export function ManpowerRequisitionModule({ requisitions, setRequisitions }) {
  const [showReqModal, setShowReqModal] = useState(false);
  const [selectedReqDetail, setSelectedReqDetail] = useState(null);

  const [form, setForm] = useState({
    dept: 'Engineering',
    designation: 'Senior Frontend Engineer',
    vacancies: 2,
    hiringManager: 'Sarah Jenkins',
    salaryMin: 120000,
    salaryMax: 150000,
    budgetAvailable: true
  });

  const handleCreateReq = (e) => {
    e.preventDefault();
    const newReq = {
      id: `REQ-2026-0${Math.floor(100 + Math.random() * 900)}`,
      dept: form.dept,
      designation: form.designation,
      vacancies: parseInt(form.vacancies),
      hiringManager: form.hiringManager,
      employmentType: 'Full-time',
      expDoj: '2026-11-01',
      salaryMin: parseInt(form.salaryMin),
      salaryMax: parseInt(form.salaryMax),
      reason: 'Department Expansion',
      budgetAvailable: form.budgetAvailable,
      status: form.budgetAvailable ? 'Open' : 'Pending Exception Approval',
      appliedCount: 0,
      approvalHierarchy: [
        { role: 'Manager', name: form.hiringManager, status: 'Approved', date: '2026-09-29' },
        { role: 'HR Head', name: 'Elena Rostova', status: 'Approved', date: '2026-09-29' },
        { role: 'Finance Director', name: 'David Sterling', status: form.budgetAvailable ? 'Approved' : 'Under Review', date: form.budgetAvailable ? '2026-09-29' : null }
      ]
    };
    setRequisitions([newReq, ...requisitions]);
    setShowReqModal(false);
    confetti({ particleCount: 40 });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="badge badge-indigo">Module 2</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Manpower Requisition & Approvals</h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Raise hiring requests, execute automated budget checks & trigger multi-tier approval hierarchy.
          </p>
        </div>

        <button onClick={() => setShowReqModal(true)} className="btn btn-primary btn-sm">
          <Plus size={16} /> Raise New Requisition
        </button>
      </div>

      {/* Requisitions List */}
      <div className="glass-card" style={{ padding: '1rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.825rem', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
              <th style={{ padding: '0.6rem' }}>REQ ID</th>
              <th style={{ padding: '0.6rem' }}>DESIGNATION & DEPT</th>
              <th style={{ padding: '0.6rem' }}>VACANCIES</th>
              <th style={{ padding: '0.6rem' }}>SALARY RANGE</th>
              <th style={{ padding: '0.6rem' }}>BUDGET CHECK</th>
              <th style={{ padding: '0.6rem' }}>STATUS</th>
              <th style={{ padding: '0.6rem' }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {requisitions.map((req) => (
              <tr key={req.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700, color: '#818cf8' }}>{req.id}</td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  <div style={{ fontWeight: 700, color: '#fff' }}>{req.designation}</div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>{req.dept} • Manager: {req.hiringManager}</div>
                </td>
                <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700 }}>{req.vacancies} Pos.</td>
                <td style={{ padding: '0.75rem 0.6rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
                  ${(req.salaryMin / 1000).toFixed(0)}k - ${(req.salaryMax / 1000).toFixed(0)}k
                </td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  {req.budgetAvailable ? (
                    <span className="badge badge-emerald"><CheckCircle2 size={12} /> Budget Verified</span>
                  ) : (
                    <span className="badge badge-rose"><AlertTriangle size={12} /> Exception Flow</span>
                  )}
                </td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  <span className={`badge ${req.status === 'Open' ? 'badge-emerald' : 'badge-amber'}`}>
                    {req.status}
                  </span>
                </td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  <button onClick={() => setSelectedReqDetail(req)} className="btn btn-secondary btn-sm">
                    Hierarchy View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Approval Hierarchy View Modal */}
      {selectedReqDetail && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.25rem' }}>
              Approval Hierarchy Flow for {selectedReqDetail.id}
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              {selectedReqDetail.designation} ({selectedReqDetail.dept})
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {selectedReqDetail.approvalHierarchy.map((step, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid var(--border-subtle)'
                }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Level {idx + 1}: {step.role}</div>
                    <div style={{ fontWeight: 700, color: '#fff' }}>{step.name}</div>
                  </div>

                  <div>
                    <span className={`badge ${step.status === 'Approved' ? 'badge-emerald' : step.status === 'Under Review' ? 'badge-amber' : 'badge-indigo'}`}>
                      {step.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
              <button onClick={() => setSelectedReqDetail(null)} className="btn btn-secondary">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Create Requisition Modal */}
      {showReqModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1rem' }}>Raise Manpower Requisition</h3>
            <form onSubmit={handleCreateReq} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="grid-2">
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Department</label>
                  <select value={form.dept} onChange={(e) => setForm({ ...form, dept: e.target.value })} className="form-select">
                    <option value="Engineering">Engineering</option>
                    <option value="Product Management">Product Management</option>
                    <option value="Growth & Marketing">Growth & Marketing</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Designation Title</label>
                  <input type="text" value={form.designation} onChange={(e) => setForm({ ...form, designation: e.target.value })} className="form-input" />
                </div>
              </div>

              <div className="grid-2">
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Vacancies</label>
                  <input type="number" value={form.vacancies} onChange={(e) => setForm({ ...form, vacancies: e.target.value })} className="form-input" />
                </div>
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Budget Available Flag</label>
                  <select value={form.budgetAvailable ? 'yes' : 'no'} onChange={(e) => setForm({ ...form, budgetAvailable: e.target.value === 'yes' })} className="form-select">
                    <option value="yes">Yes (Normal Approval Flow)</option>
                    <option value="no">No (Triggers Exception Flow)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <button type="button" onClick={() => setShowReqModal(false)} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Submit Requisition</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// --- MODULE 3: JOB DESCRIPTION (JD) ---
export function JobDescriptionsModule({ jds }) {
  const [selectedJd, setSelectedJd] = useState(jds[0]);
  const [showAiModal, setShowAiModal] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="badge badge-purple">Module 3</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Job Description (JD) Master Vault</h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Maintain standard competency matrices, skills requirements, & job roles catalog.
          </p>
        </div>

        <button onClick={() => setShowAiModal(true)} className="btn btn-primary btn-sm">
          <Sparkles size={16} /> Generate JD with AI Copilot
        </button>
      </div>

      <div className="grid-3">
        {/* Left Side: JD Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {jds.map((jd) => (
            <div
              key={jd.id}
              onClick={() => setSelectedJd(jd)}
              className="glass-card"
              style={{
                padding: '1rem',
                cursor: 'pointer',
                borderLeft: selectedJd?.id === jd.id ? '4px solid var(--primary)' : '1px solid var(--border-subtle)',
                background: selectedJd?.id === jd.id ? 'rgba(99, 102, 241, 0.15)' : 'var(--bg-card)'
              }}
            >
              <div style={{ fontSize: '0.7rem', color: '#818cf8', fontWeight: 700 }}>{jd.id} • {jd.grade}</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', margin: '0.2rem 0' }}>{jd.title}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{jd.dept} • {jd.expYears}</div>
            </div>
          ))}
        </div>

        {/* Right Side: Detailed JD View */}
        {selectedJd && (
          <div className="glass-card" style={{ gridColumn: 'span 2', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div>
                <span className="badge badge-emerald">{selectedJd.status}</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '0.3rem' }}>{selectedJd.title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{selectedJd.dept} | Grade: {selectedJd.grade} | Exp: {selectedJd.expYears}</p>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>Target Salary Bracket</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#34d399' }}>{selectedJd.salaryRange}</div>
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#818cf8', marginBottom: '0.5rem' }}>Required Competencies & Skills</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {selectedJd.skills.map((s, i) => (
                  <span key={i} className="badge badge-indigo">{s}</span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#818cf8', marginBottom: '0.5rem' }}>Education & Qualification Requirements</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>{selectedJd.education}</p>
            </div>

            <div>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#818cf8', marginBottom: '0.5rem' }}>Key Responsibilities & Deliverables</h4>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.825rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {selectedJd.roles.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {showAiModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              <Sparkles size={18} color="#818cf8" /> Generate JD with AI Copilot
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              AI will generate roles, responsibilities, technical skill tags & market competitive salary bands.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); setShowAiModal(false); confetti(); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Job Title Prompt</label>
                <input type="text" defaultValue="Principal Cloud Security Architect" className="form-input" />
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <button type="button" onClick={() => setShowAiModal(false)} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Generate AI JD Template</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// --- MODULE 4: RECRUITMENT & SOURCING ---
export function RecruitmentSourcingModule({ channels }) {
  const [showReferralModal, setShowReferralModal] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="badge badge-amber">Module 4</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Recruitment & Sourcing Engine</h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Track internal job postings (IJP), employee referral rewards, & external campaign performance.
          </p>
        </div>

        <button onClick={() => setShowReferralModal(true)} className="btn btn-primary btn-sm">
          <Share2 size={16} /> Submit Employee Referral
        </button>
      </div>

      <div className="glass-card" style={{ padding: '1rem' }}>
        <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem' }}>
          Sourcing Channel Performance & Conversion Yield
        </h3>

        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.825rem', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
              <th style={{ padding: '0.6rem' }}>SOURCING CHANNEL</th>
              <th style={{ padding: '0.6rem' }}>APPLICATIONS</th>
              <th style={{ padding: '0.6rem' }}>HIRES (YTD)</th>
              <th style={{ padding: '0.6rem' }}>COST PER HIRE</th>
              <th style={{ padding: '0.6rem' }}>YIELD RATE</th>
              <th style={{ padding: '0.6rem' }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {channels.map((ch, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700, color: '#fff' }}>{ch.name}</td>
                <td style={{ padding: '0.75rem 0.6rem' }}>{ch.applications} Applicants</td>
                <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700, color: '#34d399' }}>{ch.hiresThisYear} Hires</td>
                <td style={{ padding: '0.75rem 0.6rem', color: 'var(--text-secondary)' }}>{ch.costPerHire}</td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  <span className="badge badge-cyan">{ch.yieldRate}</span>
                </td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  <button onClick={() => setSelectedChannel(ch)} className="btn btn-secondary btn-sm">
                    <Eye size={14} /> Analytics
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedChannel && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Channel Analytics: {selectedChannel.name}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', fontSize: '0.85rem', marginTop: '1rem' }}>
              <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                <div style={{ color: 'var(--text-muted)' }}>Conversion Yield Rate</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#34d399' }}>{selectedChannel.yieldRate}</div>
              </div>
              <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                <div style={{ color: 'var(--text-muted)' }}>Average Cost Per Hire</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#818cf8' }}>{selectedChannel.costPerHire}</div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
              <button onClick={() => setSelectedChannel(null)} className="btn btn-secondary">Close</button>
            </div>
          </div>
        </div>
      )}

      {showReferralModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1rem' }}>Submit Employee Referral</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Refer a candidate & earn up to $2,500 referral bonus upon successful 90-day onboarding!
            </p>
            <form onSubmit={(e) => { e.preventDefault(); setShowReferralModal(false); confetti(); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Candidate Name</label>
                <input type="text" placeholder="e.g. Alex Taylor" className="form-input" required />
              </div>
              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Candidate Email</label>
                <input type="email" placeholder="alex.taylor@email.com" className="form-input" required />
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <button type="button" onClick={() => setShowReferralModal(false)} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Submit Referral</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
