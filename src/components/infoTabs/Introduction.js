import React from 'react';
import styled from 'styled-components';

const IntroductionStyled = styled.div`
    min-width: 50%;
    min-height: 35%;
    line-height: 1rem;
    
    
    @media (max-width: 1025px) {
        min-width: 100%;
        line-height: 2rem;
        min-height: 75vh;
    }
`

const Name = styled.p`
    color: #888;
`

const Title = styled.h2`
    color: #222;
    font-weight: 600;
    font-size: 3rem;

    @media (max-width: 1025px) {
        margin-top: 1em;
        font-size: 2rem;
    }
`

const Skills = styled.div`
    

    h3 {
        color: #888;
    }

    p {
        color: #888;
    }
`

const Padding = styled.div`
    @media (max-width: 1025px) {
        padding: 0 0.6em;
    }
`
const Introduction = () => (
    <IntroductionStyled>
        <Padding>
        <Name>HI I'M JANI HÄNNINEN</Name>
        <Title>Web Developer</Title>
        <Title>Frontend Developer</Title>
        <Skills>
            <h3>Skills</h3>
            <p>ReactJS, Redux, NodeJS, JavaScript, Express, MongoDB, Styled-Components, CSS, HTML</p>
        </Skills>
        </Padding>
    </IntroductionStyled>
)

export default Introduction;