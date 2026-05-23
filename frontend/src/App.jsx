import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";
import Product from "./pages/Product";
import AuthProvider from "./context/AuthProvider";
import "./App.css";
import CartProvider from "./context/CartProvider";

function App() {
  const location = useLocation();
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <div>
            {location.pathname != "/login" &&
              location.pathname != "/register" &&
              location.pathname != "/verify-email" && <Navbar />}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/verify-email" element={<VerifyEmail />}></Route>
              <Route path="/product/:id/:slug" element={<Product />}></Route>
              <Route></Route>
            </Routes>
          </div>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
