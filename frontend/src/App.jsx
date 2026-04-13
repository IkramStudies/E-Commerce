import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";
import Product from "./pages/Product";
import "./App.css";

function App() {
  const location = useLocation();
  const [loggedIn, setloggedIn] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const loggedIn1 = localStorage.getItem("loggedIn") === "true";
    if (loggedIn1) setloggedIn(true);
    const count1 = localStorage.getItem("count");
    if (count1) {
      setCount(parseInt(count1));
    }
  }, []);
  return (
    <>
      <div>
        {location.pathname != "/login" &&
          location.pathname != "/register" &&
          location.pathname != "/verify-email" && (
            <Navbar loggedIn={loggedIn} count={count} />
          )}
        <Routes>
          <Route
            path="/"
            element={<Home count={count} setCount={setCount} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setloggedIn={setloggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-email" element={<VerifyEmail />}></Route>
          <Route path="/product/:id/:slug" element={<Product />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
