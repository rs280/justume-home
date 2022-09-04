// import components
import React, { useEffect } from "react";
import Hero from "./components/Hero";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  // aos init
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });
  return (
    <div>
      <Hero />
    </div>
  );
};

export default App;
