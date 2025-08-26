import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/app/auth/LoginForm";

export const metadata: Metadata = {
  title: "Bibinii Farms • Sign in",
  description: "Sign in with your Ghanaian phone number.",
};

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-md rounded-3xl border border-neutral-200 bg-white shadow-sm p-6 sm:p-8">
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-neutral-100 ring-1 ring-black/10 overflow-hidden flex items-center justify-center">
            <Image
              src="/icon.svg"
              alt="Bibinii Farms"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
        </div>
        <h1 className="mt-4 text-center text-xl sm:text-2xl font-extrabold tracking-tight text-ink">Bibinii Farms</h1>
        <p className="mt-2 text-center text-neutral-600">Sign in: verify phone number</p>
        <LoginForm />
        <div className="mt-6 rounded-2xl ring-1 ring-neutral-200 p-4 text-center">
          <span className="text-neutral-700">Don't have an account?</span>{" "}
          <Link
            href="/login/signup"
            className="inline-flex items-center justify-center rounded-full bg-brand-egg text-ink px-4 py-2 text-sm font-semibold ring-1 ring-black/10 hover:brightness-95 transition-colors ml-2"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}


