import React, { useState, useEffect, useRef } from "react";
//import { Spring, config, animated } from "react-spring/renderprops";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";

import { projectData } from "../../projectData";

const ThumbNailsStyled = styled.div`
  min-width: 40vw;
  height: 100vh;
  flex: 1;
  position: relative;
  @media (max-width: 1025px) {
    display: none;
  }
`;

const ProjectThumbnail = styled(animated.img)`
  position: absolute;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  z-index: ${props => props.zindex};
  max-width: 80%;
  height: auto;
  box-shadow: -1px -1px 4px #e14eca;
  opacity: 1
  transform: scale(${props => props.transform});
`;
const ThumbNails = () => {
  const [firstThumbNailIndex, setFirstThumbNailIndex] = useState(2);
  const [secondThumbNailIndex, setSecondThumbNailIndex] = useState(3);

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      const incIndex = () => {
        savedCallback.current();
      };

      if (delay !== null) {
        let id = setInterval(incIndex, delay);
        return () => clearInterval(id);
      }
    });
  };

  useInterval(() => {
    if (firstThumbNailIndex < 1) {
      setFirstThumbNailIndex(3);
      setSecondThumbNailIndex(secondThumbNailIndex - 1);
      return;
    }
    if (secondThumbNailIndex < 1) {
      setSecondThumbNailIndex(3);
      setFirstThumbNailIndex(firstThumbNailIndex - 1);
      return;
    }
    //secondThumbNailIndex <= 1 && setSecondThumbNailIndex(3);
    setFirstThumbNailIndex(firstThumbNailIndex - 1);
    setSecondThumbNailIndex(secondThumbNailIndex - 1);
    console.log(firstThumbNailIndex);
  }, 3000);

  const topPicProps = useSpring({
    to: async (next, cancel) => {
      await next({ opacity: 1, transform: "scale(1)" });
      // await next({ opacity: 0, transform: "scale(0.5)" });
    },
    from: { opacity: 0, transform: "scale(0.5)" },
    reset: true,
    config: config.molasses
    //duration: 2000
  });

  const underPicProps = useSpring({
    to: async (next, cancel) => {
      await next({ opacity: 1, top: "28%" });
    },
    from: { opacity: 0, top: "25%" },
    reset: true,
    config: config.molasses
    //duration: 2000
  });
  return (
    <ThumbNailsStyled>
      <ProjectThumbnail
        src={projectData[firstThumbNailIndex].desktop}
        top="25"
        left="0"
        zindex="0"
        style={underPicProps}
        alt={projectData[firstThumbNailIndex].title}
      />

      <ProjectThumbnail
        src={projectData[secondThumbNailIndex].desktop}
        top="33"
        left="5"
        style={topPicProps}
        zindex="1030"
        alt={projectData[secondThumbNailIndex].title}
      />
    </ThumbNailsStyled>
  );
};

export default ThumbNails;
