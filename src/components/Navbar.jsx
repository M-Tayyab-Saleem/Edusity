import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'
import { Link } from 'react-scroll';
import menu_icon from '../assets/menu-icon.png'

const Navbar = () => {
  const [sticky , setSticky] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll" , ()=>{
      window.scrollY > 200 ? setSticky(true) : setSticky(false);
    })
  }, [])

  const [mobileMenu, setmobileMenu] = useState(false);

  let toggleMenu = ()=>{
      mobileMenu ? setmobileMenu(false) : setmobileMenu(true)
  }
  
  return (
    <nav className={`container ${sticky ? "nav-dark" : ""}`}>
        <img src={logo} alt="logo" className='logo'/>
        <ul className={mobileMenu ? "open-menu" : ""}>
            <li><Link to="hero" offset={0} smooth={true} duration={500}>Home</Link></li>
            <li><Link to='program' offset={-260} smooth={true} duration={500}>Program</Link></li>
            <li><Link to='about' offset={-150} smooth={true} duration={500}>About Us</Link></li>
            <li><Link to='compus' offset={-260} smooth={true} duration={500}>Compus</Link></li>
            <li><Link to='testimonials' offset={-260} smooth={true} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' offset={-260} smooth={true} duration={500}><button className='btn'>Contact Us</button></Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar