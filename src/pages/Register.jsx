import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../styles/style.css';
import './Register.css';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register Data:', { name, email, password });
    alert('Registered successfully!');
  };

  return (
    <section className="register">
      <h1>Register</h1>
      <hr />
      <div id="form">
        <form className="registerform" onSubmit={handleSubmit}>
          <label className="registername">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            required
          /> <br />
          <label className="registeremail">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            required
          /> <br />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
          /> <br />
          <label className="link">
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </label>
          <button type="submit" className="registerbutton">Register</button>
        </form>
      </div>
    </section>
  );
};

export default Register;