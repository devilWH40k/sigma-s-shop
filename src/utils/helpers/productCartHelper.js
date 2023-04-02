export const getTotalProductQuantity = function (cartList) {
  return cartList.reduce((sum, product) => (sum += product.quantity), 0);
};

export const getTotalProductCost = function (cartList) {
  return cartList.reduce((sum, product) => {
    sum += (product.price - product.discount) * product.quantity;
    return sum;
  }, 0);
};

export const getTotalProductDiscount = function (cartList) {
  return cartList.reduce((sum, product) => {
    sum += product.discount * product.quantity;
    return sum;
  }, 0);
};

export const getCartSpanStyle = function (totalQuantity) {
  if (totalQuantity === 0) return null;

  if (totalQuantity <= 9) return { color: "#f03e3e" };

  return { color: "#51cf66" };
};
