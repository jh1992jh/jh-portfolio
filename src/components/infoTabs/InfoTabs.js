import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import styled from "styled-components";
import Introduction from "./Introduction";
import { icons } from "../../images-and-icons";
import ThumbNails from "./ThumbNails";

const Battery = styled.img`
  margin: 0 1.5em;
  @media (max-width: 1025px) {
    max-height: 30px;
    width: auto;
  }
`;
const InfoTabsStyled = styled.div`
  max-width: 100%;
  width: 80%;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 6vw;
  z-index: 1030;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4em;
  padding-left: 5vw;
  @media (max-width: 1025px) {
    position: absolute;
    top: 5em;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 100%;
    max-height: 1025px;
    padding: 0;
  }
`;
// CORRECT THIS FOR MOBILE
const Time = styled.div`
  color: #37ccc9;
  font-size: 2rem;
  text-align: center;

  display: flex;
  align-items: center;
  span {
    color: #37ccc9;
  }
  @media (max-width: 1025px) {
    font-size: 1.48rem;

    margin-top: 0;
    max-height: 10%;
  }
`;

const ForDesktop = styled.div`
  @media (max-width: 1025px) {
    display: none;
  }
`;

const TopBar = styled.div`
  position: fixed;
  top: 0;
  right: 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1025px) {
    top: 0.5em;
  }
`;

const MobileSeparator = styled.span`
  margin: 0 0.1em 11px 0.1em;
  color: #37ccc9;
`;
//@media (min-width: 1025px) {
//  display: none;
// }

class InfoTabs extends Component {
  render() {
    const minutes = new Date().getMinutes();
    const hours = new Date().getHours();
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 1000 }}
      >
        {props => (
          <InfoTabsStyled style={props}>
            <TopBar>
              <Battery src={icons.battery} alt="battery" />
              <Time>
                <span>{hours}</span>
                {/*<DesktopBr /> */}
                <MobileSeparator>:</MobileSeparator>
                <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
              </Time>
            </TopBar>
            <ForDesktop>
              <ThumbNails />
            </ForDesktop>
            <Introduction />
          </InfoTabsStyled>
        )}
      </Spring>
    );
  }
}

export default InfoTabs;
