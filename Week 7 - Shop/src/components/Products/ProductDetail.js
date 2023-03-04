import classes from "./ProductDetail.module.css";

const ProductDetail = (props) => {
  const product = props.product;
  return (
    <div className={classes.detail}>
      <img src={product.image} alt={product.title} />
      <div className={classes.bg}>
        <h3 className={classes.title}>{product.title}</h3>
        <h4 className={classes.tag}>{product.category}</h4>
        <div className={classes.pricestar}>
          <h1>{product.price} $</h1>
          <h3 className={classes.rating}>{product.rating.rate}/5</h3>
        </div>
        <p>{product.description}</p>
        <input type="button" value="Add To Cart" />
      </div>
    </div>
  );
};

export default ProductDetail;
