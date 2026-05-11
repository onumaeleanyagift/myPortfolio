import React, { useEffect, useState } from "react";

const PullRequest = () => {
  const [prs, setPrs] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/search/issues?q=type:pr+author:onumaeleanyagift",
    )
      .then((res) => res.json())
      .then((data) => setPrs(data.items || []));
  }, []);

  return (
    <div id="pullRequest" className="bg-[#121212] py-20">
      <div className="container mx-auto px-4">
        <div className="pb-12">
          <h2 className="font-bold text-4xl mb-2">Recent Pull Requests</h2>
          <div className="w-20 h-1 bg-[#2DD4BF] mx-auto"></div>
        </div>
        <div className="grid grid-cols gap-6 text-justify lg:grid-cols-3 lg:text-justify md:text-center">
          {prs.map((pr) => (
            <div key={pr.id}>
              <a href={pr.html_url} target="_blank">
                {pr.title}
              </a>
              <p className="text-xs">
                {pr.repository_url.replace("https://api.github.com/repos/", "")}{" "}
                -{" "}
                <span className="text-[#2DD4BF]">
                  {pr.pull_request?.merged_at ? "Merged" : "Open"}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PullRequest;
