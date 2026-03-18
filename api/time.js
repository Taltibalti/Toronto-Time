export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    datetime: new Date().toLocaleString("en-CA", { timeZone: "America/Toronto" }),
    timezone: "America/Toronto"
  });
}
