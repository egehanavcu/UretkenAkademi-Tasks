import { Suspense, useContext } from "react";
import { Await, useRouteLoaderData, useParams } from "react-router-dom";

import ProductDetail from "../components/Products/ProductDetail";

const ProductPage = () => {
  const { productId } = useParams();
  const { fetchedProducts: response } = useRouteLoaderData("products");

  const showProductDetail = (response) => {
    const showedProduct = response.filter(
      (product) => product.id === Number(productId)
    )[0];
    return <ProductDetail product={showedProduct} />;
  };

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Await resolve={response}>
        {(resData) => showProductDetail(resData)}
      </Await>
    </Suspense>
  );
};

export default ProductPage;
