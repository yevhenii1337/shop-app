import { FC } from "react";
import { Link as CommonLink, LinkProps } from "react-router-dom";
import styles from "./link.module.scss";

export const Link: FC<LinkProps> = ({ children, ...otherProps }) => {
  return (
    <CommonLink {...otherProps} className={styles.link}>
      {children}
    </CommonLink>
  );
};
