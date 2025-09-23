import React from "react";
import "./App.css";
import ToursList from "./components/ToursList";

interface Tour {
  title: string;
  country: string;
  description: string;
  image?: string;
  price: string;
}

const TOURS: Tour[] = [
  {
    title: "Rome City Tour",
    country: "Italy",
    description:
      "Explore ancient Rome with visits to the Colosseum, Vatican, and Trevi Fountain.",
    image: "https://via.placeholder.com/600x350?text=Rome+Tour",
    price: "$299",
  },
  {
    title: "Venice Gondola Ride",
    country: "Italy",
    description: "A romantic gondola ride through the canals of Venice.",
    image: "https://via.placeholder.com/600x350?text=Venice+Tour",
    price: "$199",
  },
  {
    title: "Paris City Lights",
    country: "France",
    description:
      "Experience the romance of Paris with Eiffel Tower, Louvre, and Seine River cruise.",
    image: "https://via.placeholder.com/600x350?text=Paris+Tour",
    price: "$349",
  },
  {
    title: "Nice Beach Escape",
    country: "France",
    description:
      "Relax on the stunning beaches of the French Riviera in Nice.",
    image: "https://via.placeholder.com/600x350?text=Nice+Beach",
    price: "$249",
  },
  {
    title: "Tokyo Cultural Walk",
    country: "Japan",
    description:
      "Visit Shibuya crossing, Meiji Shrine, and Tokyo Skytree with a local guide.",
    image: "https://via.placeholder.com/600x350?text=Tokyo+Tour",
    price: "$399",
  },
  {
    title: "Kyoto Temples Tour",
    country: "Japan",
    description: "Discover ancient temples and serene gardens in Kyoto.",
    image: "https://via.placeholder.com/600x350?text=Kyoto+Tour",
    price: "$329",
  },
  {
    title: "New York City Explorer",
    country: "USA",
    description:
      "See Times Square, Central Park, and the Statue of Liberty in the city that never sleeps.",
    image: "https://via.placeholder.com/600x350?text=NYC+Tour",
    price: "$459",
  },
  {
    title: "San Francisco Golden Gate",
    country: "USA",
    description:
      "Enjoy views of the Golden Gate Bridge, Fisherman’s Wharf, and Alcatraz Island.",
    image: "https://via.placeholder.com/600x350?text=San+Francisco",
    price: "$379",
  },
  {
    title: "Sydney Opera Experience",
    country: "Australia",
    description:
      "Tour the Sydney Opera House and enjoy a cruise around Sydney Harbour.",
    image: "https://via.placeholder.com/600x350?text=Sydney+Tour",
    price: "$499",
  },
  {
    title: "Great Barrier Reef Dive",
    country: "Australia",
    description: "Scuba dive in the world-famous Great Barrier Reef.",
    image: "https://via.placeholder.com/600x350?text=Great+Barrier+Reef",
    price: "$599",
  },
];

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-overlay">
          <h1 className="hero-title">🌍 Travel Explorer</h1>
          <p className="hero-subtitle">
            Discover amazing tours around the globe. Start your journey today!
          </p>
        </div>
      </header>

      {/* Tours Grid */}
      <section className="p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Top Destinations</h2>
        <ToursList tours={TOURS} />
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Travel Explorer | Made with ❤️</p>
      </footer>
    </div>
  );
}

export default App;
