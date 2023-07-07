import React, {useState} from 'react'
import { Link } from 'react-scroll';
import logo from '../assets/logo1.png'
import "./styles/navbar.css"
import { useNavigate } from "react-router-dom";


function Navbar() {

  const [nav, setnav] = useState(false);
  const navigate = useNavigate();

  const changeBackground = () => {
    if (window.scrollY >= 50){
      setnav(true);
    }
    else{
      setnav(false);
    }
  }

  window.addEventListener('scroll',changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to='main' className='logo' smooth={true} duration={2000}>
        <img src={logo} alt='' />
      </Link>
      <input className='menu-btn' type='checkbox' id='menu-btn'/>
      <label className='menu-icon' for='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li><Link to="main" smooth={true} duration={2000}>Home</Link></li>
        <li><Link to="products" smooth={true} duration={2000}>Charts</Link></li>
        <li><Link to="about" smooth={true} duration={2000}>Service Plan</Link></li>
        <li><Link onClick={() => navigate("/Tco")} smooth={true} duration={2000}>Cost of ownership</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;