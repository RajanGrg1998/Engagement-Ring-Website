import React, {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import About from './Components/About'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Home/> */}
      <About/>
      {/* 
      <Services/>
      <Gallary/>
      <Contact/>
      <Footer/> */}
    </>
  );
}

export default App;
