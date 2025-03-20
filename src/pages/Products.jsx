// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ProductCard from '../components/ProductCard';

// const Products = ({ addToCart }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products')
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching products:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Products</h1>
//       <div className="product-list">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} addToCart={addToCart} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;   



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ProductCard from '../components/ProductCard';

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [category, setCategory] = useState("all");

//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products')
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching products:', error);
//       });
//   }, []);

//   const filteredProducts = category === "all" ? products : products.filter((product) => product.category === category);
//    const styles={
//     display:'grid',
//     gridTemplateColumns:'repeat(3,1fr)',
     

// }
//   return (
//     <section className="latest-products">
//       <h2>Latest Products</h2>
//       <hr />
//       <div className="filter-buttons" >
//         <button onClick={() => setCategory("all")}>All</button>
//         <button onClick={() => setCategory("men's clothing")}>Men's Clothing</button>
//         <button onClick={() => setCategory("women's clothing")}>Women's Clothing</button>
//         <button onClick={() => setCategory("jewelery")}>Jewelery</button>
//         <button onClick={() => setCategory("electronics")}>Electronics</button>
//       </div>
//       <div className="product-grid" style={styles}>
//         {filteredProducts.map((product) => (  
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </section> 
//   );
// };

// export default Products;





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