import classes from "./Header.module.scss";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getTotalProductQuantity } from "@/utils/helpers/productCartHelper";
import Logo from "@/components/elements/Logo/Logo";
import NavList from "./NavList/NavList";
import Burger from "./Burger/Burger";
import RightSection from "./RightSection/RightSection";

const Header = function () {
  const headerRef = useRef(null);
  const cartList = useSelector((state) => state.cart.cartList);
  const totalQuantity = getTotalProductQuantity(cartList);

  useEffect(() => {
    const header = headerRef.current;

    const observer = new IntersectionObserver(
      ([e]) =>
        e.target.classList.toggle(
          classes["box-shadow"],
          e.intersectionRatio < 1
        ),
      { threshold: [1] }
    );

    observer.observe(header);
  }, [headerRef]);

  return (
    <header ref={headerRef} className={classes["Header"]}>
      <Logo />
      <Burger totalQuantity={totalQuantity} />
      <NavList totalQuantity={totalQuantity} />
      <RightSection totalQuantity={totalQuantity} />
    </header>
  );
};

export default Header;
