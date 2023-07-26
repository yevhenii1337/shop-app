import React from 'react';
import { Link } from 'react-router-dom';
import styles from './product-card.module.scss'

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
  }
  
  interface ProductCardProps {
    product: Product;
  }

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className={styles['product-link']}>
    <div className={styles['product-card']}>
      <img src={product.image} alt={product.title} className={styles['product-image']} />
      <h3 className={styles['product-title']}>{product.title}</h3>
      <p className={styles['product-price']}>${product.price}</p>
    </div>
  </Link>
  );
};