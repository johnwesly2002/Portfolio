import { motion, AnimatePresence } from "framer-motion";
import { CiFolderOn } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { GoLinkExternal } from "react-icons/go";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { projects } from "../Projects/Projects";
import "./styles.css";
import { IoArrowBackOutline } from "react-icons/io5";
import Background from "../Background/Background";

const ProjectsArchive = () => {
  const navigate = useNavigate();

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <>

      <section className="ProjectsArchive">
        <Link className="archive-heading" onClick={() => navigate(-1)}>  <IoArrowBackOutline size={25} /> Projects</Link>

        <ul className="archive-list">
          {projects.map((project, index) => (
            <li
              key={index}
              className={`archive-item `}
            >
              <div className="archive-info">
                <CiFolderOn size={24} />
                <span className="archive-title">{project.title}</span>
                <span className="archive-tech">
                  {project.tech.join(", ")}
                </span>
              </div>

              <div className="archive-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <LuGithub size={20} />
                  </a>
                )}
                {project.external && (
                  <a href={project.external} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <GoLinkExternal size={20} />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
        <Background
        colorStops={["#7CFF67", "#AB99E5", "#5227FF"]}
        blend={0.5}
        amplitude={1.3}
        speed={0.5}
      />
    </>
  );
};

export default ProjectsArchive;
