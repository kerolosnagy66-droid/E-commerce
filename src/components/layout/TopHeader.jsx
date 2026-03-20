import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";
import { useCart } from '../../context/CartContext';
import { useFavourite } from '../../context/favouriteContext';

import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TopHeader = () => {
  const { isLoggedIn } = useAuth();
  const { totalItems } = useCart();
  const { favourites } = useFavourite();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/shop?q=${encodeURIComponent(searchTerm.trim())}`);
    setSearchTerm('');
  };

  return (
    <div className='top-header' >
      <div className='container'>
        <Link className='logo' to="/">  <img src={logo} alt="logo" /></Link>
        <form onSubmit={handleSearch} className='search-box'>
          <input 
            type="text" 
            placeholder='Search...' 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type='submit'> <FaSearch/></button>
        </form>
        <div className="header-icon">
          {isLoggedIn && (
            <>
              <Link to="/favourite" className="icon-wrapper">
                <FiHeart/>
                <span className='count'>{favourites.length}</span>
              </Link>
              <Link to="/cart" className="icon-wrapper">
                <BsCart4/>
                <span className='count'>{totalItems}</span> 
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default TopHeader