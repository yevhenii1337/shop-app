import { FC } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import styles from "./footer.module.scss";

export const Footer: FC = () => {
  return (
    <footer>
      <div className={styles.socialIcons}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};
