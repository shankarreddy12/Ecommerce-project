

// src/App.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './AuthContext';
import { CartProvider } from './CartContext';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CartPage from './pages/CartPage';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import { NotificationsProvider } from './NotificationsContext';
import  Notifications from './pages/Notifications';
import './App.css';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = React.useContext(AuthContext);
    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App = () => {
    return (
        <AuthProvider>
            <CartProvider>
            <NotificationsProvider>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    
                    <Route path="/Home" element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    } />
                    
                    <Route path="/products" element={
                        <ProtectedRoute>
                            <Products />
                        </ProtectedRoute>
                    } />
                    
                    <Route path="/about" element={
                        <ProtectedRoute>
                            <About />
                        </ProtectedRoute>
                    } />
                    
                    <Route path="/contact" element={
                        <ProtectedRoute>
                            <Contact />
                        </ProtectedRoute>
                    } />
                    
                    <Route path="/cart" element={
                        <ProtectedRoute>
                            <CartPage />
                        </ProtectedRoute>
                    } />
                    <Route path="/notifications" element={
    <ProtectedRoute>
        <Notifications />
    </ProtectedRoute>
} />
                </Routes>
                </NotificationsProvider>
            </CartProvider>
        </AuthProvider>
    );
};

export default App;