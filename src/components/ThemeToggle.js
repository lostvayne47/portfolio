import { Sun, Moon } from "lucide-react";
import { useContext, useEffect } from "react";
import portfolioContext from "../context/Context";
import "./css/light.scss";
import "./css/dark.scss";
import { useLocation } from "react-router";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(portfolioContext);
  const location = useLocation();
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  //Toggle gif with theme
  useEffect(() => {
    if (location.pathname === "/") {
      if (theme === "dark") {
        document.body.classList.add("darkContainer");
      } else {
        document.body.classList.add("lightContainer");
      }
    } else {
      document.body.classList.remove("darkContainer", "lightContainer");
    }
  }, [location, theme]);
  return (
    <>
      <button
        style={{ backgroundColor: "Transparent", border: "none" }}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <Moon size={36} color="#222222" />
        ) : (
          <Sun size={36} color="white" />
        )}
      </button>
    </>
  );
}
