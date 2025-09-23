import React from "react";

export default function Newsletter() {
  return (
    <section className="py-12 bg-blue-600 text-center text-white">
      <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
      <p className="mb-6">Get exclusive travel deals straight to your inbox.</p>
      <div className="flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-l-lg text-black"
        />
        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-r-lg">
          Subscribe
        </button>
      </div>
    </section>
  );
}
