import React, { useState } from "react";
import "./App.css";

import Hero from "./components/Hero";
import Features from "./components/Features";
import Tours from "./components/Tours";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { ChatWidget } from '@swayam29082004/chat-sdk';
import '@swayam29082004/chat-sdk/dist/style.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="App">
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Features />
      <div style={{ height: '600px', width: '400px' }}>
        <section className="chat-section">
          <h2>Talk to Our Travel Assistant</h2>
          <div
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              height: "600px",
              width: "400px",
              zIndex: 1000,
            }}
          >
            <ChatWidget
              agentId="68d329e7b13080decd6824d5"
              apiUrl="http://localhost:3000/api/rag-query"
            />
          </div>
        </section>

      </div>
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;