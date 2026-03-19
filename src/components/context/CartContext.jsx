import React, { createContext, useState, useEffect, useContext, useMemo } from 'react'
import { toast } from 'react-hot-toast';

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children, isLoggedIn }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const totalItems = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    }, [cart]);

    const totalPrice = useMemo(() => {
        return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }, [cart]);

    const addToCart = (product, quantity = 1) => {
        if (!isLoggedIn) {
            toast.error('Please login to add items to your cart!');
            return;
        }
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
            toast.success(`${product.title} quantity updated!`);
        } else {
            toast.success(`${product.title} added to cart!`);
        }

        setCart(prevCart => {
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity }];
            }
        });
    };


    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            setCart(prevCart =>
                prevCart.map(item =>
                    item.id === productId ? { ...item, quantity } : item
                )
            );
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                totalItems,
                totalPrice,
                isLoggedIn,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;