import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes(props) {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/experience"
          element={<Experience isDarkMode={props.isDarkMode} />}
        />
      </Routes>
    </AnimatePresence>
  );
}
export default AnimatedRoutes;
