import React, { useState, Fragment } from "react";
import { useSpring } from "react-spring";
import styled from "styled-components";

const ProjectTitleStyled = styled.span`
    color: ${props =>
      props.selectedTitle === props.title ? "#37ccc9" : "#222"};
    cursor: pointer;
    margin: 0 0.1em;
    transition: 0.2s;
    text-align: center;
    width: ${props => props.width}
    font-weight: 600;
    display: block;
    :hover {
        color: #37ccc9;
    }
`;

const Line = styled.div`
  height: 3px;
  background: #37ccc9;
  display: block;
  transition: 0.2s;
  width: ${props => (props.hovered ? "100%" : props.width)};
`;

const ProjectTitle = ({ title, selectedTitle, selectProject }) => {
  const [hovered, setHovered] = useState(false);
  const hoveredProps = useSpring({
    from: { width: "0%" },
    to: { width: "100%" }
  });

  return (
    <Fragment>
      <ProjectTitleStyled
        title={title}
        selectedTitle={selectedTitle}
        onClick={() => selectProject(`${title}`)}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {title}
        <Line
          width={selectedTitle === title ? `100%` : "0"}
          hovered={hovered}
          style={hovered ? hoveredProps : null}
        />
      </ProjectTitleStyled>
    </Fragment>
  );
};

// title, selectedTitle, selectProject

export default ProjectTitle;
