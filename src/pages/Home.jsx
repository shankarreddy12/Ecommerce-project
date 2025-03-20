// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import ProductCard from '../components/ProductCard';

// // const Home = () => {
// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     // Fetch products from FakeStore API
// //     console.log('Fetching products...'); // Debugging
// //     axios.get('https://fakestoreapi.com/products')
// //       .then((response) => {
// //         console.log('Products fetched:', response.data); // Debugging
// //         setProducts(response.data);
// //         setLoading(false);
// //       })
// //       .catch((error) => {
// //         console.error('Error fetching products:', error);
// //         setError('Error fetching products');
// //         setLoading(false);
// //       });
// //   }, []);

// //   return (
// //     <div>
// //       <h1>Welcome to Our Store</h1>
// //       {loading && <p>Loading...</p>}
// //       {error && <p>{error}</p>}
// //       <div className="product-list">
// //         {products.map((product) => (
// //           <ProductCard key={product.id} product={product} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;
// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to Our Store</h1>
//       <p>Explore our amazing products!</p>
//     </div>
//   );
// };

// export default Home;   


// import React from 'react';

// const Home = () => {
//   return (
//     <section className="banner">
//       <img src="./assets/main.png.jpg" alt="New Season Arrivals" className="banner-image" />
//       <div className="banner-content">
//         <h2>New Season Arrivals</h2>
//         <p>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
//       </div>
//     </section>
//   );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';
import './Home.css';


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
          {/* <img src={banner} /> */}
          <div className='banner'>
          <h1>NEW SEASON ARRIVALS</h1>
          <h3>this is a wider card with supporting text below as a natural lead-in to additional content.
            this content is a little bit longer </h3>
          </div>
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