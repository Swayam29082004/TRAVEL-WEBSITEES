import React from "react";
import TourCard from "./TourCard";

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
    image: "https://via.placeholder.com/600x350?text=Rome+Tour",
    price: "$299",
    category: "cultural",
  },
  {
    title: "Paris City Lights",
    country: "France",
    description: "Romantic Eiffel Tower, Louvre & Seine River Cruise.",
    image: "https://via.placeholder.com/600x350?text=Paris+Tour",
    price: "$349",
    category: "romantic",
  },
  {
    title: "Tokyo Cultural Walk",
    country: "Japan",
    description: "Shibuya, Meiji Shrine & local experiences.",
    image: "https://via.placeholder.com/600x350?text=Tokyo+Tour",
    price: "$399",
    category: "cultural",
  },
  {
    title: "Safari Adventure",
    country: "Kenya",
    description: "Experience wildlife at Masai Mara with luxury camping.",
    image: "https://via.placeholder.com/600x350?text=Safari+Kenya",
    price: "$799",
    category: "adventure",
  },
  {
    title: "Bali Beach Escape",
    country: "Indonesia",
    description: "Relax on pristine beaches and explore Balinese temples.",
    image: "https://via.placeholder.com/600x350?text=Bali+Beach",
    price: "$599",
    category: "romantic",
  },
  {
    title: "New York Highlights",
    country: "USA",
    description: "Times Square, Statue of Liberty, and Broadway shows.",
    image: "https://via.placeholder.com/600x350?text=NYC+Tour",
    price: "$449",
    category: "cultural",
  },
  {
    title: "Santorini Sunset Tour",
    country: "Greece",
    description: "Enjoy stunning sunsets, white-washed villages, and wine tasting.",
    image: "https://via.placeholder.com/600x350?text=Santorini+Tour",
    price: "$549",
    category: "romantic",
  },
  {
    title: "Machu Picchu Hike",
    country: "Peru",
    description: "Trek the Inca Trail to the ancient citadel of Machu Picchu.",
    image: "https://via.placeholder.com/600x350?text=Machu+Picchu",
    price: "$899",
    category: "adventure",
  },
  {
    title: "Great Wall of China",
    country: "China",
    description: "Walk along the iconic Great Wall and explore Beijing.",
    image: "https://via.placeholder.com/600x350?text=Great+Wall+China",
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
  const filteredTours = TOURS.filter((tour) => {
    const matchesSearch =
      tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || tour.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Top Destinations</h2>

      {/* Category Filter */}
      <div className="flex justify-center mb-6">
        {["all", "cultural", "romantic"].map((cat) => (
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

      <div className="tours-grid">
        {filteredTours.map((tour, idx) => (
          <TourCard key={idx} tour={tour} />
        ))}
      </div>
    </section>
  );
}