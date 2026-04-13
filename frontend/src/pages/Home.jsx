import React from "react";
import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
const Home = ({ setCount, count }) => {
  return (
    <div>
      <Hero />
      <Products setCount={setCount} count={count} />
    </div>
  );
};

export default Home;
