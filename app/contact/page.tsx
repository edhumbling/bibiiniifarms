import { DEFAULT_HERO_POSTER } from "@/app/constants/media";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibinii Farms • Contact",
  description: "We'd love to hear from you. Get in touch with our team for any questions or support.",
};

const contactMethods = [
  {
    icon: "📧",
    title: "Email Us",
    description: "General inquiries and customer support",
    contact: "info@bibiniifarms.com",
    action: "mailto:info@bibiniifarms.com"
  },
  {
    icon: "📞",
    title: "Call Us",
    description: "Speak directly with our team",
    contact: "+233 54 347 4770",
    action: "tel:+233543474770"
  },
  {
    icon: "💬",
    title: "Live Chat",
    description: "Get instant help during business hours",
    contact: "Available Mon-Fri, 9 AM - 5 PM EST",
    action: "#"
  }
];

const departments = [
  {
    name: "Customer Service",
    email: "info@bibiniifarms.com",
    description: "Product questions, orders, and general support"
  },
  {
    name: "Sales & Partnerships",
    email: "info@bibiniifarms.com",
    description: "Retail partnerships and bulk orders"
  },
  {
    name: "Farmer Partnerships",
    email: "info@bibiniifarms.com",
    description: "Becoming a partner farmer"
  },
  {
    name: "Press & Media",
    email: "info@bibiniifarms.com",
    description: "Media inquiries and press requests"
  },
  {
    name: "Careers",
    email: "info@bibiniifarms.com",
    description: "Job opportunities and applications"
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="https://ik.imagekit.io/edhumbling/Bibinii%20Hen%20House%20Video%203-8_14_2025,%204_03%E2%80%AFPM.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={DEFAULT_HERO_POSTER}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We'd love to hear from you. Get in touch with our team for any questions or support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-glow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{method.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <a
                  href={method.action}
                  className="text-emerald-glow hover:brightness-110 font-medium"
                >
                  {method.contact}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
