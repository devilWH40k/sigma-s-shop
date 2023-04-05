import { useRef } from "react";
import classes from "./OrderForm.module.scss";
import Button from "@/components/elements/Button/Button";

const OrderForm = function ({ show, submit, isCartEmpty }) {
  const formBtnRef = useRef(null);

  if (isCartEmpty && formBtnRef.current) formBtnRef.current.disabled = true;

  const inputHandler = function (e) {
    const input = e.target;
    if (!input.validity.valid) {
      input.classList.add(classes["invalid"]);
      return;
    }
    input.classList.remove(classes["invalid"]);
  };

  return (
    <form
      onSubmit={submit}
      className={classes["OrderForm"]}
      style={show ? { display: "block" } : { display: "none" }}
    >
      <main className={classes["OrderForm__main"]}>
        <div className={classes["OrderForm__input-wrapper"]}>
          <label htmlFor="fullname">Full Name*</label>
          <input
            className={classes["OrderForm__input"]}
            type="text"
            name="fullname"
            placeholder="your full name"
            onChange={inputHandler}
            id="fullname"
            maxLength={40}
            required
          />
        </div>
        <div className={classes["OrderForm__input-wrapper"]}>
          <label htmlFor="email">Your Email*</label>
          <input
            className={classes["OrderForm__input"]}
            type="email"
            name="email"
            placeholder="example@yourmail.com"
            onChange={inputHandler}
            id="email"
            maxLength={45}
            required
          />
        </div>
        <div className={classes["OrderForm__input-wrapper"]}>
          <label htmlFor="adress">Adress*</label>
          <input
            className={classes["OrderForm__input"]}
            type="text"
            name="adress"
            placeholder="your company  address"
            onChange={inputHandler}
            id="adress"
            maxLength={50}
            required
          />
        </div>
        <div className={classes["OrderForm__input-wrapper"]}>
          <label htmlFor="phone">Phone Number*</label>
          <input
            className={classes["OrderForm__input"]}
            type="text"
            name="phone"
            placeholder="enter your phone"
            onChange={inputHandler}
            id="phone"
            minLength={4}
            maxLength={20}
            pattern="^[\d()-\+]+$"
            required
          />
        </div>
        <div className={classes["OrderForm__input-wrapper"]}>
          <label htmlFor="message">Message</label>
          <textarea
            className={classes["OrderForm__input"]}
            rows={5}
            name="message"
            placeholder="some extra information"
            id="message"
            maxLength={600}
          />
        </div>
      </main>
      <Button
        ref={formBtnRef}
        style={{ margin: "50px auto 0" }}
        type="dark-blue"
      >
        Confirm
      </Button>
    </form>
  );
};

export default OrderForm;
