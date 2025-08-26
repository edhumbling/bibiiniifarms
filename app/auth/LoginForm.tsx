"use client";
import { useState } from "react";

export default function LoginForm() {
  const [phone, setPhone] = useState("");

  return (
    <form
      className="mt-6 grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        alert("We will send you an OTP via SMS/WhatsApp shortly.");
      }}
    >
      <div className="rounded-2xl ring-1 ring-neutral-300 focus-within:ring-brand-deep transition">
        <input
          type="tel"
          inputMode="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full bg-transparent px-4 py-3 rounded-2xl outline-none text-ink"
          required
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-emerald-600 text-white px-6 py-3 font-semibold hover:brightness-110 transition-all"
      >
        Verify phone number
      </button>
    </form>
  );
}


