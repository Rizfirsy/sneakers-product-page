import ProductImage from "./ProductImage";
import styles from "./containerPage.css";
import ProductDescription from "./ProductDescription";

const ContainerPage = () => {
  return (
    <div className="container--page section-max-width">
      <ProductImage />
      <ProductDescription />
    </div>
  );
};

export default ContainerPage;
