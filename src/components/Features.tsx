import React from "react";
import { Globe, Shield, Headphones } from "lucide-react";

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Why Choose Travel Explorer?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide exceptional travel experiences with expert guides,
          curated itineraries, and unforgettable memories.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 px-6">
        <FeatureCard
          icon={<Globe className="w-8 h-8 text-blue-600" />}
          title="Expert Guides"
          text="Local professionals with passion and deep knowledge."
        />
        <FeatureCard
          icon={<Shield className="w-8 h-8 text-orange-600" />}
          title="Safe & Secure"
          text="Your safety is our priority with 24/7 support."
        />
        <FeatureCard
          icon={<Headphones className="w-8 h-8 text-green-600" />}
          title="24/7 Support"
          text="Always here to help you during your trip."
        />
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-md">
      <div className="flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
