// import React from 'react';
// // import './ProductCard.css';
// // import './ProductCard/ProductCard.css';
// import './ProductCard.css';

// const ProductCard = ({ product }) => {
//     return (
//         <div className="product-card">
//             <img src={product.image} alt={product.title} />
//             <h3>{product.title}</h3>
//             <p>${product.price}</p>
//             <button>Add to Cart</button>
//         </div>
//     );
// };

// export default ProductCard;



import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
// import { CartContext } from '../CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            {/* <p>{ product.description }</p> */}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;