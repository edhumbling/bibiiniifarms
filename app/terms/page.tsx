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
			<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">Bibinii Farms – Terms of Service</h1>
			<p className="mt-4 text-neutral-700">Effective Date: August 16, 2025</p>
			<p className="text-neutral-700">Company: Bibinii Farms Company Ltd, Accra, Ghana</p>

			<section className="mt-8 space-y-6 text-neutral-700 leading-relaxed">
				<h2 className="text-xl font-bold text-ink">1. Introduction</h2>
				<p>
					Welcome to Bibinii Farms. By accessing or using our website, mobile app, USSD platform, and related
					services ("Services"), you agree to comply with and be bound by these Terms of Service ("Terms"). If you do
					not agree, you may not use our Services.
				</p>

				<h2 className="text-xl font-bold text-ink">2. Definitions</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li><strong>"Company," "we," "our," "us"</strong> – Bibinii Farms Company Ltd.</li>
					<li><strong>"User" or "Customer"</strong> – Any individual, business, or institution using our Services.</li>
					<li><strong>"Farmer" or "Supplier"</strong> – Poultry farmers and producers supplying eggs to Bibinii Farms.</li>
					<li><strong>"Services"</strong> – Online ordering, delivery, pickup, wholesale contracts, and digital platforms provided by Bibinii Farms.</li>
					<li><strong>"Products"</strong> – Eggs and any future agricultural products offered.</li>
				</ul>

				<h2 className="text-xl font-bold text-ink">3. Eligibility &amp; Accounts</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>Users must be 18 years or older to create an account.</li>
					<li>Users are responsible for maintaining the confidentiality of login credentials.</li>
					<li>Bibinii Farms may suspend or terminate accounts for fraud, misuse, or violation of these Terms.</li>
				</ul>

				<h2 className="text-xl font-bold text-ink">4. Ordering, Pricing &amp; Payment</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li><strong>Order Process:</strong> Orders may be placed via website, app, USSD, or authorized agents.</li>
					<li><strong>Pricing:</strong> All prices are in Ghana Cedis (GHS). Prices may change due to market conditions but will be communicated before purchase.</li>
					<li><strong>Payment:</strong> Accepted methods include Mobile Money, debit/credit card, or bank transfer. Orders must be paid in full before delivery or at pickup.</li>
					<li><strong>Bulk Orders:</strong> Schools, restaurants, NGOs, and institutions require contract agreements.</li>
					<li><strong>Refunds &amp; Replacements:</strong> We replace cracked, contaminated, or spoiled eggs upon immediate reporting. Monetary refunds are generally not issued unless required by law.</li>
				</ul>

				<h2 className="text-xl font-bold text-ink">5. Delivery &amp; Pickup</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li><strong>Delivery:</strong> We provide scheduled delivery to designated areas. Timelines may vary based on traffic, weather, and availability.</li>
					<li><strong>Pickup:</strong> Customers may choose pickup hubs. Orders not collected within 24 hours may be cancelled.</li>
					<li><strong>Responsibility:</strong> Once delivered or picked up, safe storage is the customer’s responsibility.</li>
				</ul>

				<h2 className="text-xl font-bold text-ink">6. Farmer Participation</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>Farmers must comply with Bibinii Farms’ quality, grading, and biosecurity standards.</li>
					<li>Eggs must be clean, properly graded, and delivered in approved crates.</li>
					<li>Bibinii Farms may reject poor-quality stock without liability.</li>
					<li>Farmers will receive agreed-upon payment via Mobile Money or bank transfer.</li>
				</ul>

				<h2 className="text-xl font-bold text-ink">7. Intellectual Property</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>All content, trademarks, and technology used by Bibinii Farms are the sole property of the Company.</li>
					<li>Users may not copy, modify, or distribute content without written consent.</li>
				</ul>

				<h2 className="text-xl font-bold text-ink">8. User Responsibilities</h2>
				<p>Users agree not to:</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>Use the Services for unlawful purposes.</li>
					<li>Resell products without written approval.</li>
					<li>Misrepresent themselves as Bibinii Farms agents.</li>
				</ul>

				<h2 className="text-xl font-bold text-ink">9. Data Protection &amp; Privacy</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>We collect and process personal data in line with the Data Protection Act, 2012 (Act 843).</li>
					<li>Data is used only for order processing, delivery, payment, and service improvement.</li>
					<li>Users may request correction or deletion of personal data as outlined in our Privacy Policy.</li>
				</ul>

				<h2 className="text-xl font-bold text-ink">10. Warranties &amp; Disclaimers</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>Products are sold "as is" with standard grading and safety practices.</li>
					<li>Bibinii Farms does not guarantee uninterrupted access to the website, app, or USSD service.</li>
					<li>We are not liable for spoilage or contamination caused by improper storage after delivery.</li>
				</ul>

				<h2 className="text-xl font-bold text-ink">11. Limitation of Liability</h2>
				<p>To the maximum extent permitted by law, Bibinii Farms is not liable for:</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>Loss of profit, business interruption, or indirect damages.</li>
					<li>Delays caused by events beyond our control (e.g., strikes, fuel shortages, transport breakdowns).</li>
					<li>Health issues resulting from improper egg handling by customers.</li>
				</ul>

				<h2 className="text-xl font-bold text-ink">12. Indemnification</h2>
				<p>
					Users and Farmers agree to indemnify and hold harmless Bibinii Farms from any claims, damages, or expenses
					arising from misuse of our Services or breach of these Terms.
				</p>

				<h2 className="text-xl font-bold text-ink">13. Dispute Resolution</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>Disputes shall first be resolved through amicable negotiation or mediation under Ghana’s ADR Act.</li>
					<li>If unresolved, disputes will be settled under the laws of Ghana, with jurisdiction in Ghanaian courts.</li>
				</ul>

				<h2 className="text-xl font-bold text-ink">14. Termination</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>Bibinii Farms may suspend or terminate Services for violation of these Terms or fraudulent activity.</li>
					<li>Users may terminate their accounts at any time, subject to outstanding payments.</li>
				</ul>

				<h2 className="text-xl font-bold text-ink">15. Amendments</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>Bibinii Farms may update these Terms from time to time. Updates will be communicated via website, app, or SMS/USSD notifications.</li>
					<li>Continued use of Services after changes constitutes acceptance.</li>
				</ul>

				<h2 className="text-xl font-bold text-ink">16. Contact Information</h2>
				<div className="space-y-1">
					<p>Bibinii Farms Company Ltd</p>
					<p>Accra, Ghana</p>
					<p>Email: info@Bibiniifarms.com</p>
					<p>Phone: +233543474770</p>
				</div>
			</section>
		</div>
	);
}


