import React, { Fragment } from 'react';
import { Spring, config } from 'react-spring';
import styled from 'styled-components';

const NavIconStyled = styled.div`
    width: 50px;
    height: 50px;
    position: fixed;
`

const Line = styled.div`
    
    width: ${props => props.width}px;
    height: 4px;
    background: #37ccc9;
    box-shadow: 1px 1px 2px #e14eca;
    margin: 0.5em 0;
    transform: rotate(${props => props.deg}deg);
    z-index: ${props => props.zIndex};
`

const LineClose = styled.div`
    width: ${props => props.width}px;
    height: 4px;
    background: #37ccc9;
    margin: 0.5em 0;
    transform: rotate(${props => props.deg}deg);
    z-index: ${props => props.zIndex};
    position: absolute;
    top: ${props => props.top};
    left: 0;
    border-radius: 5px;
`


const NavIcon = ({ navOpen }) => {
    if(!navOpen) {
        return (
            <NavIconStyled>
            <Spring
            from={{width1: 30, width2: 30, width3: 0, deg1: 315, deg2: 45}}
            to={{width1: 45, width2: 30, width3: 15, deg1: 0, deg2: 0}}
            reset={true}
            config={config.fast}
            >
                {props => (
                    <Fragment>
                        <Line width={props.width1} deg={props.deg1} />
                        <Line width={props.width2} deg={props.deg2} />
                        <Line width={props.width3} />
                    </Fragment>
                )}
            </Spring>
        </NavIconStyled>
        )
    } else {
        return (
            <NavIconStyled>
            <Spring
            config={config.fast}
            from={{ deg1: 0, deg2: 0, width: 45}}
            to={{deg1: 315, deg2: 45, width: 30}}
            reset={true}
            >
                {props => (
                    <Fragment>
                        <LineClose width={props.width} top="5px" deg={props.deg1} zIndex="1030"/>
                        <LineClose width={props.width} top="5px" deg={props.deg2} zIndex="1050"/> 
                    </Fragment>
                )}
            </Spring>
        </NavIconStyled>
        )
    }
}

export default NavIcon;