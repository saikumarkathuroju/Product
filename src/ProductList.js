import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, currency, convertCurrency }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} currency={currency} convertCurrency={convertCurrency} />
      ))}
    </div>
  );
}

export default ProductList;
