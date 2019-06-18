import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import ProjectInfo from "./ProjectInfo";
import ProjectShowcase from "./ProjectShowcase";
import { projectData } from "../../projectData";

const ProjectsStyled = styled(animated.div)`
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

  const ProjectsAnim = useSpring({
    from: { width: "0%", height: "100vh", opacity: 0 },
    to: { width: "100%", height: "100vh", opacity: 1 },
    config: config.stiff
  });

  return (
    <ProjectsStyled style={ProjectsAnim}>
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
