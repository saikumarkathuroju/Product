import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import './App.css';

const productsData = [
  { id: 1, name: "Handdrum", price: 10.00, image: "/images/Handdrum.jpeg" },
  { id: 2, name: "Flute", price: 15.00, image: "/images/Flute.jpeg" },
  { id: 3, name: "Tabala", price: 20.00, image: "/images/Tabala.jpeg" },
  { id: 4, name: "Clarinet", price: 30.00, image: "/images/Clarinet.jpeg" },
  { id: 5, name: "Saxophone", price: 50.00, image: "/images/Saxophone.jpeg" },
  { id: 6, name: "Guitar", price: 75.00, image: "/images/Guitar.jpeg" }
];

function App() {
  const [products, setProducts] = useState([]);
  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const convertCurrency = (price, toCurrency) => {
    const exchangeRate = { USD: 1, EUR: 0.84, INR: 84 };
    return (price * exchangeRate[toCurrency]).toFixed(2);
  };

  return (
    <div className="App">
      <header>
        <h1>Product Listing</h1>
        <div>
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
          </select>
        </div>
      </header>
      <ProductList products={products} currency={currency} convertCurrency={convertCurrency} />
    </div>
  );
}

export default App;
