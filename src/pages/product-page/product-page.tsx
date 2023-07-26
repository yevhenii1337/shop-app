import React, { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { addToCart } from "../../store/cartSlice";
import styles from "./product-page.module.scss";
import { useSnackbar } from "react-simple-snackbar";

const ProductPage: React.FC = () => {
  const [openSnackbar] = useSnackbar({
    position: "top-center",
  });
  const { productId } = useParams<{ productId: string }>();
  const product = useSelector((state: RootState) =>
    state.products.products.find((p) => p.id === parseInt(productId))
  );
  const dispatch = useDispatch();

  const handleAddToCart = useCallback(() => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    openSnackbar("Product added to cart");
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.productDetails}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.productImage}
        />
        <h3 className={styles.productTitle}>{product.title}</h3>
        <p className={styles.productPrice}>${product.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
