import React from "react";
import ProjectItem from "./ProjectItem.js";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Projects() {
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
          <InfiniteScroll
            dataLength={10} //This is important field to render the next data
            next={() => {}}
            hasMore={false}
            loader={<h4>Loading...</h4>}
          >
            <div className="container">
              <div className="row gap-3 justify-content-center">
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
}
