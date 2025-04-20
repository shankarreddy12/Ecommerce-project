// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// // import '../styles/style.css';
// import './Register.css';
// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Register Data:', { name, email, password });
//     alert('Registered successfully!');
//   };

//   return (
//     <section className="register">
//       <h1>Register</h1>
//       <hr />
//       <div id="form">
//         <form className="registerform" onSubmit={handleSubmit}>
//           <label className="registername">Full Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter Your Name"
//             required
//           /> <br />
//           <label className="registeremail">Email address</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="name@example.com"
//             required
//           /> <br />
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="password"
//             required
//           /> <br />
//           <label className="link">
//             <p>Already have an account? <Link to="/login">Login</Link></p>
//           </label>
//           <button type="submit" className="registerbutton">Register</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Register;














import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

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
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            username: '',
            email: '',
            mobile: '',
            password: '',
            confirmPassword: ''
        };

        // Username validation
        if (!formData.username.trim()) {
            newErrors.username = 'Username is required';
            isValid = false;
        } else if (formData.username.length < 5) {
            newErrors.username = 'Username must be at least 5 characters';
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email address';
            isValid = false;
        }

        // Mobile validation
        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(formData.mobile)) {
            newErrors.mobile = 'Mobile number must be 10 digits';
            isValid = false;
        }

        // Password validation
        if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
            isValid = false;
        }

        // Confirm password
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            const registrationDetails = {
                username: formData.username,
                email: formData.email,
                mobile: formData.mobile,
                password: formData.password
            };
            
            localStorage.setItem('registrationDetails', JSON.stringify(registrationDetails));
            setSuccessMessage('Registration successful! Redirecting to login...');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        }
    };

    return (
        <div className="auth-container">
            <div className="register-container">
                <h2>Registration</h2>
                {successMessage && (
                    <div className="success-message">{successMessage}</div>
                )}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <span className="error">{errors.username}</span>}
                    
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                    
                    <input
                        type="tel"
                        id="mobile"
                        placeholder="Mobile Number"
                        value={formData.mobile}
                        onChange={handleChange}
                    />
                    {errors.mobile && <span className="error">{errors.mobile}</span>}
                    
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                    
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                    
                    <button type="submit" className="auth-button">Register</button>
                </form>
                <p className="auth-link">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;