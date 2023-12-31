import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Product from "../components/product/Product";
import { ProductsData } from "../common/ProductsData";
import { IoMdArrowBack } from "react-icons/io";
import Visibility from "../components/utils/Visibility";

function ProductPage() {
  const params = useParams();
  const naivgate = useNavigate();
  const dataSource = ProductsData.filter(
    (product) => product.id === parseInt(params.id)
  );
  const product = dataSource.length > 0 ? dataSource[0] : null;

  return (
    <div className="page-product">
      <Visibility visible={product}>
        <button onClick={() => naivgate(-1)}>
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
