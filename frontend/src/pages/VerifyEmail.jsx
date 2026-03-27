import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
const VerifyEmail = () => {
  const [message, setMessage] = useState(
    "User has registered, kindly enter the OTP shared on your email.",
  );
  const [otp, setOTP] = useState("");
  const [isRegistered, setRegistered] = useState(false);
  const location = useLocation();
  const email = location.state.email;
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 8000);
  }, []);
  const sendData = async (e) => {
    setOTP(otp);
    e.preventDefault();
    const payload = { email, otp };
    const data = await fetch("http://localhost:3000/verify-email", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const response = await data.json();
    console.log(response.status);
    console.log(response.message);
    setRegistered(response.status);
    setMessage(response.message);
    setTimeout(() => {
      setMessage("");
    }, 6000);
    if (isRegistered) {
      setOTP("");
    }
  };
  return (
    <div>
      <p className="text-center mt-10">{message}</p>
      {!isRegistered && (
        <p className="text-center pt-10">OTP has been sent to your email</p>
      )}
      <div className="form flex justify-center h-[30vh] items-center">
        <form action="" onSubmit={sendData}>
          <label htmlFor="">Enter your OTP below</label>
          <br />
          <input
            type="text"
            className="border mt-2 pl-2 pr-2 rounded-sm"
            placeholder="Enter OTP"
            onChange={(e) => setOTP(e.target.value)}
            value={otp}
          />
          <input
            type="submit"
            className="border ml-2 mt-2 rounded-sm pl-2 pr-2"
          />
          <br></br>
          {!isRegistered ? (
            <NavLink to="/register">
              <button className="border mt-10 ml-2 pl-2 pr-2 rounded-sm">
                Back to register page
              </button>
            </NavLink>
          ) : (
            <>
              <NavLink to="/login">
                <button className="border mt-10 ml-2 pl-2 pr-2 rounded-sm">
                  Go to login Page
                </button>
              </NavLink>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
