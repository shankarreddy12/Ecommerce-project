import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import ProductCard from '../components/ProductCard/ProductCard';
import ProductCard from '../ProductCard/ProductCard';
import  './Products.css'

const Home = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProducts(response.data);
                setFilteredProducts(response.data);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleFilter = (category) => {
        if (category === 'all') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.category === category);
            setFilteredProducts(filtered);
        }
    };

    return (
        <section className="home">
            <h2>Latest Products</h2>
            <div className="filter-buttons">
                <button onClick={() => handleFilter('all')}>All</button>
                <button onClick={() => handleFilter("men's clothing")}>Men's Clothing</button>
                <button onClick={() => handleFilter("women's clothing")}>Women's Clothing</button>
                <button onClick={() => handleFilter('jewelery')}>Jewelery</button>
                <button onClick={() => handleFilter('electronics')}>Electronics</button>
            </div>
            <div className="product-grid">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default Home;
