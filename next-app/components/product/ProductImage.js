import React, { useState } from "react";
import { utils } from "../../utils/utils";
import Iterator from "../utils/Iterator";
import Image from "next/image";

function ProductImage(props) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  const selectedImage = props.data[selectedImageIndex];

  const handleWheel = (event) => {
    const newZoomLevel = utils.zoomWheel(event.deltaY, zoomLevel);
    setZoomLevel(newZoomLevel);
  };

  const imgStyle = {
    transform: `scale(${zoomLevel})`,
    rotate: `${90 * selectedImageIndex}deg`,
  };

  const imgRender = (img, index) => (
    <div
      className="image-option"
      onMouseOver={() => setSelectedImageIndex(index)}
      key={index}
    >
      <Image src={img} alt="product" style={{ rotate: `${90 * index}deg` }} />
    </div>
  );

  return (
    <div className="image-details">
      <div className="image-display">
        <div className="image-frame" onWheel={handleWheel}>
          <Image src={selectedImage} alt="product" style={imgStyle} />
        </div>
        <p>Roll over image to zoom in</p>
      </div>
      <div className="images-options">
        <Iterator data={props.data} render={imgRender} />
      </div>
    </div>
  );
}

export default ProductImage;
