import { useEffect, useState } from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

const apiBase = 'http://localhost:5000/api';

function App() {
  const [dashboard, setDashboard] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [reporting, setReporting] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dashboardRes, alertsRes, reportingRes] = await Promise.all([
          fetch(`${apiBase}/dashboard`),
          fetch(`${apiBase}/alerts`),
          fetch(`${apiBase}/reporting`)
        ]);

        const dashboardData = await dashboardRes.json();
        const alertsData = await alertsRes.json();
        const reportingData = await reportingRes.json();

        setDashboard(dashboardData);
        setAlerts(alertsData);
        setReporting(reportingData);
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Loading compliance dashboard...</div>;
  }

  if (!dashboard) {
    return <div className="loading">Unable to load compliance data.</div>;
  }

  const { summaryCards, teamPerformance, weeklyTrend, slaHealth, workflowStatus, regionalRisk, backlog } = dashboard;
  const pieColors = ['#2d6cdf', '#1aa77a', '#f29f05', '#d94b55'];

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-badge">C</div>
          <div>
            <h3>Compliance</h3>
            <p>Operations Hub</p>
          </div>
        </div>

        <nav className="nav">
          <button className="nav-item active">Overview</button>
          <button className="nav-item">KPI Dashboard</button>
          <button className="nav-item">SLA Tracker</button>
          <button className="nav-item">Alerts</button>
          <button className="nav-item">Portfolio</button>
        </nav>

        <div className="sidebar-card">
          <p className="label">Current status</p>
          <h4>Strong control environment</h4>
          <span className="status-pill success">94.2% SLA compliant</span>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">AML / KYC / CTF dashboard</p>
            <h1>Compliance KPI & SLA Tracker</h1>
          </div>
          <div className="header-actions">
            <button className="secondary-btn">Export</button>
            <button className="primary-btn">Generate report</button>
          </div>
        </header>

        <div className="filters-row">
          <span className="chip active">This month</span>
          <span className="chip">Team view</span>
          <span className="chip">Regions</span>
          <span className="chip">Escalations</span>
        </div>

        <section className="kpi-grid">
          {summaryCards.map((card) => (
            <div key={card.title} className="kpi-card">
              <div className="kpi-header">
                <span className="kpi-title">{card.title}</span>
                <span className={`trend ${card.trendDirection}`}>{card.trend}</span>
              </div>
              <div className="kpi-value-row">
                <h2>{card.value}</h2>
                <span className="target-pill">Target: {card.target}</span>
              </div>
              <div className="progress-line">
                <span style={{ width: `${card.progress}%` }} />
              </div>
              <p className="muted">{card.subtitle}</p>
            </div>
          ))}
        </section>

        <section className="charts-grid">
          <div className="panel chart-panel large-panel">
            <div className="panel-header">
              <h3>Weekly operating trend</h3>
              <span className="muted">Last 7 days</span>
            </div>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={weeklyTrend}>
                <defs>
                  <linearGradient id="areaColor" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#2d6cdf" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#2d6cdf" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#e7ebf2" strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="score" stroke="#2d6cdf" fill="url(#areaColor)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="panel chart-panel">
            <div className="panel-header">
              <h3>Regional risk heat</h3>
              <span className="muted">Risk score</span>
            </div>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={regionalRisk}>
                <CartesianGrid stroke="#e7ebf2" strokeDasharray="3 3" />
                <XAxis dataKey="region" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="score" fill="#1aa77a" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="bottom-grid">
          <div className="panel">
            <div className="panel-header">
              <h3>Team performance</h3>
              <span className="muted">Current month</span>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Team</th>
                    <th>Completed</th>
                    <th>SLA</th>
                    <th>Risk</th>
                  </tr>
                </thead>
                <tbody>
                  {teamPerformance.map((row) => (
                    <tr key={row.team}>
                      <td>{row.team}</td>
                      <td>{row.completed}</td>
                      <td>
                        <span className={`status-pill ${row.slaStatus === 'On track' ? 'success' : 'warning'}`}>
                          {row.sla}
                        </span>
                      </td>
                      <td>{row.risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Alerts & exceptions</h3>
              <span className="muted">Priority queue</span>
            </div>
            <div className="alerts-list">
              {alerts.map((alert) => (
                <div key={alert.id} className="alert-item">
                  <span className={`alert-dot ${alert.priority}`} />
                  <div>
                    <strong>{alert.title}</strong>
                    <p>{alert.detail}</p>
                  </div>
                  <span className="time-tag">{alert.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="final-grid">
          <div className="panel">
            <div className="panel-header">
              <h3>Workflow status</h3>
              <span className="muted">Completion %</span>
            </div>
            <div className="progress-stack">
              {workflowStatus.map((item) => (
                <div key={item.label} className="progress-item">
                  <div className="progress-meta">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="mini-progress">
                    <span style={{ width: `${item.value}%`, background: item.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Backlog overview</h3>
              <span className="muted">Action needed</span>
            </div>
            <div className="backlog-list">
              {backlog.map((item) => (
                <div key={item.name} className="backlog-item">
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.count} items · Due in {item.due}</p>
                  </div>
                  <span className={`severity ${item.severity.toLowerCase()}`}>{item.severity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Operational reporting</h3>
              <span className="muted">Month to date</span>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={reporting}>
                <CartesianGrid stroke="#e7ebf2" strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="screening" stroke="#2d6cdf" strokeWidth={2} />
                <Line type="monotone" dataKey="investigation" stroke="#1aa77a" strokeWidth={2} />
                <Line type="monotone" dataKey="monitoring" stroke="#f29f05" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
