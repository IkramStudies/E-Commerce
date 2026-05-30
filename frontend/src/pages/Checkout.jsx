import React from "react";

const Checkout = () => {
  return (
    <div className="flex justify-center mt-10">
      <form action="">
        <label htmlFor="">Delivery Address:</label>
        <input type="text" className="ml-6 border" />
        <br />
        <label htmlFor="">Payment Method:</label>
        <select name="" id="" className="border mt-6 ml-6">
          <option value="">Cash on Delivery</option>
          <option value="">Card</option>
        </select>
        <br />
        <label htmlFor="" className="">
          Order Summary:
        </label>
        <br />
        <label htmlFor="">Total: </label>
      </form>
    </div>
  );
};

export default Checkout;
