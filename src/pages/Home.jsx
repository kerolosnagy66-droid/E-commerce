import React from 'react'
import HeroSlider from '../components/heroslider/HeroSlider'
import SlideProducts from '../components/slideProducts/SlideProducts'
import Loading from '../components/Loading'
import useFetch from '../hooks/useFetch'

function Home({ categories }) {
    const { data, loading, error } = useFetch('https://dummyjson.com/products?limit=200');
    const products = data?.products || [];
    
    const preferredCategories = [
        { name: "Smart Phones", slug: "smartphones" },
        { name: "Laptops", slug: "laptops" },
        { name: "Tablets", slug: "tablets" },
        { name: "Mobile Accessories", slug: "mobile-accessories" },
        { name: "Men's Shoes", slug: "mens-shoes" },
        { name: "Women's Bags", slug: "womens-bags" },
        { name: "Sunglasses", slug: "sunglasses" },
        { name: "Men's Watches", slug: "mens-watches" },
        { name: "Women's Jewelry", slug: "womens-jewellery" },
        { name: "Fragrances", slug: "fragrances" },
        { name: "Makeup", slug: "beauty" }
    ];

    const displayCategories = preferredCategories.filter(pref => 
        categories.some(cat => cat.slug === pref.slug)
    );
    
    
    if (loading) {
        return <Loading text="Fetching the best products for you..." />;
    }
    
    if (error) {
        return <div className='loading-container' style={{color: 'red'}}>
            <p>Error loading products: {error.message}</p>
        </div>;
    }
  return (
    <>
    <div className='container'>
    < HeroSlider/>
    {displayCategories.map((category, index) => (
        <SlideProducts 
            key={category.slug} 
            title={category.name} 
            categorySlug={category.slug} 
            allProducts={products} 
        />
    ))}
    
    </div>
    </>
  )
}

export default Home