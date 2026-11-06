import { NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = appointmentSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Please check the form and try again.",
          issues: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    // Integration-ready destination:
    // - Email provider (Resend / SendGrid)
    // - WhatsApp Business / automation webhook
    // - Practice management system
    console.info("[LUMIÈRE] Appointment enquiry received", {
      ...parsed.data,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      message:
        "Enquiry received. Reception would confirm availability in a live clinic workflow.",
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process enquiry right now." },
      { status: 500 },
    );
  }
}
