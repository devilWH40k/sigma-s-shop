import classes from "./Products.module.scss";
import Button from "@/components/elements/Button/Button";
import ProductCard from "@/components/elements/ProductCard/ProductCard";
import ProductFullInfo from "@/components/modules/Sections/DynamicSections/ProductSection/Products/ProductFullInfo/ProductFullInfo";
import ModalWindow from "@/components/modules/ModalWindow/ModalWindow";
import { useEffect, useState } from "react";

const Products = function () {
  const [loadMore, setLoadMore] = useState(true);
  const [products, setProducts] = useState([]);
  const [currProduct, setCurrProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const loadMoreHandler = function () {
    setLoadMore((prevloadMore) => !prevloadMore);
  };

  const closeModalWindowHandler = function () {
    setShowModal(false);
  };

  const cardClickHandler = function () {
    const clickedProductId = this;
    const clickedProduct = products.find(
      (product) => product["_id"] === clickedProductId
    );
    setCurrProduct(clickedProduct);
    setShowModal(true);
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const productsToRender = loadMore ? products.slice(0, 8) : products;

  return (
    <>
      <div className={classes["Products"]}>
        {productsToRender.map((product) => (
          <ProductCard
            product={product}
            click={cardClickHandler.bind(product["_id"])}
            key={product["_id"]}
          />
        ))}
      </div>
      <Button
        onClick={loadMoreHandler}
        style={{ marginTop: "100px" }}
        type="dark-blue"
        withArrow
      >
        {loadMore ? "Load More" : "Load Less"}
      </Button>
      <ModalWindow show={showModal} closeHandler={closeModalWindowHandler}>
        <ProductFullInfo
          closeHandler={closeModalWindowHandler}
          product={currProduct}
        />
      </ModalWindow>
    </>
  );
};

export default Products;
