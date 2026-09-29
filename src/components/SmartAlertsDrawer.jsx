import React from 'react';
import { 
  X, 
  AlertTriangle, 
  Clock, 
  DollarSign, 
  Gift, 
  CheckCircle2, 
  ChevronRight,
  Bell
} from 'lucide-react';

export default function SmartAlertsDrawer({ alerts, isOpen, onClose, onSelectModule }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      display: 'flex',
      justifyContent: 'flex-end',
      background: 'rgba(0, 0, 0, 0.6)',
      backdropFilter: 'blur(4px)'
    }}>
      <div style={{
        width: '420px',
        maxWidth: '100%',
        height: '100vh',
        backgroundColor: 'var(--bg-surface)',
        borderLeft: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-lg)',
        display: 'flex',
        flexDirection: 'column',
        animation: 'slideLeft 0.25s ease-out'
      }}>
        {/* Header */}
        <div style={{
          padding: '1.25rem',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Bell size={20} color="#818cf8" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Smart Automation & Alerts</h3>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {/* Alerts List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {alerts.map((alt) => (
            <div 
              key={alt.id}
              onClick={() => {
                onSelectModule(alt.actionModule);
                onClose();
              }}
              className="glass-card glow-on-hover"
              style={{
                padding: '1rem',
                cursor: 'pointer',
                borderLeft: alt.urgency === 'High' ? '4px solid #f43f5e' : alt.urgency === 'Medium' ? '4px solid #f59e0b' : '4px solid #10b981'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                <span className={`badge ${alt.urgency === 'High' ? 'badge-rose' : alt.urgency === 'Medium' ? 'badge-amber' : 'badge-emerald'}`}>
                  {alt.type}
                </span>
                <span style={{ fontSize: '0.675rem', color: 'var(--text-muted)' }}>Urgency: {alt.urgency}</span>
              </div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{alt.title}</h4>
              <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>{alt.desc}</p>
              
              <div style={{ marginTop: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.7rem', color: '#818cf8', fontWeight: 600 }}>
                Jump to module <ChevronRight size={12} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
