import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import FlowChartVisualizer from './components/FlowChartVisualizer';
import SmartAlertsDrawer from './components/SmartAlertsDrawer';
import SystemFoundationModal from './components/SystemFoundationModal';

import { 
  WorkforceBudgetingModule, 
  ManpowerRequisitionModule, 
  JobDescriptionsModule, 
  RecruitmentSourcingModule 
} from './modules/Phase1Modules';

import { 
  CandidateMasterModule, 
  ScreeningInterviewModule, 
  OfferProcessModule, 
  DocumentCollectionModule, 
  BackgroundVerificationModule, 
  OnboardingInductionModule, 
  EmployeeMasterModule 
} from './modules/Phase2Modules';

import { 
  ProbationManagementModule, 
  AttendanceManagementModule, 
  LeaveManagementModule, 
  PayrollManagementModule, 
  ExpenseManagementModule, 
  AssetManagementModule, 
  LearningDevelopmentModule, 
  PerformanceManagementModule, 
  SelfServicePortalsModule 
} from './modules/Phase3Modules';

import { ExitManagementModule } from './modules/ExitManagement';

import { 
  INITIAL_ROLE, 
  SYSTEM_METRICS, 
  WORKFORCE_PLANS, 
  MANPOWER_REQUISITIONS, 
  JOB_DESCRIPTIONS, 
  SOURCING_CHANNELS, 
  CANDIDATES, 
  INTERVIEW_ROUNDS, 
  OFFERS, 
  CANDIDATE_DOCUMENTS, 
  BACKGROUND_CHECKS, 
  ONBOARDING_RECORDS, 
  EMPLOYEES, 
  PROBATION_REVIEWS, 
  ATTENDANCE_RECORDS, 
  LEAVE_BALANCES, 
  LEAVE_REQUESTS, 
  PAYROLL_RUNS, 
  EXPENSE_CLAIMS, 
  ASSET_INVENTORY, 
  TRAINING_COURSES, 
  PERFORMANCE_REVIEWS, 
  EXIT_CASES, 
  SMART_ALERTS 
} from './data/mockData';

