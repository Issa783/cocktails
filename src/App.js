import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import About from "./pages/about";
import Home from "./pages/home";
import Singlecocktail from "./pages/singlecocktail";
import Error from "./pages/error";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<Singlecocktail />} /> {/* Fix the route path */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
