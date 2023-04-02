import Heading from "@/components/elements/Heading/Heading";
import classes from "./Footer.module.scss";
import Logo from "@/components/elements/Logo/Logo";
import SocIcon from "@/components/elements/SocIcon/SocIcon";

import instaSVG from "@assets/Footer/instagram.svg";
import fbSVG from "@assets/Footer/fb.svg";
import twitterSVG from "@assets/Footer/twitter.svg";
import pintrestSVG from "@assets/Footer/pintrest.svg";

const Footer = function () {
  const boldTextClassStr = `${classes["Footer__text-block"]} ${classes["Footer__text-block--bold"]}`;

  return (
    <footer className={classes["Footer"]}>
      <main className={classes["Footer__main"]}>
        <section className={classes["Footer__section"]}>
          <Heading type="h5">Contact Us</Heading>
          <ul className={classes["Footer__list"]}>
            <li className={classes["Footer__list-item"]}>
              <span className={boldTextClassStr}>Email</span>
              <span className={classes["Footer__text-block"]}>
                needhelp@Organia.com
              </span>
            </li>
            <li className={classes["Footer__list-item"]}>
              <span className={boldTextClassStr}>Phone</span>
              <span className={classes["Footer__text-block"]}>666 888 888</span>
            </li>
            <li className={classes["Footer__list-item"]}>
              <span className={boldTextClassStr}>Address</span>
              <span className={classes["Footer__text-block"]}>
                88 road, borklyn street, USA
              </span>
            </li>
          </ul>
        </section>
        <figure className={classes["Footer__separator"]}></figure>
        <section className={classes["Footer__section"]}>
          <Logo />
          <span
            style={{ marginTop: "25px" }}
            className={classes["Footer__text-block"]}
          >
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing
          </span>
          <div className={classes["Footer__icons"]}>
            <SocIcon
              href="https://www.instagram.com/veganfood.health/"
              icon={instaSVG}
            />
            <SocIcon icon={fbSVG} />
            <SocIcon icon={twitterSVG} />
            <SocIcon icon={pintrestSVG} />
          </div>
        </section>
        <figure className={classes["Footer__separator"]}></figure>
        <section className={classes["Footer__section"]}>
          <Heading type="h5">Contact Us</Heading>
          <span className={classes["Footer__text-block"]}>Style Guide</span>
          <span className={classes["Footer__text-block"]}>404 Not Found</span>
          <span className={classes["Footer__text-block"]}>
            Password Protected
          </span>
          <span className={classes["Footer__text-block"]}>Licences</span>
          <span className={classes["Footer__text-block"]}>Changelog</span>
        </section>
      </main>
      <footer className={classes["Footer__bottom"]}>
        Copyright © <strong>Organick</strong> | Designed by{" "}
        <strong>VictorFlow</strong> Templates - Powered by{" "}
        <strong>Webflow</strong>
      </footer>
    </footer>
  );
};

export default Footer;
