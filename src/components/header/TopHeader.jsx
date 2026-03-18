import React from 'react'
import './Header.css'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";
import { useCart } from '../context/CartContext';

const TopHeader = () => {
  const { totalItems } = useCart();

  return (
    <div className='top-header' >
      <div className='container'>
        <Link className='logo' to="/">  <img src={logo} alt="logo" /></Link>
        <form action="" className='search-box'>
          <input type="text" placeholder='Search...' />
          <button type='submit'> <FaSearch/></button>
        </form>
        <div className="header-icon">
          <div className="icon-wrapper">
            <FiHeart/>
            <span className='count'>0</span>
          </div>
          <Link to="/cart" className="icon-wrapper">
            <BsCart4/>
            <span className='count'>{totalItems}</span> 
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopHeader