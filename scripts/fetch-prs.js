const fs = import("fs");

const username = "onumaeleanyagift";

async function fetchPRs() {
  const response = await fetch(
    `https://api.github.com/search/issues?q=is:pr+author:${username}&sort=updated&order=desc`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN_PR_GITHUB}`,
        Accept: "application/vnd.github+json",
      },
    },
  );

  const data = await response.json();

  const prs = (data.items || []).slice(0, 6).map((pr) => ({
    id: pr.id,
    title: pr.title,
    url: pr.html_url,
    repository: pr.repository_url.replace("https://api.github.com/repos/", ""),
    state: pr.state,
    merged: pr.pull_request?.merged_at !== null,
    created_at: pr.created_at,
    updated_at: pr.updated_at,
  }));

  fs.mkdirSync("./public/data", { recursive: true });

  fs.writeFileSync(
    "./public/data/pull-requests.json",
    JSON.stringify(prs, null, 2),
  );

  console.log("Pull requests updated.");
}

fetchPRs();
