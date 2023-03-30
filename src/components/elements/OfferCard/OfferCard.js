import classes from "./OfferCard.module.scss";

const OfferCard = function ({ children, whiteText, bgImage }) {
  const bgImageProperty = `url("${bgImage}")`;
  const cardClasses = [classes["OfferCard"]];
  whiteText && cardClasses.push(classes["OfferCard--white-text"]);

  return (
    <figure
      style={{
        background: bgImageProperty,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={cardClasses.join(" ")}
    >
      <div className={classes["wrapper"]}>{children}</div>
    </figure>
  );
};

export default OfferCard;
