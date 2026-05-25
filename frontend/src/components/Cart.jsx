import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Cart = () => {
  const [isOpen, setOpen] = useState(true);
  const { products, total } = useContext(CartContext);

  return (
    isOpen && (
      <div className="w-80 h-full max-sm:w-40 absolute fixed bg-[gray] right-0 ">
        <div className="text-center">
          <p className="text-center mt-6">Total: </p>
          <button className="border mt-4 rounded-sm p-2 text-sm">
            Proceed to Checkout
          </button>
        </div>
        <span
          className="left-1 top-1 absolute text-l cursor-default"
          onClick={() => setOpen(!isOpen)}
        >
          X
        </span>
        <div className="products flex flex-col gap-10 mt-4 items-center h-[70vh] mb-20">
          {products.map((val) => (
            <>
              <span>{val.title}</span>
              <img src={val.images} className="h-40 w-40" alt="" />
              <div className="flex gap-10">
                <span>Quantity: {total}</span>
                <input
                  type="number"
                  className="border w-10 "
                  min={1}
                  max={100}
                  value={val.quantity}
                  onChange={(e) => e.target.value}
                />
              </div>
              <span>Price: {val.price}</span>
            </>
          ))}
        </div>
      </div>
    )
  );
};

export default Cart;
