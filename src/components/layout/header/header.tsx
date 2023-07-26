import * as React from "react";
import styles from "./header.module.scss";
import { Navbar } from "./navbar";
import { useTheme } from "../../../theme/useTheme";
import { Logo } from "../logo";
import { useSelector, useDispatch } from "react-redux";
import { toggleSideCart } from "../../../store/layoutSlice";
import { RootState } from "../../../store/store";
import { ThemeSwitch } from "../theme-switch";
import { FaShoppingCart } from "react-icons/fa";

export const Header = () => {
  const { toggleTheme } = useTheme();
  const isSideCartOpen = useSelector(
    (state: RootState) => state.layout.isSideCartOpen
  );
  const dispatch = useDispatch();

  const handleToggleSideCart = () => {
    dispatch(toggleSideCart()); // Використовуйте action creator для зміни стану
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
      <Logo />
      <ThemeSwitch />
      </div>
      <Navbar />
      <button className={styles.openCartBtn} onClick={handleToggleSideCart}>
        <FaShoppingCart className={styles.cartIcon} />
      </button>
    </header>
  );
};
