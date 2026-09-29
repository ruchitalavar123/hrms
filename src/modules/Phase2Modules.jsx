import React, { useState } from 'react';
import { 
  UserPlus, 
  Calendar, 
  Award, 
  FolderCheck, 
  ShieldCheck, 
  UserCheck, 
  Users, 
  Star, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  FileText, 
  Eye, 
  Plus, 
  Download, 
  Sparkles,
  Search,
  Check,
  Building2,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  DollarSign,
  Lock,
  ChevronRight,
  Shield,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';

// --- MODULE 5: CANDIDATE & APPLICATION MASTER ---
export function CandidateMasterModule({ candidates, setCandidates }) {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="badge badge-cyan">Module 5</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Candidate & Application Master</h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Central repository for candidate master records & application tracking IDs.
          </p>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '1rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.825rem', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
              <th style={{ padding: '0.6rem' }}>CANDIDATE ID & APP ID</th>
              <th style={{ padding: '0.6rem' }}>CANDIDATE NAME</th>
              <th style={{ padding: '0.6rem' }}>TARGET POSITION</th>
              <th style={{ padding: '0.6rem' }}>SOURCING CHANNEL</th>
              <th style={{ padding: '0.6rem' }}>STAGE</th>
              <th style={{ padding: '0.6rem' }}>SCORE</th>
              <th style={{ padding: '0.6rem' }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((c) => (
              <tr key={c.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  <div style={{ fontWeight: 700, color: '#22d3ee' }}>{c.id}</div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>{c.appId}</div>
                </td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  <div style={{ fontWeight: 700, color: '#fff' }}>{c.name}</div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>{c.email}</div>
                </td>
                <td style={{ padding: '0.75rem 0.6rem' }}>{c.designation}</td>
                <td style={{ padding: '0.75rem 0.6rem', color: 'var(--text-secondary)' }}>{c.source}</td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  <span className="badge badge-indigo">{c.stage}</span>
                </td>
                <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700, color: '#34d399' }}>
                  ★ {c.score}
                </td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  <button onClick={() => setSelectedCandidate(c)} className="btn btn-secondary btn-sm">
                    <Eye size={14} /> Profile View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedCandidate && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div>
                <span className="badge badge-cyan">{selectedCandidate.appId}</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '0.2rem' }}>{selectedCandidate.name}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{selectedCandidate.designation} | {selectedCandidate.currentCompany}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Interview Score</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#34d399' }}>★ {selectedCandidate.score}/10</div>
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <h4 style={{ fontSize: '0.8rem', color: '#818cf8', fontWeight: 700, marginBottom: '0.5rem' }}>Skills & Experience</h4>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {selectedCandidate.skills.map((s, i) => (
                  <span key={i} className="badge badge-indigo">{s}</span>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '0.8rem', color: '#818cf8', fontWeight: 700, marginBottom: '0.5rem' }}>Application Timeline History</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {selectedCandidate.history.map((h, i) => (
                  <div key={i} style={{ fontSize: '0.775rem', padding: '0.5rem', background: 'rgba(15, 23, 42, 0.6)', borderRadius: 'var(--radius-sm)' }}>
                    <span style={{ color: 'var(--text-muted)' }}>[{h.date}]</span> <strong>{h.note}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
              <button onClick={() => setSelectedCandidate(null)} className="btn btn-secondary">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- MODULE 6: SCREENING & INTERVIEW ---
export function ScreeningInterviewModule({ interviews }) {
  const [showScorecardModal, setShowScorecardModal] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="badge badge-cyan">Module 6</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Screening & Interview Hub</h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Schedule interview rounds, evaluate scorecards & record hiring recommendations.
          </p>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '1rem' }}>
        <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem' }}>
          Scheduled Interview Rounds & Evaluation Pipeline
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {interviews.map((int) => (
            <div key={int.id} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid var(--border-subtle)',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: '#22d3ee', fontWeight: 700 }}>{int.id} • {int.type}</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>{int.candidateName}</div>
                <div style={{ fontSize: '0.775rem', color: 'var(--text-secondary)' }}>{int.roundName} (Interviewer: {int.interviewer})</div>
                <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>🕒 {int.scheduledTime}</div>
              </div>

              <div>
                <span className={`badge ${int.status === 'Completed' ? 'badge-emerald' : 'badge-amber'}`}>
                  {int.status}
                </span>
              </div>

              <div>
                <button onClick={() => setShowScorecardModal(int)} className="btn btn-primary btn-sm">
                  <Star size={14} /> View Scorecard
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showScorecardModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.3rem' }}>
              Scorecard: {showScorecardModal.candidateName}
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              {showScorecardModal.roundName}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
              <div>Rating: <strong>★ {showScorecardModal.scorecard.rating}/5</strong></div>
              <div>Feedback: <em>"{showScorecardModal.scorecard.feedback}"</em></div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
              <button onClick={() => setShowScorecardModal(null)} className="btn btn-secondary">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- MODULE 7: SELECTION & OFFER PROCESS ---
export function OfferProcessModule({ offers, setOffers }) {
  const [showOfferPreview, setShowOfferPreview] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="badge badge-emerald">Module 7</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Selection & Offer Generator</h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Validate compensation budgets, generate formal offer letters & track candidate acceptance.
          </p>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '1rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.825rem', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
              <th style={{ padding: '0.6rem' }}>OFFER ID</th>
              <th style={{ padding: '0.6rem' }}>CANDIDATE & ROLE</th>
              <th style={{ padding: '0.6rem' }}>COMPENSATION PACKAGE</th>
              <th style={{ padding: '0.6rem' }}>TARGET DOJ</th>
              <th style={{ padding: '0.6rem' }}>STATUS</th>
              <th style={{ padding: '0.6rem' }}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {offers.map((off) => (
              <tr key={off.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700, color: '#34d399' }}>{off.id}</td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  <div style={{ fontWeight: 700, color: '#fff' }}>{off.candidateName}</div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>{off.designation} ({off.grade})</div>
                </td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  <div style={{ fontWeight: 700, color: '#34d399' }}>${(off.baseSalary / 1000).toFixed(0)}k Base</div>
                </td>
                <td style={{ padding: '0.75rem 0.6rem', fontWeight: 600 }}>{off.targetDoj}</td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  <span className={`badge ${off.status === 'Accepted' ? 'badge-emerald' : 'badge-cyan'}`}>
                    {off.status}
                  </span>
                </td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  <button onClick={() => setShowOfferPreview(off)} className="btn btn-secondary btn-sm">
                    <FileText size={14} /> Offer Letter
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showOfferPreview && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ padding: '2rem', maxWidth: '720px' }}>
            <div style={{ textAlign: 'center', borderBottom: '2px solid var(--primary)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>NEXUS HRMS GLOBAL CORP</h2>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>CONFIDENTIAL OFFER OF EMPLOYMENT LETTER</p>
            </div>
            <div>
              <p>Dear <strong>{showOfferPreview.candidateName}</strong>,</p>
              <p>Position: <strong>{showOfferPreview.designation}</strong></p>
              <p>Base Salary: <strong>${showOfferPreview.baseSalary.toLocaleString()} USD</strong></p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
              <button onClick={() => setShowOfferPreview(null)} className="btn btn-secondary">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- MODULE 8: DOCUMENT COLLECTION ---
export function DocumentCollectionModule({ docs, setDocs }) {
  const handleVerify = (id) => {
    setDocs(docs.map(d => d.id === id ? { ...d, status: 'Accepted' } : d));
    confetti({ particleCount: 30 });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span className="badge badge-cyan">Module 8</span>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Document Collection Portal</h2>
      </div>

      <div className="glass-card" style={{ padding: '1rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.825rem', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
              <th style={{ padding: '0.6rem' }}>DOC ID</th>
              <th style={{ padding: '0.6rem' }}>CANDIDATE</th>
              <th style={{ padding: '0.6rem' }}>DOCUMENT TYPE</th>
              <th style={{ padding: '0.6rem' }}>STATUS</th>
              <th style={{ padding: '0.6rem' }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {docs.map((d) => (
              <tr key={d.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700, color: '#818cf8' }}>{d.id}</td>
                <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700, color: '#fff' }}>{d.candidateName}</td>
                <td style={{ padding: '0.75rem 0.6rem' }}>{d.docType}</td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  <span className={`badge ${d.status === 'Accepted' ? 'badge-emerald' : 'badge-amber'}`}>
                    {d.status}
                  </span>
                </td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  {d.status !== 'Accepted' && (
                    <button onClick={() => handleVerify(d.id)} className="btn btn-success btn-sm">
                      Verify & Accept
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- MODULE 9: BACKGROUND VERIFICATION (BGV) ---
export function BackgroundVerificationModule({ bgvList }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span className="badge badge-amber">Module 9</span>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Background Verification (BGV)</h2>
      </div>

      <div className="glass-card" style={{ padding: '1rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.825rem', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
              <th style={{ padding: '0.6rem' }}>BGV ID</th>
              <th style={{ padding: '0.6rem' }}>CANDIDATE</th>
              <th style={{ padding: '0.6rem' }}>AGENCY</th>
              <th style={{ padding: '0.6rem' }}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {bgvList.map((b) => (
              <tr key={b.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700, color: '#fbbf24' }}>{b.id}</td>
                <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700, color: '#fff' }}>{b.candidateName}</td>
                <td style={{ padding: '0.75rem 0.6rem' }}>{b.agency}</td>
                <td style={{ padding: '0.75rem 0.6rem' }}>
                  <span className={`badge ${b.overallStatus === 'Clear' ? 'badge-emerald' : 'badge-amber'}`}>
                    {b.overallStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- MODULE 10: ONBOARDING & INDUCTION (ENHANCED DETAIL) ---
export function OnboardingInductionModule({ onboardingList, setOnboardingList }) {
  const [showWizardModal, setShowWizardModal] = useState(false);
  const [selectedOnbDetail, setSelectedOnbDetail] = useState(null);

  const onboardingSteps = [
    { num: 1, name: '1. Pre-Onboarding Kit', desc: 'Welcome pack, swag & handbook sent' },
    { num: 2, name: '2. Policy Signoff', desc: 'NDA, Code of Conduct, IT agreement' },
    { num: 3, name: '3. IT Provisioning', desc: 'Email, Slack, GitHub, VPN & AWS SSO' },
    { num: 4, name: '4. Hardware & Badge', desc: 'MacBook M3, Security Card issued' },
    { num: 5, name: '5. Dept Orientation', desc: 'Buddy assigned & intro call' },
    { num: 6, name: '6. Joining Confirm', desc: 'Outcome: Joined -> Auto-Emp ID!' },
  ];

  const handleConfirmJoining = (id) => {
    const empId = `EMP-${Math.floor(1050 + Math.random() * 50)}`;
    setOnboardingList(onboardingList.map(o => o.id === id ? { ...o, joiningOutcome: 'Joined', empIdGenerated: empId } : o));
    confetti({ particleCount: 100, spread: 90 });
  };

  const handleToggleAccess = (onbId, accessKey) => {
    setOnboardingList(onboardingList.map(o => {
      if (o.id === onbId) {
        return {
          ...o,
          itSystemAccess: {
            ...o.itSystemAccess,
            [accessKey]: !o.itSystemAccess[accessKey]
          }
        };
      }
      return o;
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Header Banner */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="badge badge-cyan">Module 10</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Pre-Onboarding & Induction Workspace</h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Complete 6-stage employee onboarding pipeline with IT provisioning & automated Employee ID generation.
          </p>
        </div>

        <button onClick={() => setShowWizardModal(true)} className="btn btn-primary btn-sm">
          <Plus size={16} /> Initiate New Onboarding Wizard
        </button>
      </div>

      {/* 6-Stage Visual Onboarding Pipeline Stepper */}
      <div className="glass-card" style={{ padding: '1.25rem', overflowX: 'auto' }}>
        <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#818cf8', marginBottom: '1rem' }}>
          Standardized 6-Stage Employee Onboarding Workflow
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem', minWidth: '750px' }}>
          {onboardingSteps.map((s) => (
            <div key={s.num} style={{
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '0.75rem',
              borderTop: '3px solid #06b6d4'
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#22d3ee' }}>{s.name}</div>
              <div style={{ fontSize: '0.675rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Onboarding Records Cards */}
      <div className="grid-2">
        {onboardingList.map((onb) => (
          <div key={onb.id} className="glass-card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            {/* Header info */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span className="badge badge-cyan">{onb.id}</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginTop: '0.2rem' }}>{onb.candidateName}</h3>
                <p style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>{onb.designation} • {onb.department}</p>
              </div>

              {onb.joiningOutcome === 'Joined' ? (
                <span className="badge badge-emerald" style={{ fontSize: '0.75rem' }}>
                  <CheckCircle2 size={12} /> Joined ({onb.empIdGenerated})
                </span>
              ) : (
                <span className="badge badge-amber" style={{ fontSize: '0.75rem' }}>
                  <Clock size={12} /> Pending Joining Date ({onb.joiningDate})
                </span>
              )}
            </div>

            {/* Checklist items breakdown */}
            <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '0.85rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#818cf8' }}>IT System Access & Badging Checklist:</div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', fontSize: '0.75rem' }}>
                <div 
                  onClick={() => handleToggleAccess(onb.id, 'emailCreated')}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', color: onb.itSystemAccess.emailCreated ? '#34d399' : 'var(--text-muted)' }}
                >
                  {onb.itSystemAccess.emailCreated ? <CheckCircle2 size={14} /> : <XCircle size={14} />} Corporate Email Account
                </div>

                <div 
                  onClick={() => handleToggleAccess(onb.id, 'slackInvite')}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', color: onb.itSystemAccess.slackInvite ? '#34d399' : 'var(--text-muted)' }}
                >
                  {onb.itSystemAccess.slackInvite ? <CheckCircle2 size={14} /> : <XCircle size={14} />} Slack Workspace Invite
                </div>

                <div 
                  onClick={() => handleToggleAccess(onb.id, 'githubAccess')}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', color: onb.itSystemAccess.githubAccess ? '#34d399' : 'var(--text-muted)' }}
                >
                  {onb.itSystemAccess.githubAccess ? <CheckCircle2 size={14} /> : <XCircle size={14} />} GitHub / Cloud Access
                </div>

                <div 
                  onClick={() => handleToggleAccess(onb.id, 'vpnAccess')}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', color: onb.itSystemAccess.vpnAccess ? '#34d399' : 'var(--text-muted)' }}
                >
                  {onb.itSystemAccess.vpnAccess ? <CheckCircle2 size={14} /> : <XCircle size={14} />} Secure VPN Gateway
                </div>
              </div>

              <div style={{ borderTop: '1px dashed var(--border-subtle)', paddingTop: '0.5rem', marginTop: '0.25rem', fontSize: '0.725rem', color: 'var(--text-secondary)' }}>
                💻 <strong>Hardware Allocated:</strong> {onb.assetProvisioned.laptop} | 🪪 <strong>Badge:</strong> {onb.assetProvisioned.idBadge}
              </div>
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
              {onb.joiningOutcome !== 'Joined' ? (
                <button onClick={() => handleConfirmJoining(onb.id)} className="btn btn-success btn-sm" style={{ width: '100%' }}>
                  <UserCheck size={16} /> Confirm Joining & Issue Employee Master ID
                </button>
              ) : (
                <button onClick={() => setSelectedOnbDetail(onb)} className="btn btn-secondary btn-sm" style={{ width: '100%' }}>
                  <Eye size={14} /> View Complete Onboarding Summary
                </button>
              )}
            </div>

          </div>
        ))}
      </div>

      {/* Onboarding Wizard Modal */}
      {showWizardModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem' }}>Initiate New Employee Onboarding</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Provision IT assets, welcome kit, orientation date & initiate joining workflow.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); setShowWizardModal(false); confetti(); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Select Offer Accepted Candidate</label>
                <select className="form-select">
                  <option value="Sophia Chen">Sophia Chen (Staff AI Product Manager)</option>
                  <option value="Devon Miller">Devon Miller (Performance Marketing Specialist)</option>
                </select>
              </div>

              <div className="grid-2">
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Confirmed Joining Date</label>
                  <input type="date" defaultValue="2026-10-15" className="form-input" />
                </div>
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Assign Hardware Laptop</label>
                  <input type="text" defaultValue='MacBook Pro 16" M3 Max' className="form-input" />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <button type="button" onClick={() => setShowWizardModal(false)} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Start Onboarding Sequence</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Detail Summary Modal */}
      {selectedOnbDetail && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.3rem' }}>
              Onboarding Audit Record for {selectedOnbDetail.candidateName}
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Generated Employee ID: <strong style={{ color: '#34d399' }}>{selectedOnbDetail.empIdGenerated}</strong>
            </p>

            <div style={{ fontSize: '0.825rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div>✓ Welcome Kit Dispatched: Yes</div>
              <div>✓ Digital Policy Acceptance: Completed</div>
              <div>✓ IT Accounts (Email, Slack, GitHub, VPN): Fully Provisioned</div>
              <div>✓ Induction Session: Completed on {selectedOnbDetail.inductionScheduled}</div>
              <div>✓ Employee Master Record: Successfully Created</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
              <button onClick={() => setSelectedOnbDetail(null)} className="btn btn-secondary">Close</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// --- MODULE 11: EMPLOYEE MASTER REGISTRY (360° PROFILE ENHANCED DETAIL) ---
export function EmployeeMasterModule({ employees }) {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="badge badge-indigo">Module 11</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Employee Master Registry (360° Profile)</h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Centralized employee master database containing personal, family, statutory, compensation & document vault records.
          </p>
        </div>
      </div>

      {/* Grid of Employee Profile Cards */}
      <div className="grid-2">
        {employees.map((emp) => (
          <div 
            key={emp.id} 
            className="glass-card glow-on-hover" 
            style={{ padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', position: 'relative' }}
          >
            <img 
              src={emp.avatar} 
              alt={emp.name} 
              style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--primary)', boxShadow: '0 0 12px rgba(99, 102, 241, 0.4)' }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="badge badge-indigo" style={{ fontWeight: 800 }}>{emp.id}</span>
                <span className={`badge ${emp.status === 'Confirmed' ? 'badge-emerald' : emp.status === 'Probation' ? 'badge-amber' : 'badge-cyan'}`}>
                  {emp.status}
                </span>
              </div>
              
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginTop: '0.3rem' }}>{emp.name}</h3>
              <p style={{ fontSize: '0.8rem', color: '#818cf8', fontWeight: 600 }}>{emp.designation} • {emp.department}</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.4rem', marginTop: '0.75rem', fontSize: '0.725rem', color: 'var(--text-secondary)' }}>
                <div>📧 {emp.email}</div>
                <div>📞 {emp.phone}</div>
                <div>📍 {emp.location}</div>
                <div>👔 Manager: {emp.manager}</div>
              </div>

              <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                <button 
                  onClick={() => {
                    setSelectedEmployee(emp);
                    setActiveTab('personal');
                  }} 
                  className="btn btn-primary btn-sm"
                  style={{ width: '100%' }}
                >
                  <Eye size={14} /> Open Full 360° Master Record
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 360° Comprehensive Employee Profile Modal Viewer */}
      {selectedEmployee && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: '880px', padding: '1.5rem', maxHeight: '90vh' }}>
            
            {/* Profile Header Card */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem',
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(99, 102, 241, 0.15) 100%)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img 
                  src={selectedEmployee.avatar} 
                  alt={selectedEmployee.name} 
                  style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--primary)' }}
                />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="badge badge-indigo">{selectedEmployee.id}</span>
                    <span className="badge badge-emerald">{selectedEmployee.status}</span>
                    <span className="badge badge-cyan">{selectedEmployee.employmentType}</span>
                  </div>
                  <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginTop: '0.2rem' }}>{selectedEmployee.name}</h2>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {selectedEmployee.designation} ({selectedEmployee.grade}) • {selectedEmployee.department} | Cost Center: {selectedEmployee.costCenter}
                  </p>
                </div>
              </div>

              <button onClick={() => setSelectedEmployee(null)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                <X size={22} />
              </button>
            </div>

            {/* 7 Tab Navigation Ribbon */}
            <div style={{ display: 'flex', gap: '0.4rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.6rem', marginBottom: '1rem', overflowX: 'auto' }}>
              {[
                { id: 'personal', label: '👤 Personal & Contact' },
                { id: 'family', label: '👨‍👩‍👧 Family & Emergency' },
                { id: 'statutory', label: '🏛️ Rank, Statutory & Tax' },
                { id: 'compensation', label: '💰 Compensation & Banking' },
                { id: 'employment', label: '⚙️ Employment & Roster' },
                { id: 'education', label: '🎓 Education & Background' },
                { id: 'docs', label: '📁 Document Vault' },
              ].map(t => (
                <button 
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`btn btn-sm ${activeTab === t.id ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ fontSize: '0.75rem', whiteSpace: 'nowrap' }}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Tab 1: Personal & Contact Details */}
            {activeTab === 'personal' && (
              <div className="grid-2" style={{ fontSize: '0.825rem' }}>
                <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#818cf8', marginBottom: '0.2rem' }}>Personal Identity</h4>
                  <div>🎂 <strong>Date of Birth:</strong> {selectedEmployee.personal.dob}</div>
                  <div>⚧ <strong>Gender:</strong> {selectedEmployee.personal.gender}</div>
                  <div>🩸 <strong>Blood Group:</strong> {selectedEmployee.personal.bloodGroup}</div>
                  <div>💍 <strong>Marital Status:</strong> {selectedEmployee.personal.maritalStatus}</div>
                  <div>🌐 <strong>Nationality:</strong> {selectedEmployee.personal.nationality}</div>
                  <div>🛂 <strong>Passport No:</strong> {selectedEmployee.personal.passportNo}</div>
                </div>

                <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#818cf8', marginBottom: '0.2rem' }}>Contact Information</h4>
                  <div>💼 <strong>Work Email:</strong> {selectedEmployee.email}</div>
                  <div>📧 <strong>Personal Email:</strong> {selectedEmployee.personalEmail}</div>
                  <div>📞 <strong>Primary Phone:</strong> {selectedEmployee.phone}</div>
                  <div>☎️ <strong>Work Extension:</strong> {selectedEmployee.workExtension}</div>
                  <div>🏠 <strong>Residential Address:</strong> {selectedEmployee.personal.residentialAddress}</div>
                  <div>📍 <strong>Permanent Address:</strong> {selectedEmployee.personal.permanentAddress}</div>
                </div>
              </div>
            )}

            {/* Tab 2: Family & Emergency */}
            {activeTab === 'family' && (
              <div className="grid-2" style={{ fontSize: '0.825rem' }}>
                <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#818cf8', marginBottom: '0.2rem' }}>Family Overview</h4>
                  <div>❤️ <strong>Spouse Name:</strong> {selectedEmployee.family.spouseName}</div>
                  <div>👶 <strong>Dependents Count:</strong> {selectedEmployee.family.dependents}</div>
                </div>

                <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fb7185', marginBottom: '0.2rem' }}>Emergency Contacts</h4>
                  <div style={{ borderBottom: '1px dashed var(--border-subtle)', paddingBottom: '0.4rem' }}>
                    <strong>Primary Emergency Contact:</strong> {selectedEmployee.family.emergencyPrimary.name} ({selectedEmployee.family.emergencyPrimary.relation})<br/>
                    📞 {selectedEmployee.family.emergencyPrimary.phone}
                  </div>
                  <div>
                    <strong>Secondary Emergency Contact:</strong> {selectedEmployee.family.emergencySecondary.name} ({selectedEmployee.family.emergencySecondary.relation})<br/>
                    📞 {selectedEmployee.family.emergencySecondary.phone}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Statutory & Tax */}
            {activeTab === 'statutory' && (
              <div className="grid-2" style={{ fontSize: '0.825rem' }}>
                <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#818cf8', marginBottom: '0.2rem' }}>Statutory & Tax Filing</h4>
                  <div>🆔 <strong>SSN / National ID:</strong> {selectedEmployee.statutory.ssn}</div>
                  <div>📝 <strong>Tax Filing Status:</strong> {selectedEmployee.statutory.taxFiling}</div>
                  <div>🔢 <strong>Tax Identification No (TIN):</strong> {selectedEmployee.statutory.taxId}</div>
                  <div>🏦 <strong>PF / 401(k) Account No:</strong> {selectedEmployee.statutory.pfAccount}</div>
                </div>

                <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#818cf8', marginBottom: '0.2rem' }}>Medical & Benefits ID</h4>
                  <div>🏥 <strong>Health Insurance Policy ID:</strong> {selectedEmployee.statutory.healthInsId}</div>
                  <div>🏢 <strong>Department Cost Center:</strong> {selectedEmployee.costCenter}</div>
                </div>
              </div>
            )}

            {/* Tab 4: Compensation & Banking */}
            {activeTab === 'compensation' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.825rem' }}>
                <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#34d399', marginBottom: '0.6rem' }}>Salary Structure & Equity Breakdown</h4>
                  <div className="grid-3">
                    <div>Base Salary: <strong>${selectedEmployee.compensation.baseSalary.toLocaleString()}</strong></div>
                    <div>HRA: <strong>${selectedEmployee.compensation.hra.toLocaleString()}</strong></div>
                    <div>Special Allowance: <strong>${selectedEmployee.compensation.specialAllowance.toLocaleString()}</strong></div>
                    <div>Performance Bonus: <strong>${selectedEmployee.compensation.performanceBonus.toLocaleString()}</strong></div>
                    <div>Stock Grants: <strong>{selectedEmployee.compensation.stockOptions}</strong></div>
                    <div style={{ color: '#34d399', fontWeight: 800 }}>Total Annual CTC: <strong>${selectedEmployee.compensation.totalCtc.toLocaleString()} USD</strong></div>
                  </div>
                </div>

                <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#818cf8', marginBottom: '0.6rem' }}>Direct Deposit Bank Account Details</h4>
                  <div className="grid-3">
                    <div>Bank Name: <strong>{selectedEmployee.statutory.bankName}</strong></div>
                    <div>Account Number: <strong>{selectedEmployee.statutory.bankAccount}</strong></div>
                    <div>Routing / ABA Code: <strong>{selectedEmployee.statutory.routingNo}</strong></div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 5: Employment & Roster */}
            {activeTab === 'employment' && (
              <div className="grid-2" style={{ fontSize: '0.825rem' }}>
                <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#818cf8', marginBottom: '0.2rem' }}>Employment Parameters</h4>
                  <div>📅 <strong>Date of Joining (DOJ):</strong> {selectedEmployee.joiningDate}</div>
                  <div>👔 <strong>Reporting Manager:</strong> {selectedEmployee.manager}</div>
                  <div>🏢 <strong>Work Location:</strong> {selectedEmployee.location}</div>
                  <div>💻 <strong>Work Mode:</strong> {selectedEmployee.workMode}</div>
                  <div>⏰ <strong>Shift Roster:</strong> {selectedEmployee.shiftRoster}</div>
                </div>

                <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#818cf8', marginBottom: '0.2rem' }}>Tenure & Probation Details</h4>
                  <div>⏳ <strong>Probation Status:</strong> {selectedEmployee.probationStatus}</div>
                  <div>⏱️ <strong>Probation Tenure:</strong> {selectedEmployee.probationTenure}</div>
                  <div>🚪 <strong>Notice Period:</strong> {selectedEmployee.noticePeriod}</div>
                </div>
              </div>
            )}

            {/* Tab 6: Education & Experience */}
            {activeTab === 'education' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.825rem' }}>
                <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#818cf8', marginBottom: '0.5rem' }}>Education Qualifications</h4>
                  {selectedEmployee.education.map((edu, idx) => (
                    <div key={idx} style={{ marginBottom: '0.4rem' }}>
                      🎓 <strong>{edu.degree}</strong> – {edu.institution} ({edu.year}) | GPA: {edu.gpa}
                    </div>
                  ))}
                </div>

                <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#818cf8', marginBottom: '0.5rem' }}>Previous Employment History</h4>
                  {selectedEmployee.previousEmployment.map((prev, idx) => (
                    <div key={idx} style={{ marginBottom: '0.4rem' }}>
                      🏢 <strong>{prev.company}</strong> – {prev.designation} ({prev.tenure}) | Last CTC: {prev.lastCtc}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 7: Document Vault */}
            {activeTab === 'docs' && (
              <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#818cf8', marginBottom: '0.75rem' }}>Verified Employee Document Vault</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem' }}>
                  {selectedEmployee.documentsVault.map((doc, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FileText size={16} color="#818cf8" />
                        <div>
                          <strong style={{ color: '#fff' }}>{doc.name}</strong>
                          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Uploaded: {doc.date}</div>
                        </div>
                      </div>
                      <span className="badge badge-emerald"><CheckCircle2 size={12} /> Verified</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
              <button onClick={() => setSelectedEmployee(null)} className="btn btn-secondary">Close 360° Profile</button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
