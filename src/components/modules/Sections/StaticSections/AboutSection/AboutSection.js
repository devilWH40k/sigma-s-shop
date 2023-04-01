import classes from "../../Sections.module.scss";
import Button from "@/components/elements/Button/Button";
import AboutCard from "@/components/elements/AboutCard/AboutCard";
import cardIcon1 from "@assets/AboutSection/about-card-icon1.png";
import cardIcon2 from "@assets/AboutSection/about-card-icon2.png";

const AboutSection = function () {
  return (
    <section className={`${classes["section"]} ${classes["section--about"]}`}>
      <div className={classes["wrapper"]}>
        <span
          className={`${classes["section__preheading"]} ${classes["section__preheading--default"]}`}
        >
          About Us
        </span>
        <h2 className={classes["section__heading"]}>
          We Believe in Working Accredited Farmers
        </h2>
        <span className={classes["section__text"]}>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry&apos;s standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </span>
        <AboutCard style={{ marginTop: "45px" }} image={cardIcon1}>
          <h6 className={classes["section__heading"]}>Organic Foods Only</h6>
          <span className={classes["section__text"]}>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum
          </span>
        </AboutCard>
        <AboutCard style={{ marginTop: "30px" }} image={cardIcon2}>
          <h6 className={classes["section__heading"]}>Quality Standards</h6>
          <span className={classes["section__text"]}>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum
          </span>
        </AboutCard>
        <Button style={{ marginTop: "45px" }} type="dark-blue" withArrow>
          Shop Now
        </Button>
      </div>
    </section>
  );
};

export default AboutSection;
