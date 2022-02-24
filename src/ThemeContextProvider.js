import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
export const Context = () => useContext(ThemeContext);

function ThemeContextProvider({ children }) {
const [toggle, setToggle] = useState(false);

function toggleFunc(){
    setToggle(!toggle)
}

  return (
    <ThemeContext.Provider value={{toggle,toggleFunc}}>{children}</ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
