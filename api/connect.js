import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "API is running on Vercel!" });
});

app.post("/connect", async (req, res) => {
  try {
    const { key } = req.body;

    // kirim data key ke panel asli (contoh aja)
    const response = await axios.post("https://free.kuropanel.me/public/connect", { key });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

