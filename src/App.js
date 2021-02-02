import React, {useContext, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import {Context} from './context/Context'
import Navbar from './components/pages/Navbar'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'

const App = () => {
  const context = useContext(Context)

  useEffect(()=>{console.log("placeholder")},[])

  return(
    <main>
      <Navbar/>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/contact" render={() => <Contact />} />
      </Switch>
    </main>
  )
}

export default App;