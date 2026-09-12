const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Test route
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Jobs Overseas API is running"
  });
});

// Temporary jobs route
app.get("/api/jobs", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Care Assistant",
      country: "United Kingdom",
      category: "Healthcare"
    },
    {
      id: 2,
      title: "Warehouse Worker",
      country: "Poland",
      category: "Logistics"
    },
    {
      id: 3,
      title: "Hotel Worker",
      country: "Ireland",
      category: "Hospitality"
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Jobs Overseas API running on port ${PORT}`);
});
