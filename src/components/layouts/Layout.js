import Header from "../modules/Header/Header";

const Layout = function ({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
