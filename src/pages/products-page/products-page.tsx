import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./products.module.scss";
import { ProductCard } from "../../components/product-card";

const Products: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);

  return (
    <div className={styles.container}>
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
