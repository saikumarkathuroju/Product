import React from 'react';

function ProductItem({ product, currency, convertCurrency }) {
  const convertedPrice = convertCurrency(product.price, currency);

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="price">{convertedPrice} {currency}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
