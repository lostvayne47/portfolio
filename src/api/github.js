const githubUsername = "lostvayne47";
const url = `https://api.github.com/users/${githubUsername}/repos`;

const getData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return []; // Return an empty array if the API fails
  }
};

export default getData;
