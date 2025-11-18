// lib/externalApi.ts

const BASE_URL = process.env.EXTERNAL_API_URL || "http://localhost:5173/api/v1";
const AUTH_HEADER = process.env.EXTERNAL_API_AUTH || "YWRtaW5AdHVuZ3R1bmcuY29tOmFkbWluMTIz";

interface ApiErrorResponse {
  message?: string;
  error?: string;
}

interface CustomerPayload {
  name: string;
  email: string;
  phone: string;
  address: string;
  customerGroup: string;
}

interface PaymentPayload {
  customerId: number | string;
  amount: number;
  totalAmount: number;
  status: string;
  paymentMethod: string;
  note: string;
  returnUrl: string;
}

async function request(path: string, options: RequestInit = {}): Promise<unknown> {
  try {
    const response = await fetch(`${BASE_URL}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${AUTH_HEADER}`,
        ...(options.headers || {}),
      },
    });

    const clone = response.clone();

    let data: unknown;
    try {
      data = await response.json();
    } catch {
      const txt = await clone.text();
      console.error("Failed to parse JSON:", txt);
      throw new Error(`External API returned non-JSON: ${response.status}`);
    }

    if (!response.ok) {
      const errorData = data as ApiErrorResponse;
      throw new Error(errorData.message || errorData.error || `API error: ${response.status}`);
    }

    return data;
  } catch (err: unknown) {
    if (err instanceof TypeError && err.message.includes("fetch failed")) {
      throw new Error("Cannot connect to external API (maybe offline?)");
    }
    throw err;
  }
}

export const api = {
  createPayment: (body: PaymentPayload) =>
    request("/payments", {
      method: "POST",
      body: JSON.stringify(body),
    }),

  createCustomer: (body: CustomerPayload) =>
    request("/customers", {
      method: "POST",
      body: JSON.stringify(body),
    }),
};
