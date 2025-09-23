import React, { useState } from "react";
import "./App.css";
import ToursList from "./components/ToursList";

interface Tour {
  title: string;
  country: string;
  description: string;
  image?: string;
}

const TOURS: Tour[] = [
  {
    title: "Rome City Tour",
    country: "Italy",
    description:
      "Explore ancient Rome with visits to the Colosseum, Vatican, and Trevi Fountain.",
    image: "https://via.placeholder.com/600x350?text=Rome+Tour",
  },
  {
    title: "Venice Gondola Ride",
    country: "Italy",
    description: "A romantic gondola ride through the canals of Venice.",
    image: "https://via.placeholder.com/600x350?text=Venice+Tour",
  },
  {
    title: "Paris City Lights",
    country: "France",
    description:
      "Experience the romance of Paris with Eiffel Tower, Louvre, and Seine River cruise.",
    image: "https://via.placeholder.com/600x350?text=Paris+Tour",
  },
  {
    title: "Nice Beach Escape",
    country: "France",
    description:
      "Relax on the stunning beaches of the French Riviera in Nice.",
    image: "https://via.placeholder.com/600x350?text=Nice+Beach",
  },
  {
    title: "Tokyo Cultural Walk",
    country: "Japan",
    description:
      "Visit Shibuya crossing, Meiji Shrine, and Tokyo Skytree with a local guide.",
    image: "https://via.placeholder.com/600x350?text=Tokyo+Tour",
  },
  {
    title: "Kyoto Temples Tour",
    country: "Japan",
    description: "Discover ancient temples and serene gardens in Kyoto.",
    image: "https://via.placeholder.com/600x350?text=Kyoto+Tour",
  },
  {
    title: "New York City Explorer",
    country: "USA",
    description:
      "See Times Square, Central Park, and the Statue of Liberty in the city that never sleeps.",
    image: "https://via.placeholder.com/600x350?text=NYC+Tour",
  },
  {
    title: "San Francisco Golden Gate",
    country: "USA",
    description:
      "Enjoy views of the Golden Gate Bridge, Fisherman’s Wharf, and Alcatraz Island.",
    image: "https://via.placeholder.com/600x350?text=San+Francisco",
  },
  {
    title: "Sydney Opera Experience",
    country: "Australia",
    description:
      "Tour the Sydney Opera House and enjoy a cruise around Sydney Harbour.",
    image: "https://via.placeholder.com/600x350?text=Sydney+Tour",
  },
  {
    title: "Great Barrier Reef Dive",
    country: "Australia",
    description: "Scuba dive in the world-famous Great Barrier Reef.",
    image: "https://via.placeholder.com/600x350?text=Great+Barrier+Reef",
  },
];

function App() {
  const [country, setCountry] = useState("Italy");
  const filteredTours = TOURS.filter((tour) => tour.country === country);

  // Get unique list of countries
  const countries = Array.from(new Set(TOURS.map((t) => t.country)));

  return (
    <div className="App">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-5xl font-extrabold mb-4">🌍 Travel Explorer</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Discover amazing tours across the world. Choose your destination and
          start your journey today!
        </p>
      </header>

      {/* Country Filter */}
      <section className="p-6">
        <div className="mb-6 text-center">
          <label className="mr-2 font-semibold">Select Country:</label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="p-2 border rounded"
          >
            {countries.map((c, idx) => (
              <option key={idx} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Tours Grid */}
        <ToursList tours={filteredTours} />
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-6 text-center mt-12">
        <p>© {new Date().getFullYear()} Travel Explorer. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
