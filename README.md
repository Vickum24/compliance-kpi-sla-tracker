# Compliance KPI & SLA Tracker

A portfolio-ready web application built around real AML, KYC, and compliance operations work. It helps teams monitor performance, evaluate service level adherence, and track exceptions across the control lifecycle.

## Why this project matters
This project reflects the type of operational reporting and workflow visibility used across AML, sanctions screening, CDD/ODD processing, and transaction monitoring teams. It translates real-world compliance processes into a clean, professional dashboard designed for management reporting and operational oversight.

## Problem it solves
Compliance teams often work with fragmented spreadsheets, manual scorecards, and delayed reporting. This dashboard provides a central view of:

- CDD/ODD turnaround performance
- SLA adherence by team and function
- High-risk alert aging
- Screening completeness and exceptions
- Reporting trend visibility over time

## Business value
This dashboard demonstrates how operational controls can be monitored and improved through simple but effective business intelligence workflows. It is especially relevant to:

- AML / KYC operations teams
- Compliance monitoring teams
- RegTech and FinTech environments
- Financial institutions and fund service organizations

## Key features
- Executive KPI summary cards
- SLA compliance tracking
- Weekly operational trends
- Team performance scorecards
- Exception and escalation reporting
- Regional / functional risk view
- Responsive dashboard layout
- Realistic AML/KYC business data structure

## Tech stack
- Frontend: React + Vite
- Backend: Node.js + Express
- Visualization: Recharts
- Styling: Custom CSS
- Data: Mock JSON-based API

## Project structure

```text
compliance-kpi-sla-tracker/
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── data/
│   │   └── mockData.js
│   ├── server.js
│   └── package.json
├── .gitignore
├── README.md
└── LICENSE
```

## Dashboard overview
This solution is designed to look like a real regulatory operations dashboard with focus areas such as:

- CDD turnaround
- Sanctions screening coverage
- ODD renewal compliance
- Investigation SLA tracking
- Case aging and escalations
- Weekly reporting performance

## Getting started

### 1) Install dependencies

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd frontend
npm install
```

### 2) Run the backend
```bash
cd backend
npm run dev
```

### 3) Run the frontend
Open a second terminal:
```bash
cd frontend
npm run dev
```

The frontend should run at:
```text
http://localhost:5173
```

The backend API should run at:
```text
http://localhost:5000/api/dashboard
```

## Main API endpoints

```http
GET /api/dashboard
GET /api/alerts
GET /api/reporting
```

## Sample KPI areas included
- CDD turnaround time
- ODD review compliance
- Sanctions screening completion
- Alert backlog aging
- Investigation SLA compliance
- Escalations and exceptions
- Operational performance trends

## Portfolio use case
This project is ideal for showcasing:

- AML/KYC domain understanding
- Dashboard design and data storytelling
- Analytical thinking and operational awareness
- Ability to turn compliance workflows into clear reporting systems

## Future enhancements
- role-based user authentication
- CSV export and PDF report generation
- database integration with PostgreSQL or MongoDB
- advanced filtering by team, region, and risk type
- alert notification workflow
- live drill-down reporting for specific client portfolios

## Author
Vickum24

## License
This project is for portfolio and learning use.
