import { AboutUs } from "./sections/about-us";
import styles from "./home-page.module.scss";
import { ViewProducts } from "./sections/view-products/view-products";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../store/productsSlice";
import { Loader } from "../../components/common/loader";

const HomePage = () => {

  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.loading);
  const error = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  console.log(products)



  return (
    <div className={styles.container}>
      <AboutUs />
      <ViewProducts />
    </div>
  );
};

export default HomePage;
