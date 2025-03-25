import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Login.css'; // Import the CSS file for styling
// import '../styles/style.css';
import './Login.css';

const Login = () => {
    // State for form inputs
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    // State for validation errors
    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
        // Clear the error when the user starts typing
        setErrors({
            ...errors,
            [id]: '',
        });
    };

    // Validate the form
    const validateForm = () => {
        let isValid = true;
        const newErrors = { username: '', password: '' };

        // Validate Username
        if (!formData.username.trim()) {
            newErrors.username = 'Username is required';
            isValid = false;
        }

        // Validate Password
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        if (validateForm()) {
            // If the form is valid, submit the form data
            console.log('Login Data:', formData);
            alert('Logged in successfully!');
            // Clear the form after submission
            setFormData({ username: '', password: '' });
        } else {
            console.log('Form validation failed');
        }
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                    {errors.username && <span className="error">{errors.username}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
            <p className='p'>don't have an account? <Link to="/Register">Register</Link></p>
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
