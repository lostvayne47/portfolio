import React, { useContext } from "react";
import ProjectItem from "./ProjectItem.js";
import InfiniteScroll from "react-infinite-scroll-component";
import portfolioContext from "../context/Context.js";

export default function Projects() {
  const { githubData } = useContext(portfolioContext);
  return (
    <>
      <div
        className="container d-flex flex-column justify-content-center my-5"
        style={{ height: "100%" }}
      >
        <h1 className="text-center" style={{ marginTop: "10px" }}>
          GitHub Projects
        </h1>
        <div
          style={{
            maxHeight: "85%",
            overflowY: "auto",
            padding: "15px",
          }}
        >
          {githubData.length === 0 ? (
            <h1>NO PROJECTS YET</h1>
          ) : (
            <InfiniteScroll
              dataLength={githubData.length} //This is important field to render the next data
            >
              <div className="container ">
                <div className="row gap-4 justify-content-center">
                  {githubData.map((data) => {
                    return <ProjectItem key={data.id} data={data} />;
                  })}
                </div>
              </div>
            </InfiniteScroll>
          )}
        </div>
      </div>
    </>
  );
}
