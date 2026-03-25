import { NextRequest, NextResponse } from "next/server";
import { api } from "@/lib/externalApi";
import { getRegistrationEmailHtml } from "@/lib/email";

const NOTIFICATION_SERVICE_URL = "https://notification-service.deployaja.id";

async function sendRegistrationEmail(payload: { to: string; subject: string; html: string }) {
  try {
    await fetch(`${NOTIFICATION_SERVICE_URL}/notify/email`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "X-API-KEY": process.env.NOTIFICATION_SERVICE_API_KEY || ""
      },
      body: JSON.stringify({ ...payload, displayName: 'PinusPintar.id', cc: 'admin@pinuspintar.id' }),
    });
  } catch (err) {
    console.error("Failed to send registration email:", err);
  }
}

interface RegisterEventPayload {
  name: string;
  email: string;
  phone: string;
  address: string;
  amount: number;
  courseId: number;
  courseName: string;
  customerGroup: string;
}

interface CustomerResponse {
  customer?: {
    id?: number | string;
  };
}

interface PaymentResponse {
  data?: {
    paymentUrl?: string;
  };
  paymentUrl?: string;
  payment?: {
    url?: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: RegisterEventPayload = await request.json();

    const customerPayload = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      address: body.address,
      customerGroup: body.customerGroup,
    };

    const customerResponse = await api.createCustomer(customerPayload) as CustomerResponse;

    if (body.amount <= 0) {
      const origin = request.headers.get("host") 
        ? `${request.nextUrl.protocol}//${request.headers.get("host")}` 
        : request.nextUrl.origin;
      const html = getRegistrationEmailHtml({
        logoUrl: `${origin}/icon/green.png`,
        bodyContent: `
          <div style="margin:0 0 16px;">
            <p style="margin:0 0 8px;">Halo <strong>${body.name}</strong>,</p>
            <p style="margin:0;">Terima kasih telah mendaftar untuk <strong>${body.courseName}</strong>. Registrasi Anda berhasil.</p>
          </div>

          <div style="margin:24px 0 0; padding:16px; border:1px solid #eee; border-radius:12px; background:#fafafa;">
            <h3 style="margin:0 0 12px; font-size:16px; line-height:1.3; color:#111;">Data Anda</h3>
            <table role="presentation" cellspacing="0" cellpadding="0" style="width:100%; border-collapse:collapse; font-size:14px; color:#333;">
              <tr>
                <td style="padding:8px 0; width:140px; color:#666;">Nama</td>
                <td style="padding:8px 0; font-weight:600;">${body.name}</td>
              </tr>
              <tr>
                <td style="padding:8px 0; width:140px; color:#666;">Email</td>
                <td style="padding:8px 0;">${body.email}</td>
              </tr>
              <tr>
                <td style="padding:8px 0; width:140px; color:#666;">No. HP</td>
                <td style="padding:8px 0;">${body.phone}</td>
              </tr>
              <tr>
                <td style="padding:8px 0; width:140px; color:#666;">Alamat</td>
                <td style="padding:8px 0;">${body.address}</td>
              </tr>
            </table>
          </div>
        `.trim(),
      });
      sendRegistrationEmail({
        to: body.email,
        subject: "Registrasi Berhasil - Pinus Pintar",
        html,
      }).catch(console.error);
      return NextResponse.json(
        { message: "Registration successful" },
        { status: 200 }
      );
    }

    const customerId = customerResponse?.customer?.id;

    if (!customerId) {
      console.log('customerId not found');
      return NextResponse.json(
        { message: "Customer created but no customerId returned" },
        { status: 500 }
      );
    }
    const origin = request.nextUrl.origin;
    
    const paymentPayload = {
      customerId: customerId,
      amount: body.amount,
      totalAmount: body.amount,
      status: 'PENDING',
      paymentMethod: 'QRIS',
      note: `Payment for course: ${body.courseName}`,
      returnUrl: `${origin}/events/courses/buy/${body.courseId}`,
    };

    const paymentResponse = await api.createPayment(paymentPayload) as PaymentResponse;

    const paymentUrl = paymentResponse?.data?.paymentUrl || paymentResponse?.paymentUrl || paymentResponse?.payment?.url;
    
    if (!paymentUrl) {
      console.error("Payment URL not found in response:", paymentResponse);
      return NextResponse.json(
        { message: "Payment created but no payment URL returned" },
        { status: 500 }
      );
    }

    const html = getRegistrationEmailHtml({
      logoUrl: `${origin}/icon/green.svg`,
      bodyContent: `
        <div style="margin:0 0 16px;">
          <p style="margin:0 0 8px;">Halo <strong>${body.name}</strong>,</p>
          <p style="margin:0;">Terima kasih telah mendaftar untuk <strong>${body.courseName}</strong>. Silakan selesaikan pembayaran melalui link berikut.</p>
        </div>

        <div style="margin:16px 0 0;">
          <a href="${paymentUrl}" style="display:inline-block; background:#183428; color:#ffffff; text-decoration:none; padding:12px 16px; border-radius:10px; font-weight:700;">
            Lanjutkan Pembayaran
          </a>
          <p style="margin:12px 0 0; font-size:12px; color:#666;">
            Jika tombol tidak berfungsi, salin dan buka link ini:
            <span style="word-break:break-all;">${paymentUrl}</span>
          </p>
        </div>

        <div style="margin:24px 0 0; padding:16px; border:1px solid #eee; border-radius:12px; background:#fafafa;">
          <h3 style="margin:0 0 12px; font-size:16px; line-height:1.3; color:#111;">Data Anda</h3>
          <table role="presentation" cellspacing="0" cellpadding="0" style="width:100%; border-collapse:collapse; font-size:14px; color:#333;">
            <tr>
              <td style="padding:8px 0; width:140px; color:#666;">Nama</td>
              <td style="padding:8px 0; font-weight:600;">${body.name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0; width:140px; color:#666;">Email</td>
              <td style="padding:8px 0;">${body.email}</td>
            </tr>
            <tr>
              <td style="padding:8px 0; width:140px; color:#666;">No. HP</td>
              <td style="padding:8px 0;">${body.phone}</td>
            </tr>
            <tr>
              <td style="padding:8px 0; width:140px; color:#666;">Alamat</td>
              <td style="padding:8px 0;">${body.address}</td>
            </tr>
          </table>
        </div>
      `.trim(),
    });
    sendRegistrationEmail({
      to: body.email,
      subject: "Registrasi & Pembayaran - Pinus Pintar",
      html,
    }).catch(console.error);

    return NextResponse.json({
      redirectUrl: paymentUrl
    }, { status: 200 });

  } catch (error: unknown) {
    console.error("Create payment flow error:", error);
    const message = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ message }, { status: 500 });
  }
}