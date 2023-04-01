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
        <h3 className={classes["section__heading"]}>
          Get 10% off on Vegetables
        </h3>
      </OfferCard>
    </section>
  );
};

export default OffersSection;
