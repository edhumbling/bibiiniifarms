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
			<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">Privacy Policy</h1>
			<p className="mt-4 text-neutral-700">Last updated: {new Date().toLocaleDateString()}</p>

			<section className="mt-8 space-y-6 text-neutral-700 leading-relaxed">
				<p>
					This Privacy Policy explains how Bibinii Farms ("we", "our", or "us") collects, uses, discloses, and
					protects information about you when you use our websites, services, and products (collectively, the
					"Services").
				</p>

				<h2 className="text-xl font-bold text-ink">1. Information We Collect</h2>
				<p>
					We may collect information you provide directly to us, such as your name, email, phone number,
					address, and order details. We also collect certain information automatically, including IP address,
					device information, pages visited, and interactions with our site.
				</p>

				<h2 className="text-xl font-bold text-ink">2. How We Use Information</h2>
				<p>
					We use your information to provide and improve our Services, process and fulfill orders, respond to
					inquiries, personalize content, analyze website performance, and comply with legal obligations.
				</p>

				<h2 className="text-xl font-bold text-ink">3. Sharing of Information</h2>
				<p>
					We may share information with trusted service providers who perform services on our behalf (e.g.
					payment processing, analytics, hosting), with your consent, or as required by law. We do not sell your
					personal information.
				</p>

				<h2 className="text-xl font-bold text-ink">4. Cookies and Tracking</h2>
				<p>
					We use cookies and similar technologies to operate and improve the site, measure performance, and
					personalize your experience. You can control cookies through your browser settings.
				</p>

				<h2 className="text-xl font-bold text-ink">5. Data Retention</h2>
				<p>
					We retain your information only for as long as necessary to fulfill the purposes outlined in this policy
					unless a longer retention period is required or permitted by law.
				</p>

				<h2 className="text-xl font-bold text-ink">6. Your Rights</h2>
				<p>
					Depending on your location, you may have rights to access, correct, or delete your personal
					information, and to object to or restrict certain processing. To exercise these rights, contact us at
					info@bibiniifarms.com.
				</p>

				<h2 className="text-xl font-bold text-ink">7. Data Security</h2>
				<p>
					We implement reasonable administrative, technical, and physical safeguards to protect your
					information. However, no method of transmission or storage is completely secure.
				</p>

				<h2 className="text-xl font-bold text-ink">8. International Transfers</h2>
				<p>
					Your information may be transferred to and processed in countries other than your own, which may
					have different data protection laws. We take steps to ensure appropriate safeguards are in place.
				</p>

				<h2 className="text-xl font-bold text-ink">9. Changes to This Policy</h2>
				<p>
					We may update this Privacy Policy from time to time. We will post the updated version on this page
					with a new effective date.
				</p>

				<h2 className="text-xl font-bold text-ink">10. Contact Us</h2>
				<p>
					If you have questions about this Privacy Policy or our data practices, please contact us at
					info@bibiniifarms.com.
				</p>
			</section>
		</div>
	);
}


