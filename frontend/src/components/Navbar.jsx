import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ loggedIn }) => {
  const [isOpen, setOpen] = useState(false);
  console.log(loggedIn);
  return (
    <div>
      <nav>
        <ul className="flex gap-14 justify-center max-md:hidden">
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
            {loggedIn ? (
              <button className="bg-[gray] w-16 rounded-sm max-md:text-sm">
                <NavLink to="/login">Log Out</NavLink>
              </button>
            ) : (
              <button>
                <NavLink
                  to="/login"
                  className="bg-[gray] w-16 rounded-sm max-md:text-sm"
                >
                  Log In
                </NavLink>
              </button>
            )}
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
              className="max-sm:text-black"
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
            {loggedIn ? (
              <button className="bg-[gray] w-14 rounded-sm max-md:text-sm">
                <NavLink to="/login">Log Out</NavLink>
              </button>
            ) : (
              <button>
                <NavLink
                  to="/login"
                  className="bg-[gray] w-14 rounded-sm max-md:text-sm"
                >
                  Log In
                </NavLink>
              </button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
