import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Schedule from './components/Schedule/Schedule';
import Menu from './components/Menu/Menu';
import './App.css';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Menu />
      <Schedule />
    </div>
  );
}

export default App;
