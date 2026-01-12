// server.js örnek
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/send", (req, res) => {
  const { email, password } = req.body;
  console.log("EMAIL:", email);
  console.log("PASSWORD:", password);
  res.sendStatus(200);
});

app.listen(PORT, () => console.log("Server running on port", PORT));
