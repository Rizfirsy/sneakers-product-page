import styles from "./button.css";

const Button = (props) => {
  return <button className="custom--button">{props.children}</button>;
};

export default Button;
