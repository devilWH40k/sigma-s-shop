import Image from "next/image";
import classes from "./Button.module.scss";
import arrowSvg from "@assets/Button/arrow.svg";
import { forwardRef } from "react";

const Button = forwardRef(
  ({ children, type, withArrow, ...otherProps }, ref) => {
    {
      const TYPES = {
        yellow: classes["Button--yellow"],
        "dark-blue": classes["Button--dark-blue"],
      };

      return (
        <button
          ref={ref}
          className={`${classes["Button"]} ${TYPES[type]}`}
          {...otherProps}
        >
          {children}
          {withArrow ? (
            <Image
              className={classes["Button__arrow"]}
              src={arrowSvg}
              alt="small arrow"
              width={19}
              height={19}
            />
          ) : null}
        </button>
      );
    }
  }
);

export default Button;
