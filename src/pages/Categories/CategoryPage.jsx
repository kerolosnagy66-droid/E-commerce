import React from 'react';
import { useParams } from 'react-router-dom';
import SlideProducts from '../../components/Home/SlideProducts';

const CategoryPage = ({allProducts}) => {
  const { slug } = useParams();
  const categoryName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <SlideProducts 
        title={categoryName} 
        categorySlug={slug} 
        allProducts={allProducts} 
      />
    </div>
  );
};

export default CategoryPage;
