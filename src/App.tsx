import { FC, useEffect } from "react";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";
import { Footer } from "./components/layout/footer";
import { SideCart } from "./components/side-cart";
import { Header } from "./components/layout/header/header";
import { Navigation } from "./navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { fetchProducts } from "./store/productsSlice";

export const App: FC = () => {
  const { theme } = useTheme();

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Header />
      <SideCart />
      <Navigation />
      <Footer />
    </div>
  );
};
