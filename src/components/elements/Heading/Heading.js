import classes from "./Heading.module.scss";

const Heading = function ({
  children,
  type,
  className = classes["Heading"],
  ...otherProps
}) {
  const TYPES = {
    h1: (
      <h1 className={classes["Heading"]} {...otherProps}>
        {children}
      </h1>
    ),
    h2: (
      <h2 className={classes["Heading"]} {...otherProps}>
        {children}
      </h2>
    ),
    h3: (
      <h3 className={classes["Heading"]} {...otherProps}>
        {children}
      </h3>
    ),
    h4: (
      <h4 className={classes["Heading"]} {...otherProps}>
        {children}
      </h4>
    ),
    h5: (
      <h5 className={classes["Heading"]} {...otherProps}>
        {children}
      </h5>
    ),
    h6: (
      <h6 className={classes["Heading"]} {...otherProps}>
        {children}
      </h6>
    ),
  };

  return TYPES[type];
};

export default Heading;
