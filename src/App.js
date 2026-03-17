import { Routes, Route } from 'react-router-dom';
import './App.css';
import TopHeader from './components/header/TopHeader';
import Navbar from './components/header/Navbar';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Register from './components/register/Register';
import ProductDetails from './pages/ProductDetails';
import { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import CategoryPage from './pages/CategoryPage';
import { Shop, Blog, About, Contact } from './pages/PlaceholderPages';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  const [categories, setCategories] = useState([]);
 

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  const handleSetIsLoggedIn = (value) => {
    localStorage.setItem('isLoggedIn', value);
    setIsLoggedIn(value);
  };

  const logOut = () => {
    handleSetIsLoggedIn(false);
  };

  return (
    <>
    
    <Toaster position="top-center" reverseOrder={false} />
    <div className="app"> 
      <header>
        <TopHeader />
        <Navbar isLoggedIn={isLoggedIn} logOut={logOut} categories={categories} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home categories={categories} />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login setIsLoggedIn={handleSetIsLoggedIn} />} />
          <Route path="/register" element={<Register setIsLoggedIn={handleSetIsLoggedIn} />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    </>
  );
}

export default App;
