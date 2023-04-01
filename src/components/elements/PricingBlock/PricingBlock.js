import classes from "./PricingBlock.module.scss";

const PricingBlock = function ({ price, discount, ...otherProps }) {
  return (
    <div className={classes["PricingBlock"]} {...otherProps}>
      {discount ? (
        <span className={classes["PricingBlock__full-price"]}>
          ${price.toFixed(2)}
        </span>
      ) : null}
      <span className={classes["PricingBlock__price"]}>
        ${(price - discount).toFixed(2)}
      </span>
    </div>
  );
};

export default PricingBlock;
