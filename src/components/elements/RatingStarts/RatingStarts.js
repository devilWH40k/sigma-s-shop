import starSVG from "@assets/ProductCard/star.svg";
import classes from "./RatingStars.module.scss";
import Image from "next/image";

const RatingStars = function ({ amount, ...otherProps }) {
  return (
    <div className={classes["RatingStars"]} {...otherProps}>
      {Array(amount)
        .fill(null)
        .map((_, index) => (
          <Image
            src={starSVG}
            alt="little star"
            width={16}
            height={16}
            key={index}
          />
        ))}
    </div>
  );
};

export default RatingStars;
