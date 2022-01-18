import AmountInput from "./Amount/AmountInput";
import styles from "./productDescription.css";

const productDescription = () => {
  return (
    <div className="product--description">
      <h4>sneaker company</h4>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="product--description_price">
        <h1>$125</h1>
        <div className="product--description_price--discount">50%</div>
      </div>
      <AmountInput />
    </div>
  );
};

export default productDescription;
