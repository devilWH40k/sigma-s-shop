import classes from "./CartProductCard.module.scss";
import getConfig from "next/config";
import PricingBlock from "../PricingBlock/PricingBlock";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";

const CartProductCard = function ({ product }) {
  const { name, price, discount, image, quantity } = product;
  const { publicRuntimeConfig } = getConfig();
  const productImageURL = `url("${publicRuntimeConfig.assetsFolder}/Products/${image}")`;

  return (
    <figure className={classes["CartProductCard"]}>
      <main className={classes["CartProductCard__main"]}>
        <div
          style={{ backgroundImage: productImageURL }}
          className={classes["CartProductCard__img"]}
        ></div>
        <div className={classes["wrapper"]}>
          <Heading style={{ marginBottom: "8px" }} type="h3">
            {name}
          </Heading>
          <PricingBlock price={price} discount={discount} />
        </div>
      </main>
      <aside className={classes["CartProductCard__aside"]}>
        <span className={classes["CartProductCard__quantity-label"]}>
          Quantity:
        </span>
        <div className={classes["CartProductCard__quantity"]}>
          <span>{quantity}</span>
        </div>
        <Button
          style={{ padding: "12px 22px", marginLeft: "50px" }}
          type="dark-blue"
        >
          X
        </Button>
      </aside>
    </figure>
  );
};

export default CartProductCard;
