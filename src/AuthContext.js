// src/context/AuthContext.js
import { createContext, useState, useEffect } from 'react';
const styles={
    style:{
        color:'black'
    }
} 


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check if user is logged in on initial load
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setIsAuthenticated(true);
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setIsAuthenticated(true);
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <div className='AuthContext' >
        <AuthContext.Provider value={{ 
            isAuthenticated, 
            user, 
            login, 
            logout 
        }}>
            {children}
        </AuthContext.Provider>
        </div>
    );
};