import Products from "@/components/modules/Sections/DynamicSections/ProductSection/Products/Products";
import classes from "../../Sections.module.scss";

const ProductSection = function () {
  return (
    <section className={`${classes["section"]} ${classes["section--product"]}`}>
      <span
        className={`${classes["section__preheading"]} ${classes["section__preheading--default"]}`}
      >
        Categories
      </span>
      <h2 className={classes["section__heading"]}>Our Products</h2>
      <Products />
    </section>
  );
};

export default ProductSection;
