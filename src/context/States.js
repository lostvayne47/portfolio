import React, { useState } from "react";
import portfolioContext from "./Context.js";

export default function States(props) {
  const [defaultState, setDefaultState] = useState(false);

  return (
    <div>
      <portfolioContext.Provider value={{ defaultState, setDefaultState }}>
        {props.children}
      </portfolioContext.Provider>
    </div>
  );
}
