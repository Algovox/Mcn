const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to MCNBot - AI Workflow Platform");
});

app.post("/api/run-workflow", async (req, res) => {
  const { steps } = req.body;

  try {
    for (const step of steps) {
      console.log("Running step:", step);
    }
    res.json({ status: "success", message: "Workflow executed" });
  } catch (err) {
    res.status(500).json({ status: "error", error: err.message });
  }
});

app.listen(port, () => {
  console.log(`MCNBot server running on http://localhost:${port}`);
})