import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SlideProducts from '../components/slideProducts/SlideProducts';

const CategoryPage = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/category/${slug}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      });
  }, [slug]);

  const categoryName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  if (loading) {
    return (
      <div className='loading-container'>
        <i className='fa fa-spinner fa-4x loading-spinner'></i>
        <p className='loading-text'>Loading {categoryName}...</p>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <SlideProducts 
        title={categoryName} 
        categorySlug={slug} 
        allProducts={products} 
      />
    </div>
  );
};

export default CategoryPage;
