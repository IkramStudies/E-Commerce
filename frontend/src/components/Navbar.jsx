import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Cart from "./Cart";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
const Navbar = () => {
  const { loggedIn, login, logout } = useContext(AuthContext);
  const { count } = useContext(CartContext);
  const [cart, setCart] = useState(false);
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <nav>
        <ul
          className={`flex md:gap-14 md:justify-center max-sm:fixed 
           ${isOpen ? "w-40 h-full flex-col bg-gray-400 max-sm:gap-8 " : "max-sm:[&>li:not(:first-child)]:hidden"}
               `}
        >
          <li className="md:hidden">
            <FontAwesomeIcon
              icon={faBars}
              className="max-sm:text-gray-500 "
              onClick={() => setOpen(!isOpen)}
            />
          </li>
          <li>
            <NavLink to="/" onClick={() => setOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" onClick={() => setOpen(false)}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" onClick={() => setOpen(false)}>
              Orders
            </NavLink>
          </li>
          <li className="absolute min-md:right-4 max-sm:static">
            {loggedIn ? (
              <button className="border pl-2 pr-2 w-20 rounded-sm max-md:text-sm">
                <NavLink to="/login" onClick={logout}>
                  Log Out
                </NavLink>
              </button>
            ) : (
              <button onClick={login}>
                <NavLink
                  to="/login"
                  className="border pl-2 pr-2 w-16 rounded-sm max-md:text-sm"
                  onClick={() => setOpen(false)}
                >
                  Log In
                </NavLink>
              </button>
            )}
          </li>
          <li className="absolute min-md:right-30 max-sm:static">
            <FontAwesomeIcon
              icon={faShoppingCart}
              onClick={() => setCart(!cart)}
            />
            {count != 0 && <span>{count}</span>}
            {cart && <Cart />}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
