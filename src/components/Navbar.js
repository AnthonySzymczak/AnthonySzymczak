import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click,setClick] = useState(false)
    const [button,setButton] =useState(true)

    const closeMobileMenu = () =>setClick(false)
    const handleClick =() => setClick(!click)

//function to show on mobile
const showButton =()=>{
    if(window.innerwidth <= 960){
        setButton(false)
    } else {
        setButton(true)
    }
};

window.addEventListener('resize',showButton);

    return (
        <>
         <nav className="navbar">
            <div>
                
                <Link to="/" className="navbar-logo">
                <br/>
                <i class="fas fa-laptop-code"/><i class="fas fa-hat-wizard"/>
                </Link>
                
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-angle-double-down': 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            About Me
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                            Portfolio
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                            Resume
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                        </li>
                    
                </ul>
                {button && <Button buttonStyle='btn--outline'>Contact</Button>}
            </div>   
         </nav> 
        </>
    )
}

export default Navbar
