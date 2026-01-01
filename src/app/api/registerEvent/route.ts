import { NextRequest, NextResponse } from "next/server";
import { api } from "@/lib/externalApi";

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

    return NextResponse.json({
      redirectUrl: paymentUrl
    }, { status: 200 });

  } catch (error: unknown) {
    console.error("Create payment flow error:", error);
    const message = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ message }, { status: 500 });
  }
}