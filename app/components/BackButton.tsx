"use client";

import Link from "next/link";

type BackButtonProps = {
	href: string;
	label?: string;
	className?: string;
};

export default function BackButton({ href, label = "Back to Home", className = "" }: BackButtonProps) {
	return (
		<div className={`mb-6 ${className}`}>
			<Link
				href={href}
				className="inline-flex items-center gap-2 rounded-md bg-white text-deep-green px-3 py-2 shadow ring-1 ring-black/10 hover:shadow-md"
			>
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
				<span className="font-medium">{label}</span>
			</Link>
		</div>
	);
}


