import React from "react";

interface Tour {
  title: string;
  description: string;
  country: string;
  image?: string;
}

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {tour.image && (
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4 text-left">
        <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
        <p className="text-gray-700 mb-3">{tour.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 italic">{tour.country}</span>
          <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
