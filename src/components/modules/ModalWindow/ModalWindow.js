import classes from "./ModalWindow.module.scss";
import Button from "@/components/elements/Button/Button";

const ModalWindow = function ({ children, show, closeHandler }) {
  const closeBtnStyles = {
    position: "absolute",
    top: "50px",
    right: "50px",
    padding: "12px 22px",
    fontSize: "1.25rem",
  };

  return (
    <>
      <div
        style={{ display: show ? "block" : "none" }}
        className={classes["overlay"]}
        onClick={closeHandler}
      ></div>
      <div
        className={`${classes["ModalWindow"]} ${
          show ? classes["active"] : null
        }`}
      >
        <Button style={closeBtnStyles} type="dark-blue" onClick={closeHandler}>
          X
        </Button>
        {children}
      </div>
    </>
  );
};

export default ModalWindow;
