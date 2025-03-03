import { Sun, Moon } from "lucide-react";
import { useContext } from "react";
import portfolioContext from "../context/Context";
export default function ThemeToggle() {
  const { theme, setTheme } = useContext(portfolioContext);

  return (
    <>
      <button
        style={{ backgroundColor: "Transparent", border: "none" }}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <Sun size={36} color="white" />
        ) : (
          <Moon size={36} color="white" />
        )}
      </button>
    </>
  );
}
