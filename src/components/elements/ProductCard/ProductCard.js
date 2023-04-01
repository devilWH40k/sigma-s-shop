import classes from "./ProductCard.module.scss";
import starSVG from "@assets/ProductCard/star.svg";
import Image from "next/image";
import getConfig from "next/config";

const ProductCard = function ({ product }) {
  const { name, category, price, discount, rating, image } = product;
  const { publicRuntimeConfig } = getConfig();
  const productImageURL = `url("${publicRuntimeConfig.assetsFolder}/Products/${image}")`;

  return (
    <figure className={classes["ProductCard"]}>
      <span className={classes["ProductCard__category"]}>{category}</span>
      <div
        style={{ backgroundImage: productImageURL }}
        className={classes["ProductCard__img"]}
      ></div>
      <section className={classes["ProductCard__main-info"]}>
        <h6 className={classes["ProductCard__name"]}>{name}</h6>
        <footer className={classes["ProductCard__footer"]}>
          <div className={classes["ProductCard__pricing-block"]}>
            {discount ? (
              <span className={classes["ProductCard__full-price"]}>
                ${price.toFixed(2)}
              </span>
            ) : null}
            <span className={classes["ProductCard__price"]}>
              ${(price - discount).toFixed(2)}
            </span>
          </div>
          <div className={classes["ProductCard__rating"]}>
            {Array(rating)
              .fill(null)
              .map((_, index) => (
                <Image
                  src={starSVG}
                  alt="little star"
                  width={16}
                  height={16}
                  key={index}
                />
              ))}
          </div>
        </footer>
      </section>
    </figure>
  );
};

export default ProductCard;
