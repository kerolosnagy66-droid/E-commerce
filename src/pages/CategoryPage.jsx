import React from 'react';
import { useParams } from 'react-router-dom';
import SlideProducts from '../components/slideProducts/SlideProducts';
import Loading from '../components/Loading';
import useFetch from '../hooks/useFetch';

const CategoryPage = () => {
  const { slug } = useParams();
  const { data, loading } = useFetch(`https://dummyjson.com/products/category/${slug}`);
  const products = data?.products || [];

  const categoryName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  if (loading) {
    return <Loading text={`Loading ${categoryName}...`} />;
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
