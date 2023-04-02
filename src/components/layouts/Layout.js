import Footer from "../modules/Footer/Footer";
import Header from "../modules/Header/Header";

const Layout = function ({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
