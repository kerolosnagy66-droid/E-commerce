import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './SlideProducts.css';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaStarHalfStroke, FaHeart, FaCartPlus } from "react-icons/fa6";
import { IoIosShareAlt } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useFavourite } from '../context/favouriteContext';
import { FaCheck } from "react-icons/fa6";

const Products = React.memo(({ title, productList }) => {
  const { addToCart, cart, isLoggedIn } = useCart();
  const { addToFavourite, favourites } = useFavourite();
  const { safeTitle, paginationClass } = useMemo(() => {
    const st = title?.replace(/[^a-zA-Z0-9]/g, '') || 'default';
    return {
      safeTitle: st,
      paginationClass: `pagination-${st}`
    };
  }, [title]);

  if (!productList || productList.length === 0) {
    return <div className="no-products">No products found for this category.</div>;
  }
  return (
    <div className="slideProducts-slider-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
            clickable: true,
            el: `.${paginationClass}`,
        }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="productSwiper"
      >
        {productList.map((product) => (
          <SwiperSlide key={`${safeTitle}-${product.id}`}>
            <div className="product-card">
              <div className="product-img-box">
                <Link to={`/productDetails/${product.id}`}>
                  {cart.some(item => item.id === product.id) && (
                    <div className="in-cart-badge">
                      <FaCheck />
                    </div>
                  )}
                  <img src={product.thumbnail} alt={product.title} className="product-img" />
                </Link>
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <div className="product-rating">
                    <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfStroke/>
                </div>
                <div className="product-buttons" >
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
                      <p className="login-to-add">Login to shop</p>
                    )}
                    <button className="add-to-cart-btn"><IoIosShareAlt/></button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className={`swiper-pagination ${paginationClass}`} style={{ position: 'relative', marginTop: '20px' }}></div>
      </Swiper>
    </div>
  );
});

export default Products;
