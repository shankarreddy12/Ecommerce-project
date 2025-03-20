// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {   Route, Routes } from 'react-router-dom';
// import Header from './components/Header/Header';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CartPage from './pages/CartPage';
import Products from './pages/Products'
import Login from './pages/Login';
import './App.css';
import Register from './pages/Register';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Products" element={<Products />} />

                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/cart" element={<CartPage />} />

 
                
            </Routes>
        </>
    );
};
export default App;