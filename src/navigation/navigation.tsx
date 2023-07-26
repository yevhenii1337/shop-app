import { Routes, Route } from "react-router-dom";
import { FC, Suspense } from "react";
import { MainPageAsync } from "../pages/home-page/home-page.async";
import { ProductsPageAsync } from "../pages/products-page/products.async";
import { ProductPageAsync } from "../pages/product-page/product-page.async";
import { Loader } from "../components/common/loader";

export const Navigation: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={"/products"} element={<ProductsPageAsync />} />
        <Route path={"/"} element={<MainPageAsync />} />
        <Route path="/products/:productId" element={<ProductPageAsync />} />
      </Routes>
    </Suspense>
  );
};
