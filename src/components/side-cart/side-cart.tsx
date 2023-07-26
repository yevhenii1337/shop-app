import React, { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  selectCartProducts,
  decreaseQuantity,
  increaseQuantity,
} from "../../store/cartSlice";
import { RootState } from "../../store/store";
import { FiMinus, FiPlus, FiX } from "react-icons/fi";
import styles from "./side-cart.module.scss";
import classNames from "classnames";
import { toggleSideCart } from "../../store/layoutSlice";
import { useSnackbar } from "react-simple-snackbar";

export const SideCart: React.FC = () => {
  const [openSnackbar] = useSnackbar({
    position: "top-center",
  });
  const isSideCartOpen = useSelector(
    (state: RootState) => state.layout.isSideCartOpen
  );

  const cartProducts = useSelector(selectCartProducts);
  const dispatch = useDispatch();

  const handleRemoveFromCart = useCallback((productId: number) => {
    dispatch(removeFromCart(productId));
  }, []);

  const handleToggleSideCart = useCallback(() => {
    dispatch(toggleSideCart());
  }, []);

  const handleClearCart = useCallback(() => {
    dispatch(clearCart());
  }, []);

  const handleCheckout = useCallback(() => {
    handleClearCart();
    openSnackbar("You bought a products!");
  }, []);

  const handleIncreaseQuantity = useCallback((productId: number) => {
    dispatch(increaseQuantity(productId));
  }, []);

  const handleDecreaseQuantity = useCallback((productId: number) => {
    dispatch(decreaseQuantity(productId));
  }, []);

  const cartTotal = useMemo(
    () =>
      cartProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      ),
    [cartProducts]
  );

  return (
    <div
      className={classNames(styles.sideCart, { [styles.open]: isSideCartOpen })}
    >
      <div style={{ width: "100%" }}>
        <button className={styles.closeBtn} onClick={handleToggleSideCart}>
          <FiX />
        </button>
        <h2>Cart</h2>
        {cartProducts.length === 0 ? (
          <div className={styles.emtyCard}>Cart is empty</div>
        ) : (
          <>
            <div className={styles.cartItems}>
              {cartProducts.map((product) => (
                <div key={product.id} className={styles.cartItem}>
                  <div style={{ width: "100%" }}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className={styles.cartItemImage}
                    />

                    <div className={styles.cartItemDerails}>
                      <h3>{product.title}</h3>
                      <p>Price: ${product.price}</p>
                      <p>Quantity: {product.quantity}</p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <div className={styles.quantitySelector}>
                      <button
                        className={styles.quantityBtn}
                        onClick={() => handleDecreaseQuantity(product.id)}
                      >
                        <FiMinus />
                      </button>
                      <span className={styles.quantity}>
                        {product.quantity}
                      </span>
                      <button
                        className={styles.quantityBtn}
                        onClick={() => handleIncreaseQuantity(product.id)}
                      >
                        <FiPlus />
                      </button>
                    </div>
                    <button
                      className={styles.removeBtn}
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.cartTotal}>Total: ${cartTotal}</div>
            <button className={styles.checkoutBtn} onClick={handleCheckout}>
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};
