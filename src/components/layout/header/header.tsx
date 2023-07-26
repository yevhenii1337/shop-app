import * as React from "react";
import styles from "./header.module.scss";
import { Navbar } from "./navbar";
import { Logo } from "../logo";
import { useDispatch } from "react-redux";
import { toggleSideCart } from "../../../store/layoutSlice";
import { ThemeSwitch } from "../../common/theme-switch";
import { FaShoppingCart } from "react-icons/fa";

export const Header: React.FC = () => {
  const dispatch = useDispatch();

  const handleToggleSideCart = React.useCallback(() => {
    dispatch(toggleSideCart());
  }, [])

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
