import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibinii Farms • Blog",
  description: "Stories, insights, and updates from the world of sustainable farming and ethical egg production.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
