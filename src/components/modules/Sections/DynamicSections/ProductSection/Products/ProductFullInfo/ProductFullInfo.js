import Button from "../../../../../../elements/Button/Button";
import PricingBlock from "../../../../../../elements/PricingBlock/PricingBlock";
import RatingStars from "../../../../../../elements/RatingStarts/RatingStarts";
import classes from "./ProductFullInfo.module.scss";
import getConfig from "next/config";

import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cartSlice";
import { useRef } from "react";
import TabComponent from "@/components/modules/TabComponent/TabComponent";

const ProductFullInfo = function ({ product, closeHandler }) {
  const quantityRef = useRef(null);
  const dispatch = useDispatch();

  if (!product) return null;

  const { name, category, price, discount, rating, image } = product;
  const { publicRuntimeConfig } = getConfig();
  const productImageURL = `url("${publicRuntimeConfig.assetsFolder}/Products/${image}")`;

  const addToCartHandler = function () {
    const quantity = quantityRef.current.valueAsNumber;
    if (quantity <= 0) return;
    dispatch(addToCart({ ...product, quantity }));
  };

  return (
    <div className={classes["ProdFI"]}>
      <aside
        style={{ backgroundImage: productImageURL }}
        className={classes["ProdFI__img"]}
      >
        <span className={classes["ProdFI__category"]}>{category}</span>
      </aside>
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
          ceased to been the industry&apos;s standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </span>
        <footer className={classes["ProdFI__add-block"]}>
          <span style={{ marginLeft: "0" }}>Quantity:</span>
          <input
            ref={quantityRef}
            type="number"
            defaultValue={1}
            min={1}
            max={99}
          />
          <Button
            onClick={() => {
              addToCartHandler();
              closeHandler();
            }}
            style={{ display: "inline-flex" }}
            type="dark-blue"
            withArrow
          >
            Add To Cart
          </Button>
        </footer>
      </main>
      <TabComponent
        style={{ marginTop: "90px" }}
        btnTitles={["Product Description", "Additional Info"]}
      >
        <span>
          A refrigerator is the best place to store pistachios if you don&apos;t
          plan to eat them all right away. Package them in an airtight container
          (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for
          up to a year. An airtight package helps prevent condensation, which
          would make them lose their crunch.
        </span>
        <span>
          Welcome to the world of natural and organic. Here you can discover the
          bounty of nature. We have grown on the principles of health, ecology,
          and care. We aim to give our customers a healthy chemical-free meal
          for perfect nutrition. It offers about 8–10% carbs. Simple sugars —
          such as glucose and fructose — make up 70% and 80% of the carbs in
          raw.
        </span>
      </TabComponent>
    </div>
  );
};

export default ProductFullInfo;