export default function App() {
  const [activeRole, setActiveRole] = useState(INITIAL_ROLE);
  const [viewMode, setViewMode] = useState('diagram'); // 'diagram' | 'modules'
  const [activeModuleKey, setActiveModuleKey] = useState('workforce');
  const [searchQuery, setSearchQuery] = useState('');

  // Drawers & Modals
  const [showAlertsDrawer, setShowAlertsDrawer] = useState(false);
  const [showFoundationModal, setShowFoundationModal] = useState(false);

  // Application Master States
  const [metrics, setMetrics] = useState(SYSTEM_METRICS);
  const [plans, setPlans] = useState(WORKFORCE_PLANS);
  const [requisitions, setRequisitions] = useState(MANPOWER_REQUISITIONS);
  const [jds, setJds] = useState(JOB_DESCRIPTIONS);
  const [channels] = useState(SOURCING_CHANNELS);
  const [candidates, setCandidates] = useState(CANDIDATES);
  const [interviews] = useState(INTERVIEW_ROUNDS);
  const [offers, setOffers] = useState(OFFERS);
  const [docs, setDocs] = useState(CANDIDATE_DOCUMENTS);
  const [bgvList] = useState(BACKGROUND_CHECKS);
  const [onboardingList, setOnboardingList] = useState(ONBOARDING_RECORDS);
  const [employees] = useState(EMPLOYEES);
  const [probationList, setProbationList] = useState(PROBATION_REVIEWS);
  const [attendance, setAttendance] = useState(ATTENDANCE_RECORDS);
  const [leaveBalances] = useState(LEAVE_BALANCES);
  const [leaveRequests, setLeaveRequests] = useState(LEAVE_REQUESTS);
  const [payrollRuns, setPayrollRuns] = useState(PAYROLL_RUNS);
  const [expenses] = useState(EXPENSE_CLAIMS);
  const [assets] = useState(ASSET_INVENTORY);
  const [courses] = useState(TRAINING_COURSES);
  const [reviews] = useState(PERFORMANCE_REVIEWS);
  const [exitCases, setExitCases] = useState(EXIT_CASES);
  const [alerts] = useState(SMART_ALERTS);

  const handleSelectModuleFromDiagram = (key) => {
    setActiveModuleKey(key);
    setViewMode('modules');
  };

  const renderActiveModule = () => {
    switch (activeModuleKey) {
      case 'workforce':
        return <WorkforceBudgetingModule plans={plans} setPlans={setPlans} />;
      case 'requisition':
        return <ManpowerRequisitionModule requisitions={requisitions} setRequisitions={setRequisitions} />;
      case 'jd':
        return <JobDescriptionsModule jds={jds} />;
      case 'sourcing':
        return <RecruitmentSourcingModule channels={channels} />;
      case 'candidate':
        return <CandidateMasterModule candidates={candidates} setCandidates={setCandidates} />;
      case 'screening':
        return <ScreeningInterviewModule interviews={interviews} candidates={candidates} setCandidates={setCandidates} />;
      case 'offer':
        return <OfferProcessModule offers={offers} setOffers={setOffers} />;
      case 'documents':
        return <DocumentCollectionModule docs={docs} setDocs={setDocs} />;
      case 'bgv':
        return <BackgroundVerificationModule bgvList={bgvList} />;
      case 'onboarding':
        return <OnboardingInductionModule onboardingList={onboardingList} setOnboardingList={setOnboardingList} />;
      case 'employee_master':
        return <EmployeeMasterModule employees={employees} />;
      case 'probation':
        return <ProbationManagementModule probationList={probationList} setProbationList={setProbationList} />;
      case 'attendance':
        return <AttendanceManagementModule attendance={attendance} setAttendance={setAttendance} />;
      case 'leave':
        return <LeaveManagementModule leaveRequests={leaveRequests} setLeaveRequests={setLeaveRequests} balances={leaveBalances} />;
      case 'payroll':
        return <PayrollManagementModule payrollRuns={payrollRuns} setPayrollRuns={setPayrollRuns} />;
      case 'expense':
        return <ExpenseManagementModule expenses={expenses} />;
      case 'asset':
        return <AssetManagementModule assets={assets} />;
      case 'learning':
        return <LearningDevelopmentModule courses={courses} />;
      case 'performance':
        return <PerformanceManagementModule reviews={reviews} />;
      case 'ess':
        return <SelfServicePortalsModule isManager={false} employees={employees} />;
      case 'mss':
        return <SelfServicePortalsModule isManager={true} employees={employees} />;
      case 'exit':
        return <ExitManagementModule exitCases={exitCases} setExitCases={setExitCases} />;
      default:
        return <WorkforceBudgetingModule plans={plans} setPlans={setPlans} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-main)' }}>
      
      {/* Top Header */}
      <Header 
        activeRole={activeRole} 
        setActiveRole={setActiveRole}
        activeModule={activeModuleKey}
        setActiveModule={setActiveModuleKey}
        viewMode={viewMode}
        setViewMode={setViewMode}
        unreadAlertsCount={alerts.length}
        setShowAlertsDrawer={setShowAlertsDrawer}
        setShowFoundationModal={setShowFoundationModal}
        metrics={metrics}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content Area */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        
        {/* Left Sidebar */}
        <Sidebar 
          activeModuleKey={activeModuleKey} 
          setActiveModuleKey={setActiveModuleKey}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />

        {/* Workspace Body */}
        <main style={{ flex: 1, height: 'calc(100vh - 85px)', overflowY: 'auto', backgroundColor: 'var(--bg-main)' }}>
          {viewMode === 'diagram' ? (
            <FlowChartVisualizer onSelectModule={handleSelectModuleFromDiagram} />
          ) : (
            <div style={{ padding: '1.5rem', maxWidth: '1400px', margin: '0 auto' }}>
              {renderActiveModule()}
            </div>
          )}
        </main>
      </div>

      {/* Slide-over Drawers & Modals */}
      <SmartAlertsDrawer 
        alerts={alerts} 
        isOpen={showAlertsDrawer} 
        onClose={() => setShowAlertsDrawer(false)}
        onSelectModule={handleSelectModuleFromDiagram}
      />

      <SystemFoundationModal 
        isOpen={showFoundationModal} 
        onClose={() => setShowFoundationModal(false)}
      />

    </div>
  );
}
