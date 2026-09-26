# Compliance KPI & SLA Tracker

A portfolio-ready web application for monitoring AML/KYC compliance performance, service level agreements (SLAs), and operational risk indicators in financial services.

## Project purpose
This project demonstrates how AML and compliance teams can track key operational metrics such as:

- Customer Due Diligence (CDD) turnaround times
- Ongoing Due Diligence (ODD) completion rate
- Sanctions and PEP screening coverage
- Transaction monitoring case aging
- Suspicious Activity Report (SAR) timeliness
- SLA compliance for investigation teams
- Escalation and exception management

## Why this is a strong portfolio project
This project combines:

- Regulatory/compliance domain expertise
- Dashboard and reporting design
- Data visualization
- Frontend/backend integration
- Business-focused analytics

It is highly relevant for FinTech, RegTech, AML, risk, and compliance roles.

## Features
- Executive overview dashboard
- KPI summary cards with target vs actual percentage
- SLA health tracker
- Team performance breakdown
- Alerts and overdue tasks panel
- Trend visualization for weekly performance
- Responsive layout for desktop and tablet devices
- Mock API backend for realistic compliance data

## Tech stack
- Frontend: React + Vite
- Backend: Node.js + Express
- Data: JSON mock data
- Styling: Custom CSS
- Charts: Recharts

## Project structure

```text
compliance-kpi-sla-tracker/
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       └── styles.css
├── backend/
│   ├── package.json
│   ├── server.js
│   └── data/
│       └── mockData.js
├── .gitignore
├── README.md
└── LICENSE
```

## Getting started

### 1) Clone the repo

```bash
git clone https://github.com/Vickum24/compliance-kpi-sla-tracker.git
cd compliance-kpi-sla-tracker
```

### 2) Start the backend

```bash
cd backend
npm install
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

### 3) Start the frontend

Open a second terminal and run:

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

## API endpoints

### Dashboard summary
```http
GET /api/dashboard
```

### Alerts
```http
GET /api/alerts
```

### Daily reporting data
```http
GET /api/reporting
```

## Sample metrics included
- CDD turnaround time
- ODD review completion
- Transaction monitoring aging
- Sanctions screening rate
- Investigations completed within SLA
- SLA breaches by team
- Escalated high-risk alerts

## Example dashboard view
This dashboard is designed to mimic an operational compliance reporting portal used by AML/KYC teams.

## Future enhancements
- Real database integration
- Authentication for role-based access
- CSV import and export
- PDF report generation
- Email/SMS alert notifications
- Advanced drill-down analysis for individual teams or clients

## Portfolio use cases
This project can be used to showcase:
- AML compliance operations knowledge
- KPI reporting and SLA tracking experience
- Ability to translate compliance needs into business dashboards
- Real-world problem solving in risk and control environments

## Author
Vickum24

## License
This project is open source for portfolio and learning purposes.
