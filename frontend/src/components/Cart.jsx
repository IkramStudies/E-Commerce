import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const [isOpen, setOpen] = useState(true);
  const { products, total, increaseQuantity, decreaseQuantity, deleteProduct } =
    useContext(CartContext);
  return (
    isOpen && (
      <div className="w-80 h-full max-sm:w-40 absolute fixed bg-[gray] max-md:top-0 right-0 ">
        <div className="text-center">
          {total > 0 ? (
            <>
              <p className="text-center mt-6 text-black">Total: {total} </p>
              <button className="border mt-4 rounded-sm p-2 text-sm">
                Proceed to Checkout
              </button>
            </>
          ) : (
            <p className="text-center mt-6 text-black">No, items</p>
          )}
        </div>
        <span
          className="left-1 top-1 absolute text-l cursor-default "
          onClick={() => setOpen(!isOpen)}
        >
          X
        </span>
        <div className="products flex flex-col gap-10 mt-4 items-center h-[70vh] mb-20">
          {products.map((val) => (
            <>
              <span>{val.title}</span>
              <img src={val.images} className="h-40 w-40" alt="" />
              <div className="flex gap-10 ">
                {val.quantity > 1 ? (
                  <button
                    className="rounded-lg border border-black-300 text-[24px] h-[30px] w-[30px] text-center w-[16px] "
                    onClick={() => decreaseQuantity(val)}
                  >
                    -
                  </button>
                ) : (
                  <MdDelete
                    className="mt-2 text-[20px]"
                    onClick={() => deleteProduct(val)}
                  />
                )}
                <span className="mt-1"> {val.quantity}</span>
                <button
                  className="rounded-lg border border-black-300 text-[24px] h-[30px] w-[30px] text-center w-[16px] "
                  onClick={() => increaseQuantity(val)}
                >
                  +
                </button>
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
