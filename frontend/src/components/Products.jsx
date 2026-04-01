import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      setData(data);
      console.log(data);
    }
    getData();
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <p className="text-center pt-10 pb-10">Products</p>
      <div className="flex gap-10 flex-row flex-wrap lg:ml-40 ml-16">
        {data?.map((val) =>
          val.id != 18 ? (
            <div
              className="products border p-6 w-60 rounded-sm w-[260px]"
              onClick={() => {
                navigate(`/product/${val.id}/${val.slug}`, {
                  state: { val },
                });
              }}
            >
              <p>{val.title}</p>
              <img
                src={val.images}
                height={200}
                width={280}
                className="pt-3 pb-3"
                alt=""
              />
              <button className="mr-10 border pl-1 pr-1 text-sm rounded-sm">
                Buy Now
              </button>
              <button className="border text-sm pl-1 pr-1 rounded-sm">
                Add to Cart
              </button>
            </div>
          ) : null,
        )}
      </div>
    </>
  );
};

export default Products;
