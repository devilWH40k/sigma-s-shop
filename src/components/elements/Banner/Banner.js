import Heading from "../Heading/Heading";
import classes from "./Banner.module.scss";

const Banner = function ({ title }) {
  return (
    <div className={classes["Banner"]}>
      <Heading type="h1">{title}</Heading>
    </div>
  );
};

export default Banner;
