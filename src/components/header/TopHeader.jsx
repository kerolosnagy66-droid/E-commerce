import React from 'react'
import './Header.css'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";
import { useCart } from '../context/CartContext';
import { useFavourite } from '../context/favouriteContext';

const TopHeader = ({ isLoggedIn }) => {
  const { totalItems } = useCart();
  const { favourites } = useFavourite();

  return (
    <div className='top-header' >
      <div className='container'>
        <Link className='logo' to="/">  <img src={logo} alt="logo" /></Link>
        <form action="" className='search-box'>
          <input type="text" placeholder='Search...' />
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