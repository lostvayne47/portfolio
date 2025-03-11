import { useContext, useEffect } from "react";
import portfolioContext from "../context/Context";
import "./css/light.scss";
import "./css/dark.scss";
import { FaSun, FaMoon } from "react-icons/fa";
export default function ThemeToggle() {
  const { theme, setTheme } = useContext(portfolioContext);
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <button
        className="enlarge"
        style={{
          backgroundColor: "Transparent",
          border: "none",
        }}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <div
          style={{
            background: "var(--primary-bg)",
            color: "var(--primary-text)",
          }}
        >
          {theme === "light" ? <FaMoon size={30} /> : <FaSun size={30} />}
        </div>
      </button>
    </>
  );
}
