import React from "react";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import { Link } from "react-router-dom";

function Product(props) {
  return (
    <Link to={`/products/${props.data.id}`}>
      <div className="product-card">
        <ProductImage data={props.data.images} />
        <ProductDetails data={props.data} />
      </div>
    </Link>
  );
}

export default Product;
