import React, { Fragment } from "react";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops";

const ProjectShowcaseStyled = styled.div`
  max-height: 100%;
  background: transparent;
  flex: 2;
  max-width: 100%;
  padding-top: 0.5em;

  @media (max-width: 1025px) {
    max-width: 100vw;
    order: 1;
    max-height: 80%;
    display: flex;
    padding: 0;
  }
`;

const ProjectImagesWrapper = styled.div`
  width: 90%;
  height: 80vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 2em;

  @media (max-width: 1025px) {
    width: 100%;
    padding: 0;
    justify-content: flex-start;
  }
`;

const DesktopImg = styled.img`
  height: 70%;
  width: auto;
  @media (max-width: 1025px) {
    max-width: 100%;
    height: auto;
  }
`;

const OnlyDesktopImg = styled.img`
  height: auto;
  width: 100%;
  @media (max-width: 1025px) {
    width: 100vw;

    height: auto;
  }
`;

const MobileImg = styled.img`
  max-height: 50%;
  width: auto;
  margin: 0.5em 2em;

  @media (max-width: 1025px) {
    margin: 0 auto;
  }
`;

const ProjectShowcase = ({ selectedProject, resetAnim }) => {
  const {
    desktop,
    desktopFP,
    mobile1,
    mobile1FP,
    mobile2,
    mobile2FP
  } = selectedProject;
  return (
    <ProjectShowcaseStyled>
      <ProjectImagesWrapper>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          reset={resetAnim}
          config={{ duration: 500 }}
        >
          {props =>
            desktop && mobile1 && mobile2 ? (
              <Fragment>
                <DesktopImg
                  style={props}
                  src={desktop}
                  srcSet={desktopFP}
                  alt="Project on desktop"
                />
                <MobileImg
                  style={props}
                  src={mobile1}
                  srcSet={mobile1FP}
                  alt="Project on mobile"
                />
                <MobileImg
                  style={props}
                  src={mobile2}
                  srcSet={mobile2FP}
                  alt="Project on mobile"
                />
              </Fragment>
            ) : (
              <OnlyDesktopImg
                style={props}
                src={desktop}
                srcSet={desktopFP}
                alt="Project on desktop"
              />
            )
          }
        </Spring>
      </ProjectImagesWrapper>
    </ProjectShowcaseStyled>
  );
};

export default ProjectShowcase;
