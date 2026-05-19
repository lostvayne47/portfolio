import { useContext, useEffect } from "react";
import portfolioContext from "../context/Context";
import "./css/light.scss";
import "./css/dark.scss";
import { Moon, Sun } from "lucide-react";
export default function ThemeToggle() {
  const { theme, setTheme } = useContext(portfolioContext);
  const isDark = theme === "dark";

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      className={`theme-toggle ${isDark ? "is-dark" : "is-light"}`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <span className="theme-toggle-track">
        <span className="theme-toggle-icon sun">
          <Sun size={15} strokeWidth={2.5} />
        </span>
        <span className="theme-toggle-icon moon">
          <Moon size={15} strokeWidth={2.5} />
        </span>
        <span className="theme-toggle-thumb" />
      </span>
    </button>
  );
}
