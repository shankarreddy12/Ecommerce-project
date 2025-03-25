import React from 'react';
// import './About.css';
import './About.css';
import  menclothingimage from '../assets/menclothingimage.jpeg'; 
import womensclothimage from '../assets/womensclothimage.jpeg';
import jewellery from '../assets/jewellery.webp';
import Electronics from '../assets/Electronics.jpeg';
const About = () => {
    return (
        <div className="about">
           <h1 className="about-us-title">About Us</h1>
           <hr />
            {/* <h2>About Us</h2> */}
            <p className='text'>Welcome to FakeStore! We provide high-quality products at affordable prices. Our mission is to make online shopping easy and enjoyable for everyone.</p>
         <h1 className="about-us-products-title">Our Products</h1>
                <div className="about-us-products">
         <div className="about-us-product-card">
           <img src={menclothingimage}  alt="Men's Clothing" /> 
          <p>Men's Clothing</p>
         </div>
        
         <div className="about-us-product-card">
           <img src={womensclothimage}  alt="Women's Clothing" /> 
          <p>Women's Clothing</p>
         </div>
         <div className="about-us-product-card">
           <img src={jewellery}  alt="jewellery" /> 
          <p>jewellery</p>
         </div>
         <div className="about-us-product-card">
           <img src={Electronics}  alt="Electronics" /> 
          <p>Electronic's</p>
         </div>
         </div>
         <h2>Made with ❤️  by shankar bandi</h2>
           </div>

          
      
    );
};

export default About;
