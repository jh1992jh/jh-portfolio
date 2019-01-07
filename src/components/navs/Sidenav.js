import React, { Component } from 'react'
import styled from 'styled-components';
import Projects from './Projects';
import NavIcon from '../../images-and-icons/icons';
import { Transition, animated } from 'react-spring';

const SidenavWrapper = styled.div`
    display: flex;
    max-width: 100%;
    height: 100%;
`


 const ToggleNavWrapper = styled.div`
    max-height: 100%;
    width: 5vw;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.5em;
    border-right: 1px solid #f0f0f0;
` 

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
`

class Sidenav extends Component {
  

  render() {
    const { navOpen, toggleNav } = this.props;
    return (
      <SidenavWrapper>
        <ToggleNavWrapper>    
            <ToggleNav onClick={toggleNav}>
                <NavIcon navOpen={navOpen} />
            </ToggleNav>
        </ToggleNavWrapper>
        <Transition
        native
        config={{tension: 200, friction: 20}}
        items={navOpen}
        from={{width: '50%', opacity: 0}}
        enter={{width: '100% ', opacity: 1}}
        leave={{width: '50%', opacity: 0}}
        >
          {navOpen  => 
            navOpen && (props => (
              <animated.div style={props}>
                 <Projects  navOpen={navOpen}/>
              </animated.div>

            ))  
          }
        </Transition>
      </SidenavWrapper>
    )
  }
}

export default Sidenav;