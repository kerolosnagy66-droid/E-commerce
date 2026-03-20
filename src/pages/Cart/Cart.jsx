import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import './Cart.css';

const Cart = () => {
    const { cart, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
    if (cart.length === 0) {
        return (
            <div className="cart-empty container">
                <h2>Your Cart is Empty</h2>
                <p>Looks like you haven't added anything to your cart yet.</p>
                <Link to="/" className="shop-now-btn">Shop Now</Link>
            </div>
        );
    }

    return (
        <div className="cart-page container">
            <h1>Shopping Cart ({totalItems} items)</h1>
            <div className="cart-container">
                <div className="cart-items">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="item-img">
                                <img src={item.thumbnail} alt={item.title} />
                            </div>
                            <div className="item-details">
                                <Link to={`/productDetails/${item.id}`}>
                                    <h3>{item.title}</h3>
                                </Link>
                                <p className="item-price">${item.price}</p>
                            </div>
                            <div className="item-quantity">
                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                    <FaMinus />
                                </button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                    <FaPlus />
                                </button>
                            </div>
                            <div className="item-total">
                                <p>${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                <FaTrash />
                            </button>
                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <h3>Order Summary</h3>
                    <div className="summary-row">
                        <span>Items:</span>
                        <span>{totalItems}</span>
                    </div>
                    <div className="summary-row total">
                        <span>Total:</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <button className="checkout-btn">Proceed to Checkout</button>
                    <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
