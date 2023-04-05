import classes from "../Header.module.scss";
import Link from "next/link";
import RightSection from "../RightSection/RightSection";

const NavList = function ({ totalQuantity }) {
  return (
    <>
      <ul className={classes["Header__nav-list"]}>
        <li className={classes["Header__nav-item"]}>
          <Link href="/">Home</Link>
        </li>
        <li className={classes["Header__nav-item"]}>
          <Link href="/#about" scroll={false}>
            About
          </Link>
        </li>
        <li className={classes["Header__nav-item"]}>
          <a href="#">Pages</a>
        </li>
        <li className={classes["Header__nav-item"]}>
          <Link href="/#shop" scroll={false}>
            Shop
          </Link>
        </li>
        <li className={classes["Header__nav-item"]}>
          <a href="#">Project</a>
        </li>
        <li className={classes["Header__nav-item"]}>
          <a href="#">News</a>
        </li>
        <RightSection
          totalQuantity={totalQuantity}
          className={`${classes["Header__right-section"]} ${classes["Header__right-section--mobile"]}`}
        />
      </ul>
    </>
  );
};

export default NavList;
