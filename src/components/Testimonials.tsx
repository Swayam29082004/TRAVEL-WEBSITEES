import React from "react";

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    text: "Rome tour was unforgettable! Skip-the-line tickets saved us hours.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Michael Chen",
    text: "Tokyo was incredible. Great guide and amazing local food!",
    image: "https://via.placeholder.com/100",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6">
        What Our Travelers Say
      </h2>
      <div className="grid md:grid-cols-2 gap-6 px-6">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full mr-3"
              />
              <h3 className="font-semibold">{t.name}</h3>
            </div>
            <p className="text-gray-600">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
