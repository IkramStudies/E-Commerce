import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <nav>
        <ul className="flex gap-14 justify-center max-md:hidden ">
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
          <li className="absolute min-md:right-4 max-sm:static">
            <button className="bg-[gray] w-16 rounded-sm">
              <NavLink to="/login">Log in</NavLink>
            </button>
          </li>
          <li className="absolute min-md:right-30 max-sm:static">
            <FontAwesomeIcon icon={faShoppingCart} />
          </li>
        </ul>
        <ul
          className={`min-sm:hidden flex gap-4 flex-col absolute ${isOpen ? "menu-nav bg-gray-400 h-full w-40 " : "[&>li:not(:first-child)]:hidden"}`}
        >
          <li>
            <FontAwesomeIcon
              icon={faBars}
              className="max-sm:text-white"
              onClick={() => setOpen(!isOpen)}
            />
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about"> About </NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </NavLink>
          </li>
          <li>
            <button className="bg-[gray] w-14 rounded-sm max-md:text-sm">
              <NavLink to="/login">Log In</NavLink>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
