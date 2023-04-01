import classes from "./ProductCard.module.scss";
import getConfig from "next/config";
import RatingStars from "../RatingStarts/RatingStarts";
import PricingBlock from "../PricingBlock/PricingBlock";

const ProductCard = function ({ product, click }) {
  const { name, category, price, discount, rating, image } = product;
  const { publicRuntimeConfig } = getConfig();
  const productImageURL = `url("${publicRuntimeConfig.assetsFolder}/Products/${image}")`;

  return (
    <figure onClick={click} className={classes["ProductCard"]}>
      <span className={classes["ProductCard__category"]}>{category}</span>
      <div
        style={{ backgroundImage: productImageURL }}
        className={classes["ProductCard__img"]}
      ></div>
      <section className={classes["ProductCard__main-info"]}>
        <h6 className={classes["ProductCard__name"]}>{name}</h6>
        <footer className={classes["ProductCard__footer"]}>
          <PricingBlock price={price} discount={discount} />
          <RatingStars amount={rating} />
        </footer>
      </section>
    </figure>
  );
};

export default ProductCard;
