"use client";
import React from "react";
import Product from "../product/product";
import { ProductsData } from "../../common/ProductsData";
import { IoMdArrowBack } from "react-icons/io";

import { useRouter } from "next/navigation";
import Visibility from "../utils/Visibility";

function ProductPage(props) {
  const router = useRouter();
  const dataSource = ProductsData.filter(
    (product) => product.id === parseInt(props.id)
  );
  const product = dataSource.length > 0 ? dataSource[0] : null;

  return (
    <div className="page-product">
      <Visibility visible={product}>
        <button onClick={() => router.back()}>
          <IoMdArrowBack />
        </button>
        <Product data={product} />
      </Visibility>
      <Visibility visible={!product}>
        <h1>Not Found</h1>
      </Visibility>
    </div>
  );
}

export default ProductPage;
