import { Routes, Route } from "react-router-dom";
import { FC, Suspense } from "react";
import { MainPageAsync } from "../pages/MainPage/MainPage.async";
import { ProductsPageAsync } from "../pages/products/products.async";
import ProductDetail from "../pages/ProductDetail";

export const Navigation: FC = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path={"/products"} element={<ProductsPageAsync />} />
        <Route path={"/"} element={<MainPageAsync />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </Suspense>
  );
};
