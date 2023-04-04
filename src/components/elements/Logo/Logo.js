import logo from "@assets/Header/logo.png";
import Image from "next/image";

const Logo = function () {
  return <Image src={logo} alt="logo image" width={200} height={54} priority />;
};

export default Logo;
