import React from "react";
import ProductPage from "@/components/pages/ProductPage";

const t = ({ params }) => {
  console.log(params, "params");
  return <ProductPage id={params.id} />;
};

export default t;
