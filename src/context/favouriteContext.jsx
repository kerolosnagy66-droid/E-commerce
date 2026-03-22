import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

import { useAuth } from './AuthContext';

const FavouriteContext = createContext();

export const FavouriteProvider = ({ children }) => {
    const { isLoggedIn } = useAuth();
    const [favourites, setFavourites] = useState(() => {
        const savedFavourites = localStorage.getItem('favourites');
        return savedFavourites ? JSON.parse(savedFavourites) : [];
    });

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites]);

    useEffect(() => {
        if (!isLoggedIn) {
            setFavourites([]);
        }
    }, [isLoggedIn]);

    const addToFavourite = (product) => {
        if (!isLoggedIn) {
            toast.error('Please login to add items to your wishlist!');
            return;
        }
        const isExist = favourites.find((item) => item.id === product.id);
        if (isExist) {
            toast.error(`${product.title} is already in your wishlist!`);
            return;
        }
        
        toast.success(`${product.title} added to wishlist!`);
        setFavourites((prev) => [...prev, product]);
    };


    const removeFromFavourite = (productId) => {
        const product = favourites.find(item => item.id === productId);
        if (product) {
            toast.success(`${product.title} removed from wishlist!`);
        }
        setFavourites((prev) => prev.filter((item) => item.id !== productId));
    };

    return (
        <FavouriteContext.Provider value={{ favourites, isLoggedIn, addToFavourite, removeFromFavourite }}>
            {children}
        </FavouriteContext.Provider>
    );
};

export const useFavourite = () => {
    const context = useContext(FavouriteContext);
    if (!context) {
        throw new Error('useFavourite must be used within a FavouriteProvider');
    }
    return context;
};

export default FavouriteContext;