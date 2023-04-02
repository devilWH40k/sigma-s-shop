import Image from "next/image";
import classes from "./SocIcon.module.scss";

const SocIcon = function ({
  icon,
  className = classes["SocIcon"],
  ...otherProps
}) {
  return (
    <a className={className} {...otherProps}>
      <Image alt="social media icon" src={icon} width={19} height={19} />
    </a>
  );
};

export default SocIcon;
