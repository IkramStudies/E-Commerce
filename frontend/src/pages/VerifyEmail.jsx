import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const VerifyEmail = () => {
  const [message, setMessage] = useState(
    "User has registered, kindly verify your email.",
  );
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 5200);
  }, []);
  return (
    <div>
      <p className="text-center mt-10">{message}</p>
      <p className="text-center pt-10">OTP has been sent to your email</p>
      <div className="form flex justify-center h-[30vh] items-center">
        <form action="">
          <label htmlFor="">Enter your OTP below</label>
          <br />
          <input
            type="text"
            className="border mt-2 pl-2 pr-2 rounded-sm"
            placeholder="Enter OTP"
          />
          <input
            type="submit"
            className="border ml-2 mt-2 rounded-sm pl-2 pr-2"
          />
          <br></br>
          <NavLink to="/register">
            <button className="border mt-10 ml-2 pl-2 pr-2 rounded-sm">
              Back to register page
            </button>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
