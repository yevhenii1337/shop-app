import { FC, useMemo } from "react";
import { RootState } from "../../../../store/store";
import { useSelector } from "react-redux";

import styles from "./view-products.module.scss";
import { ProductCard } from "../../../../components/product-card";

export const ViewProducts: FC = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const lastFourProducts = useMemo(
    () => products.slice(Math.max(products.length - 4, 0)),
    [products]
  );
  return (
    <div className={styles.container}>
      {lastFourProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
