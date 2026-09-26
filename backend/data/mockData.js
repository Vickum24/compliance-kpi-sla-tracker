const summaryCards = [
  {
    title: 'CDD Turnaround',
    value: '3.2 days',
    target: '4.0 days',
    progress: 82,
    trend: '+12%',
    trendDirection: 'up',
    subtitle: 'Average customer due diligence review time.'
  },
  {
    title: 'Sanctions Coverage',
    value: '98.6%',
    target: '97.0%',
    progress: 96,
    trend: '+4%',
    trendDirection: 'up',
    subtitle: 'Customers screened within policy timeframe.'
  },
  {
    title: 'Open Alerts',
    value: '84',
    target: '90',
    progress: 72,
    trend: '-6%',
    trendDirection: 'down',
    subtitle: 'Alerts pending review or escalation.'
  },
  {
    title: 'SLA Compliance',
    value: '94.2%',
    target: '95.0%',
    progress: 94,
    trend: '+3%',
    trendDirection: 'up',
    subtitle: 'Investigations completed within agreed SLAs.'
  }
];

const teamPerformance = [
  { team: 'Customer Screening', completed: '456', sla: '96%', slaStatus: 'On track', risk: 'Low' },
  { team: 'Case Investigations', completed: '329', sla: '91%', slaStatus: 'At risk', risk: 'Medium' },
  { team: 'ODD Reviews', completed: '201', sla: '95%', slaStatus: 'On track', risk: 'Low' },
  { team: 'Escalation Desk', completed: '148', sla: '89%', slaStatus: 'At risk', risk: 'High' }
];

const weeklyTrend = [
  { day: 'Mon', score: 82 },
  { day: 'Tue', score: 85 },
  { day: 'Wed', score: 88 },
  { day: 'Thu', score: 90 },
  { day: 'Fri', score: 91 },
  { day: 'Sat', score: 94 },
  { day: 'Sun', score: 96 }
];

const slaHealth = [
  { team: 'KYC', sla: 96 },
  { team: 'AML', sla: 92 },
  { team: 'Sanctions', sla: 98 },
  { team: 'Investigations', sla: 89 },
  { team: 'Escalations', sla: 91 }
];

const alerts = [
  {
    id: 1,
    title: 'High-risk client review overdue',
    detail: '10 client files exceeded the 5-day review SLA.',
    priority: 'high',
    time: '45 min'
  },
  {
    id: 2,
    title: 'PEP screening mismatch',
    detail: '3 records require manual review for adverse media match.',
    priority: 'medium',
    time: '1 hr'
  },
  {
    id: 3,
    title: 'Suspicious activity escalation',
    detail: '2 cases transferred to the escalation desk awaiting decision.',
    priority: 'high',
    time: '2 hrs'
  },
  {
    id: 4,
    title: 'ODD annual review due',
    detail: '24 investor files require renewed due diligence.',
    priority: 'low',
    time: 'Today'
  }
];

const reporting = [
  { label: 'Jan', screening: 82, investigation: 88, monitoring: 76 },
  { label: 'Feb', screening: 84, investigation: 90, monitoring: 79 },
  { label: 'Mar', screening: 87, investigation: 92, monitoring: 81 },
  { label: 'Apr', screening: 89, investigation: 93, monitoring: 84 },
  { label: 'May', screening: 92, investigation: 94, monitoring: 86 },
  { label: 'Jun', screening: 94, investigation: 95, monitoring: 88 }
];

const workflowStatus = [
  { label: 'CDD Review', value: 84, color: '#2d6cdf' },
  { label: 'Sanctions Screening', value: 96, color: '#1aa77a' },
  { label: 'Escalations', value: 68, color: '#f29f05' },
  { label: 'Investigations', value: 79, color: '#d94b55' }
];

const regionalRisk = [
  { region: 'EMEA', score: 76 },
  { region: 'APAC', score: 68 },
  { region: 'Americas', score: 82 },
  { region: 'UK', score: 88 }
];

const backlog = [
  { name: 'High Risk Client Review', count: 18, due: '2 days', severity: 'Critical' },
  { name: 'PEP Screening Review', count: 12, due: '4 days', severity: 'High' },
  { name: 'ODD Renewals', count: 24, due: '5 days', severity: 'Medium' },
  { name: 'Transaction Monitoring Cases', count: 16, due: '3 days', severity: 'High' }
];

module.exports = {
  summaryCards,
  teamPerformance,
  weeklyTrend,
  slaHealth,
  alerts,
  reporting,
  workflowStatus,
  regionalRisk,
  backlog
};
