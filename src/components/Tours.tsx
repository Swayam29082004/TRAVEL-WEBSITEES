import { useState, useEffect } from "react";
import TourCard from "./TourCard";
import stack from "../lib/contentstack"; // ✅ import Contentstack client

interface Tour {
  title: string;
  country: string;
  description: string;
  image?: string;
  price: string;
  category: string;
}

const TOURS: Tour[] = [
  {
    title: "Rome City Tour",
    country: "Italy",
    description: "Explore ancient Rome with the Colosseum & Vatican.",
    image: "/images/tours/rome.jpg",
    price: "$299",
    category: "cultural",
  },
  {
    title: "Paris City Lights",
    country: "France",
    description: "Romantic Eiffel Tower, Louvre & Seine River Cruise.",
    image: "/images/tours/paris.jpg",
    price: "$349",
    category: "romantic",
  },
  {
    title: "Tokyo Cultural Walk",
    country: "Japan",
    description: "Shibuya, Meiji Shrine & local experiences.",
    image: "/images/tours/tokyo.jpg",
    price: "$399",
    category: "cultural",
  },
  {
    title: "Safari Adventure",
    country: "Kenya",
    description: "Experience wildlife at Masai Mara with luxury camping.",
    image: "/images/tours/safari.jpg",
    price: "$799",
    category: "adventure",
  },
  {
    title: "Bali Beach Escape",
    country: "Indonesia",
    description: "Relax on pristine beaches and explore Balinese temples.",
    image: "/images/tours/bali.jpg",
    price: "$599",
    category: "romantic",
  },
  {
    title: "New York Highlights",
    country: "USA",
    description: "Times Square, Statue of Liberty, and Broadway shows.",
    image: "/images/tours/newyork.jpg",
    price: "$449",
    category: "cultural",
  },
  {
    title: "Santorini Sunset Tour",
    country: "Greece",
    description: "Enjoy stunning sunsets, white-washed villages, and wine tasting.",
    image: "/images/tours/greece.jpg",
    price: "$549",
    category: "romantic",
  },
  {
    title: "Machu Picchu Hike",
    country: "Peru",
    description: "Trek the Inca Trail to the ancient citadel of Machu Picchu.",
    image: "/images/tours/machu.jpg",
    price: "$899",
    category: "adventure",
  },
  {
    title: "Great Wall of China",
    country: "China",
    description: "Walk along the iconic Great Wall and explore Beijing.",
    image: "/images/tours/greatwall.jpg",
    price: "$499",
    category: "cultural",
  },
];

export default function Tours({
  searchTerm,
  selectedCategory,
  setSelectedCategory,
}: {
  searchTerm: string;
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
}) {
  const [tours, setTours] = useState<Tour[]>(TOURS); // ✅ use fallback tours
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const Query = stack.ContentType("tour").Query();
        const result = await Query.toJSON().find();
        const entries = result[0] || [];

        if (entries.length > 0) {
          const mappedTours: Tour[] = entries.map((entry: any) => ({
            title: entry.title,
            country: entry.country,
            description: entry.description,
            image: entry.image?.url || "",
            price: entry.price,
            category: entry.category,
          }));

          setTours(mappedTours);
        } else {
          console.warn("No tours found in Contentstack, using fallback data.");
        }
      } catch (error) {
        console.error("Error fetching tours from Contentstack:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const filteredTours = tours.filter((tour) => {
    const matchesSearch =
      tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || tour.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", ...new Set(tours.map((t) => t.category))];

  if (loading) {
    return <p className="text-center">Loading tours...</p>;
  }

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Top Destinations</h2>

      {/* Category Filter */}
      <div className="flex justify-center mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`mx-2 px-4 py-2 rounded ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tours Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredTours.map((tour, idx) => (
          <TourCard key={idx} tour={tour} />
        ))}
      </div>
    </section>
  );
}
