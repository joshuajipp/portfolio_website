import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import "../styles/Navbar.css";
import profilePic from "../images/joshjipp.jpeg";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      class="page__intro intro"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <div class="intro__container container">
        <div class="intro__body">
          <div class="intro__content">
            <h1 class="intro__title">
              Hey, I'm <span>Joshua</span>
            </h1>
            <span class="intro__position">
              Software Engineering Student at the University of Calgary
            </span>
            <p class="intro__text">
              Welcome to my personal website! To toggle dark-mode on/off, click
              the icon at the top right corner. If you are curious about what I
              am working on, feel free to check out GitHub account. My resume
              and LinkedIn profile are also provided below. Feel free to contact
              me about any inquiries or potential opportunites.
            </p>
            <div class="intro__btn">
              <a href="#forum_container" title="contact me" class="btn">
                Contact Me<i class="bx bx-right-arrow-alt"></i>
              </a>
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
                  href="https://drive.google.com/file/d/10P1MUtQluHbD9d9L_QVWPNrpAcP25eOS/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  title=""
                  class="intro-soc__link"
                >
                  <i class="bx bxs-file-pdf"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="intro__img">
            <img
              class="profile_pic"
              src={profilePic}
              alt="Joshua Jipp Picture"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
