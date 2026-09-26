const summaryCards = [
  {
    title: 'CDD Turnaround',
    value: '3.2 days',
    target: '4.0 days',
    progress: 82,
    trend: '+12%',
    trendDirection: 'up',
    subtitle: 'Average time to complete customer due diligence review.'
  },
  {
    title: 'Sanctions Coverage',
    value: '98.6%',
    target: '97.0%',
    progress: 96,
    trend: '+4%',
    trendDirection: 'up',
    subtitle: 'Percentage of customers screened within policy timeline.'
  },
  {
    title: 'Transaction Alerts',
    value: '84',
    target: '90',
    progress: 72,
    trend: '-6%',
    trendDirection: 'down',
    subtitle: 'Open alerts awaiting investigation and disposition.'
  },
  {
    title: 'SLA Compliance',
    value: '94.2%',
    target: '95.0%',
    progress: 94,
    trend: '+3%',
    trendDirection: 'up',
    subtitle: 'Percentage of investigations completed within agreed SLA.'
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

module.exports = {
  summaryCards,
  teamPerformance,
  weeklyTrend,
  slaHealth,
  alerts,
  reporting
};
