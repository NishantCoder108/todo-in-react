import "./App.css";
import { useState } from "react";
import Todo from "./Todo";
import ThemeChange from "./ThemeChange";
import { Context } from "./ThemeContextProvider";
function App() {

  const{toggle} =Context()
  return (
    <div  style={{ backgroundColor: toggle? 'rgb(182, 228, 255)' :'black',height:'99vh',color:toggle?'#00615e': "white"}}>

      <Todo />
      <ThemeChange />
    </div>
  );
}

export default App;
//material ui core
//material ui icons
