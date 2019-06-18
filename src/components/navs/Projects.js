import React, { useState } from "react";
import styled from "styled-components";
import ProjectInfo from "./ProjectInfo";
import ProjectShowcase from "./ProjectShowcase";
import { projectData } from "../../projectData";

const ProjectsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);

  @media (max-width: 1025px) {
    max-width: 100vw;
  }
`;

const Projects = () => {
  const [selectedTitle, setSelectedTitle] = useState("SocialFeed");
  const [selectedProject, setSelectedProject] = useState([projectData[0]]);
  const [resetAnim, setResetAnim] = useState(false);

  const selectProject = title => {
    const filterProjects = projectData.filter(
      project => project.title === title
    );

    setSelectedTitle(title);
    setSelectedProject(filterProjects);
    setResetAnim(true);
  };

  return (
    <ProjectsStyled>
      <ProjectInfo
        selectedTitle={selectedTitle}
        selectProject={selectProject}
        selectedProject={selectedProject}
      />
      <ProjectShowcase
        selectedProject={selectedProject[0]}
        selectProject={selectProject}
        resetAnim={resetAnim}
      />
    </ProjectsStyled>
  );
};

export default Projects;
