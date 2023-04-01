import classes from "./Products.module.scss";
import Button from "@/components/elements/Button/Button";
import ProductCard from "@/components/elements/ProductCard/ProductCard";
import ProductFullInfo from "@/components/elements/ProductFullInfo/ProductFullInfo";
import ModalWindow from "@/components/modules/ModalWindow/ModalWindow";
import { useEffect, useState } from "react";

const Products = function () {
  const [products, setProducts] = useState([]);
  const [currProduct, setCurrProduct] = useState(null);

  const closeModalWindowHandler = function () {
    setCurrProduct(null);
  };

  const cardClickHandler = function () {
    const clickedProductId = this;
    const clickedProduct = products.find(
      (product) => product["_id"] === clickedProductId
    );
    setCurrProduct(clickedProduct);
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <>
      <div className={classes["Products"]}>
        {products.map((product) => (
          <ProductCard
            product={product}
            click={cardClickHandler.bind(product["_id"])}
            key={product["_id"]}
          />
        ))}
      </div>
      <ModalWindow show={currProduct} closeHandler={closeModalWindowHandler}>
        <ProductFullInfo product={currProduct} />
      </ModalWindow>
    </>
  );
};

export default Products;
