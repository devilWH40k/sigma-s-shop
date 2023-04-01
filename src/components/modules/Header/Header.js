import Image from "next/image";
import Link from "next/link";
import logo from "@assets/Header/logo.png";
import searchIcon from "@assets/Header/search-icon.svg";
import cartIcon from "@assets/Header/cart-icon.svg";

import classes from "./Header.module.scss";

const Header = function () {
  return (
    <header className={classes["Header"]}>
      <Image src={logo} alt="logo image" width={200} height={54} />
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
          Cart(0)
        </button>
      </div>
    </header>
  );
};

export default Header;
