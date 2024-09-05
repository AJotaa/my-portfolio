import React, { Component } from "react";
import { motion } from "framer-motion";

import ContactSection from "../components/home/ContactSection";
import ExperienceSection from "../components/home/ExperienceSection";
import SkillsSection from "../components/home/SkillsSection";
import HeroSection from "../components/home/HeroSection";
import ProjectsSection from "../components/home/ProjectsSection";

import imgMovie from "../img/projects/movies-app.png";
import imgPomodoro from "../img/projects/pomodoro-clock.png";
import imgCalculator from "../img/projects/calculator.png";
import imgAtrolle from "../img/projects/astrolle.png";
import imgQuiz from "../img/projects/country-quiz.png";
import imgExp1 from "../img/experience/agrimanager.png";
import imgExp2 from "../img/experience/astrolle.svg";
import imgExp3 from "../img/experience/neosmart.jpeg";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      user: {
        fistName: "Adrián",
        lastName: "Aristimuño",
        skills: [
          {
            title: "Frontend Dev",
            paragraph:
              "Designing and creating webs/apps since 2020, interest in UI/UX. Languages, libraries and fromeworks: HTML, CSS, javaScript, Sass, Vue.js and React.js.",
            icon: "fa-brands fa-react",
            color: "#0abde3",
            badges: [
              {
                icon: "fa-brands fa-html5",
                text: "HTML",
              },
              {
                icon: "fa-brands fa-css3-alt",
                text: "CSS",
              },
              {
                icon: "fa-brands fa-js",
                text: "JS",
              },
              {
                icon: "fa-brands fa-react",
                text: "React",
              },
              {
                icon: "fa-brands fa-vuejs",
                text: "Vue",
              },
              {
                icon: "fa-brands fa-sass",
                text: "Sass",
              },
            ],
          },
          {
            title: "Data Analitycs",
            paragraph:
              "Experience in database analytics and administration, using tools such as: SQL, NoSQL (MongoDB) and spreadsheets.",
            icon: "fa-solid fa-database",
            color: "#10ac84",
            badges: [
              {
                text: "SQL",
              },
              {
                text: "MySQL",
              },
              {
                text: "MongoDB",
              },
              {
                text: "Spreadsheets",
                icon: "fa-regular fa-file-excel",
              },
            ],
          },
        ],
        projects: [
          {
            name: "Astrolle Clone",
            link: "https://astrolle-7918f.web.app/",
            img: imgAtrolle,
          },
          {
            name: "Country Quiz",
            link: "https://country-quiz-6a183.web.app/",
            img: imgQuiz,
          },
          {
            name: "Movies App",
            link: "https://movies-app-73ceb.web.app/",
            img: imgMovie,
          },
          {
            name: "Pomodoro Clock",
            link: "https://codepen.io/AJota/full/oNjdZLE",
            img: imgPomodoro,
          },
          {
            name: "Calculator",
            link: "https://codepen.io/AJota/full/MWaQELd",
            img: imgCalculator,
          },
        ],
        experience: [
          {
            name: "Neosmart",
            charge: "Frontend Developer",
            dateStart: "2024",
            dateEnd: null,
            location: "Madrid, España",
            text: `Responsible for developing engaging interfaces, including a landing page and an application that serves as a prompt library with integration of LLMs. Additionally a browser extension to optimize prompt usage.`,
            linkShow: "neoprompts.ai",
            link: "https://neoprompts.ai/",
            tools: [
              { text: "Next.js" },
              { text: "React" },
              { text: "Tainwind" },
              { text: "TypeScript" },
              { text: "NPM" },
              { text: "Vite" },
              { text: "Github" },
              { text: "Notion" },
            ],
            img: imgExp3,
          },
          {
            name: "Astrolle",
            charge: "Frontend Developer",
            dateStart: "2021",
            dateEnd: "2024",
            location: "Miami, USA",
            text: `Responsible for creating dynamic and engaging interfaces using React and related technologies. Focused on optimizing user experience and ensuring smooth functionality in every project.`,
            linkShow: "astrolle.com",
            link: "https://astrolle.com/",
            tools: [
              { text: "React" },
              { text: "Webpack" },
              { text: "Sass" },
              { text: "Tainwind" },
              { text: "JavaScript" },
              { text: "NPM" },
              { text: "Github" },
              { text: "Jira" },
            ],
            img: imgExp2,
          },
          {
            name: "Agrimanager",
            charge: "Business analyst",
            dateStart: "2020",
            dateEnd: "2024",
            location: "Medellín, Colombia",
            text: `Responsible for analyzing and managing data to drive informed decisions and effective strategies. With experience in advanced queries and data analysis, my goal is to extract valuable insights.`,
            linkShow: "agrimanager.app",
            link: "https://www.agrimanager.app/",
            tools: [
              { text: "MongoDB" },
              { text: "NoSQLBooster" },
              { text: "Excel" },
            ],
            img: imgExp1,
          },
        ],
        contact: [
          {
            name: "Facebook",
            icon: "fa-brands fa-facebook",
            link: "https://www.facebook.com/adrian.aristimuno.3",
          },
          {
            name: "Instagram",
            icon: "fa-brands fa-instagram",
            link: "https://www.instagram.com/adrianjotaa",
          },
          {
            name: "Twitter",
            icon: "fa-brands fa-twitter",
            link: "https://twitter.com/AdrianJotaa",
          },
          {
            name: "LinkedIn",
            icon: "fa-brands fa-linkedin-in",
            link: "https://www.linkedin.com/in/adrian-j-aristimu%C3%B1o/",
          },
          {
            name: "GitHub",
            icon: "fa-brands fa-github",
            link: "https://github.com/AJotaa",
          },
          {
            name: "Email",
            icon: "fa-solid fa-envelope",
            link: "https://mail.google.com/mail/u/0/?fs=1&to=adrianjao23@gmail.com&tf=cm",
          },
          {
            name: "CodePen",
            icon: "fa-brands fa-codepen",
            link: "https://codepen.io/AJota/pens/showcase",
          },
        ],
      },
    };
  }
  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    const { user } = this.state;

    return (
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", duration: 1, bounce: 0 }}
      >
        <HeroSection />
        <SkillsSection data={user.skills} />
        <ProjectsSection data={user.projects} />
        <ExperienceSection data={user.experience} />
        <ContactSection data={user.contact} />
      </motion.main>
    );
  }
}

export default HomePage;
