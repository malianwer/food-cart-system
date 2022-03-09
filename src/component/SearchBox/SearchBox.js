import React from "react";
import "./searchbox.css";

const SearchBox = ({ placeholder, handleChange, value }) => {
  return (
    <div>
      <input
        className="search-box"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
