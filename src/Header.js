import React from "react";
import "./Header.css";
import {search} from "./Group 14862.png"

const Header = () => {
  return (
    <div className="header">
      <h3>Welcome back, Pramod!</h3>
      <img src={search} alt="" width="100%" height="100%" />
    </div>
  );
};

export default Header; 