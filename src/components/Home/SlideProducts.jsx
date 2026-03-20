import React, { useMemo } from 'react'
import Products from './Products'

const localImages = require.context('../../assets/images', true, /\.(jpg|jpeg|png|webp)$/);

const SlideProducts = React.memo(({ title, categorySlug, allProducts }) => {
  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter(product => product.category === categorySlug);

    if (filtered.length === 0) {
      const allLocalImages = localImages.keys().map(path => localImages(path));
      filtered = allLocalImages.slice(0, 8).map((img, index) => ({
        id: `local-${index}`,
        thumbnail: img,
        title: `${title} ${index + 1}`,
        price: Math.floor(Math.random() * 500) + 50
      }));
    }
    return filtered;
  }, [allProducts, categorySlug, title]);

  return (
    <div className='slideProducts-wrapper'>
        <div className='row'>
            <div className='col-md-12 slideProducts'>
                <h2>{title}</h2>
                <p>New {title} collection 2026 </p>
            </div>
        </div>
        <Products title={title} productList={filteredProducts} />
    </div>
  )
});

export default SlideProducts