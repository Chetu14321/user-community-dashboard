const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

/* ===============================
   MongoDB Connection (Safe)
================================ */
if (process.env.NODE_ENV !== "test") {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.error("MongoDB connection failed:", err.message);
      process.exit(1);
    });
}

/* ===============================
   Routes
================================ */
app.get("/", (req, res) => {
  res.json({ message: "Server is running successfully" });
});

app.use("/api/users", require("./routes/users.routes"));
app.use("/api/communities", require("./routes/communities.routes"));

/* ===============================
   404 Handler
================================ */
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

/* ===============================
   Server Start
================================ */
const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
