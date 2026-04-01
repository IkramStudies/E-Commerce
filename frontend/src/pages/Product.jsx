import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const Product = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const val1 = location.state.val;
  console.log(val1);
  useEffect(() => {
    const getData = async () => {
      const data = await fetch("https://api.escuelajs.co/api/v1/products");
      const response = await data.json();
      setData(response);
    };
    getData();
  }, []);
  return (
    <div className="flex mt-10">
      {data.map(
        (val) =>
          val.id == val1.id && (
            <>
              <p>{val.title}</p>
              <img src={val.images} height={400} width={400} alt="" />
              <p>{val.description}</p>
            </>
          ),
      )}
    </div>
  );
};

export default Product;
