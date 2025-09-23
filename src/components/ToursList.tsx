import React from "react";
import TourCard from "./TourCard";

interface Tour {
  title: string;
  description: string;
  country: string;
  image?: string;
  price: string;
}

export default function ToursList({ tours }: { tours: Tour[] }) {
  return (
    <div className="tours-grid">
      {tours.length > 0 ? (
        tours.map((tour, idx) => <TourCard key={idx} tour={tour} />)
      ) : (
        <p className="no-tours">No tours found for this destination.</p>
      )}
    </div>
  );
}
