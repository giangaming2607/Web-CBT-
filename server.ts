import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Path to store settings.json
const SETTINGS_FILE = path.join(process.cwd(), "settings.json");

// Default APK download link (simulated play store / github release download)
const DEFAULT_SETTINGS = {
  downloadUrl: "https://github.com/cbt-dev/cbt-exam-browser/releases/download/v1.0.0/CBT_Exam_Browser_v1.0.apk",
  contactUrl: "mailto:support@cbt-exambrowser.com"
};

// Safe settings reading
function getSettings() {
  try {
    if (fs.existsSync(SETTINGS_FILE)) {
      const data = fs.readFileSync(SETTINGS_FILE, "utf-8");
      return { ...DEFAULT_SETTINGS, ...JSON.parse(data) };
    }
  } catch (error) {
    console.error("Error reading settings.json:", error);
  }
  return DEFAULT_SETTINGS;
}

// Safe settings writing
function saveSettings(settings: { downloadUrl: string; contactUrl: string }) {
  try {
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(settings, null, 2), "utf-8");
    return true;
  } catch (error) {
    console.error("Error writing settings.json:", error);
    return false;
  }
}

// API Routes
app.get("/api/settings", (req, res) => {
  try {
    res.json(getSettings());
  } catch (error) {
    res.status(500).json({ error: "Gagal memuat pengaturan" });
  }
});

app.post("/api/settings", (req, res) => {
  const { downloadUrl, contactUrl, password } = req.body;
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

  if (!password || password !== adminPassword) {
    return res.status(401).json({ error: "Password admin salah!" });
  }

  if (!downloadUrl || typeof downloadUrl !== "string" || !downloadUrl.startsWith("http")) {
    return res.status(400).json({ error: "URL download tidak valid!" });
  }

  const normalizedContactUrl = contactUrl || DEFAULT_SETTINGS.contactUrl;
  if (typeof normalizedContactUrl !== "string" || (!normalizedContactUrl.startsWith("http") && !normalizedContactUrl.startsWith("mailto:"))) {
    return res.status(400).json({ error: "Link Hubungi Kami tidak valid! Wajib diawali dengan http://, https://, atau mailto:" });
  }

  const success = saveSettings({ downloadUrl, contactUrl: normalizedContactUrl });
  if (success) {
    res.json({ message: "Pengaturan berhasil diperbarui!", downloadUrl, contactUrl: normalizedContactUrl });
  } else {
    res.status(500).json({ error: "Gagal menyimpan konfigurasi!" });
  }
});

// Vite Server Integration
async function start() {
  if (process.env.NODE_ENV !== "production") {
    // Development Mode
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production Mode
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

start().catch((err) => {
  console.error("Error starting express-vite server", err);
});
