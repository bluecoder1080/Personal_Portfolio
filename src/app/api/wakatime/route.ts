import { NextResponse } from 'next/server';

export async function GET() {
  const API_KEY = process.env.WAKATIME_API_KEY;
  const BASE_URL = "https://wakatime.com/api/v1";

  if (!API_KEY) {
      return NextResponse.json({ error: "API Key missing" }, { status: 500 });
  }

  try {
    // We encode the API key in Base64 for Basic Auth
    // Note: WakaTime API key often works just by being the value if it's not OAuth. 
    // However, the docs say for API Key use 'Basic <base64(api_key)>' 
    // OR just pass ?api_key=<key>
    
    // Using query param for simplicity and robustness with the "waka_" key format
    const response = await fetch(`${BASE_URL}/users/current/stats/last_7_days?api_key=${API_KEY}`, {
      method: "GET",
    });

    if (!response.ok) {
        console.error("WakaTime API Error:", response.status, await response.text());
        return NextResponse.json({ error: "Failed to fetch WakaTime data" }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
    
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
