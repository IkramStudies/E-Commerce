import React from "react";
import { useState } from "react";
const Checkout = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMode, setMode] = useState("");
  const [total, setTotal] = useState("");
  return (
    <div className="flex justify-center pt-10">
      <form action="">
        <label htmlFor="" className="w-30 inline-block">
          Enter Name:
        </label>
        <input
          className="border mt-5 ml-6"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="" className="inline-block w-30">
          Phone Number:
        </label>
        <input
          className="border ml-6 mt-6"
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <label htmlFor="" className="w-31 inline-block">
          Delivery Address:
        </label>
        <input
          type="text"
          className="ml-5 border mt-6"
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <label htmlFor="" className="w-32 inline-block">
          Payment Method:
        </label>
        <select name="" id="" className="border mt-6 ml-5">
          <option value="">Cash on Delivery</option>
          <option value="">Card</option>
        </select>
        <br />
        <div className="mt-6">
          <label htmlFor="" className="">
            Order Summary:
          </label>
        </div>
        <br />
        <label htmlFor="">Total: </label>
      </form>
    </div>
  );
};

export default Checkout;
