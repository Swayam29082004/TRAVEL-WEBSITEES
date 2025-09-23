import React, { useEffect, useState } from "react";
import stack from "../contentstackClient";

interface Tour {
  title: string;
  country: string;
  description: string;
}

export default function ToursList({ country }: { country: string }) {
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    const fetchTours = async () => {
      const Query = stack.ContentType("tours").Query();
      Query.where("country", country)
        .toJSON()
        .find()
        .then(([entries]) => {
          setTours(entries as Tour[]);
        });
    };
    fetchTours();
  }, [country]);

  return (
    <div>
      <h2 className="text-xl font-bold">Tours in {country}</h2>
      {tours.length > 0 ? (
        tours.map((tour, idx) => (
          <div key={idx} className="p-2 border-b">
            <h3 className="font-semibold">{tour.title}</h3>
            <p>{tour.description}</p>
          </div>
        ))
      ) : (
        <p>No tours found.</p>
      )}
    </div>
  );
}
