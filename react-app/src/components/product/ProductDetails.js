import React from "react";
import { CiHeart } from "react-icons/ci";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import Iterator from "../utils/Iterator";

function ProductDetails(props) {
  const propertyRender = (property, index) => <p key={index}>{property}</p>;

  const parameterRender = (parameter, index) => (
    <div key={index} className="parameter">
      <p className="title">{parameter.title}</p>
      <p className="value"> {parameter.value}</p>
    </div>
  );

  const websiteRender = (way, index) => (
    <div key={index} className="website">
      <img alt="logo" src={way} />
    </div>
  );

  return (
    <div className="product-details">
      <div className="category">
        <div className="status-chips">{props.data.category.status}</div>
        <div className="brand-chip">{props.data.category.brand}</div>
      </div>
      <div className="name-component">
        <p className="name">{props.data.name}</p>
        <div className="add-cart">
          <CiHeart style={{ fontSize: "24px" }} />
        </div>
      </div>
      <div className="product-info">
        <div className="product-propeties">
          <Iterator
            data={props.data.productPropeties}
            render={propertyRender}
          />
        </div>
        <div className="parameters">
          <Iterator data={props.data.parameters} render={parameterRender} />
        </div>
        <div className="line"></div>
        <div className="price-component">
          <div className="price">
            <p className="vat">Price Inclusive of VAT</p>
            <p className="price-number">{props.data.price} AED</p>
          </div>
          <div className="add-cart">
            <HiOutlineClipboardCheck style={{ fontSize: "24px" }} />
          </div>
        </div>
      </div>
      <div className="available">
        <p className="text">Also available on</p>
        <div className="websites-way">
          <Iterator data={props.data.avilableOn} render={websiteRender} />
        </div>
      </div>
      <div className="line"></div>
      <button className="buy-now">Buy now</button>
    </div>
  );
}

export default ProductDetails;
