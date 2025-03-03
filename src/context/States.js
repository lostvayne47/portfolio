import React, { useState } from "react";
import portfolioContext from "./Context.js";

export default function States(props) {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <portfolioContext.Provider value={{ theme, setTheme }}>
        {props.children}
      </portfolioContext.Provider>
    </>
  );
}
