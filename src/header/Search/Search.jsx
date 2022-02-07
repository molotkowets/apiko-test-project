import React from "react";
import "./search.css";
import Input from "../../authorization/input/Input";

function Search() {
  return (
    <div className="search">
      <Input value={"Search products by name"} />
      <Input value={"Location"} />
      <button className="searchButt">Search</button>
    </div>
  );
}
export default Search;
