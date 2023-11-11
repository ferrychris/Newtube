import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Main from './component/Mainbody'




const App = () => {
  return (
    <React.Fragment>
        <Navbar />
        <Home/>
    </React.Fragment>
     
     
  )
}

export default App