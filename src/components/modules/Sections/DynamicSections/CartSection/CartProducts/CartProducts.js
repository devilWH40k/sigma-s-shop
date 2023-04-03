import CartProductCard from "@/components/elements/CartProductCard/CartProductCard";
import classes from "./CartProducts.module.scss";
import { useSelector } from "react-redux";
import Heading from "@/components/elements/Heading/Heading";
import {
  getTotalProductCost,
  getTotalProductDiscount,
} from "@/utils/helpers/productCartHelper";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "@/store/slices/cartSlice";

const CartProducts = function () {
  const cartList = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();

  if (cartList.length === 0)
    return (
      <Heading type="h3">Feel free to add some products from the shop!</Heading>
    );

  const totalCost = getTotalProductCost(cartList);
  const totalDiscount = getTotalProductDiscount(cartList);

  const deleteFromCartHandler = function () {
    dispatch(deleteFromCart(this));
  };

  return (
    <div className={classes["CartProducts"]}>
      {cartList.map((product) => (
        <CartProductCard
          deleteHandler={deleteFromCartHandler}
          product={product}
          key={product["_id"]}
        />
      ))}
      <div className={classes["CartProducts__cart-pricing"]}>
        <Heading type="h3">Total Cost {totalCost}$</Heading>
        <Heading style={{ marginTop: "20px" }} type="h3">
          Discount {totalDiscount}$
        </Heading>
      </div>
    </div>
  );
};

export default CartProducts;
