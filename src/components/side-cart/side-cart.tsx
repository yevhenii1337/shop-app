import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  selectCartProducts,
} from "../../store/cartSlice";
import { RootState } from "../../store/store";
import { FiX } from "react-icons/fi";
import styles from "./side-cart.module.scss";
import classNames from "classnames";

export const SideCart: React.FC = () => {
  const isSideCartOpen = useSelector(
    (state: RootState) => state.layout.isSideCartOpen
  );

  const cartProducts = useSelector(selectCartProducts);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartTotal = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
console.log(isSideCartOpen)
  return (
    <div
      className={classNames(styles.sideCart, { [styles.open]: isSideCartOpen })}
    >
      <div className="side-cart">
        <button className="close-btn" onClick={handleClearCart}>
          <FiX />
        </button>
        <h2>Cart</h2>
        {cartProducts.length === 0 ? (
          <div className="empty-cart">Cart is empty</div>
        ) : (
          <>
            <div className={styles.cartItems}>
              {cartProducts.map((product) => (
                <div key={product.id} className="cart-item">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-total">Total: ${cartTotal}</div>
            <button className="checkout-btn" onClick={handleClearCart}>
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};
