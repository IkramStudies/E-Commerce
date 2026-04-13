import React from "react";
import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const logged = localStorage.getItem("loggedIn") === "true";
    if (logged) setLoggedIn(true);
  }, []);
  const login = () => {
    setLoggedIn(true);
    localStorage.setItem("loggedIn", true);
  };
  const logout = () => {
    setLoggedIn(false);
    localStorage.setItem("loggedIn", false);
  };
  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
