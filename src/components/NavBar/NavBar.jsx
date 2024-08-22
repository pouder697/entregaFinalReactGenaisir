import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import { Link, NavLink } from 'react-router-dom';
import '../NavBar/navbarstyles.css';


function NavBar() {

    return (
        <nav className='navbarContainer'>
            <ul className='navbarList'> 
            <Link to={"/"}>  
                <Logo />
            </Link>
                <li className='navbarItem'>
                    <NavLink to="/" className='navbarLink'> PRODUCTOS </NavLink>
                </li>
                <li className='navbarItem'>
                    <NavLink to="/hoodies" className='navbarLink'> HOODIES </NavLink>
                </li>
                <li className='navbarItem'>
                    <NavLink to="/pantalones" className='navbarLink'> PANTALONES </NavLink>
                </li>
                <li className='navbarItem'>
                    <NavLink to="/remeras" className='navbarLink'> REMERAS </NavLink>
                </li>
                <Link to={"/cart"}>
                <CartWidget />
                </Link>
            </ul>

        </nav>
    )
}

export default NavBar