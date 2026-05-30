import React from "react";

const Checkout = () => {
  return (
    <div className="flex justify-center mt-10">
      <form action="">
        <label htmlFor="" className="w-30 inline-block">
          Enter Name:
        </label>
        <input className="border mt-5 ml-6" />
        <br />
        <label htmlFor="" className="inline-block w-30">
          Phone Number:
        </label>
        <input className="border ml-6 mt-6" />
        <br />
        <label htmlFor="" className="w-31 inline-block">
          Delivery Address:
        </label>
        <input type="text" className="ml-5 border mt-6" />
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
