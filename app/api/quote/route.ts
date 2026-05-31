import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface QuotePayload {
  firstName: string;
  lastName: string;
  phone: string;
  service: string;
  area: string;
  notes?: string;
}

function validate(data: Partial<QuotePayload>): string | null {
  const required: (keyof QuotePayload)[] = [
    "firstName",
    "lastName",
    "phone",
    "service",
    "area",
  ];
  for (const field of required) {
    if (!data[field]?.trim()) {
      return `Missing required field: ${field}`;
    }
  }
  return null;
}

export async function POST(request: Request) {
  let body: Partial<QuotePayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const { firstName, lastName, phone, service, area, notes } =
    body as QuotePayload;

  const recipientEmail = process.env.RECIPIENT_EMAIL;
  const fromEmail = process.env.FROM_EMAIL ?? "onboarding@resend.dev";

  if (!recipientEmail) {
    console.error("RECIPIENT_EMAIL environment variable is not set.");
    return NextResponse.json(
      { error: "Server configuration error. Please contact us directly." },
      { status: 500 }
    );
  }

  try {
    await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      subject: `New quote request from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #2a0a1a;">
          <div style="background: #6a1040; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 600;">
              New Quote Request — Jophrey Cleaning Services
            </h1>
          </div>

          <div style="background: #ffffff; padding: 32px; border: 1px solid #e8c8d8; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #fce4ec; width: 140px; color: #7a4060; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #fce4ec; font-size: 15px;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #fce4ec; color: #7a4060; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #fce4ec; font-size: 15px;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #fce4ec; color: #7a4060; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Service</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #fce4ec; font-size: 15px;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #fce4ec; color: #7a4060; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Area</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #fce4ec; font-size: 15px;">${area}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #7a4060; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Notes</td>
                <td style="padding: 10px 0; font-size: 15px; color: ${notes?.trim() ? "#2a0a1a" : "#7a4060"};">
                  ${notes?.trim() || "None provided"}
                </td>
              </tr>
            </table>

            <div style="margin-top: 28px; padding: 16px 20px; background: #fce4ec; border-radius: 8px; border-left: 4px solid #c2185b;">
              <p style="margin: 0; font-size: 13px; color: #6a1040;">
                Reply directly to this email to respond to ${firstName}, or call <strong>${phone}</strong>.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
