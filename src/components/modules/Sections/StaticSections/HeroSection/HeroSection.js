import classes from "../StaticSections.module.scss";
import Button from "@/components/elements/Button/Button";

const HeroSection = function () {
  return (
    <section
      className={`${classes["section"]} ${classes["section--herro-banner"]}`}
    >
      <div className={classes["wrapper"]}>
        <span
          className={`${classes["section__preheading"]} ${classes["section__preheading--default"]}`}
        >
          100% Natural Food
        </span>
        <h1 className={classes["section__heading"]}>
          Choose the best healthier way of life
        </h1>
        <Button type="yellow" withArrow>
          Explore Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
