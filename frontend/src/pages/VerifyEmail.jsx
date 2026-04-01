import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [message, setMessage] = useState(
    "User has registered, kindly enter the OTP shared on your email.",
  );
  const [otp, setOTP] = useState("");
  const [isRegistered, setRegistered] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(email);
  useEffect(() => {
    const isVerified = localStorage.getItem("isVerified") === "true";
    if (isVerified) {
      setRegistered(true);
      return;
    }
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
    } else if (location.state?.email) {
      const newEmail = location.state.email;
      setEmail(newEmail);
      localStorage.setItem("email", newEmail);
    }
    setTimeout(() => {
      setMessage("");
    }, 8000);
  }, []);

  const sendData = async (e) => {
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

    setMessage(response.message);
    setOTP("");

    if (response.status) {
      localStorage.removeItem("email");
      localStorage.setItem("isVerified", "true");
      setRegistered(true);
      setEmail("");
    }
  };

  const goToLogin = () => {
    localStorage.removeItem("isVerified");
  };
  return (
    <div>
      {isRegistered ? (
        <div className="flex flex-col items-center justify-center h-[40vh]">
          <p className="mb-6">Email Verified successfully!</p>
          <span>
            Go to
            <NavLink to="/login" onClick={goToLogin}>
              <button className="border ml-2 pr-2 pl-2 rounded-sm">
                Login Page
              </button>
            </NavLink>
          </span>
        </div>
      ) : !email ? (
        <div className="flex justify-center h-[50vh] items-center">
          <div>
            <p className="text-lg">
              Go to register page first and enter the details
            </p>
            <br />
            <NavLink to="/register">
              <button className="text-lg border pr-2 pl-2 rounded-sm">
                Register Page
              </button>
            </NavLink>
          </div>
        </div>
      ) : (
        <>
          <p className="text-center mt-10">{message}</p>

          <p className="text-center pt-10">OTP has been sent to your email</p>

          <div className="form flex justify-center h-[30vh] items-center">
            <form onSubmit={sendData}>
              <label>Enter your OTP below</label>
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

              <br />

              <NavLink to="/register">
                <button className="border mt-10 ml-2 pl-2 pr-2 rounded-sm">
                  Back to register page
                </button>
              </NavLink>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default VerifyEmail;
