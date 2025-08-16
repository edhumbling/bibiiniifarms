export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  imageUrl: string;
  sections: BlogSection[];
  sources: { label: string; url: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Benefits of Pasture-Raised Eggs",
    excerpt:
      "Why pasture-raised eggs are better for hen welfare and can offer a richer nutrition profile.",
    date: "March 15, 2024",
    category: "Nutrition",
    readTime: "5 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1513863321065-4a1d1d3b2b72?q=80&w=1200&auto=format&fit=crop",
    sections: [
      {
        heading: "What pasture-raised means",
        paragraphs: [
          "Pasture-raised hens spend meaningful time outdoors with room to roam, forage, and express natural behaviors.",
          "More movement and diverse forage can contribute to firm whites, vivid yolks, and nuanced flavor.",
        ],
      },
      {
        heading: "Nutrition snapshot",
        paragraphs: [
          "Studies and certification bodies report that eggs from outdoor systems can show higher vitamin A and E and a more favorable omega-6:omega-3 ratio compared to conventional eggs, though values vary by season and farm.",
        ],
      },
      {
        heading: "Kitchen tips",
        paragraphs: [
          "For poaching, use fresh pasture-raised eggs for tighter whites and domed yolks.",
          "For frying, cook hot and fast for lacy edges that contrast a soft center.",
        ],
      },
    ],
    sources: [
      { label: "Certified Humane – Pasture Raised standard", url: "https://certifiedhumane.org/standards/" },
      { label: "NCBI – Nutritional value of eggs", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6470839/" },
    ],
  },
  {
    id: 4,
    title: "Chicken Welfare: What Free-Range Really Means",
    excerpt:
      "Understanding free-range vs. cage-free and how outdoor access is defined.",
    date: "February 28, 2024",
    category: "Animal Welfare",
    readTime: "6 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1525253013412-55c1a69a5738?q=80&w=1200&auto=format&fit=crop",
    sections: [
      {
        heading: "Free-range in practice",
        paragraphs: [
          "Free-range generally indicates hens have some outdoor access. Practical quality depends on door design, space, and weather.",
          "Cage-free differs: birds are indoors but not in cages. Labels and standards vary by certifier and country.",
        ],
      },
      {
        heading: "Label nuance",
        paragraphs: [
          "In many markets, 'free-range' for shell eggs isn't strictly defined by a single federal rule. Third-party programs specify minimum outdoor access.",
        ],
      },
    ],
    sources: [
      { label: "Incredible Egg – Free-Range Eggs", url: "https://www.incredibleegg.org/eggcyclopedia/free-range-eggs/" },
      { label: "Certified Humane – Free-Range standard", url: "https://certifiedhumane.org/standards/" },
    ],
  },
  {
    id: 7,
    title: "Organic Eggs: Standards and What They Mean",
    excerpt:
      "A quick guide to organic feed, prohibited inputs, and verification.",
    date: "March 20, 2024",
    category: "Education",
    readTime: "4 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=1200&auto=format&fit=crop",
    sections: [
      {
        heading: "Core requirements",
        paragraphs: [
          "Organic hens receive certified organic feed free from synthetic pesticides and fertilizers. Routine antibiotics and GMOs are prohibited.",
          "Compliance is audited: records, traceability, and on-site inspections underpin the label.",
        ],
      },
      {
        heading: "What the label does and doesn’t say",
        paragraphs: [
          "Organic addresses inputs and verification. Nutrition can be similar to conventional unless diets differ (e.g., omega-3 supplementation).",
        ],
      },
    ],
    sources: [
      { label: "USDA – Organic regulations", url: "https://www.ams.usda.gov/rules-regulations/organic" },
      { label: "Incredible Egg – Nutrition differences", url: "https://www.incredibleegg.org/nutrition/articles/what-are-the-nutritional-differences-for-different-types-of-eggs/" },
    ],
  },
  {
    id: 8,
    title: "Heritage Eggs: Breeds, Flavor, and Care",
    excerpt:
      "Traditional chicken breeds and the distinctive qualities of their eggs.",
    date: "March 25, 2024",
    category: "Culture",
    readTime: "5 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476a?q=80&w=1200&auto=format&fit=crop",
    sections: [
      {
        heading: "What is a heritage breed?",
        paragraphs: [
          "Heritage chickens are traditional, slower-growing breeds selected for hardiness and product quality rather than rapid industrial growth.",
          "Eggs often have richly colored yolks and notable flavor when birds live in varied environments and balanced diets.",
        ],
      },
      {
        heading: "Stewardship",
        paragraphs: [
          "Maintaining genetic diversity and humane husbandry preserves resilient flocks and culinary character.",
        ],
      },
    ],
    sources: [
      { label: "The Livestock Conservancy – Heritage Chicken", url: "https://livestockconservancy.org/heritage-breeds/heritage-chicken/" },
      { label: "NCBI – Nutritional value of eggs", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6470839/" },
    ],
  },
  // Additional non-egg-type posts can be listed here if desired
  {
    id: 2,
    title: "Sustainable Farming: Our Regenerative Practices",
    excerpt:
      "How regenerative agriculture improves soil health and biodiversity.",
    date: "March 10, 2024",
    category: "Sustainability",
    readTime: "7 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1500937386664-56f3d84f0d79?q=80&w=1200&auto=format&fit=crop",
    sections: [
      { heading: "Soil first", paragraphs: ["Cover crops, compost, and planned grazing build soil carbon and fertility."] },
      { heading: "Biodiversity", paragraphs: ["Hedgerows and habitat strips invite pollinators and beneficial insects."] },
    ],
    sources: [
      { label: "FAO – Regenerative agriculture", url: "https://www.fao.org/home/en/" },
    ],
  },
  {
    id: 3,
    title: "Meet Our Farmers: The Johnson Family Farm",
    excerpt:
      "A conversation about stewardship, tradition, and quality.",
    date: "March 5, 2024",
    category: "Farmers",
    readTime: "4 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=1200&auto=format&fit=crop",
    sections: [
      { heading: "Origins", paragraphs: ["A multigenerational farm balancing tradition with innovation."] },
    ],
    sources: [],
  },
  {
    id: 5,
    title: "Seasonal Egg Production: What to Expect",
    excerpt:
      "How daylight and weather influence laying patterns.",
    date: "February 20, 2024",
    category: "Education",
    readTime: "3 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1506466010722-395aa2bef877?q=80&w=1200&auto=format&fit=crop",
    sections: [
      { heading: "Daylength", paragraphs: ["Shorter days can reduce lay; spring boosts production."] },
    ],
    sources: [],
  },
  {
    id: 6,
    title: "Recipe: Perfect Scrambled Eggs with Fresh Herbs",
    excerpt:
      "Creamy, soft-scrambled eggs you can master in minutes.",
    date: "February 15, 2024",
    category: "Recipes",
    readTime: "2 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1543339494-b4cd9a3f7371?q=80&w=1200&auto=format&fit=crop",
    sections: [
      { heading: "Method", paragraphs: ["Low heat, constant stirring, finish with herbs and butter."] },
    ],
    sources: [],
  },
];


