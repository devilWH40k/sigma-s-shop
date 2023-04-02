import classes from "../../Sections.module.scss";
import CartProducts from "./CartProducts/CartProducts";

const CartSection = function () {
  return (
    <section className={`${classes["section"]} ${classes["section--cart"]}`}>
      <CartProducts />
    </section>
  );
};

export default CartSection;
