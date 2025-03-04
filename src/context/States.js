import React, { useState } from "react";
import portfolioContext from "./Context.js";
import { useEffect } from "react";
import getData from "../api/github.js";

export default function States(props) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [githubData, setGithubData] = useState([]);

  useEffect(() => {
    //CALL GITHUB API AND INITIALISE OBJECT
    setGithubData(getData());
  }, []);

  return (
    <>
      <portfolioContext.Provider
        value={{ theme, setTheme, githubData, setGithubData }}
      >
        {props.children}
      </portfolioContext.Provider>
    </>
  );
}
