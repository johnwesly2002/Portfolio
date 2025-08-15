import "../../App.css";
import { LuGithub } from "react-icons/lu";
import { GoLinkExternal } from "react-icons/go";
import { CiFolderOn } from "react-icons/ci";
import SpotlightCard from "../constants/Spotlightcard/Spotlightcard";
import { Link } from "react-router-dom";
import "./styles.css";
export const projects = [
    {
    title: "CheckIt",
    description: "CheckIt is a robust, full-stack e-commerce platform. Built with React for the frontend and Spring Boot for the backend, CheckIt delivers a fast, responsive, and secure experience for both users and administrators.",
    github: "https://github.com/johnwesly2002/CheckIt-frontend",
    external: null,
    tech: ["React", "Springboot", "Redux", "Java"]
  },
  {
    title: "Snap Wallet",
    description: "Designed a secure digital wallet with real-time transaction tracking and analytics",
    github: "https://github.com/johnwesly2002/SnapWallet",
    external: null,
    tech: ["React Native", "TypeScript", "Redux", "Realm"]
  },
  {
    title: "Talks",
    description: "Developed real-time messaging features supporting multimedia file sharing with Firebase",
    github: "https://github.com/johnwesly2002/Talks",
    external: null,
    tech: ["Flutter", "Dart", "Firebase", "Google Cloud"]
  },
  {
    title: "SnapReply",
    description: "An Email AI-Writing Assistant for quick Gmail replies using Spring Boot, React, and a Chrome extension.",
    github: "https://github.com/johnwesly2002/SnapReply",
    external: null,
    tech: ["React", "Java", "Spring Boot", "MySQL"]
  },
  {
    title: "HyperTrace",
    description: "Link shortener built with React and Spring Boot to convert long URLs into short, shareable links.",
    github: "https://github.com/johnwesly2002/HyperTrace",
    external: "https://willowy-druid-3c17c1.netlify.app/",
    tech: ["React", "Spring Boot", "Java", "JPA"]
  },
  {
    title: "Profiolo",
    description: "Personal website for showcasing work and achievements using React and vanilla CSS.",
    github: "https://github.com/johnwesly2002/Portfolio",
    external: "https://johnwesly-profiolo.netlify.app/",
    tech: ["React", "JavaScript", "TypeScript", "CSS"]
  },
  {
    title: "Nike Website",
    description: "Nike-themed website using Tailwind CSS and JavaScript for exploring dynamic UI styling.",
    github: "https://github.com/johnwesly2002/Nike-website",
    external: "https://nike-website-by-john.netlify.app/#",
    tech: ["Tailwind", "CSS", "Parcel", "JavaScript"]
  },
  {
    title: "Explore Countries",
    description: "Explore countries and their neighbours by regions and continents with React and TypeScript.",
    github: "https://github.com/johnwesly2002/React-countries",
    external: null,
    tech: ["React", "TypeScript", "JavaScript", "HTML", "CSS"]
  }
];
const showArchive = projects.length > 8;
const visibleProjects = showArchive ? projects.slice(0, 8) : projects;
const Projects = () => {
  return (
    <section id="Projects" className="Projects rel">
      <h2 className="projectsectionheading">Projects</h2>
      <ul className="projects-container">
        {visibleProjects.map((project, index) => (
          <li className="projectLi" key={index}>
			<SpotlightCard className="projectbox" spotlightColor="rgba(124, 46, 202, 0.47)">
              <div className="projectTop">
                <div className="folder">
                  <CiFolderOn className="ProjectIcon" size={30} />
                </div>
                <div className="projectLinks">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <LuGithub className="ProjectIcon" size={30} />
                    </a>
                  )}
                  {project.external && (
                    <a href={project.external} target="_blank" rel="noopener noreferrer">
                      <GoLinkExternal className="ProjectIcon" size={30} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <div className="project-description">
                <p>{project.description}</p>
              </div>

              <div className="footer">
                <ul className="project-tech-list">
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
			</SpotlightCard>
          </li>
        ))}
      </ul>
	    {showArchive && (
        <div className="projects-overlay">
          <Link to="/archive" className="archive-link">
            View Archive →
          </Link>
        </div>
      )}
    </section>
  );
};

export default Projects;
