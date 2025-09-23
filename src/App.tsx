import React, { useState } from "react";
import "./App.css";

import Hero from "./components/Hero";
import Features from "./components/Features";
import Tours from "./components/Tours";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="App">
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Features />
      <Tours
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;