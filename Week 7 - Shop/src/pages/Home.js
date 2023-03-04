import React, { Suspense, useContext, useEffect } from "react";
import { Await, defer, useRouteLoaderData } from "react-router-dom";
import ShopContext from "../store/shop-context";

import Products from "../components/Products/Products";

const HomePage = () => {
  const { fetchedProducts: response } = useRouteLoaderData("products");
  const shopCtx = useContext(ShopContext);

  useEffect(() => {
    response.then((responseData) => {
      shopCtx.setProducts(responseData);
      shopCtx.setFilteredProducts(responseData);
      shopCtx.setCategories([
        ...new Set(responseData.map((product) => product.category)),
      ]);
    });
  }, [response]);

  return (
    <React.Fragment>
      <Suspense fallback={<h1 style={{ textAlign: "center" }}>Loading...</h1>}>
        <Await resolve={response}>
          {shopCtx.categories.map((category) => (
            <Products key={category} category={category} />
          ))}
        </Await>
      </Suspense>
    </React.Fragment>
  );
};

export default HomePage;

async function loadProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const resData = await response.json();
  console.log(resData);
  return resData;
}

export function loader() {
  return defer({ fetchedProducts: loadProducts() });
}
