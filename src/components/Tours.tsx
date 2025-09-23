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
