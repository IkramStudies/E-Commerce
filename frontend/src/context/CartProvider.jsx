import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const count1 = localStorage.getItem("count");
    if (count1) setCount(parseInt(count1));
  }, []);
  const addProduct = (passedProduct) => {
    const count1 = count + 1;
    setCount(count1);
    localStorage.setItem("count", count1);
    setProduct(passedProduct);
  };
  return (
    <CartContext.Provider value={{ addProduct, count }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
