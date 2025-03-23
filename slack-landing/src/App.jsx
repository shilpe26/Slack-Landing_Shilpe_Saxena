import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import React from "react";
import NotificationBanner from "./components/NotificationBanner";

function App() {
  return (
    <div className="bg-[#F7EFE8]">
      <Navbar />
      <NotificationBanner />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
