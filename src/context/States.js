import React, { useState } from "react";
import portfolioContext from "./Context.js";
import { useEffect } from "react";
import getData from "../api/github.js";

export default function States(props) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [githubData, setGithubData] = useState([]);

  const fetchGithub = async () => {
    console.log("Fetching GitHub Data...");
    const data = await getData();
    console.log("Received Data");
    setGithubData(data);
  };

  useEffect(() => {
    //CALL GITHUB API AND INITIALISE OBJECT
    fetchGithub();
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
