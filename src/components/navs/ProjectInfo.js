import React, { Fragment } from "react";
import styled from "styled-components";
import ProjectTitle from "./ProjectTitle";
import SingleProjectInfo from "./SingleProjectInfo";
import { Transition, animated } from "react-spring/renderprops";
import Github from "../../images-and-icons/Github";

const ProjectInfoStyled = styled.div`
  max-height: 100vh;
  background: #fff;
  width: 30%;

  @media (max-width: 1025px) {
    width: 100%;
    order: 2;
  }
`;

const ProjectInfoTop = styled.div`
  max-width: 100%;
  height: 30%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 1025px) {
    max-height: 10%;
  }
`;

const GithubLink = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;

  svg {
    margin: 0 1em;
  }
`;

const ProjectTitles = styled.div`
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1025px) {
    margin-top: 1em;
  }
`;

const ProjectInfoBottom = styled.div`
  width: 100%;
  flex: 2;
`;

const Button = styled.button`
  margin: 4em auto;
  display: block;
  border: 1px solid #e14eca;
  background: transparent;
  cursor: pointer;
  color: #e14eca;
  font-weight: 600;
  padding: 1em 2em;

  @media (max-width: 1025px) {
    margin: 2em auto;
  }
`;

const ForDesktop = styled.div`
  @media (max-width: 1025px) {
    display: none;
  }
`;

const ForMobile = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }

  margin-bottom: 2em;
  button {
    margin: 0;
  }
`;

const ProjectInfo = ({
  selectedTitle,
  selectProject,
  selectedProject,
  navOpen
}) => (
  <ProjectInfoStyled>
    <Transition
      items={selectedTitle}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
      config={{ duration: 200 }}
    >
      {selectedTitle => props => (
        <Fragment>
          <ProjectInfoTop>
            <ForDesktop>
              <GithubLink>
                <Github />
                <a
                  href={`${selectedProject[0].githubRepo}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button>View Github Repository</Button>
                </a>
              </GithubLink>
            </ForDesktop>
            <ProjectTitles>
              <ProjectTitle
                title="SocialFeed"
                selectedTitle={selectedTitle}
                selectProject={selectProject}
              />
              <ProjectTitle
                title="DrAudio"
                selectedTitle={selectedTitle}
                selectProject={selectProject}
              />
              <ProjectTitle
                title="Filtermatic_TS"
                selectedTitle={selectedTitle}
                selectProject={selectProject}
              />
              <ProjectTitle
                title="GraphEvent"
                selectedTitle={selectedTitle}
                selectProject={selectProject}
              />
            </ProjectTitles>
          </ProjectInfoTop>

          <ProjectInfoBottom>
            <animated.div style={props}>
              <SingleProjectInfo selectedProject={selectedProject[0]} />
            </animated.div>
            <a
              href={`${selectedProject[0].url}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button>Click To View</Button>
            </a>

            <ForMobile>
              <GithubLink>
                <Github />
                <a
                  href={`${selectedProject[0].githubRepo}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button>View Github Repository</Button>
                </a>
              </GithubLink>
            </ForMobile>
          </ProjectInfoBottom>
        </Fragment>
      )}
    </Transition>
  </ProjectInfoStyled>
);

export default ProjectInfo;
