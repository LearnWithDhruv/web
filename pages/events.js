import { Footer, Navbar } from "@/components";
import React from "react";
import Events from "@/components/Events";

const Home = () => {
  return (
    <div className="h-full main_bg text-white overflow-hidden" id="top">
      <Navbar />
      <Events />
      <Footer />
    </div>
  );
};

export default Home;
