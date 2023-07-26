import { AboutUs } from "./sections/about-us";
import styles from "./home-page.module.scss";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <AboutUs />
    </div>
  );
};

export default HomePage;
