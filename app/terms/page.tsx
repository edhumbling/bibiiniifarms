import { Metadata } from "next";
import BackButton from "@/app/components/BackButton";

export const metadata: Metadata = {
	title: "Bibinii Farms • Terms of Service",
	description: "Read the terms that govern your use of Bibinii Farms websites, products, and services.",
	robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
	return (
		<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
			<BackButton href="/" />
			<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">Terms of Service</h1>
			<p className="mt-4 text-neutral-700">Last updated: {new Date().toLocaleDateString()}</p>

			<section className="mt-8 space-y-6 text-neutral-700 leading-relaxed">
				<h2 className="text-xl font-bold text-ink">1. Acceptance of Terms</h2>
				<p>
					By accessing or using Bibinii Farms websites, products, and services (the "Services"), you agree to be
					bound by these Terms of Service and our Privacy Policy.
				</p>

				<h2 className="text-xl font-bold text-ink">2. Eligibility</h2>
				<p>
					You must be at least the age of majority in your jurisdiction to use the Services or have permission
					from a parent or legal guardian.
				</p>

				<h2 className="text-xl font-bold text-ink">3. Accounts and Security</h2>
				<p>
					You are responsible for maintaining the confidentiality of your account credentials and for all
					activities that occur under your account. Notify us immediately of unauthorized use.
				</p>

				<h2 className="text-xl font-bold text-ink">4. Acceptable Use</h2>
				<p>
					You agree not to misuse the Services, including by attempting to interfere with normal operation,
					accessing data without authorization, or infringing intellectual property rights.
				</p>

				<h2 className="text-xl font-bold text-ink">5. Orders, Pricing, and Availability</h2>
				<p>
					All orders are subject to availability and confirmation. Prices may change without notice. We reserve
					the right to refuse or cancel orders at our discretion.
				</p>

				<h2 className="text-xl font-bold text-ink">6. Intellectual Property</h2>
				<p>
					All content and materials available through the Services are owned by or licensed to Bibinii Farms and
					are protected by intellectual property laws. You may not copy, modify, or distribute without
					permission.
				</p>

				<h2 className="text-xl font-bold text-ink">7. Disclaimers</h2>
				<p>
					The Services are provided "as is" without warranties of any kind, express or implied. We do not
					warrant uninterrupted or error-free operation.
				</p>

				<h2 className="text-xl font-bold text-ink">8. Limitation of Liability</h2>
				<p>
					To the fullest extent permitted by law, Bibinii Farms shall not be liable for any indirect, incidental,
					special, consequential, or punitive damages, or any loss of profits or revenues.
				</p>

				<h2 className="text-xl font-bold text-ink">9. Termination</h2>
				<p>
					We may suspend or terminate access to the Services at any time for any reason, including violation of
					these Terms.
				</p>

				<h2 className="text-xl font-bold text-ink">10. Changes to Terms</h2>
				<p>
					We may modify these Terms from time to time. Changes take effect when posted. Your continued use of
					the Services constitutes acceptance of the revised Terms.
				</p>

				<h2 className="text-xl font-bold text-ink">11. Contact</h2>
				<p>
					For questions about these Terms, contact us at info@bibiniifarms.com.
				</p>
			</section>
		</div>
	);
}


