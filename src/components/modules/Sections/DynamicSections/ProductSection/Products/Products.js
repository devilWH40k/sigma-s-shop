import classes from "./Products.module.scss";
import Button from "@/components/elements/Button/Button";
import ProductCard from "@/components/elements/ProductCard/ProductCard";
import { useEffect, useState } from "react";

const Products = function () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className={classes["Products"]}>
      {products.map((product) => (
        <ProductCard product={product} key={product["_id"]} />
      ))}
    </div>
  );
};

export default Products;
