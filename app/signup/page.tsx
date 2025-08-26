import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bibinii Farms • Sign up",
  description: "Create your account with your Ghanaian phone number.",
};

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-md rounded-3xl border border-neutral-200 bg-white shadow-sm p-6 sm:p-8">
        {/* Avatar / Logo */}
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-neutral-100 ring-1 ring-black/10 overflow-hidden flex items-center justify-center">
            <Image
              src="/bibinii logo white text.svg"
              alt="Bibinii Farms"
              width={64}
              height={64}
              className="object-contain invert"
            />
          </div>
        </div>

        <h1 className="mt-4 text-center text-xl sm:text-2xl font-extrabold tracking-tight text-ink">BIBINII FARMS</h1>
        <p className="mt-2 text-center text-neutral-600">Sign up: verify phone number</p>

        <form
          className="mt-6 grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: trigger OTP request
            alert("We will send you an OTP via SMS/WhatsApp shortly.");
          }}
        >
          <div className="rounded-2xl ring-1 ring-neutral-300 focus-within:ring-brand-deep transition">
            <input
              type="tel"
              inputMode="tel"
              placeholder="Phone number"
              className="w-full bg-transparent px-4 py-3 rounded-2xl outline-none text-ink"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-egg text-ink px-6 py-3 font-semibold ring-1 ring-black/10 hover:brightness-95 transition-all"
          >
            Verify phone number
          </button>
        </form>

        <div className="mt-6 rounded-2xl ring-1 ring-neutral-200 p-4 text-center">
          <span className="text-neutral-700">Already have an account?</span>{" "}
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 text-white px-4 py-2 text-sm font-semibold hover:brightness-110 transition-colors ml-2"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}


