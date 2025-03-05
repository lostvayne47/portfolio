const githubUsername = process.env.REACT_APP_GITHUB_USERNAME;
const token = process.env.REACT_APP_GITHUB_PAT;
const apiUrl = process.env.REACT_APP_GITHUB_API_URL;

const getGithubData = async () => {
  try {
    const response = await fetch(`${apiUrl}/users/${githubUsername}/repos`, {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });
    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return []; // Return an empty array if the API fails
  }
};

const fetchLanguages = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });
    if (!response.ok) throw new Error("Failed to fetch data");
    const languagesData = await response.json();
    return Object.keys(languagesData).join(", ");
  } catch (error) {
    console.error(error);
    return ""; // Return an empty string if the API fails
  }
};

const getData = async () => {
  try {
    const data = await getGithubData();

    // Wait for all fetchLanguages calls to resolve before proceeding
    const filteredData = await Promise.all(
      data.map(async (i) => {
        const projectLanguages = await fetchLanguages(i.languages_url);
        return {
          id: i.id,
          name: i.name,
          description: i.description,
          url: i.html_url,
          homepage: i.homepage,
          languages: projectLanguages,
        };
      })
    );

    return filteredData; // Correctly returning data after processing
  } catch (e) {
    console.error("Error fetching GitHub data:", e.message);
    return []; // Return empty array in case of failure
  }
};

export default getData;
