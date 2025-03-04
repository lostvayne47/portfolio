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

export const fetchLanguages = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch data");
    const languagesData = await response.json();
    return Object.keys(languagesData).join(", ");
  } catch (error) {
    console.error(error);
    return ""; // Return an empty string if the API fails
  }
};

export default getData;
