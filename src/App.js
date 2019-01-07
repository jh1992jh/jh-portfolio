import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Sidenav from './components/navs/Sidenav';
import MobileNav from './components/navs/MobileNav';
import InfoTabs from './components/infoTabs/InfoTabs';
import Loading from './components/loading/Loading';

const AppStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: flex-start;
`

const ForMobile = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }
`

const ForDesktop = styled.div`
  @media (max-width: 1025px) {
    display: none;
  }
`

class App extends Component {
  state = {
    navOpen: false,
    loading: true
}

componentDidMount() {
  setTimeout(() => this.setState({loading: false}),1100)
}
toggleNav = () => {
    const { navOpen } = this.state;
    
    this.setState({navOpen: !navOpen})
} 
  render() {
    const { navOpen, loading } = this.state;
    return (
      <AppStyled>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <ForMobile>
          <MobileNav navOpen={navOpen} toggleNav={this.toggleNav}/>
        </ForMobile>
        
        <ForDesktop>
          <Sidenav  navOpen={navOpen} toggleNav={this.toggleNav} />      
        </ForDesktop>
        {!navOpen && <InfoTabs />}
      </Fragment>
      )}
      </AppStyled>
    );
  }
}

/* 
<Transition 
        native
        items={navOpen}
        config={config.fast}
        from={{opacity: 0}}
        enter={{opacity: 1}}
        leave={{opacity: 0}}
      >
      {navOpen => 
        !navOpen && (props =>
            <animated.div style={props}>
              <InfoTabs />
            </animated.div>
          )
      } 
      
      </Transition> 

*/

export default App;
