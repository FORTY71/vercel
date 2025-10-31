export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  const { auth, device, package: pkg } = req.body;

  if (!auth || !device || !pkg) {
    return res.status(400).json({ success: false, message: "Missing required parameters" });
  }

  // Contoh validasi auth (ubah sesuai kebutuhan)
  if (auth !== "test") {
    return res.status(403).json({ success: false, message: "Invalid key ❌" });
  }

  // Kalau valid
  return res.status(200).json({
    success: true,
    message: "Login berhasil ✅",
    device,
    package: pkg,
    time: new Date().toISOString(),
  });
}
