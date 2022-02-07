import React from "react";
import { Heart } from "./Heart";
import "./menu.css";

function Menu(params) {
  const white = {
    color: params.style,
  };
  return (
    <div className="menu">
      <button>sell</button>
      <button style={white} className="loginButton">
        login
      </button>
      <Heart color={params.style} className="heart" />
    </div>
  );
}
export default Menu;
