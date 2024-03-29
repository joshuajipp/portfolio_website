import wordleImg from "./images/wordle.png";
import lotionImg from "./images/lotion.png";
import lastShowImg from "./images/last_show.png";
import portfolioImg from "./images/portfolio.png";
import flightImg from "./images/flight-booking.jpg";
export const ProjectList = [
  {
    name: "Flight Booking App",
    source_url: "https://github.com/joshuajipp/airlineAPI",
    web_url: "https://master--ensf480-flight-project-group-10.netlify.app/",
    skills: ["Java","Spring Boot", "MySQL","AWS","ReactJS", "CSS"],
    image: flightImg,
  },
  {
    name: "Obituary Generation App",
    image: lastShowImg,
    skills: [
      "Python",
      "ReactJS",
      "CSS",
      "Terraform",
      "AWS"
    ],

    web_url: "https://imaginative-tulumba-a6be62.netlify.app",
    source_url: "https://github.com/joshuajipp/the-last-show.git",
  },
  {
    name: "Note Taking App",
    image: lotionImg,
    skills: [
      "ReactJS",
      "Python",
      "AWS",
      "CSS",
      "Terraform",
      "Google OAuth 2.0",

    ],
    web_url: "https://exquisite-hamster-0169f7.netlify.app",
    source_url: "https://github.com/joshuajipp/lotionReactApp.git",
  },
  {
    name: "Wordle Game",
    image: wordleImg,
    skills: ["JavaScript", "CSS", "HTML"],
    web_url: "https://rainbow-fox-450270.netlify.app",
    source_url: "https://github.com/joshuajipp/wordle-minigame.git",
  },
  {
    name: "Personal Portfolio",
    source_url: "https://github.com/joshuajipp/portfolio_website.git",
    web_url: "/",
    skills: ["ReactJS", "CSS"],
    image: portfolioImg,
  },
];
