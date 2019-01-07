import React, { Component, Fragment } from 'react';
import { Spring, config } from 'react-spring';
import styled from 'styled-components';

const ProjectTitleStyled = styled.span`
    color: ${props => props.selectedTitle === props.title ? '#37ccc9' : '#222'};
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
`

const Line = styled.div`
   
    height: 3px;
    background: #37ccc9;
    display: block;
    transition: 0.2s;
    width: ${props => props.hovered ? '100%' : props.width}
  
`


class ProjectTitle extends Component {
    state = {
        hovered: false
    }
  render() {
    const { hovered } = this.state;
    const {title, selectedTitle, selectProject} = this.props;
    return (
        <Spring
        from={{width: 0}}
        to={{width: 100}}
        config={config.fast}
        >
            {props => (
                <Fragment>
                <ProjectTitleStyled title={title} selectedTitle={selectedTitle} onClick={() => selectProject(`${title}`)}
                onMouseOver={() => this.setState({hovered: true})}  onMouseLeave={() => this.setState({hovered: false})}
                >{title}
                <Line width={selectedTitle === title ? `${props.width}` : '0'} hovered={hovered}/>
                </ProjectTitleStyled>  
                </Fragment>
            )}
        </Spring>
    )
  }
}


export default ProjectTitle;