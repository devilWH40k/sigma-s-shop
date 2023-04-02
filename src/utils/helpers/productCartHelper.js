export const getTotalProductQuantity = function (cartList) {
  return cartList.reduce((sum, product) => (sum += product.quantity), 0);
};

export const getCartSpanStyle = function (totalQuantity) {
  if (totalQuantity === 0) return null;

  if (totalQuantity <= 9) return { color: "#f03e3e" };

  return { color: "#51cf66" };
};
