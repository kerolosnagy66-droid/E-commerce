import React, { useState, useMemo, useEffect } from 'react';
import './Shop.css';
import { IoIosSearch } from 'react-icons/io';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/common/Loading';
import 'swiper/css';
import '../../components/Home/SlideProducts.css';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfStroke, FaHeart, FaCartPlus, FaCheck } from "react-icons/fa6";
import { IoIosShareAlt } from "react-icons/io";
import { useCart } from '../../context/CartContext';
import { useFavourite } from '../../context/favouriteContext';
import { toast } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

const Shop = ({ categories }) => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('q') || '';
  
  const { data, loading, error } = useFetch('https://dummyjson.com/products?limit=100');
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const q = searchParams.get('q');
    if (q !== null) {
      setSearchTerm(q);
      window.scrollTo(0, 0);
    }
  }, [searchParams]);
  const { addToCart, cart, isLoggedIn } = useCart();
  const { addToFavourite, favourites } = useFavourite();

  const products = useMemo(() => data?.products || [], [data]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.brand?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  const handleShare = (product) => {
    const url = `${window.location.origin}/productDetails/${product.id}`;
    navigator.clipboard.writeText(url).then(() => {
      toast.success('Link copied to clipboard!');
    });
  };

  if (loading) return <Loading text="Taking you to the store..." />;
  if (error) return <div className="container error-msg">Failed to load shop.</div>;

  return (
    <div className="shop-page">
      <div className="shop-hero">
        <div className="container">
          <h1>Discover Latest Tech</h1>
          <p>Explore our premium collection of innovative gadgets and electronics.</p>
        </div>
      </div>

      <div className="container">
        <div className="shop-controls">
          <div className="search-bar">
            <IoIosSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search products, brands..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="category-filters">
            <button 
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Products
            </button>
            {categories.slice(0, 8).map(cat => (
              <button 
                key={cat.slug}
                className={`filter-btn ${selectedCategory === cat.slug ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.slug)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="shop-results-info">
            <p>Showing {filteredProducts.length} results</p>
        </div>

        <div className="shop-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-img-box">
                  <Link to={`/productDetails/${product.id}`}>
                    {cart.some(item => item.id === product.id) && (
                      <div className="in-cart-badge"><FaCheck /></div>
                    )}
                    <img src={product.thumbnail} alt={product.title} className="product-img" />
                  </Link>
                </div>
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <p className="price">${product.price}</p>
                  <div className="product-rating">
                    <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfStroke/>
                  </div>
                  <div className="product-buttons">
                    {isLoggedIn ? (
                      <>
                        <button 
                          className={`add-to-cart-btn ${cart.some(item => item.id === product.id) ? 'active' : ''}`} 
                          onClick={() => addToCart(product)}
                        >
                          {cart.some(item => item.id === product.id) ? <FaCheck /> : <FaCartPlus />}
                        </button>
                        <button 
                          className={`add-to-cart-btn ${favourites.some(item => item.id === product.id) ? 'active' : ''}`} 
                          onClick={() => addToFavourite(product)}
                        >
                          <FaHeart />
                        </button>
                      </>
                    ) : (
                      <Link to="/login" className="login-to-add">Login to shop</Link>
                    )}
                    <button className="share-btn" onClick={() => handleShare(product)}>
                      <IoIosShareAlt/>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <h3>No products found</h3>
              <p>Try adjusting your search or category filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
