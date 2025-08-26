import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "../auth/SignUpForm";

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

        <h1 className="mt-4 text-center text-xl sm:text-2xl font-extrabold tracking-tight text-ink">Bibinii Farms</h1>
        <p className="mt-2 text-center text-neutral-600">Sign up: verify phone number</p>

        <SignUpForm />

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


