import React from "react";
import styled from "styled-components";
import Projects from "./Projects";
import NavIcon from "../../images-and-icons/icons";
import { useTransition, animated, config } from "react-spring";

const SidenavWrapper = styled.div`
  display: flex;
  max-width: 100%;
  height: 100%;
`;

const ToggleNavWrapper = styled.div`
  max-height: 100%;
  width: 5vw;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5em;
  border-right: 1px solid #f0f0f0;
`;

const ToggleNav = styled.div`
  height: 50px;
  width: 50px;
  margin: 0 auto;
  .navIcon {
    .rect1 {
      width: 45px;
      transition: 0.4s linear;
    }
    .rect3 {
      width: 15px;
      transition: 0.4s linear;
    }
  }

  .navIcon:hover {
    transition: 4s linear;
    .rect1 {
      width: 15px;
      transition: 0.4s linear;
    }
    .rect3 {
      width: 45px;
      transition: 0.4s linear;
    }
  }
`;

const Sidenav = ({ navOpen, setNavOpen }) => {
  const transitions = useTransition(navOpen, null, {
    initial: { width: "0%", opacity: 0 },
    enter: { width: "100%", opacity: 1 },
    leave: { width: "0%", opacity: 0 },
    reset: false,
    config: config.stiff
  });
  return (
    <SidenavWrapper>
      <ToggleNavWrapper>
        <ToggleNav onClick={() => setNavOpen(!navOpen)}>
          <NavIcon navOpen={navOpen} />
        </ToggleNav>
      </ToggleNavWrapper>

      {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.div style={props} key={key}>
            <Projects navOpen={navOpen} />
          </animated.div>
        ) : null
      )}
    </SidenavWrapper>
  );
};

export default Sidenav;
