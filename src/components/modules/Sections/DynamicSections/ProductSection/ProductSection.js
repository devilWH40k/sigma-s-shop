import classes from "../StaticSections.module.scss";

const ProductSection = function () {
  return (
    <section
      className={`${classes["section"]} ${classes["section--product"]}`}
    ></section>
  );
};

export default ProductSection;
