
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header/Header.css';
import { GrLogin, GrLogout, GrNotification } from "react-icons/gr";
import { IoMdPersonAdd } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from '../AuthContext';

const Header = () => {
    const { isAuthenticated, user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <header>
            <h1>Ecommerce</h1>
            <nav>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    
                    {isAuthenticated ? (
                        <>
                            <li className='Cart'><Link to="/cart">
                                <FaShoppingCart />
                                Cart</Link>
                            </li>
                            <li>
                                <Link to="/notifications" className="notifications-link">
                                    <GrNotification />
                                    <span className="notification-badge">3</span>
                                </Link>
                            </li>
                            <li className='user-info'>Welcome, {user?.username}</li>
                            <li className='Logout' onClick={handleLogout}>
                                <GrLogout />
                                Logout
                            </li>
                        </>
                    ) : (
                        <>
                            <li className='Login'><Link to="/Login">
                                <GrLogin />
                                Login</Link>
                            </li>
                            <li className='Register'><Link to="/register">
                                <IoMdPersonAdd />
                                Register</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;