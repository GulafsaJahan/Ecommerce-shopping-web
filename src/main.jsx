// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { CartProvider } from "./CartContext";

// ReactDOM.render(
//   <CartProvider>
//     <App />
//   </CartProvider>,
//   document.getElementById("root")
// );

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { CartProvider } from './Context/CartContext'; // Import CartProvider
import {CartProvider} from './CartContext';

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
);
