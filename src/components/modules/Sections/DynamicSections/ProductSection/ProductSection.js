import Products from "@/components/modules/Sections/DynamicSections/ProductSection/Products/Products";
import classes from "../../Sections.module.scss";
import Heading from "@/components/elements/Heading/Heading";

const ProductSection = function () {
  return (
    <section
      id="shop"
      className={`${classes["section"]} ${classes["section--product"]}`}
    >
      <span
        className={`${classes["section__preheading"]} ${classes["section__preheading--default"]}`}
      >
        Categories
      </span>
      <Heading type="h2" style={{ marginTop: "10px", marginBottom: "40px" }}>
        Our Products
      </Heading>
      <Products />
    </section>
  );
};

export default ProductSection;
