import { getCartSpanStyle } from "@/utils/helpers/productCartHelper";

const CartSpan = function ({ totalQuantity }) {
  const cartSpanStyle = getCartSpanStyle(totalQuantity);

  return (
    <span>
      Cart<span style={cartSpanStyle}>({totalQuantity})</span>
    </span>
  );
};

export default CartSpan;
