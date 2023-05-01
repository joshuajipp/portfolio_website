import wordleImg from "./images/wordle.png";
import lotionImg from "./images/lotion.png";
import lastShowImg from "./images/last_show.png";
import portfolioImg from "./images/portfolio.png";
export const ProjectList = [
  {
    name: "Obituary Generation App",
    image: lastShowImg,
    skills: [
      "ReactJS",
      "Terraform",
      "OpenAI API",
      "AWS Lambda",
      "AWS Parameter Store",
      "CSS",
      "Python",
      "Cloudinary API",
      "AWS DynamoDB",
    ],

    url: "https://imaginative-tulumba-a6be62.netlify.app",
  },
  {
    name: "Note-Taking App",
    image: lotionImg,
    skills: [
      "ReactJS",
      "AWS S3",
      "AWS Lambda",
      "AWS DynamoDB",
      "CSS",
      "Python",
      "Terraform",
      "Google OAuth 2.0",
    ],
    url: "https://exquisite-hamster-0169f7.netlify.app",
  },
  {
    name: "Wordle Game",
    image: wordleImg,
    skills: ["CSS", "JavaScript", "HTML"],
    url: "https://rainbow-fox-450270.netlify.app",
  },
  {
    name: "Personal Portfolio",
    url: "/",
    skills: ["ReactJS", "CSS"],
    image: portfolioImg,
  },
];
