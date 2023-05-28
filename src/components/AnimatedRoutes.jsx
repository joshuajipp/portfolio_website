import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes(props) {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home isDarkMode={props.isDarkMode} />} />
        <Route
          path="/projects"
          element={
            <Projects
              isSourceCode={props.isSourceCode}
              setIsSourceCode={props.setIsSourceCode}
            />
          }
        />
        <Route
          path="/experience"
          element={<Experience isDarkMode={props.isDarkMode} />}
        />
        
        <Route path="*" element={<Home isDarkMode={props.isDarkMode} />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
export default AnimatedRoutes;
