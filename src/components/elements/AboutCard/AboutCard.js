import classes from "./AboutCard.module.scss";
import Image from "next/image";

const AboutCard = function ({ children, image, ...otherProps }) {
  return (
    <figure className={classes["AboutCard"]} {...otherProps}>
      <Image
        className={classes["AboutCard__image"]}
        alt="card informative image"
        src={image}
        width={100}
        height={100}
      />
      {children}
    </figure>
  );
};

export default AboutCard;
