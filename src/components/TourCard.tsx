import React from "react";

interface Tour {
  title: string;
  description: string;
  country: string;
  image?: string;
  price: string;
}

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <div className="tour-card">
      {tour.image && <img src={tour.image} alt={tour.title} className="tour-img" />}
      <div className="tour-body">
        <h3 className="tour-title">{tour.title}</h3>
        <p className="tour-description">{tour.description}</p>
        <div className="tour-footer">
          <span className="tour-country">{tour.country}</span>
          <span className="tour-price">{tour.price}</span>
        </div>
        <button className="tour-button">Book Now</button>
      </div>
    </div>
  );
}
