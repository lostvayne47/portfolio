const githubUsername = "lostvayne47";
const url = `https://api.github.com/users/${githubUsername}/repos`;

const getData = async () => {
  const res = await fetch(url, {
    method: "GET",
  });
  const json = await res.json();
  return json;
};

export default getData;
