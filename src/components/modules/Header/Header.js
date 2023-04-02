import Image from "next/image";
import searchIcon from "@assets/Header/search-icon.svg";
import cartIcon from "@assets/Header/cart-icon.svg";

import classes from "./Header.module.scss";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getTotalProductQuantity } from "@/utils/helpers/productCartHelper";
import CartSpan from "@/components/elements/CartSpan/CartSpan";
import Logo from "@/components/elements/Logo/Logo";

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
      <ul className={classes["Header__nav-list"]}>
        <li className={classes["Header__nav-item"]}>
          <a href="#">Home</a>
        </li>
        <li className={classes["Header__nav-item"]}>
          <a href="#">About</a>
        </li>
        <li className={classes["Header__nav-item"]}>
          <a href="#">Pages</a>
        </li>
        <li className={classes["Header__nav-item"]}>
          <a href="#">Shop</a>
        </li>
        <li className={classes["Header__nav-item"]}>
          <a href="#">Project</a>
        </li>
        <li className={classes["Header__nav-item"]}>
          <a href="#">News</a>
        </li>
      </ul>
      <div className={classes["Header__right-section"]}>
        <div className={classes["wrapper"]}>
          <input type="text" className={classes["Header__search"]} />
          <button className={classes["Header__search-btn"]}>
            <Image src={searchIcon} alt="search icon" width={56} height={56} />
          </button>
        </div>
        <button className={classes["Header__cart-btn"]}>
          <Image src={cartIcon} alt="cart icon" width={56} height={56} />
          <CartSpan totalQuantity={totalQuantity} />
        </button>
      </div>
    </header>
  );
};

export default Header;
