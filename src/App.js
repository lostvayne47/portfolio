import Navbar from "./components/Navbar.js";
import States from "./context/States.js";

function App() {
  return (
    <>
      <States>
        <Navbar />
      </States>
    </>
  );
}

export default App;
