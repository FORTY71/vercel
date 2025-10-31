// api/connect.js
// Simple serverless endpoint for Vercel that returns a JSON "login success" response.

export default function handler(req, res) {
  const body = req.method === 'POST' ? req.body : req.query;
  const token = (body && (body.token || body.auth)) || "mock-token-venom-12345";

  const resp = {
    status: "thanhcong",
    message: "Login successful.",
    token: token,
    user: {
      id: "dev-user",
      name: "Dev Tester"
    }
  };

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(resp);
}
