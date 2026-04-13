import React, { useEffect } from "react";
import { useState } from "react";
const Cart = () => {
  const [isOpen, setOpen] = useState(true);

  return (
    isOpen && (
      <div className="w-80 h-full max-sm:w-40 absolute fixed bg-[gray] right-0">
        <p className="text-center">Cart</p>
        <span
          className="left-1 top-1 absolute text-l"
          onClick={() => setOpen(!isOpen)}
        >
          X
        </span>
      </div>
    )
  );
};

export default Cart;
