import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [products, setProduct] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    localStorage.removeItem("count");
    const count1 = localStorage.getItem("count");
    if (count1) setCount(parseInt(count1));
  }, []);
  useEffect(() => {
    setTotal(
      products.reduce(
        (acc, currentVal) => acc + currentVal.price * currentVal.quantity,
        0,
      ),
    );
  }, [products]);
  const addProduct = (passedProduct, index) => {
    console.log(passedProduct);
    let exists = products.find((val) => val.id == passedProduct.id);
    if (!exists) {
      const count1 = count + 1;
      setCount(count1);
      localStorage.setItem("count", count1);
      setProduct([...products, { ...passedProduct, quantity: 1 }]);
      console.log(products);
    } else {
      setProduct(
        products.map((val) =>
          val.id === exists.id
            ? { ...val, quantity: exists.quantity + 1 }
            : val,
        ),
      );
    }
  };
  return (
    <CartContext.Provider value={{ addProduct, count, products, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
