import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import styles from './logo.module.scss'

export const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <span className={styles.logo_text}>Logo</span>
    </div>
  );
};

