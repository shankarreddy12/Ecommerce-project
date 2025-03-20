import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.css';
import './Header/Header.css';
import { GrLogin } from "react-icons/gr";

import { IoMdPersonAdd } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
    return (
        <header >
            <h1>Ecommerce </h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/Products'>Products</Link> </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    
                    <li className='Login'><Link to="/Login">
                    <GrLogin />
                    Login</Link></li>
                    <li className='Register' ><Link to="/Register">
                    <IoMdPersonAdd />
                    Register</Link></li>

                    <li  className='Cart'><Link to="/cart">
                    <FaShoppingCart />
                    Cart</Link></li>

                  

                </ul>
            </nav>
        </header>
    );
};

export default Header;