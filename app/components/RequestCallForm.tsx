"use client";

import { useState, useTransition } from "react";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
};

export default function RequestCallForm() {
  const [form, setForm] = useState<FormState>({ fullName: "", email: "", phone: "" });
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange<K extends keyof FormState>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function tagOneSignal() {
    // OneSignal v16 uses window.OneSignalDeferred pattern initialized globally
    try {
      // @ts-expect-error - OneSignalDeferred injected globally
      const deferred = window.OneSignalDeferred as any[] | undefined;
      if (!deferred) return;
      deferred.push(async function (OneSignal: any) {
        try {
          // Ensure user is identified and subscribe prompt may appear based on site settings
          await OneSignal.login?.(form.email || form.phone || form.fullName);
          await OneSignal.User.addTags({
            origin: "become_farmer",
            request_type: "call",
            full_name: form.fullName,
            email: form.email,
            phone: form.phone,
            requested_at: new Date().toISOString(),
          });
        } catch (e) {
          // ignore tagging errors to not block UX
        }
      });
    } catch {
      // noop
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!form.fullName || !form.email || !form.phone) {
      setError("Please provide your name, email, and phone number.");
      return;
    }
    startTransition(async () => {
      await tagOneSignal();
      setSubmitted(true);
    });
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-glow/30 bg-emerald-glow/10 text-emerald-glow p-4 text-sm">
        Thank you! We received your request. Our team will call you shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
        <input
          id="fullName"
          type="text"
          value={form.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-glow focus:border-transparent"
          placeholder="e.g., Ama Mensah"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-glow focus:border-transparent"
          placeholder="you@example.com"
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-glow focus:border-transparent"
          placeholder="e.g., +233 54 347 4770"
          required
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-luminous-green text-white py-3 rounded-lg font-semibold hover:brightness-95 transition-all disabled:opacity-60"
      >
        {isPending ? "Submitting..." : "Request a Call"}
      </button>
    </form>
  );
}


