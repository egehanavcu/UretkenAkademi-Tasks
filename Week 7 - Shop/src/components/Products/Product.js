import { Link } from "react-router-dom";
import classes from "./Product.module.css";

const Product = (props) => {
  const product = props.product;

  return (
    <div className={classes.item}>
      <Link to={`/product/${product.id}`} className={classes.product}>
        <img src={product.image} />
        <h4>{product.title}</h4>
        <h4 className={classes.price}>{product.price} $</h4>
      </Link>
    </div>
  );
};

export default Product;
