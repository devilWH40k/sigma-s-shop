import classes from "../Header.module.scss";
import CartSpan from "@/components/elements/CartSpan/CartSpan";
import Link from "next/link";
import Image from "next/image";
import searchIcon from "@assets/Header/search-icon.svg";
import cartIcon from "@assets/Header/cart-icon.svg";

const RightSection = function ({
  totalQuantity,
  className = classes["Header__right-section"],
}) {
  return (
    <div className={className}>
      <div className={classes["wrapper"]}>
        <input type="text" className={classes["Header__search"]} />
        <button className={classes["Header__search-btn"]}>
          <Image src={searchIcon} alt="search icon" width={56} height={56} />
        </button>
      </div>
      <Link href="/cart" className={classes["Header__cart-btn"]}>
        <Image src={cartIcon} alt="cart icon" width={56} height={56} />
        <CartSpan totalQuantity={totalQuantity} />
      </Link>
    </div>
  );
};

export default RightSection;
