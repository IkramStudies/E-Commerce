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
    <div className="flex flex-col pt-10 lg:ml-30 max-sm:ml-10 relative">
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
          <div className="border lg:pl-20 lg:pr-2 rounded-sm lg:absolute lg:left-100 lg:top-27 max-sm:pl-4 max-sm:mt-2">
            <p className="w-200 pt-10 pb-6 pr-10 max-sm:w-80">
              {product.description}
            </p>
          </div>
          <p className="pt-2">Price: {product.price}</p>
          <div className="flex gap-10 ">
            <button className="border w-[90px] mt-4 rounded-sm">
              Add to cart
            </button>
            <button className="border w-[90px] mt-4 rounded-sm">Buy Now</button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Product;
