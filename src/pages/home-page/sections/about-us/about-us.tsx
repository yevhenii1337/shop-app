
import { FC } from 'react';
import styles from './about-us.module.scss'

export const AboutUs: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My Shop</h2>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ex a odio interdum hendrerit
        eu id lectus. Proin semper nisi eu aliquam pharetra. Proin suscipit odio ac arcu auctor, ut
        vulputate ex tempus.
      </p>
    </div>
  );
};