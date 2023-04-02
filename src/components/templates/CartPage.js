import Banner from "../elements/Banner/Banner";
import CartSection from "../modules/Sections/DynamicSections/CartSection/CartSection";

const CartPage = function () {
  return (
    <main>
      <Banner title="Cart" />
      <CartSection />
    </main>
  );
};

export default CartPage;
