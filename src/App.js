import React, {useContext, useEffect} from 'react'
import {Context} from './context/Context'

const App = () => {
  const context = useContext(Context)

  useEffect(()=>{console.log("placeholder")},[])

  return(
    <h1>HELLO</h1>
  )
}

export default App;