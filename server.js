const express = require("express");
const cors = require("cors");

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* ROOT TEST */
app.get("/", (req, res) => {
  res.send("Server çalışıyor ✅");
});

/* LOGIN ENDPOINT */
app.post("/send", (req, res) => {
  const { email, password } = req.body;

  console.log("Gelen veri:", email, password);

  res.status(200).json({ success: true });
});

/* PORT */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server aktif:", PORT);
});
