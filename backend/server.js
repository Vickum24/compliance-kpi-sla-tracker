const express = require('express');
const cors = require('cors');
const {
  summaryCards,
  teamPerformance,
  weeklyTrend,
  slaHealth,
  alerts,
  reporting
} = require('./data/mockData');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/dashboard', (req, res) => {
  res.json({
    summaryCards,
    teamPerformance,
    weeklyTrend,
    slaHealth
  });
});

app.get('/api/alerts', (req, res) => {
  res.json(alerts);
});

app.get('/api/reporting', (req, res) => {
  res.json(reporting);
});

app.listen(port, () => {
  console.log(`Compliance KPI API running on http://localhost:${port}`);
});
