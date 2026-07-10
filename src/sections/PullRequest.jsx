import React, { useEffect, useState } from "react";

const PullRequest = () => {
  const [prs, setPrs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/data/pull-requests.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch pull requests");
        }
        return res.json();
      })
      .then((data) => setPrs(data))
      .catch(() => setError("Unable to load pull requests."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading pull requests...</p>;

  if (error) return <p>{error}</p>;

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
              <a href={pr.url} target="_blank" rel="noopener noreferrer">
                {pr.title}
              </a>
              <p className="text-xs">
                {pr.repository.replace("https://api.github.com/repos/", "")} -{" "}
                <span className="text-[#2DD4BF]">
                  {pr.merged ? "Merged" : "Open"}
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
