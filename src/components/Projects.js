import React, { useContext, useState } from "react";
import ProjectItem from "./ProjectItem.js";
import InfiniteScroll from "react-infinite-scroll-component";
import portfolioContext from "../context/Context.js";
import { Loader, RefreshCcw } from "lucide-react";

export default function Projects() {
  const { githubData, loading } = useContext(portfolioContext);
  const [retryKey, setRetryKey] = useState(0); // 🔄 Changing key forces re-render

  const handleRetry = () => {
    if (retryKey) {
      console.log("Retrying");
    }
    setRetryKey((prev) => prev + 1); // 🔄 Increment key to re-render component
  };

  if (loading) return <Loader />;
  return (
    <>
      <div
        className="container d-flex flex-column justify-content-center my-5"
        style={{ height: "100%" }}
      >
        <h1 className="text-center">Feel free to explore my work!</h1>
        <div
          className="container custom-scrollbar "
          style={{
            maxHeight: "85%",
            overflowY: "auto",
            padding: "15px",
          }}
        >
          {githubData.length === 0 ? (
            <>
              <h2 className="text-center">NO PROJECTS YET</h2>
              <h3 className="text-center" onClick={handleRetry}>
                <RefreshCcw />
              </h3>
            </>
          ) : (
            <InfiniteScroll
              dataLength={githubData.length} //This is important field to render the next data
            >
              <div className="container overflow-hidden">
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
