import productImage1 from "../assets/images/image-product-1.jpg";
import productImage2 from "../assets/images/image-product-2.jpg";
import productImage3 from "../assets/images/image-product-3.jpg";
import productImage4 from "../assets/images/image-product-4.jpg";
import productImageThumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import productImageThumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import productImageThumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import productImageThumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";

import { useState } from "react";

import styles from "./ProductImage.css";
import ProductSlider from "./ProductSlider";

const productImages = [
  { preview: productImage1, thumbnail: productImageThumbnail1 },
  { preview: productImage2, thumbnail: productImageThumbnail2 },
  { preview: productImage3, thumbnail: productImageThumbnail3 },
  { preview: productImage4, thumbnail: productImageThumbnail4 },
];
const ProductImage = () => {
  const [state, setstate] = useState(1);

  const changePreviewImageHandler = (e) => {
    setstate(+e.target.alt.slice(-1));
  };

  return (
    <div className="product--image">
      <div className="product--image_preview">
        <ProductSlider imgSrc={productImages} />
        {
          <img
            className="product--image_preview--desktop"
            src={productImages[state - 1].preview}
            alt="preview"
          />
        }
      </div>
      <div className="product--image_thumbnail">
        {productImages.map((image) => (
          <img
            onClick={changePreviewImageHandler}
            className="product--images_thumbnail--item"
            src={image.thumbnail}
            alt={"productimage" + (productImages.indexOf(image) + 1)}
            key={productImages.indexOf(image) + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
