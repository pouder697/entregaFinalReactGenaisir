import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import '../NavBar/navbarstyles.css';


function NavBar() {

    return (
        <nav className='navbarContainer'>
            <ul className='navbarList'> 
            <Link to={"/"}>  
                <Logo />
            </Link>
                <li className='navbarItem'>
                    <a className='navbarLink' href="">HOODIES</a>
                </li>
                <li className='navbarItem'>
                    <a className='navbarLink' href="">PANTALONES</a>
                </li>
                <li className='navbarItem'>
                    <a className='navbarLink' href="">REMERAS</a>
                </li>
                <Link to={"/cart"}>
                <CartWidget />
                </Link>
            </ul>

        </nav>
    )
}

export default NavBar