import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem("count");
    return storedCount ? parseInt(storedCount) : 0;
  });
  const [products, setProduct] = useState(() => {
    const product = localStorage.getItem("products");
    return product ? JSON.parse(product) : [];
  });
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);
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
  const deleteProduct = (product) => {
    setProduct(products.filter((val) => val.id != product.id));
    setCount(count - 1);
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
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
