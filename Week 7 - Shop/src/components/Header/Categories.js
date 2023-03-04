import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ShopContext from "../../store/shop-context";
import classes from "./Category.module.css";

const Categories = (props) => {
  const shopCtx = useContext(ShopContext);
  const navigate = useNavigate();
  const searchInput = props.searchInput;

  const allProducts = () => {
    shopCtx.setProductID(0);
    shopCtx.setFilteredProducts(shopCtx.products);
    searchInput.current.value = "";
    navigate("/");
  };

  const filterCategory = (category) => {
    console.log(category);
    shopCtx.setFilteredProducts(
      shopCtx.products.filter((product) => product.category === category)
    );
  };

  return (
    <div className={classes.category}>
      <div className={classes.item} onClick={allProducts}>
        ALL
      </div>
      {shopCtx.categories.map((category) => (
        <div
          key={category}
          className={classes.item}
          href={"#" + category}
          onClick={() => filterCategory(category)}
        >
          {category.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default Categories;
