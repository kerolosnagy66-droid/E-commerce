import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Loading from '../components/Loading'
import { FaHeart, FaCartPlus } from "react-icons/fa6";
import { IoIosShareAlt } from "react-icons/io";
import './ProductDetails.css';

function ProductDetails() {
    const { id } = useParams();
    const { data: product, loading, error } = useFetch(`https://dummyjson.com/products/${id}`);
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        if (product && product.thumbnail) {
            setSelectedImage(product.thumbnail);
        }
    }, [product]);

    if (loading) return <Loading text="Loading product details..." />;
    if (error) return <div className="container">Error: {error}</div>;
    if (!product) return <div className="container">Product not found.</div>;
  return (
    <>  
    <div className="product-details-page">
        <div className='container'>
            <div className="product-details">
                <div className="product-img-group">
                    <div className="product-img-box">
                        <img src={selectedImage} alt={product.title} />
                    </div>
                    {product.images && product.images.length > 0 && (
                        <div className="product-thumbnails">
                            {[product.thumbnail, ...product.images.filter(img => img !== product.thumbnail)].map((img, index) => (
                                <div 
                                    key={index} 
                                    className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <img src={img} alt={`Thumbnail ${index}`} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="product-info">
                    <h2>{product.title}</h2>
                    <p className="product-category">{product.category}</p>
                    <div className="product-price">
                        <span className="price-value">${product.price}</span>
                        {product.discountPercentage && (
                            <span className="discount">-{product.discountPercentage}% OFF</span>
                        )}
                    </div>
                    <div className="product-actions">
                        <button className="add-to-cart-btn">
                            <FaCartPlus /> Add to Cart
                        </button>
                        <button className="fav-btn"><FaHeart /></button>
                        <button className="share-btn"><IoIosShareAlt /></button>
                    </div>
                    <div className="product-description">
                        <h3>Product Description</h3>
                        <p>{product.description}</p>
                    </div>
                    {product.warrantyInformation && (
                        <div className="product-specifications">
                            <h3>Specifications</h3>
                            <ul>
                                <li><strong>Warranty:</strong> {product.warrantyInformation}</li>
                                <li><strong>Shipping:</strong> {product.shippingInformation}</li>
                                <li><strong>Return Policy:</strong> {product.returnPolicy}</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetails
