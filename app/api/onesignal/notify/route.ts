import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { fullName, email, phone } = await req.json();

    if (!fullName || !email || !phone) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const appId = process.env.ONESIGNAL_APP_ID;
    const restApiKey = process.env.ONESIGNAL_REST_API_KEY;

    if (!appId || !restApiKey) {
      return NextResponse.json(
        { ok: false, error: "OneSignal server credentials not configured" },
        { status: 503 }
      );
    }

    const payload = {
      app_id: appId,
      headings: { en: "New Farmer Call Request" },
      contents: { en: `Call ${fullName} at ${phone}` },
      data: { email, phone, fullName, origin: "become_farmer" },
      filters: [
        { field: "tag", key: "is_admin", relation: "=", value: "true" },
      ],
    } as const;

    const resp = await fetch("https://api.onesignal.com/notifications", {
      method: "POST",
      headers: {
        Authorization: `Basic ${restApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      const text = await resp.text();
      return NextResponse.json({ ok: false, error: text }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}


