import React, { useContext } from "react";
import Product from "./Product.js";
import ShopContext from "../../store/shop-context.js";
import classes from "./Products.module.css";

const titleCase = (str) => {
  let splitStr = str.toLowerCase().split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
};

const Products = (props) => {
  const shopCtx = useContext(ShopContext);

  const filter = shopCtx.filteredProducts.filter(
    (product) => product.category === props.category
  );
  if (filter.length > 0) {
    return (
      <React.Fragment>
        <h1 className={classes.category}>{titleCase(props.category)}</h1>
        <div className={classes.items}>
          {filter.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </React.Fragment>
    );
  }
};

export default Products;
