import Button from "../Button/Button";
import PricingBlock from "../PricingBlock/PricingBlock";
import RatingStars from "../RatingStarts/RatingStarts";
import classes from "./ProductFullInfo.module.scss";
import getConfig from "next/config";

const ProductFullInfo = function ({ product }) {
  if (!product) return null;

  const { name, category, price, discount, rating, image } = product;
  const { publicRuntimeConfig } = getConfig();
  const productImageURL = `url("${publicRuntimeConfig.assetsFolder}/Products/${image}")`;

  return (
    <div className={classes["ProdFI"]}>
      <aside
        style={{ backgroundImage: productImageURL }}
        className={classes["ProdFI__img"]}
      ></aside>
      <main className={classes["ProdFI__main-info"]}>
        <h3 className={classes["ProdFI__name"]}>{name}</h3>
        <RatingStars style={{ marginTop: "10px" }} amount={rating} />
        <PricingBlock
          style={{ marginTop: "10px" }}
          price={price}
          discount={discount}
        />
        <span style={{ display: "block", marginTop: "25px" }}>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </span>
        <footer className={classes["ProdFI__add-block"]}>
          <span style={{ marginLeft: "0" }}>Quantity:</span>
          <input type="number" defaultValue={1} max={99} />
          <Button style={{ display: "inline-flex" }} type="dark-blue" withArrow>
            Add To Cart
          </Button>
        </footer>
      </main>
    </div>
  );
};

export default ProductFullInfo;
