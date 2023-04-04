import Button from "@/components/elements/Button/Button";
import OrderForm from "./OrderForm/OrderForm";
import { useState } from "react";
import { useSelector } from "react-redux";
import { reformateCartList } from "@/utils/helpers/productCartHelper";

const OrderDetails = function () {
  const cartList = useSelector((state) => state.cart.cartList);
  const [showForm, setShowForm] = useState(false);
  const isCartEmpty = cartList.length === 0;
  const displayOrNot =
    showForm || cartList.length === 0 ? { display: "none" } : null;
  const btnStyles = {
    margin: "80px auto 0",
    padding: "20px 40px",
    ...displayOrNot,
  };

  const showFormHandler = function () {
    setShowForm(true);
  };

  const submitFormHandler = function (e) {
    e.preventDefault();
    const formEl = e.target;
    const formDataObj = new FormData(formEl);

    const fullName = formDataObj.get("fullname");
    const email = formDataObj.get("email");
    const adress = formDataObj.get("adress");
    const phone = formDataObj.get("phone");
    const message = formDataObj.get("message");

    const reformatedCartList = reformateCartList(cartList);

    const order = {
      fullName,
      email,
      adress,
      phone,
      cartList: reformatedCartList,
      ...(message && { message }),
    };

    fetch("http://localhost:3000/api/orders", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    // handle error and redirecting to /cart/finished route
    //   .then((response) => response.json())
    //   .then((message) => console.log(message))
    //   .catch((error) => console.error(error));
  };

  return (
    <>
      <Button
        onClick={showFormHandler}
        style={btnStyles}
        type="dark-blue"
        withArrow
      >
        To order
      </Button>
      <OrderForm
        show={showForm}
        submit={submitFormHandler}
        isCartEmpty={isCartEmpty}
      />
    </>
  );
};

export default OrderDetails;
