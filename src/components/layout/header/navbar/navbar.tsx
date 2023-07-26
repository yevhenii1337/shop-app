import { FC } from "react";
import { Link } from "../../../common/link";
import styles from "./navbar.module.scss";

export const Navbar: FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
      </div>
    </nav>
  );
};
