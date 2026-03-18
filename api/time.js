export const config = {
  runtime: 'edge'
}

export default function handler(req) {
  const datetime = new Date().toLocaleString("en-CA", { timeZone: "America/Toronto" });
  return new Response(JSON.stringify({
    datetime,
    timezone: "America/Toronto"
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, max-age=0',
      'x-timestamp': Date.now().toString()
    }
  });
}
