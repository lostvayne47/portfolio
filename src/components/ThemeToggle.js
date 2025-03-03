import { Sun, Moon } from "lucide-react";
import { useContext, useEffect } from "react";
import portfolioContext from "../context/Context";
import "./css/light.scss";
import "./css/dark.scss";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(portfolioContext);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <button
        style={{ backgroundColor: "Transparent", border: "none" }}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <Moon size={36} color="white" />
        ) : (
          <Sun size={36} color="white" />
        )}
      </button>
    </>
  );
}
