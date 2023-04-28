import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("is-black");
    } else {
      document.documentElement.classList.remove("is-black");
    }
  };
  return (
    <div className="App">
      <Router>
        <Navbar handleClick={handleClick} isDarkMode={isDarkMode} />
        <AnimatedRoutes isDarkMode={isDarkMode} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
