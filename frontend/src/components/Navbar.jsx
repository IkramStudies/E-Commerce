import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import icon from "../assets/navbar.png";
const Navbar = () => {
  const [isOpen, setOpen] = useState(true);
  return (
    <div>
      <nav>
        <ul
          className={isOpen ? "flex gap-14 justify-center " : "hidden gap-10"}
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
