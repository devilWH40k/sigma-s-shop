import classes from "../../Sections.module.scss";
import CartProducts from "./CartProducts/CartProducts";
import OrderDetails from "./OrderDetails/OrderDetails";

const CartSection = function () {
  return (
    <section className={`${classes["section"]} ${classes["section--cart"]}`}>
      <CartProducts />
      <OrderDetails />
    </section>
  );
};

export default CartSection;
