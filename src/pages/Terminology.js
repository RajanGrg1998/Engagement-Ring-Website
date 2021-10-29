import React, {useState} from 'react'
import Ter from '../Components/Terminology/TerminologyElement.js'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'

const Terminology = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Ter/>
        <Footer/>
        </>
    )
}

export default Terminology
