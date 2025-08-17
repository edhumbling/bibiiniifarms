import { Metadata } from "next";
import BackButton from "@/app/components/BackButton";

export const metadata: Metadata = {
	title: "Bibinii Farms • Privacy Policy",
	description: "Learn how Bibinii Farms collects, uses, and protects your personal information.",
	robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
	return (
		<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
			<BackButton href="/" />
			<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">Privacy Policy – Bibinii Farms</h1>
			<p className="mt-4 text-neutral-700">Effective Date: August 16, 2025</p>

			<section className="mt-8 space-y-6 text-neutral-700 leading-relaxed">
				<h2 className="text-xl font-bold text-ink">1. Introduction</h2>
				<p>
					Bibinii Farms Company Ltd ("Bibinii Farms," "we," "our," or "us") respects your privacy. This Privacy
					Policy explains how we collect, use, and protect personal information when you use our website, app, or
					services.
				</p>

				<h2 className="text-xl font-bold text-ink">2. Information We Collect</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>Contact details (name, phone, email, address)</li>
					<li>Payment details (mobile money, bank transfer info)</li>
					<li>Order and delivery history</li>
					<li>Farmer supply records (crate counts, quality grading)</li>
					<li>Device &amp; usage data (cookies, IP address, location for delivery)</li>
				</ul>

				<h2 className="text-xl font-bold text-ink">3. How We Use Information</h2>
				<p>We process data under the Data Protection Act, 2012 (Act 843) on the basis of:</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>Consent (when you sign up or opt-in)</li>
					<li>Contractual necessity (to fulfill your orders)</li>
					<li>Legal obligation (compliance with regulators)</li>
					<li>Legitimate interest (improving our logistics, fraud prevention)</li>
				</ul>

				<h2 className="text-xl font-bold text-ink">4. Data Sharing</h2>
				<p>We do not sell your data. We may share with:</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>Delivery/logistics partners for order fulfillment</li>
					<li>Payment providers for transactions</li>
					<li>Regulators or law enforcement, when legally required</li>
				</ul>

				<h2 className="text-xl font-bold text-ink">5. Children’s Privacy</h2>
				<p>
					Our services are not intended for children under 18. We do not knowingly collect personal data from minors.
					Parents/guardians should contact us if a minor’s data has been collected.
				</p>

				<h2 className="text-xl font-bold text-ink">6. International Users</h2>
				<p>
					Currently, data is stored and processed in Ghana. If we expand, international data transfers will comply
					with applicable laws.
				</p>

				<h2 className="text-xl font-bold text-ink">7. Data Security</h2>
				<p>We use encryption, access controls, and secure servers to protect your information.</p>

				<h2 className="text-xl font-bold text-ink">8. Data Retention</h2>
				<p>We retain data only as long as necessary for business or legal purposes.</p>

				<h2 className="text-xl font-bold text-ink">9. Your Rights</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>Access, correct, or delete your data</li>
					<li>Withdraw consent at any time</li>
					<li>File a complaint with the Data Protection Commission of Ghana</li>
				</ul>

				<h2 className="text-xl font-bold text-ink">10. Dispute Resolution</h2>
				<p>
					Privacy disputes may be raised with Bibinii Farms first. If unresolved, you may escalate to the Data
					Protection Commission of Ghana.
				</p>

				<h2 className="text-xl font-bold text-ink">11. Contact</h2>
				<p>For privacy inquiries, contact: info@bibiniifarms.com</p>
			</section>
		</div>
	);
}


