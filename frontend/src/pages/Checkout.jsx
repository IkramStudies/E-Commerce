import React, { useState } from "react";
import api from "../../services/api";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Checkout = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMode, setMode] = useState("");
  const { products, total } = useContext(CartContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let summary = products.map(
      (val) => val.title + " " + "quantity:" + val.quantity,
    );
    try {
      const response = await api.post("/place-order", {
        name,
        number,
        address,
        paymentMode,
        total,
        summary,
      });

      console.log(response.data);

      alert("Order placed successfully");
      setName("");
      setNumber("");
      setAddress("");
      setMode("");
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <div className="flex justify-center pt-10">
      <form onSubmit={handleSubmit}>
        <label className="w-30 inline-block">Enter Name:</label>

        <input
          className="border mt-5 ml-6"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        <label className="inline-block w-30">Phone Number:</label>

        <input
          className="border ml-6 mt-6"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <br />

        <label className="w-31 inline-block">Delivery Address:</label>

        <input
          type="text"
          className="ml-5 border mt-6"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <br />

        <label className="w-32 inline-block">Payment Method:</label>

        <select
          className="border mt-6 ml-5"
          value={paymentMode}
          onChange={(e) => setMode(e.target.value)}
        >
          <option value="">Select Payment Method</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
          <option value="Card">Card</option>
        </select>

        <br />

        <div className="mt-6">
          <label>
            Order Summary:{" "}
            {products.map((val) => (
              <p className="mt-2">qty: {val.quantity}</p>
            ))}
          </label>
        </div>

        <br />

        <label>Total: {total} </label>
        <br />

        <button type="submit" className="mt-6 border p-2 rounded-sm">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
