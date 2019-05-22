import React, { Component } from "react";
import { Spring } from "react-spring";
import styled from "styled-components";
import Introduction from "./Introduction";
import { icons } from "../../images-and-icons";

const Battery = styled.img`
  position: fixed;
  top: 0;
  right: 2em;
  z-index: 2050;
  @media (max-width: 1025px) {
    right: 0;
    max-height: 30px;
    width: auto;
  }
`;
const InfoTabsStyled = styled.div`
  max-width: 100%;

  min-height: 100%;
  position: absolute;
  top: 0;
  left: 6vw;
  z-index: 1030;
  display: flex;
  align-items: center;
  padding: 0 4em;
  padding-left: 5vw;
  @media (max-width: 1025px) {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 100%;
    max-height: 1025px;
    padding: 0;
  }
`;

const Time = styled.div`
  position: fixed;
  top: 20%;
  right: 1em;
  color: #37ccc9;
  font-size: 4rem;
  text-align: center;

  @media (max-width: 1025px) {
    position: static;
    display: flex;
    align-items: center;
    margin-top: 1.1em;
    height: 40%;
  }
`;

const DesktopBr = styled.br`
  @media (max-width: 1025px) {
    display: none;
  }
`;

const MobileSeparator = styled.span`
  margin: 0 0.1em 11px 0.1em;
  color: #37ccc9;

  @media (min-width: 1025px) {
    display: none;
  }
`;

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
            <Battery src={icons.battery} alt="battery" />
            <Time>
              {hours}
              <DesktopBr />
              <MobileSeparator>:</MobileSeparator>
              {minutes < 10 ? `0${minutes}` : minutes}
            </Time>
            <Introduction />
          </InfoTabsStyled>
        )}
      </Spring>
    );
  }
}

export default InfoTabs;
