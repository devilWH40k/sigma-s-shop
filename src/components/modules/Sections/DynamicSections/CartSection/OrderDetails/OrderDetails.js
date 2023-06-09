import Button from "@/components/elements/Button/Button";
import OrderForm from "./OrderForm/OrderForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { reformateCartList } from "@/utils/helpers/productCartHelper";
import { emptyCart } from "@/store/slices/cartSlice";
import Loader from "@/components/elements/Loader/Loader";

const OrderDetails = function () {
  const router = useRouter();
  const cartList = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  if (loading) return <Loader />;

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
    setLoading(true);
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
    })
      .then(() => {
        dispatch(emptyCart());
        router.push("/cart/finished");
      })
      .finally(() => setLoading(false));
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
