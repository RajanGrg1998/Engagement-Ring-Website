import React, {useState} from 'react';
import '../App.css';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import HomePage from '../Components/Home';
import About from '../Components/About'
import Services from '../Components/Services/ServicesElement'
import Terminology from '../Components/Terminology/TerminologyElement'
import ContactUs from '../Components/ContactUs'
import Footer from '../Components/Footer'
import Image from '../Components/Gallery/Image';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HomePage/>
      <About/>
      <Services/>
      <Image/>
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default Home
