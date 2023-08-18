import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import ProductProvider from './Context/ProductContext'
import SlidebarProvider from './Context/SlidebarContext';
import CartProvider from './Context/CartContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SlidebarProvider>
    <CartProvider>
  <ProductProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ProductProvider>
  </CartProvider>
  </SlidebarProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
