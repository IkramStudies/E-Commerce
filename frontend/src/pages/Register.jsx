import React from "react";
import { useState } from "react";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setPassword1] = useState("");
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
      setName("");
      setEmail("");
      setPassword("");
      setPassword1("");
    } catch (error) {
      console.log("Error sending data:", error);
    }
  };
  return (
    <div>
      <p className="text-center pt-10">Register Page</p>
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
          <input
            type="password"
            placeholder="Enter your password"
            className="border mt-1"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required={true}
          />
          <br />
          <label htmlFor="">Confirm your password</label>
          <br />
          <input
            type="password"
            placeholder="Confirm your password"
            className="border mt-1"
            onChange={(e) => setPassword1(e.target.value)}
            value={confirmPassword}
            required={true}
          />
          <br />
          <button className="border mt-2" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
