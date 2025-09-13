"use client";
import { useEffect, useState } from "react";

type Phase = "phone" | "otp";

export default function SignUpForm() {
  const [phase, setPhase] = useState<Phase>("phone");
  const [digits, setDigits] = useState("");
  const [fullPhone, setFullPhone] = useState("+233");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setFullPhone(`+233${digits}`);
  }, [digits]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (phase === "phone") {
      if (!/^\d{9}$/.test(digits)) {
        setError("Enter 9 digits after 233.");
        return;
      }
      setPhase("otp");
    } else {
      if (otp !== "123456") {
        setError("Invalid code. Use demo code 123456.");
        return;
      }
      try {
        localStorage.setItem(
          "bf_session",
          JSON.stringify({ phone: fullPhone, method: "otp-demo", createdAt: new Date().toISOString() })
        );
      } catch {}
      window.location.href = "/account";
    }
  }

  return (
    <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
      {phase === "phone" ? (
        <div className="rounded-2xl ring-1 ring-neutral-300 focus-within:ring-brand-deep transition flex items-center">
          <span className="pl-4 pr-2 text-neutral-600 select-none">+233</span>
          <input
            type="tel"
            inputMode="numeric"
            placeholder="XXXXXXXXX"
            value={digits}
            onChange={(e) => {
              const only = e.target.value.replace(/\D+/g, "").slice(0, 9);
              setDigits(only);
            }}
            className="w-full bg-transparent px-2 py-3 rounded-2xl outline-none text-ink"
            required
          />
        </div>
      ) : (
        <div className="space-y-2">
          <div className="rounded-2xl ring-1 ring-neutral-300 focus-within:ring-brand-deep transition">
            <input
              type="text"
              inputMode="numeric"
              placeholder="Enter 6-digit code"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D+/g, "").slice(0, 6))}
              className="w-full bg-transparent px-4 py-3 rounded-2xl outline-none text-ink tracking-widest"
              required
            />
          </div>
          <p className="text-xs text-neutral-500">Demo OTP code: <span className="font-semibold">123456</span></p>
        </div>
      )}

      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-egg text-ink px-6 py-3 font-semibold ring-1 ring-black/10 hover:brightness-95 transition-all"
      >
        {phase === "phone" ? "Verify phone number" : "Confirm code & create account"}
      </button>

      {phase === "otp" ? (
        <button
          type="button"
          onClick={() => setPhase("phone")}
          className="text-sm text-neutral-600 hover:text-neutral-800 justify-self-start"
        >
          Change phone number
        </button>
      ) : null}
    </form>
  );
}

