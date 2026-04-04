import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const [data, setData] = useState([]);
  const [currentPage, setPage] = useState(1);
  const itemsPerPage = 2;
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
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentData = data.slice(start, end);
  return (
    <>
      <p className="text-center pt-10 pb-10">Products</p>
      <div className="flex gap-10 flex-row flex-wrap lg:ml-40 ml-16">
        {currentData?.map((val) =>
          val.id != 7 ? (
            <div
              className="products border p-6 w-60 rounded-sm w-[260px] cursor-pointer"
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
      <div className="pagination flex mt-10 justify-center gap-10">
        <button onClick={() => setPage((prev) => prev - 1)}>Prev</button>
        <button onClick={() => setPage(1)}>1</button>
        <button onClick={() => setPage(2)}>2</button>
        <button onClick={() => setPage(3)}>3</button>
        <button onClick={() => setPage(4)}>4</button>
        <button onClick={() => setPage(5)}>5</button>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </>
  );
};

export default Products;
