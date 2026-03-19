import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter }  from 'react-router-dom';
import { CartProvider } from './components/context/CartContext';
import { FavouriteProvider } from './components/context/favouriteContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
    <FavouriteProvider>
    <App />
    </FavouriteProvider>
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
