import classes from "./Loader.module.scss";

const Loader = function () {
  return (
    <div className={classes["wrapper"]}>
      <span className={classes["Loader"]}></span>
    </div>
  );
};

export default Loader;
