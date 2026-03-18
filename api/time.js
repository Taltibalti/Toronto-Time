export default function handler(req, res) {
  // Set headers to prevent caching
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Surrogate-Control', 'no-store');

  // Get current Toronto time
  const now = new Date().toLocaleString("en-US", { timeZone: "America/Toronto" });
  res.status(200).json({ toronto_time: now });
}
