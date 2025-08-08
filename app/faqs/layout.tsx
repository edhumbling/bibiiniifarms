import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibinii Farms • FAQs",
  description: "Find answers to common questions about our products, farming practices, and services.",
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
