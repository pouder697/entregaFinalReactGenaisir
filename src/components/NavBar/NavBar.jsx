import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import '../NavBar/navbarstyles.css';


function NavBar() {
    return (
        <nav className='navbarContainer'>
            <ul className='navbarList'>   
                <Logo />
                <li className='navbarItem'>
                    <a className='navbarLink' href="">HOODIES</a>
                </li>
                <li className='navbarItem'>
                    <a className='navbarLink' href="">PANTALONES</a>
                </li>
                <li className='navbarItem'>
                    <a className='navbarLink' href="">REMERAS</a>
                </li>
                <CartWidget />
            </ul>

        </nav>
    )
}

export default NavBar