import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [products, setProduct] = useState([]);
  useEffect(() => {
    localStorage.removeItem("count");
    // localStorage.removeItem("products");
    const count1 = localStorage.getItem("count");
    if (count1) setCount(parseInt(count1));
    const products1 = JSON.parse(localStorage.getItem("products"));
    if (products1) setProduct(products1);
    console.log(products1);
  }, []);
  const total = products.reduce(
    (acc, currentVal) => acc + currentVal.price * currentVal.quantity,
    0,
  );
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
            ? { ...exists, quantity: exists.quantity + 1 }
            : val,
        ),
      );
      localStorage.setItem("products", JSON.stringify(products));
    }
  };
  const increaseQuantity = (passedProduct) => {
    const element = products.find((val) => val.id === passedProduct.id);
    setProduct(
      products.map((val) =>
        val.id === element.id
          ? { ...element, quantity: element.quantity + 1 }
          : val,
      ),
    );
  };
  const decreaseQuantity = (passedProduct) => {
    let element = products.find((val) => val.id === passedProduct.id);
    setProduct(
      products.map((val) =>
        val.id === element.id
          ? { ...element, quantity: element.quantity - 1 }
          : val,
      ),
    );
  };
  return (
    <CartContext.Provider
      value={{
        addProduct,
        count,
        products,
        total,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
