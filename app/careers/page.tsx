import Link from "next/link";
import { DEFAULT_HERO_POSTER } from "@/app/constants/media";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibinii Farms • Careers",
  description: "Careers — Build Ghana’s food independence with digital innovation, smart logistics, and farmer-first impact.",
};

const openPositions = [
  {
    id: 1,
    title: "Farm Operations Manager",
    department: "Operations",
    location: "Multiple Locations",
    type: "Full-time",
    description: "Lead daily operations at our partner farms, ensuring animal welfare standards and production quality.",
    requirements: ["5+ years agricultural experience", "Leadership skills", "Animal welfare knowledge"]
  },
  {
    id: 2,
    title: "Sustainability Coordinator",
    department: "Environmental",
    location: "Remote/Hybrid",
    type: "Full-time",
    description: "Develop and implement sustainability initiatives across our farm network.",
    requirements: ["Environmental science background", "Project management", "Data analysis skills"]
  },
  {
    id: 3,
    title: "Quality Assurance Specialist",
    department: "Quality",
    location: "Regional",
    type: "Full-time",
    description: "Ensure product quality and safety standards across all production facilities.",
    requirements: ["Food safety certification", "Attention to detail", "Laboratory experience"]
  },
  {
    id: 4,
    title: "Customer Success Representative",
    department: "Customer Service",
    location: "Remote",
    type: "Full-time",
    description: "Provide exceptional customer service and support for our retail and direct customers.",
    requirements: ["Customer service experience", "Communication skills", "Problem-solving ability"]
  },
  {
    id: 5,
    title: "Marketing Coordinator",
    department: "Marketing",
    location: "Hybrid",
    type: "Full-time",
    description: "Support marketing campaigns and brand initiatives to grow our sustainable food mission.",
    requirements: ["Marketing experience", "Creative thinking", "Social media knowledge"]
  },
  {
    id: 6,
    title: "Farm Intern",
    department: "Operations",
    location: "Various Farms",
    type: "Internship",
    description: "Hands-on learning experience in sustainable farming practices and animal care.",
    requirements: ["Agricultural studies", "Physical fitness", "Eagerness to learn"]
  }
];

const benefits = [
  {
    icon: "💰",
    title: "Competitive Salary",
    description: "Fair compensation with performance-based bonuses and regular reviews."
  },
  {
    icon: "🏥",
    title: "Health Benefits",
    description: "Comprehensive health, dental, and vision insurance for you and your family."
  },
  {
    icon: "🌱",
    title: "Professional Growth",
    description: "Continuous learning opportunities and career advancement paths."
  },
  {
    icon: "🏡",
    title: "Work-Life Balance",
    description: "Flexible schedules and remote work options where possible."
  },
  {
    icon: "🥚",
    title: "Free Products",
    description: "Complimentary eggs and other farm products for all employees."
  },
  {
    icon: "🌍",
    title: "Mission-Driven",
    description: "Be part of a team making a positive impact on food systems and the environment."
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="https://ik.imagekit.io/edhumbling/Bibinii%20Hen%20House%20Video%203-8_15_2025,%207_08%E2%80%AFPM.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={DEFAULT_HERO_POSTER}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="h-full w-full flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Build a meaningful career powering Ghana’s food independence — with digital innovation, smart logistics, and farmer-first impact.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join a team of passionate individuals committed to making a positive impact on agriculture and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-glow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore current opportunities to join our growing team.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-glow/10 text-emerald-glow">
                        {position.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span>📍 {position.location}</span>
                      <span>🏢 {position.department}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{position.description}</p>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Key Requirements:</p>
                      <ul className="text-sm text-gray-600">
                        {position.requirements.map((req, index) => (
                          <li key={index} className="flex items-center">
                             <span className="w-1.5 h-1.5 bg-emerald-glow rounded-full mr-2"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button className="w-full lg:w-auto bg-luminous-green text-white px-6 py-2 rounded-lg font-semibold hover:brightness-110 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <p className="text-gray-600 mb-6">
                At Bibinii Farms, we believe that happy employees create better products and stronger communities. 
                Our culture is built on collaboration, innovation, and a shared commitment to our mission.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-emerald-glow rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Collaborative Environment</h3>
                    <p className="text-gray-600">Work with passionate teammates who share your values</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-emerald-glow rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Innovation Focus</h3>
                    <p className="text-gray-600">Encouraged to bring new ideas and improve processes</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-emerald-glow rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Work-Life Balance</h3>
                    <p className="text-gray-600">Flexible schedules and support for personal well-being</p>
                  </div>
                </div>
              </div>
            </div>
            
              <div className="bg-emerald-glow/10 h-64 rounded-lg flex items-center justify-center">
              <span className="text-emerald-glow text-lg font-semibold">Team Culture Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined hiring process is designed to find the right fit for both you and our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply</h3>
              <p className="text-gray-600 text-sm">
                Submit your application and resume through our online portal.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Review</h3>
              <p className="text-gray-600 text-sm">
                Our team reviews your application and contacts qualified candidates.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600 text-sm">
                Participate in interviews to discuss your experience and our mission.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Welcome</h3>
              <p className="text-gray-600 text-sm">
                Join our team and start making a positive impact from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't see a position that fits? We're always interested in hearing from talented individuals who share our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center rounded-full bg-luminous-green text-white px-8 py-3 font-semibold hover:brightness-110 transition-colors">
              View All Positions
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-emerald-glow text-emerald-glow px-8 py-3 font-semibold hover:bg-emerald-glow/10 transition-colors"
            >
              Contact HR
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
