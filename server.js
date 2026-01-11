const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send", (req, res) => {
  const { email, password } = req.body;

  console.log("Gelen veri:");
  console.log("Email:", email);
  console.log("Şifre:", password);

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Server çalışıyor: http://localhost:3000");
});
