import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const result = await res.json();
      setData(result);
    };
    getData();
  }, []);

  const product = data.find((item) => item.id == id);
  console.log(product);
  return (
    <div className="flex flex-col pt-10">
      {product ? (
        <>
          <p className="text-xl">{product.title}</p>
          <img
            src={product.images}
            height={300}
            width={300}
            alt=""
            className="mt-10 rounded-sm max-sm:h-[200px] max-sm:w-[200px]"
          />
          <button className="border w-[90px] mt-4">Add to cart</button>
          <button className="border w-[90px] mt-4">Buy Now</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Product;
