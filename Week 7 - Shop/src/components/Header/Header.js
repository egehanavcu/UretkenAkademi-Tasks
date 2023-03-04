import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Categories from "./Categories";
import ShopContext from "../../store/shop-context";
import classes from "./Header.module.css";

const Header = (props) => {
  const shopCtx = useContext(ShopContext);
  const navigate = useNavigate();
  const searchInput = useRef();

  const redirectHome = () => {
    searchInput.current.value = "";
    navigate("/");
  };

  const searchHandler = (event) => {
    shopCtx.setFilteredProducts(
      shopCtx.products.filter((product) =>
        product.title.toLowerCase().includes(event.target.value)
      )
    );
  };

  return (
    <React.Fragment>
      <div className={classes.header}>
        <div className={classes.logo}>
          <h1 onClick={redirectHome}>market</h1>
          <div className={classes.description}>
            <div className={classes.highlight}>fast</div>
            delivery
          </div>
        </div>
        <input
          className={classes.search}
          type="text"
          placeholder="Search product"
          onChange={searchHandler}
          ref={searchInput}
        />
      </div>
      <Categories searchInput={searchInput} />
    </React.Fragment>
  );
};

export default Header;
