import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  return (
    <div className="">
      <h1 className="text-center">Login Page</h1>
      <div className="form flex justify-center h-[80vh] items-center">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="">Enter Email</label>
          <br></br>
          <input
            type="text"
            className="border mt-1"
            placeholder="Enter your email"
          />
          <br></br>
          <label htmlFor="">Enter your Password</label>
          <br />
          <input
            type="text"
            className="border mt-1"
            placeholder="Enter your password"
          />
          <br></br>
          <button className="border pr-2 pl-2 rounded-sm mt-4 mr-4">
            Sign In
          </button>
          <button
            className="border rounded-sm pr-2 pl-2"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
