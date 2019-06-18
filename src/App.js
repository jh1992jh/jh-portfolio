import React, { useState } from "react";
import styled from "styled-components";
import Sidenav from "./components/navs/Sidenav";
import MobileNav from "./components/navs/MobileNav";
import InfoTabs from "./components/infoTabs/InfoTabs";

// import JSFacts from './JSFacts';

const AppStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: flex-start;
`;

const ForMobile = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }
`;

const ForDesktop = styled.div`
  @media (max-width: 1025px) {
    display: none;
  }
`;

const App = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <AppStyled>
      <ForMobile>
        <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />
      </ForMobile>

      <ForDesktop>
        <Sidenav navOpen={navOpen} setNavOpen={setNavOpen} />
      </ForDesktop>
      {!navOpen && <InfoTabs />}
    </AppStyled>
  );
};

export default App;
