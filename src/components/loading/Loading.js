import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring';

const LoadingStyled = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Triangle = styled.div`
    position: fixed;
    top: calc(50% - 50px);
    left: calc(50% - 31px);
    width: 100px;
    height: 100px;
    opacity: ${props => props.opacity};
    transform: rotateY(${props => props.deg}deg);
`

const LoadingLine = styled.div`
    height: ${props => props.fill}px;
    width: 25px;
    background: #37ccc9;
    border-radius: 15px;
    transform: rotate(${props => props.rotate});
    
    position: absolute;
    top: ${props => props.top};
    left: calc(${props => props.left} - 60px);
    z-index: ${props => props.zIndex}
`

const Percentage = styled.h2`
    color: #37ccc9;
    margin-bottom: -150px;
    width: 100%;
    text-align: center;
`
const Loading = () => (
    <LoadingStyled>
    <Spring
    from={{deg: 0, fill: 0, opacity: 0}}
    to={{deg: 360, fill: 100, opacity: 1}}
    reset={true}
    config={{duration: 1000}}
    >
        {props => (
            <Fragment>
                <Triangle deg={props.deg} opacity={props.opacity}>
                    <LoadingLine fill={props.fill} top="0" left="0" zIndex="1030" rotate="30deg"/>
                    <LoadingLine fill={props.fill} top="0" left="100%" zIndex="1050" rotate="-30deg"/>
                    <LoadingLine fill={props.fill} top="33px" left="79px" zIndex="1080" rotate="90deg"/>
                </Triangle> 
                <Percentage>{String(props.fill).slice(0, 4)}%</Percentage>
            </Fragment>
        )}
    </Spring>
    </LoadingStyled>
)

export default Loading;