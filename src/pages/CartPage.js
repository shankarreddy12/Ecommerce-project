// import React from 'react';
// // import Cart from '../components/Cart/Cart';
// import Cart from './Cart';

// const CartPage = () => {
//     // Example cart items (replace with actual cart state)
//     const cartItems = [
//         {
//             id: 1,
//             title: 'Product 1',
//             price: 10.99,
//             quantity: 2,
//             image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
//         },
//         {
//             id: 2,
//             title: 'Product 2',
//             price: 15.99,
//             quantity: 1,
//             image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
//         },
//     ];

//     const removeFromCart = (id) => {
//         console.log(`Remove product with id: ${id}`);
//         // Implement remove functionality
//     };

//     return (
//         <div>
//             <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
//         </div>
//     );
// };

// export default CartPage;





import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import './CartPage.css';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h1> Cart</h1>
            <hr />
            {cart.length === 0 ? (
                <div className='continue-shopping-container'>
                <p>Your Cart is Empty.</p>
                <Link to="/Products" className="continue-shopping-btn">← Continue Shopping</Link>
                <h2>Made with ❤️  by shankar bandi</h2>
                </div>
            ) : (
                <div>
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} />
                            <div>
                                <h3>{item.title}</h3>
                                <p>${item.price} x {item.quantity}</p>
                                <div className="quantity-control">
                                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                                </div>
                                <button className='remove-btn' onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <div className="total-price">
                        <h3>Total: ${totalPrice.toFixed(2)}</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;