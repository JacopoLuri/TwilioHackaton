import React, {useContext, useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import {Context} from './context/Context'
import Home from './components/pages/Home'
import Babysitter from './components/pages/Babysitter'

// Burger Menu and Navbar
import NavBar from "./components/Navbar/Navbar"
import Burger from "./components/Navbar/Burger";
import Menu from "./components/Navbar/Menu";

const App = () => {
  const context = useContext(Context)
  const [modalOpen, setModalOpen] = useState(false);

  return(
    <>
      <NavBar />
      <Burger modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Menu modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/babysitter" render={() => <Babysitter />} />
      </Switch>
    </>
  )
}

export default App;