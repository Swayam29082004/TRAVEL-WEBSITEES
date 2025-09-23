import React from "react";
import TourCard from "./TourCard";

interface Tour {
  title: string;
  description: string;
  country: string;
  image?: string;
}

export default function ToursList({ tours }: { tours: Tour[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {tours.length > 0 ? (
        tours.map((tour, idx) => <TourCard key={idx} tour={tour} />)
      ) : (
        <p className="col-span-full text-gray-500 text-center">
          No tours found for this destination.
        </p>
      )}
    </div>
  );
}
