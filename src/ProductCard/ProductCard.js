
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import './ProductCard.css';
import { NotificationsContext } from '../NotificationsContext';
const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const { addNotification } = useContext(NotificationsContext);
const handleAddToCart = () => {
    addToCart(product);
    addNotification({
        message: `${product.title} added to cart`,
        type: 'success'
    });
};

return (
    <div className="product-card">
        <img src={product.image} alt={product.title} />
             <h3>{product.title}</h3>
             <p>${product.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
);
};
export default ProductCard;
