import React from "react";
import Home from "./pages/homepage/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css"
import Gallery from "./pages/gallery/Gallery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Gallery" element={<Gallery/>}/>
    </Routes>
  );
}

export default App;
