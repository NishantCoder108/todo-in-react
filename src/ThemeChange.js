import React from "react";
import "./ThemeChange.css";
import { Context } from "./ThemeContextProvider";

function ThemeChange() {
  const {toggle,toggleFunc} = Context();

 
  return (
    <div className="themechange">
     <p> <button onClick={toggleFunc}>ThemeChange </button></p>
    </div>
  );
}

export default ThemeChange;
