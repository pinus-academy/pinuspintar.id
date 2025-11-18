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

export async function POST(request: NextRequest) {
  try {
    const body: RegisterEventPayload = await request.json();

    console.log("Incoming payload:", body);

    // ============================
    // 1️⃣ CREATE CUSTOMER FIRST
    // ============================
    const customerPayload = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      address: body.address,
      customerGroup: body.customerGroup,
    };

    const customerResponse = await api.createCustomer(customerPayload);

    console.log("Customer created:", customerResponse);

    const customerId = customerResponse?.customer?.id;
		console.log('customerId', customerId);

    if (!customerId) {
			console.log('customerId not found');
      return NextResponse.json(
        { message: "Customer created but no customerId returned" },
        { status: 500 }
      );
    }
    const origin = request.nextUrl.origin;

    // =====================================
    // 2️⃣ CREATE PAYMENT USING customerId
    // =====================================
		
    const paymentPayload = {
      customerId: customerId, // ← PENTING
      amount: body.amount,
			totalAmount: body.amount,
			status: 'PENDING',
      paymentMethod: 'QRIS',
      note: `Payment for course: ${body.courseName}`,
			returnUrl: `${origin}/events/courses/buy/${body.courseId}`,
    };

    const paymentResponse = await api.createPayment(paymentPayload);

    console.log("Payment created:", paymentResponse);

    // Final success response
    return NextResponse.json({
			redirectUrl: paymentResponse.data.paymentUrl
		}, { status: 200 }
		);

  } catch (error: any) {
    console.error("Create payment flow error:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
