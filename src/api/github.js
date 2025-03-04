const githubUsername = "lostvayne47";
const token = process.env.token;
// const githubUsername = "tanish-cpu";

const base_url = `https://api.github.com/users/${githubUsername}/repos`;

const getGithubData = async () => {
  try {
    const response = await fetch(base_url, {
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
    let filteredData = [];
    data.map(async (i) => {
      let projectLanguages = await fetchLanguages(i.languages_url);
      // let projectLanguages = "projectLanguages";
      filteredData.push({
        id: i.id,
        name: i.name,
        description: i.description,
        url: i.url,
        homepage: i.homepage,
        langauges: projectLanguages,
      });
    });
    return filteredData;
  } catch (e) {
    console.log(e.message);
  }
};

export default getData;
