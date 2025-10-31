export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { auth, device, package: pkg } = req.body;

  // Contoh validasi sederhana
  if (!auth || !device || !pkg) {
    return res.status(400).json({
      success: false,
      message: 'Missing required parameters',
    });
  }

  // Logika login dummy — bisa kamu ubah ke API panel asli
  if (auth.startsWith('Pradaxca')) {
    return res.status(200).json({
      success: true,
      status: 'thanhcong',
      message: 'Login successful',
      device,
      package: pkg,
    });
  }

  // Kalau key salah
  return res.status(401).json({
    success: false,
    message: 'Invalid key',
  });
}
