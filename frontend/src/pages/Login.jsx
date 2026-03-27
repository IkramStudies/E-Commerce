import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye } from "lucide-react";
const Login = ({ setloggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    try {
      const payload = { email, password };
      const data = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "content-type": "application/JSON",
        },
        body: JSON.stringify(payload),
      });
      const response = await data.json();
      console.log(response.message);
      setloggedIn(response.status);
      if (response.status) {
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="">
      <h1 className="text-center absolute top-[18%] left-[46%] max-sm:left-[40%]">
        Login Page
      </h1>
      <div className="form flex justify-center h-[80vh] items-center">
        <form action="" onSubmit={login}>
          <label htmlFor="">Enter Email</label>
          <br></br>
          <input
            type="text"
            className="border mt-1"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br></br>
          <label htmlFor="">Enter your Password</label>
          <br />
          <div className="relative">
            <input
              type={isOpen ? "text" : "password"}
              className="border mt-1"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Eye
              className="absolute top-[4px] right-[6px]"
              onClick={() => setOpen(!isOpen)}
            />
          </div>
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
