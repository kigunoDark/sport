import React from 'react'
import NavbarContainer from './components/Navbar/NavbarContainer'
import Menu from './components/Menu/Menu'
import Schedule from './components/Schedule/Schedule';


import './App.css';



function App() {
  return (
      <div className="app">
        <NavbarContainer />
        <Menu /> 
         <Schedule />
      </div>
  );
}

export default App;
