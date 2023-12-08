import React from "react";
import "../styles/Home.css";
import "../styles/Navbar.css";
import darkProfile from "../images/dark-profile.png";
import lightProfile from "../images/light-profile.png";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Home(props) {
  const pageRef = useRef(null);

  useEffect(() => {
    pageRef.current.classList.add("slide-from-left");
  }, []);
  return (
    <motion.div
      class="page__intro intro"
      ref={pageRef}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <div class="intro__container container">
        <div class="intro__body">
          <div class="intro__content">
            <h1 class="intro__title">
              Hey, I'm <span>Joshua</span>
            </h1>
            <span class="intro__position">
              Software Engineering Student at UCalgary
            </span>
            <p class="intro__text">
              Welcome to my personal portfolio! I am a 3rd year Software
              Engineering student at the University of Calgary. I am passionate
              about software development and am always looking for new
              opportunities to learn and grow as a developer. Feel free to
              toggle dark mode and browse around to learn more about me! Check
              out my GitHub profile if you want to see what I have worked on. My
              resume is provided below, feel free to reach out via LinkedIn or
              the Contact page if you have any questions or potential
              opportunities!
            </p>
            <div class="intro__btn">
              <Link to="/contact" className="btn">
                Contact Me<i class="bx bx-right-arrow-alt"></i>
              </Link>
            </div>
            <div class="intro__socials intro-soc">
              <div class="intro-soc__item">
                <a
                  href="https://www.linkedin.com/in/jjipp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn Profile"
                  class="intro-soc__link"
                >
                  <i class="bx bxl-linkedin"></i>
                </a>
              </div>
              <div class="intro-soc__item">
                <a
                  href="https://github.com/joshuajipp"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Profile"
                  class="intro-soc__link"
                >
                  <i class="bx bxl-github"></i>
                </a>
              </div>
              <div class="intro-soc__item">
                <a
                  href="https://drive.google.com/file/d/1gMAWkILFyo4SnBcc_SkS-BH8-2ZbrcwE/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Resume"
                  class="intro-soc__link"
                >
                  <i class="bx bxs-file-pdf"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="intro__img">

              <img
                class="dark_profile_pic"
                src={darkProfile}
                alt="Joshua Jipp Image"
              />

              <img
                className="light_profile_pic"
                src={lightProfile}
                alt="Joshua Jipp Image"
              />

          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
