import React, { Fragment } from "react";
import styled from "styled-components";

const SingleProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2em;
  height: 70%;

  p {
    color: #888;
  }
`;

const Technologies = styled.div`
  display: flex;
  max-width: calc(100% - 4em);
  margin: 0 auto;
  flex-wrap: wrap;

  span {
    color: #888;
  }
`;

const ProjectInfoWrapper = styled.div`
  max-height: 40vh;
  min-height: 40vh;
  overflow-y: scroll;
  cursor: pointer;

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    width: 12px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar-track-piece,
  ::-webkit-scrollbar-thumb {
    display: none;
  }

  ::-webkit-scrollbar-button {
    background-color: #37ccc9;
  }

  ::-webkit-scrollbar-button:first-of-type {
    background-color: red;
  }

  @media (max-width: 1025px) {
    max-height: 100%;
    overflow-y: auto;
  }
`;

const SingleProjectInfo = ({ selectedProject }) => (
  <Fragment>
    <ProjectInfoWrapper>
      <SingleProject>
        <h3>{selectedProject.title}</h3>
        <p>{selectedProject.description}</p>
      </SingleProject>
      <Technologies>
        {selectedProject.technologies.map((technology, i) => (
          <span key={technology}>
            {technology}
            {i !== selectedProject.technologies.length - 1 ? `,` : null}
          </span>
        ))}
      </Technologies>
    </ProjectInfoWrapper>
  </Fragment>
);

export default SingleProjectInfo;
