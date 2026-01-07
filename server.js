
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.post("/api/test", (req, res) => {
  res.json({ message: "API test route working" });
});


app.use("/api/auth", authRoutes);


mongoose.connect(
  'mongodb+srv://aboobshaake_db_user:Test12345@cluster1.xpuqyd3.mongodb.net/urbanluxe?appName=Cluster1'
).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Test route
app.get('/', (req, res) => {
    res.send('Backend server is running');
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
