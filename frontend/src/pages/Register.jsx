import React from "react";
import { useState } from "react";
import { data, NavLink, useNavigate } from "react-router-dom";
import { Eye } from "lucide-react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setPassword1] = useState("");
  const [message, setMessage] = useState("");
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { name, email, password, confirmPassword };
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      console.log("Data sent to backend", data);
      console.log("Data Status:", data.status);
      console.log("Data Message:", data.message);
      if (data.message) {
        setMessage(data.message);
      }
      if (data.status) {
        navigate("/verify-email");
      } else {
        setMessage(data.message);
      }
      setTimeout(() => {
        setMessage("");
      }, 4000);
    } catch (error) {
      console.log("Error sending data:", error);
      setRegistered(data.status);
      // setError(data.message);
      console.log(error);
    }
  };
  return (
    <div>
      <p className="text-center pb-5 pt-4">Register Page</p>
      <div className="form flex justify-center h-[40vh] max-sm:h-[40vh] items-center">
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Enter your name</label>
          <br />
          <input
            type="text"
            placeholder="Enter your name"
            className="border mt-1"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required={true}
          />
          <br />
          <label htmlFor="">Enter your email</label>
          <br />
          <input
            type="text"
            placeholder="Enter your email"
            className="border mt-1"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required={true}
          />
          <br />
          <label htmlFor="">Enter your password</label>
          <br />
          <div className="relative">
            <input
              type={isOpen ? "text" : "password"}
              placeholder="Enter your password"
              className="border mt-1 w-[210px]"
              onChange={(e) => setPassword1(e.target.value)}
              value={confirmPassword}
              required={true}
            />
            <Eye
              className="absolute top-[4px] right-[6px] "
              onClick={() => setOpen(!isOpen)}
            />
          </div>
          <label htmlFor="">Confirm your password</label>
          <br />
          <div className="relative">
            <input
              type={isOpen ? "text" : "password"}
              placeholder="Confirm your password"
              className="border mt-1 w-[210px]"
              onChange={(e) => setPassword1(e.target.value)}
              value={confirmPassword}
              required={true}
            />
            <Eye
              className="absolute top-[4px] right-[6px] "
              onClick={() => setOpen(!isOpen)}
            />
          </div>
          <br />
          <button className="border mt-2 pl-2 pr-2 rounded-sm" type="submit">
            Register
          </button>
          <NavLink to="/login">
            <button className="border ml-2 pl-2 pr-2 rounded-sm">Back</button>
          </NavLink>
          <br />
          <div className="mt-6  ">
            <p className="text-gray absolute w-[240px]">{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
