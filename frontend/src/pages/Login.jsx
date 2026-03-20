import React from "react";

const Login = () => {
  return (
    <div className="">
      <h1 className="text-center">Login Page</h1>
      <div className="form flex justify-center h-[80vh] items-center">
        <form action="">
          <label htmlFor="">Enter Email</label>
          <input
            type="text"
            className="border"
            placeholder="Enter your email"
          />
          <br></br>
          <label htmlFor="">Enter your Password</label>
          <input
            type="text"
            className="border"
            placeholder="Enter your password"
          />
          <br></br>
          <button className="border pr-2 pl-2 rounded-sm">Sign In</button>
          <button className="border pr-2 pl-2 rounded-sm">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
