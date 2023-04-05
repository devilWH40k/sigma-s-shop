import classes from "../Header.module.scss";
import { getCartSpanStyle } from "@/utils/helpers/productCartHelper";

const Burger = function ({ totalQuantity }) {
  let spanStyle;
  if (totalQuantity) {
    const { color } = getCartSpanStyle(totalQuantity);
    spanStyle = { backgroundColor: color };
  } else {
    spanStyle = { display: "none" };
  }

  return (
    <>
      <input
        type="checkbox"
        name="burger-toggle"
        id={classes["burger-toggle"]}
        className={classes["burger-toggle"]}
      />
      <label className={classes["burger"]} htmlFor={classes["burger-toggle"]}>
        <div className={classes["burger__lines"]}></div>
        <span style={spanStyle} className={classes["burger__cart-info"]}>
          {totalQuantity}
        </span>
      </label>
    </>
  );
};

export default Burger;
