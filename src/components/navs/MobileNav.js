import React, { Fragment } from "react";
import styled from "styled-components";
import Projects from "./Projects";
import NavIcon from "../../images-and-icons/icons";

const MobileNavStyled = styled.div`
  position: absolute;
  top: 0.5em;
  left: 0.5em;
  z-index: 1050;

  @media (min-width: 1025px) {
    display: none;
  }
`;

const MobileNav = ({ navOpen, setNavOpen }) => (
  <Fragment>
    <MobileNavStyled onClick={() => setNavOpen(!navOpen)}>
      <NavIcon navOpen={navOpen} />
    </MobileNavStyled>

    {navOpen && <Projects />}
  </Fragment>
);

export default MobileNav;
