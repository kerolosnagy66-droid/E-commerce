import React, { useEffect, useState } from 'react'
import HeroSlider from '../components/heroslider/HeroSlider'
import SlideProducts from '../components/slideProducts/SlideProducts'



function Home({ categories }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // User's preferred categories and their custom display names
    const preferredCategories = [
        { name: "Smart Phones", slug: "smartphones" },
        { name: "Laptops", slug: "laptops" },
        { name: "Tablets", slug: "tablets" },
        { name: "Accessories", slug: "mobile-accessories" },
        { name: "Shoes", slug: "mens-shoes" },
        { name: "Bags", slug: "womens-bags" },
        { name: "Glasses", slug: "sunglasses" },
        { name: "Watches", slug: "mens-watches" },
        { name: "Jewelry", slug: "womens-jewellery" },
        { name: "Perfumes", slug: "fragrances" },
        { name: "Makeup", slug: "beauty" }
    ];

    // Filter and map to use the custom names
    const displayCategories = preferredCategories.filter(pref => 
        categories.some(cat => cat.slug === pref.slug)
    );
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products?limit=200');
                const data = await response.json();
                setProducts(data.products);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);
    
    if (loading) {
        return (
            <div className='loading-container'>
                <i className='fa fa-spinner fa-4x loading-spinner'></i>
                <p className='loading-text'>Fetching the best products for you...</p>
            </div>
        );
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