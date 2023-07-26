

// ProductCard.tsx

import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
  }
  
  interface ProductCardProps {
    product: Product;
  }

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="product-link">
      <div className="product-card">
        <img src={product.image} alt={product.title} className="product-image" />
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;