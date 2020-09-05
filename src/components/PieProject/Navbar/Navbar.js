import React from 'react';
import './Navbar.css';
import { Nav, NavbarBrand } from 'reactstrap';
import piePic from '../assets/piePic.jpeg';
import Logout from './Logout/Logout';

const Navbar = (props) => {
    return (
        <div>
            <nav>
                <img id='piePic' src={piePic} alt='pie' />
            <Logout setSessionToken = {props.setSessionToken}/>
            </nav>
        </div>
    )
}

export default Navbar;