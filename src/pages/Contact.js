// import React from 'react';
// import './Contact.css';

// const Contact = () => {
//     return (
//         <div className="contact">
//             <h2>Contact Us</h2>
//             <form>
//                 <label htmlFor="name">Name</label>
//                 <input type="text" id="name" placeholder="Your Name" required />

//                 <label htmlFor="email">Email</label>
//                 <input type="email" id="email" placeholder="Your Email" required />

//                 <label htmlFor="message">Message</label>
//                 <textarea id="message" placeholder="Your Message" required></textarea>

//                 <button type="submit">Send</button>
//             </form>
//         </div>
//     );
// };

// export default Contact;   





import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    // State for form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // State for validation errors
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
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
        const newErrors = { name: '', email: '', message: '' };

        // Validate Name
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        // Validate Email
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
            isValid = false;
        }

        // Validate Message
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
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
            console.log('Form submitted:', formData);
            alert('Form submitted successfully!');
            // Clear the form after submission
            setFormData({ name: '', email: '', message: '' });
        } else {
            console.log('Form validation failed');
        }
    };

    return (
        <div className="contact">
            <h2>Contact Us</h2>
            < hr/>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                    ></textarea>
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>

                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;