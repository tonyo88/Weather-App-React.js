import "./SearchBar.css";
import React from "react";

const SearchBar = (props) => {
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={props.searchEvent}
        value={props.value}
        onKeyPress={props.search}
      />
    </div>
  );
};

export default SearchBar;
