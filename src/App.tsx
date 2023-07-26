import { FC } from "react";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";
import { Footer } from "./components/layout/footer";
import { SideCart } from "./components/side-cart";
import { Header } from "./components/layout/header/header";
import { Navigation } from "./navigation";

export const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Header />
      <SideCart />
      <Navigation />
      <Footer />
    </div>
  );
};
