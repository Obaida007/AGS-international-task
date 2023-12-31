"use client";
import React, { useEffect, useRef, useState } from "react";
import { ProductsData } from "@/common/ProductsData";
import Product from "@/components/product/Product";
import { utils } from "@/utils/utils";
import Visibility from "@/components/utils/Visibility";
import Iterator from "@/components/utils/Iterator";

function Products() {
  const scrollView = useRef(null);

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const onScroll = () => {
    const ref = scrollView.current;
    setShowLeftArrow(ref.scrollLeft > 0);
    setShowRightArrow(
      Math.ceil(ref.scrollLeft) < ref.scrollWidth - ref.clientWidth
    );
  };

  useEffect(() => {
    // Simulate a fetch with a timeout
    utils.sleep().then(() => {
      setIsLoading(false);
    });
  }, []);

  const scrollLeft = () => {
    scrollView.current.scrollTo({
      left: scrollView.current.scrollLeft - 300, // Adjust the scroll amount as needed
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollView.current.scrollTo({
      left: scrollView.current.scrollLeft + 300, // Adjust the scroll amount as needed
      behavior: "smooth",
    });
  };

  const productRender = (product, index) => {
    return (
      <div className="card" key={product.id}>
        <Product data={product} />
      </div>
    );
  };

  return (
    <div className="main-page">
      <div className="title-section">
        <h3>Batteries</h3>
        <p>View all batteries</p>
      </div>
      <Visibility visible={isLoading}>
        <div className="loading-spinner"></div>
      </Visibility>
      <Visibility visible={!isLoading}>
        <div className="products" onScroll={onScroll} ref={scrollView}>
          <Visibility visible={showLeftArrow}>
            <div className="scroll-arrow left" onClick={scrollLeft}>
              &lt;
            </div>
          </Visibility>
          <Iterator data={ProductsData} render={productRender} />
          <Visibility visible={showRightArrow}>
            <div className="scroll-arrow right" onClick={scrollRight}>
              &gt;
            </div>
          </Visibility>
        </div>
      </Visibility>
    </div>
  );
}

export default Products;
