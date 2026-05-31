import React from "react";
import { useState } from "react";
const SearchBar = ({ handleChange, value }) => {
  console.log(value);
  return (
    <div className="flex justify-center pt-6">
      <input
        type="search"
        className="border"
        placeholder="Search Product"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default SearchBar;
