import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import './Checkout.css';

const Checkout = () => {
    const { cart, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zipCode: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success(`Order placed successfully! Thank you, ${formData.firstName}.`);
        clearCart();
        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    if (cart.length === 0) {
        return (
            <div className="checkout-empty container">
                <h2>Your cart is empty</h2>
                <button onClick={() => navigate('/shop')} className="back-btn">Go to Shop</button>
            </div>
        );
    }

    return (
        <div className="checkout-page container">
            <h1>Checkout</h1>
            <div className="checkout-container">
                <form onSubmit={handleSubmit} className="checkout-form">
                    <section className="form-section">
                        <h3>Contact Information</h3>
                        <div className="input-row">
                            <input type="text" name="firstName" placeholder="First Name" required onChange={handleInputChange} />
                            <input type="text" name="lastName" placeholder="Last Name" required onChange={handleInputChange} />
                        </div>
                        <input type="email" name="email" placeholder="Email Address" required onChange={handleInputChange} />
                    </section>

                    <section className="form-section">
                        <h3>Shipping Details</h3>
                        <input type="text" name="address" placeholder="Street Address" required onChange={handleInputChange} />
                        <div className="input-row">
                            <input type="text" name="city" placeholder="City" required onChange={handleInputChange} />
                            <input type="text" name="zipCode" placeholder="ZIP Code" required onChange={handleInputChange} />
                        </div>
                    </section>

                    <section className="form-section">
                        <h3>Payment Method</h3>
                        <div className="credit-card-info">
                            <input type="text" name="cardNumber" placeholder="Card Number (0000 0000 0000 0000)" required onChange={handleInputChange} />
                            <div className="input-row">
                                <input type="text" name="expiryDate" placeholder="MM/YY" required onChange={handleInputChange} />
                                <input type="text" name="cvv" placeholder="CVV" required onChange={handleInputChange} />
                            </div>
                        </div>
                    </section>

                    <button type="submit" className="place-order-btn">Place Order - ${totalPrice.toFixed(2)}</button>
                </form>

                <div className="order-summary">
                    <h3>Order Summary</h3>
                    <div className="summary-items">
                        {cart.map(item => (
                            <div key={item.id} className="summary-item">
                                <span>{item.title} (x{item.quantity})</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="summary-total">
                        <span>Total:</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
