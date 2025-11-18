// lib/externalApi.ts

const BASE_URL = "http://localhost:5173/api/v1";
const AUTH_HEADER = "Basic YWRtaW5AdHVuZ3R1bmcuY29tOmFkbWluMTIz";

async function request(path: string, options: RequestInit = {}) {
  try {
    const response = await fetch(`${BASE_URL}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH_HEADER,
        ...(options.headers || {}),
      },
    });

    const clone = response.clone();

    let data;
    try {
      data = await response.json();
    } catch {
      const txt = await clone.text();
      console.error("Failed to parse JSON:", txt);
      throw new Error(`External API returned non-JSON: ${response.status}`);
    }

    if (!response.ok) {
      throw new Error(data.message || data.error || `API error: ${response.status}`);
    }

    return data;
  } catch (err: any) {
    if (err instanceof TypeError && err.message.includes("fetch failed")) {
      throw new Error("Cannot connect to external API (maybe offline?)");
    }
    throw err;
  }
}

export const api = {
  createPayment: (body: any) =>
    request("/payments", {
      method: "POST",
      body: JSON.stringify(body),
    }),

  createCustomer: (body: any) =>
    request("/customers", {
      method: "POST",
      body: JSON.stringify(body),
    }),
};
