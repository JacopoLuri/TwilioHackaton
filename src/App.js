import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components';

import Home from './components/pages/Home'
import Babysitter from './components/pages/Babysitter'

// Burger Menu and Navbar
import NavBar from "./components/Navbar/Navbar"
import Burger from "./components/Navbar/Burger";
import Menu from "./components/Navbar/Menu";

//footer 
import Footer from "./components/Footer/Footer"

const StyledNavBarContainer = styled.div`
  position: sticky;
  top: 0;
`;

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <StyledNavBarContainer>
        <NavBar />
        <Burger modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <Menu modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </StyledNavBarContainer>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/babysitter" render={() => <Babysitter />} />
      </Switch>
      <Footer />
    </>
  )
}

export default App;