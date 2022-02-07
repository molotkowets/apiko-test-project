import React from "react";
import "./header.css";
import Menu from "./menu/Menu";
import Search from "./Search/Search";
import { LogoFull } from "./LogoFull";
function Header(params) {
  return (
    <div style={params.background} className="headerContainer">
      <div className="header">
        <LogoFull color={params.bgColor} />
        <Menu style={params.bgColor} />
      </div>

      {params.search ? <Search /> : ""}
    </div>
  );
}

export default Header;
