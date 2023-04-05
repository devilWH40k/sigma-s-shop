import classes from "../Header.module.scss";

const Burger = function () {
  return (
    <>
      <input
        type="checkbox"
        name="burger-toggle"
        id={classes["burger-toggle"]}
        className={classes["burger-toggle"]}
      />
      <label className={classes["burger"]} htmlFor={classes["burger-toggle"]}>
        <div className={classes["burger__lines"]}></div>
      </label>
    </>
  );
};

export default Burger;
