export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { auth, device, package: pkg } = req.body;

  if (!auth || !device || !pkg) {
    return res.status(400).json({
      success: false,
      message: 'Missing required parameters',
    });
  }

  // Contoh validasi kunci
  if (auth.startsWith('Pradaxca') || auth.startsWith('2-HOUR-') || auth.startsWith('Pinxca')) {
    return res.status(200).json({
      success: true,
      status: 'thanhcong',
      message: 'Login successful ✅',
      device,
      package: pkg,
      time: new Date().toISOString(),
    });
  }

  return res.status(401).json({
    success: false,
    message: 'Invalid key ❌',
  });
}
