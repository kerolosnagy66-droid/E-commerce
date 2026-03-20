import { Routes, Route } from 'react-router-dom';
import './assets/styles/App.css';
import TopHeader from './components/layout/TopHeader';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/layout/Footer';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import CategoryPage from './pages/Categories/CategoryPage';
import { Shop, Blog } from './pages/PlaceholderPages';
import Cart from './pages/Cart/Cart';
import Favourite from './pages/Favourite/Favourite';
import ScrollToTop from './components/common/ScrollToTop';
import ProtectedRoute from './components/common/ProtectedRoute';
import AboutUs from './pages/About/AboutUs';
import ContactUs from './pages/Contact/ContactUs';

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="app">
        <header>
          <TopHeader />
          <Navbar categories={categories} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home categories={categories} />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route
              path="/favourite"
              element={
                <ProtectedRoute>
                  <Favourite />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
