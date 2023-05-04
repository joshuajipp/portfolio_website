import wordleImg from "./images/wordle.png";
import lotionImg from "./images/lotion.png";
import lastShowImg from "./images/last_show.png";
import portfolioImg from "./images/portfolio.png";
export const ProjectList = [
  {
    name: "Obituary Generation App",
    image: lastShowImg,
    skills: [
      "Python",
      "ReactJS",
      "AWS Lambda",
      "Cloudinary API",
      "OpenAI API",
      "CSS",
      "Terraform",
      "AWS DynamoDB",
      "AWS Param. Store",
    ],

    url: "https://imaginative-tulumba-a6be62.netlify.app",
  },
  {
    name: "Note-Taking App",
    image: lotionImg,
    skills: [
      "ReactJS",
      "Python",
      "AWS Lambda",
      "AWS DynamoDB",
      "CSS",
      "Terraform",
      "Google OAuth 2.0",
      "AWS S3",
    ],
    url: "https://exquisite-hamster-0169f7.netlify.app",
  },
  {
    name: "Wordle Game",
    image: wordleImg,
    skills: ["JavaScript", "CSS", "HTML"],
    url: "https://rainbow-fox-450270.netlify.app",
  },
  {
    name: "Personal Portfolio",
    url: "/",
    skills: ["ReactJS", "CSS"],
    image: portfolioImg,
  },
];
