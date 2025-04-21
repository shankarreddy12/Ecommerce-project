
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import {Link} from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        usernameOrEmail: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        usernameOrEmail: '',
        password: ''
    });
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
        setErrors(prev => ({
            ...prev,
            [id]: ''
        }));
        setLoginError('');
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { usernameOrEmail: '', password: '' };

        if (!formData.usernameOrEmail.trim()) {
            newErrors.usernameOrEmail = 'Please enter your username or email';
            isValid = false;
        }

        if (!formData.password.trim()) {
            newErrors.password = 'Please enter your password';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            const registrationDetails = JSON.parse(localStorage.getItem('registrationDetails'));
            
            if (registrationDetails) {
                const { username, email, password } = registrationDetails;
                
                if ((formData.usernameOrEmail === username || formData.usernameOrEmail === email) && 
                    formData.password === password) {
                    // Successful login
                    login({ username, email });


                    navigate('/Home');
                } else {
                    setLoginError('Invalid username/email or password');
                }
            } else {
                setLoginError('No registration data found. Please register first');
            }
        }
    };

    return (
        <div className="auth-container">
            <div className="login-container">
                <h2>Login</h2>
                {loginError && <div className="error-message">{loginError}</div>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="usernameOrEmail"
                        placeholder="Username or Email"
                        value={formData.usernameOrEmail}
                        onChange={handleChange}
                    />
                    {errors.usernameOrEmail && <span className="error">{errors.usernameOrEmail}</span>}
                    
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                    
                    <button type="submit" className="auth-button">Login</button>
                </form>
                <p className="auth-link">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
