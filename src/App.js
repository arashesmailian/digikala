import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import ProductSingle from "./pages/ProductSingle/ProductSingle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:productId" element={<ProductSingle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
