import { FC } from "react";
import styles from "./loader.module.scss";

export const Loader: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
    </div>
  );
};
