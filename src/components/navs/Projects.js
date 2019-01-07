import React, { Component } from 'react'
import styled from 'styled-components';
import ProjectInfo from './ProjectInfo'
import ProjectShowcase from './ProjectShowcase';
import { projectData } from '../../projectData';

const ProjectsStyled = styled.div`
    display: flex; 
    flex-wrap: wrap;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0, 0.5);
    
    @media (max-width: 1025px) {
        max-width: 100vw;
    }
`

class Projects extends Component {
    state = {
        selectedTitle: 'SocialFeed',
        selectedProject: [projectData[0]],
        resetAnim: false
    }

    selectProject = (title) => {
        const filterProjects = projectData.filter(project => project.title === title)
        this.setState({selectedTitle: title, selectedProject: filterProjects, resetAnim: true})
    }


  render() {
    const { selectedTitle, selectedProject, resetAnim } = this.state;
    return (
      
        <ProjectsStyled>
        <ProjectInfo selectedTitle={selectedTitle} selectProject={this.selectProject} selectedProject={selectedProject}/>
        <ProjectShowcase  selectedProject={selectedProject[0]} selectProject={this.selectProject} resetAnim={resetAnim}/>
      </ProjectsStyled>
     
    )
  }
}

export default Projects;