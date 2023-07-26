import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import styles from './logo.module.scss'

export const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <FiShoppingCart className={styles.logo_icon} />
      <span className={styles.logo_text}>My Shop</span>
    </div>
  );
};

