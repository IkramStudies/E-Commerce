import React from "react";
import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import CartProvider from "../context/CartProvider";
const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
    </div>
  );
};

export default Home;
