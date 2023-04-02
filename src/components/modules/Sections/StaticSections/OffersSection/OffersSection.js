import Heading from "@/components/elements/Heading/Heading";
import classes from "../../Sections.module.scss";
import OfferCard from "@/components/elements/OfferCard/OfferCard";
import cardBg1 from "@assets/OffersSection/offer-card-bg1.png";
import cardBg2 from "@assets/OffersSection/offer-card-bg2.png";

const OffersSection = function () {
  return (
    <section className={`${classes["section"]} ${classes["section--offers"]}`}>
      <OfferCard bgImage={cardBg2.src} whiteText>
        <span className={classes["section__preheading"]}>Natural!!</span>
        <h3>Get Garden Fresh Fruits</h3>
      </OfferCard>
      <OfferCard bgImage={cardBg1.src}>
        <span
          className={`${classes["section__preheading"]} ${classes["section__preheading--default"]}`}
        >
          Offer!!
        </span>
        <Heading type="h3">Get 10% off on Vegetables</Heading>
      </OfferCard>
    </section>
  );
};

export default OffersSection;
