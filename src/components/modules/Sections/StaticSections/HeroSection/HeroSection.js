import Heading from "@/components/elements/Heading/Heading";
import classes from "../../Sections.module.scss";
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
        <Heading style={{ marginTop: "10px", marginBottom: "22px" }} type="h1">
          Choose the best healthier way of life
        </Heading>
        <Button type="yellow" withArrow>
          Explore Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
