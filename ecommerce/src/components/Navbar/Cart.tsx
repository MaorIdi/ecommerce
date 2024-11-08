import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={`${styles.cartBtn}`}>
      <i className={`fa-light fa-cart-shopping`}></i>
    </div>
  );
};

export default Cart;
