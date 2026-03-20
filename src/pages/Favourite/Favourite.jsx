import React from 'react';
import { useFavourite } from '../../context/favouriteContext';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import './Favourite.css';

const Favourite = () => {
    const { favourites, removeFromFavourite } = useFavourite();

    if (favourites.length === 0) {
        return (
            <div className="favourite-empty container">
                <h2>Your Wishlist is Empty</h2>
                <p>Looks like you haven't added anything to your favorites yet.</p>
                <Link to="/" className="shop-now-btn">Shop Now</Link>
            </div>
        );
    }

    return (
        <div className="favourite-page container">
            <h1>My Wishlist ({favourites.length} items)</h1>
            <div className="favourite-container">
                <div className="favourite-items">
                    {favourites.map((item) => (
                        <div key={item.id} className="favourite-item">
                            <div className="item-img">
                                <img src={item.thumbnail} alt={item.title} />
                            </div>
                            <div className="item-details">
                                <Link to={`/productDetails/${item.id}`}>
                                    <h3>{item.title}</h3>
                                </Link>
                                <p className="item-price">${item.price}</p>
                            </div>
                            <button className="remove-btn" onClick={() => removeFromFavourite(item.id)}>
                                <FaTrash />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Favourite;

