import React, { useState } from "react";

const ShopContext = React.createContext({
  products: [],
  setProducts: () => {},
  filteredProducts: [],
  setFilteredProducts: () => {},
  categories: [],
  setCategories: () => {},
  productID: [],
  setProductID: () => {},
});

export const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productID, setProductID] = useState(0);

  return (
    <ShopContext.Provider
      value={{
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        categories,
        setCategories,
        productID,
        setProductID,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
